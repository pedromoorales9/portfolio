import React from 'react';
// img
import Img from '../assets/photo.png';
// react countup
import CountUp from 'react-countup';
// react intersetction observer
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id='about' className='h-screen section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0'>
          {/* img */}
          <div className='flex-1'>
            <img src={Img} alt='' />
          </div>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              metus ac erat iaculis pretium. Nullam vel nibh pulvinar.
            </p>
            {/* stats */}
            <div className='flex gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={2} /> : null}
                </div>
                <div className='font-primary text-base'>
                  Years of
                  <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={2} /> : null}
                  k+
                </div>
                <div className='font-primary text-base'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={2} /> : null}
                  k+
                </div>
                <div className='font-primary text-base'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-8'>
              <button className='btn btn-lg btn-primary'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
