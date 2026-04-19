import React from 'react';

export default function Footer({ setPage }) {
  const links = ['Home', 'Catalog', 'About', 'Contact'];

  return (
    <footer className="bg-white border-t border-pink-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-lg font-black uppercase tracking-tighter mb-6">
          Star <span className="accent-text">Himalayan</span>
        </h2>
        
        {/* Footer Navigation - Identical to Header for consistency */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {links.map(link => (
            <button 
              key={link}
              onClick={() => setPage(link)} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="w-12 h-[1px] bg-pink-100 mb-8"></div>

        <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] text-center leading-relaxed">
          © {new Date().getFullYear()} Star Himalayan Salt Pakistan <br />
          Premium Grade Mining & Global Export
        </p>

        {/* Hidden Admin Entry */}
        <button 
          onClick={() => setPage('Admin')} 
          className="mt-16 text-[8px] text-gray-200 hover:text-pink-300 uppercase tracking-[0.4em] transition-all"
        >
          Partner Portal
        </button>
        
      </div>
    </footer>
  );
}
