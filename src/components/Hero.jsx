import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { buttons, navLinks } from '../constants';


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>
      <div className='flex flex-row justify-between items-center w-full title'>
        <h1 className='flex-1 font-bebasneue md:text-[120px] sm:text-[100px] ss:text-[90px] text-[60px] text-red ss:leading-10 md:leading-3 leading-1'>
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
      <div className='flex flex-row items-left w-full'>
      {/* { buttons.map((button, index) => (
        <Button
        className={`btns flex-col ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        link={`${button.link}`}
      >
        {button.title}
      </Button>
          // <li 
          //   key={nav.id} 
          //   className={`font-bebasneue font-normal cursor-pointer text-[23px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
          // >
          //   <a href={`${nav.id}`}>
          //     {nav.title}
          //   </a>
          // </li>
        ))} */}
        {buttons.map((buttons, index) => (
          <Button 
            className={`cursor-pointer ${index === buttons.length - 1 ? 'hero' : 'mr-10' } `}
          >
            <a href={`${buttons.link}`}>
              {buttons.title}
            </a>
          </Button>
        ))}
        {/* <Button
          className='btns flex-col'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Upcoming Events<i className='far fa-play-circle' />
        </Button> */}
        </div>
    </div>
  </section>
  )
}

export default Hero