import React from 'react'
import Hero from '../components/Hero'
import Team from '../components/Team'
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
        

<div className='relative'>
<div className='fixed top-0 left-0 right-0 z-50'>
        <div className='w-full overflow-hidden bg-red'>
              <div className={`px-8 xs:px-10 ${styles.flexCenter}`}>
                <div className={`w-full`}>
                  <Navbar />
                </div>
              </div>
            </div>
            <div className='w-full overflow-hidden bg-black border-b-[3px] border-red'>
              <div className={`px-0 xs:px-16 ${styles.flexCenter}`}>
                <div className={`w-full`}>
                  <SocialBar />
                </div>
              </div>
            </div>
        </div>
</div>
          <div className={`bg-black ${styles.flexStart} hero overflow-hidden z-10`}>
            <div className={`px-10 xs:px-16 max-w-[1140px] xs:w-full`}>
              <Hero />
            </div>
          </div>
                <div className={`bg-primary ${styles.flexStart} aboutsec`}>


                  <div className={`${styles.boxWidth}`}>
                       <AboutSnip />
                       </div>
                </div>
          <div className='w-full overflow-hidden bg-red'>
                <div className={`idk ${styles.flexStart} `}>
                   <div className={`${styles.boxWidth}`}> 
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
                   <div className={`max-w-[1340px] w-full`}> 
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