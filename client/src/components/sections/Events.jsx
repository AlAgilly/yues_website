import React, { useEffect, useState } from "react";
import { getEvents } from "../../lib";
import TinyEvent from "../elements/TinyEvent";
import Error from "../elements/Error";

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
        return (<Error />)

    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-between gap-y-10 gap-x-10 items-left my-4'>
                {events.slice(0, 4).map((events, index) => (
                    <TinyEvent key={events.id} title={ events.event } date={events.date} time={events.time} location={events.room} className={`${index > 1 ? 'hidden xm:block' : 'xm:block'}`} />
                ))}
            </div>
        </>
    )
}

export default Events;
