import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-black">Imagine a World Without Waste</h1>
        <p className="mb-6 text-lg text-black">What if everything we threw away had a second life? At ForRest of Us, we’re building that world. We're an NGO dedicated to zero waste management, with a mission to reduce waste, rethink consumption, and create a sustainable future.</p>
        <p className="mb-6 text-lg text-black">We believe waste is a misplaced resource, and we can transform how we interact with materials.</p>
        <h2 className="text-3xl font-bold mb-6 text-black">Why Zero Waste? Because the Earth Deserves Better!</h2>
        <ul className="list-disc pl-8 mb-6 text-lg text-black">
          <li>Reduce Pollution: Protect wildlife and ecosystems.</li>
          <li>Conserve Resources: Secure resources for future generations.</li>
          <li>Lower Carbon Emissions: Combat climate change.</li>
          <li>Create Sustainable Communities: Generate green jobs and boost local economies.</li>
        </ul>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
            <p className="text-lg text-black">To inspire and empower communities to adopt zero waste practices.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
            <p className="text-lg text-black">A world where waste is minimized, and resources are valued.</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Values</h3>
            <ul className="list-disc pl-4 text-lg text-black">
              <li>Sustainability</li>
              <li>Community</li>
              <li>Innovation</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">Get Involved</h3>
            <p className="text-lg text-black">Join us in making a difference. Visit our website for more information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;