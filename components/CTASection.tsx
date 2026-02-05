
import React from 'react';

interface CTASectionProps {
  onAction: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onAction }) => {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
          Upgrade Your Billing with <br className="hidden md:block" /> NPM Tech Solutions
        </h2>
        <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
          Take the first step towards a smarter business today. <br />Join over 5,000+ businesses across India.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onAction}
            className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95"
          >
            Start Free Trial
          </button>
          <button 
            onClick={onAction}
            className="w-full sm:w-auto bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Abstract circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default CTASection;
