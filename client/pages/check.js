import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

function check({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
		const ChangeStart = () => {
			setLoading(true)
		}

		const ChangeComplete = () => {
			setLoading(false)
		}

		router.events.on('routeChangeStart', ChangeStart)
		router.events.on('routeChangeComplete', ChangeComplete)
		router.events.on('routeChangeError', ChangeComplete)

		return function cleanup() {
			router.events.off('routeChangeStart', ChangeStart)
			router.events.off('routeChangeComplete', ChangeComplete)
			router.events.off('routeChangeError', ChangeComplete)
		}
	}, [router])

  return (
    <>
      <Loading loading={loading} />
      <main className={loading ? "hidden" : "block"}>
        <Component {...{ ...pageProps, loading }} />
      </main>
    </>
  )
}
export default check;