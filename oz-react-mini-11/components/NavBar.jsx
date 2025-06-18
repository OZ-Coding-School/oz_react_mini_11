import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/details" style={styles.link}>Detail</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px 20px',
    backgroundColor: '#222',
    display: 'flex',
    gap: '16px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default NavBar;