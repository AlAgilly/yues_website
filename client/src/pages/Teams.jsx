import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../style'
// import { dota2r, dota2 } from '../assets'
import { HoverImage } from '../components';
import Header from '../components/elements/Header';
import Title3 from '../components/elements/Title3';
import { apex, cod, csgo, dota2, hearthstone, league, overwatch, r6s, rocketleague, valorant } from '../assets';

function Teams (){
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
    return (
        <>
          <Header title="YGE Teams" colour="red"/>
          <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} px-8 xs:px-20 ss:px-24`}>
              <div className={`p-0 max-w-[1140px] w-full ${styles.paddingY} `}> 
                <div className='grid mm:grid-cols-4 xm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5'>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Apex Legends" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={apex} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="League of Legends" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={league} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="VALORANT" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={valorant} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="CS:GO" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={csgo} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Rainbow 6 Seige" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={r6s} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Hearthstone" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={hearthstone} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Rocket League" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={rocketleague} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Dota 2" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={dota2} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Call of Duty" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={cod} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className='smalleventred my-3'>
                    <div className='smalleventred2 relative'>
                      <div className="justify-center items-center relative">
                        <div class="relative">
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Title3 title="Overwatch" style="m-auto text-center absolute textty"/>
                          </div>
                          <img src={overwatch} alt="" className='teamimg m-auto w-1/3 my-3'/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
  
export default Teams;