import "../styles/globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar className="bg-violet-500	 text-center items-center p-2"/>
      <Component {...pageProps} />
      <Footer/>
  </div>
  );  
}

export default MyApp;
