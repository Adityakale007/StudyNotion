import React from 'react'
import HightlightText from './HightlightText'
import reading from '../../../assets/reading.jpg'
import books from '../../../assets/books.jpg'
import mug from '../../../assets/mug.jpg'
import CTAButton from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='m-[130px]'>
        <div className='flex flex-col gap-5 items-center'>

            <div className='text-4xl font-semibold text-center'>
                Your swiss knife for
                <HightlightText text={" Learning any Language"} />
            </div>

            <div className='text-center text-[#424854] mx-auto text-base w-[70%] font-medium'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more
            </div>

            <div className='flex flex-row items-center justify-center mt-20'>
                <img src={books} alt="1" className='w-[500px] h-[400px] rotate-13 rounded-3xl shadow-xl transition-all hover:drop-shadow-2xl duration-300' />
                <img src={reading} alt="2" className='w-[500px] h-[400px] -rotate-9 rounded-3xl shadow-xl transition-all hover:drop-shadow-2xl duration-300' />
                <img src={mug} alt="3" className='w-[500px] h-[400px] rotate-7 rounded-3xl shadow-xl transition-all hover:drop-shadow-2xl duration-300' />
            </div>

            <div className='w-fit mt-20' >
                <CTAButton active={true} linkTo={"/signup"}>
                    <div>
                        Learn More
                    </div>
                </CTAButton>
            </div>

        </div>
    </div>
  )
}

export default LearningLanguageSection
