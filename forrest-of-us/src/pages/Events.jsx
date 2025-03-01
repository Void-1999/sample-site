import React from 'react';

const Events = () => {
  return (
    <main style={styles.main}>
      <h2>Upcoming Events</h2>
      <ul>
        <li>
          <strong>Zero Waste Festival</strong> - Community event showcasing sustainable practices and local artisans.
          (Details coming soon!)
        </li>
        <li>
          <strong>City-Wide Cleanup Initiative</strong> - Partnering with local businesses and volunteers for a cleaner city.
          (Registration opens soon)
        </li>
        <li>
          <strong>Composting Workshop Series</strong> - Hands-on training for effective home composting.
          (Limited spots available!)
        </li>
      </ul>
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

export default Events;
