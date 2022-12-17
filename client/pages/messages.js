import Comments from "../components/Comments";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../layout";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function Messages() {
  const router = useRouter();
  const { user } = useContext(UserContext);
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
            <Comments session={session} />
          </p>
        )}
      </main>
    </div>
    </Layout>
  );
}

export default Messages;
