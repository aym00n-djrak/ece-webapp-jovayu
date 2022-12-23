import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { UserContextProvider } from '../components/UserContext'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())


  return (
    <>
    <ThemeProvider>
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
          <UserContextProvider>


      <Component {...pageProps} />

      </UserContextProvider>

    </SessionContextProvider>
    </ThemeProvider>
    </>
  )
}
export default MyApp
