import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider
import NavbarActions from '../components/layout/NavbarActions'; // Import the new component
import { FaTachometerAlt, FaServer, FaRobot, FaShoppingCart, FaCoins, FaUserCircle } from 'react-icons/fa';

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
      <AuthProvider> { /* Wrap with AuthProvider */ }
        <ThemeProvider>
          <body className={inter.className}>
            <nav className='main-nav'>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <Link href="/" className='nav-brand-container'>
                  <span>TK-HOST</span>
                  <span className='premium-tag'>Premium</span>
                </Link>
                <ul className='nav-links'>
                  <li className='nav-link-item'><Link href="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                  <li className='nav-link-item'><Link href="/servers"><FaServer /> Servidores</Link></li>
                  <li className='nav-link-item'><Link href="/bots"><FaRobot /> Bots</Link></li>
                  <li className='nav-link-item'><Link href="/store"><FaShoppingCart /> Tienda</Link></li>
                  <li className='nav-link-item'><Link href="/coins"><FaCoins /> TK-Coins</Link></li>
                  <li className='nav-link-item'><Link href="/profile"><FaUserCircle /> Perfil</Link></li>
                </ul>
              </div>
              <NavbarActions /> { /* Use the dynamic component */ }
            </nav>
            <main style={{ paddingTop: '80px' }}>
              {children}
            </main>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
