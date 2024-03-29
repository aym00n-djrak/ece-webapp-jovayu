import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Head from "next/head";
import Layout from "../layout";
import UserContext from "../components/UserContext";
import Profile from "../components/profiles/ProfileUser";

export default function Contact() {
  const { user, logout, loading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading, router]);
  const onClickLogout = function () {
    logout();
  };

  return (
    <Layout>
      <Head>
        <title>WebTech - user signedin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!(user || loading) ? (
        <p>Redirecting...</p>
      ) : (
        <>
          <Profile id={user.id} />


          <h2 className="flex text-justify p-4 text-primary">Logout: </h2>

<div className="flex justify-center p-4">
          <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={onClickLogout}
          >
            Logout
          </button>
          </div>
        </>
      )}
    </Layout>
  );
}
