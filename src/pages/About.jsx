import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { droparrow } from '../assets';
import styles from '../style'

  
function Contact (){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.className === "block") {
                panel.className = "hidden";
            } else {
                panel.className = "block";
            }
    });
    }
    return (
        <>
          {/* Events title */}
          <div className='w-full overflow-hidden bg-white '>
            <div className={` ${styles.flexStart} z-20 idk`}>
              <div className={`p-0 ${styles.boxWidth} py-2 px-8 xs:px-20 ss:px-24`}> 
                <h3 className={`${styles.titleH3} leading-10 leftborder blackborder text-white  w-full`}>About us</h3>
              </div>
            </div>
          </div>
          {/* About Snippet */}
        <div className='w-full overflow-hidden bg-white'>
            <div className={`${styles.flexStart} `}>
              <div className={`p-0 max-w-[1340px] w-full`}> 
                <section id='home' className={`flex flex-col pt-10 pb-12 px-8 xs:px-20 ss:px-24 w-3/4`}>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH4}`}>Our Club</h4>
                    <div className={`${styles.titleLineBottom}`}>-</div>
                    <div className='py-5'>
                        <p className='py-2'>York University Esports (YUES) is a club that aims to bring together the community for gaming at York University. We hope to create a space for casual and competitive gamers alike through facilitating club events as well as managing our esports teams! We strive for inclusivity and part of our mission at YUES is to make sure our club is a safe space for everyone to have fun, free of judgement. We are also ratified as a club at York University so you can also check out our <a href='#'>YUConnect page</a>!</p>
                        <p className='py-2'>Here are some ways to get involved!</p>
                    </div>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Community Events</h4>
                    <p className='py-5'>Our community is also not limited to the online space as we hold weekly Chill Nites that are often held in person on campus! We welcome those looking to have fun and make new friends while participating in a variety of activities or holiday themed events. Our events include fun activities,  free snacks, and the opportunity to compete in various challenges to get a chance to win prizes!</p>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Competitive Teams</h4>
                    <p className='py-5'>We have a range of varsity and junior varsity teams for games such as League of Legends, Valorant,  Overwatch, Rocket League, and more. Tryouts are typically held in the fall semester of each year and have the opportunity to play in the competitive collegiate field in various tournaments held across North America.</p>
                  </div>
                </div>
                <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                    <h4 className={`${styles.titleH5} text-red`}>Club Tournaments</h4>
                    <p className='py-5'>We also hold tournaments for popular games such as League of Legends and Valorant! Tournament rules  vary however we typically offer the opportunity for teams to apply together or to be placed in a team as an individual. Winner(s) receive a cash prize, get bragging rights, and are showcased on our social media!</p>
                    <p className='py-5'>For updates about all club events and to become a part of the community, join our discord server and follow us on <a>Twitter</a> or <a>Instagram</a> to learn about upcoming events</p>
                  </div>
                </div>
              </section>
              <section id='home' className={`flex flex-col pb-24 px-8 xs:px-20 ss:px-24 w-full`}>
                  <div className={`flex-1 mm:${styles.flexStart} py-3`}>    
                  <div className={`w-full`}>
                  <details>
                    <summary class="question cursor-pointer select-none outline-none w-full">
                        <div className='flex flex-row'>
                            <h5 className={`${styles.titleH5} text-black bg-white flex-col pr-10`}>Club&nbsp;Tournaments</h5>
                            <div className={`flex-col w-full bg-red ${styles.titleLineRight}`}>-</div>
                            <p className='bg-darkred pl-10'>
                                <img src={droparrow} alt="" className='dacoolting'/>
                            </p>
                        </div>
                    </summary>
                      <div className='grid'></div>
                    </details>
                    <details>
                    <summary class="question cursor-pointer select-none outline-none w-full">
                        <div className='flex flex-row'>
                        <h5 className={`${styles.titleH5} text-black bg-white flex-col pr-10`}>Presidents</h5>
                            <div className={`flex-col w-full bg-red ${styles.titleLineRight}`}>-</div>
                            <p className='bg-darkred pl-10'>
                                <img src={droparrow} alt="" className='dacoolting'/>
                            </p>
                        </div>
                    </summary>
                    <p class="pt-1 pb-3 staff">Of course. It's yours to use wherever and whenever you like.</p>
                    </details>
                    </div>
                </div>
              </section>
            </div>
          </div>
          </div> 
        </>
    )
}
  
export default Contact;