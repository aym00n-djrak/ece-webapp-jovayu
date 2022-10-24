import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">Home   </Link>

        <Link href="/articles">Articles   </Link>

        <Link href="/contact">Contact   </Link>

        <Link href="/about"><a class="text-blue-600/[.06]">About   </a></Link>
      </nav>
    </header>
  );
}

export default Navbar;
