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
      </div>
    </div>
  );
};

export default About;