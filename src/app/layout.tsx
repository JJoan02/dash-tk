import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider
import NavbarActions from '../components/layout/NavbarActions'; // Import the new component
import Navbar from '../components/layout/Navbar'; // Import the new Navbar component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TK-HOST: Tu Plataforma Definitiva',
  description: 'Admin-TK: Gestión de servidores, bots y apps con rendimiento premium.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' data-scroll-behavior="smooth">
      <AuthProvider>
        <ThemeProvider>
          <body className={inter.className}>
            <Navbar /> { /* Use the new Navbar component */ }
            <main style={{ paddingTop: '80px' }}>
              {children}
            </main>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
