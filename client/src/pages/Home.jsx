import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import styles from '../style'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLink, faUnlink  } from '@fortawesome/fontawesome-free-solid'
import { Insta, Upcoming, Recent, Events, Header, Button } from '../components';
import { borderlines2, eventsnip, aboutsnip, out, borderlines, bordercenters } from '../assets'
import Title1 from '../components/elements/Title1';


function Home (){
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
{/* Hero Section */}
      <div className={`bg-black ${styles.flexStart} hero overflow-hidden z-10`}>
        <div className={`px-6 xs:px-16 max-w-[1140px] xs:w-full`}>
          <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 mm:${styles.flexStart} flex-col mm:p-0`}>
              <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                <div className='right xm:hidden flex'>
                  <img src={ borderlines } alt="" />
                </div>
              </div>
              <div className='lionfinal opacity-30 w-1/2 xm:flex hidden'>
                <img src={ out } alt="" />
              </div>
              <div className={`flex flex-row justify-between items-center w-full title`}>
                <h1 className='flex-1 font-bignoodle mm:text-[109px] xm:text-[100px] ss:text-[90px] text-[90px] text-red leading-[80px] mm:leading-3'>
                  York Gaming
                </h1>
              </div>
              <div className={`flex flex-row justify-between items-center w-full`}>
                <h1 className='title2'>
                  <span className='text-november text-white mm:text-[80px] xm:text-[70px] text-[60px]'>& Esports</span>
                </h1>
              </div>
              <div className='flex flex-row justify-between items-left w-full mm:w-1/2'>
                <p className='m-3 ml-5 pb-5 text-white text-[15px] leading-5'>
                  Welcome to York University’s Hub for esports, gaming, and club events! We welcome everyone interested of all levels in gaming. We are also home to esports teams including Valorant, CS:GO, League of Legends and much more!
                </p>
              </div>
              <div className='grid mm:w-1/2 w-full xs:grid-cols-2 grid-cols-1 xm:gap-6 xs:gap-4 gap-0 items-center'>
                <Button buttonStyle="btn--primary" children="Our Teams" link="/teams"/>
                <Button buttonStyle="btn--secondary" children="Upcoming Events" link="/events"/>
              </div>
              <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
                <div className='left'>
                  <img src={ borderlines } alt="" />
                </div>
                <div className='center mm:flex hidden'>
                  <img src={ bordercenters } alt="" />
                </div>
                <div className='right xm:flex hidden'>
                    <img src={ borderlines } alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
{/* About Snippet */}
      <div className={`bg-primary ${styles.flexStart} aboutsec overflow-hidden`}>
        <div className={`max-w-[1140px] w-full p-0`}>
          <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
            <div className='aboutimg grid grid-cols-3 w-full'>
              <div className='leftimg hidden mm:flex'>
                <img src={ aboutsnip } alt="" />
              </div>
            </div>
          </div>
          <div className='b4left xl:block hidden'></div>
          <div className='fadeleft mm:block hidden z-0'></div>
        <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12 px-0`}>
          <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
            <div className='flex flex-col justify-between items-left w-full mm:w-1/2'>
              <Title1 title="Who we are"></Title1>
              <div className='my-4'>
              <p className='mb-4'>York University Gaming and Esports (YGE) is a club that aims to bring together a community for gaming at York University. We strive to have a space for competitive and casual gamers alike. We manage <Link to='/teams'>competitive teams</Link>, and also facilitate <Link to='/events'>in-person and online events</Link>. We also have our <a target='_black' href='https://discord.gg/yorkesports'>Discord</a> for anyone looking for others to play games with online. Whatever it may be, YGE has something to offer you, and we welcome anyone at all skill levels and interests to join our community!</p>
              </div>
            </div>
            <div className='grid mm:grid-cols-2 grid-cols-1 mm:w-1/2 w-full'>
            <Button buttonStyle="btn--primarysmall" children="Learn More" link="/about"/>
            <div></div>
            </div>
          </div> 
        </section>
        </div>
      </div>
{/* Events title */}
      <Header title="Upcoming Events" colour="red"> </Header>
{/* Events Snippet */}
      <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
            <div className='aboutimg grid grid-cols-3 w-full'>
              <div className='rightimg hidden me:flex'>
                <img src={ eventsnip } alt="" />
              </div>
            </div>
          </div>
          <div className='b4right xl:block hidden'></div>
          <div className='faderight me:block hidden'></div>
          <div className='w-full overflow-hidden bg-white'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full`}> 
            <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} px-8 xs:px-20 ss:px-24 w-full me:w-2/3`}>
              <div className={`flex-1 mm:${styles.flexStart} flex-col`}>    
              <Events />
              <Button buttonStyle="btn--primarysmall" children="See more events" link="/events"/>
            </div>
          </section>
        </div>
      </div>
      </div> </div> </div>
{/* Instagram Section */}
      <div className='w-full overflow-hidden bg-black'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full`}> 
            <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
              <div className={`flex-1 mm:${styles.flexStart} flex-col mx-8 xs:mx-20 ss:mx-24`}>    
                <Title1 title="Latest IG Posts" colour="black"></Title1>
                <Insta />
              </div> 
            </section>
          </div>
        </div>
      </div>
{/* Upcoming and Recent Games */}
      <div className='w-full overflow-hidden bg-white'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full ${styles.paddingY}`}> 
          <section id='home' className={`flex mm:flex-row flex-col`}>
              <div className={`flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}>
                <div className='flex flex-col justify-between items-left w-full'>
                  <Title1 title="Recent Results"></Title1>
                  <div className='my-4 grid grid-cols-1'>
                    <Recent />
                  </div>
                </div>
                <Button buttonStyle="btn--primarysmall" children="See our teams" link="/teams"/>
                <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px] mb-16`}>
                <div className='left flex mt-20 mm:mt-0'>
                  <img src={ borderlines2 } alt="" />
                </div>
              </div>
              </div> 
            </section>
            <section id='home' className={`flex mm:flex-row flex-col`}>
              <div className={`flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}> 
              <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                <div className='right mm:flex hidden pt-4'>
                  <img src={ borderlines2 } alt="" />
                </div>
              </div>
                <div className='flex flex-col justify-between items-left w-full'>
                  <Title1 title="Upcoming Games"></Title1>
                  <div className='my-4 grid grid-cols-1'>
                    <Upcoming />
                  </div>
                </div>
                  <Button buttonStyle="btn--primarysmall" children="See our teams" link="/teams"/>
              </div> 
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default Home;