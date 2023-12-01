import React from 'react'
import Header from '../../components/elements/Header'
import styles from '../../style'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Title1 from '../../components/elements/Title1'
import Title2 from '../../components/elements/Title2'
import Title3 from "../../components/elements/Title3"
import Title4 from '../../components/elements/Title4'
import Title5 from '../../components/elements/Title5'
import { arrowlinksvg, arrowlinkwhitesvg, arrowlinkhover, borderlineshortblack, borderlineshortwhite } from '../../assets'
import { Recent, Button } from '../../components'
import { borderlines2 } from '../../assets'
import { Upcoming } from '../../components'
import ValResults from '../../components/sections/TeamResults'

const Valorant = () => {
    const location = useLocation();
    useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
        <Header title="YGE Valorant" colour="red"></Header>
        <div className={`pt-20 pb-10 max-w-[1340px] m-auto px-8 xs:px-20 ss:px-24`}>
            <Title2 title="Varsity" />
            <Title3 title="Players" style="my-5"></Title3>
            <div className='grid mm:grid-cols-3 grid-cols-2 gap-7'>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <a href="/" className='player'><h1 className='font-bignoodle inline-flex items-start'>Shy <img src={arrowlinkhover} alt="" className='ml-3 w-[20px] asvghover'/><img src={arrowlinksvg} alt="" className='ml-3 w-[20px] asvg'/></h1></a>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <a href="/" className='player'><img src={arrowlinkhover} alt="" className='ml-3 w-[20px] asvghover'/><img src={arrowlinksvg} alt="" className='ml-3 w-[20px] asvg'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <a href="/"><img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`max-w-[1340px] m-auto px-8 xs:px-20 ss:px-24 pb-20`}>
            <Title3 title="Staff" style="my-5"></Title3>
            <div className='grid mm:grid-cols-3 grid-cols-2 gap-7'>
                <div className='playercardred w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortwhite} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Manager</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Toaks<a href="/"><img src={arrowlinkwhitesvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightWhite}`}>-</div>
                        <Title5 title="Full name here" style="pl-4" colour="white"/>
                    </div>
                </div>
                <div className='playercardred w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortwhite} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Coach</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>orioneb<a href="/"><img src={arrowlinkwhitesvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightWhite}`}>-</div>
                        <Title5 title="Full name here" style="pl-4" colour="white"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full overflow-hidden bg-white'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full`}> 
          <section id='home' className={`flex mm:flex-row flex-col`}>
              <div className={`flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}>
                <div className='flex flex-col justify-between items-left w-full'>
                <Title2 title="Recent Results" size="small"></Title2>
                  <div className='my-4 grid grid-cols-1'>
                    <ValResults />
                  </div>
                </div>
                <Button buttonStyle="btn--primarysmall" children="See All Past Games" link="/teams"/>
                <div className={`flex-row w-full items-center ${styles.flexCenter} relative h-[20px] mb-16`}>
                <div className='left flex mt-20 mm:mt-0'>
                  <img src={ borderlines2 } alt="" />
                </div>
              </div>
              </div> 
            </section>
          </div>
        </div>
      </div>
      <div className={`pb-10 max-w-[1340px] m-auto px-8 xs:px-20 ss:px-24`}>
            <Title2 title="Junior Varsity" />
            <Title3 title="Players" style="my-5"></Title3>
            <div className='grid mm:grid-cols-3 grid-cols-2 gap-7'>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <a href="/"><img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Shy <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`max-w-[1340px] m-auto px-8 xs:px-20 ss:px-24 pb-20`}>
            <Title3 title="Staff" style="my-5"></Title3>
            <div className='grid mm:grid-cols-3 grid-cols-2 gap-7'>
                <div className='playercardred w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortwhite} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Manager</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Toaks<a href="/"><img src={arrowlinkwhitesvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightWhite}`}>-</div>
                        <Title5 title="Full name here" style="pl-4" colour="white"/>
                    </div>
                </div>
                <div className='playercardred w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortwhite} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Coach</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>orioneb<a href="/"><img src={arrowlinkwhitesvg} alt="" className='ml-3 w-[20px]'/></a></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightWhite}`}>-</div>
                        <Title5 title="Full name here" style="pl-4" colour="white"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full overflow-hidden bg-white'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full`}> 
          <section id='home' className={`flex mm:flex-row flex-col`}>
              <div className={`flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}>
                <div className='flex flex-col justify-between items-left w-full'>
                  <Title2 title="Recent Results" size="small"></Title2>
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
          </div>
        </div>
      </div>
    </>
    )
}

export default Valorant