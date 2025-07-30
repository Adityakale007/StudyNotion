import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom"
import HightlightText from '../Components/CORE/HomePage/HightlightText';
import CTAButton from '../Components/CORE/HomePage/Button';
import starting from "../assets/starting.mp4"
import CodeBlocks from '../Components/CORE/HomePage/CodeBlocks';
import LearningLanguageSection from '../Components/CORE/HomePage/LearningLanguageSection';
import TimeLineSection from '../Components/CORE/HomePage/TimeLineSection';
import InstructorSection from '../Components/CORE/HomePage/InstructorSection';
import Footer from '../Components/Common/Footer';
import ExploreMore from '../Components/CORE/HomePage/ExploreMore';
import SignUp from './SignUp';
import Login from './Login';

const Home = () => {
  return (
    <div>
      {/* SECTION -- 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>

            <Link to="/signup">
                <div className='group mt-16 p-1 mx-auto rounded-full bg-[#161D29] font-bold text-[#838894] w-fit transition-all duration-200 hover:scale-95'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-[#000814]'>
                        <p>Become an Instructor</p>
                        <FaArrowRightLong />
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-8'>
                Empower Your Future With 
                <HightlightText text={"CODING SKILLS"} />
            </div>

            <div className='text-center w-[70%] text-[#838894] mt-5'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkTo={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkTo={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='mx-3 my-14  shadow-[-12px_-12px_25px_rgba(135,206,250,0.4)]  max-w-[75%]'>
                <video mute="true" autoPlay loop>
                    <source src={starting} />
                </video>
            </div>

            {/* code section - 1 */}
            <div >
                <CodeBlocks
                    position={"lg: flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your
                            <HightlightText text={'Coding Potential  '} />
                            With Our Online Cources
                        </div>
                    }
                    subHeading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctaButton1={
                        {
                            text: "Try It Yourself",
                            linkTo: "/signup",
                            active: true,
                        }
                    }
                    ctaButton2={
                        {
                            text: "Learn More",
                            linkTo: "/login",
                            active: false,
                        }
                    }

                    codeBlock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Examples</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n<a href="url/">Something</a>\n</nav>\n</body>\n</html>`}

                    codeColor={"text-[#F79CB0]"}

                    backgroundGradient={"inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black backdrop-blur-5xl opacity-90"}

                />
            </div>

            {/* code section - 2 */}
            <div>
                <CodeBlocks
                    className="px-10"
                    position={"lg: flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Start
                            <HightlightText text={'Coding In Seconds'} />
                        </div>
                    }
                    subHeading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctaButton1={
                        {
                            text: "Continue Lessons",
                            linkTo: "/signup",
                            active: true,
                        }
                    }
                    ctaButton2={
                        {
                            text: "Learn More",
                            linkTo: "/login",
                            active: false,
                        }
                    }

                    codeBlock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Examples</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n<a href="url/">Something</a>\n</nav>\n</body>\n</html>`}

                    codeColor={"text-[#44E4BF]"}

                    backgroundGradient={"inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black backdrop-blur-2xl opacity-90"}
                />
            </div>


            <ExploreMore />

        </div>



      {/* SECTION -- 2 */}


      <div className='bg-[#F9F9F9] text-[#2C333F]'>
        {/* upperSection */}
            <div className='homePage_bg h-[310px]'>
                
                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    
                    <div className='h-[160px]'></div>
                    <div className='flex flex-row text-white gap-7'>
                        <CTAButton active={true} linkTo={"/signup"}>
                            <div className='flex flex-row gap-3 text-center'>
                                Explore Full Catalog
                                <FaArrowRightLong className='mt-1' />
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkTo={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>
                </div>

            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-7'>
                    <div className='flex flex-row gap-5 mb-10 mt-[95px] ml-10 hover:border-dotted'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Get The Skill You Need For a
                            <HightlightText text={" JOB THAT IS DEMAND"} />
                        </div>

                        <div className='flex flex-col w-[40%] gap-10 items-start'>
                            <div className='text-[18px]'>
                                The modern StudyNotion is the dictator of its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>

                            <CTAButton active={true} linkTo={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimeLineSection />

                    <LearningLanguageSection />
            </div>

      </div>


      {/* SECTION -- 3 */}

      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-[#000814] text-white'>

            <InstructorSection />

            <h2 className='text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>

            {/* review slider */}


      </div>


      {/* FOOTER */}

      <Footer />

    </div>
  )
}

export default Home
