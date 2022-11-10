import { useState } from "react";


const MyForm = function () {
  const [data, setData] = useState({});
  const onSubmit = function (e) {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form id  ="myForm" name="myForm">    
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default MyForm;
