import { useContext } from "react";
import UserContext from "./UserContext";
import md5 from "md5";
import Image from "next/image";

export default function Avatar() {
  const { user } = useContext(UserContext);

  if (!user) return null;
  const emailHash = md5(user?.email.trim().toLowerCase());


  const myLoader = ({ src, width, quality }) => {
    return (`https://www.gravatar.com/avatar/${emailHash}?s=200`)
  }

  return (
    <p className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 transform hover:scale-110 transition duration-500 ease-in-out">

      <Image 
        loader={myLoader}
        src={`https://www.gravatar.com/avatar/${emailHash}?s=200`}
        alt="Avatar"
        width={40}
        height={40}
        className="rounded-full"
      />

    </p>
  );
}
