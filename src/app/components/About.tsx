'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-[#f8fafc] text-[#1e293b] py-20 px-6" id="sobre-mi">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Un poco sobre mí</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Soy Ingeniero de Software con experiencia en PHP, Spring Boot, Node.js, React y Python. Me especializo en el desarrollo de sitios web dinámicos, aplicando tecnologías modernas y buenas prácticas de diseño. 
            Tengo sólidos conocimientos en bases de datos y un enfoque proactivo para ofrecer soluciones innovadoras. 
            Disfruto trabajar en equipos que valoran la excelencia técnica y la creatividad.
          </p>
          <a
            href="#proyectos"
            className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-500 transition text-sm font-medium"
          >
            Ver conocimientos y proyectos
          </a>
        </motion.div>

        {/* Imagen ilustrativa */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/about.jpg"
            alt="Ilustración sobre mí"
            width={400}
            height={400}
            className="object-contain max-w-[300px] md:max-w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
