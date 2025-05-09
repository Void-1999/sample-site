// pages/_app.js
import { useEffect, useState } from 'react';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SplashScreen from '../components/SplashScreen'; 
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showMain, setShowMain] = useState(false);

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
    <>
      {!showMain && <SplashScreen onComplete={() => setShowMain(true)} />}
      {showMain && (
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait">
            <main className="mt-16">
              <Component {...pageProps} key={router.route} />
              <Header />
            </main>
          </AnimatePresence>
        </MotionConfig>
      )}
    </>
  );
}



export default MyApp;
