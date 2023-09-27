import React from 'react'

const Title3 = ({
    title,
    colour,
    className
}) => {
  return (
    <h4 className={`${className} relative font-bignoodle text-[30px] ${colour == "red" ? "text-red" : (colour == "white" ? "text-white" :"text-black")}`}>{ title }</h4>
    )
}

export default Title3