import { useState, useContext } from "react";
import Context from "../components/UserContext";

const LoggedOut = () => {
  const { login } = useContext(Context);
  const [data, setData] = useState({});
  const onSubmit = function (e) {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col text-center justify-center m-4">
      <form id="login">
        <h1 className="text-3xl font-bold p-2">Connexion: </h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-gray-300 bg-blue-500 h-10 px-5 pr-16 rounded-lg  focus:outline-none "
            id="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-300 bg-blue-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={() => login(data)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const LoggedIn = () => {
  const { user, logout } = useContext(Context);
  return (
    <div className="flex flex-col text-center justify-center m-4">
      <h1 className="text-3xl font-bold">Welcome {user.username}</h1>
      <br />
      <p>Ton mot de passe est {user.password}</p>
      <div>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default () => {
  const { user } = useContext(Context);
  return <div>{user ? <LoggedIn /> : <LoggedOut />}</div>;
};
