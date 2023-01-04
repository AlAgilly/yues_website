import React from 'react'
import styles from '../style'
import { dota2, dota2a } from '../assets'
import HoverImage from './HoverImage';

const Team = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>

        <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 ss:grid-cols-2 grid-cols-1 teams'>
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
            <HoverImage src={dota2} hoverSrc={dota2a} />
        </div>
        </div>
    </div>
  </section>
  )
}

export default Team