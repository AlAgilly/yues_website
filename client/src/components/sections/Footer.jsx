import React from 'react'
// import {logo} from '../assets'
import { gameLinks } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'
// import { faCoffee  } from '@fortawesome/fontawesome-free-solid'
// import { faCoffee  } from '@fortawesome/fontawesome-free-regular'
 import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      
      <footer className="text-left bg-black footer">
  <div className="mx-0 xs:mx-2 ss:mx-5 py-10 text-left">
    <div className="grid grid-1 mm:grid-cols-4 lg:grid-cols-6 gap-7">
    <div className='mm:col-span-1 col-span-2'>
        <h6 className="font-semibold mb-2 flex justify-center mm:justify-start">
          Our Socials
        </h6>
        <div className='grid grid-cols-4'>
        <div className={`font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://instagram.com/YorkEsports" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://twitter.com/YorkEsports" target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://discord.gg/YorkEsports" target='_blank'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          </div>        <div className={`font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://youtube.com/YorkEsports" target='_blank'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          </div>
        <div className={`font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://twitch.com/YUEsports" target='_blank'>
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          </div>
        <div className={`text-bebasneue font-normal cursor-pointer text-[25px] text-white p-0 `}>
          <a href="https://yorku.campuslabs.ca/engage/organization/yorkesports" target='_blank'>
            YUConnect
          </a>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <h6 className=" font-semibold mb-2 flex justify-start">
          Our Teams
        </h6>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {gameLinks.map((game) => (
          <div 
            key={game.id} 
            className={``}
          >
            <Link to={`teams/${game.id}`}>
              {game.title}
            </Link>
          </div>
          
        ))}
        </div>
      </div>
      <div className='sm:col-span-1 col-span-2'>
        <h6 className=" font-semibold mb-2 flex justify-start">
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
            <Link to="/documents/constitution">
              Our Constitution
            </Link>
            <Link to="/rules">
              Rules
            </Link>
            <Link to="/privacy">
              Privacy Policy
            </Link>
            <Link to="/terms">
              Terms of Use
            </Link>
        </div>
      </div>
      <div className='col-span-2'>
        <h6 className="font-semibold mb-2 flex justify-start">
          Contact
        </h6>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'>
            <div><a target='_blank' href="https://www.google.com/maps/place/Second+Student+Centre/@43.7714923,-79.5037118,15z/data=!4m2!3m1!1s0x0:0x55e10c9ba7b8b997?sa=X&ved=2ahUKEwigwqiAisP8AhWnkYkEHSWlB_EQ_BJ6BAhlEAg">Second Student Center <br /> 15 Library Ln, North York, ON <br /> M3J 2S5</a> <br />Room 316 </div>
            <div><br className='flex mm:hidden lg:flex' />
            <strong> Email Us: </strong><br />
            <a href="mailto:yorkesports@gmail.com">yorkesports@gmail.com</a> <br /><br />
            {/* <strong> Competitive: </strong><br />
            <a href="mailto:esports@my.yorku.ca">esports@my.yorku.ca</a> <br /><br />
            <strong> Sponsorships: </strong><br />
            <a href="mailto:hello@yorkesports.ca">hello@yorkesports.ca</a> <br /><br /> */}
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center p-6 bg-black">
    <span>© 2023 Copyright: </span>
    <Link className="text-white font-semibold" to="/">York University Gaming & Esports</Link>
  </div>
</footer>

    </>
  )
}

export default Footer