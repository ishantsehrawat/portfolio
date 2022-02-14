import React from "react";
import "../stylesheets/project.css";
import fitnessApp from "../asset/images/fitnessApp.png";

function Work() {
  return (
    // <div className="WorkBlock">
    //   <div className="firstRow">
    //     <h1 className="Heading">Work</h1>
    //     <div className="project">
    //       <img src={fitnessApp} className="ProjectImage" alt="" />
    //       <p>
    //         <i>Fitness App UI</i>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div class="px-12 py-10 bg-black rounded-t-3xl">
      <div class="flex justify-between mt-10">
        <h1 className="heading mt-12">Project</h1>
        <div className="project mx-5 mb-5 mt-10">
          <img src={fitnessApp} className="projectImage rounded-3xl" alt="" />
          <div className="flex justify-between items-center h-16 mx-4">
          <p className="text-white text-3xl font-semibold" ><i>Fitness App UI</i></p>
          <div>Fuck</div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div className="project m-5">
          <img src={fitnessApp} className="projectImage rounded-3xl" alt="" />
          <div className="flex justify-between items-center h-16 mx-4">
          <p className="text-white text-3xl font-semibold" ><i>Fitness App UI</i></p>
          <div>Fuck</div>
          </div>
        </div>
        <div className="project m-5">
          <img src={fitnessApp} className="projectImage rounded-3xl" alt="" />
          <div className="flex justify-between items-center h-16 mx-4">
          <p className="text-white text-3xl font-semibold" ><i>Fitness App UI</i></p>
          <div>Fuck</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Work;
