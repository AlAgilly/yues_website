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
    <nav className='w-full flex py-1 items-center'>
      <ul className='list-none flex justify-center items-center flex-1'>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li> 
        <li className={`font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
        </li>
        <li className={`text-bebasneue font-normal cursor-pointer xm:text-[18px] text-[25px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            YUConnect
          </a>
        </li> 
      </ul>
    </nav>
  )
}

export default SocialBar