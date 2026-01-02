'use client';

import { useState } from 'react';
import { User, MapPin, Home, Phone, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { uaeStatesAndCities, Emirate, City, getCitiesByEmirate } from '@/data/uaeData';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    emirate: '',
    city: '',
    address: '',
    phoneNumber: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (name === 'emirate') {
      const selectedEmirate = value as Emirate;
      setCities(getCitiesByEmirate(selectedEmirate));
      setFormData(prev => ({ ...prev, city: '' })); // Reset city when emirate changes
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success(data.message || 'Entry submitted successfully! Good luck!');
        
        // Reset form
        setFormData({
          name: '',
          emirate: '',
          city: '',
          address: '',
          phoneNumber: '',
        });
        setCities([]);
      } else {
        toast.error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="glass-morphism rounded-3xl p-8 shadow-2xl shadow-primary/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-2xl mb-4 animate-glow">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white">Enter The Contest</h2>
            <p className="text-gray-400">Fill in your details for a chance to win!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <User className="h-4 w-4" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-500 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>
            
            {/* Phone Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Phone className="h-4 w-4" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-500 transition-all duration-200"
                placeholder="Enter your UAE phone number"
              />
            </div>
            
            {/* Emirate (State) and City Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MapPin className="h-4 w-4" />
                  Emirate (State)
                </label>
                <select
                  name="emirate"
                  value={formData.emirate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                >
                  <option value="" className="bg-gray-900">Select Emirate</option>
                  {Object.keys(uaeStatesAndCities).map((emirate) => (
                    <option key={emirate} value={emirate} className="bg-gray-900">
                      {emirate}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MapPin className="h-4 w-4" />
                  City / Area
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  disabled={!formData.emirate}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="bg-gray-900">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-gray-900">
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Address Field (Optional) */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                <Home className="h-4 w-4" />
                Address (Optional)
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-500 transition-all duration-200"
                placeholder="Enter your address (optional)"
              />
            </div>
            
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-linear-to-r from-primary to-secondary text-white text-lg font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enter Contest & Win!
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              One entry per person. Winner will be notified via phone call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}