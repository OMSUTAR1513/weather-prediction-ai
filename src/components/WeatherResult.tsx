
import { Sun, Cloud, CloudRain, Snowflake, Wind, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface WeatherResultProps {
  prediction: {
    className: string;
    probability: number;
    predictions: Array<{
      className: string;
      probability: number;
    }>;
  };
  onReset: () => void;
}

const WeatherResult = ({ prediction, onReset }: WeatherResultProps) => {
  const getWeatherIcon = (weatherType: string) => {
    const type = weatherType.toLowerCase();
    if (type.includes('sunny') || type.includes('clear')) {
      return <Sun className="w-8 h-8 text-yellow-400" />;
    } else if (type.includes('cloud')) {
      return <Cloud className="w-8 h-8 text-gray-300" />;
    } else if (type.includes('rain') || type.includes('storm')) {
      return <CloudRain className="w-8 h-8 text-blue-400" />;
    } else if (type.includes('snow')) {
      return <Snowflake className="w-8 h-8 text-blue-200" />;
    } else {
      return <Wind className="w-8 h-8 text-gray-400" />;
    }
  };

  const getConfidenceColor = (probability: number) => {
    if (probability >= 0.8) return 'text-green-400';
    if (probability >= 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressColor = (probability: number) => {
    if (probability >= 0.8) return 'bg-green-500';
    if (probability >= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Main Prediction */}
      <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          {getWeatherIcon(prediction.className)}
          <h3 className="text-3xl font-bold text-white">
            {prediction.className}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-white/80">Confidence:</span>
          <span className={`text-2xl font-bold ${getConfidenceColor(prediction.probability)}`}>
            {Math.round(prediction.probability * 100)}%
          </span>
        </div>
        <Progress
          value={prediction.probability * 100}
          className="w-full h-3 bg-white/20"
        />
      </div>

      {/* Reset Button */}
      <Button
        onClick={onReset}
        variant="outline"
        className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Try Another Image
      </Button>
    </div>
  );
};

export default WeatherResult;
