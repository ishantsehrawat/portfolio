import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Button1.css";

export default function menuButton(text, link) {
  return (
    <Link to={link}>
      <h2 className="menuitem hover:text-white px-4 py-2 rounded-full hover:scale-110 transform ease-out cursor-pointer">
        {text}
        <span></span>
      </h2>
    </Link>
  );
}
