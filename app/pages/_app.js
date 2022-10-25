import "../styles/globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
  </div>
  );
  
}

export default MyApp;
