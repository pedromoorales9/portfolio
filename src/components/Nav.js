import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// react scroll
import { Link, animateScroll as scroll } from 'react-scroll';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';

const Nav = () => {
  return (
    <motion.nav
      variants={fadeIn('up', 0.7)}
      initial='hidden'
      whileInView={'show'}
      className='fixed bottom-16 lg:bottom-8 w-full overflow-hidden'
    >
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 backdrop-blur-2xl h-[96px] rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            to='home'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            to='services'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='portfolio'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          <Link
            to='contact'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
