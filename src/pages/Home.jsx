import React from 'react';

export default function Home({ setPage, products }) {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero - Better mobile height and responsive text */}
      <header className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-12">
        <span className="accent-text text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 animate-fade-in">
          Peshawar Office | Karachi Port Export
        </span>
        
        {/* Adjusted text sizes: text-3xl for mobile, text-7xl for desktop */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-[1.1] mb-8 uppercase tracking-tighter max-w-4xl">
          #1 Certified Himalayan <br className="hidden sm:block" />
          <span className="accent-text italic">Pink Salt Exporter</span> <br className="hidden sm:block" />
          in Pakistan
        </h1>

        <button 
          onClick={() => setPage('Catalog')} 
          className="bg-black text-white px-10 md:px-12 py-4 md:py-5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-gray-800 active:scale-95 transition-all"
        >
          Browse Collection
        </button>
      </header>

      {/* Quick View Grid - Fully responsive columns */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-center md:text-left">
              Export Selection
            </h2>
            <button 
              onClick={() => setPage('Catalog')}
              className="accent-text text-[10px] font-bold uppercase tracking-widest mt-2 md:mt-0"
            >
              View All Products →
            </button>
          </div>

          {/* 1 column on mobile, 2 on tablets, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {products.length > 0 ? (
              products.slice(0, 3).map(p => (
                <div key={p.id} className="mini-card p-4 rounded-2xl group cursor-pointer" onClick={() => setPage('Catalog')}>
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-center text-gray-800">{p.name}</h3>
                </div>
              ))
            ) : (
              // Empty state skeletons
              [1, 2, 3].map(i => (
                <div key={i} className="bg-gray-50 h-64 rounded-2xl animate-pulse" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Technical Data - Optimized Table */}
      <section className="py-20 bg-[#fdf2f2] px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-8 text-center italic tracking-widest text-gray-400">
            Quality Standard
          </h2>
          <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-pink-100 shadow-sm">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-pink-50">
                  <td className="py-5 font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-gray-400">NaCl Content</td>
                  <td className="py-5 text-right font-black text-sm md:text-base">98.2% Min</td>
                </tr>
                <tr className="border-b border-pink-50">
                  <td className="py-5 font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-gray-400">Moisture</td>
                  <td className="py-5 text-right font-black text-sm md:text-base">0.02% Max</td>
                </tr>
                <tr>
                  <td className="py-5 font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-gray-400">Origin</td>
                  <td className="py-5 text-right font-black text-sm md:text-base italic">Khewara, Pakistan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
