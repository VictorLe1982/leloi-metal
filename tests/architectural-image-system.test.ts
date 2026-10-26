import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  ARCHITECTURAL_MEDIA_MANIFEST,
  ARCHITECTURAL_CATEGORY_MEDIA_MAP,
  getArchitecturalMediaBySlug,
  getArchitecturalMediaForSection
} from '../packages/types/src/data/architectural-media';

describe('LELOI METAL — Architectural Image System Verification', () => {
  const rootDir = path.resolve(__dirname, '..');
  const webPublicDir = path.join(rootDir, 'apps', 'web', 'public');

  test('Manifest has exactly 11 approved assets', () => {
    assert.strictEqual(ARCHITECTURAL_MEDIA_MANIFEST.length, 11);
    ARCHITECTURAL_MEDIA_MANIFEST.forEach(asset => {
      assert.strictEqual(asset.status, 'approved');
      assert.ok(asset.id.startsWith('arch-media-'));
      assert.ok(asset.title.length > 5);
      assert.ok(asset.alt.length > 10);
      assert.ok(asset.caption.length > 10);
      assert.ok(asset.pageSections.length > 0);
    });
  });

  test('All 11 master archive source PNG files exist on disk', () => {
    ARCHITECTURAL_MEDIA_MANIFEST.forEach(asset => {
      const relativeSource = asset.sourceFile.replace(/^\//, '');
      const fullPath = path.join(rootDir, relativeSource);
      assert.ok(
        fs.existsSync(fullPath),
        `Master archive file must exist: ${fullPath}`
      );
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 10000, `File ${fullPath} must not be empty`);
    });
  });

  test('All 55 responsive WebP variants exist on disk and are non-empty', () => {
    ARCHITECTURAL_MEDIA_MANIFEST.forEach(asset => {
      const variants = Object.entries(asset.outputFiles);
      assert.strictEqual(variants.length, 5, `Asset ${asset.id} must have 5 variants`);

      variants.forEach(([variantName, webpUrl]) => {
        const relativeWebPath = webpUrl.replace(/^\//, '');
        const fullDiskPath = path.join(webPublicDir, relativeWebPath);
        assert.ok(
          fs.existsSync(fullDiskPath),
          `Responsive variant [${variantName}] must exist at: ${fullDiskPath}`
        );
        const stat = fs.statSync(fullDiskPath);
        assert.ok(
          stat.size > 2000,
          `Responsive variant [${variantName}] at ${fullDiskPath} must be valid size (>2KB)`
        );
      });
    });
  });

  test('Architectural Category Media Map resolves all key architectural categories', () => {
    const requiredCategories = [
      'windows-doors',
      'curtain-wall-facade',
      'louvers-sunshade',
      'wall-cladding',
      'ceiling-systems',
      'pergola',
      'bungalow-resort',
      'railing-balustrade',
      'thermal-break'
    ];

    requiredCategories.forEach(cat => {
      const asset = ARCHITECTURAL_CATEGORY_MEDIA_MAP[cat];
      assert.ok(asset, `Category map must include ${cat}`);
      assert.ok(asset.outputFiles.card, `Category ${cat} must have card variant`);
    });
  });

  test('Helper functions retrieve valid manifest records', () => {
    const heroAsset = getArchitecturalMediaBySlug('architectural-windows-doors-hero-01');
    assert.ok(heroAsset);
    assert.strictEqual(heroAsset?.id, 'arch-media-hero-01');

    const galleryAssets = getArchitecturalMediaForSection('application-gallery');
    assert.ok(galleryAssets.length >= 4, 'Must have at least 4 application-gallery assets');
  });

  test('Golden Template does not contain legacy extrusion renders in hero or cards', () => {
    const goldenPagePath = path.join(
      rootDir,
      'apps',
      'web',
      'src',
      'app',
      'products',
      'architectural',
      'windows-doors',
      'page.tsx'
    );
    const content = fs.readFileSync(goldenPagePath, 'utf8');

    // Must not use generic product render placeholders
    assert.doesNotMatch(
      content,
      /\/images\/products\/architectural-systems\/window-door\/hero\.webp/,
      'Golden template must not use old generic hero placeholder'
    );
    assert.doesNotMatch(
      content,
      /\/images\/products\/architectural-systems\/thermal-break\/hero\.webp/,
      'Golden template must not use old generic thermal break hero placeholder'
    );
    assert.match(
      content,
      /\/media\/architectural\/hero\/architectural-windows-doors-hero-01\.webp/,
      'Golden template must reference new architectural hero'
    );
  });

  test('Sliding Window Deep Page uses genuine architectural media', () => {
    const deepPagePath = path.join(
      rootDir,
      'apps',
      'web',
      'src',
      'app',
      'products',
      'architectural',
      'windows-doors',
      'sliding-window',
      'page.tsx'
    );
    const content = fs.readFileSync(deepPagePath, 'utf8');

    assert.doesNotMatch(
      content,
      /\/images\/products\/architectural-systems\/window-door\/hero\.webp/,
      'Sliding window deep page must not use old generic hero'
    );
    assert.match(
      content,
      /\/media\/architectural\/(hero|gallery)\/architectural-sliding-door-gallery-01\.webp/,
      'Sliding window deep page must reference sliding media'
    );
  });
});
