import React, { useContext } from "react";
import Footer from "../components/Footer";
import ThemePicker from "../components/theme-picker";
import ThemeContext from '../context/theme-context';
import dynamic from "next/dynamic";

const  Navbar = dynamic( () => import("../components/Navbar"), { ssr: false } );

const Layout = ({ children }) => {
  //const { theme, switchTheme } = useContext(ThemeContext);
  //<ThemePicker theme={theme ? theme : 'theme-midnightgreen'} setTheme={switchTheme} />
      
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
