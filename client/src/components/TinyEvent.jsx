import React from 'react'
import { eventsList } from '../constants'
import styles from '../style'

export const TinyEvent = ({
    key,
    className,
    title,
    date,
    time,
    location,
  }) => {
  return (
    <>
    <div className={`w-full ${className}`}>
      {/* <h4 className={`${styles.titleH4}`}><a href={ link }>{title}</a> </h4> */}
      <h4 className={`${styles.titleH4}`}>{title}</h4>
          <div className={`${styles.titleLineBottom}`}>-</div>
          <p className='date'> {date}</p>
          <p className='time'> {time}</p>
          <p className='location'> {location}</p>
          {/* <p className='description'> {description}</p> */}
    </div>
    </>
  )
}
 export default TinyEvent