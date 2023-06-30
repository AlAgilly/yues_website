// import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import { Feed } from '../components'
// import styles from '../style'
// import dotenv from "dotenv";
// dotenv.config();

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
//             // .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=TOKENPLACEHOLDERWHILEIFIGUREOUTHOWTOSTOREITINNODE`)
//             .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=8&access_token=${ process.env.REACT_APP_INSTA }`)
//             .then((resp) => {
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
