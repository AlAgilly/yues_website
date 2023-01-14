import React from 'react'
import team1 from '../assets/team1.png'
import { upcoming } from '../constants'
import styles from '../style'
import { Button } from './Button'
import SoonGames from './SoonGames' 

const UpcomingGames = () => {
  return (
    <>
    <section id='home' className={`flex mm:flex-row flex-col mm:px-12`}>
      <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
        <div className='flex flex-col justify-between items-left w-full'>
          <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Upcoming Games</h3>
          <div className='my-4 grid grid-cols-1'>
          {upcoming.map((up, index) => (
                <div className={`w-full grid grid-cols-9 items-center ${index === upcoming.length - 1 ? 'mr-0' : 'mr-10 borderb'}`}>
                <div>
                  <h2>Game</h2>
                  <h3>Team A</h3>
                </div>
                <h4 className={`${styles.titleH4} col-span-2`}>{up.time}</h4>
                <img src={ team1 } alt="" className={index % 2 === 0 ? "hidden" : "flex p-5"}/>
                <img src={ up.opp } alt="" className={index % 2 === 1 ? "hidden" : "flex p-5"}/>
                <p className={`${styles.titleH4} text-[50px] p-5`}> {up.score}</p>
                <img src={ team1 } alt="" className={index % 2 === 1 ? "hidden" : "flex p-5"}/>
                <img src={ up.opp } alt="" className={index % 2 === 0 ? "hidden" : "flex p-5"}/>
                <p className='location col-span-2'> {up.title}</p>
                <p className='description'> {up.twitch}</p>
          </div>
        ))}
                  </div>
          
        </div>
          <Button buttonStyle="btn--primarysmall" children="Learn More" link="/about"/>
      </div> 
    </section>
    </>
  )
}

export default UpcomingGames