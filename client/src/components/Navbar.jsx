import React from 'react'
import { useState } from 'react'
import { close, logo, menu, yuesports } from '../assets'
import { navLinks } from '../constants'
import { NavLink } from "react-router-dom"
import styles from '../style'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // Mobile nav toggle
  const [toggle, setToggle] = useState(false)
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

//active link
const active = "activenav"
const normal = ""

useEffect(() => {
  setToggle(false)
}, [location]);

  return (
    <nav className='w-full flex justify-end items-center'>
      <Link to="/"><img src={ yuesports } alt="YUES" className='xm:w-[40px] xm:h-[42px] w-[30px] h-[32px] my-1'/></Link>
      <ul className='list-none xm:flex hidden justify-end items-center flex-1 navbar'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <NavLink to={`${nav.id}`} className={({ isActive }) => isActive ? active : normal}>
              <div className={`text-white py-2 px-2 font-bignoodle font-normal cursor-pointer text-[23px]`}>
                <div className='px-2'>
                {nav.title}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='xm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu } 
            alt="menu" 
            className='w=[20px] h-[20px] object-contain my-1'
            onClick={() => setToggle((prev) => !prev)}
          />
        <div className={`${ !toggle ? "hidden" : "flex" } textp-6 bg-white absolute top-10 right-0 w-full sidebar z-50`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col shad w-full mobilenav">
          {navLinks.map((nav, index) => (
              <li key={nav.id} className='w-full'>
                <NavLink to={`${nav.id}`} className={({ isActive }) => isActive ? active : normal}>
                  <div className={`font-bignoodle font-normal py-1 px-6 cursor-pointer text-[23px] hov text-black hover:text-white hover:bg-black bg-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10 borderb'} w-full`}>
                  {nav.title}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar