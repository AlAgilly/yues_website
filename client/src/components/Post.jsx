// import React from 'react'
// import { eventsList } from '../constants'
// import styles from '../style'
// import { post1 } from '../assets'

// export const Post = ({
//     id,
//     img,
//   }) => {
//   return (
//     <>
//     <div className='w-full'>
//         <img src={img } alt="" />
//     </div>
//     </>
//   )
// }
//  export default Post

import React from "react";

const Post = ({post}) => {
  return (
    <h1>{post.content}</h1>
  )
}

export default Post