import React, { useEffect, useState } from "react";
import { getRecent } from "../../lib";
import styles from "../../style";
import { team1, team2 } from "../../assets";
import Error from "../elements/Error";
import { Link } from "react-router-dom";

function Recent() {
    const [recent, setRecent] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getRecent()
            setIsError(error)
            setRecent(data)
            setLoading(false)
        }
        fetchData()
        return () => {}
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(!loading && isError) {
        return (<Error />)

    }

    return (
        <>
            {recent.slice(0, 3).map((rec, index) => (
                <div className={`p-5 w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-6 mm:grid-cols-7 gap-2 items-center justify-self-center ${index === recent.slice(0,3).length - 1 ? '' : 'borderb'}`}>
                    <div className=''>
                        <Link to={`/${rec.game}`}>
                            <h2>{rec.game}</h2>
                            <h3>{rec.team}</h3>
                        </Link>
                    </div>
                    <h4 className={`${styles.titleH4} text-center mm:flex hidden`}>{rec.date}</h4>
                    <img src={ team1 } alt="" className={`h-16 justify-self-center xm:flex hidden`}/>
                    <p className={`${styles.titleH4} text-[50px] justify-self-center`}><span className='text-red'>4</span> - 2</p>
                    <img src={ team2 } alt="" className={`h-16 justify-self-center xm:flex hidden`}/>
                    <p className='location xm:col-span-2 col-span-1 xs:flex hidden'>{rec.eventname}</p>
                    {/* <div className='description justify-self-center xm:grid grid-rows-2 text-end hidden justify-items-end'>
                    <p className={`${rec.twitch != null ? "hidden" : "mm:flex hidden select-none"}`}>Twitch&nbsp;VOD&nbsp;<FontAwesomeIcon icon={faUnlink} /></p>
                    <p className={`${rec.twitch == null ? "hidden" : "mm:flex hidden"}`}><a href={rec.twitch}>Twitch&nbsp;VOD&nbsp;<FontAwesomeIcon icon={faLink} /></a></p>
                    <p className={`${rec.stats != null ? "hidden" : "mm:flex hidden select-none"}`}>Stats Page&nbsp;<FontAwesomeIcon icon={faUnlink} /></p>
                    <p className={`${rec.stats == null ? "hidden" : "mm:flex hidden"}`}><a href={rec.stats}>Stats Page&nbsp;<FontAwesomeIcon icon={faLink} /></a></p>
                    </div> */}
                </div>
            ))}
        </>
    )
}

export default Recent;
