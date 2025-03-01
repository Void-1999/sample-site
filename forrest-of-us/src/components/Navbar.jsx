import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img src="/images/logo.png" alt="Forrest of Us Logo" style={styles.logoImg} />
        <span>Forrest of Us</span>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/events" style={styles.link}>Events</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoImg: {
    width: '40px',
    height: '40px',
    marginRight: '10px'
  },
  links: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Navbar;
