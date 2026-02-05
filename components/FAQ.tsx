
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { question: 'Does it support GST?', answer: 'Yes! NPM POS is fully GST compliant. It handles HSN codes, SGST, CGST, IGST calculations and generates monthly GSTR reports automatically.' },
    { question: 'Can I use it offline?', answer: 'Absolutely. Our POS works offline so your billing never stops. Data syncs automatically once you go back online.' },
    { question: 'Is internet required?', answer: 'Internet is required only for initial setup and regular cloud backups. Daily billing and inventory management can be done offline.' },
    { question: 'Do you provide support?', answer: 'Yes, we provide 24/7 technical support via phone, email, and WhatsApp. We also have a dedicated local team for on-site assistance if needed.' },
    { question: 'Is training provided?', answer: 'Yes, every new subscription comes with free staff training. Our team will guide you through all features during the installation process.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600">Find quick answers to common queries about our system. If you have more questions, feel free to contact us.</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-slate-900">{faq.question}</span>
              {openIndex === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {openIndex === i && (
              <div className="p-6 bg-blue-50/30 text-slate-600 border-t border-slate-100 animate-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
