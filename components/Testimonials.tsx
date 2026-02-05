
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: 'Anand Kumar', 
      business: 'Heritage Sweets', 
      rating: 5, 
      text: 'NPM Tech Solutions changed how we handle our busy evening rush. Fast interface!' 
    },
    { 
      name: 'Priya Sharma', 
      business: 'LifeCare Pharmacy', 
      rating: 5, 
      text: 'Inventory tracking was a nightmare before NPM. Now I get low stock alerts directly.' 
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
        <p className="text-slate-600">Join 5,000+ businesses using our system.</p>
      </div>
      
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
              ))}
            </div>
            <p className="text-slate-600 italic mb-6 leading-relaxed">"{r.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{r.name}</h4>
              <p className="text-blue-600 text-sm font-medium">{r.business}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
