import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Contacts from "./contacts/contacts";

function About(){
    const session = useSession();
    const supabase = useSupabaseClient();
  
    return(

        <div className='about'>
        <main>
            <h1>Blog de JOVANOVIC Rémy et YU Shihao</h1>
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

               )
}

export default About;