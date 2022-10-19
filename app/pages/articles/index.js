import Link from 'next/link'
import db from './data'

const Articles = () => {
    const article = db.articles.find( article => article.id)    
    

  return (
    <div>
    <Link href={`/articles/${article.id}`}>
    <div>
      <a><h1>Article : 1</h1>
      </a>
      </div>
      </Link>

      <Link href={`/articles/2`}>
    <div>
      <a><h1>Article : 2</h1>
      </a>
      </div>
      </Link>

      <Link href={`/articles/3`}>
    <div>
      <a><h1>Article : 3</h1>
      </a>
      </div>
      </Link>

      <Link href={`/articles/4`}>
    <div>
      <a><h1>Article : 4</h1>
      </a>
      </div>
      </Link>

      <Link href={`/articles/5`}>
    <div>
      <a><h1>Article : 5</h1>
      </a>
      </div>
      </Link>


      </div>  );
};

export default Articles;
