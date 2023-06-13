import React, { useEffect, useState } from "react";
import { getEvents } from "../lib";
import styles from "../style";
import { team1, team2 } from "../assets";
import TinyEvent from "./TinyEvent";

function Events() {
    const [events, setEvents] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getEvents()
            setIsError(error)
            setEvents(data)
            setLoading(false)
        }
        fetchData()
        return () => {}
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(!loading && isError) {
        return <h1>An error!!</h1>

    }

    return (
        <>
            {events.map((events, index) => (
                <TinyEvent key={events.id} title={ events.eventname } date={events.date} time={events.time} location={events.room} className={`${index > 1 ? 'hidden xm:block' : 'xm:block'}`} />
            ))}
        </>
    )
}

export default Events;
