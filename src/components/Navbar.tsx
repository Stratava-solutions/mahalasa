
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/temple">Temple</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
