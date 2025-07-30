import React from 'react'
import HightlightText from '../Components/CORE/HomePage/HightlightText'
import signup from '../../../fullstack-project/src/assets/signup.jpg'
import design from '../../../fullstack-project/src/assets/design.jpg'
import blackDesign from '../../../fullstack-project/src/assets/blackDesign.png'
import {Link} from 'react-router-dom'
import Button from '../Components/CORE/HomePage/Button'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const tabsName = [
    "Student", 
    "Instructor", 
];

const SignUp = () => {

    const [value,setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

        const [currentTab,setCurrentTab] = useState(tabsName[0]);

        const setMyCards = (value) => {
                setCurrentTab(value);
            }
    

  return (
    <div className='flex flex-row g-10 justify-center items-center w-11/12 max-w-maxContent h-fit ml-30 mt-10'>
        <div className='w-[50%]'>
            <div className='flex flex-col gap-5 mt-5 w-fit p-20 '>
                <div className='text-4xl font-semibold text-white'>
                WELCOME BACK
                </div>

                <div className='text-[#838894]'>
                    Build skills for today, tomorrow, and beyond.
                    <HightlightText className="text-sm" text={" Education to future, proof your carrer"} />
                </div>

                {/* selector */}
                <div className='flex flex-row bg-[#161D29] rounded-full w-fit mt-2 border-[#AFB2BF] px-1 g-4 py-1'>
                    {
                        tabsName.map((element,index) => {
                            return(
                                <div
                                    className={`text-[15px] flex flex-row items-center gap-2  
                                    ${currentTab === element 
                                    ? "bg-[#000814] text-white font-medium" 
                                    : "text-[#999DAA]"} 
                                    rounded-full duration-200 cursor-pointer hover:bg-[#2C333F] hover:text-[#DBDDEA] px-7 py-4`
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

                <div className='flex flex-col g-5 mt-2 ml-4 w-[80%]'>
                    <div className='flex flex-col g-10'>
                        <p className='text-[#838894] my-3 mx-2'>Email Adress</p>
                        <input type="text" placeholder='Enter email adress' className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl' />
                    </div>

                    <div className='flex flex-col g-10 relative'>
                        <p className='text-[#838894] my-3 mx-2'>Password</p>
                        <input 
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter Password'
                                value = {value}
                                onChange={(e)=>{setValue(e.target.value)}}
                                className='text-[#838894] p-2 bg-[#2C333F] rounded-2xl'
                         />

                        <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 -translate-y-1 -translate-x-2"
                                onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaEyeSlash className='h-6 w-8' /> : <FaEye className='h-6 w-8' />}
                        </button>


                        <div className='flex justify-between p-2 mb-5'>
                            <p> </p>
                            <Link className='text-blue-400' to={'/forgot_password'}>Forgot Password</Link>
                        </div>
                    </div>

                    <Button active={true} linkTo={'/'} className="m-5">
                        Sign In
                    </Button>
                </div>
            </div>
        </div>

        <div className='w-[50%] m-10 flex items-center justify-center'>
            <img src={design} alt="signup" className='w-[400px] h-[500px] mr-25 relative translate-x-3 translate-y-3' />
            {/* <img src={blackDesign} alt="signup" className='w-[400px] h-[500px] mr-25 relative' /> */}
            <img src={signup} alt="signup" className='w-[400px] h-[500px] mr-25 absolute -translate-x-3 -translate-y-3 shadow-[-12px_-12px_25px_rgba(135,206,250,0.4)]' />
        </div>

    </div>
  )
}

export default SignUp
