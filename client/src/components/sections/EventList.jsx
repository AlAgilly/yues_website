import React, { useEffect, useState } from "react";
import { getEvents, getPastEvents } from "../../lib";
import Error from "../elements/Error";
import Title2 from "../elements/Title2";
import Button from "../elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faTwitter, faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'


function EventComponent() {
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
            {events.map((events, index) => (
                <div className='bigeventred my-3'>
                <div className='bigeventred2 relative'>
                    <div className="px-[40px] eventcard">
                    <Title2 title={`${events.event}`} size="small"/>
                    <div className={`w-full`}>
                        <p className='date'>{events.date}</p>
                        <p className='date2 pb-3'>{events.room}</p>
                        <p className='pb-3'>{events.desc}</p>
                    </div>
                    </div>
                    <div className={`${events.signup == "" ? "hidden" : "absolute right-[50px] bottom-[20px]" } justify-end`}>
                        <p className="flex items-center link"><a href={events.signup} className="">
                            Signup Form 
                        </a>&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></p>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}

function PastEventComponent() {

    const [pastevents, setPastEvents] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    const [expanded, setExpanded] = useState(false)
    const dataForDisplay = expanded ? pastevents : pastevents.slice(0, 3)


    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getPastEvents()
            setIsError(error)
            setPastEvents(data)
            setLoading(false)
        }
        fetchData()
        return () => {}
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(!loading && isError) {
        return ("Error :(")

    }

    return (
        <>                            
            {dataForDisplay.map((pastevents, index) => (
                <div className='bigeventgrey my-3'>
                    <div className='bigeventred2 relative'>
                        <div className="px-[40px] eventcard">
                        <Title2 title={`${pastevents.event}`} size="small" colour="black"/>
                        <div className={`w-full`}>
                            <p className='date'>{pastevents.date}</p>
                            <p className='date2 pb-3'>{pastevents.room}</p>
                            <p className='pb-3'>{pastevents.desc}</p>
                        </div>
                        </div>
                        <div className={`${pastevents.gallery == "" ? "hidden" : "absolute right-[50px] bottom-[20px]" } justify-end`}>
                            <p className="flex items-center link"><a href={pastevents.gallery} className="">
                                Signup Form 
                            </a>&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></p>
                        </div>
                    </div>
                </div>
            ))}

                <div className="flex justify-end my-6"><button
                    className={`btn btn--primarysmall mm:py-0 py-2`}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Show Less' : 'See All Past Events'} 
                </button></div>

        </>
    )
}

export{
    EventComponent,
    PastEventComponent
};