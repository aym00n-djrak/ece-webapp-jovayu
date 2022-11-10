import "../styles/globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import { UserContext } from "../components/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider>
        <UserContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
