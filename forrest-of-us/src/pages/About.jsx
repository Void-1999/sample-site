import React from "react";
import "./App.css";

const About = () => {
  return (
    <div
      className="page-container"
      style={{
        background: "url('/backgrounds/about-bg.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>About Us</h1>
      <p>Learn more about our journey and mission.</p>
    </div>
  );
};

export default About;
