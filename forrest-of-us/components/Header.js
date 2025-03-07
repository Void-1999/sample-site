import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Forrest of Us</h1>
        <button onClick={toggleMenu} className="hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-white/75 shadow-md rounded-l-lg p-4 transition-transform transform translate-x-0 duration-300 ease-in-out">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-100 text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-100 text-black">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;