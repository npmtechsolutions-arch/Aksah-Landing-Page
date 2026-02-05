
import React, { useState } from 'react';

const ProductScreens: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const screens = [
    { name: 'Billing Screen', color: 'bg-blue-600', img: 'https://picsum.photos/seed/pos-billing/1200/800' },
    { name: 'Inventory Screen', color: 'bg-indigo-600', img: 'https://picsum.photos/seed/pos-inventory/1200/800' },
    { name: 'Reports Dashboard', color: 'bg-emerald-600', img: 'https://picsum.photos/seed/pos-reports/1200/800' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Take a Look Inside</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">Experience the cleanest and most intuitive interface designed specifically for high-volume retail operations.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {screens.map((screen, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeTab === i 
                ? `${screen.color} text-white shadow-lg` 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {screen.name}
            </button>
          ))}
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-3 shadow-2xl ring-1 ring-slate-700">
            <img 
              src={screens[activeTab].img} 
              alt={screens[activeTab].name}
              className="rounded-2xl w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="mt-12">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
              Book a Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreens;
