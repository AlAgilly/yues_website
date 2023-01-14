import React from 'react'
import styles from '../style'
import { Button } from './Button';
import About from '../pages/about';
import { binance, card, dropbox, logooutline } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 mm:${styles.flexStart} flex-col mm:p-0 mt-14`}>
      <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
            <div className='right xm:hidden flex'>
                <img src={ dropbox } alt="" />
            </div>
      </div>
        <div className={`flex flex-row justify-between items-center w-full title`}>
          <h1 className='flex-1 font-bignoodle mm:text-[109px] xm:text-[100px] ss:text-[90px] text-[90px] text-red leading-[80px] mm:leading-3'>
            York University
          </h1>
        </div>
        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1 className='title2'>
            <span className='text-november text-white mm:text-[80px] xm:text-[70px] text-[60px]'>Esports</span>
          </h1>
        </div>
        <div className='flex flex-row justify-between items-left w-full mm:w-1/2'>
          <p className='m-3 ml-5 pb-5 text-white text-[15px] leading-5'>
          Welcome to York University’s Hub for esports, gaming, and club events! We welcome everyone interested of all levels in gaming. We are also home to esports teams including Valorant, CS:GO, League of Legends and much more!
          </p>
        </div>
        <div className='grid grid-rows-1 mm:w-1/2 w-full grid-cols-2 xm:gap-6 gap-4 items-center'>
            <Button buttonStyle="btn--primary" children="Our Teams" link="/teams"/>
            <Button buttonStyle="btn--secondary" children="Upcoming Events" link="/events"/>
        </div>
        <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
            <div className='left'>
            <img src={ binance } alt="" />
            </div>
            <div className='center mm:flex hidden'>
              <img src={ card } alt="" />
            </div>
            <div className='right xm:flex hidden'>
                <img src={ binance } alt="" />
            </div>
      </div>
      </div>
    </section>
  )
}

export default Hero