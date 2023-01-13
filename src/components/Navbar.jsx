import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { NavLink } from "react-router-dom"
import styles from '../style'
import { useLocation } from "react-router-dom";


const Navbar = () => {

  const [toggle, setToggle] = useState(false)
      //assigning location variable
      const location = useLocation();

      //destructuring pathname from location
      const { pathname } = location;
  
      //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");

  return (
    <nav className='w-full flex py-4 justify-end items-center'>
      <a href="/"><img src={ logo } alt="YUES" className='w-[40px] h-[41px]'/></a>
      <ul className='list-none xm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-bignoodle font-normal cursor-pointer text-[23px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-12'} ${splitLocation[1] === navLinks.id ? "active" : navLinks.id}`}
          >
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
          
        ))}
      </ul>

      <div className='xm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu } 
            alt="menu" 
            className='w=[25px] h-[25px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
        <div
          className={`${ !toggle ? "hidden" : "flex" } textp-6 bg-white absolute top-14 right-0 min-w-[140px] sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
              <li 
                key={nav.id} 
                className={`font-bignoodle font-normal py-1 px-6 cursor-pointer text-[23px] hov text-black hover:text-white hover:bg-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10 borderb'} w-full`}
              >
                <a href={`${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar