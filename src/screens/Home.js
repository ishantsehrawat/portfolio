import React from "react";
import { Link, HashLink } from "react-router-dom";

import Carousel from "../components/Carousel";
import Work from "../components/Work";
import AboutHome from "../components/AboutHome";
import Contact from "../components/Contact";
import "../stylesheets/header.css";

import circle from "../asset/icons/Ellipse 1.svg";
import arrowDown from "../asset/icons/Arrow_down.svg";
import logo from "../asset/images/logo.svg";

export default function Home() {
  return (
    <div className="homePage">
      <div className="w-full h-screen">
        {/* -----------------HEADER------------------ */}
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
          <div className="menu">
            <Link to="/about" className="button special2">
              <p>About</p>
            </Link>
            <Link to="/contact" className="button special1">
              <p>Say Hi!</p>
            </Link>
          </div>
        </div>

        <div class="mt-20 h-2/3 overflow-hidden">
          <Carousel />
        </div>

        <div class="flex justify-between mx-24 mt-2/3">
          {/* <a href="/#Work"> */}
          <div className="flex mt-3">
            <img src={circle} className="mt-2 h-4" alt="" />
            <p className="font-bold mx-5 text-pink-600 text-lg">See Work</p>
            <img src={arrowDown} className="mt-1 h-6" alt="" />
          </div>
          {/* </a> */}
          <p class="w-2/4 text-lg">
            {" "}
            Hello There! I’m Ishant Sehrawat a Computer Science Engineering
            student, Frontend Developer and Application UI/UX Designer.
          </p>
        </div>
      </div>
      <Work id="Work" />
      <AboutHome />
      <Contact />
    </div>
  );
}
