
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-blue-50 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will contact you within the next 24 hours to schedule your free demo.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Free Live Demo</h3>
      <p className="text-slate-500 mb-8">Fill in the details below and we'll get back to you shortly.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
            <input 
              required
              type="text" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="e.g. Heritage Sweets"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="name@business.com"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Business Type</label>
          <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none appearance-none">
            <option>Retail Store</option>
            <option>Supermarket</option>
            <option>Restaurant / Cafe</option>
            <option>Pharmacy</option>
            <option>Hardware Store</option>
            <option>Others</option>
          </select>
        </div>

        <button 
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Request Demo Now
              <Send size={20} />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-slate-400 mt-4">
          By clicking above, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
