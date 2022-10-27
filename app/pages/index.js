import Head from "next/head";
import Layout from "../layout";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rémy | IA Learner</title>
        <meta name="description" content="I'm a student at ECE" />
      </Head>
      <Layout>
        <About />
        <Projects/>
      </Layout>
    </div>
  );
}
