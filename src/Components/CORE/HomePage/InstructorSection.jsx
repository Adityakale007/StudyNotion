import React from 'react'
// import womenStudying from "../../../assets/FinalFinalWomenStudingVideo.mov"
import womenStudying from "../../../assets/FinalFinalwomenStudingVideo.mov"
// import womenStudying from "../../../assets/girl.mp4"
import HightlightText from './HightlightText'
import CTAButton from './Button'
import { FaArrowRightLong } from "react-icons/fa6";

const InstructorSection = () => {
  return (
    <div className='mt-18'>
      <div className='flex flex-row gap-20 items-center'>

        <div className='w-[50%] flex items-center justify-centerl '>
            <video mute="true" autoPlay loop className='h-fit w-[80%] ml-12 mt-10 rounded-4xl shadow-[-12px_-12px_25px_rgba(135,206,250,0.4)]'>
                <source src={womenStudying} />
            </video>
        </div>


        <div className='w-[50%] flex flex-col gap-8'>
            <div className='text-4xl font-semibold w-[50%] '>
                Become an
                <HightlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-[#838894]'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit mt-5'>
                <CTAButton active={true} linkTo={"/signup"}>
                <div className='flex flex-row gap-2 items-center'>
                    Start Learning Today
                    <FaArrowRightLong />
                </div>
                </CTAButton>
            </div>

        </div>

      </div>
    </div>
  )
}

export default InstructorSection
