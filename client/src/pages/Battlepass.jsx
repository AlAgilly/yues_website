import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { arrowlinkhover, arrowlinksvg, droparrow } from '../assets';
import styles from '../style'
import { Marketing, Partnerships, Operations, Competitive, Treasurer, Copres } from "../components/sections/Exec";
import Header from '../components/elements/Header';
import Title4 from '../components/elements/Title4';
import Title1 from '../components/elements/Title1';
import Title2 from '../components/elements/Title2';
import Title3 from '../components/elements/Title3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/fontawesome-free-regular';

function Battlepass() {
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);


  
  return (
    <>
        {/* Title */}
        <Header title="Battle Pass" />
        <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <div className="block mt-10">
                    <h2 className={`font-bevietnam block`}>yorkesports@gmail.com</h2>

                    <Title2 title="How it works" />
                    <Title3 title="Earning XP" />
                      <div className='my-3'>
                        <h2 className={`font-bevietnam block`}>yorkesports@gmail.com</h2>
                        <h2 className={`font-bevietnam block`}>esports@my.yorku.ca</h2>
                      </div>
                      <Title3 title="Levels" />
                      <Title2 title="Important Links" />
                      <div className='my-3'>
                      <p className="items-center link">
                            <a href="#" className="inline-flex">
                                Sign-up Form<img src={arrowlinkhover} alt="" className='ml-2 w-[12px] asvghover'/><img src={arrowlinksvg} alt="" className='ml-2 w-[12px] asvg'/>
                            </a>
                        </p>
                        <p className="items-center link inline-flex">
                        <Title4 title="E-Transfer Email:" />
                            <button className="inline-flex items-center ml-2 copy" onClick={() =>  navigator.clipboard.writeText('yorkesports@gmail.com')}>
                              yorkesports@gmail.com<FontAwesomeIcon icon={faCopy}  className='ml-3'/>
                              <p className='copied'>Success!</p>

                            </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div> 
    </>
  );
}

export default Battlepass;