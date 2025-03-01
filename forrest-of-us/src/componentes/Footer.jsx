import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Forrest of Us. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff'
  }
};

export default Footer;
