
import { Shield, Heart, Gift } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 pt-8 pb-6 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo/Name Section */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-linear-to-br from-primary to-secondary rounded-lg">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lucky Winner
            </span>
          </div>
          
          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Secure Entry</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Fair Draw</span>
            </div>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Terms & Conditions
          </a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Privacy Policy
          </a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Contact
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Lucky Winner Contest. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            This contest is open to UAE residents only. No purchase necessary.
          </p>
        </div>
      </div>
    </footer>
  );
}