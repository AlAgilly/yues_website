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
  
function EventsPage (){
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

    return (
        <>
          {/* Title */}
          <Header title="Community Events" colour="white"/>
          {/* About Snippet */}
          <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
                <section id='home' className={`flex flex-col pt-10 pb-12 px-8 xs:px-20 ss:px-24 w-3/4`}>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                    <div className={`w-full`}>
                      <Title2 title="Upcoming Events"/>
                      <div className='grid grid-cols-1'>
                        <div className='bigeventred my-3'>
                          <div className='bigeventred2'>
                            <Title2 title="Event Name"/>
                            <div className={`w-full`}>
                              <p className='date'> Monday Dec 12</p>
                              <p className='date2 pb-3'> location, room 111</p>
                              <p className='pb-3'>Lorem ipsum, description of event wow Lorem ipsum, description of event wowLorem ipsum, description of event wowLorem ipsum, description of event wow</p>
                            </div>
                          </div>
                        </div>
                        <div className='bigeventred my-3'>
                          <div className='bigeventred2'>
                            <Title2 title="Event Name"/>
                            <div className={`w-full`}>
                              <p className='date'> Monday Dec 12</p>
                              <p className='date2 pb-3'> location, room 111</p>
                              <p className='pb-3'>Lorem ipsum, description of event wow Lorem ipsum, description of event wowLorem ipsum, description of event wowLorem ipsum, description of event wow</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                    <div className={`w-full`}>
                      <Title2 title="Past Events"/>
                      <div className='grid grid-cols-1'>
                        <div className='bigeventgrey my-3'>
                          <div className='bigeventred2'>
                            <Title2 title="Event Name"/>
                            <div className={`w-full`}>
                              <p className='date'> Monday Dec 12</p>
                              <p className='date2 pb-3'> location, room 111</p>
                              <p className='pb-3'>Lorem ipsum, description of event wow Lorem ipsum, description of event wowLorem ipsum, description of event wowLorem ipsum, description of event wow</p>
                            </div>
                          </div>
                        </div>
                        <div className='bigeventgrey my-3'>
                          <div className='bigeventred2'>
                            <Title2 title="Event Name" colour="black"/>
                            <div className={`w-full`}>
                              <p className='date'> Monday Dec 12</p>
                              <p className='date2 pb-3'> location, room 111</p>
                              <p className='pb-3'>Lorem ipsum, description of event wow Lorem ipsum, description of event wowLorem ipsum, description of event wowLorem ipsum, description of event wow</p>
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
  
export default EventsPage;