'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-10 px-6 text-center border-t border-gray-800">
      <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Fernando Macas. Todos los derechos reservados.</p>

      <div className="flex justify-center gap-6 text-2xl text-gray-400">
        <a
          href="https://github.com/MLxFernando" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/fernando-macas12" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:fernandomacas68@gmail.com" 
          className="hover:text-indigo-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
