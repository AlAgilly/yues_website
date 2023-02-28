import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { aboutsnip, droparrow, eventsnip, staffbox } from '../assets';
import { marketingstaff, operationsstaff, partnershipsstaff, competitivestaff } from '../constants';
import styles from '../style'

  
function About (){

    return (
        <>
          {/* Title */}
          <div className='w-full overflow-hidden bg-white border-b-2	'>
            <div className={` ${styles.flexStart} z-20 idk2`}>
              <div className={`p-0 ${styles.boxWidth} py-2 px-8 xs:px-20 ss:px-24`}> 
                <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-black  w-full`}>About us</h3>
              </div>
            </div>
          </div>
          {/* About Snippet */}
        <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
              {/* <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
                <div className='aboutimg grid grid-cols-3 w-full'>
                  <div className='rightimg hidden mm:flex'>
                    <img src={ eventsnip } alt="" />
                  </div>
                </div>
              </div>
              <div className='b4right xl:block hidden'></div>
              <div className='faderight mm:block hidden'></div>
              <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
                <div className='aboutimg grid grid-cols-3 w-full'>
                  <div className='rightimg hidden mm:flex'>
                    <img src={ eventsnip } alt="" />
                  </div>
                </div>
              </div>
              <div className='b4right xl:block hidden'></div>
              <div className='faderight mm:block hidden'></div>
              <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
                <div className='aboutimg grid grid-cols-3 w-full'>
                  <div className='leftimg hidden mm:flex'>
                    <img src={ aboutsnip } alt="" />
                  </div>
                </div>
              </div>
              <div className='b4left xl:block hidden'></div>
              <div className='fadeleft mm:block hidden'></div> */}
                <section id='home' className={`flex flex-col pt-10 pb-12 px-8 xs:px-20 ss:px-24 w-3/4`}>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH4}`}>Our Club</h4>
                    <div className={`${styles.titleLineBottom}`}>-</div>
                    <div className='py-5'>
                        <p className='py-2'>York University Esports (YUES) is a club that aims to bring together the community for gaming at York University. We hope to create a space for casual and competitive gamers alike through facilitating club events as well as managing our esports teams! We strive for inclusivity and part of our mission at YUES is to make sure our club is a safe space for everyone to have fun, free of judgement. We are also ratified as a club at York University so you can also check out our <a href='#'>YUConnect page</a>!</p>
                        <p className='py-2'>Here are some ways to get involved!</p>
                    </div>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Community Events</h4>
                    <p className='py-5'>Our community is also not limited to the online space as we hold weekly Chill Nites that are often held in person on campus! We welcome those looking to have fun and make new friends while participating in a variety of activities or holiday themed events. Our events include fun activities,  free snacks, and the opportunity to compete in various challenges to get a chance to win prizes!</p>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Competitive Teams</h4>
                    <p className='py-5'>We have a range of varsity and junior varsity teams for games such as League of Legends, Valorant,  Overwatch, Rocket League, and more. Tryouts are typically held in the fall semester of each year and have the opportunity to play in the competitive collegiate field in various tournaments held across North America.</p>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Club Tournaments</h4>
                    <p className='py-5'>We also hold tournaments for popular games such as League of Legends and Valorant! Tournament rules  vary however we typically offer the opportunity for teams to apply together or to be placed in a team as an individual. Winner(s) receive a cash prize, get bragging rights, and are showcased on our social media!</p>
                    <p className='py-5'>For updates about all club events and to become a part of the community, join our discord server and follow us on <a href='#'>Twitter</a> or <a href='#'>Instagram</a> to learn about upcoming events</p>
                  </div>
                </div>
              </section>
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>

                    <div class="tabs">
                    <div class="tab">
                        <input type="checkbox" id="chck1"/>
                        <label class="tab-label select-none" for="chck1">
                          <h5 className={`${styles.titleH5} text-black flex-col pr-10`}>Partnerships Department</h5>
                          <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                          <p className='bg-darkred pl-10'>
                            <img src={droparrow} alt="" className='dacoolting'/>
                          </p>
                        </label>
                        <div class="tab-content">
                          <div className='hidden lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 stiff'>
                              <div className='member'>
                              <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Vice-President of Partnerships</span></p>
                                <h1 className='font-bignoodle text-red text-[35px]'>Lynn Al Agilly</h1>
                              </div>
                              <img src={staffbox} alt="" className='w-full'/>
                            {partnershipsstaff.map((partnerships, index) => (
                              <div className={``}>
                                <div className='member'>
                                  <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Partnerships Staff</span>{ partnerships.role }</p>
                                  <h1 className={`font-bignoodle text-red ${ partnerships.font }`}>{ partnerships.name }</h1>
                                </div>
                                <img src={staffbox} alt="" className='w-full'/>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck2"/>
                        <label class="tab-label select-none" for="chck2">
                          <h5 className={`${styles.titleH5} text-black flex-col pr-10`}>Competitive Department</h5>
                          <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                          <p className='bg-darkred pl-10'>
                            <img src={droparrow} alt="" className='dacoolting'/>
                          </p>
                        </label>
                        <div class="tab-content">
                          <div className='hidden lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 stiff'>
                            <div className='border-2'>
                              <div className='member'>
                              <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Vice-President of Competitive</span></p>
                                <h1 className='font-bignoodle text-red text-[35px]'>Lynn Al Agilly</h1>
                              </div>
                              <img src={staffbox} alt="" className='w-full'/>
                            </div>
                            {competitivestaff.map((competitive, index) => (
                              <div className={``}>
                                <div className='member'>
                                  <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Competitive Staff</span>{ competitive.role }</p>
                                  <h1 className={`font-bignoodle text-red ${ competitive.font }`}>{ competitive.name }</h1>
                                </div>
                                <img src={staffbox} alt="" className='w-full'/>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck3"/>
                          <label class="tab-label select-none" for="chck3">
                            <h5 className={`${styles.titleH5} text-black flex-col pr-10`}>Operations Department</h5>
                            <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                            <p className='bg-darkred pl-10'>
                              <img src={droparrow} alt="" className='dacoolting'/>
                            </p>
                          </label>
                          <div class="tab-content">
                            <div className='hidden lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 stiff'>
                              <div className='member'>
                              <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Vice-President of Operations</span></p>
                                <h1 className='font-bignoodle text-red text-[35px]'>Lynn Al Agilly</h1>
                              </div>
                              <img src={staffbox} alt="" className='w-full'/>
                            {operationsstaff.map((operations, index) => (
                              <div className={``}>
                                <div className='member'>
                                  <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Operations Staff</span>{ operations.role }</p>
                                  <h1 className={`font-bignoodle text-red ${ operations.font }`}>{ operations.name }</h1>
                                </div>
                                <img src={staffbox} alt="" className='w-full'/>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck4"/>
                          <label class="tab-label select-none" for="chck4">
                            <h5 className={`${styles.titleH5} text-black flex-col pr-10`}>Marketing Department</h5>
                            <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                            <p className='bg-darkred pl-10'>
                              <img src={droparrow} alt="" className='dacoolting'/>
                            </p>
                          </label>
                          <div class="tab-content">
                            <div className='hidden lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 stiff'>
                              <div className='member'>
                              <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Vice-President of Marketing</span></p>
                                <h1 className='font-bignoodle text-red text-[35px]'>Lynn Al Agilly</h1>
                              </div>
                              <img src={staffbox} alt="" className='w-full'/>
                            {marketingstaff.map((marketing, index) => (
                              <div className={``}>
                                <div className='member'>
                                  <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>Marketing Staff</span>{ marketing.role }</p>
                                  <h1 className={`font-bignoodle text-red ${ marketing.font }`}>{ marketing.name }</h1>
                                </div>
                                <img src={staffbox} alt="" className='w-full'/>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div> 
      </>
    )
}
  
export default About;