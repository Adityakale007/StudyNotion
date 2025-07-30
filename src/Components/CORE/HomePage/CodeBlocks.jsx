import React from 'react'
import CTAButton from "../HomePage/Button"
import HightlightText from './HightlightText'
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';


const CodeBlocks = (
    {
        position,heading,subHeading,ctaButton1,ctaButton2,codeBlock,backgroundGradient,codeColor,
    }
) => {
  return (
    <div>
      <div className={`flex ${position} mb-35 mt-35 justify-between gap-10 mx-auto p-15 px-20 ${backgroundGradient} shadow-[-12px_-12px_25px_rgba(135,206,250,0.4)] hover:scale-105 transition-all duration-3000`}>

        {/* section--1 */}
        <div className='w-[45%] flex flex-col gap-8 pl-20'>
            {heading}

            <div className='text-[#838894] font-bold'>
                {subHeading}
            </div>

            <div className='flex mt-7 gap-7'>
                <CTAButton active={ctaButton1.active} linkTo={ctaButton1.linkTo}>
                    <div className='flex gap-2 items-center'>
                        {ctaButton1.text}
                        <FaArrowRightLong />
                    </div>
                </CTAButton>

                <CTAButton active={ctaButton2.active} linkTo={ctaButton2.linkTo}>
                        {ctaButton2.text}
                </CTAButton>
            </div>
        </div>

        {/* section--2 */}
        <div className='flex flex-row h-fit text-[14px] w-[100%] lg:w-[500px] shadow-[-12px_-12px_25px_rgba(135,256,250,0.4)] hover:scale-110 transition-all duration-5000'>
            {/* gradient */}
            <div className='text-center text-[#6E727F] flex flex-col w-[10%] font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
            </div>

            <div className={`w-90% flex flex-col font-bold ${codeColor} pr-2 `}>
                <TypeAnimation
                    sequence={[codeBlock,7000,""]}
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}

                    style ={
                        {
                            whiteSpace: "pre-line",
                            display: "block",
                        }
                    }
                />
            </div>

        </div>

      </div>
    </div>
  )
}

export default CodeBlocks
