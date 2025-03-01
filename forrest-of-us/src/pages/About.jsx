import React from 'react';

const About = () => {
  return (
    <main style={styles.main}>
      <h2>About Forrest of Us</h2>
      <p>
        At Forrest of Us, we’re turning waste into opportunity, one step at a time. We’re committed to reducing waste,
        rethinking consumption, and building a sustainable future. Our work involves creating zero waste communities,
        organizing recycling drives, promoting composting, and advocating for policies that protect our planet.
      </p>
      <p>
        Join us in our mission to make waste a thing of the past and the Earth a better place for all.
      </p>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default About;
