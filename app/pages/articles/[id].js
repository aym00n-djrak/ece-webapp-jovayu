import { useRouter } from 'next/router'

function Details() {
    const router= useRouter()
    const id = router.query.id

    console.log(id)
    
    return (<h1>Détails  article {id}</h1>)
}

export default Details