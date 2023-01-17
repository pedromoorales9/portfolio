import React from 'react';
// img
import Img from '../assets/image.png';
const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 mb-12'>
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <img src={Img} alt='' />
          </div>
          <div className='flex-1'>services</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
