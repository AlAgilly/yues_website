import React from 'react'
import Hero from '../components/Hero'
import Team from '../components/Team'
import styles from '../style'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSnip from '../components/AboutSnip'
import EventSnip from '../components/EventSnip'
import Title from '../components/Title'
  
function Home (){
    return (
        <>
        

            <div className='w-full overflow-hidden bg-red'>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
            </div>
            <div className='content'>
          <div className={`bg-black ${styles.flexStart} hero`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
          <div className='w-full overflow-hidden bg-white'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <AboutSnip />
                    </div>
                </div>
            </div>
          <div className='w-full overflow-hidden bg-red'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <Title />
                    </div>
                </div>
          </div>
          <div className='w-full overflow-hidden bg-white'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <EventSnip />
                    </div>
                </div>
          </div>
            <div className='w-full overflow-hidden bg-black'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <Footer />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
  
export default Home;