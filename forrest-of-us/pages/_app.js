import { MotionConfig, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </MotionConfig>
  );
}

export default MyApp;