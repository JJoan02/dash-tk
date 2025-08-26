// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaServer, FaShoppingCart, FaTachometerAlt, FaCoins, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">

      {/* Hero principal */}
      <section className="hero bg-gradient-to-r from-[#0d1117] via-[#12161c] to-[#0d1117] text-white py-32 text-center relative">
        <h1 className="text-6xl md:text-7xl font-bold text-primary-cyan glow mb-4">
          TK-HOST
        </h1>
        <p className="text-xl md:text-2xl text-secondary-text mb-8">
          Donde tus sueños digitales se hacen realidad. Ejecuta tus proyectos con <strong>calidad, seguridad y estabilidad 24/7</strong> en un panel intuitivo y confiable.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard" className="btn btn-tk-primary btn-lg hover:scale-105 transition-transform">
            Ver mi Dashboard
          </Link>
          <Link href="/admin" className="btn btn-outline-secondary btn-lg hover:scale-105 transition-transform">
            Acceder al Panel Admin
          </Link>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-20 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="text-2xl font-bold mb-2">🚀 Rendimiento Premium</h3>
            <p className="text-secondary-text">
              Recursos dedicados para bots, juegos y aplicaciones. RAM & CPU optimizados para máxima eficiencia.
            </p>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="text-2xl font-bold mb-2">⚙️ Despliegue y Gestión Fácil</h3>
            <p className="text-secondary-text">
              Panel Admin-TK intuitivo, con integración nativa a Pterodactyl y administración simplificada de todos tus servidores.
            </p>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="text-2xl font-bold mb-2">💎 Potencia y Estabilidad</h3>
            <p className="text-secondary-text">
              Garantía de funcionamiento 24/7, con tecnologías de punta y monitoreo continuo.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosistema Admin-TK */}
      <section className="py-20 bg-[#1b1f26] text-center">
        <h2 className="text-4xl font-bold text-primary-cyan mb-12 glow">Nuestro Ecosistema</h2>
        <div className="grid md:grid-cols-4 gap-8 container mx-auto">
          <div className="card-tk p-6 hover:shadow-glow transition-all flex flex-col items-center">
            <FaTachometerAlt className="text-primary-cyan text-4xl mb-3"/>
            <h4 className="font-bold mb-2">Dash</h4>
            <p className="text-secondary-text">Panel de control avanzado para tus proyectos digitales.</p>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all flex flex-col items-center">
            <FaServer className="text-primary-cyan text-4xl mb-3"/>
            <h4 className="font-bold mb-2">Panel</h4>
            <p className="text-secondary-text">Administración de servidores y servicios integrados.</p>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all flex flex-col items-center">
            <FaShoppingCart className="text-primary-cyan text-4xl mb-3"/>
            <h4 className="font-bold mb-2">Tienda</h4>
            <p className="text-secondary-text">Compra de servicios, suscripciones y productos digitales.</p>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all flex flex-col items-center">
            <FaCoins className="text-primary-cyan text-4xl mb-3"/>
            <h4 className="font-bold mb-2">TK-Coins</h4>
            <p className="text-secondary-text">Sistema de créditos interno para pagos y recompensas.</p>
          </div>
        </div>
      </section>

      {/* Planes & Recursos */}
      <section className="py-20 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-cyan mb-12 glow">Planes & Recursos Dedicados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="font-bold text-2xl mb-2">Starter</h3>
            <p className="text-secondary-text mb-4">RAM 2GB | CPU 2 vCores | Backup diario</p>
            <Link href="#" className="btn btn-tk-primary">Ver Plan</Link>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="font-bold text-2xl mb-2">Pro</h3>
            <p className="text-secondary-text mb-4">RAM 4GB | CPU 4 vCores | Backup diario + snapshots</p>
            <Link href="#" className="btn btn-tk-primary">Ver Plan</Link>
          </div>
          <div className="card-tk p-6 hover:shadow-glow transition-all">
            <h3 className="font-bold text-2xl mb-2">Enterprise</h3>
            <p className="text-secondary-text mb-4">RAM 8GB | CPU 8 vCores | Backup avanzado + soporte 24/7</p>
            <Link href="#" className="btn btn-tk-primary">Ver Plan</Link>
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section className="py-20 bg-[#1b1f26] text-center">
        <h2 className="text-4xl font-bold text-primary-cyan mb-8 glow">Únete a Nuestra Comunidad</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="#" className="btn btn-outline-secondary flex items-center gap-2"><FaDiscord/> Discord</Link>
          <Link href="#" className="btn btn-outline-secondary flex items-center gap-2"><FaWhatsapp/> WhatsApp</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#12161c] text-secondary-text text-center">
        <p>© 2025 TK-HOST. Todos los derechos reservados.</p>
        <p>Integrado con Pterodactyl para una gestión de servidores sin igual.</p>
      </footer>

    </div>
  );
}
