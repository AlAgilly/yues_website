import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../style'
import { Button } from '../components';
import { borderlines2, eventsnip, aboutsnip, out, borderlines, bordercenters, dota2 } from '../assets'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLink, faUnlink  } from '@fortawesome/fontawesome-free-solid'
import Insta from '../components/Insta';
import Upcoming from '../components/Upcoming';
import Recent from '../components/Recent';
import Events from '../components/Events';
import { HoverImage } from '../components';
import { dota2r } from '../assets';

function Teams (){
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
    return (
        <>
          <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1140px] w-full ${styles.paddingY}`}> 
                <div className='grid grid-cols-4 gap-5'>
                  <div className=''>
                    <a href="">
                      <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                  <div className=''>
                    <a href="">
                    <HoverImage src={dota2r} hoverSrc={dota2} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
  
export default Teams;