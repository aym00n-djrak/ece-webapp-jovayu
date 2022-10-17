import Link from 'next/link'

const Articles = ({ articles }) => {
  return (
    <div>
      <h1>Tout les articles:</h1>
       <li> <Link href="/articles/1">Article 1</Link></li>
       <li> <Link href="/articles/2">Article 2</Link></li>
       <li> <Link href="/articles/3">Article 3</Link></li>
       <li> <Link href="/articles/4">Article 4</Link></li>
       <li> <Link href="/articles/5">Article 5</Link></li>

    </div>
  );
};

export default Articles;
