'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaTachometerAlt, FaServer, FaRobot, FaShoppingCart, FaCoins, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <nav className='main-nav'>
            <div className='nav-left'>
                <Link href="/" className='nav-brand-container'>
                    <span>TK-HOST</span>
                    <span className='premium-tag'>Premium</span>
                </Link>
            </div>

            <div className={`nav-center ${isMenuOpen ? 'open' : ''}`}>
                <ul className='nav-links'>
                    <li className='nav-link-item'><Link href="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                    <li className='nav-link-item'><Link href="/servers"><FaServer /> Servidores</Link></li>
                    <li className='nav-link-item'><Link href="/bots"><FaRobot /> Bots</Link></li>
                    <li className='nav-link-item'><Link href="/store"><FaShoppingCart /> Tienda</Link></li>
                    <li className='nav-link-item'><Link href="/coins"><FaCoins /> TK-Coins</Link></li>
                    <li className='nav-link-item'><Link href="/profile"><FaUserCircle /> Perfil</Link></li>
                </ul>
            </div>

            <div className='nav-right'>
                <div className='nav-actions'>
                    {isAuthenticated ? (
                        <>
                            <span className='nav-user-name'>Hola, {user?.name}</span>
                            <button onClick={handleLogout} className='btn-outline-secondary'>
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className='btn-tk-primary'>
                            Iniciar Sesión
                        </Link>
                    )}
                </div>
                <button className='nav-mobile-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
}
