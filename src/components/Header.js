import React from "react";
import logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";

import "../stylesheets/header.css";

function header() {
  return (
    <div>
      <div className="header">
        <Link to='/'>
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
    </div>
  );
}

export default header;
