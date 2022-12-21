import Head from "next/head";
import Projects from "../components/Projects";
import Layout from "../layout";
import { useContext } from "react";
import UserContext from "../components/UserContext";
import Header from "../components/Header";
import Articles from "./articles/articlesforall"
import Student from "../components/Student";
import Tiny from "../components/WYSIWYG/tiny";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <Layout>
      <div>
      <Head>
          <title>{user?.name} | IA Learner</title>
          <meta name="description" content="I'm a student at ECE" />
        </Head>
        <Header />
        <Articles />
        <Student user={user} />
        <Tiny />
        <Projects />
      </div>
    </Layout>
  );
};

export default Home;
