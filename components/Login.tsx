
import React, { useState } from 'react';
import { LogIn, User, Lock, AlertCircle, ArrowLeft, Mail, ShieldCheck, CheckCircle2, UserPlus } from 'lucide-react';

interface LoginProps {
  onLogin: (isAdmin: boolean) => void;
}

type AuthMode = 'login' | 'signup' | 'forgot' | 'verify' | 'reset';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    resetMessages();
    
    // Simulating backend delay
    setTimeout(() => {
      setLoading(false);
      if (username === 'akash' && password === '271527') {
        onLogin(true);
      } else if (username && password) {
        onLogin(false);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    resetMessages();
    
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created successfully! You can now login.');
      setMode('login');
    }, 1500);
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    resetMessages();
    
    setTimeout(() => {
      setLoading(false);
      setMode('verify');
    }, 1500);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    resetMessages();
    
    setTimeout(() => {
      setLoading(false);
      if (otp === '123456') { // Mock OTP
        setMode('reset');
      } else {
        setError('Invalid OTP code. Try 123456.');
      }
    }, 1000);
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    resetMessages();
    
    setTimeout(() => {
      setLoading(false);
      setSuccess('Password reset successful! Please sign in.');
      setMode('login');
    }, 1500);
  };

  const renderContent = () => {
    switch (mode) {
      case 'login':
        return (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Username / Email</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-bold text-slate-700">Password</label>
                  <button 
                    type="button" 
                    onClick={() => { setMode('forgot'); resetMessages(); }}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Sign In'}
            </button>
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">
                New to NPM? <button type="button" onClick={() => { setMode('signup'); resetMessages(); }} className="text-blue-600 font-bold hover:underline">Create Account</button>
              </p>
            </div>
          </form>
        );

      case 'signup':
        return (
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Create Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="password" 
                    className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              Register Business
            </button>
            <button 
              type="button" 
              onClick={() => { setMode('login'); resetMessages(); }}
              className="w-full flex items-center justify-center gap-2 text-slate-500 font-bold py-2 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Login
            </button>
          </form>
        );

      case 'forgot':
        return (
          <form onSubmit={handleForgot} className="space-y-6">
            <div className="text-center mb-4">
              <p className="text-sm text-slate-500">Enter your email and we'll send you a 6-digit OTP code to reset your password.</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Registered Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Send Reset Code'}
            </button>
            <button type="button" onClick={() => setMode('login')} className="w-full text-slate-500 font-bold hover:text-slate-900 transition-colors py-2 flex items-center justify-center gap-2">
              <ArrowLeft size={16} /> Cancel
            </button>
          </form>
        );

      case 'verify':
        return (
          <form onSubmit={handleVerify} className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-slate-500">We've sent a 6-digit code to <br /><span className="font-bold text-slate-900">{email || 'your email'}</span></p>
            </div>
            <div>
              <div className="flex justify-center gap-2">
                <input 
                  type="text" 
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center tracking-[1em] text-2xl font-black py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="000000"
                  required
                />
              </div>
              <p className="text-center text-xs text-slate-400 mt-4">Demo code: <span className="font-bold">123456</span></p>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              Verify Code
            </button>
            <div className="text-center">
              <button type="button" onClick={handleForgot} className="text-xs font-bold text-blue-600 hover:underline">Resend Code</button>
            </div>
          </form>
        );

      case 'reset':
        return (
          <form onSubmit={handleReset} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              Update Password
            </button>
          </form>
        );
    }
  };

  const getHeaderIcon = () => {
    switch (mode) {
      case 'signup': return <UserPlus size={32} />;
      case 'forgot': 
      case 'verify': return <ShieldCheck size={32} />;
      case 'reset': return <Lock size={32} />;
      default: return <LogIn size={32} />;
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'signup': return 'Create Account';
      case 'forgot': return 'Password Reset';
      case 'verify': return 'Verify Account';
      case 'reset': return 'Secure Password';
      default: return 'Welcome Back';
    }
  };

  const getSub = () => {
    switch (mode) {
      case 'signup': return 'Join 5,000+ growing stores';
      case 'forgot': return 'Step 1 of 3';
      case 'verify': return 'Step 2 of 3';
      case 'reset': return 'Step 3 of 3';
      default: return 'Sign in to your dashboard';
    }
  };

  return (
    <div className="flex items-center justify-center py-24 px-6 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Animated Progress Bar for Reset Flow */}
        {(mode === 'forgot' || mode === 'verify' || mode === 'reset') && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 flex">
            <div className={`h-full bg-blue-600 transition-all duration-700 ${mode === 'forgot' ? 'w-1/3' : mode === 'verify' ? 'w-2/3' : 'w-full'}`}></div>
          </div>
        )}

        <div className="bg-slate-900 p-10 text-white text-center relative overflow-hidden">
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/10 animate-pulse-slow">
            {getHeaderIcon()}
          </div>
          <h2 className="text-3xl font-black tracking-tight">{getTitle()}</h2>
          <p className="text-slate-400 font-bold text-sm mt-2 uppercase tracking-widest">{getSub()}</p>
        </div>
        
        <div className="p-10">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm font-bold border border-red-100 animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-600 p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm font-bold border border-green-100 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
              {success}
            </div>
          )}

          <div className="animate-in fade-in duration-500">
            {renderContent()}
          </div>

          {mode === 'login' && (
            <div className="mt-8 pt-8 border-t border-slate-50 text-center space-y-2">
              <div className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em] mb-4">Demo Credentials</div>
              <div className="flex flex-col items-center gap-1">
                <code className="text-[11px] bg-slate-50 px-3 py-1 rounded-full text-slate-500 font-mono">Admin: akash / 271527</code>
                <code className="text-[11px] bg-slate-50 px-3 py-1 rounded-full text-slate-500 font-mono">Customer: guest / guest</code>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Login;
