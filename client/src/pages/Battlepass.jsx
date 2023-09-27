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
                    <h2 className={`font-bevietnam block`}>Welcome to the York Gaming & Esports Battle Pass!</h2>
                    <h2 className={`font-bevietnam block mb-5`}>This exciting membership allows you to earn rewards while participating in our events. </h2>
                    <Title2 title="How it works" />
                    <h2 className={`font-bevietnam block my-5`}>When you attend our events, you earn XP; the more XP you gain, the higher level you will be, earning you rewards at each level up! You gain the XP at the end of the event.</h2>
                    <Title3 title="Earning XP" />
                      <div className='my-3'>
                        <Title4 title="Collab Events // 2000XP *" colour="red" />
                        <h2 className={`font-bevietnam block`}>We regularly collaborate with other clubs (Cullinary Association at York (CAY) and Computing Students Hub (CSHub) to name a few) to provide free events and tournaments open to our respective clubs. These events tend to be bigger events and have a limited number of seats; as a Battle Pass member, you get early access to the sign-up forms! For tournaments, you will also get the chance to earn the XP by just spectating.</h2>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Chill Nites // 1000XP *" colour="red" />
                        <h2 className={`font-bevietnam block`}>Chill Nites are weekly in-person events that usually run on Thursdays and Fridays at 6:30PM. It is free to attend, includes free food/drinks, and you do not need to be a YorkU student to attend. The doors will be open from 6:30 to 8:30; feel free to come whenever and stay as long as you would like but you must sign in with our staff to earn your XP.</h2>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Tournaments // 1000XP *" colour="red" />
                        <h2 className={`font-bevietnam block`}>Tournaments occur a couple of times throughout the school year. They usually focus on one game (most commonly League of Legends & Valorant) and while it is open to players of all skill levels, conditions to sign up vary per tournament. To earn this XP, you must be participating.</h2>
                      </div>
                      <div className='my-3'>
                        <Title4 title="In-Houses // 250XP" colour="red" />
                        <h2 className={`font-bevietnam block`}>In-houses are custom games where you play with and against YorkU students and other members of the Discord servers. Our Valorant and League of Legends in-houses run weekly and we are working on bringing other regularly reoccuring in-houses for other games in the near future. You must be actively participating in the games to earn XP.</h2>
                      </div>
                      <div className='my-3'>
                        <Title4 title="Streams & Watch Parties // 250XP" colour="red" />
                        <h2 className={`font-bevietnam block`}>We stream our teams' games on our <a href="/">Twitch channel</a> and sometimes in discord as well to watch with others. If you watch the twitch stream or join the discord and watch the Discord Watch Party, you will gain XP.</h2>
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
                        <Title4 title="Level 9 // 15000XP" colour="red"/>
                        <h2 className={`font-bevietnam block`}>Other perks you get with this battle pass include:</h2>
                        <ul className={`font-bevietnam list`}> 
                        <li>Priority seating at limited events (tournaments/dinners)</li>
                        <li>Discounted admission for paid events</li>
                        <li>Special role in Discord</li>
                        <li>Special role in our Minecraft SMP server</li>
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