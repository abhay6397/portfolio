import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const NavBar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]
  const handleSetActive = (to) => {
    console.log(to);
    console.log('hii')
  };
  return (
    <div className=' flex justify-between items-center 
    px-4 w-full h-20 text-white bg-black fixed '>
      <div>
        <h1 className='font-signature text-5xl ml-2 cursor-pointer select-none'>Abhay</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ link, id }) => (
          <li
            key={id}
            className='px-4 text-gray-500 capitalize font-medium
            hover:scale-105 duration-200 cursor-pointer'
          >
            <Link
              to={link}
              duration={500}
              smooth={true}
            >{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(pravNav => !pravNav)}
        className='cursor-pointer pr-4 text-gray-500 z-10 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center
              absolute left-0 top-0 w-full h-screen bg-gradient-to-b 
              from-black to-gray-800 text-gray-500 '>
          {links.map(({ id, link }) => (
            <li key={id}
            
              className='px-4 cursor-pointer capitalize text-4xl py-6'
            >
              <Link
              className='duration-200 transition-all ease-in'
               onClick={() => setNav(pravNav => !pravNav)}
                to={link}
                duration={500}
                smooth={true}
              >{link}</Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default NavBar
