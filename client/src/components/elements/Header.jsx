import React from 'react'
import styles from '../../style'
import Title1 from './Title1'

const Header = ({
    title,
    colour,
}) => {
    const checkColour = (colour == "red" ? "red" : "white")
    return (
        <div className={`w-full overflow-hidden ${checkColour == "red" ? "bg-red" : "bg-white border-b-2"} hee`}>
            <div className={` ${styles.flexStart} z-20 ${checkColour == "red" ? "headerr" : "headerw"}`}>
                <div className={`p-0 ${styles.boxWidth} py-6 px-8 xs:px-20 ss:px-24`}> 
                    {/* <h3 className={`${styles.titleH3} leading-10 leftborder ${checkColour == "red" ? "text-white blackborder" : "text-black redborder"}  w-full`}>{title}</h3> */}
                    <Title1 title={title} colour={colour}></Title1>
                </div>
            </div>
        </div>
  )
}

export default Header