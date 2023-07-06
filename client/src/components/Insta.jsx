import React, { useEffect, useState } from "react";
import { getInstaPosts } from "../lib";
import Feed from "../components/Feed";

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
        return <h1>An error!!</h1>

    }

    return (
        <>
            {posts.map((feed, index) => (
                <a target="_blank" href="https://www.instagram.com/yorkesports/" className={`${index > 3 ? (index > 5 ? 'hidden mm:flex xl:hidden' : 'hidden ss:flex') : ''}`}>
                    <Feed key={feed.id} feed={feed} />
                </a>
            ))}
        </>
    )
}

export default Insta;
