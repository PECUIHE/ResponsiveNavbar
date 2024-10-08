import React, { useState } from 'react';
import { LuMenu, LuSearch, LuX } from "react-icons/lu";
import logo from '../assets/react.svg';



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };


  return (
    <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
        <header className='container mx-auto py-6 px-8 sticky top-0 z-[1] flex w-full max-w-7xl flex-wrap justify-between items-center bg-white drop-shadow-lg'>
            
            {/* ---------------------------------------- Logo -----------------------------------------------------------------------> */}

            <div  className='text-[#212a3c] flex flex-col justify-center items-center hover:scale-105 hover:text-sky-400 transition-all cursor-pointer'>
                <a href="/" className='inline-block justify-center items-center'>
                    <img src={logo} alt="" className='w-25 ' />
                </a>
                <p className='uppercase font-bold italic'>pecuihe</p>
            </div>

            {/* ----------------------------------------- Nav ------------------------------------------->             */}

            <nav className='flex flex-[1] items-center justify-end overflow-hidden'>

                    {/* -------------------------- Search Bar --------------------------------------------------> */}

                <div className='relative hidden sm:flex items-center justify-center gap-3 pr-2 cursor-pointer'>
                    <LuSearch className='absolute left-1 text-2xl text-gray-500' />
                    <input type="text" placeholder='Search...'
                        className='capitalize py-2 px-7 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 cursor-pointer' 
                    />
                </div>

                    {/* ------------------------------ Desktop View Menu ------------------------------------------------------------> */}

                <ul className='hidden md:flex items-center gap-5 p-6 font-semibold text-[#212a3c] text-lg justify-end'>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all capitalize cursor-pointer'>home</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all capitalize cursor-pointer'>about</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all capitalize cursor-pointer'>books</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all capitalize cursor-pointer'>contact</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all capitalize cursor-pointer'>blog</li>
                </ul>

                    {/* ---------------------------------- Theme Toggle ---------------------------------------------------------> */}

                {/* <div className='w-[75px]'>
                    <ThemeToggle />
                </div> */}

                    {/* -------------------------------------------------- Hamburger Menu -----------------------------> */}

                <div className='flex w-[75px] justify-end md:hidden'>
                    <button onClick={toggleMenu} className='text-3xl '>
                        {isMenuOpen ? <LuX /> : <LuMenu />}
                    </button>
                </div>

                   {/* ------------------------------ Mobile View Menu ------------------------------------------------------------> */}

                <div className={`absolute md:hidden top-28 right-4 w-80 bg-white rounded-xl flex flex-col text-center gap-6 px-32 py-6 font-semibold text-[#212a3c] text-lg transform transition-transform
                    ${isMenuOpen ? "block" : "hidden"}`}>
                    {/* style={{transition: " transform 0.5s ease, opacity 0.5s ease"}}> */}
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all cursor-pointer capitalize' onClick = {toggleMenu}>home</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all cursor-pointer capitalize' onClick = {toggleMenu}>about</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all cursor-pointer capitalize' onClick = {toggleMenu}>books</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 w-fit hover:text-fuchsia-600 hover:font-bold transition-all cursor-pointer capitalize' onClick = {toggleMenu}>contact</li>
                    <li className='list-none p-1 border-b-2 border-white hover:border-fuchsia-600 hover:text-fuchsia-600 hover:font-bold transition-all cursor-pointer capitalize' onClick = {toggleMenu}>blog</li>
                </div>

            </nav>

        </header>
    </div>
    )
}

export default Navbar

