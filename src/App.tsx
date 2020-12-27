import React, { useEffect, useState } from 'react';

import matter from 'gray-matter'

import './App.css';
import RecipeView from './pages/RecipeView';
import CookbookView from './pages/CookbookView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import { Home, Search, Settings, Tag } from 'react-feather';
import { CookbookData, Recipe } from './models';
import SettingsView from './pages/SettingsView';
import { SearchView } from './pages/SearchView';


const dataRootURL = "http://localhost:3000/recipes/";

function parseChowdownMd(id: number, data: string): Recipe {
  const parsed = matter(data)
  console.log(parsed)

  const title = parsed.data.title;
  const tags = parsed.data.tags.split(",").map((t: string) => t.trim());
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

function makeTagGroups(recipes: Recipe[]): {[tag: string]: Recipe[]} {
  const mapping: {[tag: string]: Recipe[]} = {};
  for (let r of recipes) {
    for (const t of r.tags) {
      if (!(t in mapping)) {
        mapping[t] = [];
      }
      mapping[t].push(r)
    }
  }

  return mapping
}

export default function App() {
  const [cookbook, setCookbook] = useState<CookbookData>();
  const [tagIndex, setTagIndex] = useState<{[tag: string]: Recipe[]}>({});
  const [theme, setTheme] = useState("light");

  // TODO: This is really bad, but it works.
  // Fix this when I better understand async again. I wish it was as easy as go.
  useEffect(() => {
    async function load() {
      const resp = await fetch(dataRootURL + "README.md")
      const data = await resp.text()

      const parsed = matter(data)

      const recipes = parsed.data.recipes.map(async (name: string, i: number) => {
        const recipeResp = await fetch(dataRootURL + "recipes/" + name + ".md")
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

  useEffect(() => {
    if (cookbook) {
      const i = makeTagGroups(cookbook.recipes);
      setTagIndex(i);
    }
  }, [cookbook])

  if (cookbook === undefined) {
    return <div>Loading...</div>
  }

  let emoji;
  switch (theme) {
    case "red": {
      emoji = "🍎";
      break;
    }
    case "blue": {
      emoji = "🫐";
      break;
    }
    case "green": {
      emoji = "🍈";
      break;
    }
    case "dark": {
      emoji = "🍇";
      break;
    }
    default: {
      emoji = "🌿";
    }

  }

  return (
    <Router>

    <div className={"app app-theme-" + theme}>
      <div className="app-sidebar">
        <div className="app-sidebar-body">
          <Link className="app-sidebar-link" to="/">
            <Home/> <span>Home</span>
          </Link>
          <Link className="app-sidebar-link" to="/tags">
            <Tag /> <span>Tags</span>
          </Link>
          <Link className="app-sidebar-link" to="/search">
            <Search /> <span>Search</span>
          </Link>
          <Link className="app-sidebar-link" to="/settings/">
            <Settings /> <span>Settings</span>
          </Link>
        </div>
        <div className="app-sidebar-footer">
          <i>Cilantro v0</i> &middot; Made with {emoji}
        </div>
      </div>
      <div className="app-content">
      <Switch>
          <Route path="/r/:id">
            <RecipeWrapper recipes={cookbook.recipes}/>
          </Route>
          <Route path="/tags/:tag">
            <TagPageWrapper index={tagIndex}/>
          </Route>
          <Route path="/tags/">
            <TagCloudView index={tagIndex} />
          </Route>
          <Route path="/search/">
            <SearchView recipes={cookbook.recipes}/>
          </Route>
          <Route path="/settings/">
            <SettingsView onUpdate={setTheme}/>
          </Route>
          <Route path="/">
            <CookbookView {...cookbook} />
          </Route>
        </Switch>
      </div>
    </div>

    </Router>
  );
}

function TagCloudView(props: {index: {[tag: string]: Recipe[]}}) {
  const tags = [];
  for(const t in props.index) {
    tags.push(t);
  }

  const tLinks = tags.map((t, i) => {
    const url = "/tags/" + t
    return <span key={i}><Link to={url}>{t}</Link>{(i + 1) !== tags.length ? "," : ""}</span>;
  });

  return <div>{tLinks}</div>
}

function TagPageWrapper(props: {index: {[tag: string]: Recipe[]}}) {
  const { tag } = useParams<{ tag: string }>();
  const tagbookData = {
    title: tag,
    body: "",
    recipes: props.index[tag],
  }
  return <CookbookView {...tagbookData} />
}

function RecipeWrapper(props: {recipes: Recipe[]}) {
  const { id } = useParams<{id: string}>();
  const x = Number(id);
  return <RecipeView {...props.recipes[x]} />
}