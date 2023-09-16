import React from 'react'

const Title4 = ({
    title,
    colour, className,
}) => {
  return (
    <h5 className={`${className} font-bevietnambold font-bold flex-col ${colour == "red" ? "text-red" : (colour == "white" ? "text-white" :"text-black")}`}>{ title }</h5>
    )
}

export default Title4