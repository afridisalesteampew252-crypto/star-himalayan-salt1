import React from 'react';

export default function Home({ setPage, products }) {
  return (
    <div className="w-full">
      {/* Hero - Optimized for mobile height and text size */}
      <header className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-12">
        <span className="accent-text text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4">
          Peshawar Office | Karachi Port Export
        </span>
        <h1 className="text-3xl md:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
          #1 Certified Himalayan <br className="hidden md:block" />
          <span className="accent-text"> Pink Salt Exporter</span> <br className="hidden md:block" />
          in Pakistan
        </h1>
        <button 
          onClick={() => setPage('Catalog')} 
          className="bg-black text-white px-10 md:px-12 py-4 md:py-5 text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:bg-gray-800 transition active:scale-95"
        >
          Browse Collection
        </button>
      </header>

      {/* Quick View Grid - Changed md:grid-cols-3 to include sm:grid-cols-2 */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white border-y border-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-8 md:mb-12 text-center md:text-left">
            Export Selection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map(p => (
              <div key={p.id} className="mini-card p-4 rounded-xl shadow-sm">
                <img src={p.image} alt={p.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-center">{p.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data - Optimized for mobile width */}
      <section className="py-16 md:py-20 bg-[#fdf2f2] px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 text-center italic">
            Technical Analysis
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-pink-100 shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-pink-50">
                  <td className="py-4 font-bold uppercase text-[9px] md:text-[10px]">NaCl Content</td>
                  <td className="py-4 text-right font-medium">98.2% Min</td>
                </tr>
                <tr className="border-b border-pink-50">
                  <td className="py-4 font-bold uppercase text-[9px] md:text-[10px]">Origin</td>
                  <td className="py-4 text-right font-medium">Salt Range, Pakistan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
