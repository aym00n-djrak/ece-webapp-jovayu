import { useState, useEffect } from "react";
import Head from "next/head";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "../../../layout";
import { useRouter } from "next/router";

export default function ContactsUpdate({ id }) {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [articles, setArticle] = useState(null);
  const supabase = useSupabaseClient();
  
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("contacts")
        .select(`firstname, lastname, email, message, user_id`)
        .eq("id", id)
        .single();
      setArticle(data);
    })();
  }, [id, supabase]);

  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { error } = await supabase
      .from("contacts")
      .update({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        email: data.get("email"),
        message: data.get("message"),
      })
      .eq("id", id)
      .then(() => {
        window.location.href = "/messages";
      })
      if (error) {
      setMessage("Desole, nous avons rencontre une erreur.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Merci d avoir modifie votre commentaire.</p>
        </div>
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>WebTech - Modifie un commentaire</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="wt-title m-4 text-2xl font-bold text-left">Votre commentaire :</h1>
      <form className="[&_span]:block grid gap-3 mt-4 mb-8 w-full max-w-[30rem] mx-auto text-slate-500 text-sm font-medium tracking-wide leading-6 space-y-4 sm:space-y-0 sm:grid-cols-2 sm:gap-6 sm:items-start sm:text-base" onSubmit={onSubmit}>
        <div>
          <label>
            <span>Firstname</span>

            <input type="text" name="firstname" value={articles?.firstname}></input>
          </label>
        </div>
        <div>
          <label>
            <span>Lastname</span>
            <input type="text" name="lastname"  value={articles?.lastname} />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" value={articles?.email} />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <input type="text" name="message" value={articles?.message} />
          </label>
        </div>
        <div>
          <button className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">
            Send
          </button>
        </div>
      </form>
      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      )}
      <br />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params);
  return {
    props: {
      id: context.params.id,
    },
  };
}
