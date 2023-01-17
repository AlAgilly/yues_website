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
    <nav className='w-full flex py-2 items-center social'>
      <ul className='list-none flex justify-center items-center flex-1'>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 p-0 `}>
          <a target="_blank" href="https://www.instagram.com/yorkesports/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 p-0 `}>
          <a target="_blank" href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 p-0 `}>
          <a target="_blank" href="https://discord.com/invite/yorkesports">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 p-0 `}>
          <a target="_blank" href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li> 
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] mx-3 p-0 `}>
          <a target="_blank" href="https://www.twitch.tv/yuesports">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
        </li>
        <li className={`text-bebasneue font-normal cursor-pointer xm:text-[16px] text-[25px] mx-3 p-0 mt-[7px]`}>
          <a target="_blank" href="https://yorku.campuslabs.ca/engage/organization/yorkesports">
            YUConnect
          </a>
        </li> 
      </ul>
    </nav>
  )
}

export default SocialBar