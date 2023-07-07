import React, { useEffect, useState } from "react";
import { getCopres, getSecretary, getTreasurer, getHr, getMarketing, getPartnerships, getCompetitive, getOperations } from "../lib";
import { staffbox } from "../assets";
import TinyStaff from "./TinyStaff";

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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {copres.map((copres, index) => (
                <TinyStaff key={copres.id} name={ copres.name } position={copres.position} team={copres.team} />
            ))}
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
        return <h1>An error!!</h1>

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
        return <h1>An error!!</h1>

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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {hr.map((hr, index) => (
                <TinyStaff key={hr.id} name={ hr.name } position={hr.position} team={hr.team} />

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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {partnerships.map((partnerships, index) => (
                <TinyStaff key={partnerships.id} name={ partnerships.name } position={partnerships.position} team={partnerships.team} />
                
            ))}
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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {marketing.map((marketing, index) => (
                <TinyStaff key={marketing.id} name={ marketing.name } position={marketing.position} team={marketing.team} />
            ))}
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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {operations.map((operations, index) => (
                <TinyStaff key={operations.id} name={ operations.name } position={operations.position} team={operations.team} />
            ))}
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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {competitive.map((competitive, index) => (
                <TinyStaff key={competitive.id} name={ competitive.name } position={competitive.position} team={competitive.team} />
            ))}
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
