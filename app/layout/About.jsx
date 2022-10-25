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
            className="mt-12 flex flex-col gap-2 text-green-500 max-w-[300px] m-auto justify-center"
          >
            <span className="animate-waving-arrow">My code !</span>
            <HiCode className="items-center"/>
          </a>
        </div>
      </div>

      <p className="py-4 text-gray-600 dark:text-white sm:max-w-[70%] m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Image src={Trident}></Image>
    </div>
  );
};

export default About;
