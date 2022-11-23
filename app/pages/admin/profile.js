import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function Profile({ user }){
  return <div>Hello {user.email}</div>;
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

