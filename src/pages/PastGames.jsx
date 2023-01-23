import React from 'react'
import styles from '../style'
import { Button } from '../components';
import { recent, resultsDec, resultsOct } from '../constants';
import { aboutsnip, team1, team2 } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUnlink } from '@fortawesome/fontawesome-free-solid'

function PastGames() {
  return (
    <>
      <div className='w-full overflow-hidden bg-white'>
        <div className={`${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full ${styles.paddingY}`}>
            <section id='home' className={`flex mm:flex-row flex-col`}>
              <div className={`flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}>
                <div className='flex flex-col justify-between items-left w-full'>
                  <h3 className={`${styles.titleH3 } leading-10 text-black`}>YUES VALORANT VARASITY HISTORICAL RESULTS</h3>
                  <div class="bottomborder">-</div>
                  <div className='my-4 grid grid-cols-1'>
                    {/* December results section start */}
                  <h4 className={`${styles.titleH4}justify-self-left mm:flex hidden pt-16`}>December</h4>
                    {resultsDec.map((rec, index) => (
                      <div className={`items-center justify-self-center `}>
                      <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center mm:flex hidden `}></h4>
                      <div className={`w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-4 mm:grid-cols-9 items-center justify-self-center ${index === resultsDec.length - 1 ? '' : 'borderb'}`}>
                        <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center mm:flex hidden`}>{rec.datetime}</h4>
                        <img src={team1} alt="" className={`${index % 1 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`} />
                        <p className={`${styles.titleH4} text-[50px] mm:p-5 p-0 justify-self-center `}> {rec.score} </p>
                        <img src={rec.opp} alt="" className={`${index % 1 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`} />
                        <p className='location mm:col-span-2 col-span-1 justify-self-center xs:flex hidden'> {rec.event}</p>
                        <div className='description justify-self-center xm:grid grid-rows-2 text-end hidden justify-items-end'>
                          <p className={`${rec.twitch != null ? "hidden" : "mm:flex hidden"}`}>Twitch VOD&nbsp;<FontAwesomeIcon icon={faUnlink} /></p>
                          <p className={`${rec.twitch = null ? "hidden" : "mm:flex hidden"}`}><a href={rec.twitch}>Twitch VOD <FontAwesomeIcon icon={faLink} /> </a></p>
                          <p className={`${rec.stats != null ? "hidden" : "mm:flex hidden"}`}>Stats Page&nbsp;<FontAwesomeIcon icon={faUnlink} /> </p>
                          <p className={`${rec.stats == null ? "hidden" : "mm:flex hidden"}`}><a href={rec.stats}>Stats Page <FontAwesomeIcon icon={faLink} /> </a></p>
                        </div>
                      </div>
                      </div>
                    ))}
                    {/* December results section end */}
                    {/* October results section start */}
                  <h4 className={`${styles.titleH4}justify-self-left mm:flex hidden pt-16`}>October</h4>
                    {resultsOct.map((rec, index) => (
                      <div className={`items-center justify-self-center `}>
                      <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center mm:flex hidden `}></h4>
                      <div className={`w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-4 mm:grid-cols-9 items-center justify-self-center ${index === resultsOct.length - 1 ? '' : 'borderb'}`}>
                        <h4 className={`${styles.titleH4} col-span-1 mm:col-span-2 justify-self-center mm:flex hidden`}>{rec.datetime}</h4>
                        <img src={team1} alt="" className={`${index % 1 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`} />
                        <p className={`${styles.titleH4} text-[50px] mm:p-5 p-0 justify-self-center `}> {rec.score} </p>
                        <img src={rec.opp} alt="" className={`${index % 1 === 1 ? "hidden" : "mm:flex hidden p-5"} justify-self-center`} />
                        <p className='location mm:col-span-2 col-span-1 justify-self-center xs:flex hidden'> {rec.event}</p>
                        <div className='description justify-self-center xm:grid grid-rows-2 text-end hidden justify-items-end'>
                          <p className={`${rec.twitch != null ? "hidden" : "mm:flex hidden"}`}>Twitch VOD&nbsp;<FontAwesomeIcon icon={faUnlink} /></p>
                          <p className={`${rec.twitch = null ? "hidden" : "mm:flex hidden"}`}><a href={rec.twitch}>Twitch VOD <FontAwesomeIcon icon={faLink} /> </a></p>
                          <p className={`${rec.stats != null ? "hidden" : "mm:flex hidden"}`}>Stats Page&nbsp;<FontAwesomeIcon icon={faUnlink} /> </p>
                          <p className={`${rec.stats == null ? "hidden" : "mm:flex hidden"}`}><a href={rec.stats}>Stats Page <FontAwesomeIcon icon={faLink} /> </a></p>
                        </div>
                      </div>
                      </div>
                    ))}
                    {/* October results section end */}
                    <br /><br /><br /><br />
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

export default PastGames;