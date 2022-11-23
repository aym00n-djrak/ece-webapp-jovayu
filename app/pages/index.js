import Head from "next/head";
import About from "../layout/About";
import Projects from "../layout/Projects";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "./admin/account";
import Contacts from "./admin/contacts";

const Home = () => {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Head>
        <title>Rémy | IA Learner</title>
        <meta name="description" content="I'm a student at ECE" />
      </Head>
        <p>
          <About />
          <Projects />
        </p>
      
    </div>
  );
};

export default Home;
