import React from "react";
import Web1 from "../assets/web1.png";
import Web2 from "../assets/web2.png";
import Web3 from "../assets/web3.png";

const Projects = () => {
  return (
    <div className="h-screen">
      <div className="overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex flex-row h-screen">
        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={Web1}
            alt="Web1"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8 w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              Nike Air Max 270
            </h2>
            <p className="text-sm tracking-[4px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cupiditate est temporibus ullam a quis eum quo, assumenda minus
              atque. Dolor quidem reprehenderit animi dicta dolores voluptates
              laborum, praesentium enim?
            </p>
          </div>
        </div>

        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={Web2}
            alt="Web2"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8  w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              Look For Elegent Nails
            </h2>
            <p className="text-sm tracking-[4px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cupiditate est temporibus ullam a quis eum quo, assumenda minus
              atque. Dolor quidem reprehenderit animi dicta dolores voluptates
              laborum, praesentium enim?
            </p>
          </div>
        </div>
        <div className="w-screen snap-center flex-shrink-0 flex lg:flex-row flex-col items-center justify-center ">
          <img
            src={Web3}
            alt="Web3"
            className="xl:w-[60%] xl:h-[75%] lg:w-[50%] lg:h-[65%] sm:h-[50%] w-[90%]  object-contain"
          />
          <div className="xl:w-[20%] lg:w-[20%] text-center lg:ml-6 space-y-8  w-[90%]">
            <h2 className="font-burtons text-3xl mt-6 text-teal-600">
              The Data Onboarding
            </h2>
            <p className="text-sm tracking-[4px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cupiditate est temporibus ullam a quis eum quo, assumenda minus
              atque. Dolor quidem reprehenderit animi dicta dolores voluptates
              laborum, praesentium enim?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
