import React from 'react'
import styles from '../style'
import { Button } from '../components';
import { borderlines, greyoutline } from '../assets'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function NotFound (){
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
    return (
        <>
          <div className={`bg-white ${styles.flexStart} overflow-hidden z-10 py-20`}>
            <div className={`px-6 xs:px-24 max-w-[1140px] xs:w-full`}>
              <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 mm:${styles.flexStart} flex-col mm:p-0`}>
                  <div className='lionfinal overflow-x-hidden z-2'>
                    <img src={ greyoutline } alt="" />
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full title mt-10 z-20`}>
                    <h1 className='flex-1 font-bignoodle mm:text-[150px] xm:text-[150px] ss:text-[130px] xs:text-[108px] text-[95px] text-red leading-[80px] mm:leading-3 z-20'>
                      Error 404
                    </h1>
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full z-30`}>
                    <h1 className='title2 z-20'>
                      <span className='text-november mm:text-[85px] xm:text-[75px] ss:text-[65px] xs:text-[55px] text-[45px] ml-[80px] z-30'>Page not found</span>
                    </h1>
                  </div>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                    <div className='left2'>
                      <img src={ borderlines } alt="" />
                    </div>
                  </div>
                  <div className='flex flex-row items-left w-full mm:w-full'>
                    <p className='ml-5 mt-10 text-[15px]'>
                    Oops! We can’t seem to find the page you are looking for.
                    </p>
                  </div>
                  <div className='flex flex-row items-left w-full mm:w-full z-40'>
                    <p><a href="" className='ml-5 pb-5 text-[15px] z-40'>Return to main site</a></p>
                  </div>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
                    <div className='right2'>
                        <img src={ borderlines } alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
    )
}
  
export default NotFound;