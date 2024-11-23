const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userData = {
  name: 'Leng',
  currentMonthRevenue: 352225.58,
  previousMonthRevenue: 216641.46,
  revenueDifference: 135584.12,
};

const userStatsData = {
  totalConnectedUsers: 3565,
  totalActiveUsers: 15000,
  totalPackages: 2500,
};

const revenueData = [
  { month: 'jan', value: 200000, secondValue: 150000 },
  { month: 'feb', value: 310000, secondValue: 250000 },
  { month: 'mar', value: 245000, secondValue: 220000 },
  { month: 'apr', value: 250000, secondValue: 210000 },
  { month: 'may', value: 206550.35, secondValue: 166550.35 },
  { month: 'jun', value: 221550.35, secondValue: 201550.35 },
  { month: 'jul', value: 250000, secondValue: 300000 },
  { month: 'aug', value: 280000, secondValue: 230000 },
  { month: 'sep', value: 300000, secondValue: 200000 },
];

async function main() {
  console.log('Start seeding...');

  // Create user
  const user = await prisma.user.create({
    data: userData
  });
  console.log('Created user:', user);

  // Create user stats
  const userStats = await prisma.userStats.create({
    data: userStatsData
  });
  console.log('Created user stats:', userStats);

  // Create revenue data
  for (const data of revenueData) {
    const revenue = await prisma.revenueData.create({
      data: {
        ...data,
        year: 2024,
      },
    });
    console.log('Created revenue data:', revenue);
  }

  // Create notifications
  const notifications = [
    {
      userId: user.id,
      type: 'Product Missing!',
      message: 'Unfortunately, the product was missing upon arrival, leaving me deeply disappointed...',
      priority: 'high',
      backgroundColor: 'emerald-50',
    },
    {
      userId: user.id,
      type: 'Delivery Review',
      priority: 'normal',
      backgroundColor: 'white',
    },
    {
      userId: user.id,
      type: 'Late Delivery!',
      priority: 'high',
      backgroundColor: 'emerald-50',
    },
  ];

  for (const notification of notifications) {
    const created = await prisma.notification.create({
      data: notification,
    });
    console.log('Created notification:', created);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });