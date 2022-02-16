import React from 'react';
import { Link } from 'react-router-dom';

import circle from "../asset/icons/Ellipse 1.svg";
import arrowRight from "../asset/icons/Arrow_right.svg";

import "../stylesheets/AboutHome.css";


function AboutHome() {
  return (
    <div className="screen min-h-screen flex justify-center items-center relative">
      <h1 className='head text-white text-9xl font-bold text-yellow-50'>About Me</h1>
      <div className='circle1 rounded-full'></div>
      <div className='circle2 rounded-full'></div>
      <div className='circle3 rounded-full'></div>
      <div className='circle4 rounded-full'></div>
      
        <div 
            className='w-2/5
                       bg-black 
                       text-white 
                       backdrop-filter 
                       backdrop-blur-lg 
                       bg-opacity-60 
                       
                       rounded-3xl
                       py-5
                       px-7'
        >
            <p className='p-5 text-xl '>I’m an Indian Computer Science Engineering Student based in Delhi and I’m available for Frontend and Software Developer roles for full-time and freelance projects.<br /><br/>
            I am a writer, rapper and space-enthusiast and do anything which intrigues me.
            <br/><br/>
            My Curious nature and experimenting new ideas makes me different from other developers.
            <br/><br/>
            </p>
            <Link to='/about' className="flex m-3">
                <img src={circle} className="m-2 h-4" alt="" />
                <p className="font-bold mx-2 text-pink-600 text-lg">Read More</p>
                <img src={arrowRight} className="m-1 h-6" alt="" />
            </Link>
        </div>
    </div>
  )
}

export default AboutHome