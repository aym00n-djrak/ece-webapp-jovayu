import Head from "next/head";
import About from "../layout/About";
import Projects from "../layout/Projects";


const Home = () => {

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Head>
        <title>Rémy | IA Learner</title>
        <meta name="description" content="I'm a student at ECE" />
      </Head>
          <About />
          <Projects />
    </div>
  );
};

export default Home;
