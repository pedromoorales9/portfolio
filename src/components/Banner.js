import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto text-white'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left font-secondary'>
            <h1 className='text-[55px] lg:text-[110px] font-bold leading-[1]'>
              BEN <span className='text-white'>AIDEN</span>
            </h1>
            <div className='mb-8 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Youtuber',
                  2000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                className='text-accent'
                wrapper='span' // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet, consecteur adipiscing elit.Duis ac
              metus ac erat iaculis pretium. Nullam vel nibh.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg btn-primary'>Download CV</button>
              <a href='#' className='text-gradient'>
                My Skills
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* image */}
          <div className='flex-1 max-w-[320px] mx-auto lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
