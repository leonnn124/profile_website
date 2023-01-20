import React from "react";
import CakeResume from "../assets/cakeresume.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Leon from "../assets/leon.jpg";

const About = () => {
  return (
    <div className="h-screen flex flex-col items-center text-center justify-center space-y-3">
      <img
        src={Leon}
        alt="Leon"
        className="lg:h-80 lg:w-80 h-60 w-60 object-cover rounded-full"
      />

      <h2 className="NotoSans font-medium text-3xl py-2 text-teal-600">
        林暐倫
      </h2>
      <h3 className="font-burtons text-2xl py-1 tracking-[3px]">
        Frontend Web Designer.
      </h3>
      <p className="text-md py-5 lg:px-40 px-12 text-gray-500 leading-8 tracking-[5px]">
        我是Leon，喜歡設計網頁、APP，對相關技術充滿好奇，以自學的方式持續探索相關領域技術．
      </p>

      <div className="flex text-3xl justify-center items-center py-3 gap-10 text-gray-700">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cakeresume.com/s--X9cYt-RFKn8r38gUOSbUFw--/s0976144676s"
        >
          <img
            src={CakeResume}
            alt="CakeResume"
            className="cursor-pointer w-[50px] h-[50px]"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/leonnn124"
        >
          <img
            src={Github}
            alt="Github"
            className="cursor-pointer w-[50px] h-[50px]"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/%E6%9A%90%E5%80%AB-%E6%9E%97-723a88202/"
        >
          <img
            src={Linkedin}
            alt="Linkedin"
            className="cursor-pointer w-[50px] h-[50px]"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
