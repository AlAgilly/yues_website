import React from 'react'
import { eventsList } from '../constants'
import styles from '../style'

export const TinyEvent = ({
    className,
    title,
    link,
    time,
    location,
    description, 
  }) => {
  return (
    <>
    <div className={`w-full ${ className}`}>
          <h4 className={`${styles.titleH4}`}><a href={ link }>{title}</a> </h4>
          <div className={`${styles.titleLineBottom}`}>-</div>
          <p className='date'> {time}</p>
          <p className='location'> {location}</p>
          <p className='description'> {description}</p>
    </div>
    </>
  )
}
 export default TinyEvent