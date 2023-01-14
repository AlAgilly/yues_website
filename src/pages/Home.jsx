import React from 'react'
import Hero from '../components/Hero'
import styles from '../style'
import Navbar from '../components/Navbar'
import SocialBar from '../components/SocialBar'
import Footer from '../components/Footer'
import AboutSnip from '../components/AboutSnip'
import EventSnip from '../components/EventSnip'
import Title from '../components/Title'
import IgPosts from '../components/IgPosts'
import RecentResults from '../components/RecentResults'
import UpcomingGames from '../components/UpcomingGames'
  
function Home (){
    return (
        <>
          <div className={`bg-black ${styles.flexStart} hero overflow-hidden z-10`}>
            <div className={`px-6 xs:px-16 max-w-[1140px] xs:w-full`}>
              <Hero />
            </div>
          </div>
          <div className={`bg-primary ${styles.flexStart} aboutsec`}>
            <div className={`p-0 ${styles.boxWidth}`}>
              <AboutSnip />
            </div>
          </div>
          <div className='w-full overflow-hidden bg-red'>
                <div className={`idk ${styles.flexStart} `}>
                   <div className={`p-0 ${styles.boxWidth}`}> 
                       <Title />
                    </div>
                </div>
          </div>
          <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
            <div className={`${styles.boxWidth}`}>
                <EventSnip />
              </div>
          </div>
          <div className='w-full overflow-hidden bg-black'>
                <div className={`${styles.flexStart} `}>
                   <div className={`p-0 max-w-[1340px] w-full`}> 
                       <IgPosts />
                    </div>
                </div>
          </div>
          <div className='w-full overflow-hidden bg-white'>
                <div className={`${styles.flexStart} `}>
                   <div className={`${styles.boxWidth} ${styles.paddingY}`}> 
                   <UpcomingGames />
                   <RecentResults />
                    </div>
                </div>
          </div>
            <div className='w-full overflow-hidden bg-black'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`w-full px-10`}>
                       <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Home;