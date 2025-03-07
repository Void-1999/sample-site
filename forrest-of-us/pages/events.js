const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Notable Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">[Date]: Zero Waste Festival</h2>
          <p>Community event showcasing sustainable practices and local artisans. (Details coming soon!)</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">[Date]: City-Wide Cleanup Initiative</h2>
          <p>Partnering with local businesses and volunteers for a cleaner city. (Registration opens [date])</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">[Date]: Composting Workshop Series</h2>
          <p>Hands-on training for effective home composting. (Limited spots available!)</p>
        </div>
      </div>
    </div>
  );
};

export default Events;