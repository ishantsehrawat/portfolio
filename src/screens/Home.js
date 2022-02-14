import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Work from "../components/Work";
import circle from "../asset/icons/Ellipse 1.svg";
import arrowDown from "../asset/icons/Arrow_down.svg";

export default function Home() {
  return (
    <div className="homePage">
      <div className="w-full h-screen">
        <Header />
        <div class="h-2/3 overflow-hidden">
          <Carousel />
        </div>
        <div class="flex justify-between mx-24 mt-2/3">
          <div className="flex mt-3">
            <img src={circle} className="mt-2 h-4" alt="" />
            <p className="font-bold mx-5 text-pink-600 text-lg">See Work</p>
            <img src={arrowDown} className="mt-1 h-6" alt="" />
          </div>
          <p class="w-2/4 text-lg">
            {" "}
            Hello There! I’m Ishant Sehrawat a Computer Science Engineering
            student, Frontend Developer and Application UI/UX Designer.
          </p>
        </div>
      </div>
      <Work />
    </div>
  );
}
