const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">What We Do at Forrest of Us:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Zero Waste Communities</h2>
          <p>Training, workshops, and hands-on projects for homes, schools, and businesses transitioning to sustainable waste management.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Recycling & Waste Segregation Drives</h2>
          <p>Collection hubs, waste audits, and proper sorting for effective repurposing.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Composting for a Healthier Planet</h2>
          <p>Community composting programs transforming food scraps into valuable compost.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Plastic-Free Challenges</h2>
          <p>Encouraging individuals and businesses to ditch single-use plastics with sustainable alternatives.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Advocacy & Policy Change</h2>
          <p>Collaborating with stakeholders to advocate for improved waste policies, including EPR and plastic bans.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;