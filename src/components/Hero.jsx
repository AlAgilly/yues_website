import React from 'react'
import styles from '../style'
import { Button } from './Button';
import About from '../pages/about';
import { card, logooutline } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12`}>
      <div className={`flex-1 flex-col mt-5`}>
        <div className={`flex flex-row justify-between items-center w-full mm:pr-12 title`}>
          <h1 className='flex-1 font-bignoodle mm:text-[120px] sm:text-[100px] ss:text-[90px] text-[60px] text-red ss:leading-10 mm:leading-3 leading-1'>
            York&nbsp;University
            <br />
            <br className={`mm:flex hidden`} />
            <br className={`mm:flex hidden`} />
            <br className={`mm:flex hidden`} />
            <br className={`mm:flex hidden`} />
            <span className='text-november text-white leading-3 mm:text-[90px] sm:text-[70px] ss:text-[60px] text-[45px]'>Esports</span>
          </h1>
        </div>
        {/* <div className='flex flex-row justify-between items-left lg:w-full w-1/2'> */}
        <div className='flex flex-row justify-between items-left w-1/2'>
          <p className='title-p text-white'>
          Lorem ipsum dolor sit amet consectetur. At eget habitant vitae sodales pharetra nunc tellus parturient ultrices. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className='flex mm:flex-row flex-col items-left w-full'>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
          <Button buttonStyle="btn--secondary" children="Upcoming Events" link="/about"/>
        </div>
      </div>
      {/* <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 hidden mm:flex`}>
        <img src={ logooutline } alt="logo" />
      </div> */}
      <div className={`${styles.flexStart} xl:px-0 sm:px-0 px-6 mt-5 lion`}>
        <img src={ logooutline } alt="logo" />
      </div>
      <div className='heroborder'>
        <div className='left'></div>
        <div className='center'>
          <img src={ card } alt="" />
        </div>
        <div className='right'></div>
      </div>
    </section>
  )
}

export default Hero