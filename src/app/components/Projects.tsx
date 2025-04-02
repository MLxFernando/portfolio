'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Gestor de Tareas',
    description: 'App web tipo To-Do List con React y Node.js.',
    image: '/images/todolist.png',
    repo: 'https://github.com/MLxFernando/To-Do-List-with-React.git',
    demo: 'https://reactappweb.netlify.app/',
  },
  {
    title: 'Detector de noticias falsas',
    description:
      'Extensión de navegador que detecta noticias falsas y discurso de odio con modelos de ML.',
    image: '/images/fakenews.png',
    repo: '',
  },
  {
    title: 'Juego interactivo educativo',
    description:
      'Juego para niños que enseña colores, números y sonidos de animales.',
    image: '/images/juego.jpg',
    repo: 'https://github.com/MLxFernando/proyecto-aprende-jugando.git',
    demo: 'https://drive.google.com/file/d/12rxMBca4KnpoH_IZtX_SWJmMq-35hbsr/view?usp=sharing',
  },
  {
    title: 'Gestor de Facturas',
    description:
      'Aplicación web para la gestión de facturas',
    image: '/images/factura.png',
    repo: 'https://github.com/MLxFernando/frontend-factura.git',
  },
  {
    title: 'Web para consultora Analytika Women',
    description:
      'Sitio web para consultora situada en la ciudad de Latacunga.',
    image: '/images/awomen.png',
    repo: 'https://github.com/MLxFernando/Analytika_Women.git',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]" id="proyectos">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-indigo-600">
          Proyectos Destacados
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden text-left transition border border-gray-200 hover:shadow-lg">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-4 mt-4 text-sm">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-600 hover:underline"
                      >
                        <FaGithub /> Repositorio
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-cyan-600 hover:underline"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
