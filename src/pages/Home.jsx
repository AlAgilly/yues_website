import React from 'react'
import Hero from '../components/Hero'
import Team from '../components/Team'
import styles from '../style'
  
function Home (){
    return (
        <>
           <div className={`bg-primary ${styles.flexStart} hero`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Team />
            </div>
          </div>
        </>
    )
}
  
export default Home;