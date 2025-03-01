import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import "../App.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.3); // Adjust speed of movement
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page-container">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: "url('/backgrounds/home-bg.webp')",
          transform: `translateY(${scrollY}px)`,
        }}
      />
      <Hero />
      <section className="overlay">
        <h2>Imagine a World Without Waste</h2>
        <p>
          What if everything we threw away had a second life? At Forrest of Us, we’re building that world.
          We're an NGO dedicated to zero waste management, with a mission to reduce waste, rethink consumption,
          and create a sustainable future. We believe waste is a misplaced resource, and we can transform how we interact with materials.
        </p>
      </section>
      <section className="overlay">
        <h2>Why Zero Waste? Because the Earth Deserves Better!</h2>
        <ul>
          <li><strong>Reduce Pollution:</strong> Protect wildlife and ecosystems.</li>
          <li><strong>Conserve Resources:</strong> Secure resources for future generations.</li>
          <li><strong>Lower Carbon Emissions:</strong> Combat climate change.</li>
          <li><strong>Create Sustainable Communities:</strong> Generate green jobs and boost local economies.</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
