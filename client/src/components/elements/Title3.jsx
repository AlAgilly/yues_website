import React from 'react'

const Title3 = ({
    title,
    colour,
}) => {
  return (
    <h4 className={`font-bignoodle text-[33px] ${colour == "red" ? "text-red" : (colour == "white" ? "text-white" :"text-black")}`}>{ title }</h4>
    )
}

export default Title3