import React from 'react'
import styles from '../style'
import { Button } from '../components';
import { borderline, greyoutline } from '../assets'
import { Link } from 'react-router-dom';

function UnderConstruction (){
    return (
        <>
          <div className={`bg-white ${styles.flexStart} relative overflow-hidden z-10`}>
            <div className={`px-6 xs:px-24 max-w-[1140px] xs:w-full`}>
              <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 mm:${styles.flexStart} flex-col mm:p-0`}>
                  <div className='lion2 overflow-x-hidden z-2'>
                    <img src={ greyoutline } alt="" />
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full z-30`}>
                    <h1 className='z-30'>
                      <span className='text-november mm:text-[110px] xm:text-[94px] ss:text-[90px] xs:text-[75px] text-[70px]  leading-[0px] z-30 absolute mt-16'>Hmm</span>
                    </h1>
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full title z-20 mt-0`}>
                    <h1 className='px-2 flex-1 font-bignoodle mm:text-[110px] xm:text-[94px] ss:text-[90px] xs:text-[75px] text-[70px] mm:leading-[100px] xm:leading-[84px] ss:leading-[80px] xs:leading-[70px] leading-[70px] text-red z-20'>
                      Looks like this page is Under Construction
                    </h1>
                  </div>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                    <div className='left2'>
                      <img src={ borderline } alt="" />
                    </div>
                  </div>
                  <div className='flex flex-row items-left w-full mm:w-full'>
                    <p className='ml-5 mt-10 text-[15px]'>
                    check back later and it might be up!
                    </p>
                  </div>
                  <div className='flex flex-row items-left w-full mm:w-full z-40'>
                    <p><Link to="/" className='ml-5 pb-5 text-[15px] z-40'>Return to home page</Link></p>
                  </div>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
                    <div className='right2'>
                        <img src={ borderline } alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </>
    )
}
  
export default UnderConstruction;