import React from 'react'
import Team from '../components/Team'
import styles from '../style'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
  
function Contact (){
    return (
        <>
            <div className='w-full overflow-hidden bg-black'>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
            </div>
            <div className='w-full overflow-hidden bg-white'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <Header />
                    </div>
                </div>
            </div>
            <div className='w-full overflow-hidden bg-white'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <Team />
                    </div>
                </div>
            </div>
            <div className='w-full overflow-hidden bg-white'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`${styles.boxWidth}`}>
                       <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Contact;