import React from "react";
import fitclub from "../assets/fitclub.jpg";
import deliveroo from "../assets/deliveroo.jpg";
import metaverse from "../assets/metaverse.jpg";

const Projects = () => {
  return (
    <div className="h-screen">
      <div className="overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex flex-row h-screen">
        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={fitclub}
            alt="fitclub"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8 w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              Fit Club
            </h2>
            <p className="text-sm tracking-[2px]">
              #React #SASS #Framer Motion
            </p>
            <div className="text-sm tracking-[2px]">
              <a
                href="https://leonnnx124-fitclub.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View {">"}
              </a>
            </div>
          </div>
        </div>

        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={deliveroo}
            alt="deliveroo"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8  w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              Deliveroo
            </h2>
            <p className="text-sm tracking-[2px]">
              #React Native #Tailwind #Sanity.io #Redux
            </p>
            <div className="text-sm tracking-[2px]">
              <a
                href="https://www.youtube.com/watch?v=duB_4g5SpVk"
                target="_blank"
                rel="noopener noreferrer"
              >
                View {">"}
              </a>
            </div>
          </div>
        </div>

        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={metaverse}
            alt="metaverse"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8  w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              Metaverse
            </h2>
            <p className="text-sm tracking-[2px]">
              #React #Tailwind #Framer Motion
            </p>
            <div className="text-sm tracking-[2px]">
              <a
                href="https://leonnnx124-metaverse.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View {">"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
