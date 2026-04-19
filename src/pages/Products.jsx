import React, { useState } from 'react';

const Products = ({ products }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Lamps', 'Edible', 'Decor', 'Health'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: '2rem 5%' }}>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Our Collection</h1>
      
      {/* Category Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: filter === cat ? '2px solid #c9a050' : 'none',
              color: filter === cat ? '#c9a050' : '#666',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontWeight: '500'
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{product.category}</p>
              <p className="product-price">${product.price}</p>
              <button style={{
                marginTop: '1rem',
                width: '100%',
                padding: '0.8rem',
                background: '#1a1a1a',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
                INQUIRE NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

