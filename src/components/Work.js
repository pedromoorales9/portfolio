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
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex flex-col gap-y-20'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br /> Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                metus ac erat iaculis pretium. Nullam vel nibh pulvinar.
              </p>
              <button className='btn btn-sm'>View all</button>
            </div>
            <img src={Img} alt='' />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <img src={Img} alt='' />
            <img src={Img} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
