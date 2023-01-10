import React from 'react';
// image
import Image from '../assets/avatar.svg';
const Banner = () => {
  return (
    <section>
      <div className='container mx-auto text-white'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            alias a rerum rem minus molestias, delectus veritatis cumque dolorum
            tempore quis dolore repudiandae ullam. Id eligendi explicabo animi
            maiores nam?
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
