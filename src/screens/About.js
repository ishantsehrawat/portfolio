import React from 'react'
import { Link } from 'react-router-dom';

import MySelf from '../components/MySelf';
import Experience from '../components/Experience';
import Process from '../components/Process';
import Contact from '../components/Contact';
import '../stylesheets/header.css';
import '../stylesheets/About.css';

import logo from "../asset/images/logo.svg";


function About() {
  return (
    <div className='AboutPage'>
      <div className='MainScreen h-screen' >
        {/* --------------NAVBAR----------------- */}
        <div className="header">
          <Link to='/'>
            <img src={logo} className="logo" alt="" />
          </Link>
          <div className="menu">
            <Link to="/work" className="button special2">
              <p>Work</p>
            </Link>
            <Link to="/contact" className="button special1">
              <p>Say Hi!</p>
            </Link>
          </div>
        </div>
        <div className='flex h-screen items-end'>
          <h1 className='name font-bold ml-5 mb-16'>ishant sehrawat</h1>
        </div>
        <div className='intro flex items-end h-screen'>
          <p className='text-2xl text-right mr-8 mb-24'>
            Delhi - India
            <br/><br/><br/>
            Ishant is a Designer and Developer
            <br/>
            Available for work
            <br/><br/><br/>
            ishantsehrawat75@gmail.com</p>
        </div>
      </div>
      <MySelf />
      <Experience />
      <Process />
      <Contact />
    </div>
  )
}

export default About