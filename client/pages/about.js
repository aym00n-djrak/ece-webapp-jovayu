import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "./admin/account";
import Contacts from "./admin/contacts";

function About(){
    const session = useSession();
    const supabase = useSupabaseClient();
    return(

        <div className='about'>
        <main>
            <h1>Blog de JOVANOVIC Rémy et YU Shihao</h1>
        </main>
        {!session ? (
        <Auth
          providers={["github"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <p>
          <Account session={session} />
        </p>
      )}
        </div>

               )
}

export default About;