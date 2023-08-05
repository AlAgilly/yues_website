import React, { useEffect, useState } from "react";
import { getUpcoming } from "../lib";
import styles from "../style";
import { team1, team2 } from "../assets";
import Error from "./Error";

function Upcoming() {
    const [upcoming, setUpcoming] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getUpcoming()
            setIsError(error)
            setUpcoming(data)
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
        {upcoming.map((up, index) => (
            <div className={`p-5 w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-5 mm:grid-cols-8 items-center justify-self-center ${index === index.length - 1 ? '' : 'borderb'}`}>
                <div className=''>
                    <h2>{up.game}</h2>
                    <h3>{up.team}</h3>
                </div>
                <h4 className={`${styles.titleH4} xm:col-span-2 xm:flex hidden`}>{up.date}</h4>
                <img src={ team1 } alt="" className={`h-16 justify-self-center`}/>
                <p className={`${styles.titleH4} text-[50px] mm:p-0 p-0 justify-self-center mm:flex hidden `}>vs.</p>
                <img src={ team2 } alt="" className={`h-16 justify-self-center`}/>
                <p className='location mm:col-span-2 col-span-1 xs:col-span-2'> {up.eventname}</p>
            </div>
            ))}
        </>
    )
}

export default Upcoming;
