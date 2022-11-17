import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Head>
              <title>Email Marketing - Timor Leste</title>
            </Head>
            <Component {...pageProps} />
          </>
        )
}

export default MyApp
