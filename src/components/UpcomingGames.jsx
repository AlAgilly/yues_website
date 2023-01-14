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
            <div className={`w-full grid grid-cols-3 mm:grid-cols-9 items-center justify-self-center ${index === upcoming.length - 1 ? '' : 'borderb'}`}>
              <div className='justify-self-center'>
                <h2>Game</h2>
                <h3>Team A</h3>
              </div>
              <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center`}>{up.time}</h4>
              <img src={ team1 } alt="" className={`${index % 2 === 0 ? "hidden" : "flex p-5"} mm:flex hidden justify-self-center`}/>
              <img src={ up.opp } alt="" className={`${index % 2 === 1 ? "hidden" : "flex p-5"} mm:flex hidden justify-self-center`}/>
              <p className={`${styles.titleH4} text-[50px] mm:p-5 p-0 justify-self-center mm:flex hidden `}> {up.score} </p>
              <img src={ team1 } alt="" className={`${index % 2 === 1 ? "hidden" : "flex p-5"} mm:flex hidden justify-self-center`}/>
              <img src={ up.opp } alt="" className={`${index % 2 === 0 ? "hidden" : "flex p-5"} mm:flex hidden justify-self-center`}/>
              <p className='location mm:col-span-3 col-span-1 justify-self-center'> {up.title}</p>
            </div>
            ))}
                  </div>
        </div>
          <Button buttonStyle="btn--primarysmall" children="See our teams" link="/about"/>
      </div> 
    </section>
    </>
  )
}

export default UpcomingGames