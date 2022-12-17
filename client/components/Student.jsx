const Student = ({user}) => {

    return (
        <>
        <h2 className="text-center text-3xl font-bold m-4">Student : </h2>
        <div className="flex justify-center m-4">        

        <div className="flex justify-center m-2">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-4">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Skills:{" "}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}

export default Student
