import React from "react";
import logo from "../asset/images/logo.svg";
// import Button1 from "./Button1";
// import { Link } from "react-router-dom";

import "../stylesheets/header.css";

function header() {
  return (
    <div>
      <div className="header">
        <img src={logo} className="logo" alt="" />
        {/* <Button1 text="About" link="/work" /> */}
        <div className="menu">
          <a href="/about" className="button special2">
            <p>About</p>
          </a>
          <a href="/contact" className="button special1">
            <p>Say Hi!</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
