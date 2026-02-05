
import React from 'react';
import { Timer, AlertTriangle, Smile, TrendingUp, Wallet } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: 'Faster Checkout', desc: 'Reduce queue times and handle busy hours effortlessly.', icon: <Timer className="text-orange-500" /> },
    { title: 'Reduce Errors', desc: 'Automated calculations eliminate manual billing mistakes.', icon: <AlertTriangle className="text-red-500" /> },
    { title: 'Easy for Staff', desc: 'Intuitive design requires minimal training for new employees.', icon: <Smile className="text-blue-500" /> },
    { title: 'Better Control', desc: 'Real-time visibility into stock and sales from anywhere.', icon: <TrendingUp className="text-green-500" /> },
    { title: 'Save Time & Money', desc: 'Automate tedious paperwork and focus on growth.', icon: <Wallet className="text-purple-500" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Retailers Love NPM POS?</h2>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                    {/* Fix: Added 'any' type to React.ReactElement to permit 'size' property in cloneElement */}
                    {React.cloneElement(b.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{b.title}</h3>
                    <p className="text-slate-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-600 rounded-[3rem] aspect-square flex items-center justify-center p-12 overflow-hidden shadow-2xl">
              <div className="text-white space-y-8 relative z-10">
                <div className="text-6xl font-black">40%</div>
                <div className="text-2xl font-medium opacity-90">Increase in billing speed during peak hours after switch.</div>
                <div className="h-1 w-20 bg-white/40"></div>
                <p className="text-lg italic opacity-80">"The easiest transition we've ever made for our chain of stores."</p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
