import React from "react";
import "../stylesheets/header.css";
import "../index.css";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

import logo from "../asset/images/Logowhite.svg";
import Netflix from "../asset/icons/Netflix.svg";
import Ipad from "../asset/images/iPad Pro 2020.jpg";
import MERN from "../asset/images/MERN.jpg";
import List from "../asset/images/List.jpg";

function WorkPage() {
  return (
    <div className="work min-h-screen min-h-screen bg-red-900">
      {/* ------------------HEADER-------------------- */}
      <div>
        <div className="contactheader">
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
          <div className="menu">
            <Link to="/about" className="button special2">
              <p className="text-white">About</p>
            </Link>
            <Link to="/contact" className="button special1">
              <p>Say Hi!</p>
            </Link>
          </div>
        </div>
      </div>

      {/* -------------------S1-------------------- */}
      <div className="pt-20 pl-12 flex">
        <div className="pt-16">
          <a href="https://github.com/ishantsehrawat/Netflix-clone">
            <img
              src={Netflix}
              className="h-48 mt-20 pl-7 transform transition duration-500 hover:scale-110"
              alt=""
            />
          </a>
          <img src={MERN} className="pt-12" alt="" />
        </div>
        <div>
          <img src={Ipad} style={{ height: 650 }} className="pl-28" alt="" />
        </div>
      </div>

      {/* --------------------S2------------------ */}
      <div className="text-white text-2xl leading-loose pl-20">
        <ul>
          <li>User Auth</li>
          <li>CRUD API</li>
          <li>Admin Dashboard</li>
          <li>Hover Preview</li>
          <li>Movie/Series and Genre Filter</li>
          <li>Firebase Storage</li>
        </ul>
      </div>
      <img src={List} alt="" />
      <Contact />
    </div>
  );
}

export default WorkPage;
