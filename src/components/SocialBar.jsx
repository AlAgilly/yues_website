import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { sociallinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'
// import { faCoffee  } from '@fortawesome/fontawesome-free-solid'

const SocialBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-1 items-center navbar'>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {/* I really want the following code to work eventually */}
        {/* {sociallinks.map((sociallinks) => (
          <li 
            key={sociallinks.id} 
            className={`cursor-pointer text-[13px] text-white m-0 p-0 `}
          >
            <a href={sociallinks.link}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        ))} */}
        <li className={`font-normal cursor-pointer text-[18px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[18px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[18px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className={`font-normal cursor-pointer text-[18px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li> 
        <li className={`font-normal cursor-pointer text-[18px] text-white mx-3 p-0 `}>
          <a href="https://twitter.com/YorkEsports">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
        </li> 
      </ul>
    </nav>
  )
}

export default SocialBar