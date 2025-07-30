import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

function App() {
  return (
    // <div className='w-screen min-h-screen flex flex-col bg-rich-black-900 font-inter'>
    <div className='w-screen min-h-screen flex flex-col bg-[#000814]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App
