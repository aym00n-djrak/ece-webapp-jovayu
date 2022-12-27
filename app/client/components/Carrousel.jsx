import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carrousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { user } = useSupabaseClient();
  const supabase = useSupabaseClient();
  const image = null;
  const i = 0;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.from("articles").select("*");
        if (error) throw error;
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [user, supabase]);


  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };



  return (
    <div className="relative">
    <AiOutlineLeft
      onClick={handlePrevSlide}
      className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
    />
    <div className="w-full h-[50vh] flex overflow-hidden relative m-auto ">
      <Swipe
        onSwipeLeft={handleNextSlide}
        onSwipeRight={handlePrevSlide}
        className="relative z-10 w-full h-full"
      >
        {images.map((image, index) => {
          if (index === currentSlide) {
            return (
              <a href={"/articles/article/" + image.id} key={image.id}>
              <img
                key={image.id}
                src={"https://icqmzeicgyxwjelgqbfp.supabase.co/storage/v1/object/public/images/"+image.image}
                layout="fill"
                objectFit="contain"
                className="animate-fadeIn object-cover w-full h-full absolute z-10 opacity-100 "
                height="50%"
                width="50%"
              />
              </a>
            );
          }
        })}
      </Swipe>
    </div>
    <AiOutlineRight
      onClick={handleNextSlide}
      className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
    />

    <div className="relative flex justify-center p-2">
      {images.map((_, index) => {
        return (
          <div
            className={
              index === currentSlide
                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        );
      })}
    </div>
  </div>
  );
};

export default Carrousel;
