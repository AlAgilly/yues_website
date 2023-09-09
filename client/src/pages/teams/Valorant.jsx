import React from 'react'
import Header from '../../components/elements/Header'
import styles from '../../style'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Title2 from '../../components/elements/Title2'
import Title3 from "../../components/elements/Title3"
import Title4 from '../../components/elements/Title4'
import Title5 from '../../components/elements/Title5'
import { arrowlinksvg, borderlineshortblack } from '../../assets'

const Valorant = () => {
    const location = useLocation();
    useEffect(() => {
      // Scroll top when location changes
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
        <Header title="YGE Valorant" colour="red"></Header>
        <div className={`${styles.paddingX} ${ styles.paddingY} max-w-[1140px] m-auto`}>
            <Title2 title="Varsity" />
            <Title3 title="Players" style="my-5"></Title3>
            <div className='grid grid-cols-3 gap-7'>
                <div className='playercard w-full overflow-hidden'>
                    <div className='relative pb-3'>
                        <img src={borderlineshortblack} alt="" className='absolute right-[-50px] w-[50%]'/>
                    </div>
                    <h3 className='font-bevietnamblack font-bold'>Player</h3>
                    <h1 className='font-bignoodle inline-flex items-start'>Nexus <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
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
                    <h1 className='font-bignoodle inline-flex items-start'>Nexus <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
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
                    <h1 className='font-bignoodle inline-flex items-start'>Nexus <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
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
                    <h1 className='font-bignoodle inline-flex items-start'>Nexus <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
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
                    <h1 className='font-bignoodle inline-flex items-start'>Nexus <img src={arrowlinksvg} alt="" className='ml-3 w-[20px]'/></h1>
                    <div class="flex items-center">
                        <div className={`flex-col grow ${styles.titleLineRightBlack}`}>-</div>
                        <Title5 title="Full name here" style="pl-4"/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Valorant