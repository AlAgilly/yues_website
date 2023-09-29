import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { droparrow } from '../../assets';
import styles from '../../style'
import { Marketing, Partnerships, Operations, Competitive, Treasurer, Copres } from "../../components/sections/Exec";
import Header from '../../components/elements/Header';
import Title4 from '../../components/elements/Title4';

function Constitution() {
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
        {/* Title */}
        <Header title="Our Constitution" />
        <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <div className="block mt-10">
                      <Title4 title="Last updated: 01-01-01"/>
                      <div className='my-3'>
                        <h2 className={`font-bevietnam block`}>yorkesports@gmail.com</h2>
                        <h2 className={`font-bevietnam block`}>esports@my.yorku.ca</h2>
                      </div>
                      <Title4 title="For specialized inquiries you can find us on Discord" className="pt-5"/>
                      <div className='grid-cols-1 mb-3'>
                        <Copres />
                      </div>
                      <div className='grid-cols-1 mb-3'>
                        <Treasurer />
                      </div>
                      <div className='grid-cols-1 mb-3'>
                        <Competitive/>
                      </div>
                      <div className='grid-cols-1 mb-3'>
                        <Operations/>
                      </div>
                      <div className='grid-cols-1 mb-3'>
                        <Partnerships/>
                      </div>
                      <div className='grid-cols-1 mb-3'>
                        <Marketing/>
                      </div>
                      <Title4 title="Club Room" className="pt-5"/>
                      <div className='my-3'>
                        <h2 className={`font-bevietnam block`}>York University’s Second Student Centre</h2>
                        <h2 className={`font-bevietnam block`}>4700 Keele St #335, North York, ON M3J 1P3</h2>
                        <h2 className={`font-bevietnam block`}>Room 316</h2>
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

export default Constitution;