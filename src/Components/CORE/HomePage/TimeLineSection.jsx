import React from 'react';
import Logo1 from "../../../assets/Logo1.png";
import Logo2 from "../../../assets/Logo2.png";
import Logo3 from "../../../assets/Logo3.png";
import Logo4 from "../../../assets/Logo4.png";
import starting from "../../../assets/starting.mp4"
import banner from "../../../assets/banner.mp4"

const timeLine =[
    {
        logo: Logo1,
        heading: "Leadership",
        discription: "Fully committed to the success company",
    },
    {
        logo: Logo2,
        heading: "Resposibility",
        discription: "Students will always be our priority",
    },
    {
        logo: Logo3,
        heading: "Flexibility",
        discription: "The ability to switch is an important skill",
    },
    {
        logo: Logo4,
        heading: "Solve The Problem",
        discription: "Code your way to solve the problem",
    },
];

const TimeLineSection = () => {
  return (
    <div>
      <div className='flex flex-row gap-10 items-center bg-[#F9F9F9]'>
            <div className='flex flex-col gap-5 w-[45%]'>

                {
                    timeLine.map((element,index) => {
                        return(
                            <div className='flex flex-row gap-6 ' key={index}>

                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.logo} alt="logo1" />
                                </div>

                                <div className='flex flex-col'>
                                    <h2 className='font-semibold text-[18px]'>
                                        {element.heading}
                                    </h2>

                                    <p className='text-base'>
                                        {element.discription}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

            <div className='relative shadow-blue-200'>
                <video mute="true" autoPlay loop className='shadow-white object-cover w-[800px] rounded-4xl h-fit'>
                    <source src={banner} />
                </video>

                <div className='absolute bg-[#014A32] flex flex-row text-white uppercase py-8 px-4 left-[50%] translate-x-[-45%] translate-y-[-50%]'>
                    <div className='flex flex-row items-center gap-5 border-r border-[#05A77B] px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-[#05A77B] text-sm'>Years of Experience</p>
                    </div>

                    <div className='flex flex-row items-center gap-5  px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-[#05A77B] text-sm'>Type of Cources</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TimeLineSection
