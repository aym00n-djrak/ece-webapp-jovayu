import { useContext } from "react";
import  UserContext  from './UserContext';
import { AiFillTrophy } from "react-icons/ai";
import { useRouter } from "next/router";

export default function LoggedIn() {
    const { user, logout } = useContext(UserContext)
    const onClickLogout = async (e) => {
        logout()

        
    }
    return (
        <button className=" bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onClickLogout}>
        Logout{user.username}
        <AiFillTrophy className="inline-block ml-2"/>
        </button>
    )
}