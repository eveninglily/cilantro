export interface CookbookData {
    title: string;
    recipes: Recipe[];
    //collections: Collection
    body: string;
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
  }