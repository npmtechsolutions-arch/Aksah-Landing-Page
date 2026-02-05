
import React from 'react';
import { PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden bg-white">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-40"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-[55%] space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full text-blue-700 text-sm font-bold tracking-tight animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              The Next-Gen Retail OS
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Scale your store <br />
              <span className="text-blue-600">faster than ever.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              A comprehensive POS suite with ultra-fast billing, intelligent inventory control, and GST compliance. Designed for businesses that value speed and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={onAction}
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4.5 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onAction}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4.5 rounded-2xl font-bold text-lg hover:border-slate-300 hover:bg-white transition-all active:scale-95"
              >
                <PlayCircle size={24} className="text-blue-600" />
                Book a Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                <CheckCircle2 size={18} className="text-blue-600" />
                Free setup assistance
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                <CheckCircle2 size={18} className="text-blue-600" />
                No hidden charges
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] relative w-full max-w-2xl">
            {/* Visual Interface Mockup */}
            <div className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl p-4 overflow-hidden border-[12px] border-slate-800 animate-float shadow-blue-500/10">
              <div className="bg-slate-50 rounded-2xl p-6 overflow-hidden min-h-[400px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 space-y-6">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <div className="h-4 w-20 bg-slate-200 rounded"></div>
                        <div className="h-8 w-40 bg-slate-300 rounded-lg"></div>
                      </div>
                      <div className="h-10 w-10 bg-blue-100 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-2">
                           <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                           <div className="h-4 w-full bg-slate-200 rounded"></div>
                        </div>
                      ))}
                    </div>

                    <div className="h-48 bg-blue-600 rounded-[2rem] shadow-lg p-8 text-white relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="text-sm opacity-80 uppercase tracking-widest mb-2 font-bold">Today's Revenue</div>
                        <div className="text-5xl font-black tabular-nums">₹ 84,290.50</div>
                        <div className="mt-4 inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                          ↑ 12.4% from yesterday
                        </div>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Float Elements */}
            <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 animate-bounce-subtle z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-bold uppercase">Inventory</div>
                  <div className="text-sm font-bold text-slate-800">GST Sync Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
