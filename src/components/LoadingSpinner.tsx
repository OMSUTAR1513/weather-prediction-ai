
import { Loader2, Cloud, Sun, CloudRain } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="text-center py-8">
      <div className="relative mb-6">
        {/* Main spinner */}
        <Loader2 className="w-16 h-16 text-white animate-spin mx-auto" />
        
        {/* Animated weather icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Cloud className="w-6 h-6 text-white/60 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-white text-xl font-semibold">
          Analyzing Weather...
        </h3>
        <p className="text-white/80">
          Our AI is examining your image for weather patterns
        </p>
      </div>
      
      {/* Animated progress dots */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
