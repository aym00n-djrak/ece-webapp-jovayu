import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Contacts from "./admin/allcontacts";

function About() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
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
              <Contacts session={session} />
            </p>
          )}
        </main>
      </div>
  );
}

export default About;
