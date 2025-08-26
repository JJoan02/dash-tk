import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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
    <html lang='es'>
      <body className={`${inter.className} bg-dark text-white`}>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary'>
          <div className='container-fluid'>
            <Link className='navbar-brand' href='/'>TK-HOST</Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' href='/dashboard'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/admin'>Admin</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
