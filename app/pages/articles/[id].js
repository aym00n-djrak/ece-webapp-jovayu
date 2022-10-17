import { useRouter } from 'next/router'

function Details() {
    const router= useRouter()
    const {pid} = router.query
    
    return <h1>Détails  article {pid}</h1>
}

export default Details