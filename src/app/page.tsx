'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { FaServer, FaShoppingCart, FaTachometerAlt, FaCoins, FaDiscord, FaWhatsapp, FaRocket, FaCog, FaGem } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={`${styles.heroTitle} glow`}>
          TK-HOST
        </h1>
        <p className={styles.heroSubtitle}>
          Donde tus sueños digitales se hacen realidad. Ejecuta tus proyectos con <strong>calidad, seguridad y estabilidad 24/7</strong> en un panel intuitivo y confiable.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/dashboard" className='btn-tk-primary'>
            Ver mi Dashboard
          </Link>
          <Link href="/admin" className='btn-outline-secondary'>
            Acceder al Panel Admin
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.featuresGrid}>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}><FaRocket /> Rendimiento Premium</h3>
            <p>Recursos dedicados para bots, juegos y aplicaciones. RAM & CPU optimizados para máxima eficiencia.</p>
          </div>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}><FaCog /> Despliegue y Gestión Fácil</h3>
            <p>Panel Admin-TK intuitivo, con integración nativa a Pterodactyl y administración simplificada.</p>
          </div>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}><FaGem /> Potencia y Estabilidad</h3>
            <p>Garantía de funcionamiento 24/7, con tecnologías de punta y monitoreo continuo.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className={`${styles.section} ${styles.sectionColored}`}>
        <h2 className={`${styles.sectionTitle} glow`}>Nuestro Ecosistema</h2>
        <div className={styles.featuresGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className='card-tk'>
            <FaTachometerAlt className={styles.cardIcon}/>
            <h4 className={styles.cardTitle}>Dash</h4>
            <p>Panel de control avanzado para tus proyectos digitales.</p>
          </div>
          <div className='card-tk'>
            <FaServer className={styles.cardIcon}/>
            <h4 className={styles.cardTitle}>Panel</h4>
            <p>Administración de servidores y servicios integrados.</p>
          </div>
          <div className='card-tk'>
            <FaShoppingCart className={styles.cardIcon}/>
            <h4 className={styles.cardTitle}>Tienda</h4>
            <p>Compra de servicios, suscripciones y productos digitales.</p>
          </div>
          <div className='card-tk'>
            <FaCoins className={styles.cardIcon}/>
            <h4 className={styles.cardTitle}>TK-Coins</h4>
            <p>Sistema de créditos interno para pagos y recompensas.</p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} glow`}>Planes & Recursos Dedicados</h2>
        <div className={styles.featuresGrid}>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}>Starter</h3>
            <p>RAM 2GB | CPU 2 vCores | Backup diario</p>
            <Link href="#" className='btn-tk-primary' style={{ marginTop: '1rem' }}>Ver Plan</Link>
          </div>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}>Pro</h3>
            <p>RAM 4GB | CPU 4 vCores | Backup diario + snapshots</p>
            <Link href="#" className='btn-tk-primary' style={{ marginTop: '1rem' }}>Ver Plan</Link>
          </div>
          <div className='card-tk'>
            <h3 className={styles.cardTitle}>Enterprise</h3>
            <p>RAM 8GB | CPU 8 vCores | Backup avanzado + soporte 24/7</p>
            <Link href="#" className='btn-tk-primary' style={{ marginTop: '1rem' }}>Ver Plan</Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className={`${styles.section} ${styles.sectionColored}`}>
        <h2 className={`${styles.sectionTitle} glow`}>Únete a Nuestra Comunidad</h2>
        <div className={styles.heroCtas}>
          <Link href="#" className='btn-outline-secondary'><FaDiscord/> Discord</Link>
          <Link href="#" className='btn-outline-secondary'><FaWhatsapp/> WhatsApp</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 TK-HOST. Todos los derechos reservados.</p>
        <p>Integrado con Pterodactyl para una gestión de servidores sin igual.</p>
      </footer>

    </div>
  );
}