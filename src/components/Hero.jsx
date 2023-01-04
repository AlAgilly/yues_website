import React from 'react'
import styles from '../style'
import { Button } from './Button';
import About from '../pages/about';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>
        <div className='flex flex-row justify-between items-center w-full title'>
          <h1 className='flex-1 font-bignoodle md:text-[120px] sm:text-[100px] ss:text-[90px] text-[60px] text-red ss:leading-10 md:leading-3 leading-1'>
            York University
            <br />
            <br className={`md:flex hidden`} />
            <br className={`md:flex hidden`} />
            <br className={`md:flex hidden`} />
            <br className={`md:flex hidden`} />
            <span className='text-november text-white leading-3 md:text-[90px] sm:text-[70px] ss:text-[60px] text-[45px]'>Esports</span>
          </h1>
        </div>
        <div className='flex flex-row justify-between items-left w-1/2'>
          <p className='title-p text-white'>
          Lorem ipsum dolor sit amet consectetur. At eget habitant vitae sodales pharetra nunc tellus parturient ultrices. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className='flex md:flex-row flex-col items-left w-full'>
          <Button buttonStyle="btn--primary" children="Learn More" link="/about"/>
          <Button buttonStyle="btn--outline" children="Upcoming Events" link="/about"/>
        </div>
      </div>
    </section>
  )
}

export default Hero