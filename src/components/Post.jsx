import React from 'react'
import { eventsList } from '../constants'
import styles from '../style'
import { post1 } from '../assets'

export const Post = ({
    id,
    img,
  }) => {
  return (
    <>
    <div className='w-full'>
        <img src={img } alt="" />
    </div>
    </>
  )
}
 export default Post