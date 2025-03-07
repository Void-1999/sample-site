const Services = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-white">What We Do at Forrest of Us:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Zero Waste Communities</h2>
            <p className="text-lg text-white">Training, workshops, and hands-on projects for homes, schools, and businesses transitioning to sustainable waste management.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Recycling & Waste Segregation Drives</h2>
            <p className="text-lg text-white">Collection hubs, waste audits, and proper sorting for effective repurposing.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Composting for a Healthier Planet</h2>
            <p className="text-lg text-white">Community composting programs transforming food scraps into valuable compost.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Plastic-Free Challenges</h2>
            <p className="text-lg text-white">Encouraging individuals and businesses to ditch single-use plastics with sustainable alternatives.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Advocacy & Policy Change</h2>
            <p className="text-lg text-white">Collaborating with stakeholders to advocate for improved waste policies, including EPR and plastic bans.</p>
          </div>
        </div>
      </div>
    </div>
 );
};
export default Services;