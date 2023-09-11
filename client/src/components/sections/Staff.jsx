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
                                                  <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>

            {copres.map((copres, index) => (
                <TinyStaff key={copres.id} name={ copres.name } position={copres.position} team={copres.team} />
            ))}</div>
            
        </>
    )
}

function Secretary() {
    const [secretary, setSecretary] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getSecretary()
            setIsError(error)
            setSecretary(data)
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
            {secretary.map((secretary, index) => (
                <TinyStaff key={secretary.id} name={ secretary.name } position={secretary.position} team={secretary.team} />

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
            {treasurer.map((treasurer, index) => (
                <TinyStaff key={treasurer.id} name={ treasurer.name } position={treasurer.position} team={treasurer.team} />

            ))}
        </>
    )
}

function Hr() {
    const [hr, setHr] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getHr()
            setIsError(error)
            setHr(data)
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
                              <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>

            {hr.map((hr, index) => (
                <TinyStaff key={hr.id} name={ hr.name } position={hr.position} team={hr.team} />

            ))}</div>
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
            <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>
                {partnerships.map((partnerships) => (
                    <TinyStaff key={partnerships.id} name={ partnerships.name } position={partnerships.position} team={partnerships.team} />
                ))}
            </div>
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
        <>            <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>

            {marketing.map((marketing, index) => (
                <TinyStaff key={marketing.id} name={ marketing.name } position={marketing.position} team={marketing.team} />
            ))}</div>
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
        <>                            <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>

            {operations.map((operations, index) => (
                <TinyStaff key={operations.id} name={ operations.name } position={operations.position} team={operations.team} />
            ))}</div>
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
        <>                            <div className='grid-cols-1 lg:grid-cols-4 mm:grid mm:grid-cols-3 gap-x-6 gap-y-4 staff mt-2 mb-6'>

            {competitive.map((competitive, index) => (
                <TinyStaff key={competitive.id} name={ competitive.name } position={competitive.position} team={competitive.team} />
            ))}</div>
        </>
    )
}


export{
    Copres,
    Secretary,
    Treasurer,
    Hr,
    Partnerships,
    Marketing,
    Operations,
    Competitive,
};
