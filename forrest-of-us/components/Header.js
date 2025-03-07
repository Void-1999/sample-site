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
          Categories
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg p-4 w-64">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-100">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
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