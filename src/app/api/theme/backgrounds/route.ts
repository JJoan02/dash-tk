import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Construct the path to the public/fondos directory
        const backgroundsDir = path.join(process.cwd(), 'public', 'fondos');

        // Read the directory
        const filenames = fs.readdirSync(backgroundsDir);

        // Filter for common image types
        const images = filenames.filter(file =>
            /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
        );

        return NextResponse.json(images);
    } catch (error) {
        console.error("Could not read backgrounds directory:", error);
        return NextResponse.json({ message: "Error reading background images." }, { status: 500 });
    }
}
