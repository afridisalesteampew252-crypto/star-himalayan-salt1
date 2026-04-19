import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

export default function App() {
  const [page, setPage] = useState('Home'); // This manages which page is shown
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
    onSnapshot(collection(db, 'products'), (snap) => {
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf2f2]">
      {/* We pass setPage to Nav so the buttons can change the view */}
      <Nav setPage={setPage} currentPage={page} />
      
      <main className="flex-grow pt-24">
        {page === 'Home' && <Home setPage={setPage} products={products} />}
        {page === 'Catalog' && <Catalog products={products} />}
        {page === 'About' && <About />}
        {page === 'Contact' && <Contact />}
        
        {/* Admin logic */}
        {page === 'Admin' && (
          user ? <Admin products={products} /> : <AdminLogin />
        )}
      </main>

      <Footer />
    </div>
  );
}
