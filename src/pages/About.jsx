import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '5rem 10%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <img 
          src="https://images.unsplash.com/photo-1615485290382-441e4d029cb5?auto=format&fit=crop&q=80" 
          alt="Salt Mine" 
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: '#c9a050' }}>Our Heritage</h2>
          <p style={{ marginBottom: '1rem', color: '#555' }}>
            Star Himalayan Salt was founded on the principle of purity. We source our salt directly from the Khewra Salt Mine, ensuring every crystal is millions of years old and untouched by modern pollution.
          </p>
          <p style={{ color: '#555' }}>
            From hand-carved lamps that ionize your air to therapeutic bath salts and gourmet culinary tiles, our products are designed to enhance your well-being and bring a touch of natural luxury to your lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

