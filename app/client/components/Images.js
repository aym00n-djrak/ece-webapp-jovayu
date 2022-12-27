import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Image from "next/image";

const ShowImages = (id) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { user } = useSupabaseClient();
  const supabase = useSupabaseClient();
  const image = null;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.from("articles").select("*").eq("id", id.id);
        if (error) throw error;
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [user, supabase, id.id]);

  
  return (
    <div className="container">
        <div className="row m-3">
          {images.map((image) => (
            <div className="col-md-4" key={image.id}>
              <div className="card mb-4 shadow-sm">
                <img
                    src={"https://icqmzeicgyxwjelgqbfp.supabase.co/storage/v1/object/public/images/"+image.image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ShowImages;
