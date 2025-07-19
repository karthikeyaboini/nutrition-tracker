import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import FoodSearch from './components/FoodSearch';
import NutritionDisplay from './components/NutritionDisplay';
import DietTips from './components/DietTips';
import { translations } from './data/translations';
import { calculateNutrition, NutritionData } from './data/nutritionData';

function App() {
  const [language, setLanguage] = useState('en');
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [selectedGrams, setSelectedGrams] = useState(0);
  const [nutrition, setNutrition] = useState<NutritionData | null>(null);

  const currentTranslations = translations[language as keyof typeof translations];

  const handleFoodSelect = (food: string, grams: number) => {
    setSelectedFood(food);
    setSelectedGrams(grams);
    const nutritionData = calculateNutrition(food, grams);
    setNutrition(nutritionData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-cover bg-center rounded-full filter blur-sm"
             style={{
               backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800")',
               transform: 'rotate(-15deg) scale(1.2)',
             }}
        />
        <div className="absolute top-1/4 right-0 w-1/4 h-1/3 bg-cover bg-center rounded-full filter blur-sm"
             style={{
               backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800")',
               transform: 'rotate(20deg) scale(1.1)',
             }}
        />
        <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-cover bg-center rounded-full filter blur-sm"
             style={{
               backgroundImage: 'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800")',
               transform: 'rotate(-10deg) scale(1.3)',
             }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-purple-600/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{currentTranslations.title}</h1>
                <p className="text-white/80">{currentTranslations.subtitle}</p>
              </div>
            </div>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Food Search */}
            <FoodSearch
              onFoodSelect={handleFoodSelect}
              translations={currentTranslations}
            />

            {/* Results */}
            {selectedFood && nutrition && (
              <div className="space-y-8">
                <NutritionDisplay
                  nutrition={nutrition}
                  foodName={selectedFood}
                  grams={selectedGrams}
                  translations={currentTranslations}
                />
                <DietTips
                  foodName={selectedFood}
                  nutrition={nutrition}
                  translations={currentTranslations}
                />
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-6 text-center">
          <p className="text-white/60 text-sm">
            {currentTranslations.title} - {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;