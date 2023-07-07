import React from 'react'
// import {logo} from '../assets'
import { gameLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'
// import { faCoffee  } from '@fortawesome/fontawesome-free-solid'
// import { faCoffee  } from '@fortawesome/fontawesome-free-regular'
 import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      
      <footer className="text-left bg-black footer">
  <div className="mx-6 py-10 text-center mm:text-left">
    <div className="grid grid-1 mm:grid-cols-4 lg:grid-cols-6 gap-4">
    <div className='mm:col-span-1 col-span-2'>
        <h6 className="font-semibold mb-4 flex justify-center mm:justify-start">
          Our Socials
        </h6>
        <div className='grid grid-cols-4'>
        <div className={`font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          </div>
        <div className={`font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          </div>
        <div className={`text-bebasneue font-normal cursor-pointer text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            YUConnect
          </a>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <h6 className=" font-semibold mb-4 flex justify-center mm:justify-start">
          Our Teams
        </h6>
        <div className='grid grid-cols-1 mm:grid-cols-2'>
            {gameLinks.map((game) => (
          <div 
            key={game.id} 
            className={``}
          >
            <NavLink href={`${game.id}`}>
              {game.title}
            </NavLink>
          </div>
          
        ))}
        </div>
      </div>
      <div className='mm:col-span-1 col-span-2'>
        <h6 className=" font-semibold mb-4 flex justify-center mm:justify-start">
          Useful Links
        </h6>
        <div className='grid grid-cols-1'>
            {/* {navLinks.map((nav) => (
          <div 
            key={nav.id} 
            className={``}
          >
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </div>
          
        ))} */}
          <div className={``}>
            <a href="/constitution">
              Our Constitution
            </a>
          </div>
          <div className={``}>
            <a href="/rules">
              Rules
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <h6 className="font-semibold mb-4 flex justify-center mm:justify-start">
          Contact
        </h6>
        <div className='grid grid-cols-1 mm:grid-cols-2 lg:grid-cols-1'>
            <div><a href="https://www.google.com/maps/place/Second+Student+Centre/@43.7714923,-79.5037118,15z/data=!4m2!3m1!1s0x0:0x55e10c9ba7b8b997?sa=X&ved=2ahUKEwigwqiAisP8AhWnkYkEHSWlB_EQ_BJ6BAhlEAg">Second Student Center</a> <br />Room 316 </div>
            <div><br className='flex mm:hidden lg:flex' />
            <strong> Community: </strong><br />
            <a href="mailto:yorkesports@gmail.com">yorkesports@gmail.com</a> <br /><br />
            <strong> Competitive: </strong><br />
            <a href="mailto:esports@my.yorku.ca">esports@my.yorku.ca</a> <br /><br />
            <strong> Sponsorships: </strong><br />
            <a href="mailto:hello@yorkesports.ca">hello@yorkesports.ca</a> <br /><br />
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center p-6 bg-black">
    <span>© 2023 Copyright: </span>
    <a className="text-white font-semibold" href="/">York University Esports</a>
  </div>
</footer>

    </>
  )
}

export default Footer