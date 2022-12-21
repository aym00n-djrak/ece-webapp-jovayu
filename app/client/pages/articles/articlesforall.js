import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "../../layout";
import { useRouter } from "next/router";

export default function Articles() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("articles")
        .select(`id, titre, contenu, auteur`);
      setArticles(data);
    })();
  }, [supabase]);
  const createArticle = async () => {
    router.push("/articles/CreaArticle");
  };
  
  return (
    <>
      <Head>
        <title>WebTech - Articles list</title>
      </Head>

      <h2 id="student" className="text-center text-3xl font-bold w-full p-10">
        Une liste de vos articles favoris :
      </h2>

        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                  >
                    Titre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    Auteur
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {articles.map((article) => (
                  <tr key={article.email}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {article.titre}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {article.auteur}
                    </td>

                    <td>
                      <Link
                        className={
                          "w-5 h-5 block bg-zinc-700 hover:bg-blue-500 hover:text-zinc-900 rounded-full"
                        }
                        href={`/articles/article/${article.id}`}
                      >
                        <ChevronRightIcon
                          className="h-5 w-5 dark:text-zinc-900"
                          aria-hidden="true"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}
