import React from 'react'
import HightlightText from '../Components/CORE/HomePage/HightlightText'
import signup from '../assets/signup.jpg'
import design from '../assets/design.jpg'
import blackDesign from '../assets/blackDesign.png'
import {Link} from 'react-router-dom'
import Button from '../Components/CORE/HomePage/Button'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loginimg from "../assets/login.mp4"


const tabsName = [
    "Student", 
    "Instructor", 
];

const Login = () => {

    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

        const [currentTab,setCurrentTab] = useState(tabsName[0]);

        const setMyCards = (value) => {
                setCurrentTab(value);
            }
    

  return (
    <div className='flex flex-row g-10 justify-center items-center w-11/12 max-w-maxContent h-fit ml-30 mt-10'>
        <div className='w-[50%]'>
            <div className='flex flex-col gap-5 mt-5 w-fit p-20 '>
                <div className='text-4xl font-semibold text-white'>
                    Join the millions learning to code with 
                    <HightlightText text={' StudyNotion '} />
                    for free
                </div>

                <div className='text-[#838894]'>
                    Build skills for today, tomorrow, and beyond.
                    <HightlightText className="text-sm" text={" Education to future, proof your carrer"} />
                </div>

                <div className='flex flex-row bg-[#161D29] rounded-full w-fit mt-2 border-[#AFB2BF] px-1 g-4 py-1'>
                    {
                        tabsName.map((element,index) => {
                            return(
                                <div
                                    className={`text-[15px] flex flex-row items-center gap-2  
                                    ${currentTab === element 
                                    ? "bg-[#000814] text-white font-medium" 
                                    : "text-[#999DAA]"} 
                                    rounded-full duration-200 cursor-pointer hover:bg-[#2C333F] hover:text-[#DBDDEA] px-5 py-2 m-1`
                                    }
                                    key={index}

                                    onClick={() => setMyCards(element)}
                                >
                                    {element}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex flex-row'>
                    <div className='flex flex-col g-10'>
                        <p className='text-[#838894] mt-1 ml-3'>First Name</p>
                        <input type="text" placeholder='Enter First Name' className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl mr-5' />
                    </div>

                    <div className='flex flex-col g-10'>
                        <p className='text-[#838894] mt-1 ml-6'>Last Name</p>
                        <input type="text" placeholder='Enter Last Name' className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl ml-5' />
                    </div>
                </div>

                <div className='flex flex-col g-5  w-[90%]'>
                    <div className='flex flex-col g-10'>
                        <p className='text-[#838894] my-3 '>Email Adress</p>
                        <input type="text" placeholder='Enter email adress' className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl' />
                    </div>

                    <div className='flex flex-col g-10'>
                        <p className='text-[#838894] my-3'>Phone Number</p>
                        <input type="number" placeholder='Enter phone number' className='text-[#838894] p-2 bg-[#2C333F] [appearance:textfield] 
                                    [&::-webkit-outer-spin-button]:appearance-none 
                                    [&::-webkit-inner-spin-button]:appearance-none rounded-2xl' />
                    </div>

                    <div className='flex flex-row'>
                        <div className='flex flex-col g-10 relative mr-5 my-4 mb-5'>
                            <p className='text-[#838894] my-3'>Create Password</p>
                            <input 
                                    type={showPassword1 ? 'text' : 'password'}
                                    placeholder='Enter Password'
                                    value = {value1}
                                    onChange={(e)=>{setValue1(e.target.value)}}
                                    className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl '
                            />

                            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 translate-y-6 -translate-x-2"
                                    onClick={() => setShowPassword1((prev) => !prev)}
                            >
                                {showPassword1 ? <FaEyeSlash className='h-6 w-8' /> : <FaEye className='h-6 w-8' />}
                            </button>
                        </div>

                        <div className='flex flex-col g-10 relative ml-5 my-4 mb-5'>
                            <p className='text-[#838894] my-3'>Confirm Password</p>
                            <input 
                                    type={showPassword2 ? 'text' : 'password'}
                                    placeholder='Enter Password'
                                    value = {value2}
                                    onChange={(e)=>{setValue2(e.target.value)}}
                                    className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl '
                            />

                            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 translate-y-6 -translate-x-2"
                                    onClick={() => setShowPassword2((prev) => !prev)}
                            >
                                {showPassword2 ? <FaEyeSlash className='h-6 w-8' /> : <FaEye className='h-6 w-8' />}
                            </button>

                        </div>


                    </div>

                    <Button active={true} linkTo={'/'} className="m-5">
                        Create Account
                    </Button>
                </div>
            </div>
        </div>

        <div className='w-[50%] m-10 flex items-center justify-center mt-10'>
            <img src={design} alt="signup" className='w-[450px] h-[800px] mr-25 absolute translate-x-3 translate-y-3' />
            {/* <img src={blackDesign} alt="signup" className='w-[400px] h-[500px] mr-25 relative' /> */}
            <video mute="true" autoPlay loop className='w-fit h-[800px] mr-25 relative -translate-x-3 -translate-y-3 shadow-[-12px_-12px_25px_rgba(135,206,250,0.4)]'>
                 <source src={Loginimg} />
            </video>
        </div>

    </div>
  )
}

export default Login
