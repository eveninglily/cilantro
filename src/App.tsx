import React, { useEffect, useState } from 'react';

import matter from 'gray-matter'

import './App.css';
import RecipePage, { Recipe } from './RecipePage';

const dataRootURL = "http://localhost:3000/recipes/";

function parseChowdownMd(data: string): Recipe {
  const parsed = matter(data)
  console.log(parsed)

  const title = parsed.data.title;
  const tags = parsed.data.tags.split(",");
  const imgUrl = parsed.data.image;
  const steps = parsed.data.directions;
  const ingredients = parsed.data.ingredients.map((s: string) => {
    // want to look for "N" or "N/M" or "N and M" or "N or M"
    return {amount: "", item: s}
  })

  return {
    title,
    tags,
    imgUrl,
    steps,
    ingredients,
    bodyText: parsed.content
  }

}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  // TODO: This is really bad, but it works.
  // Fix this when I better understand async again. I wish it was as easy as go.
  useEffect(() => {
    async function load() {
      const resp = await fetch(dataRootURL + "index.json")
      const data = await resp.json()

      const recipes = data.recipes.map(async (name: string) => {
        const recipeResp = await fetch(dataRootURL + name)
        const recipeData = await recipeResp.text()
        return parseChowdownMd(recipeData);
      });

      Promise.all(recipes).then((rs: any) => {
        setRecipes(rs)
      });
    }

    load();
  }, []);

  const links = recipes.map((r, i) => {
    return <span key={i}>{r.title}</span>
  })

  return (
    <div className="App">
      {links}
    </div>
  );
}

export default App;
