import React from 'react'
import "../stylesheets/ContactComp.css";

function Contact() {
  return (
    <div className='min-h-screen p-5 bg-black text-yellow-50'>
        <h1 className="topic">Say Hi!</h1>
        <a href="/contact"><h2 className='topic2 px-6 text-7xl font-semibold '><u>What's your idea!</u></h2></a>
    </div>
  )
}

export default Contact