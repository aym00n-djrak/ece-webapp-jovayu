import "../styles/globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
  </div>
  );  
}

export default MyApp;
