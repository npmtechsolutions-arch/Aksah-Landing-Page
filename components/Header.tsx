
import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, Settings, User } from 'lucide-react';
import { ViewType } from '../App';

interface HeaderProps {
  activeTab: ViewType;
  onTabChange: (tab: ViewType) => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, isLoggedIn, isAdmin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: {name: string, id: ViewType}[] = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  if (isLoggedIn && isAdmin) {
    navLinks.push({ name: 'Manage', id: 'addPrice' });
  }

  const handleLinkClick = (id: ViewType) => {
    onTabChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activeTab !== 'home' 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' 
        : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-6 transition-all shadow-lg shadow-blue-500/20">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-slate-900 tracking-tighter leading-none">
              NPM TECH
            </span>
            <span className="text-xs font-bold text-blue-600 tracking-[0.2em]">SOLUTIONS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-bold tracking-tight transition-all relative py-1 ${
                  activeTab === link.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                {activeTab === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pl-8 border-l border-slate-200">
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <button 
                  onClick={onLogout}
                  className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-red-600 transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 ring-2 ring-white shadow-sm">
                  <User size={20} />
                </div>
              </div>
            ) : (
              <button 
                onClick={() => handleLinkClick('login')}
                className="bg-slate-900 text-white px-7 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all hover:shadow-xl active:scale-95"
              >
                Sign In
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              className={`text-2xl font-black text-left flex items-center gap-3 ${
                activeTab === link.id ? 'text-blue-600' : 'text-slate-400'
              }`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.id === 'addPrice' && <Settings size={24} />}
              {link.name}
            </button>
          ))}
          <div className="mt-4 pt-8 border-t border-slate-100">
            {isLoggedIn ? (
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
                className="flex items-center gap-3 text-red-500 font-black text-xl"
              >
                <LogOut size={24} />
                Sign Out
              </button>
            ) : (
              <button 
                onClick={() => handleLinkClick('login')}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xl w-full shadow-lg shadow-blue-500/20"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
