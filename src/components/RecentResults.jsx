import React from 'react'
import { coinbase } from '../assets'
import { eventsList } from '../constants'
import styles from '../style'
import { Button } from './Button'
import TinyEvent from './TinyEvent'

const UpcomingGames = () => {
  return (
    <>
    <section id='home' className={`flex mm:flex-row flex-col mm:px-12`}>
      <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
        <div className='flex flex-col justify-between items-left w-full'>
          <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Recent Results</h3>
          <div className='my-4'>
          <p className='mb-4 text-[18px]'>Hello! we are York University’s Esports club, we host community events and are home to York University’s esports teams!</p>
          <p className='text-[18px]'>This club is open to students of all interest levels in gaming. If you’d like to learn more about our team, feel free to check out our about us page!</p>
          </div>
          
        </div>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
      </div> 
    </section>
    </>
  )
}

export default UpcomingGames