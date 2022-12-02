import { useContext } from "react";
import  UserContext  from './UserContext';
import { AiFillTrophy } from "react-icons/ai";
import { useRouter } from "next/router";

export default function LoggedOut() {
    const { login } = useContext(UserContext)
    const router = useRouter();

    const onClickLogin = async (e) => {
        const response = await fetch('/api/profile')
        const user = await response.json()
        login(user)

        if(user){
        router.push("/login");
        }
    }
    return (
        <button className=" bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onClickLogin}>
        Login<AiFillTrophy className="inline-block ml-2"/>
        </button>
    )
}