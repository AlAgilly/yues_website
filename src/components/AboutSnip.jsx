import React from 'react'
import { about } from '../assets'
import styles from '../style'

const AboutSnip = () => {
  return (
    <>
    {/* <div className='w-full mm:flex hidden'>
      <div class="image-container mm:w-[50vw]">
        <img src={ about } />
      </div>  
    </div> */}
    
      <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} ${styles.boxWidth}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>
          <div className='flex flex-row justify-between items-center w-full title'>
            <h3 className='font-bignoodle text-[60px] leading-10 mt-5 p-3'>Who We Are</h3>
          </div>
          <div className='flex flex-row justify-between items-center w-full title'>
            <p>Hello! we are York University’s Esports club, we host community events and are home to York University’s esports teams! This club is open to students of all interest levels in gaming. If you’d like to learn more about our team, feel free to check out our about us page!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSnip