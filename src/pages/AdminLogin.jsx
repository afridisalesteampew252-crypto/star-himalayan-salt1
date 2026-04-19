import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '2rem', textAlign: 'center' }}>
      <h2>Admin Portal</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ padding: '0.8rem' }} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{ padding: '0.8rem' }} />
        <button type="submit" style={{ background: '#c9a050', color: 'white', border: 'none', padding: '1rem', cursor: 'pointer' }}>
          SECURE LOGIN
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

