import React from 'react'
import {Link} from "react-router-dom"
//resuable code

const Button = ({children,active,linkTo}) => {
  return (
    <Link to={linkTo}>
        {/* <div className="text-center text-[13px] px-6 py-3 rounded-md font-bold"> */}
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
            ${active ? "bg-yellow-500 text-black" : "bg-[#161D29]"}
            hover:scale-95 transition-all duration-200 hover: shadow-black
            `}>
            {children}
        </div>
    </Link>
  )
}

export default Button
