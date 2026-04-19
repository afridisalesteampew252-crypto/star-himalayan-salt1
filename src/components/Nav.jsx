import React from 'react';

export default function Nav({ setPage, currentPage }) {
  const menuItems = ['Home', 'Catalog', 'About', 'Contact'];

  return (
    <nav className="fixed w-full z-50 px-4 md:px-10 py-4 bg-white/90 backdrop-blur-md border-b border-pink-100 flex justify-between items-center">
      
      {/* Brand Section */}
      <button onClick={() => setPage('Home')} className="text-left group cursor-pointer">
        <h1 className="text-lg font-black uppercase tracking-tighter">
          Star <span className="text-[#b76e79]">Himalayan</span>
        </h1>
        <p className="text-[8px] font-bold tracking-[0.3em] uppercase text-gray-400">Export HQ</p>
      </button>
      
      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4 md:space-x-8">
        {menuItems.map((item) => (
          <button 
            key={item}
            onClick={() => setPage(item)} 
            className={`text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
              currentPage === item ? 'text-[#b76e79] border-b-2 border-[#b76e79]' : 'text-gray-500 hover:text-[#b76e79]'
            }`}
          >
            {item}
          </button>
        ))}
        
        {/* Quick Contact */}
        <a 
          href="https://wa.me/923318484115" 
          className="hidden sm:block bg-[#b76e79] text-white px-4 py-2 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm hover:opacity-90"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
