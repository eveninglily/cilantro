import React, { useEffect, useState } from 'react';

import matter from 'gray-matter'

import './App.css';
import RecipePage, { Recipe } from './RecipePage';
import Collection from './Collection';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import { Book, Home, Search, Tag } from 'react-feather';


const dataRootURL = "http://localhost:3000/recipes/";

function parseChowdownMd(id: number, data: string): Recipe {
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
    id,
    title,
    tags,
    imgUrl,
    steps,
    ingredients,
    bodyText: parsed.content
  }

}

export interface CookbookData {
  title: string;
  recipes: Recipe[];
  //collections: Collection
  body: string;
}

export default function App() {
  const [cookbook, setCookbook] = useState<CookbookData>();

  // TODO: This is really bad, but it works.
  // Fix this when I better understand async again. I wish it was as easy as go.
  useEffect(() => {
    async function load() {
      const resp = await fetch(dataRootURL + "README.md")
      const data = await resp.text()

      const parsed = matter(data)

      const recipes = parsed.data.recipes.map(async (name: string, i: number) => {
        const recipeResp = await fetch(dataRootURL + "recipes/" + name)
        const recipeData = await recipeResp.text()
        return parseChowdownMd(i, recipeData);
      });

      Promise.all(recipes).then((rs: any) => {
        const book = {
          title: parsed.data.title,
          body: parsed.content,
          recipes: rs
        }
        setCookbook(book);
      });
    }

    load();
  }, []);

  if (cookbook === undefined) {
    return <div>Loading...</div>
  }

  return (
    <Router>

    <div className="app">
      <div className="app-sidebar">
        <div className="app-sidebar-body">
        <Link className="app-sidebar-link" to="/">
          <Home/> <span>Home</span>
        </Link>
        <Link className="app-sidebar-link" to="/">
          <Book/> <span>Collections</span>
        </Link>
        <Link className="app-sidebar-link" to="/">
          <Tag /> <span>Tags</span>
        </Link>
        <Link className="app-sidebar-link" to="/">
          <Search /> <span>Search</span>
        </Link>
        </div>
        <div className="app-sidebar-footer">
          <i>Cilantro v0</i> &middot; Made with 🌿
        </div>
      </div>
      <div className="app-content">
      <Switch>
          <Route path="/r/:id">
            <RecipeWrapper recipes={cookbook.recipes}/>
          </Route>

          <Route path="/">
            <Collection {...cookbook} />
          </Route>
        </Switch>
      </div>
    </div>

    </Router>
  );
}

interface RecipeWrapperProps {
  recipes: Recipe[]
}

interface RecipeWrapperParams {
  id: string;
}

function RecipeWrapper(props: RecipeWrapperProps) {
  const { id } = useParams<RecipeWrapperParams>();
  const x = Number(id);
  return <RecipePage {...props.recipes[x]} />
}