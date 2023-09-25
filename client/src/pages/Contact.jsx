import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { droparrow } from '../assets';
import styles from '../style'
import { Marketing, Partnerships, Operations, Competitive, Treasurer, Copres } from "../components/sections/Exec";
import Header from '../components/elements/Header';
import Title4 from '../components/elements/Title4';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
        {/* Title */}
        <Header title="Contact" />
<<<<<<< HEAD
        <div className={`max-w-[1340px] m-auto px-12 xs:px-24 py-8`}>
          <div className={`w-full mm:w-2/3 pb-[40px]`}>
            <h6 className={`font-bevietnamRegular font-bold py-2 text-lg`}>
              For general inquiries please contact:
            </h6>
            <p>
              yorkesports@gmail.com
            </p>
            <p>
              esports@my.yorku.ca
            </p>
          </div>
          <div className="w-full mm:w-2/3">
            <h6 className="font-bevietnam font-bold pb-2">
              For specialized inquiries you can find us on Discord
            </h6>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Sarah Miller | Co-President</p>
            <p className="pb-2">ParallelNymph#2742</p>
            <p className="text-red">Ismaeel Jafar Abdus-Samad | Vice-President of Operations</p>
            <p className="pb-2">TheSmiley03#2025</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
          </div>
          <div className="w-full mm:w-2/3 py-8">
            <h6 className="font-bevietnam font-bold">Club Room</h6>
            <p>York University’s Second Student Centre<br/>4700 Keele St #335, North York, ON M3J 1P3</p>
            <p>Room 316</p>
          </div>
        </div>
=======
        <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <div className="block mt-10">
                      <Title4 title="For general inquiries please contact:"/>
                      <div className='my-3'>
                        <h2 className={`font-bevietnam block`}>yorkesports@gmail.com</h2>
                        <h2 className={`font-bevietnam block`}>esports@my.yorku.ca</h2>
                      </div>
                      <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
                        <div className='aboutimg grid grid-cols-3 w-full'>
                          <div className='contactimgcrop hidden xm:flex justify-end'>
                            <div className='faderightimgc1 xm:block hidden z-0'></div>
                          </div>
                        </div>
                      </div>
                      <div className='b4rightc1 xl:block hidden'></div>
                      <div className='faderightc1 xm:block hidden'></div>
                      <div className={`flex-row w-full items-center ${styles.flexCenter}`}>
                        <div className='aboutimg grid grid-cols-3 w-full'>
                          <div className='contactimgcrop2 hidden xm:flex justify-end'>
                            <div className='faderightimgc2 xm:block hidden z-0'></div>
                          </div>
                        </div>
                      </div>
                      <div className='b4rightc2 xl:block hidden'></div>
                      <div className='faderightc2 xm:block hidden'></div>
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
>>>>>>> 744918ec616823f034ca31887e74d1aa82030816
    </>
  );
}

export default Contact;