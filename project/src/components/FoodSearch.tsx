import React, { useState } from 'react';
import { Search, Utensils } from 'lucide-react';

interface FoodSearchProps {
  onFoodSelect: (food: string, grams: number) => void;
  translations: any;
}

const popularFoods = [
  'Rice', 'Wheat', 'Chicken', 'Fish', 'Milk', 'Eggs', 'Banana', 'Apple', 'Spinach', 'Carrot',
  'Potato', 'Tomato', 'Onion', 'Lentils', 'Yogurt', 'Almonds', 'Cashews', 'Oats', 'Quinoa', 'Broccoli'
];

export default function FoodSearch({ onFoodSelect, translations }: FoodSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [grams, setGrams] = useState(100);
  const [selectedFood, setSelectedFood] = useState('');

  const filteredFoods = popularFoods.filter(food =>
    food.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFood && grams > 0) {
      onFoodSelect(selectedFood, grams);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
          <Utensils className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">{translations.searchTitle}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={translations.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        {searchTerm && (
          <div className="max-h-40 overflow-y-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
            {filteredFoods.map((food) => (
              <button
                key={food}
                type="button"
                onClick={() => {
                  setSelectedFood(food);
                  setSearchTerm(food);
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/20 transition-colors text-white"
              >
                {food}
              </button>
            ))}
          </div>
        )}

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white mb-2">
              {translations.quantity}
            </label>
            <input
              type="number"
              min="1"
              max="1000"
              value={grams}
              onChange={(e) => setGrams(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={!selectedFood || grams <= 0}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              {translations.analyze}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}