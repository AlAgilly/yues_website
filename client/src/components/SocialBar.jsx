import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { sociallinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'
import { faCoffee  } from '@fortawesome/fontawesome-free-solid'
// import { faCoffee  } from '@fortawesome/fontawesome-free-regular'

const SocialBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex items-center social'>
      <ul className='list-none flex justify-center items-center flex-1'>
        <a target="_blank" href="https://www.instagram.com/yorkesports/">
          <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 py-2 `}>
            <FontAwesomeIcon icon={faInstagram} />
          
          </li>
        </a>
        <a target="_blank" href="https://twitter.com/YorkEsports">

        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 py-2 `}>
            <FontAwesomeIcon icon={faTwitter} />
        </li>
        </a>
        <a target="_blank" href="https://discord.com/invite/yorkesports">

        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 py-2 `}>
            <FontAwesomeIcon icon={faDiscord} />
        </li>
        </a>
        <a target="_blank" href="https://twitter.com/YorkEsports">

        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 py-2 `}>
            <FontAwesomeIcon icon={faYoutube} />
        </li> 
        </a>
        <a target="_blank" href="https://www.twitch.tv/yuesports">

        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 py-2 `}>
            <FontAwesomeIcon icon={faTwitch} />
        </li>
        </a>
        <a target="_blank" href="https://yorku.campuslabs.ca/engage/organization/yorkesports">

        <li className={`text-bebasneue font-normal cursor-pointer xm:text-[16px] text-[25px] mx-3 py-2 mt-[7px]`}>
            YUConnect
        </li> 
        </a>

      </ul>
    </nav>
  )
}

export default SocialBar