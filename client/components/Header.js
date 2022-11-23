import { useState, useContext } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../public/nav.png";
import Context from "../components/UserContext";

const Header = () => {
  const { user } = useContext(Context);
  return (
    <div id="navbar" className="bg-violet-500 text-center  w-full">
      <nav>
        <div>
          <Link href="/">
            <a>
              <Image src={Nav} alt="nav" width={50} height={50} />
            </a>
          </Link>


          <Link href="/articles">Articles</Link>

          <Link href="/contact">Contact </Link>

          <Link href="/about">About </Link>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link href="/login-controlled">Login</Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link href="/login-controlled">Register</Link>
            </span>
          </button>

          <div className="flex flex-col text-center justify-center m-4">
          <h1 className="text-3xl font-bold">{user?.username}</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
