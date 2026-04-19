import React from 'react';

export default function Catalog({ products }) {
  return (
    // Changed px-6 to px-4 for better mobile edge spacing
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        {/* Adjusted text size for mobile (text-3xl) vs desktop (md:text-5xl) */}
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
          Export Catalog
        </h1>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em]">
          Direct from Peshawar Headquarters
        </p>
      </div>

      {/* Grid is perfect: 1 column on mobile, 2 on small tablets, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map(p => (
          <div key={p.id} className="mini-card p-5 flex flex-col justify-between rounded-2xl shadow-sm border border-[#fce8e8]">
            <div>
              {/* Added a fallback background for images while they load */}
              <div className="bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-sm font-bold uppercase mb-1">{p.name}</h3>
              <p className="accent-text text-[10px] font-bold mb-4 tracking-widest uppercase">
                {p.category || 'Premium Export'}
              </p>
            </div>
            
            <a 
              href={`https://wa.me/923318484115?text=Inquiry: ${p.name}`} 
              className="block w-full text-center bg-black hover:bg-[#b76e79] transition-colors text-white py-4 text-[10px] font-bold uppercase rounded-lg"
            >
              Inquire Now
            </a>
          </div>
        ))}
      </div>
      
      {/* Empty State: If no products are found, show this message */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 italic">No products currently available in the catalog.</p>
        </div>
      )}
    </div>
  );
}
