import md5 from 'md5';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useContext } from "react";
import UserContext from "../components/UserContext";

const BASE_URL= "https://www.gravatar.com/avatar";


export default function Avatar(){
   const user = useContext(UserContext);
   if(user){
   //const hash = md5(user.email.trim().toLowerCase())
   }
    return //<img className="rounded-full" src={BASE_URL+"/"+hash} />
}

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const{
      data: {session},
  } = await supabase.auth.getSession();
  

  if(!session)
      return {
          redirect: {
              destination: '/',
              permanent: false,
          },
      };
  

  return {
      props: {
          initalSession: session,
          user: session.user,
      },
  };
}