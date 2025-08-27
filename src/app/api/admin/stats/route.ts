import { NextResponse } from 'next/server';

// This is a mock API endpoint.
// In a real application, you would fetch this data from your database.
export async function GET() {
    const stats = {
        totalUsers: {
            value: '12,543',
            growth: '+12% from last month'
        },
        revenue: {
            value: '$45,231',
            growth: '+8% from last month'
        },
        orders: {
            value: '1,234',
            growth: '+23% from last month'
        },
        growth: {
            value: '15.3%',
            growth: '+2.1% from last month'
        }
    };

    return NextResponse.json(stats);
}
