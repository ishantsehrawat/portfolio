import React from "react";
import github from "./asset/icons/github.png";
import dribbble from "./asset/icons/dribbble.png";
import twitter from "./asset/icons/twitter.png";
import linkedin from "./asset/icons/linkedin.png";
import instagram from "./asset/icons/instagram.png";
import figma from "./asset/icons/figma.png";
import google from "./asset/icons/google.png";
import "./App.css";

export default function contact() {
  return (
    <div>
      <div className="social">
        <a href="https://github.com/ishantsehrawat">
          <img src={github} className="socialLinks" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/ishant-sehrawat-90b1341a4/">
          <img src={linkedin} className="socialLinks" alt="github" />
        </a>
        <a href="https://www.instagram.com/theishantsehrawat/">
          <img src={instagram} className="socialLinks" alt="github" />
        </a>
        <a href="https://twitter.com/sehrawat_ishant">
          <img src={twitter} className="socialLinks" alt="github" />
        </a>
        <a href="https://g.dev/ishantsehrawat">
          <img src={google} className="socialLinks" alt="github" />
        </a>
        <a href="https://www.figma.com/@ishantsehrawat">
          <img src={figma} className="socialLinks" alt="github" />
        </a>
        <a href="https://dribbble.com/ishantsehrawat">
          <img src={dribbble} className="socialLinks" alt="github" />
        </a>
      </div>
    </div>
  );
}
