import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <main className={styles.main}>
      <h1>Bienvenue !</h1>


      <div className={styles.bouton}>
        
        <nav className>
         <Link href='/enter'><a>Enter</a></Link>
         </nav>
      </div>
    </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
