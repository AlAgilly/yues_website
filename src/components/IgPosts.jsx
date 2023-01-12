import React from 'react'
import { post1, 
         post2,
         post3,
         post4,
         post5,
         post6,
         post7,
         post8,
         } from '../assets'
import { igpost } from '../constants'
import styles from '../style'
import { Button } from './Button'
import Post from './Post'

const IgPosts = () => {
  return (
    <>

    <section id='home' className={`flex mm:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 mm:${styles.flexStart} flex-col mx-20 ss:mx-24`}>    
      <h3 className={`${styles.titleH3} leading-10 leftborder redborder text-white`}>Latest IG Posts</h3>

        <div className='grid grid-cols-2 ss:grid-cols-3 mm:grid-cols-4 xl:grid-cols-6 justify-between gap-x-6 gap-y-6 items-left w-full my-10 ig'>
        <img src={post1} alt="" />
        <img src={post2} alt="" />
        <img src={post3} alt="" />
        <img src={post4} alt="" />
        <img src={post5} alt="" className='hidden ss:flex' />
        <img src={post6} alt="" className='hidden ss:flex' />
        <img src={post7} alt="" className='hidden mm:flex xl:hidden' />
        <img src={post8} alt="" className='hidden mm:flex xl:hidden' />
        </div>
      </div>
    </section>
    </>
  )
}

export default IgPosts