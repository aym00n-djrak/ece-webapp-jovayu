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
      });
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
      <h1 className="wt-title m-4 text-2xl font-bold text-left">
        Modification de votre commentaire :
      </h1>
      <form
        className="[&_span]:block grid gap-3 mt-4 mb-8  mx-auto text-slate-500 text-sm font-medium tracking-wide  sm:space-y-0 sm:grid-cols-2 sm:gap-6 sm:items-start sm:text-base border-solid border-2 border-gray-200 rounded-md p-6"
        onSubmit={onSubmit}
      >
        <div>
          <label>
            <span>Firstname</span>
            <input type="text" name="firstname"  className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800 text-blue-700"  value={articles?.firstname}  onChange={(e) => setArticle({ ...articles, firstname: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Lastname</span>
            <input type="text" name="lastname" className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800 text-blue-700"  value={articles?.lastname}  onChange={(e) => setArticle({ ...articles, lastname: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800 text-blue-700"  value={articles?.email}  onChange={(e) => setArticle({ ...articles, email: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <textarea name="message" className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 text-blue-700" value={articles?.message}  onChange={(e) => setArticle({ ...articles, message: e.target.value })} />
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="flex  inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Envoyer
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
