import React from 'react'
import styles from '../style'
import { Button, HoverImage, TinyEvent } from '../components';
import { eventsList, upcoming, recent } from '../constants';
import { bordercenter, borderline, eventsnip, yulion, instagram1, instagram2, instagram3, instagram4, instagram5, instagram6, instagram7, instagram8, instagram1g, instagram2g, instagram3g, instagram4g, instagram5g, instagram6g, instagram7g, instagram8g, aboutsnip, team1, out } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUnlink  } from '@fortawesome/fontawesome-free-solid'


function Home (){
    return (
        <>
          <div className={`bg-black ${styles.flexStart} hero overflow-hidden z-10`}>
            <div className={`px-6 xs:px-16 max-w-[1140px] xs:w-full`}>
              <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 mm:${styles.flexStart} flex-col mm:p-0`}>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                    <div className='right xm:hidden flex'>
                      <img src={ borderline } alt="" />
                    </div>
                  </div>
                  <div className='lion w-1/2'>
                    <img src={ out } alt="" />
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full title`}>
                    <h1 className='flex-1 font-bignoodle mm:text-[109px] xm:text-[100px] ss:text-[90px] text-[90px] text-red leading-[80px] mm:leading-3'>
                      York University
                    </h1>
                  </div>
                  <div className={`flex flex-row justify-between items-center w-full`}>
                    <h1 className='title2'>
                      <span className='text-november text-white mm:text-[80px] xm:text-[70px] text-[60px]'>Esports</span>
                    </h1>
                  </div>
                  <div className='flex flex-row justify-between items-left w-full mm:w-1/2'>
                    <p className='m-3 ml-5 pb-5 text-white text-[15px] leading-5'>
                      Welcome to York University’s Hub for esports, gaming, and club events! We welcome everyone interested of all levels in gaming. We are also home to esports teams including Valorant, CS:GO, League of Legends and much more!
                    </p>
                  </div>
                  <div className='grid grid-rows-1 mm:w-1/2 w-full grid-cols-2 xm:gap-6 gap-4 items-center'>
                    <Button buttonStyle="btn--primary" children="Our Teams" link="/teams"/>
                    <Button buttonStyle="btn--secondary" children="Upcoming Events" link="/events"/>
                  </div>
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative mt-20 h-[20px]`}>
                    <div className='left'>
                      <img src={ borderline } alt="" />
                    </div>
                    <div className='center mm:flex hidden'>
                      <img src={ bordercenter } alt="" />
                    </div>
                    <div className='right xm:flex hidden'>
                        <img src={ borderline } alt="" />
                    </div>
                  </div>
                </div>
              </section>
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
          <div className='w-full overflow-hidden bg-red z-20'>
            <div className={`idk ${styles.flexStart} z-20`}>
              <div className={`p-0 ${styles.boxWidth} z-20`}> 
                <h3 className={`${styles.titleH3} leading-10 leftborder blackborder text-white mx-8 ss:mx-24 z-20`}>Upcoming Events</h3>
              </div>
          </div>
          </div>
          <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
            <div className={`${styles.boxWidth}`}>
            <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
          <div className='aboutimg grid grid-cols-3 w-full'>
            <div className='rightimg hidden mm:flex'>
              <img src={ eventsnip } alt="" />
            </div>
          </div>
      </div>
      <div className='b4right xl:block hidden'></div>
    <div className='faderight mm:block hidden'></div>

    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY} mm:px-12 px-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX}`}>
        <div className='grid grid-cols-1 ss:grid-cols-2 justify-between ss:gap-x-24 gap-y-10 items-left w-full mm:w-1/2 my-4'>
        {eventsList.map((events, index) => (
            <TinyEvent key={events.id} title={ events.title } time={events.time} description={events.description} className={`${index > 1 ? 'hidden mm:block' : 'mm:block'}`} />
        ))}
        </div>
        <Button buttonStyle="btn--primarysmall" children="See more events" link="/about"/>
      </div>
    </section>
              </div>
          </div>
          <div className='w-full overflow-hidden bg-black'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
                <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
                  <div className={`flex-1 mm:${styles.flexStart} flex-col mx-8 xs:mx-20 ss:mx-24`}>    
                    <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-white`}>Latest IG Posts</h3>
                    <div className='grid grid-cols-2 ss:grid-cols-3 mm:grid-cols-4 xl:grid-cols-6 justify-between gap-x-6 gap-y-6 items-left w-full my-10 ig'>
                      <a target="_blank" href="https://www.instagram.com/p/CnPrYfAul11/"><HoverImage src={instagram1g} hoverSrc={instagram1} /></a>
                      <a target="_blank" href="https://www.instagram.com/p/CnAqsmXJnpb/"><HoverImage src={instagram2g} hoverSrc={instagram2} /></a>
                      <a target="_blank" href="https://www.instagram.com/p/CmNEEbEuymF/"><HoverImage src={instagram3g} hoverSrc={instagram3} /></a>
                      <a target="_blank" href="https://www.instagram.com/p/Cl7DLdXu_cl/"><HoverImage src={instagram4g} hoverSrc={instagram4} /></a>
                      <a target="_blank" href="https://www.instagram.com/p/Cle2GCeLV5n/"><HoverImage src={instagram5g} hoverSrc={instagram5} className='hidden ss:flex' /></a>
                      <a target="_blank" href="https://www.instagram.com/p/ClMLGX8Ohbj/"><HoverImage src={instagram6g} hoverSrc={instagram6} className='hidden ss:flex' /></a>
                      <a target="_blank" href="https://www.instagram.com/p/CktqTDCOr-i/"><HoverImage src={instagram7g} hoverSrc={instagram7} className='hidden mm:flex xl:hidden' /></a>
                      <a target="_blank" href="https://www.instagram.com/p/Cj3I_7TrzpP/"><HoverImage src={instagram8g} hoverSrc={instagram8} className='hidden mm:flex xl:hidden' /></a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`${styles.boxWidth} ${styles.paddingY}`}> 
                <section id='home' className={`flex mm:flex-row flex-col mm:px-12`}>
                  <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
                    <div className='flex flex-col justify-between items-left w-full'>
                      <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Upcoming Games</h3>
                      <div className='my-4 grid grid-cols-1'>
                        {upcoming.map((up, index) => (
                        <div className={`w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-5 mm:grid-cols-9 items-center justify-self-center ${index === recent.length - 1 ? '' : 'borderb'}`}>
                        <div className='justify-self-center'>
                              <h2>Game</h2>
                              <h3>Team A</h3>
                            </div>
                            <h4 className={`${styles.titleH4} xm:col-span-2 justify-self-center xm:flex hidden`}>{up.time}</h4>
                            <img src={ team1 } alt="" className={`${index % 2 === 0 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                            <img src={ up.opp } alt="" className={`${index % 2 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                            <p className={`${styles.titleH4} text-[50px] mm:p-5 p-0 justify-self-center mm:flex hidden `}> vs. </p>
                            <img src={ team1 } alt="" className={`${index % 2 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                            <img src={ up.opp } alt="" className={`${index % 2 === 0 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                            <p className='location mm:col-span-3 col-span-1 xs:col-span-2 justify-self-center'> {up.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                      <Button buttonStyle="btn--primarysmall" children="See our teams" link="/about"/>
                  </div> 
                </section>
                <section id='home' className={`flex mm:flex-row flex-col mm:px-12`}>
                  <div className={`flex-1 ${styles.flexEnd} flex-col ${styles.paddingX}`}>
                    <div className='flex flex-col justify-between items-left w-full'>
                      <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black`}>Recent Results</h3>
                      <div className='my-4 grid grid-cols-1'>
                      {recent.map((rec, index) => (
                        <div className={`w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-4 mm:grid-cols-9 items-center justify-self-center ${index === recent.length - 1 ? '' : 'borderb'}`}>
                          <div className='justify-self-center text-center'>
                            <a href="">
                              <h2>Game</h2>
                              <h3>Team A</h3>
                            </a>
                          </div>
                          <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center mm:flex hidden`}>{rec.time}</h4>
                          <img src={ team1 } alt="" className={`${index % 2 === 0 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                          <img src={ rec.opp } alt="" className={`${index % 2 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                          <p className={`${styles.titleH4} text-[50px] mm:p-5 p-0 justify-self-center `}> {rec.score} </p>
                          <img src={ team1 } alt="" className={`${index % 2 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                          <img src={ rec.opp } alt="" className={`${index % 2 === 0 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`}/>
                          <p className='location mm:col-span-2 col-span-1 justify-self-center xs:flex hidden'> {rec.title}</p>
                          <div className='description justify-self-center xm:grid grid-rows-2 text-end hidden'>
                            <p>Twitch VOD <FontAwesomeIcon icon={faUnlink} /> </p>
                            <a href="">Stats Page <FontAwesomeIcon icon={faLink} /> </a>
                          </div>
                        </div>
                      ))}
                    </div>
                      
                    </div>
                    <Button buttonStyle="btn--primarysmall" children="See our teams" link="/about"/>
                  </div> 
                </section>
              </div>
            </div>
          </div>
        </>
    )
}
  
export default Home;