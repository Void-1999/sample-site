import Image from 'next/image';

const Home = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Turning Waste into Opportunity</h1>
        <p className="text-2xl text-white mb-12">One Step at a Time</p>
        <a href="#about" className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600">Learn More</a>
      </div>
    </div>
 );
};
export default Home;