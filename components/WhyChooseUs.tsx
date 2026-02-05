
import React from 'react';
import { Heart, ShieldCheck, Tag, Headset, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const highlights = [
    { title: 'Made for Indian Businesses', icon: <Heart className="text-red-500" /> },
    { title: 'GST Compliant', icon: <ShieldCheck className="text-blue-500" /> },
    { title: 'Affordable Pricing', icon: <Tag className="text-emerald-500" /> },
    { title: 'Local Support', icon: <Headset className="text-purple-500" /> },
    { title: 'Easy Setup', icon: <Zap className="text-orange-500" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Built with Excellence for Local Businesses</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl">
                    {/* Fix: Added 'any' type to React.ReactElement to permit 'size' property in cloneElement */}
                    {React.cloneElement(h.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-xl font-bold opacity-100">{h.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-40 h-40 border-8 border-white/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
