import React, { useEffect, useState } from "react";

import matter from "gray-matter";

import "./App.css";
import { RecipeWrapper } from "./pages/RecipeView";
import CookbookView from "./pages/CookbookView";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CookbookData, Recipe } from "./models";
import SettingsView from "./pages/SettingsView";
import { SearchView } from "./pages/SearchView";
import { AppSettings, SettingsContext } from "./Settings";
import Sidebar from "./components/Sidebar";
import { TagCloudView, TagPageWrapper } from "./pages/TagsView";

function parseChowdownMd(id: number, data: string): Recipe {
  const parsed = matter(data);
  console.log(parsed);

  const title = parsed.data.title;
  const tags = parsed.data.tags.split(",").map((t: string) => t.trim());
  const imgUrl = parsed.data.image;
  const steps = parsed.data.directions;
  const ingredients = parsed.data.ingredients.map((s: string) => {
    // want to look for "N" or "N/M" or "N and M" or "N or M"
    return { amount: "", item: s };
  });
  const serves = parsed.data.yield;
  const time = parsed.data.time;
  const sourceURL = parsed.data.sourceURL;
  const sourceAuthor = parsed.data.sourceAuthor;

  return {
    id,
    title,
    tags,
    imgUrl,
    steps,
    serves,
    sourceURL,
    sourceAuthor,
    time,
    ingredients,
    bodyText: parsed.content,
  };
}

function makeTagGroups(recipes: Recipe[]): { [tag: string]: Recipe[] } {
  const mapping: { [tag: string]: Recipe[] } = {};
  for (const r of recipes) {
    for (const t of r.tags) {
      if (!(t in mapping)) {
        mapping[t] = [];
      }
      mapping[t].push(r);
    }
  }

  return mapping;
}

export default function App() {
  const [cookbook, setCookbook] = useState<CookbookData>();
  const [tagIndex, setTagIndex] = useState<{ [tag: string]: Recipe[] }>({});
  const [settings, setSettings] = useState<AppSettings>({
    dataRootURL: process.env.PUBLIC_URL + "/recipes/",
    indexFile: "README.md?raw=true",
    theme: "light",
    sidebarCompact: true,
  });

  // TODO: This is really bad, but it works.
  // Fix this when I better understand async again. I wish it was as easy as go.
  useEffect(() => {
    async function load() {
      const resp = await fetch(settings.dataRootURL + settings.indexFile);
      const data = await resp.text();

      const parsed = matter(data);

      const recipes = parsed.data.recipes.map(
        async (name: string, i: number) => {
          const recipeResp = await fetch(
            settings.dataRootURL + "recipes/" + name + ".md?raw=true"
          );
          const recipeData = await recipeResp.text();
          return parseChowdownMd(i, recipeData);
        }
      );

      Promise.all(recipes).then((rs: any) => {
        const book = {
          title: parsed.data.title,
          description: parsed.content,
          recipes: rs,
        };
        setCookbook(book);
      });
    }

    load();
  }, [settings]);

  useEffect(() => {
    if (cookbook) {
      const i = makeTagGroups(cookbook.recipes);
      setTagIndex(i);
    }
  }, [cookbook]);

  if (settings.dataRootURL === "") {
    return <div />;
  } else if (settings.indexFile === "") {
    return <div />;
  }

  if (cookbook === undefined) {
    return <div>Loading...</div>;
  }

  function updateTheme(theme: string) {
    console.log(theme);
    setSettings({ ...settings, theme });
  }

  function updateCompact(sidebarCompact: boolean) {
    setSettings({ ...settings, sidebarCompact });
  }

  return (
    <SettingsContext.Provider value={settings}>
      <BrowserRouter basename="cilantro" >
        <div className={"app app-theme-" + settings.theme}>
          <Sidebar />
          <main className="app-content">
            <Switch>
              <Route path="/r/:id">
                <RecipeWrapper recipes={cookbook.recipes} />
              </Route>
              <Route path="/tags/:tag">
                <TagPageWrapper index={tagIndex} />
              </Route>
              <Route path="/tags/">
                <TagCloudView index={tagIndex} />
              </Route>
              <Route path="/search/">
                <SearchView recipes={cookbook.recipes} />
              </Route>
              <Route path="/settings/">
                <SettingsView
                  onUpdate={updateTheme}
                  updateCompact={updateCompact}
                />
              </Route>
              <Route path="/">
                <CookbookView {...cookbook} />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </SettingsContext.Provider>
  );
}
