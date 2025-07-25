export interface NutritionData {
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

// Nutrition data per 100g
export const nutritionDatabase: { [key: string]: NutritionData } = {
  'Rice': {
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    iron: 1.2,
    calcium: 3,
    vitaminC: 0,
    vitaminA: 0,
  },
  'Wheat': {
    calories: 340,
    protein: 13.2,
    carbs: 71.2,
    fat: 1.5,
    fiber: 12.2,
    iron: 3.2,
    calcium: 30,
    vitaminC: 0,
    vitaminA: 0,
  },
  'Chicken': {
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    iron: 1,
    calcium: 11,
    vitaminC: 0,
    vitaminA: 16,
  },
  'Fish': {
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 12,
    fiber: 0,
    iron: 1.5,
    calcium: 25,
    vitaminC: 0,
    vitaminA: 50,
  },
  'Milk': {
    calories: 42,
    protein: 3.4,
    carbs: 4.8,
    fat: 1,
    fiber: 0,
    iron: 0.1,
    calcium: 113,
    vitaminC: 0,
    vitaminA: 31,
  },
  'Eggs': {
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    fiber: 0,
    iron: 1.8,
    calcium: 50,
    vitaminC: 0,
    vitaminA: 160,
  },
  'Banana': {
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    fiber: 2.6,
    iron: 0.3,
    calcium: 5,
    vitaminC: 8.7,
    vitaminA: 3,
  },
  'Apple': {
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    iron: 0.1,
    calcium: 6,
    vitaminC: 4.6,
    vitaminA: 3,
  },
  'Spinach': {
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    iron: 2.7,
    calcium: 99,
    vitaminC: 28.1,
    vitaminA: 469,
  },
  'Carrot': {
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    iron: 0.3,
    calcium: 33,
    vitaminC: 5.9,
    vitaminA: 835,
  },
  'Potato': {
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    iron: 1.1,
    calcium: 12,
    vitaminC: 19.7,
    vitaminA: 0,
  },
  'Tomato': {
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    iron: 0.3,
    calcium: 10,
    vitaminC: 13.7,
    vitaminA: 42,
  },
  'Onion': {
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    fiber: 1.7,
    iron: 0.2,
    calcium: 23,
    vitaminC: 7.4,
    vitaminA: 0,
  },
  'Lentils': {
    calories: 353,
    protein: 25,
    carbs: 60,
    fat: 1.1,
    fiber: 10.7,
    iron: 6.5,
    calcium: 35,
    vitaminC: 1.5,
    vitaminA: 8,
  },
  'Yogurt': {
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    iron: 0.1,
    calcium: 110,
    vitaminC: 0,
    vitaminA: 27,
  },
  'Almonds': {
    calories: 576,
    protein: 21,
    carbs: 22,
    fat: 49,
    fiber: 12,
    iron: 3.9,
    calcium: 269,
    vitaminC: 0,
    vitaminA: 0,
  },
  'Cashews': {
    calories: 553,
    protein: 18,
    carbs: 30,
    fat: 44,
    fiber: 3.3,
    iron: 6.7,
    calcium: 37,
    vitaminC: 0.5,
    vitaminA: 0,
  },
  'Oats': {
    calories: 389,
    protein: 16.9,
    carbs: 66,
    fat: 6.9,
    fiber: 10.6,
    iron: 4.7,
    calcium: 54,
    vitaminC: 0,
    vitaminA: 0,
  },
  'Quinoa': {
    calories: 368,
    protein: 14,
    carbs: 64,
    fat: 6,
    fiber: 7,
    iron: 4.6,
    calcium: 47,
    vitaminC: 0,
    vitaminA: 1,
  },
  'Broccoli': {
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    fiber: 2.6,
    iron: 0.7,
    calcium: 47,
    vitaminC: 89.2,
    vitaminA: 31,
  },
};

export const calculateNutrition = (foodName: string, grams: number): NutritionData => {
  const baseNutrition = nutritionDatabase[foodName];
  if (!baseNutrition) {
    // Default values for unknown foods
    return {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      iron: 0,
      calcium: 0,
      vitaminC: 0,
      vitaminA: 0,
    };
  }

  const multiplier = grams / 100;
  return {
    calories: Math.round(baseNutrition.calories * multiplier),
    protein: Math.round(baseNutrition.protein * multiplier * 10) / 10,
    carbs: Math.round(baseNutrition.carbs * multiplier * 10) / 10,
    fat: Math.round(baseNutrition.fat * multiplier * 10) / 10,
    fiber: Math.round(baseNutrition.fiber * multiplier * 10) / 10,
    iron: Math.round(baseNutrition.iron * multiplier * 10) / 10,
    calcium: Math.round(baseNutrition.calcium * multiplier),
    vitaminC: Math.round(baseNutrition.vitaminC * multiplier * 10) / 10,
    vitaminA: Math.round(baseNutrition.vitaminA * multiplier),
  };
};