import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import { UserContext } from "../components/UserContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div>
      <ThemeProvider>
        <SessionContextProvider supabaseClinet={supabase} initialSession={pageProps.initialSession}>
        <UserContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext>
        </SessionContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
