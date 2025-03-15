// pages/map.js
import Head from 'next/head';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering
});

const MapPage = () => {
  return (
    <>
      <Head>
        <title>City Map</title>
      </Head>
      <MapComponent />
    </>
  );
};

export default MapPage;