import React from 'react';

export default function Nav({ setPage }) {
  return (
    <nav className="fixed w-full z-50 px-4 md:px-10 py-3 glass-nav border-b border-pink-100 flex justify-between items-center">
      <button onClick={() => setPage('Home')} className="flex items-center">
        <img src="https://i.postimg.cc/FHnZYDyD/1776522181046.png" alt="Logo" className="logo-fit" />
      </button>
      
      <div className="flex items-center space-x-4 md:space-x-8">
        <button onClick={() => setPage('Catalog')} className="text-[10px] font-bold uppercase tracking-widest hover:text-[#b76e79]">Catalog</button>
        <a href="https://wa.me/923318484115" className="accent-bg text-white px-4 py-2 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-md">WhatsApp</a>
      </div>
    </nav>
  );
}
