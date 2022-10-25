import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      {children}
    </div>
  );
};

export default Layout;
