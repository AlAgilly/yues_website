import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { droparrow, borderlineshort } from '../assets';
import styles from '../style'
import { Marketing, Partnerships, Operations, Competitive, Hr, Treasurer, Secretary, Copres } from "../components/sections/Staff";
import Header from '../components/elements/Header';
import Title2 from '../components/elements/Title2';
import Title3 from '../components/elements/Title3';
import Title4 from '../components/elements/Title4';
import { borderlines2 } from '../assets';
  
function About (){
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

    return (
        <>
          {/* Title */}
          <Header title="About Us" colour="white"/>
          {/* About Snippet */}
          <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
                <section id='home' className={`flex flex-col pt-10 pb-12 px-8 xs:px-20 ss:px-24 w-3/4`}>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                    <div className={`w-full`}>
                      <Title2 title="Our Club"/>
                      <div className='py-2'>
                        <p className='pb-2'>York University Esports (YUES) is a club that aims to bring together the community for gaming at York University. We hope to create a space for casual and competitive gamers alike through facilitating club events as well as managing our esports teams! We strive for inclusivity and part of our mission at YUES is to make sure our club is a safe space for everyone to have fun, free of judgement. We are also ratified as a club at York University so you can also check out our <a href='#'>YUConnect page</a>!</p>
                        <p className='pb-3'>Here are some ways to get involved...</p>
                      </div>
                    </div>
                  </div>
                  <div className='relative'>
                  {/* <img src={ borderlineshort } alt="" className='absolute right-[calc(100%+50px)]'/> */}
                  <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px]`}>
                    <div className='left2 flex mt-20 mm:mt-0'>
                      <img src={ borderlines2 } alt="" />
                    </div>
                  </div>
                  </div>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                    <div className={`w-full`}>
                      <Title3 title="Community Events" colour="red"/>
                      <p className='pt-2 pb-5'>Our community is also not limited to the online space as we hold weekly Chill Nites that are often held in person on campus! We welcome those looking to have fun and make new friends while participating in a variety of activities or holiday themed events. Our events include fun activities,  free snacks, and the opportunity to compete in various challenges to get a chance to win prizes!</p>
                    </div>
                  </div>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                    <div className={`w-full`}>
                    <Title3 title="Competitive Teams" colour="red"/>
                      <p className='pt-2 pb-5'>We have a range of varsity and junior varsity teams for games such as League of Legends, Valorant,  Overwatch, Rocket League, and more. Tryouts are typically held in the fall semester of each year and have the opportunity to play in the competitive collegiate field in various tournaments held across North America.</p>
                    </div>
                  </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <Title3 title="Club Tournaments" colour="red" />
                    <p className='pt-2 pb-2'>We also hold tournaments for popular games such as League of Legends and Valorant! Tournament rules  vary however we typically offer the opportunity for teams to apply together or to be placed in a team as an individual. Winner(s) receive a cash prize, get bragging rights, and are showcased on our social media!</p>
                    <p className='pt-2 pb-5'>For updates about all club events and to become a part of the community, join our discord server and follow us on <a href='#'>Twitter</a> or <a href='#'>Instagram</a> to learn about upcoming events</p>
                  </div>
                </div>
              </section>
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                  <Title2 title="Our Staff"/>
                    <div class="tabs mm:block hidden">
                    <Title3 title="Co-Presidents" style="pr-8"/>
                        <Copres />
                      <div className="mm:block hidden">
                        <div className='lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff'>
                        <Title3 title="Secretary" style="pr-8"/>
                        <Title3 title="Treasurer" style="pr-8"/>
                        </div>
                        <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>
                            <div className={``}>
                              <Secretary />
                            </div>
                            <div className={``}>
                              <Treasurer />
                            </div>
                        </div>
                      </div>
                      <Title3 title="Human Resources Department" style="pr-8"/>
                        <Hr/>
                      <div class="tab">
                        <input type="checkbox" id="chck1"/>
                        <label class="tab-label select-none" for="chck1">
                        <Title3 title="Partnerships Department" style="pr-8"/>
                          <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                          <p className='bg-darkred pl-10'>
                            <img src={droparrow} alt="" className='dacoolting'/>
                          </p>
                        </label>
                        <div class="tab-content">
                              <Partnerships /> </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck2"/>
                        <label class="tab-label select-none" for="chck2">
                        <Title3 title="Competitive Department" style="pr-8"/>
                          <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                          <p className='bg-darkred pl-10'>
                            <img src={droparrow} alt="" className='dacoolting'/>
                          </p>
                        </label>
                        <div class="tab-content">
                            <Competitive />
                        </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck3"/>
                          <label class="tab-label select-none" for="chck3">
                          <Title3 title="Operations Department" style="pr-8"/>
                            <div className={`flex-col grow ${styles.titleLineRight}`}></div>
                            <p className='bg-darkred pl-10'>
                              <img src={droparrow} alt="" className='dacoolting'/>
                            </p>
                          </label>
                          <div class="tab-content">
                              <Operations />
                        </div>
                      </div>
                      <div class="tab">
                        <input type="checkbox" id="chck4"/>
                        <label class="tab-label select-none" for="chck4">
                        <Title3 title="Marketing Department" style="pr-8"/>
                          <div className={`flex-col grow ${styles.titleLineRight}`}>-</div>
                          <p className='bg-darkred pl-10'>
                            <img src={droparrow} alt="" className='dacoolting'/>
                          </p>
                        </label>
                        <div class="tab-content">
                            <Marketing />
                        </div>
                      </div>
                    </div>
                    <div className="block mm:hidden mt-10">
                      <Title4 title="Co-Presidents"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Copres />
                      </div>
                      <Title4 title="Secretary"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Secretary />
                      </div>
                      <Title4 title="Treasurer"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Treasurer />
                      </div>
                      <Title4 title="Human Resources"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Hr/>
                      </div>
                      <Title4 title="Competitive"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Competitive/>
                      </div>
                      <Title4 title="Operations"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Operations/>
                      </div>
                      <Title4 title="Partnerships"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Partnerships/>
                      </div>
                      <Title4 title="Marketing"/>
                      <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mb-3'>
                        <Marketing/>
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