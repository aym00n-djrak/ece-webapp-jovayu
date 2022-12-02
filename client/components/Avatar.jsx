import md5 from 'md5';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

const BASE_URL= "https://www.gravatar.com/avatar";


export default function Avatar({user}){
 //  const hash = md5(user.email.trim().toLowerCase())
   // console.log(hash)
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