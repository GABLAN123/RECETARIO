
export interface IngredientGroup {
  name: string;
  items: string[];
}

export interface Macros {
  kcal: number;
  netCarbs: number;
  fats: number;
  protein: number;
  sugar: number;
}

export interface Recipe {
  id: string;
  title: string;
  tags: string[];
  ingredientGroups: IngredientGroup[];
  steps: string[];
  chefNotes: string;
  macros: Macros;
  servings: number;
  totalTime: string;
  difficulty: 'Fácil' | 'Media' | 'Alta';
  cost: 'Económico' | 'Medio' | 'Gourmet';
}

export interface RecipeBook {
  id: string;
  title: string;
  subtitle: string;
  coverImage?: string; // Base64 or URL
  recipes: Recipe[];
  createdAt: number;
}

export interface UserSession {
  email: string;
  name?: string;
  picture?: string;
  accessToken?: string;
}
