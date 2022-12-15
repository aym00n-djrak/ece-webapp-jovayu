import { useContext } from "react";
import UserContext from "./UserContext";
import md5 from "md5";

export default function Avatar() {
  const { user } = useContext(UserContext);

  if (!user) return null;
  const emailHash = md5(user?.email.trim().toLowerCase());

  return (
    <p className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
      <img className="rounded-full h-10 w-10"
        src={`https://www.gravatar.com/avatar/${emailHash}?s=200`}
        alt="Avatar"
        width={40}
        height={40}
      />
    </p>
  );
}
