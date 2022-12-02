import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../public/nav.png";
import { useContext } from "react";
import UserContext from "../components/UserContext";
import Avatar from "../components/Avatar";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <div className="justify-between items-center text-center inline-block flex flex-wrap bg-violet-500 text-white">
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
          <div>
            <Avatar />
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-16 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">
              {user ? user.name : "Not logged in"}
            </h5>
          </div>

          <div
            id="button"
            className="rounded-full bg-violet-500 text-white"
          >
            {user ? <LoggedIn /> : <LoggedOut />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
