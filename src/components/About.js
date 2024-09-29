import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
         
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Sobre mi!</h2>
            <h3 className='h3 mb-4'>
              Soy un profesional apasionado por la administración de sistemas informáticos en red, con años de experiencia. Mi objetivo es asegurar que las infraestructuras tecnológicas funcionen de manera eficiente y segura.
            </h3>
            <p className='mb-6'>
            Mi enfoque se centra en la optimización continua, la seguridad robusta y la implementación de tecnologías de vanguardia para impulsar el crecimiento y la eficiencia de las empresas en la era digital.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos <br />
                  Completados
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={35} duration={3} /> : null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Herramientas <br />
                  usadas
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contactame!</button>
              <a href='#' className='text-gradient btn-link'>
                Mi Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
