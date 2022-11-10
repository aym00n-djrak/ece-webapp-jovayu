import { useContext } from "react";
import { useState } from "react";
import Context from "./Context";
import MyForm from "./form";
import FormData from "form-data";

const LoggedOut = () => {
  const { login } = useContext(Context);
  var formdata = new FormData();
  var myForm = document.getElementById("MyForm");
  formdata= new FormData(myForm);

  return (
    <div className="flex flex-col text-center justify-center m-4">
      <MyForm/>
      formdata.get("username");
      formdata.get("password");
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
