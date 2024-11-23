// api/dashboardData.js

import { Prisma } from '@prisma/client'
const prisma = new Prisma()

export async function getDashboardData() {
  try {
    // Fetch user data
    const user = await prisma.users.findUnique({
      where: { id: user },
      select: {
        name: true,
        currentMonthRevenue: true,
        previousMonthRevenue: true,
        revenueDifference: true
      }
    })

    // Fetch user statistics
    const userStats = await prisma.userStats.findFirst({
      select: {
        totalConnectedUsers: true,
        totalActiveUsers: true,
        totalPackages: true
      }
    })

    // Fetch revenue chart data
    const revenueData = await prisma.revenueData.findMany({
      where: {
        year: new Date().getFullYear()
      },
      orderBy: {
        month: 'asc'
      }
    })

    // Fetch notifications
    const notifications = await prisma.notifications.findMany({
      take: 3,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true
          }
        }
      }
    })

    return {
      user,
      userStats,
      revenueChart: {
        currentYear: {
          data: revenueData
        }
      },
      notifications: {
        items: notifications
      }
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    throw error
  }
}