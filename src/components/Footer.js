import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#1a1a1a',
    color: '#f4f7f5',
    fontSize: '0.9rem'
  };
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Shreya Somdale. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;