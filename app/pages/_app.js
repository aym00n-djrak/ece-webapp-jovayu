import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import { UserContext } from "../components/UserContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <ThemeProvider>
      <UserContext>
        <Layout>
          <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
          >
            <Component {...pageProps} />
          </SessionContextProvider>
        </Layout>
      </UserContext>
    </ThemeProvider>
  );
}

export default MyApp;

