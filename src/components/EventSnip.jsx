import React from 'react'
import { coinbase } from '../assets'
import { eventsList } from '../constants'
import styles from '../style'
import { Button } from './Button'
import TinyEvent from './TinyEvent'

const EventSnip = () => {
  return (
    <>
        <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
          <div className='aboutimg grid grid-cols-3 w-full'>
            <div className='right'>
              <img src={ coinbase } alt="" />
            </div>
          </div>
      </div>
    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12`}>
      <div className={`flex-1 mm:${styles.flexStart} flex-col mt-5 ${styles.paddingX}`}>
        <div className='grid grid-cols-2 justify-between items-left w-full mm:w-1/2'>
        {eventsList.map((events) => (
            <TinyEvent key={events.id} title={ events.title } time={events.time} description={events.description} />
        ))}
        </div>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
      </div>
    </section>

    </>
  )
}

export default EventSnip