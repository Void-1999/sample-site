import React from 'react';

const Contact = () => {
  return (
    <main style={styles.main}>
      <h2>Contact Us</h2>
      <p><strong>Location:</strong> [Your City/Address]</p>
      <p>
        <strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a>
      </p>
      <p><strong>Phone:</strong> [your contact number]</p>
      <p>
        <strong>Follow Us:</strong> 
        <a href="https://www.instagram.com/" style={styles.link}>Instagram</a> | 
        <a href="https://www.facebook.com/" style={styles.link}>Facebook</a>
      </p>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  link: {
    marginLeft: '0.5rem',
    textDecoration: 'none',
    color: '#333'
  }
};

export default Contact;
