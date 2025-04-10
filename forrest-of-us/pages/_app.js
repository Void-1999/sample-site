// pages/_app.js
import { useEffect } from 'react';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';

function MyApp({ Component, pageProps }) {
 const router = useRouter();

 useEffect(() => {
  const handleRouteChange = (url) => {
   console.log(`App route changed to ${url}`);
  };
  router.events.on('routeChangeStart', handleRouteChange);
  router.events.on('routeChangeComplete', handleRouteChange);

  return () => {
   router.events.off('routeChangeStart', handleRouteChange);
   router.events.off('routeChangeComplete', handleRouteChange);
  };
 }, [router.events]);

 return (
  <MotionConfig reducedMotion="user">
      <AnimatePresence exitBeforeEnter>
        <main className="mt-16"> {/* Add a margin to push content below the header */}
          <Component {...pageProps} key={router.route} />
          <Header />
        </main>
      </AnimatePresence>
    </MotionConfig>
 );
}



export default MyApp;