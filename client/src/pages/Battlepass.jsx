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
              <section id='battlepass' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 mm:w-4/5 w-full`}>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <div className="block mt-10">
                    <h2 className={`font-bevietnam block`}>Welcome to the York Gaming & Esports Battle Pass!</h2>
                    <h2 className={`font-bevietnam block mb-5`}>This exciting membership allows you to earn rewards while participating in events hosted by YGE (thats us!).</h2>
                    <Title2 title="How it works" />
                    <p className={`font-bevietnam block my-5`}>When you attend our events you earn XP, leveling you up and earning you unique rewards at each tier!</p>
                    <Title3 title="Earning XP" />
                      <div className='my-3'>
                        <Title4 title="Collab Events // 2000XP *" colour="red" />
                        <p className={`font-bevietnam block`}>We regularly collaborate with other clubs (Cullinary Association at York (CAY) and Computing Students Hub (CSHub) to name a few) to provide free events and tournaments open to our respective communities. These events tend to be larger and have a limited number of seats; and as a Battle Pass member, you get early access to the sign-up forms, allowing you to snag a seat in advance! For tournaments, in-person spectators will also be eligible to earn XP at sign-in.</p>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Chill Nites // 1000XP *" colour="red" />
                        <p className={`font-bevietnam block`}>Chill Nites are weekly in-person events that are usually hosted on Thursday/Friday nights. Chill Nites are open from 6:30 - 9:00 PM, feel free to stop by, sign in, and stay as long as you'd like. Entry is free, open to the public, and food and drinks are provided for everyone. All participants will be eligible to earn XP at sign-in.</p>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Tournaments // 1000XP *" colour="red" />
                        <p className={`font-bevietnam block`}>Tournaments occur throughout the school year and focus on a specific game, such as League of Legends or Valorant. They are open to players of all skill levels, but sign up requirements vary per tournament. Only participants will be eligible to earn XP.</p>
                      </div>
                      <div className='my-3'>
                        <Title4 title="In-Houses // 250XP" colour="red" />
                        <p className={`font-bevietnam block`}>In-houses are custom games where you play with and against YorkU students as well as other members of our extended community. Currently only Valorant and League of Legends in-houses run weekly, but we are working to bring other games into rotation. Only active Battle Pass members will be eligible to earn XP.</p>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Streams & Watch Parties // 250XP" colour="red" />
                        <p className={`font-bevietnam block`}>We stream our competitive teams' games as well as some events listed above on our <a href="https://twitch.tv/yuesports">Twitch channel</a> and in <a href="https://discord.gg/yorkesports">Discord</a>. Stop by and support YorkU as we compete against some of NA's best collegiate teams, or your friends as they participate in YGE games. Only active Battle Pass members will be eligible to earn XP.</p>
                      </div>
                      <em>* If you attend these events before you buy the Battle Pass, you will retroactively get the XP at a 0.5x multiplier.</em>
                      <Title3 title="Levels" className="mt-5"/>
                    <div className='my-2'>
                        <Title4 title="Level 1 // 1000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>One can of Monster (Energy Drink)</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 2 // 3000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>YGE Button</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 3 // 5000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>YGE Keychain</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 4 // 6000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>5 Assorted Stickers</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 5 // 8000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>Crocheted Headset Sprout</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 6 // 10000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>YGE Lanyard</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 7 // 11000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>Game Specific Keychain</h2>
                      </div>
                      <div className='my-2'>
                        <Title4 title="Level 8 // 13000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>Game-Specific Poster</h2>
                      </div>
                      <div className='mt-2 mb-5'>
                        <Title4 title="Level 9 // 15000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>YGE T-Shirt</h2>
                      </div>
                      <Title3 title="Other Perks" />
                      <div className='mt-2 mb-5'>
                        <Title4 title="Other perks include:" colour="black"/>
                        <ul className={`font-bevietnam list`}> 
                        <li>- Priority seating at limited events (tournaments/dinners)</li>
                        <li>- Discounted admission for paid events</li>
                        <li>- Special role in Discord</li>
                        <li>- Special role in our Minecraft SMP server</li>
                        {/* You gain the XP at the end of the event. */}
                          </ul>
                      </div>  
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
                              <p className='copied'>Copied!</p>

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