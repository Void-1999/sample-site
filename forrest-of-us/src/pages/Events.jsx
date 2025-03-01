import React from "react";
import "./App.css";

const Events = () => {
  return (
    <div
      className="page-container"
      style={{
        background: "url('/backgrounds/events-bg.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>Upcoming Events</h1>
      <p>Stay tuned for our latest adventures.</p>
    </div>
  );
};

export default Events;
