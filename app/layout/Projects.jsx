import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import Cyber from "../public/cyber.jpg";

const Projects = () => {
  return (
    //aligner videos avec tailwind iframe
    <div
      id="projects"
      className="flex grid place-items-center h-screen m-4 p-4"
    >
      <h2>My projects :</h2>

      <div className="grid grid-cols-3 gap-4 hover:grid-cols-6">

          <div className="bg-red-500 ">01</div>
          <div className="bg-red-500 ">02</div>
          <div className="bg-red-500 ">03</div>
          <div className="bg-red-500 ">04</div>
          <div className="bg-red-500 ">05</div>

      </div>
    </div>
  );
};

export default Projects;
