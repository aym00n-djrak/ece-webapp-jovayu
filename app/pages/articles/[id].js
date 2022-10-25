import { useRouter } from 'next/router'
import db from '../../lib/data'


function Details() {
    const router = useRouter()
    const { id } = router.query
    const article = db.articles.find( article => article.id === id)    

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p>{article.date}</p>
            <p>{article.author}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = db.articles.map(article => ({
        params: { id: article.id }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    return {
        props: {
            articles: db.articles
        }
    }
}


export default Details