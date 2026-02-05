
import React from 'react';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trusts = [
    { icon: <Zap size={20} />, text: 'GST Ready' },
    { icon: <ShieldCheck size={20} />, text: 'Secure Data' },
    { icon: <Globe size={20} />, text: 'Easy to Use' },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm">
            Trusted by Retail & Small Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {trusts.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 text-slate-700 font-bold">
                <div className="text-blue-600">{t.icon}</div>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
