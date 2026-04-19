import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: 'white', padding: '4rem 5%', marginTop: '4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', color: '#c9a050' }}>STAR HIMALAYAN</h3>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Purest Himalayan salt products for your home and health.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Email: info@starhimalayan.com</p>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Location: Pakistan</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.5, fontSize: '0.8rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
        © 2026 Star Himalayan Salt. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

