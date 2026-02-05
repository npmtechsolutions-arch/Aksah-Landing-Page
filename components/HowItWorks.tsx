
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { step: '01', title: 'Add Products', desc: 'Import your inventory using Excel or scan barcodes to add products instantly.' },
    { step: '02', title: 'Start Billing', desc: 'Select items or scan codes to generate invoices. Fast and error-free.' },
    { step: '03', title: 'Print or Share', desc: 'Print professional receipts or share digital invoices via SMS/WhatsApp.' },
    { step: '04', title: 'View Reports', desc: 'Monitor your business performance with insightful real-time dashboards.' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple to Setup, Easier to Use</h2>
          <p className="text-slate-600">Get your store up and running in less than 30 minutes.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-8 ring-8 ring-blue-50">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
