import { useState, useEffect } from "react";
import md from "markdown-it";
import Head from "next/head";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "../../../layout";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../../../components/UserContext";
import { CpuChipIcon } from "@heroicons/react/20/solid";
import { DiWindows } from "react-icons/di";
import Link from "next/link";

export default function Articles({ id }) {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [articles, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("articles")
        .select(`titre, contenu, auteur, user_id`)
        .eq("id", id)
        .single();
      setArticle(data);
    })();
  }, [id, supabase]);

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("contacts")
        .select(`id, firstname, lastname, email, message, user_id`)
        .eq("article_id", id);
      setComments(data);
    })();
  }, [id, supabase]);


  const deleteData = async () => {
    const { data, error } = await supabase

      .from("articles")
      .delete()
      .eq("id", id)
      .single()
      .then(() => {
        window.location.href = "/sheets";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const flushComments = async () => {
    const { data, error } = await supabase

      .from("contacts")
      .delete()
      .eq("article_id", id)
      .then(() => {
        window.location.href = "/sheets";
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  //afficher le formulaire de modification
  const updateData = async () => {
    router.push(`/articles/update/${id}`);
  };

  const commentArticle = async () => {
    router.push(`/articles/comment/${id}`);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>WebTech - Detail darticle</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="wt-title m-4 text-2xl font-bold text-left
      ">Article : </h1>
      
       {articles && (
          <div className="overflow-hidden divide-y divide-zinc-700 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="bg-slate-50">
              <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-zinc-700 [&_dt]:pr-3">
                <dt>Titre</dt>
                <dd className="text-zinc-900">{articles.titre}</dd>
                <dt>Auteur</dt>
                <dd className="text-zinc-900">{articles.auteur}</dd>
              </dl>
            </div>
            <div className="px-3 py-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: md().render(articles.contenu),
                }}
              />
            </div>
          </div>
        )}

        {articles && articles.user_id === user?.id && (
          <>
            <div class="flex space-x-2 justify-center p-2">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={deleteData}
              >
                Delete
              </button>
              

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={flushComments}
              >
                Vider les commentaires
              </button>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={updateData}
              >
                Update
              </button>
            </div>
          </>
        )}
        <div class="flex space-x-2 justify-center">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={commentArticle}
          >
            Commenter
          </button>
        </div>

        

        <h2 className="wt-title m-4 text-2xl font-bold text-left">Commentaires :</h2>

          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-slate-300">
                <thead className="bg-slate-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                    >
                      Firstname
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {comments.map((comment) => (
                    <tr key={comment.email}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                        <pre>{comment.firstname}</pre>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                        <pre>{comment.message}</pre>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </Layout>
    </>
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
