import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import { Link } from 'react-router-dom';
import { Button } from './Button';


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-20`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-bebasneue sm:text-[100px] md:text-[150px] ss:text-[90px] text-[60px] text-white ss:leading-10 md:leading-3 leading-3'>
          York University
          <br />
          <br className={`md:flex hidden`} />
          <br className={`md:flex hidden`} />
          <br className={`md:flex hidden`} />
          <br className={`md:flex hidden`} />
          <span className='text-gradient leading-10'>Esports</span>
        </h1>
      </div>
    </div>
    <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
  </section>
  )
}

export default Hero