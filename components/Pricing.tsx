
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  customPrices: { basic: string; standard: string; premium: string };
}

const Pricing: React.FC<PricingProps> = ({ customPrices }) => {
  const plans = [
    {
      name: 'Starter',
      price: customPrices.basic,
      period: '/mo',
      desc: 'Perfect for local shops and boutiques',
      features: ['Single Terminal', '500 SKUs included', 'Instant Billing', 'End-of-day Reports', 'Standard GST Support'],
      cta: 'Choose Starter',
      popular: false
    },
    {
      name: 'Business',
      price: customPrices.standard,
      period: '/mo',
      desc: 'Ideal for supermarkets and multi-aisle stores',
      features: ['3 Terminals included', 'Unlimited SKUs', 'Smart Inventory Alerts', 'Advanced GST filing', 'WhatsApp Receipts', '24/7 Priority Chat'],
      cta: 'Get Business Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: customPrices.premium,
      period: '/mo',
      desc: 'For retail chains and large enterprises',
      features: ['Unlimited Terminals', 'Centralized Multi-store Sync', 'Warehouse Management', 'API Access', 'White-labeled App', 'Dedicated Success Manager'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase mb-4">Simple Plans</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Invest in your <span className="text-blue-600">growth.</span></h2>
          <p className="text-lg text-slate-500 font-medium">Transparent pricing with no hidden implementation fees. Upgrade or downgrade anytime.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col bg-white p-12 rounded-[3rem] border transition-all duration-500 ${
                plan.popular 
                ? 'border-blue-600 shadow-[0_30px_70px_-20px_rgba(37,99,235,0.2)] lg:-translate-y-4 z-10' 
                : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase">
                  Best Value
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{plan.desc}</p>
              </div>
              
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-xs font-bold text-slate-400">₹</span>
                <span className="text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                <span className="text-slate-400 font-bold">{plan.period}</span>
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-600 font-bold text-sm">
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-bold">
            Need a custom solution for 50+ stores? <button className="text-blue-600 hover:underline">Speak with Enterprise Support</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
