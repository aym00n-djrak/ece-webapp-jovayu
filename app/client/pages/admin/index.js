import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Admin from "./admin";
import Layout from "../../layout";

function AdminIndex() {
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
              <Admin session={session} />
            </p>
          )}
        </main>
      </div>
      </Layout>
  );
}

export default AdminIndex;
