import Link from 'next/link'

function Navbar(){
    return(
        <nav className='flex items-center flex-wrap bg-blue-400 p-3 ' >
                <Link href="/" className='inline-flex items-center p-2 mr-4 space-y-4'>
                Home
            </Link>

            <Link  href="/articles" className='inline-flex items-center p-2 mr-4 space-y-4'>
               Articles
            </Link>

            <Link  href="/contact" className='inline-flex items-center p-2 mr-4 space-y-4'>
                Contact
            </Link>

            <Link  href="/about" className='inline-flex items-center p-2 mr-4 space-y-4'>
               About   
            </Link>

            <input class="bg-gray-200 focus:bg-white ..."></input>
        </nav>
    )
}

export default Navbar;