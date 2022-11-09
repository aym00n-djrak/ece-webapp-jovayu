import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import Cyber from "../public/cyber.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";


const Projects = () => {
  return (
    //aligner videos avec tailwind iframe
    <div
      id="projects"
      className="flex grid place-items-center h-screen m-4 p-4"
    >
      <h2>My projects :</h2>
      <div className="grid grid-cols-3 gap-4">

          <div className="bg-red-500 ">
            <a href="https://github.com/aym00n-djrak"><AiFillGithub size={500}/></a>
          </div>
          <div className="bg-red-500 ">
            <a href="https://fr.linkedin.com/in/r%C3%A9my-jovanovic-73766b185"><FaLinkedinIn size={500}/></a>
          </div>
          <div className="bg-red-500 ">
            <DiCodeigniter size={500} />
          </div>
      </div>
    </div>
  );
};

export default Projects;
