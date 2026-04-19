import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '5rem 5%', textAlign: 'center' }}>
      <h1 style={{ color: '#c9a050', marginBottom: '2rem' }}>Get In Touch</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#f8f1e7', padding: '3rem', borderRadius: '8px' }}>
        <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> info@starhimalayan.com</p>
        <p style={{ marginBottom: '1rem' }}><strong>WhatsApp:</strong> +92 XXX XXXXXXX</p>
        <p style={{ marginBottom: '2rem' }}><strong>Export Office:</strong> Karachi, Pakistan</p>
        <button style={{ 
          background: '#1a1a1a', color: 'white', border: 'none', 
          padding: '1rem 2rem', cursor: 'pointer', width: '100%' 
        }}>
          SEND US A MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact;

