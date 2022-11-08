import React from "react";
import Image from "next/image";
import { HiCode } from "react-icons/hi";
import Trident from "../public/trident.png"

const About = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center">
        <div className="z-10">
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, We are
            <span className="animate-waving-hand text-green-500"> Rémy & Shihao.</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">Students at ECE</h1>

          <div className="border-4"></div>

          <a
            href="#projects"
            className="mt-12 flex flex-col gap-2 text-green-500 max-w-[300px] m-auto justify-center items-center"
          >
            <span className="animate-waving-arrow">My code !</span>
            <HiCode />
            <Image src={Trident}></Image>
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
