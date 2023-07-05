import React from 'react'
import styles from '../style'
import { staffbox } from '../assets'

export const TinyStaff = ({
    key,
    className,
    name,
    position,
    team,
  }) => {
  return (
    <>
      <div className={`mm:block hidden`}>
          <div className='member'>
            <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ position == "Staff" ? team + " " + position : (position == "Vice President" ? position + " of " + team : position)}</span></p>
            <h1 className={`font-bignoodle text-red ${(name).length > 18 ? ((name).length >= 22 ? ((name).length >= 24 ? ((name).length >= 26 ? 'text-[22px]' : 'text-[23px]') : 'text-[30px]') : 'text-[28px]') : 'text-[34px]'}`}>{ name }</h1>
          </div>
          <img src={ staffbox } alt="" className='w-full'/>
      </div>
      <h2 className={`font-bevietnam block mm:hidden`}>{ name } <span className='staffteam'> { position == "Staff" ? team + " " + position : (position == "Vice President" ? position + " of " + team : position)} </span><span className='staffposition'>{position }</span></h2>
    </>
  )
}
 export default TinyStaff