

"use client"

import React, { useState } from 'react';
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div>
      <div>
    <div className=' relative navbar-container w-full sm:fixed top-0 z-[90] px-4 h-20 mx-auto justify-between items-center flex sm:px-5 md:px-10 lg:px-10 xl:px-20 bg-[#000] bg-opacity-[0.4]  '>
        <div className='logo'>
          <a href='/'>
            <img src="" alt="logo" className=' w-[80px] h-[50px] lg:w-[100px] lg:h-[70px] ' />
        </a>
      </div>

      {/* Toggle button for mobile screens */}
      <div className='toggle-button lg:hidden text-white cursor-pointer' onClick={toggleNavLinks}>
        {showNavLinks ? <IoMdClose className='icon absolute right-[10px] top-5 h-8 w-8 border rounded bg-black border-green-400' /> : <FaBars className='icon relative h-7 w-7' />}
        </div>
        
      {/* Navlinks container */}
      {showNavLinks && (
        <div className=' lg:hidden nav-links-mobile transition-all duration-1000 ease-in-out z-10'>
          <nav className=' mobile-nav flex flex-col sm:text-center space-y-6 absolute top-4 right-0 py-6 pl-6 pr-4 font-sans font-bold text-lg bg-[#137e1e]  text-white mt-10 w-[100%] '>
            <a href="/">Home</a>
            <hr />
            <a href="photoediting">About</a>
              <hr />
              <a href="Blog">Blog</a>
              <hr />
              <a href="/Contact">
                <button className=" text-black border py-1 px-3 font-bold bg-white rounded">👋 ContactUs</button>
              </a>
          </nav>
        </div>
      )}

      {/* Desktop Navlinks */}
      <div className='nav-links hidden lg:flex'>
        <nav className='flex font-sans font-bold text-lg text-white space-x-8 md:space-x-12 lg:space-x-10 xl:space-x-16 justify-center items-center'>
          <a href="/" className='hover:text-blue-500'>Home</a>
              <a href="photoediting" className='hover:text-blue-500'>About</a>
              <a href="Blog" className='hover:text-blue-500'>Blog</a>
              <div className=' rounded h-[40px] w-[3px] bg-white '></div>
              <a href="Contact" className='hover:text-red-600'>Contact</a>
          </nav>
      </div>
      </div>
        <hr className='' />
      </div>
    </div>
    
  );
}

export default Navbar;