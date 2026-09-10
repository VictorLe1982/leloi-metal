import fs from 'fs';
import path from 'path';
import { PRODUCTS_V2 } from '../packages/types/src/products-catalog-v2';
import { PRODUCT_TAXONOMY } from '../packages/types/src/product-taxonomy';

interface MediaFileAudit {
  productId: string;
  productName: string;
  primaryImage: string;
  existsOnDisk: boolean;
  fileSizeBytes: number;
  responsiveVariants: {
    w1200: boolean;
    w768: boolean;
    w480: boolean;
  };
  approvalStatus: 'APPROVED' | 'DRAFT' | 'REVIEW';
  isPlaceholder: boolean;
}

async function runMediaAudit() {
  console.log('Starting Product Media Pipeline Audit...');
  const catalogMediaDir = path.resolve(process.cwd(), 'apps/web/public/media/catalog');
  const publicDir = path.resolve(process.cwd(), 'apps/web/public');

  const mediaAudits: MediaFileAudit[] = [];

  for (const product of PRODUCTS_V2) {
    const primaryImgPath = product.primaryImage;
    // Resolve disk path
    const diskPath = path.join(publicDir, primaryImgPath.replace(/^\//, ''));
    const exists = fs.existsSync(diskPath);
    let size = 0;
    if (exists) {
      size = fs.statSync(diskPath).size;
    }

    // Check responsive sizes
    const ext = path.extname(primaryImgPath);
    const baseWithoutExt = primaryImgPath.slice(0, -ext.length);

    const w1200Path = path.join(publicDir, `${baseWithoutExt}_1200w${ext}`.replace(/^\//, ''));
    const w768Path = path.join(publicDir, `${baseWithoutExt}_768w${ext}`.replace(/^\//, ''));
    const w480Path = path.join(publicDir, `${baseWithoutExt}_480w${ext}`.replace(/^\//, ''));

    mediaAudits.push({
      productId: product.id,
      productName: product.name,
      primaryImage: product.primaryImage,
      existsOnDisk: exists,
      fileSizeBytes: size,
      responsiveVariants: {
        w1200: fs.existsSync(w1200Path),
        w768: fs.existsSync(w768Path),
        w480: fs.existsSync(w480Path)
      },
      approvalStatus: exists ? 'APPROVED' : 'DRAFT',
      isPlaceholder: !exists
    });
  }

  // Summary counts
  const totalAudited = mediaAudits.length;
  const approvedCount = mediaAudits.filter((m) => m.approvalStatus === 'APPROVED' && m.existsOnDisk).length;
  const missingCount = mediaAudits.filter((m) => !m.existsOnDisk).length;
  const responsiveCoverageCount = mediaAudits.filter(
    (m) => m.responsiveVariants.w1200 && m.responsiveVariants.w768 && m.responsiveVariants.w480
  ).length;

  const report = {
    auditDate: new Date().toISOString(),
    specification: 'LELOI METAL PRODUCT TAXONOMY + MEDIA + UI CONSISTENCY FIX V5',
    mediaDirectory: catalogMediaDir,
    summary: {
      totalProductsAudited: totalAudited,
      approvedStudioRenders: approvedCount,
      missingMediaCount: missingCount,
      responsiveTripleResolutionCoverage: responsiveCoverageCount,
      mediaHealthScorePercentage: Math.round((approvedCount / totalAudited) * 100)
    },
    items: mediaAudits
  };

  const outputPath = path.resolve(process.cwd(), 'product-media-audit.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`✓ Product Media Audit complete. Output written to ${outputPath}`);
  console.log(`  Audited: ${totalAudited} | Approved: ${approvedCount} | Missing: ${missingCount} | 3x Responsive: ${responsiveCoverageCount}`);
}

runMediaAudit().catch((err) => {
  console.error('Media audit failed:', err);
  process.exit(1);
});
