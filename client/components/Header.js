import React from "react";
import Image from "next/image";
import { HiCode } from "react-icons/hi";
import Trident from "../public/trident.png";

const Header = () => {
  return (
    <div className="flex w-full h-screen text-center">
      <div className="w-full h-full mx-auto p-2 flex justify-center">
        <div className="z-10">
          <h1 className="p-5 text-gray-700 dark:text-white">
            Un jour, une idée ...
          </h1>

          <h3 className="text-gray-700 dark:text-white">
            Prenez le temps de lire mes articles, de commenter et de partager.
          </h3>

          <a
            href="#student"
            className="mt-12 flex flex-col gap-2 text-green-500 max-w-[300px] m-auto justify-center items-center"
          >
            <span className="animate-bounce">A mon propos !</span>
            <HiCode />
            <Image src={Trident} alt="Trident" width={100} height={100} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
