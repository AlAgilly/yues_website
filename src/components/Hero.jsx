import React from 'react'
import styles from '../style'
import { Button } from './Button';
import About from '../pages/about';
import { binance, card, dropbox, logooutline } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12`}>
      <div className={`flex-1 mm:${styles.flexStart} flex-col px-24 mm:p-0`}>
      <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
            <div className='right sm:hidden flex'>
                <img src={ dropbox } alt="" />
            </div>
      </div>
        <div className={`flex flex-row justify-between items-center w-full title`}>
          <h1 className='flex-1 font-bignoodle mm:text-[120px] sm:text-[100px] ss:text-[90px] text-[90px] text-red leading-[80px] mm:leading-3'>
            York University
          </h1>
        </div>
        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1 className='title2'>
            <span className='text-november text-white mm:text-[90px] sm:text-[70px] text-[60px]'>Esports</span>
          </h1>
        </div>
        {/* <div className='flex flex-row justify-between items-left lg:w-full w-1/2'> */}
        <div className='flex flex-row justify-between items-left w-full mm:w-1/2'>
          <p className=' my-4 text-white'>
          Lorem ipsum dolor sit amet consectetur. At eget habitant vitae sodales pharetra nunc tellus parturient ultrices. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 grid-rows-2 sm:gap-4 gap-0 items-left w-full mm:w-1/2 heroo'>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
          <Button buttonStyle="btn--secondary" children="Upcoming Events" link="/about"/>
        </div>
        <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
            <div className='left'>
            <img src={ binance } alt="" />
            </div>
            <div className='center mm:flex hidden'>
              <img src={ card } alt="" />
            </div>
            <div className='right sm:flex hidden'>
                <img src={ binance } alt="" />
            </div>
      </div>
      </div>
      {/* <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 hidden mm:flex`}>
        <img src={ logooutline } alt="logo" />
      </div> */}
      {/* <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 lion`}>
        <img src={ logooutline } alt="logo" />
      </div> */}
    </section>
  )
}

export default Hero