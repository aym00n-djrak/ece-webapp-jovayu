import Head from "next/head";
import About from "../layout/About";
import Projects from "../layout/Projects";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "./admin/account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Head>
        <title>Rémy | IA Learner</title>
        <meta name="description" content="I'm a student at ECE" />
      </Head>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <p>
          <Account />
          <About />
          <Projects />
        </p>
      )}
    </div>
  );
};

export default Home;
