import Link from 'next/link'
import db from './data'

const Articles = () => {
    const article = db.articles.find( article => article.id)    
    
  return (
    <div>
    <Link href={`/articles/${article.id}`}>
    <div>
      <a><h1>Article : {article.id}</h1>
      </a>
      </div>
      </Link>
      
      </div>  );
};

export default Articles;
