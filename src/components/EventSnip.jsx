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
            <div className='rightimg hidden mm:flex'>
              <img src={ coinbase } alt="" />
            </div>
          </div>
      </div>
      <div className='b4right xl:block hidden'></div>
    <div className='faderight mm:block hidden'></div>

    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12 px-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX}`}>
        <div className='grid grid-cols-1 ss:grid-cols-2 justify-between ss:gap-x-24 gap-y-10 items-left w-full mm:w-1/2 my-4'>
        {eventsList.map((events, index) => (
            <TinyEvent key={events.id} title={ events.title } time={events.time} description={events.description} className={`${index > 1 ? 'hidden mm:block' : 'mm:block'}`} />
        ))}
        </div>
        <Button buttonStyle="btn--primarysmall" children="See more events" link="/about"/>
      </div>
    </section>

    </>
  )
}

export default EventSnip