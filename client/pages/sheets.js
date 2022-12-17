import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Articles from "./articles/articles";
import Layout from "../layout";

function Sheets() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <Layout>
      <div className="about">
        <main>
          {!session ? (
            <Auth
              providers={["github"]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <p>
              <Articles session={session} />
            </p>
          )}
        </main>
      </div>
      </Layout>
  );
}

export default Sheets;
