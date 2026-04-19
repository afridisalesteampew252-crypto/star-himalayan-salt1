import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Admin = ({ products }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Lamps');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!imageFile || !name || !price) return alert("Please fill all fields");

    setUploading(true);
    try {
      // 1. Upload Image to Firebase Storage
      const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      // 2. Add Product Data to Firestore
      await addDoc(collection(db, 'products'), {
        name,
        price: parseFloat(price),
        category,
        image: imageUrl,
        createdAt: new Date().toISOString()
      });

      alert("Product Added!");
      setName(''); setPrice('');
    } catch (error) {
      console.error(error);
      alert("Error uploading product");
    }
    setUploading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      await deleteDoc(doc(db, 'products', id));
    }
  };

  return (
    <div className="admin-panel" style={{ padding: '2rem' }}>
      <h2>Admin Inventory</h2>
      
      <form onSubmit={handleAddProduct} style={{ background: 'white', padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option>Lamps</option>
            <option>Edible</option>
            <option>Decor</option>
            <option>Health</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="file" onChange={e => setImageFile(e.target.files[0])} />
        </div>
        <button type="submit" disabled={uploading} style={{ background: '#c9a050', color: 'white', border: 'none', padding: '1rem 2rem', cursor: 'pointer' }}>
          {uploading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>

      <div className="inventory-list">
        <h3>Current Products</h3>
        {products.map(p => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ddd' }}>
            <span>{p.name} - ${p.price}</span>
            <button onClick={() => handleDelete(p.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;

