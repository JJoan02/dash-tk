import { NextResponse } from 'next/server';

// This is a mock API endpoint for the user dashboard.
export async function GET() {
    const dashboardData = {
        welcomeMessage: 'Bienvenido de vuelta',
        tkCoinsBalance: 1337,
        servers: [
            {
                id: 'srv-01',
                name: 'Servidor de Minecraft',
                status: 'Online',
                cpuUsage: '45%',
                ramUsage: '3.2GB / 8GB'
            },
            {
                id: 'srv-02',
                name: 'Bot de Discord',
                status: 'Offline',
                cpuUsage: '0%',
                ramUsage: '0GB / 1GB'
            },
            {
                id: 'srv-03',
                name: 'Servidor de Pruebas',
                status: 'Online',
                cpuUsage: '15%',
                ramUsage: '512MB / 2GB'
            }
        ]
    };

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(dashboardData);
}
