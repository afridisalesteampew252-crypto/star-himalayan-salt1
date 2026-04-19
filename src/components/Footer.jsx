import React from 'react';

export default function Footer({ setPage }) {
  return (
    <footer className="bg-white border-t border-pink-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Your Branding */}
        <h2 className="text-xl font-black uppercase tracking-tighter mb-4">
          Star Himalayan <span className="accent-text">Salt</span>
        </h2>
        
        {/* Navigation Links for Footer */}
        <div className="flex gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <button onClick={() => setPage('Home')} className="hover:text-black">Home</button>
          <button onClick={() => setPage('Catalog')} className="hover:text-black">Catalog</button>
          <button onClick={() => setPage('Contact')} className="hover:text-black">Contact</button>
        </div>

        <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Star Himalayan Salt | Premium Export Grade
        </p>

        {/* --- THE SECRET ADMIN LINK --- */}
        <button 
          onClick={() => setPage('Admin')} 
          className="mt-12 text-[9px] text-gray-200 hover:text-pink-300 uppercase tracking-[0.3em] transition-colors"
        >
          Partner Portal
        </button>
        
      </div>
    </footer>
  );
}
