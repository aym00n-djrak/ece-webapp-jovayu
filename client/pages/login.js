import { useRouter } from "next/router";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Layout from "../layout";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession } from "@supabase/auth-helpers-react";
import Account from "./contacts/account";

export default function Login() {
  const router = useRouter();
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();

  if (user) {
    router.push("/");
  }
  
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container">
      {!session ? (
        <Auth
          providers={["github"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <p>
        </p>
      )}
      </div>
    </Layout>
  );
}
