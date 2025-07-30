import React from 'react'

const HightlightText = (props) => {
  return (
    <span className='font-bold text-shadow-blue-300 text-blue-400'>
        {/* bg-gradient-to-b from-pink-700 to-blue-700  */}
        {" "}
        {props.text}
    </span>
  )
}

export default HightlightText
