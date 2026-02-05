
import React, { useState } from 'react';
import { Save, DollarSign, ArrowLeft } from 'lucide-react';

interface AdminAddPriceProps {
  currentPrices: { basic: string; standard: string; premium: string };
  onUpdate: (prices: { basic: string; standard: string; premium: string }) => void;
}

const AdminAddPrice: React.FC<AdminAddPriceProps> = ({ currentPrices, onUpdate }) => {
  const [prices, setPrices] = useState(currentPrices);
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(prices);
    setMsg('Pricing updated successfully!');
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="py-20 px-6 container mx-auto max-w-2xl">
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 md:p-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
            <DollarSign size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Manage Pricing</h2>
            <p className="text-slate-500">Update the plan prices displayed to customers</p>
          </div>
        </div>

        {msg && (
          <div className="bg-green-50 text-green-600 p-4 rounded-2xl mb-8 font-medium animate-in fade-in slide-in-from-top-2">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Basic Plan Price (Monthly)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                <input 
                  type="text" 
                  value={prices.basic}
                  onChange={(e) => setPrices({...prices, basic: e.target.value})}
                  className="w-full pl-10 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Standard Plan Price (Monthly)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                <input 
                  type="text" 
                  value={prices.standard}
                  onChange={(e) => setPrices({...prices, standard: e.target.value})}
                  className="w-full pl-10 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Premium Plan Price (Monthly)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                <input 
                  type="text" 
                  value={prices.premium}
                  onChange={(e) => setPrices({...prices, premium: e.target.value})}
                  className="w-full pl-10 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            <Save size={20} />
            Save All Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddPrice;
