import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img from '../assets/image2.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br /> Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                metus ac erat iaculis pretium. Nullam vel nibh pulvinar.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            <div className='group relative overflow-hidden'>
              <img src={Img} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden'>
              <img src={Img} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500'>
                <span className='text-gradient'>Frontend Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
            <div className='group relative overflow-hidden'>
              <img src={Img} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500'>
                <span className='text-gradient'>Web Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
