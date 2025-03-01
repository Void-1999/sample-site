import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div
      className="page-container"
      style={{
        background: "url('/backgrounds/home-bg.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>Welcome to Forrest of Us</h1>
      <p>Your gateway to adventure and nature.</p>
    </div>
  );
};

export default Home;
