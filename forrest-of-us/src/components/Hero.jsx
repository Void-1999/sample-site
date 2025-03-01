import React from 'react';

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url("/images/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '100px 20px',
    textAlign: 'center'
  };

  return (
    <section style={heroStyle}>
      <h1>Forrest of Us</h1>
      <p>Turning Waste into Opportunity, One Step at a Time</p>
    </section>
  );
};

export default Hero;
