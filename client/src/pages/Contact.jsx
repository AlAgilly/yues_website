import React from 'react'
import styles from '../style'
import { Button } from '../components';
import { aboutsnip } from '../assets';
  
function Contact (){
    return (
        <>
            <div className='w-full overflow-hidden bg-white z-20'>
                <div className={`idk2 ${styles.flexStart} z-20 py-8`}>
                    <div className={`p-0 ${styles.boxWidth} z-20`}> 
                        <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black mx-8 ss:mx-24 z-20`}>Contact Us</h3>
                    </div>
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart} aboutsec`}>
            <div className={`p-0 ${styles.boxWidth}`}>
            <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
              <div className='aboutimg grid grid-cols-3 w-full'>
                <div className='leftimg hidden mm:flex z-10'>
                  <img src={ aboutsnip } alt="" />
                </div>
              </div>
            </div>
            <div className='b4left xl:block hidden'></div>
            <div className='fadeleft mm:block hidden'></div>
            <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12 px-0`}>
              <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
                <div className='flex flex-col justify-between items-left w-full mm:w-1/2'>
                  <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Who We Are</h3>
                  <div className='my-4'>
                  <p className='mb-4'>Hi we are York University’s Esports club, we host <a href='/events'>community events</a> and are home to York University’s <a href='/teams'>esports teams</a> as well!</p>
                  <p>This club is open to students of all interest levels in gaming and we strive to create a comfortable space for.</p>
                  </div>
                </div>
                  <Button buttonStyle="btn--primarysmall" children="Learn More" link="/about"/>
              </div> 
            </section>
            </div>
          </div>
        </>
    )
}
  
export default Contact;