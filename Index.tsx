import React from 'react';
import logo from './logo.svg';
import './App.css';

function RecipeTile() {
  return <div/>;
}

export default function Index() {
  const recipes = [];

  const tiles = recipes.map((t) => {
    return <RecipeTile/>
  })

  // TODO: CSS for flex view
  return (
    <div>
      <h1>Recipes</h1>
      <hr/>
      <div>
        {tiles}
      </div>
    </div>
  );
}
