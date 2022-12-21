import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "./UserContext";

export default function MyComments() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const [contacts, setContacts] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("user_id", user?.id);
      if (error) {
        console.log(error);
      } else {
        setContacts(data);
      }
    };
    fetchContacts();
  }, [supabase, user]);

  return (
    <>
      <Head>
        <title>WebTech - Comment list</title>
      </Head>

      <h1 className="wt-title m-4 text-2xl font-bold text-left">
        Vos commentaires :
      </h1>
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    Date
                  </th>
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
                    Lastname
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {contacts.map((contact) => (
                  <tr key={contact.email}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {contact.created_at.split("T")[1].split(".")[0]} le{" "}
                      {contact.created_at.split("T")[0]}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {contact.firstname}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {contact.lastname}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-900">
                      {contact.email}
                    </td>
                    <td>
                      <Link
                        className={
                          "w-5 h-5 block bg-zinc-700 hover:bg-blue-500 hover:text-zinc-900 rounded-full"
                        }
                        href={`/admin/contactsmes/${contact.id}`}
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
