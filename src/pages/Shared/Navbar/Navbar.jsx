import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/logo/wedlock.png'



const Navbar = () => {
    return (
        <div>
            <div className='fixed w-[1280px] bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <div className='w-[800px]'>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img
                className='hidden md:block'
                src={logoImg}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
            {/* Dropdown Menu */}
            {/* <MenuDropdown /> */}
           
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Navbar;