const Events = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-white">Notable Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">[Date]: Zero Waste Festival</h2>
            <p className="text-lg text-white">Community event showcasing sustainable practices and local artisans. (Details coming soon!)</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">[Date]: City-Wide Cleanup Initiative</h2>
            <p className="text-lg text-white">Partnering with local businesses and volunteers for a cleaner city. (Registration opens [date])</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">[Date]: Composting Workshop Series</h2>
            <p className="text-lg text-white">Hands-on training for effective home composting. (Limited spots available!)</p>
          </div>
        </div>
      </div>
    </div>
 );
};
export default Events;