import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-3 justify-end items-center navbar'>
      <a href="/"><img src={ logo } alt="YUES" className='w-[40px] h-[41px]'/></a>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-bignoodle font-normal cursor-pointer text-[23px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-16'} `}
          >
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu } 
            alt="menu" 
            className='w=[25px] h-[25px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
        <div
          className={`${ !toggle ? "hidden" : "flex" } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-bignoodle font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */
            navLinks.map((nav, index) => (
              <li 
                key={nav.id} 
                className={`font-bignoodle font-normal cursor-pointer text-[23px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
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