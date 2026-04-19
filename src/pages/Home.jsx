import React from 'react';

export default function Home({ setPage, products }) {
  return (
    <div>
      {/* Hero */}
      <header className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <span className="accent-text text-[10px] font-bold tracking-[0.6em] uppercase mb-4">Peshawar Office | Karachi Port Export</span>
        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
          #1 Certified Himalayan <br />
          <span className="accent-text">Pink Salt Exporter</span> <br />
          in Pakistan
        </h1>
        <button onClick={() => setPage('Catalog')} className="bg-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:bg-gray-800 transition">
          Browse Collection
        </button>
      </header>

      {/* Quick View Grid */}
      <section className="py-20 px-6 bg-white border-y border-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-12 text-center md:text-left">Export Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(p => (
              <div key={p.id} className="mini-card p-4 rounded-xl">
                <img src={p.image} className="w-full aspect-square object-cover rounded-lg mb-4" />
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-center">{p.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data */}
      <section className="py-20 bg-[#fdf2f2] px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black uppercase mb-8 text-center italic">Technical Analysis</h2>
          <div className="bg-white p-8 rounded-2xl border border-pink-100">
            <table className="w-full text-left text-sm">
              <tr className="border-b border-pink-50">
                <td className="py-4 font-bold uppercase text-[10px]">NaCl Content</td>
                <td className="py-4 text-right font-medium">98.2% Min</td>
              </tr>
              <tr className="border-b border-pink-50">
                <td className="py-4 font-bold uppercase text-[10px]">Origin</td>
                <td className="py-4 text-right font-medium">Salt Range, Pakistan</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
