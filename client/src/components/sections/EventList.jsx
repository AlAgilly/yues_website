import React, { useEffect, useState } from "react";
import { getEvents, getPastEvents } from "../../lib";
import Error from "../elements/Error";
import Title2 from "../elements/Title2";
import { arrowlinksvg } from "../../assets";

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
                            <p className="inline-flex items-center link">
                                <a href={events.signup} className="inline-flex">
                                    Sign up<img src={arrowlinksvg} alt="" className='ml-3 w-[12px]'/>
                                </a>
                            </p>
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
            {dataForDisplay.map((pastevents) => (
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
                            <p className="inline-flex items-center link">
                                <a href={pastevents.gallery} className="inline-flex">
                                    Gallery<img src={arrowlinksvg} alt="" className='ml-3 w-[12px]'/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-end my-6"><button
                className={`btn btn--primarysmall mm:py-0 py-2`}
                onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Show Less' : 'See All Past Events'} 
            </button></div>
        </>
    )
}

export{
    EventComponent,
    PastEventComponent
};