const MyForm = function () {
  const onSubmit = function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    output.textContent =
      "Login: " + data.get("login") + " Password: " + data.get("password");
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>My form</h2>
      <div className="form-group row mb-3 mt-3 text-center justify-center m-4 ">
        <div>
          <label htmlFor="name">Login:</label>
          <br />
          <input type="text" name="login" className="border-2 border-gray-300 bg-blue-500 h-10 px-5 pr-16 rounded-lg  focus:outline-none " />
        </div>
        <di>
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" className="border-2 border-gray-300 bg-blue-500 h-10 px-5 pr-16 rounded-lg  focus:outline-none " />
        </di>
        <br />

        <div>
          <button className="border-2 border-gray-300 bg-blue-500 h-10 px-5 pr-16 rounded-lg  focus:outline-none ">Submit</button>
        </div>
        <output id="output"></output>
      </div>
    </form>
  );
};

export default MyForm;