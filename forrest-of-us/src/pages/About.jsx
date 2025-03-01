import React, { useEffect, useState } from 'react';
import "../App.css";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page-container">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: "url('/backgrounds/about-bg.webp')",
          transform: `translateY(${scrollY}px)`,
        }}
      />
      <section className="overlay">
        <h2>About Forrest of Us</h2>
        <p>
          At Forrest of Us, we’re turning waste into opportunity, one step at a time. We’re committed to reducing waste,
          rethinking consumption, and building a sustainable future. Our work involves creating zero waste communities,
          organizing recycling drives, promoting composting, and advocating for policies that protect our planet.
        </p>
        <p>
          Join us in our mission to make waste a thing of the past and the Earth a better place for all.
        </p>
      </section>
    </main>
  );
};

export default About;
