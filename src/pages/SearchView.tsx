import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { Recipe } from '../models';
import CookbookView from './CookbookView';

const options = {
  includeScore: true,
  keys: [
    {
      name: 'title',
      weight: .25
    }, {
      name: 'tags',
      weight: .35
    }, {
      name: 'ingredients',
      weight: .35
    }, {
      name: 'steps',
      weight: .05
    }]
}


export function SearchView(props: {recipes: Recipe[]}) {
  const [searchText, setSearchText] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(props.recipes);



  useEffect(() => {
    const fuse = new Fuse(props.recipes, options)
    const res = fuse.search(searchText)

    // hopefully the lib already sorts by score lol
    const rec = res.map(r => r.item);
    setFilteredRecipes(rec);
  }, [props, searchText]);

  const cookbook = {
    title: "Results",
    body: "",
    recipes: filteredRecipes
  }

    return (
        <div>
          <h1>Search</h1>
            <input type='text' value={searchText} onChange={(evt) => setSearchText(evt.target.value)}/>
            <CookbookView {...cookbook} />
    </div>);
}