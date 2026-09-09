import { PrismaClient, Role, PublicationStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting LELOI METAL Database Seeding...');

  // 1. Super Admin User
  const adminEmail = 'admin@leloimetal.com';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('LeloiMetal@2026Secure!', 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        firstName: 'System',
        lastName: 'Admin',
        role: Role.SUPER_ADMIN,
        isActive: true
      }
    });
    console.log(`✅ Super Admin created: ${adminEmail}`);
  }

  // 2. Product Categories (6 Core Lines from Blueprint Section 5)
  const categories = [
    {
      slug: 'custom-aluminium-extrusions',
      name: 'Custom Aluminium Extrusions',
      description: 'Precision engineered custom profiles for global OEM sourcing, tailored to exact dimensional and alloy tolerances.',
      sortOrder: 1
    },
    {
      slug: 'industrial-aluminium-profiles',
      name: 'Industrial Aluminium Profiles',
      description: 'Modular T-slot profiles, conveyor guides, cleanroom structures and heavy-duty automation framing systems.',
      sortOrder: 2
    },
    {
      slug: 'solar-aluminium-profiles',
      name: 'Solar Aluminium Profiles',
      description: 'High-strength solar panel frames, ground-mount rails, carport structures, BIPV profiles and mounting clamps.',
      sortOrder: 3
    },
    {
      slug: 'architectural-aluminium',
      name: 'Architectural Aluminium Systems',
      description: 'High-performance facade extrusions, thermal-break window/door profiles, curtain walls, louvers and pergolas.',
      sortOrder: 4
    },
    {
      slug: 'heat-sink-profiles',
      name: 'Heat Sink / Thermal Profiles',
      description: 'High-efficiency thermal management extrusions for power electronics, LED lighting, EV charging and energy storage.',
      sortOrder: 5
    },
    {
      slug: 'oem-aluminium-components',
      name: 'OEM Aluminium Components',
      description: 'Full-cycle turnkey manufacturing: Drawing -> DFM -> Die -> Extrusion -> CNC Machining -> Surface -> QC -> Export.',
      sortOrder: 6
    }
  ];

  for (const cat of categories) {
    const categoryRecord = await prisma.productCategory.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat
    });

    // Create a featured product under each category
    const productSlug = `${cat.slug}-standard`;
    await prisma.product.upsert({
      where: { slug: productSlug },
      update: {},
      create: {
        categoryId: categoryRecord.id,
        slug: productSlug,
        name: `${cat.name} - Engineering Grade`,
        summary: cat.description,
        description: `Precision manufactured ${cat.name.toLowerCase()} produced in Vietnam according to international ASTM, EN 755 and JIS standards.`,
        alloys: ['6063', '6061', '6005A', '6082'],
        tempers: ['T5', 'T6', 'T66'],
        minWallMm: 0.8,
        maxLengthMm: 12000,
        surfaceFinishes: ['Mill Finish', 'Anodized Clear (10-25µm)', 'Anodized Black', 'Powder Coated (AAMA 2604)'],
        applications: ['Automotive', 'Electronics', 'Renewable Energy', 'Building & Construction'],
        hsCodes: ['7604.21', '7604.29'],
        moqKg: 1000,
        isPublished: true,
        publicationStatus: PublicationStatus.VERIFIED,
        verifiedAt: new Date(),
        verifiedBy: 'System Architect'
      }
    });
  }
  console.log(`✅ 6 Product Categories and Canonical Products seeded`);

  // 3. Factory Capabilities (10 Core Capabilities with UNVERIFIED safeguard)
  const capabilities = [
    {
      slug: 'aluminium-extrusion',
      process: 'Aluminium Extrusion',
      machineName: 'Precision Extrusion Lines',
      machineModel: 'Automated Extrusion System',
      machineCapacity: 'Press lines with automated pullers and cooling tables',
      notes: 'Specific press tonnages (GAP-01) and annual capacity pending factory audit.'
    },
    {
      slug: 'die-design',
      process: 'Die Design & Engineering',
      machineName: 'CAD/CAM Die Design Lab',
      machineModel: 'SolidWorks, AutoCAD & Extrusion Simulation',
      machineCapacity: 'In-house DFM review and die correction tooling',
      notes: 'Die lifespan and tooling capacity pending verification.'
    },
    {
      slug: 'cnc-machining',
      process: 'CNC Machining & Milling',
      machineName: 'Multi-Axis CNC Machining Centers',
      machineModel: '3-Axis & 4-Axis Long-Bed Centers',
      machineCapacity: 'Precision milling, slotting, and contouring up to multi-meter lengths',
      notes: 'Exact machine counts and axis envelope pending verification.'
    },
    {
      slug: 'precision-cutting',
      process: 'Precision Cutting',
      machineName: 'High-Precision Double-Miter Saws',
      machineModel: 'Automatic CNC Saws with digital angle positioning',
      machineCapacity: 'Tight tolerance cut-to-length profile processing',
      notes: 'Tolerance class (ISO 2768) pending audit.'
    },
    {
      slug: 'drilling-tapping',
      process: 'Drilling, Tapping & Punching',
      machineName: 'Multi-Spindle Drilling & Hydraulic Punching',
      machineModel: 'Automated hole pattern stations',
      machineCapacity: 'High-speed hole punching and threading',
      notes: 'Verified process capability.'
    },
    {
      slug: 'anodizing',
      process: 'Anodizing Surface Treatment',
      machineName: 'Anodizing & Electro-Coloring Line',
      machineModel: 'Automated tank hoist system',
      machineCapacity: 'Clear, black, bronze and custom architectural finishes',
      notes: 'Micron layer depth audit in progress.'
    },
    {
      slug: 'powder-coating',
      process: 'Powder Coating',
      machineName: 'Vertical & Horizontal Powder Coating Line',
      machineModel: 'AAMA 2603/2604/2605 compliant booth',
      machineCapacity: 'Architectural and industrial powder coatings with pre-treatment',
      notes: 'Salt spray testing hours pending lab reports.'
    },
    {
      slug: 'fabrication',
      process: 'Fabrication & Forming',
      machineName: 'Bending, Deburring & Stamping Units',
      machineModel: 'Hydraulic press brakes and roll benders',
      machineCapacity: 'Custom fabrication to customer drawing specification',
      notes: 'Bending radius limits pending audit.'
    },
    {
      slug: 'assembly',
      process: 'Sub-Assembly & Kitting',
      machineName: 'Clean Assembly & Kitting Lines',
      machineModel: 'Hardware insertion, gasket assembly and custom retail packaging',
      machineCapacity: 'Export-ready palletized kits with barcode labeling',
      notes: 'Verified packaging standards.'
    },
    {
      slug: 'quality-control',
      process: 'Quality Control & Metrology',
      machineName: 'QC Laboratory & Measurement Suite',
      machineModel: 'CMM, Optical Profile Projector, Spectrometer, Web-hardness tester',
      machineCapacity: 'Full dimensional inspection, chemical analysis and mechanical testing reports (MTR)',
      notes: 'Formal ISO certificate PDF uploads pending (GAP-06).'
    }
  ];

  for (const cap of capabilities) {
    await prisma.factoryCapability.upsert({
      where: { slug: cap.slug },
      update: cap,
      create: {
        ...cap,
        verified: false,
        verificationStatus: PublicationStatus.UNVERIFIED,
        notes: cap.notes
      }
    });
  }
  console.log(`✅ 10 Factory Capabilities seeded (Marked UNVERIFIED as per truth policy)`);

  // 4. Initial Target Markets (7 Priority Markets)
  const markets = [
    { countryCode: 'CA', name: 'Canada', region: 'North America', status: 'RESEARCH_REQUIRED', productFit: ['solar-aluminium-profiles', 'custom-aluminium-extrusions', 'industrial-aluminium-profiles'] },
    { countryCode: 'JP', name: 'Japan', region: 'East Asia', status: 'RESEARCH_REQUIRED', productFit: ['industrial-aluminium-profiles', 'oem-aluminium-components', 'heat-sink-profiles'] },
    { countryCode: 'KR', name: 'South Korea', region: 'East Asia', status: 'RESEARCH_REQUIRED', productFit: ['solar-aluminium-profiles', 'heat-sink-profiles', 'oem-aluminium-components'] },
    { countryCode: 'DE', name: 'Germany', region: 'Europe', status: 'RESEARCH_REQUIRED', productFit: ['custom-aluminium-extrusions', 'industrial-aluminium-profiles', 'heat-sink-profiles'] },
    { countryCode: 'NL', name: 'Netherlands', region: 'Europe', status: 'RESEARCH_REQUIRED', productFit: ['solar-aluminium-profiles', 'custom-aluminium-extrusions'] },
    { countryCode: 'AE', name: 'United Arab Emirates', region: 'Middle East', status: 'RESEARCH_REQUIRED', productFit: ['architectural-aluminium', 'solar-aluminium-profiles'] },
    { countryCode: 'SA', name: 'Saudi Arabia', region: 'Middle East', status: 'RESEARCH_REQUIRED', productFit: ['solar-aluminium-profiles', 'architectural-aluminium'] }
  ];

  for (const m of markets) {
    await prisma.market.upsert({
      where: { countryCode: m.countryCode },
      update: m,
      create: {
        ...m,
        lastReviewedAt: new Date()
      }
    });
  }
  console.log(`✅ 7 Priority Target Markets seeded`);

  console.log('🏁 Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error('Error during database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
