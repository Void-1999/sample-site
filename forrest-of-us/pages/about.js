import Head from 'next/head';

const About = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Imagine a World Without Waste</h1>
        <p className="mb-4">What if everything we threw away had a second life? At Forrest of Us, we’re building that world. We're an NGO dedicated to zero waste management, with a mission to reduce waste, rethink consumption, and create a sustainable future.</p>
        <p className="mb-4">We believe waste is a misplaced resource, and we can transform how we interact with materials.</p>
        <h2 className="text-3xl font-bold mb-4">Why Zero Waste? Because the Earth Deserves Better!</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>Reduce Pollution: Protect wildlife and ecosystems.</li>
          <li>Conserve Resources: Secure resources for future generations.</li>
          <li>Lower Carbon Emissions: Combat climate change.</li>
          <li>Create Sustainable Communities: Generate green jobs and boost local economies.</li>
        </ul>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p>To inspire and empower communities to adopt zero waste practices.</p>
          </div>
          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p>A world where waste is minimized, and resources are valued.</p>
          </div>
          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc pl-4">
              <li>Sustainability</li>
              <li>Community</li>
              <li>Innovation</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <p>Join us in making a difference. Visit our website for more information.</p>
          </div>
        </div>
      </div>
    </div>
 );
};

export default About;