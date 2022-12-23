import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../public/nav.png";
import { useContext } from "react";
import UserContext from "../components/UserContext";
import LoggedIn from "./LoggedIn";
import DarkMode from "./DarkMode";
import { useEffect } from 'react'
import { themeChange} from "theme-change"

function Navbar() {
  const { user } = useContext(UserContext);


  return (
    <nav>
      <div className="justify-between items-center text-center inline-block flex flex-wrap bg-violet-500 text-white">
        <Link href="/">
          <a className="inline-block p-2 mr-4 text-xl transition transform hover:scale-110">
            <Image src={Nav} alt="nav" width={100} height={100} />
          </a>
        </Link>
        <div></div>

        <Link href="/sheets">
          <a className="transition ease-in text-xl font-medium leading-tight mb-2 hover:text-rose-700">
            Mes Articles
          </a>
        </Link>

        <Link href="/messages">
        <a className="transition ease-in text-xl font-medium leading-tight mb-2 hover:text-rose-700">
            Mes Commentaires
          </a>
        </Link>

        <DarkMode />

        <div>
          <div>
            <h5 className="text-xl font-medium leading-tight mb-2">
              {user ? user.name : "Not logged in"}
            </h5>
          </div>

          <div id="button" className="rounded-full bg-violet-500 text-white">
            <LoggedIn className="rounded-full bg-violet-500 text-white"/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
