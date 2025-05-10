import Head from 'next/head';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activeSection="about" />

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Imagine a World Without Waste
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            At ForRest of Us, we’re building that world—dedicated to zero waste management and
            empowering communities to rethink consumption and sustainability.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>

          <p className="text-lg text-gray-700 mb-6">
            ForRest of Us is an NGO rooted in the belief that waste is a misplaced resource. Our
            mission is to transform how communities interact with materials and adopt a sustainable
            lifestyle through zero waste practices.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why Zero Waste?</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Reduce Pollution: Protect wildlife and ecosystems.</li>
            <li>Conserve Resources: Secure resources for future generations.</li>
            <li>Lower Carbon Emissions: Combat climate change.</li>
            <li>Create Sustainable Communities: Generate green jobs and boost local economies.</li>
          </ul>

          {/* Grid of Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To inspire and empower communities to adopt zero waste practices.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-gray-700">
                A world where waste is minimized and resources are valued.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Our Values</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Sustainability</li>
                <li>Community</li>
                <li>Innovation</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Get Involved</h4>
              <p className="text-gray-700">
                Join us in making a difference. Explore our initiatives, volunteer, or partner with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
