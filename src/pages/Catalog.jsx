import React from 'react';

export default function Catalog({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Export Catalog</h1>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em]">Direct from Peshawar Headquarters</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(p => (
          <div key={p.id} className="mini-card p-6 flex flex-col justify-between rounded-2xl">
            <div>
              <img src={p.image} className="w-full aspect-square object-cover rounded-xl mb-4" />
              <h3 className="text-sm font-bold uppercase mb-1">{p.name}</h3>
              <p className="accent-text text-[10px] font-bold mb-6 tracking-widest uppercase">{p.category || 'Premium Export'}</p>
            </div>
            <a href={`https://wa.me/923318484115?text=Inquiry: ${p.name}`} className="block w-full text-center bg-black text-white py-4 text-[10px] font-bold uppercase rounded-lg">Inquire</a>
          </div>
        ))}
      </div>
    </div>
  );
}

