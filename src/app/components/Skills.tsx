'use client';

import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt, FaLaravel } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiSpringboot, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-blue-400" />,
    area: 'Frontend',
    description: 'Desarrollo de SPAs con componentes reutilizables.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500" />,
    area: 'Backend',
    description: 'APIs REST, lógica de negocio.',
  },
  {
    name: 'Python',
    icon: <FaPython className="text-yellow-400" />,
    area: 'Backend / ML',
    description: 'APIs REST, procesamiento de datos y scripts.',
  },
  {
    name: 'Laravel',
    icon: <FaLaravel className="text-red-500" />,
    area: 'Backend',
    description: 'APIs REST, lógica de negocio',
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-green-600" />,
    area: 'Backend',
    description: 'Aplicaciones robustas con SpringBoot',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-500" />,
    area: 'Frontend / Backend',
    description: 'Control sobre JS moderno.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" />,
    area: 'Frontend / Backend',
    description: 'Interactividad, lógica y manipulación DOM.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-500" />,
    area: 'Markup',
    description: 'Estructura semántica y adaptable.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-600" />,
    area: 'Estilos',
    description: 'Responsive design y animaciones UI.',
  },
  {
    name: 'PHP',
    icon: <FaPhp className="text-indigo-500" />,
    area: 'Backend',
    description: 'Lógica de servidor y formularios web.',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-700" />,
    area: 'Bases de datos',
    description: 'Modelado y consultas eficientes.',
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-orange-400" />,
    area: 'Control de versiones',
    description: 'Manejo de código fuente y colaboración.',
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1e293b] to-[#334155]" id="skills">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Conocimientos y Tecnologías</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-3 text-3xl">
                {skill.icon}
                <h3 className="text-xl font-semibold text-[#1e293b]">{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-700 font-semibold mb-1">{skill.area}</p>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
