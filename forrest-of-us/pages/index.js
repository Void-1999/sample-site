import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Home = () => {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const learnMoreMenu = document.querySelector('.fixed-learn-more');
      if (learnMoreMenu && !learnMoreMenu.contains(event.target)) {
        setIsLearnMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleLearnMore = () => {
    setIsLearnMoreOpen(!isLearnMoreOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <Header />
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Turning Waste into Opportunity</h1>
        <p className="text-2xl text-white mb-12">One Step at a Time</p>
        <button onClick={toggleLearnMore} className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600">
          Learn More
        </button>
      </div>

      {isLearnMoreOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full w-64 bg-white/75 shadow-md rounded-l-lg p-4 fixed-learn-more"
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
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Home;