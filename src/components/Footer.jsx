import React from 'react'
import {logo} from '../assets'
import { gameLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'
import { faCoffee  } from '@fortawesome/fontawesome-free-solid'
// import { faCoffee  } from '@fortawesome/fontawesome-free-regular'

const Footer = () => {
  return (
    <>
      
      <footer class="text-left bg-black text-gray-600">
  <div class="mx-6 py-10 text-center mm:text-left">
    <div class="grid grid-1 mm:grid-cols-4 lg:grid-cols-6 gap-4">
    <div className='col-span-1'>
        <h6 class="uppercase font-semibold mb-4 flex justify-center mm:justify-start">
          Socials
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
        <h6 class="uppercase font-semibold mb-4 flex justify-center mm:justify-start">
          Teams
        </h6>
        <div className='grid grid-cols-1 mm:grid-cols-2'>
            {gameLinks.map((game) => (
          <div 
            key={game.id} 
            className={``}
          >
            <a href={`${game.id}`}>
              {game.title}
            </a>
          </div>
          
        ))}
        </div>
      </div>
      <div className='col-span-1'>
        <h6 class="uppercase font-semibold mb-4 flex justify-center mm:justify-start">
          Useful Links
        </h6>
        <div className='grid grid-cols-1'>
            {gameLinks.map((game) => (
          <div 
            key={game.id} 
            className={``}
          >
            <a href={`${game.id}`}>
              {game.title}
            </a>
          </div>
          
        ))}
        </div>
      </div>
      <div className='col-span-2'>
        <h6 class="uppercase font-semibold mb-4 flex justify-center mm:justify-start">
          Contact
        </h6>
        <div className='grid grid-cols-1 mm:grid-cols-2'>
            {/* <ul className='grid grid-row'>
                <li>Apex</li>
                <li>Call of Duty</li>
                <li>CS:GO</li>
                <li>Dota 2</li>
                <li>Hearthstone</li>
            </ul>
            <ul className='grid grid-row'>
                <li>League of Legends</li>
                <li>Overwatch</li>
                <li>Rainbow 6 Seige</li>
                <li>Rocket League</li>
                <li>Valorant</li>
            </ul> */}
            {gameLinks.map((game) => (
          <div 
            key={game.id} 
            className={``}
          >
            <a href={`${game.id}`}>
              {game.title}
            </a>
          </div>
          
        ))}
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-6 bg-black">
    <span>© 2023 Copyright: </span>
    <a class="text-gray-600 font-semibold" href="#/">York University Esports</a>
  </div>
</footer>

    </>
  )
}

export default Footer