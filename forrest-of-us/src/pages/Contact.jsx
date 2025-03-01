import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div
      className="page-container"
      style={{
        background: "url('/backgrounds/contact-bg.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>Contact Us</h1>
      <p>Reach out for more information.</p>
    </div>
  );
};

export default Contact;
