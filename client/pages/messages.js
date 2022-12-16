import Comments from "../components/Comments";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function Messages() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <div className="about">
      <Comments/>
    </div>
  );
}

export default Messages;
