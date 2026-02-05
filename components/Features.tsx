
import React from 'react';
import { 
  FileText, Package, Calculator, BarChart3, 
  Users, UserPlus, CloudOff, Cloud, Check 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { title: 'Ultra-Fast Billing', desc: 'Generate high-fidelity invoices in under 3 seconds with keyboard-first shortcuts.', icon: <FileText /> },
    { title: 'Inventory Intel', desc: 'Real-time stock movement tracking with automated low-stock reorder triggers.', icon: <Package /> },
    { title: 'Native GST Engine', desc: 'HSN-compliant tax calculations that generate GSTR reports with one click.', icon: <Calculator /> },
    { title: 'Strategic Analytics', desc: 'Deep dive into profit margins and category-wise performance via heatmaps.', icon: <BarChart3 /> },
    { title: 'CRM & Loyalty', desc: 'Built-in customer profiles with automated loyalty points and WhatsApp triggers.', icon: <UserPlus /> },
    { title: 'Granular Permissions', desc: 'Define precise access levels for staff to prevent data leakage and theft.', icon: <Users /> },
    { title: 'Offline Resilience', desc: 'Zero downtime architecture ensures you keep billing even during ISP outages.', icon: <CloudOff /> },
    { title: 'Secure Cloud Sync', desc: 'AES-256 encrypted backups synced to our distributed global servers.', icon: <Cloud /> },
  ];

  return (
    <section className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase mb-4">Core Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Everything you need to <span className="text-blue-600">run like a pro.</span></h2>
            <p className="text-lg text-slate-500 font-medium">We've combined decades of retail feedback into a single, unified POS experience that removes friction from every sale.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.1)] transition-all duration-500">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                LEARN MORE <Check size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
