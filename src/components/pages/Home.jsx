import React from 'react'
import Hero from '../Hero'
import styles from '../../style'
  
function Home (){
    return (
        <>
           <div className={`bg-primary ${styles.flexStart} hero`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
        </>
    )
}
  
export default Home;