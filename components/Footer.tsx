
import React from 'react';

interface FooterProps {
  onTabChange: (tab: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const handleLinkClick = (id: any) => {
    onTabChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                NPM Tech <span className="text-blue-500">Solutions</span>
              </span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              Empowering Indian retail businesses with smart, simple, and affordable POS technology. From billing to inventory, we help you manage your store with ease.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-blue-500 transition-colors">Home</button></li>
              <li><button onClick={() => handleLinkClick('features')} className="hover:text-blue-500 transition-colors">Features</button></li>
              <li><button onClick={() => handleLinkClick('pricing')} className="hover:text-blue-500 transition-colors">Pricing</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-blue-500 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Details</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>NPM Tech Solutions</strong><br />
                No 12, Parsn Sristi Mahal<br />
                Vilangudi, Madurai
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:npmtechsolutions@gmail.com" className="hover:text-blue-500 transition-colors">npmtechsolutions@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} NPM Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
