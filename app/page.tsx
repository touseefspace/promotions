import Header from '@/components/Header';
import Prizes from '@/components/Prizes';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import { Star, Zap, Target, Trophy, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Stats Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="gradient-border rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold text-white">1,500+</span>
            </div>
            <p className="text-gray-400">Active Participants</p>
          </div>
          
          <div className="gradient-border rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Trophy className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold text-white">25</span>
            </div>
            <p className="text-gray-400">Winners This Month</p>
          </div>
          
          <div className="gradient-border rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold text-white">5</span>
            </div>
            <p className="text-gray-400">Amazing Prizes</p>
          </div>
          
          <div className="gradient-border rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold text-white">98%</span>
            </div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
      
      <Prizes />
      
      {/* How It Works */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Win in <span className="gradient-text">3 Easy Steps</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Participating in our contest is simple and straightforward. Just follow these steps!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="glass-morphism p-8 rounded-3xl h-full pt-12 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Enter Details</h3>
                </div>
                <p className="text-gray-400">
                  Fill in your basic information accurately. Make sure your contact details are correct so we can reach you if you win!
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="glass-morphism p-8 rounded-3xl h-full pt-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Wait for Draw</h3>
                </div>
                <p className="text-gray-400">
                  Our system randomly selects one winner every week. The draw happens automatically and is completely fair and transparent.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="glass-morphism p-8 rounded-3xl h-full pt-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Claim Prize</h3>
                </div>
                <p className="text-gray-400">
                  If you win, we'll contact you immediately. You'll need to verify your identity and provide shipping details for your prize.
                </p>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mt-16 bg-linear-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-8 w-8 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Next Draw Countdown</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="glass-morphism p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">07</div>
                <div className="text-sm text-gray-400">Days</div>
              </div>
              <div className="glass-morphism p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">14</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div className="glass-morphism p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">32</div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="glass-morphism p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">45</div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">
              Enter before the timer runs out! The winner will be announced immediately after the draw.
            </p>
          </div>
        </div>
      </div>
      
      <Form />
      <Footer />
    </div>
  );
}