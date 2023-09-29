import React, { useEffect, useState } from "react";
import { getUpcoming } from "../../lib";
import styles from "../../style";
import { team1, team2 } from "../../assets";
import Error from "../elements/Error";

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

    if(upcoming.length == 0) {
        return (
            <div className='w-full text-center px-0 py-4 xs:px-8 ss:px-24 xs:py-0 sm:px-32 mm:px-64'>
            <div className='text-red font-bignoodle text-[34px] xs:text-[38px] mm:text-[42px]'>No Upcoming games :(</div>
            <div className='text-darkGray font-bevietnam text-[18px] xs:text-[18px] mm:text-[20px] py-2'>Looks like there are no games scheduled... check back in a few days to see if that changes!</div>
          </div>
            )

    }

    return (
        <>
        {upcoming.slice(0, 3).map((up, index) => (
            <div className={`p-5 w-full grid grid-cols-2 xs:grid-cols-3 xm:grid-cols-6 mm:grid-cols-8 items-center justify-self-center ${index === index.length - 1 ? '' : 'borderb'}`}>
                <div className=''>
                    <h2>{up.game}</h2>
                    <h3>{up.team}</h3>
                </div>
                <h4 className={`${styles.titleH4} xm:col-span-2 col-span-1 xm:flex hidden`}>{up.date}</h4>
                <img src={ team1 } alt="" className={`h-16 justify-self-center`}/>
                <p className={`${styles.titleH4} text-[50px] mm:p-0 p-0 justify-self-center mm:flex hidden `}>vs.</p>
                <img src={ team2 } alt="" className={`h-16 justify-self-center`}/>
                <p className='location xm:col-span-2 col-span-1 xs:col-span-2'> {up.eventname}</p>
            </div>
            ))}
        </>
    )
}

export default Upcoming;
