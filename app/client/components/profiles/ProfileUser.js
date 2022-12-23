import { useState, useEffect } from "react";
import Head from "next/head";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Profile({ id }) {
  const router = useRouter();
  const [profiles, setProfiles] = useState(null);
  const supabase = useSupabaseClient();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `username,firstname, lastname, zipcode, city, email, telephone,adresse,description, user_id`
        )
        .eq("user_id", id)
        .single();
      setProfiles(data);
    })();
  }, [id, supabase]);

  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { error } = await supabase
      .from("profiles")
      .update({
        username: data.get("username"),
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        zipcode: data.get("zipcode"),
        city: data.get("city"),
        email: data.get("email"),
        telephone: data.get("telephone"),
        description: data.get("description"),
        adresse: data.get("adresse"),
      })
      .eq("user_id", id)
      .single();

    if (error) {
      setMessage("Désolé, nous avons rencontre une erreur.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>
            Merci d avoir modifie votre profile, nous vous recontacterons le plus
            vite possible
          </p>
        </div>
      );
      router.push("/profile");
    }
  };

  const insertProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          username: profiles.username,
          firstname: profiles.firstname,
          lastname: profiles.lastname,
          zipcode: profiles.zipcode,
          city: profiles.city,
          email: profiles.email,
          telephone: profiles.telephone,
          description: profiles.description,
          adresse: profiles.adresse,
          user_id: id,
        },
      ])
      .single();
    if (error) {
      setMessage(
        "Désolé, nous avons rencontre une erreur. Votre compte existe surement deja"
      );
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>
            Merci d avoir cree votre profile, nous vous recontacterons le plus
            vite possible
          </p>
        </div>
      );
      router.push("/");
    }
  };

  const deleteProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .delete()
      .eq("user_id", id)
      .single();
    if (error) {
      setMessage("Désolé, nous avons rencontre une erreur.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>
            Merci d avoir supprime votre profile, nous vous recontacterons le
            plus vite possible
          </p>
        </div>
      );
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>WebTech - Profile user</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="wt-title m-4 text-2xl font-bold text-left text-center text-primary
      ">Votre profil :</h1>
     
      <h3 className="text-center mt-3 text-primary">Pour votre premiere connexion, veuillez remplir votre profil</h3>

      <div className="flex justify-center p-4 text-primary">
        <h2 className=" text-center mt-3 ">
          Bonjour {profiles?.firstname} {profiles?.lastname} !
        </h2>
      </div>
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <form
              className="[&_span]:block grid gap-3 mt-4 mb-8 w-full max-w-[30rem] mx-auto text-slate-500 text-sm font-medium tracking-wide leading-6 space-y-4 sm:space-y-0 sm:grid-cols-2 sm:gap-6 sm:items-start sm:text-base"
              onSubmit={onSubmit}
            >
              <div>
                <label>
                  <span>Username</span>
                  <input
                    type="text"
                    name="username"
                    value={profiles?.username}
                    onChange={(e) =>
                      setProfiles({ ...profiles, username: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Firstname</span>
                  <input
                    type="text"
                    name="firstname"
                    value={profiles?.firstname}
                    onChange={(e) =>
                      setProfiles({ ...profiles, firstname: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Lastname</span>
                  <input
                    type="text"
                    name="lastname"
                    value={profiles?.lastname}
                    onChange={(e) =>
                      setProfiles({ ...profiles, lastname: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    value={profiles?.email}
                    onChange={(e) =>
                      setProfiles({ ...profiles, email: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Telephone</span>
                  <input
                    type="text"
                    name="telephone"
                    value={profiles?.telephone}
                    onChange={(e) =>
                      setProfiles({ ...profiles, telephone: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Address</span>
                  <input
                    type="text"
                    name="adresse"
                    value={profiles?.adresse}
                    onChange={(e) =>
                      setProfiles({ ...profiles, adresse: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>City</span>
                  <input
                    type="text"
                    name="city"
                    value={profiles?.city}
                    onChange={(e) =>
                      setProfiles({ ...profiles, city: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Zipcode</span>
                  <input
                    type="text"
                    name="zipcode"
                    value={profiles?.zipcode}
                    onChange={(e) =>
                      setProfiles({ ...profiles, zipcode: e.target.value })
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  <span>Description</span>
                  <input
                    type="text"
                    name="description"
                    value={profiles?.description}
                    onChange={(e) =>
                      setProfiles({ ...profiles, description: e.target.value })
                    }
                  />
                </label>
              </div>
              {!(profiles?.username === undefined) && (
                <div>
                  <button
                    className=" ease-in rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Modifier
                  </button>
                </div>
              )}
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

            {!(profiles?.username === undefined) && (
              <>
                <h2 className="p-4 text-primary">
                  Supprimer vos informations personnelles:
                </h2>
                <div className="flex justify-center p-4 text-primary">
                  <button
                    className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={deleteProfile}
                  >
                    Supprimer
                  </button>
                </div>
                <div className="flex align-right p-4 text-primary">
        <p>
          Si vous n avez pas encore cree votre profil, remplissez le formulaire
          et cliquez ici :
          <button
            className="rounded m-4 py-1 px-3 text-white bg-slate-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={insertProfile}
          >
            Ajouter
          </button>
        </p>
      </div>
              </>
            )}


          </div>
        </div>
    </>
  );
}
