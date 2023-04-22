// import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import { Feed } from '../components'
// import styles from '../style'

// const Insta = ({token, ...props}) => {
//     const [feeds, setFeedsData] = useState([])
//     //use useRef to store the latest value of the prop without firing the effect
//     const tokenProp = useRef(token);
//     tokenProp.current = token;

//     useEffect(() => {
//         // this is to avoid memory leaks
//         const abortController = new AbortController();

//         async function fetchInstagramPost () {
//           try{
//             axios
//                 .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=TOKENPLACEHOLDERWHILEIFIGUREOUTHOWTOSTOREITINNODE`)
//                 .then((resp) => {
//                     setFeedsData(resp.data.data)
//                 })
//           } catch (err) {
//               console.log('error', err)
//           }
//         }
        
//         // manually call the fecth function 
//         fetchInstagramPost();
  
//         return () => {
//             // cancel pending fetch request on component unmount
//             abortController.abort(); 
//         };
//     }, [props.limit])

//     return (
//         <>
//         {feeds.map((feed, index) => (
//             <a target="_blank" href="https://www.instagram.com/yorkesports/" className={`${index > 3 ? (index > 5 ? 'hidden mm:flex xl:hidden' : 'hidden ss:flex') : ''}`}>
//                 <Feed key={feed.id} feed={feed} />
//             </a>
//         ))}
//         </>
//     ); 
// }

// export default Insta;


import React, { useEffect, useState } from "react";
import { getPosts } from "../lib";
import Post from "../components/Post";

function Insta() {
    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPosts()
            setIsError(res.error)
            setPosts(res.data)
            setLoading(false)
        }
        fetchData()
        return () => {}
    }, [])

    if(loading) {
        return(
            <div>
            </div>
    )}

    if(!loading && isError) {
        return (
            <div>
                <h1>oops!!</h1>
            </div>
        )
    }

    return (
        <>
        {posts && posts.map((post) => (
            <a target="_blank" href="https://www.instagram.com/yorkesports/" className={`${index > 3 ? (index > 5 ? 'hidden mm:flex xl:hidden' : 'hidden ss:flex') : ''}`}>
                <Post post={post} />
            </a>
        ))}
        </>
    )
}

export default Insta;
