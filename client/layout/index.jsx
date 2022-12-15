import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
