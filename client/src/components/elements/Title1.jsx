import React from 'react'

const Title1 = ({
    title,
    colour,
}) => {
  return (
    <h3 className={`font-bignoodle text-[47px] my-4 py-2 px-5 leading-10 border-l-[6px] rounded-sm ${colour == "red" ? "border-black text-white" : (colour == "black" ? "border-red text-white" : "border-red text-black")}`}>{ title }</h3>
    )
}

export default Title1