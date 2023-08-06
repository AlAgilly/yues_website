import React, { useEffect, useState } from "react";
import { getInstaPosts } from "../../lib";
import Feed from "../elements/Feed";
import Error from "../elements/Error";

function Insta() {
    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getInstaPosts()
            setIsError(error)
            setPosts(data)
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
            <div className='grid grid-cols-2 ss:grid-cols-3 mm:grid-cols-4 xl:grid-cols-6 justify-between gap-x-6 gap-y-6 items-left w-full my-10 ig'>
                {posts.map((feed, index) => (
                    <a target="_blank" href="https://www.instagram.com/yorkesports/" className={`${index > 3 ? (index > 5 ? 'hidden mm:flex xl:hidden' : 'hidden ss:flex') : ''}`}>
                        <Feed key={feed.id} feed={feed} />
                    </a>
                ))}
            </div>
        </>
    )
}

export default Insta;
