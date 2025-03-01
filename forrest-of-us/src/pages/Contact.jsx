import React, { useEffect, useState } from 'react';
import "../App.css";

const Contact = () => {
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
          backgroundImage: "url('/backgrounds/contact-bg.webp')",
          transform: `translateY(${scrollY}px)`,
        }}
      />
      <section className="overlay">
        <h2>Contact Us</h2>
        <p><strong>Location:</strong> [Your City/Address]</p>
        <p><strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p><strong>Phone:</strong> [your contact number]</p>
        <p><strong>Follow Us:</strong> <a href="https://www.instagram.com/">Instagram</a> | <a href="https://www.facebook.com/">Facebook</a></p>
      </section>
    </main>
  );
};

export default Contact;
