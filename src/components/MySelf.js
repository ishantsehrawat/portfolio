import React from 'react';

import "../stylesheets/colors.css";

import ishu from "../asset/images/richie.png";

function MySelf() {
  return (
      <div className='yellow rounded-t-3xl flex items-end relative'>
        <div className=' w-2/3 pl-10 mb-28 mt-96 flex justify-between'>
            <div className='flex items-start flex-col'>
                <h1 className='text-5xl font-bold'>At School</h1>
                <p className='mt-20 mr-10 text-2xl leading-relaxed'>I’m a Junior in Bachelor of Technology in Computer Science Engineering from Indraprastha University.</p>
            </div>
            <div className='flex items-start flex-col'>
                <h1 className='text-5xl font-bold'>In Life</h1>
                <p className='mt-20 mr-12 text-2xl leading-relaxed'>I’m a Designer, Developer, writer, rapper, space enthusiast and do every damn thing which is intriguing to me.</p>
            </div>
        </div>
        <img src={ishu} className="h-screen ml-16 mb-8" alt="" />
    </div>
  )
}

export default MySelf