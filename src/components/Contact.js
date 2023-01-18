import React from 'react';
// motion
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent font-medium'>Get in touch</h4>
              <h2 className='text-[90px] leading-none mb-12'>
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form className='flex-1 rounded-2xl flex flex-col gap-y-6 p-6 pb-24 border items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white'
              placeholder='Your name'
              type='text'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white'
              placeholder='Your email'
              type='text'
            />
            <textarea
              class='bg-transparent border-b py-12 outline-none resize-none w-full mb-12 placeholder:text-white'
              placeholder='Your Message'
            ></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
