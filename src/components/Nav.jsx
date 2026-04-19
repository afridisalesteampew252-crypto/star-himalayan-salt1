import React from 'react';

const Nav = ({ page, setPage }) => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage('Home')}>
        STAR HIMALAYAN
      </div>
      <div className="nav-links">
        <span onClick={() => setPage('Home')} style={{color: page === 'Home' ? '#c9a050' : 'inherit'}}>HOME</span>
        <span onClick={() => setPage('Products')} style={{color: page === 'Products' ? '#c9a050' : 'inherit'}}>SHOP</span>
        <span onClick={() => setPage('About')} style={{color: page === 'About' ? '#c9a050' : 'inherit'}}>OUR STORY</span>
        <span onClick={() => setPage('Contact')} style={{color: page === 'Contact' ? '#c9a050' : 'inherit'}}>CONTACT</span>
        <span onClick={() => setPage('Admin')} style={{fontWeight: 'bold', borderLeft: '1px solid #ddd', paddingLeft: '1rem'}}>ADMIN</span>
      </div>
    </nav>
  );
};

export default Nav;

