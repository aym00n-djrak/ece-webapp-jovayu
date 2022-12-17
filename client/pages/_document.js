import { Html, Head, Main, NextScript } from 'next/document'
import ThemeScriptTag from '../components/theme-script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/cybercon.png" />
      </Head>
      <body>
        <ThemeScriptTag />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}