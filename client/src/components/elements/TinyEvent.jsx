import React from 'react'
import styles from '../../style'
import Title2 from './Title2'

export const TinyEvent = ({
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
          <Title2 title={title}></Title2>
          <p className='date'> {date}</p>
          <p className='time'> {time}</p>
          <p className='location'> {location}</p>
          {/* <p className='description'> {description}</p> */}
    </div>
    </>
  )
}
 export default TinyEvent