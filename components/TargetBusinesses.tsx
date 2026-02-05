
import React from 'react';
import { ShoppingBag, ShoppingCart, Coffee, Pill, Settings, Tv } from 'lucide-react';

const TargetBusinesses: React.FC = () => {
  const businesses = [
    { name: 'Retail Outlets', icon: <ShoppingBag size={28} /> },
    { name: 'Supermarkets', icon: <ShoppingCart size={28} /> },
    { name: 'Cafes & Bistros', icon: <Coffee size={28} /> },
    { name: 'Pharmacies', icon: <Pill size={28} /> },
    { name: 'Hardware', icon: <Settings size={28} /> },
    { name: 'Gadget Shops', icon: <Tv size={28} /> },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase mb-4">Versatility</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">One solution, <span className="text-blue-600">infinite possibilities.</span></h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">Whether you're selling coffee or heavy machinery, our POS adapts to your workflows, not the other way around.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {businesses.map((biz, i) => (
            <div key={i} className="group flex flex-col items-center justify-center bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all duration-300 cursor-default text-center">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/20">
                {biz.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm md:text-base tracking-tight leading-tight">{biz.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetBusinesses;
