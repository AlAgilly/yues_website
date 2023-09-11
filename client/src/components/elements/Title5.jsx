import React from 'react'

const Title5 = ({
    title,
    colour,
    style
}) => {
  return (
    <h5 className={`font-bevietnam font-light flex-col ${colour == "red" ? "text-red" : (colour == "white" ? "text-white" :"text-black")} ${style}`}>{ title }</h5>
    )
}

export default Title5