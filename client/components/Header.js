import { useState, useContext } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../public/nav.png";
import Context from "../components/UserContext";
import Avatar from "./Avatar";

const Header = () => {
  const { user } = useContext(Context);
  return (
    <div
      id="navbar"
      className="bg-violet-500 text-center justify-between  w-full p-2"
    >
      <nav>
        <div className="justify-between items-center text-center inline-block flex flex-wrap">
          <Link href="/">
            <a>
              <Image src={Nav} alt="nav" width={100} height={100} />
            </a>
          </Link>
          <div></div>

          <Link href="/articles">Articles</Link>

          <Link href="/contact">Contact </Link>

          <Link href="/about">About </Link>
          <div>
            <div className="">
              <Avatar email={user?.email} />
              <h1 className="text-3xl font-bold">{user?.username}</h1>
            </div>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                class="rounded-full w-16 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            </div>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
/*

          
//flex flex-col text-center justify-center m-4
*/
