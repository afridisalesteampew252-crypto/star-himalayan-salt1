import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';

// Ensure your folder names on GitHub are lowercase: "components" and "pages"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

function App() {
  const [page, setPage] = useState('Home');
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Listen for Authentication State (Login/Logout)
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  // 2. Listen for Real-time Database Updates (Products)
  useEffect(() => {
    const unsubscribeProducts = onSnapshot(collection(db, 'products'), (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(items);
    });
    return () => unsubscribeProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <p>Loading Star Himalayan Salt...</p>
      </div>
    );
  }

  // Helper to determine if we should show the Nav/Footer
  const isAdminPage = page === 'Admin';

  return (
    <div className="App">
      {/* Show Nav only if not in the Admin dashboard */}
      {!isAdminPage && <Nav page={page} setPage={setPage} />}

      <main>
        {page === 'Home' && <Home setPage={setPage} products={products} />}
        {page === 'Products' && <Products products={products} />}
        {page === 'About' && <About />}
        {page === 'Contact' && <Contact />}
        
        {/* Admin Logic: If not logged in, show Login. If logged in, show Dashboard */}
        {page === 'Admin' && (
          user ? <Admin products={products} /> : <AdminLogin onLogin={() => setPage('Admin')} />
        )}
      </main>

      {!isAdminPage && <Footer />}
    </div>
  );
}

// CRITICAL: This line fixes the "default is not exported" error
export default App;
