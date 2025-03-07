import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Turning Waste into Opportunity</h1>
        <p className="text-xl text-white mb-8">One Step at a Time</p>
        <a href="#about" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Learn More</a>
      </div>
    </div>
  );
};

export default Home;