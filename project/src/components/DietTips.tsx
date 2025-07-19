import React from 'react';
import { Lightbulb, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface DietTipsProps {
  foodName: string;
  nutrition: any;
  translations: any;
}

export default function DietTips({ foodName, nutrition, translations }: DietTipsProps) {
  const generateTips = () => {
    const tips = [];
    
    if (nutrition.protein > 15) {
      tips.push({
        type: 'positive',
        icon: CheckCircle,
        text: translations.highProteinTip,
      });
    }
    
    if (nutrition.fiber > 5) {
      tips.push({
        type: 'positive',
        icon: CheckCircle,
        text: translations.highFiberTip,
      });
    }
    
    if (nutrition.fat > 20) {
      tips.push({
        type: 'warning',
        icon: AlertCircle,
        text: translations.highFatTip,
      });
    }
    
    if (nutrition.iron > 5) {
      tips.push({
        type: 'positive',
        icon: CheckCircle,
        text: translations.goodIronTip,
      });
    }
    
    if (nutrition.calcium > 100) {
      tips.push({
        type: 'positive',
        icon: CheckCircle,
        text: translations.goodCalciumTip,
      });
    }
    
    if (nutrition.vitaminC > 10) {
      tips.push({
        type: 'positive',
        icon: CheckCircle,
        text: translations.goodVitaminCTip,
      });
    }
    
    // General tips
    tips.push({
      type: 'info',
      icon: Info,
      text: translations.balancedDietTip,
    });
    
    tips.push({
      type: 'info',
      icon: Info,
      text: translations.hydrationTip,
    });
    
    return tips;
  };

  const tips = generateTips();

  const getIconColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'from-green-400/20 to-green-600/20 border-green-400/30';
      case 'warning':
        return 'from-yellow-400/20 to-yellow-600/20 border-yellow-400/30';
      case 'info':
        return 'from-blue-400/20 to-blue-600/20 border-blue-400/30';
      default:
        return 'from-gray-400/20 to-gray-600/20 border-gray-400/30';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{translations.dietTips}</h3>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-r ${getBgColor(tip.type)} backdrop-blur-sm border rounded-xl p-4 hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 ${getIconColor(tip.type)} mt-1 flex-shrink-0`} />
                <p className="text-white leading-relaxed">{tip.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}