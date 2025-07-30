import React from 'react'
import {HomePageExplore} from '../.././Data/HomePage_Explore'
import { useState } from 'react';
import HightlightText from './HightlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free", 
    "New To Coding", 
    "Most Popular", 
    "Skill Paths", 
    "Carrer Paths", 
];

const ExploreMore = () => {

    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [cources,setCources] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((a) => a.tag === value);
        setCources(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div>
      
        <div className='text-4xl font-semibold text-center mt-3'>
            Unlock The
            <HightlightText text={" Power Of Code"} />
        </div>

        <p className='text-center text-[#838894] text-sm font-semibold mt-3'>
            learn to build anything you can imagine
        </p>

        <div className='flex flex-row bg-[#161D29] rounded-full mb-8 mt-8 border-[#AFB2BF] px-1 py-1'>
            {
                tabsName.map((element,index) => {
                    return(
                        <div
                            className={`text-[16px] flex flex-row items-center gap-2 
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

        <div className='lg:h-[150px]'></div>


        {/* course cards */}

        <div className='flex flex-row absolute gap-10 justify-between w-full'>
            {
                cources.map((element,index) => {
                    return(
                        <div>
                            <CourseCard
                                key={index}
                                cardData = {element}
                                currentCard = {currentCard}
                                setCurrentCard = {setCurrentCard}
                            />
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default ExploreMore
