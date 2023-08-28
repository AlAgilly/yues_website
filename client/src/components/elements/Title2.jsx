import React from 'react'
import styles from '../../style'

const Title2 = ({
    title,
    colour,
}) => {
  return (
      <>
        <h4 className={`font-bignoodle text-[40px] m-0 p-0`}>{ title }</h4>
        <div className={`${colour == "black" ? "bottomborderblack" : "bottomborder"}`}></div>
      </>
    )
}

export default Title2