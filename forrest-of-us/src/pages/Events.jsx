import React, { useEffect, useState } from 'react';
import "../App.css";

const Events = () => {
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
          backgroundImage: "url('/backgrounds/events-bg.webp')",
          transform: `translateY(${scrollY}px)`,
        }}
      />
      <section className="overlay">
        <h2>Upcoming Events</h2>
        <ul>
          <li><strong>Zero Waste Festival</strong> - Community event showcasing sustainable practices and local artisans.</li>
          <li><strong>City-Wide Cleanup Initiative</strong> - Partnering with local businesses and volunteers for a cleaner city.</li>
          <li><strong>Composting Workshop Series</strong> - Hands-on training for effective home composting.</li>
        </ul>
      </section>
    </main>
  );
};

export default Events;
