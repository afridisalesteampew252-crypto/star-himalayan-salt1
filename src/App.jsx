import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

export default function App() {
  // This 'page' variable controls what the user sees
  const [page, setPage] = useState('Home'); 
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
    onSnapshot(collection(db, 'products'), (snap) => {
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* We pass setPage to the Nav so the buttons work */}
      <Nav setPage={setPage} />
      
      <main className="flex-grow pt-20">
        {page === 'Home' && <Home setPage={setPage} products={products} />}
        {page === 'Catalog' && <Catalog products={products} />}
        {page === 'Admin' && (user ? <Admin products={products} /> : <AdminLogin />)}
      </main>

      <Footer />
    </div>
  );
}
