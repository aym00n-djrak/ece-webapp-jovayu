import Link from 'next/link'
import db from '../../lib/data'

const Articles = () => {
    const article = db.articles.find( article => article.id)    
    
    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {db.articles.map(article => (
                    <li key={article.id}>
                        <Link href={`/articles/${article.id}`}>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      )
};

export async function getStaticProps() {
    return {
        props: {
            articles: db.articles
        }
    }
}

export default Articles;
