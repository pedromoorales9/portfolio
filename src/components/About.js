import React from 'react';
// img
import Img from '../assets/photo.png';
const About = () => {
  return (
    <section id='about' className='h-screen section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0'>
          {/* img */}
          <div className='flex-1'>
            <img src={Img} alt='' />
          </div>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2'>About me.</h2>
            <h3 className='h3'>
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              metus ac erat iaculis pretium. Nullam vel nibh pulvinar.
            </p>
            <button className='btn btn-lg btn-primary'>Contact me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
