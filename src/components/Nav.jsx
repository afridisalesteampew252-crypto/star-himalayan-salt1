import React from 'react';

export default function Nav({ setPage, currentPage }) {
  const menuItems = ['Home', 'Catalog', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 md:py-5 flex justify-between items-center">
        
        {/* Brand Section - Smaller text on mobile to save space */}
        <button onClick={() => setPage('Home')} className="text-left group outline-none">
          <h1 className="text-sm md:text-lg font-black uppercase tracking-tighter">
            Star <span className="text-[#b76e79]">Himalayan</span>
          </h1>
          <p className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-400">
            Export HQ
          </p>
        </button>
        
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-3 md:space-x-8">
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => setPage(item)} 
              className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all relative py-1 ${
                currentPage === item 
                  ? 'text-[#b76e79]' 
                  : 'text-gray-500 hover:text-[#b76e79]'
              }`}
            >
              {item}
              {/* Animated underline for active state */}
              {currentPage === item && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b76e79] rounded-full" />
              )}
            </button>
          ))}
          
          {/* WhatsApp Icon - Icon only on mobile, text on desktop */}
          <a 
            href="https://wa.me/923318484115" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b76e79] text-white p-2 md:px-4 md:py-2 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WA</span>
          </a>
        </div>
      </div>
    </nav>
  );
          }
    
