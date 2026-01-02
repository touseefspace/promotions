import Header from '@/components/Header';
import Prizes from '@/components/Prizes';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import { Star, Zap, Target, Trophy, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Prizes />
      
      {/* How It Works */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ৩টি <span className="gradient-text">সহজ ধাপে</span> জিতুন
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              আমাদের প্রতিযোগিতায় অংশ নেওয়া সহজ এবং সোজা। শুধু এই ধাপগুলি অনুসরণ করুন!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                ১
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
                  <h3 className="text-xl font-bold text-white">বিস্তারিত লিখুন</h3>
                </div>
                <p className="text-gray-400">
                  আপনার মৌলিক তথ্য সঠিকভাবে পূরণ করুন। আপনার যোগাযোগের বিশদ বিবরণ সঠিক কিনা তা নিশ্চিত করুন যাতে আপনি জিতলে আমরা আপনার সাথে যোগাযোগ করতে পারি!
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                ২
              </div>
              <div className="glass-morphism p-8 rounded-3xl h-full pt-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">ড্র-এর জন্য অপেক্ষা করুন</h3>
                </div>
                <p className="text-gray-400">
                  আমাদের সিস্টেম প্রতি সপ্তাহে একজন বিজয়ীকে এলোমেলোভাবে নির্বাচন করে। ড্রটি স্বয়ংক্রিয়ভাবে ঘটে এবং সম্পূর্ণভাবে ন্যায্য এবং স্বচ্ছ।
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform duration-300">
                ৩
              </div>
              <div className="glass-morphism p-8 rounded-3xl h-full pt-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">পুরস্কার দাবি করুন</h3>
                </div>
                <p className="text-gray-400">
                  যদি আপনি জিতেন, আমরা অবিলম্বে আপনার সাথে যোগাযোগ করব। আপনার পুরস্কারের জন্য আপনাকে আপনার পরিচয় যাচাই করতে হবে এবং শিপিং বিশদ প্রদান করতে হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Form />
      <Footer />
    </div>
  );
}