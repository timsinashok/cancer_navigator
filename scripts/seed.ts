import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  await prisma.communityPost.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.userPlanStep.deleteMany();
  await prisma.userPlan.deleteMany();
  await prisma.provider.deleteMany();
  await prisma.careStep.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️ Cleared existing data');

  // Seed Care Steps
  const careSteps = [
    // Breast Cancer Steps
    {
      cancerType: 'Breast Cancer',
      stage: 'Unknown',
      stepOrder: 1,
      stepTitle: 'Confirm pathology and obtain your report',
      stepDescription: 'Request your histopathology report from your doctor. This confirms the cancer type and helps guide treatment decisions.'
    },
    {
      cancerType: 'Breast Cancer',
      stage: 'Unknown',
      stepOrder: 2,
      stepTitle: 'Book oncologist consultation',
      stepDescription: 'Bring all reports, medication list, and questions. Consider bringing a family member or friend for support.'
    },
    {
      cancerType: 'Breast Cancer',
      stage: 'Unknown',
      stepOrder: 3,
      stepTitle: 'Schedule baseline imaging',
      stepDescription: 'CT/MRI/PET scans as ordered by your oncologist to determine the extent of disease.'
    },
    {
      cancerType: 'Breast Cancer',
      stage: 'Unknown',
      stepOrder: 4,
      stepTitle: 'Discuss treatment options',
      stepDescription: 'Review surgery, chemotherapy, radiation, hormonal therapy, and targeted therapy options with your care team.'
    },
    {
      cancerType: 'Breast Cancer',
      stage: 'Unknown',
      stepOrder: 5,
      stepTitle: 'Join local support group',
      stepDescription: 'Connect with others who understand your journey. Peer support improves treatment adherence and emotional well-being.'
    },
    // Lung Cancer Steps
    {
      cancerType: 'Lung Cancer',
      stage: 'Unknown',
      stepOrder: 1,
      stepTitle: 'Confirm diagnosis with pathology',
      stepDescription: 'Ensure you have a confirmed pathology report and all relevant imaging studies.'
    },
    {
      cancerType: 'Lung Cancer',
      stage: 'Unknown',
      stepOrder: 2,
      stepTitle: 'Consult with thoracic oncologist',
      stepDescription: 'Meet with a specialist who focuses on lung cancer treatment options.'
    },
    {
      cancerType: 'Lung Cancer',
      stage: 'Unknown',
      stepOrder: 3,
      stepTitle: 'Complete staging workup',
      stepDescription: 'PET scan, brain MRI, and any other tests to determine the exact stage.'
    },
    {
      cancerType: 'Lung Cancer',
      stage: 'Unknown',
      stepOrder: 4,
      stepTitle: 'Discuss molecular testing',
      stepDescription: 'Ask about EGFR, ALK, and other biomarker testing that may guide treatment.'
    },
    {
      cancerType: 'Lung Cancer',
      stage: 'Unknown',
      stepOrder: 5,
      stepTitle: 'Meet with pulmonary rehabilitation',
      stepDescription: 'Get support for breathing exercises and physical conditioning.'
    }
  ];

  for (const step of careSteps) {
    await prisma.careStep.create({
      data: step
    });
  }
  console.log('✅ Seeded care steps');

  // Seed Providers for Abu Dhabi
  const providers = [
    {
      name: 'Cleveland Clinic Abu Dhabi',
      category: 'Hospital',
      city: 'Abu Dhabi',
      address: 'Al Maryah Island, Abu Dhabi',
      lat: 24.4813,
      lng: 54.3679,
      phone: '+971 2 659 0200',
      website: 'https://www.clevelandclinicabudhabi.ae',
      blurb: 'Comprehensive oncology center with multidisciplinary team and advanced treatment options.'
    },
    {
      name: 'Sheikh Shakhbout Medical City',
      category: 'Hospital',
      city: 'Abu Dhabi',
      address: 'Al Mafraq, Abu Dhabi',
      lat: 24.3423,
      lng: 54.6102,
      phone: '+971 2 314 4444',
      website: 'https://ssmc.ae',
      blurb: 'Tertiary care with advanced oncology services and clinical trials.'
    },
    {
      name: 'Burjeel Medical City',
      category: 'Hospital',
      city: 'Abu Dhabi',
      address: 'Muroor Road, Abu Dhabi',
      lat: 24.4758,
      lng: 54.3763,
      phone: '+971 2 631 4444',
      website: 'https://www.burjeel.com',
      blurb: 'Multi-specialty hospital with comprehensive cancer care services.'
    },
    {
      name: 'Dr. Sarah Johnson Oncology Clinic',
      category: 'Oncologist',
      city: 'Abu Dhabi',
      address: 'Khalidiyah, Abu Dhabi',
      lat: 24.4856,
      lng: 54.3782,
      phone: '+971 2 622 1111',
      website: 'https://www.drsarahjohnson.ae',
      blurb: 'Specialist in breast cancer treatment with 15+ years experience.'
    },
    {
      name: 'Abu Dhabi Radiation Oncology Center',
      category: 'Oncologist',
      city: 'Abu Dhabi',
      address: 'Al Bateen, Abu Dhabi',
      lat: 24.4823,
      lng: 54.3456,
      phone: '+971 2 666 7777',
      website: 'https://www.adroc.ae',
      blurb: 'State-of-the-art radiation therapy with advanced technology.'
    },
    {
      name: 'Al Borg Medical Laboratories',
      category: 'Lab',
      city: 'Abu Dhabi',
      address: 'Multiple locations across Abu Dhabi',
      lat: 24.4667,
      lng: 54.3667,
      phone: '+971 2 555 8888',
      website: 'https://www.alborglab.com',
      blurb: 'Full-service laboratory with specialized pathology services.'
    },
    {
      name: 'National Screening Program',
      category: 'NGO',
      city: 'Abu Dhabi',
      address: 'Citywide, Abu Dhabi',
      lat: 24.4539,
      lng: 54.3773,
      phone: '+971 2 123 4567',
      website: 'https://www.screening.ae',
      blurb: 'Breast cancer awareness & screening support for early detection.'
    },
    {
      name: 'Friends of Cancer Patients',
      category: 'NGO',
      city: 'Abu Dhabi',
      address: 'Khalifa Park Area, Abu Dhabi',
      lat: 24.4203,
      lng: 54.4102,
      phone: '+971 2 555 9999',
      website: 'https://www.focp.ae',
      blurb: 'Support organization providing financial aid and emotional support.'
    },
    {
      name: 'Cancer Patient Care Society',
      category: 'NGO',
      city: 'Abu Dhabi',
      address: 'Muroor Road, Abu Dhabi',
      lat: 24.4758,
      lng: 54.3763,
      phone: '+971 2 444 3333',
      website: 'https://www.cancerpatients.ae',
      blurb: 'Community support group with regular meetings and counseling services.'
    }
  ];

  for (const provider of providers) {
    await prisma.provider.create({
      data: provider
    });
  }
  console.log('✅ Seeded providers');

  // Seed sample user
  const sampleUser = await prisma.user.create({
    data: {
      email: 'patient@example.com',
      name: 'Sarah Ahmed',
      city: 'Abu Dhabi',
      cancerType: 'Breast Cancer'
    }
  });

  // Create sample user plan
  const userPlan = await prisma.userPlan.create({
    data: {
      userId: sampleUser.id,
      city: 'Abu Dhabi',
      cancerType: 'Breast Cancer',
      stage: 'Unknown'
    }
  });

  // Add plan steps
  const breastCancerSteps = await prisma.careStep.findMany({
    where: {
      cancerType: 'Breast Cancer',
      stage: 'Unknown'
    },
    orderBy: {
      stepOrder: 'asc'
    }
  });

  for (const step of breastCancerSteps) {
    await prisma.userPlanStep.create({
      data: {
        planId: userPlan.id,
        stepOrder: step.stepOrder,
        stepTitle: step.stepTitle,
        stepDescription: step.stepDescription,
        isDone: step.stepOrder <= 2 // Mark first 2 steps as done
      }
    });
  }

  // Create sample appointments
  const clevelandClinic = await prisma.provider.findFirst({
    where: { name: 'Cleveland Clinic Abu Dhabi' }
  });

  if (clevelandClinic) {
    await prisma.appointment.create({
      data: {
        userId: sampleUser.id,
        title: 'Oncologist Consultation',
        startsAt: new Date('2024-12-20T10:00:00'),
        location: 'Cleveland Clinic Abu Dhabi',
        providerId: clevelandClinic.id,
        notes: 'Bring pathology reports and medication list.'
      }
    });

    await prisma.appointment.create({
      data: {
        userId: sampleUser.id,
        title: 'Follow-up Appointment',
        startsAt: new Date('2024-12-27T14:30:00'),
        location: 'Cleveland Clinic Abu Dhabi',
        providerId: clevelandClinic.id,
        notes: 'Discuss treatment plan and next steps.'
      }
    });
  }

  // Create sample community posts
  const communityPosts = [
    {
      userId: sampleUser.id,
      city: 'Abu Dhabi',
      cancerType: 'Breast Cancer',
      content: 'Just finished my first chemo session. The team at Cleveland Clinic was amazing. Remember to bring someone with you for support!'
    },
    {
      userId: sampleUser.id,
      city: 'Abu Dhabi',
      cancerType: 'Breast Cancer',
      content: 'Found a great parking spot near SSMC - use the underground parking B2, it\'s usually less crowded.'
    },
    {
      userId: sampleUser.id,
      city: 'Abu Dhabi',
      cancerType: 'Breast Cancer',
      content: 'The support group meeting last week was so helpful. Meeting others who understand makes such a difference.'
    }
  ];

  for (const post of communityPosts) {
    await prisma.communityPost.create({
      data: {
        ...post,
        createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000) // Random time within last week
      }
    });
  }

  console.log('✅ Seeded sample user data');
  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });