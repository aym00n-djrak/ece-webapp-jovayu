import { useRouter } from 'next/router'
import db from './data'


function Details() {
    const router= useRouter()
    const id = router.query.id
    console.log(id)

    const article = db.articles.find( article => article.id === id)    
    console.log(article)

    return (
    <div>
    <h1>Détails  article {article.id}</h1>
    <p>Article: {article.content}</p>
    <p>Date: {article.date}</p>
    <p>Auteur: {article.author}</p>
    </div>
    )
}

export default Details