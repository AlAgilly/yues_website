import React from 'react'
import { about, binance, card } from '../assets'
import styles from '../style'
import { Button } from './Button'

const AboutSnip = () => {
  return (
    <>
    {/* <div className='w-full mm:flex hidden'>
      <div class="image-container mm:w-[50vw]">
        <img src={ about } />
      </div>  
    </div> */}
    
      {/* <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} ${styles.boxWidth}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>
          <div className='flex flex-row justify-between items-center w-full title'>
            <h3 className='font-bignoodle text-[60px] leading-10 mt-5 p-3'>Who We Are</h3>
          </div>
          <div className='flex flex-row justify-between items-center w-full title'>
            <p>Hello! we are York University’s Esports club, we host community events and are home to York University’s esports teams! This club is open to students of all interest levels in gaming. If you’d like to learn more about our team, feel free to check out our about us page!</p>
          </div>
        </div>
      </section> */}
        <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
          <div className='aboutimg grid grid-cols-3 w-full'>
            <div className='left hidden mm:flex'>
              <img src={ about } alt="" />
            </div>
          </div>
      </div>
    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12`}>
      <div className={`flex-1 mm:${styles.flexEnd} flex-col ${styles.paddingX}`}>
        {/* <div className='flex flex-row justify-between items-left lg:w-full w-1/2'> */}
        <div className='flex flex-col justify-between items-left w-full mm:w-1/2'>
          <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Who We Are</h3>
          <div className='my-4'>
          <p className='mb-4 text-[18px]'>Hello! we are York University’s Esports club, we host community events and are home to York University’s esports teams!</p>
          <p className='text-[18px]'>This club is open to students of all interest levels in gaming. If you’d like to learn more about our team, feel free to check out our about us page!</p>
          </div>
          
        </div>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
      </div>
      {/* <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 hidden mm:flex`}>
        <img src={ logooutline } alt="logo" />
      </div> */}
      {/* <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 lion`}>
        <img src={ logooutline } alt="logo" />
      </div> */}
    </section>

    </>
  )
}

export default AboutSnip