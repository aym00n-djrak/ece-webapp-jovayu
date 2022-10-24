import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col dark:text-gray-100">
      <h1>404...</h1>
      <h3>This page doesn&#39;t exist</h3>
      <span className="block h-[1px] w-[20%] bg-gray-500 m-4"></span>
      Sorry, it seems like I&#39;ve not developed this page yet.
      <div className="flex items-center gap-3 mt-4">
        <Link href="/" className="">
          <p className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer">
            Go back to safe zone
          </p>
        </Link>
        <Link href="/#contact" className="">
          <p className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-green-500 text-white font-bold text-sm cursor-pointer">
            Contact me
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;