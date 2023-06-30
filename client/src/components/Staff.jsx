import React, { useEffect, useState } from "react";
import { getAdmin, getMarketing, getPartnerships, getCompetitive, getOperations } from "../lib";
import { staffbox } from "../assets";

function Admin() {
    const [admin, setAdmin] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getAdmin()
            setIsError(error)
            setAdmin(data)
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
            {admin.map((admin, index) => (
                <div className={``}>
                    <div className='member'>
                    <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ admin.position }</span></p>
                    <h1 className={`font-bignoodle text-red`}>{ admin.name }</h1>
                    </div>
                    <img src={staffbox} alt="" className='w-full'/>
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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {partnerships.map((partnerships, index) => (
                <div className={``}>
                    <div className='member'>
                    <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ partnerships.position }</span></p>
                    <h1 className={`font-bignoodle text-red`}>{ partnerships.name }</h1>
                    </div>
                    <img src={staffbox} alt="" className='w-full'/>
                </div>
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
                <div className={``}>
                    <div className='member'>
                    <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ marketing.position == "Staff" ? "Marketing " + marketing.position : (marketing.position == "Vice President" ? marketing.position + " of Marketing" : marketing.position)}</span></p>
                    <h1 className={`font-bignoodle text-red`}>{ marketing.name }</h1>
                    </div>
                    <img src={staffbox} alt="" className='w-full'/>
                </div>
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
                <div className={``}>
                    <div className='member'>
                    <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ operations.position }</span></p>
                    <h1 className={`font-bignoodle text-red`}>{ operations.name }</h1>
                    </div>
                    <img src={staffbox} alt="" className='w-full'/>
                </div>
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
                <div className={``}>
                    <div className='member'>
                    <p className='font-bevietnampro text-[12px] text-black'><span className='h2'>{ competitive.position }</span></p>
                    <h1 className={`font-bignoodle text-red`}>{ competitive.name }</h1>
                    </div>
                    <img src={staffbox} alt="" className='w-full'/>
                </div>
            ))}
        </>
    )
}


export{
    Admin,
    Partnerships,
    Marketing,
    Operations,
    Competitive,
};
