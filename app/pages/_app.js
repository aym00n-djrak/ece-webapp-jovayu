import MyLayout from '../components/MyLayout'
import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <MyLayout class="bg-zinc-900">
      <Head>
        <title>Blog</title>
*        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </MyLayout>
  )
}

export default MyApp
