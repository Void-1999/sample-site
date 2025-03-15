import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ForRest of Us</h1>
        
        <nav className="hidden md:flex space-x-4">
          {['Home', 'About', 'Services', 'Events', 'Contact', 'Maps'].map(page => (
            <Link key={page} href={`/${page.toLowerCase()}`} className="hover:underline">
              {page}
            </Link>
          ))}
        </nav>
        
        <button onClick={toggleMenu} className="md:block hover:underline">
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
                {['Home', 'About', 'Services', 'Events', 'Contact', 'Maps'].map(page => (
                  <li key={page}>
                    <Link href={`/${page.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100 text-black">
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
