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
      <div className={``}>
          <div className='member'>
            <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ position == "Staff" ? team + " " + position : (position == "Vice President" ? position + " of " + team : position)}</span></p>
            <h1 className={`font-bignoodle text-red ${(name).length > 18 ? ((name).length >= 22 ? ((name).length >= 24 ? ((name).length >= 26 ? 'text-[22px]' : 'text-[23px]') : 'text-[30px]') : 'text-[28px]') : 'text-[34px]'}`}>{ name }</h1>
          </div>
          <img src={ staffbox } alt="" className='w-full'/>
      </div>
    </>
  )
}
 export default TinyStaff