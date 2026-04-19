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
  const [page, setPage] = useState('Home'); 
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
    
    // Using an explicit reference to ensure collection name matches exactly
    const unsubscribe = onSnapshot(collection(db, 'products'), (snap) => {
      const prods = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      console.log("Fetched Products:", prods); // Check your browser console for this!
      setProducts(prods);
      setLoading(false);
    }, (error) => {
      console.error("Firebase Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf2f2] w-full overflow-x-hidden">
      <Nav setPage={setPage} currentPage={page} />
      
      {/* 1. pt-20 to pt-24 gives space for fixed navbar.
          2. max-w-screen-xl ensures it doesn't get too wide on PC.
          3. w-full and px-4 ensure it fits perfectly on mobile.
      */}
      <main className="flex-grow pt-24 w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="accent-text animate-pulse">Loading Star Himalayan Products...</p>
          </div>
        ) : (
          <>
            {page === 'Home' && <Home setPage={setPage} products={products} />}
            {page === 'Catalog' && <Catalog products={products} />}
            {page === 'About' && <About />}
            {page === 'Contact' && <Contact />}
            
            {page === 'Admin' && (
              user ? <Admin products={products} /> : <AdminLogin />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
