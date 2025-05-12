import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menu = document.querySelector('.fixed');
      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="ForRest Of Us Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">ForRest of Us</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/maps" className="hover:underline">
            Map
          </Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white/75 shadow-md rounded-l-lg p-4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
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
                <li>
                  <Link href="/maps" className="block px-4 py-2 hover:bg-gray-100 text-black">
                    Map
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;