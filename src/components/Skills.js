import React from "react";
import Code from "../assets/code.png";
import Consulting from "../assets/consulting.png";
import Design from "../assets/design.png";

const Skills = () => {
  return (
    <div className="h-screen flex md:flex-row justify-center items-center w-full px-6 text-center flex-col">
      <div className="xl:w-1/5 md:w-1/4 w-full xl:h-4/6 md:h-3/6 h-1/4 flex flex-col items-center md:justify-start justify-center shadow-lg md:p-10 p-5 rounded-xl mx-6">
        <img
          src={Code}
          alt="Code"
          className="xl:h-36 xl:w-36 md:h-20 md:w-20 h-12 w-12 object-cover rounded-full"
        />
        <h3 className="font-burtons text-xl text-teal-600 my-2">
          Web Development
        </h3>
        <div className="md:space-y-2 flex md:flex-col flex-row space-x-2 md:space-x-0">
          <p>React</p>
          <p>Vue</p>
          <p>Tailwind</p>
          <p>Next</p>
          <p>Node</p>
          <p>SASS</p>
          <p>PWA</p>
        </div>
      </div>
      <div className="xl:w-1/5 md:w-1/4 w-full xl:h-4/6 md:h-3/6 h-1/4 flex flex-col items-center md:justify-start justify-center shadow-lg md:p-10 p-5 rounded-xl mx-6">
        <img
          src={Design}
          alt="Design"
          className="xl:h-36 xl:w-36 md:h-20 md:w-20 h-12 w-12 object-cover rounded-full"
        />
        <h3 className="font-burtons text-xl text-teal-600 my-2">
          UI/UX Design
        </h3>
        <div className="md:space-y-2 flex md:flex-col flex-row space-x-2 md:space-x-0">
          <p>Figma</p>
          <p>Canva</p>
          <p>Photoshop</p>
        </div>
      </div>
      <div className="xl:w-1/5 md:w-1/4 w-full xl:h-4/6 md:h-3/6 h-1/4 flex flex-col items-center md:justify-start justify-center shadow-lg md:p-10 p-5 rounded-xl mx-6">
        <img
          src={Consulting}
          alt="Consulting"
          className="xl:h-36 xl:w-36 md:h-20 md:w-20 h-12 w-12 object-cover rounded-full"
        />
        <h3 className="font-burtons text-xl text-teal-600 my-2">Tech Stack</h3>
        <div className="md:space-y-2 flex md:flex-col flex-row space-x-2 md:space-x-0">
          <p>Docker</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Python</p>
          <p>Vagrant</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
