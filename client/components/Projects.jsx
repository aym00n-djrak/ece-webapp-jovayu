import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

const Projects = () => {

  return (
    <>          
      <div
        id="projects"
        className="flex grid place-items-center h-screen m-4 p-4"
      >
        <h2>My projects :</h2>
        <div className="flex grid grid-cols-3 gap-4">
          <div className="bg-green-500 rounded-lg shadow-2xl hover:rotate-45">
            <a href="https://github.com/aym00n-djrak">
              <AiFillGithub size={500} />
            </a>
          </div>
          <div className="bg-blue-500 rounded-lg shadow-2xl hover:rotate-45">
            <a href="https://fr.linkedin.com/in/r%C3%A9my-jovanovic-73766b185">
              <FaLinkedinIn size={500} />
            </a>
          </div>
          <div className="bg-red-500 rounded-lg shadow-2xl hover:rotate-45">
            <DiCodeigniter size={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
