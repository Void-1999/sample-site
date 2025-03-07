const Events = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-black">Notable Achievements of ForRest Of Us!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">[Date]: Zero Waste Festival</h2>
            <p className="text-lg text-black">Community event showcasing sustainable practices and local artisan....</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">[Date]: City-Wide Cleanup Initiative</h2>
            <p className="text-lg text-black">Partnering with local businesses and volunteers for a cleaner city....</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Composting and Wood Workshop Activities</h2>
            <p className="text-lg text-black">Hands-on training for effective home composting and skilled wood work...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;