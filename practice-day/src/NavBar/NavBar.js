import React, { useState } from 'react';
import {  MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const NavBar = () => {
    const [open, setOpen] = useState();
    return (
        <nav className='bg-indigo-200 py-9'>
        <div onClick={() => setOpen(!open)} className='w-9 h-9 cursor-pointer md:hidden z-20 relative float-right m-2 top-[-1px]'>
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
      <div className="flex justify-between">
          <div className='relative z-40 text-4xl font-bold text-white ml-5'>LoGo</div>
          <ul className={`md:flex justify-end mr-6 absolute z-0 md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-0': 'top-[-220px]'}`}>
    
            <li className='font-bold text-lg md:mx-7'><CustomLink to="/">Home</CustomLink></li>
           
            <li className='font-bold text-lg md:mx-7'><CustomLink to="/about">About</CustomLink></li>
            <li className='font-bold text-lg md:mx-7'><CustomLink to="/shop">Shop</CustomLink></li>
            <li className='font-bold text-lg md:mx-7'><CustomLink to="/contact">Contact Us</CustomLink></li>
        </ul>
      </div>
    </nav>
    
    );
};

export default NavBar;