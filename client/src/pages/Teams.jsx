import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../style'
import { dota2r, dota2 } from '../assets'
import { HoverImage } from '../components';
import Header from '../components/elements/Header';

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
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1140px] w-full ${styles.paddingY}`}> 
                <div className='grid grid-cols-4 gap-5'>
                  <div className=''>
                    <Link to="dota2">
                      <HoverImage src={dota2r} hoverSrc={dota2} />
                    </Link>
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