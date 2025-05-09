// pages/_app.js
import { useEffect, useState } from 'react';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';

// Dynamically import SplashScreen with SSR disabled
const SplashScreen = dynamic(() => import('../components/SplashScreen'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showMain, setShowMain] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
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
      {isMounted && !showMain && <SplashScreen onComplete={() => setShowMain(true)} />}
      {(showMain || !isMounted) && (
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