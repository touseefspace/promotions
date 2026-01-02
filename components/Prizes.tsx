import { Smartphone, Scooter, Watch, Zap } from 'lucide-react';
import Image from 'next/image';

export interface Prize {
  id: number;
  name: string;
  image: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const prizes: Prize[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    image: '/prizes/iphone.jpg',
    description: 'Latest Apple smartphone with advanced camera',
    icon: <Smartphone className="h-10 w-10" />,
    color: 'from-gray-700 to-gray-900',
  },
  {
    id: 2,
    name: 'Electric Scooter',
    image: '/prizes/escooter.jpg',
    description: 'High-speed urban mobility scooter',
    icon: <Scooter className="h-10 w-10" />,
    color: 'from-green-600 to-emerald-800',
  },
  {
    id: 3,
    name: 'Smart Watch',
    image: '/prizes/smartwatch.jpg',
    description: 'Fitness and health tracking watch',
    icon: <Watch className="h-10 w-10" />,
    color: 'from-blue-600 to-indigo-800',
  },
  {
    id: 4,
    name: 'Washing Machine',
    image: '/prizes/washingmachine.jpg',
    description: 'Energy efficient smart washing machine',
    icon: <Zap className="h-10 w-10" />,
    color: 'from-cyan-600 to-blue-800',
  },
  {
    id: 5,
    name: 'Samsung S25',
    image: '/prizes/samsungs25.jpg',
    description: 'Next-gen Android flagship phone',
    icon: <Smartphone className="h-10 w-10" />,
    color: 'from-purple-600 to-violet-800',
  },
];

export default function Prizes() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-2 w-8 bg-linear-to-r from-primary to-secondary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Win <span className="gradient-text">Amazing Prizes</span>
            </h2>
            <div className="h-2 w-8 bg-linear-to-r from-secondary to-primary rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One lucky participant will win one of these incredible prizes. Enter now for your chance to win!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {prizes.map((prize) => (
            <div 
              key={prize.id}
              className={`glass-morphism rounded-2xl p-4 group hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Prize Image */}
              <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src={prize.image}
                  alt={prize.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-linear-to-t ${prize.color} opacity-20`}></div>
              </div>
              
              {/* Prize Info */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-white">
                      {prize.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{prize.name}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{prize.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 bg-primary/20 rounded-full">
                    <span className="text-xs font-medium text-primary">Featured Prize</span>
                  </div>
                  <div className="text-sm text-gray-400">★ ★ ★ ★ ★</div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Ribbon for Top Prize */}
              {prize.id === 1 && (
                <div className="absolute top-0 right-0 bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  TOP PRIZE
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Total Prize Value */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-linear-to-r from-primary/20 to-secondary/20 backdrop-blur-sm px-8 py-6 rounded-3xl border border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-lg font-medium text-white">Total Prize Value:</span>
            </div>
            <div className="text-3xl font-bold gradient-text">AED 55,000+</div>
          </div>
          
          {/* Note about delivery */}
          <p className="mt-6 text-gray-400 text-sm max-w-2xl mx-auto">
            All prizes will be delivered to winners anywhere in the UAE within 7 business days. 
            Winners are responsible for any applicable customs duties or taxes.
          </p>
        </div>
      </div>
    </section>
  );
}