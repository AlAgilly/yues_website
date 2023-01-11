import React from 'react'
import { eventsList } from '../constants'
import styles from '../style'

export const TinyEvent = ({
    id,
    title,
    link,
    time,
    description, 
  }) => {
  return (
    <>
    <div className='w-full'>
          <h3 className={`${styles.titleH4} ${styles.titleLineBottom}`}><a href={ link }>{title}</a> </h3>
          <p className='title-p'>Hello! we are York University’s Esports club, we host community events and are home to York University’s esports teams!</p>
          <p className='title-p'>This club is open to students of all interest levels in gaming. If you’d like to learn more about our team, feel free to check out our about us page!</p>
    </div>
    </>
  )
}
 export default TinyEvent