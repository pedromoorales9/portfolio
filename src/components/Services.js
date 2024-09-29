import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Administracion de bases de datos',
    description:
      'Experto en la gestión y optimización de bases de datos como MySQL y SQL Server, asegurando su rendimiento, seguridad y disponibilidad.',
    link: 'Saber mas',
  },
  {
    name: 'Gestión de Windows Server',
    description:
      'Especialista en la administración de entornos Windows Server, incluyendo la configuración, gestión de usuarios y seguridad.',
    link: 'saber mas',
  },
  {
    name: 'Programacion en HTML y CSS',
    description:
      'Desarrollo soluciones web utilizando HTML, CSS y JavaScript para crear interfaces modernas y funcionales.',
    link: 'saber mas',
  },
  {
    name: 'Ciberseguridad',
    description:
      'Enfocada en la protección de sistemas y redes, implementando medidas de seguridad proactivas para prevenir vulnerabilidades.',
    link: 'saber mas',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>Que he realizado</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Con mis 4 años de experiencia he realizado
            </h3>
            <button className='btn btn-sm'>Proyectos</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
