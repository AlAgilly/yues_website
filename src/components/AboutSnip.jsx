import React from 'react'
import styles from '../style'

const AboutSnip = () => {
  return (
    <>
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-5`}>
          <div className='flex flex-row justify-between items-center w-full title'>
            <h3 className='font-bignoodle text-[60px] leading-10 mt-5 p-3'>Who We Are</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSnip