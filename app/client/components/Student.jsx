import Image from "next/image";
import Book from "../public/book.jpg";
import Asia from "../public/asia.jpg";
import { motion } from "framer-motion";
const Student = ({ user }) => {
  return (
    <>
      <motion.div initial="hidden" animate="visible">
        <h2 id="student" className="text-center text-3xl font-bold m-10">
          Culture :{" "}
        </h2>
      </motion.div>
      <div className="flex justify-center m-4">
        <div className="flex justify-center m-2">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-4">
            <Image src={Book} alt="book" />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Citation:{" "}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Je ne suis rien je le sais mais je compose mon rien avec un
                petit morceau de tout.
              </p>
              <p className="text-gray-600 text-xs">Victor Hugo</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-2">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg p-4">
            <Image src={Asia} alt="book" />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Bali: </h5>
              <p className="text-gray-700 text-base mb-4">
                Le monde est un grand bal ou chacun est masque.
              </p>
              <p className="text-gray-600 text-xs">De Vauvenarges</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
