'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#3b82f6] to-[#8b5cf6] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-20 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          ¡Hola, soy <span className="text-cyan-300">Fernando Macas</span>!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8">
          Desarrollador de Software enfocado en experiencias web modernas y funcionales.
        </p>
        <a
          href="#proyectos"
          className="inline-block border border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-indigo-900 transition px-6 py-3 rounded-lg font-medium text-sm sm:text-base"
        >
          Ver mis proyectos
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
