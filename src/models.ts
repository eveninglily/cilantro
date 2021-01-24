// A "Cookbook" is a collection of recipes
export interface CookbookData {
  title: string;
  description: string;
  recipes: Recipe[];
}

export interface Ingredient {
  amount: string;
  // TODO: name this better.
  item: string;
}

// it's probably okay if we just make everything a string
export interface Recipe {
  id: number;
  title: string;
  serves?: string;
  time?: string;
  bodyText?: string;
  imgUrl?: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  sourceURL?: string;
  sourceAuthor?: string;
  raw?: string;
}
