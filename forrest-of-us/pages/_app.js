import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} className="transition animate-fade-in" />
      <Footer />
    </>
  );
}

export default MyApp;