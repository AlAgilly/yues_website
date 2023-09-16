import React, { useEffect, useState } from "react";
import { getCopres, getSecretary, getTreasurer, getHr, getMarketing, getPartnerships, getCompetitive, getOperations } from "../../lib";
import TinyStaff from "../elements/TinyStaff";
import Error from "../elements/Error";

function Copres() {
    const [copres, setCopres] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getCopres()
            setIsError(error)
            setCopres(data)
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

            {copres.map((exec, index) => (
            <div className={`my-3`}>

                <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
                <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
            </div>
                ))}
            
        </>
    )
}

function Treasurer() {
    const [treasurer, setTreasurer] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getTreasurer()
            setIsError(error)
            setTreasurer(data)
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
            {treasurer.map((exec, index) => (
            <div className={`my-3 ${exec.position == "Vice President" ? "block" : "hidden"}`}>

            <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
            <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
        </div>
            ))}
        </>
    )
}


function Partnerships() {
    const [partnerships, setPartnerships] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getPartnerships()
            setIsError(error)
            setPartnerships(data)
            setLoading(false)
        }
        fetchData()
        return () => {}
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(!loading && isError) {
        return <Error />

    }

    return (
        <>
                {partnerships.map((exec) => (
            <div className={`my-3 ${exec.position == "Vice President" ? "block" : "hidden"}`}>

            <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
            <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
        </div>                ))}
        </>
    )
}

function Marketing() {
    const [marketing, setMarketing] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getMarketing()
            setIsError(error)
            setMarketing(data)
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
            {marketing.map((exec, index) => (
            <div className={`my-3 ${exec.position == "Vice President" ? "block" : "hidden"}`}>

            <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
            <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
        </div>                ))}
        </>
    )
}

function Operations() {
    const [operations, setOperations] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getOperations()
            setIsError(error)
            setOperations(data)
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
            {operations.map((exec, index) => (
            <div className={`my-3 ${exec.position == "Vice President" ? "block" : "hidden"}`}>

            <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
            <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
        </div>                ))}
        </>
    )
}

function Competitive() {
    const [competitive, setCompetitive] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getCompetitive()
            setIsError(error)
            setCompetitive(data)
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
            {competitive.map((exec, index) => (
            <div className={`my-3 ${exec.position == "Vice President" ? "block" : "hidden"}`}>
            <h2 className={`font-bevietnam block text-red`}>{ exec.name } <span className='staffteam'> { exec.position == "Staff" ? exec.team + " " + exec.position : (exec.position == "Vice President" ? exec.position + " of " + exec.team : exec.position)} </span></h2>
            <h2 className={`font-bevietnam block`}>{ exec.discord }</h2>
        </div>            ))}
        </>
    )
}


export{
    Copres,
    Treasurer,
    Partnerships,
    Marketing,
    Operations,
    Competitive,
};
