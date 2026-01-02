import { Gift, Sparkles, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="pt-8 pb-6 px-4 text-center relative">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-3 mb-4">
        <div className="p-2 bg-linear-to-br from-primary to-secondary rounded-xl animate-glow">
          <Gift className="h-8 w-8 text-white" />
        </div>
        <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">
          Lucky Winner
        </h1>
        <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
      </div>
      
      <p className="relative z-10 text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        Enter for a chance to win <span className="font-bold text-primary">amazing prizes</span>! One lucky winner will be chosen every week.
      </p>
      
      <div className="relative z-10 inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">Next draw: <span className="text-primary">7 days</span></span>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      <div className="absolute top-4 right-1/3 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      <div className="absolute top-10 left-1/3 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '700ms' }}></div>
    </header>
  );
}