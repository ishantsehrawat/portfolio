import React from 'react';
import "../stylesheets/colors.css";

function Process() {
  return (
    <div>
        <h1 className='text-9xl font-bold mx-5 mb-10 mt-24'>My Process</h1>
        <div className='yellow flex w-screen justify-between pt-10 pb-32 px-7'>
            <div className='border-r border-black min-h-full'></div>
            <div className='flex w-1/3 items-start flex-col py-10 px-7'>
                <h1 className='bluefont text-4xl font-bold hover:scale-125'>Discovery</h1>
                <p className='text-2xl  leading-relaxed py-7'>The first step in solving any problem is giving it a good reading and trying to understand what the problem wants?<br/>
                For the same, I ask some follow-up questions to minimize miscommunication or examine the expected output and test cases which clears some doubt about the same.</p>
            </div>
            <div className='border-r border-black min-h-full'></div>
            <div className='flex w-1/3 items-start flex-col py-10 px-7'>
                <h1 className='bluefont text-4xl font-bold hover:scale-125'>Designing</h1>
                <p className='text-2xl leading-relaxed py-7'>The next step is designing the solution with a flowchart, UX, even thinking about it in my mind.<br/>
                In this process, we try to understand how the program will flow and design the mechanisms and appearance according to the requirements and constraints.</p>
            </div>
            <div className='border-r border-black min-h-full'></div>
            <div className='flex w-1/3 items-start flex-col py-10 px-7'>
                <h1 className='bluefont text-4xl font-bold hover:scale-125'>Development</h1>
                <p className='text-2xl leading-relaxed py-7'>After reading the problem and designing a feasible solution, the last step is to develop it.<br/>
                In this process, the program might require some minor adjustments in the original design to achieve the requirement more precisely.<br/>
                Another part of development is to test the end product via users or test cases.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Process