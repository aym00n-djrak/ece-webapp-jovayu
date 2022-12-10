import Head from "next/head";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Layout from "../layout";
import { useContext } from "react";
import UserContext from "../components/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <Layout>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        <Head>
          <title>{user?.name} | IA Learner</title>
          <meta name="description" content="I'm a student at ECE" />
        </Head>
        <About />
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
