import Link from 'next/link'
import Image from 'next/image'
import picture from '../public/cyber.jpg'

export default function Home() {
  return (
    <div>
     <main >
      <h1>Bienvenue !</h1>

    <Image src={picture}      
      alt="Picture of the author"
      />

      <div>
        
        <nav >
         <Link href='/enter'>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Enter</button>
          </Link>
         </nav>
      </div>
    </main>
        </div>
  )
}
