import React from 'react';

const Home = ({ setPage, products }) => {
  const featured = products.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{
        height: '80vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 5%'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Pure Himalayan Essence</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
          Bringing the ancient healing power of pink salt from the heart of the mountains to your home.
        </p>
        <button 
          onClick={() => setPage('Products')}
          style={{
            padding: '1rem 2.5rem',
            background: '#c9a050',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            letterSpacing: '2px'
          }}
        >
          EXPLORE COLLECTION
        </button>
      </section>

      {/* Featured Section */}
      <section style={{ padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Treasures</h2>
        <div className="products-grid">
          {featured.map(product => (
            <div key={product.id} className="product-card" onClick={() => setPage('Products')}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

