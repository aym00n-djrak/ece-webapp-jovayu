import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import Cyber from "../public/cyber.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import Form from "../components/Form";

const Projects = () => {

  return (
    <>
      <div id="student" className="text-center m-4 p-4">
        <h2> Student :</h2>

        <div className="flex justify-center m-2">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-4">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Skills: </h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-4 ">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>

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

      <Form />
    </>
  );
};

export default Projects;
