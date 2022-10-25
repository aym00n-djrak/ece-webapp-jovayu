import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../public/nav.png";

function Navbar() {
  return (
    <div id="navbar" className="bg-violet-500	 text-center items-center p-2">
      <nav>
        <Link href="/">
          <a>
            <Image src={Nav} alt="nav" width={50} height={50}/>
          </a>
        </Link>
        <Link href="/articles">Articles </Link>

        <Link href="/contact">Contact </Link>

        <Link href="/about">About </Link>
      </nav>
    </div>
  );
}

export default Navbar;
