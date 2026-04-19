import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Nav from './components/Nav';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
// ... other imports (Home, Products, etc.)

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('Home');

  useEffect(() => {
    // This listens for your login session
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Nav setPage={setPage} page={page} />
      
      {page === 'Admin' ? (
        user ? <Admin /> : <AdminLogin onLogin={() => setPage('Admin')} />
      ) : (
        <>
          {page === 'Home' && <Home setPage={setPage} />}
          {page === 'Products' && <Products />}
          {/* Add other pages here */}
        </>
      )}
    </div>
  );
}

