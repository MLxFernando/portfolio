'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <Image src="/images/logo.svg" alt="Logo" width={36} height={36} />
            <span>Fernando</span>
          </div> */}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white font-medium">
          <li><a href="" className="hover:text-indigo-600 transition">Inicio</a></li>
          <li><a href="#sobre-mi" className="hover:text-indigo-600 transition">Acerca de mí</a></li>
          <li><a href="#proyectos" className="hover:text-indigo-600 transition">Proyectos</a></li>
          <li className="flex items-center gap-1 hover:text-indigo-600 transition">
            <FaDownload />
            <a href="/cv/fernando-macas-cv.pdf" download>Descarga mi CV</a>
          </li>
        </ul>

        

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-white font-medium">
          <a href="#hero" onClick={toggleMenu} className="block hover:text-indigo-600">Inicio</a>
          <a href="#sobre-mi" onClick={toggleMenu} className="block hover:text-indigo-600">Acerca de mí</a>
          <a href="#proyectos" onClick={toggleMenu} className="block hover:text-indigo-600">Proyectos</a>
          <a
            href="/cv/fernando-macas-cv.pdf"
            download
            onClick={toggleMenu}
            className="block flex items-center gap-2 hover:text-indigo-600"
          >
            <FaDownload /> Descargar CV
          </a>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
