import "../styles/globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
