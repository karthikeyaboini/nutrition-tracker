import React from 'react';
import { TrendingUp, Heart, Shield, Zap } from 'lucide-react';

interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  iron: number;
  calcium: number;
  vitaminC: number;
  vitaminA: number;
}

interface NutritionDisplayProps {
  nutrition: NutritionData;
  foodName: string;
  grams: number;
  translations: any;
}

export default function NutritionDisplay({ nutrition, foodName, grams, translations }: NutritionDisplayProps) {
  const nutritionItems = [
    { name: translations.calories, value: nutrition.calories, unit: 'kcal', color: 'from-red-400 to-red-600', icon: Zap },
    { name: translations.protein, value: nutrition.protein, unit: 'g', color: 'from-blue-400 to-blue-600', icon: TrendingUp },
    { name: translations.carbs, value: nutrition.carbs, unit: 'g', color: 'from-yellow-400 to-yellow-600', icon: Zap },
    { name: translations.fat, value: nutrition.fat, unit: 'g', color: 'from-purple-400 to-purple-600', icon: Heart },
    { name: translations.fiber, value: nutrition.fiber, unit: 'g', color: 'from-green-400 to-green-600', icon: Shield },
    { name: translations.iron, value: nutrition.iron, unit: 'mg', color: 'from-gray-400 to-gray-600', icon: Shield },
    { name: translations.calcium, value: nutrition.calcium, unit: 'mg', color: 'from-indigo-400 to-indigo-600', icon: Shield },
    { name: translations.vitaminC, value: nutrition.vitaminC, unit: 'mg', color: 'from-orange-400 to-orange-600', icon: Heart },
    { name: translations.vitaminA, value: nutrition.vitaminA, unit: 'μg', color: 'from-pink-400 to-pink-600', icon: Heart },
  ];

  const getPercentage = (value: number, nutrient: string) => {
    const dailyValues: { [key: string]: number } = {
      calories: 2000,
      protein: 50,
      carbs: 300,
      fat: 65,
      fiber: 25,
      iron: 18,
      calcium: 1000,
      vitaminC: 90,
      vitaminA: 900,
    };
    
    const daily = dailyValues[nutrient] || 100;
    return Math.min((value / daily) * 100, 100);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          {translations.nutritionFor} {grams}g {translations.of} {foodName}
        </h3>
        <p className="text-white/80">{translations.dailyValuePercentage}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nutritionItems.map((item, index) => {
          const percentage = getPercentage(item.value, item.name.toLowerCase());
          const Icon = item.icon;
          
          return (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{item.name}</span>
                </div>
                <span className="text-lg font-bold text-white">
                  {item.value.toFixed(1)}{item.unit}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-white/80 mb-1">
                  <span>{percentage.toFixed(1)}%</span>
                  <span>{translations.dailyValue}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}