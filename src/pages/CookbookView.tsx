import React from 'react';
import { Link } from 'react-router-dom';
import { CookbookData } from '../models';

import "../App.css"

export default function CookbookView(props: CookbookData) {
  const tiles = props.recipes.map(r => {
    const href = "/r/" + r.id;
    const imgURL = process.env.PUBLIC_URL + "/recipes/images/" + r.imgUrl;
    return (
      <div className="collection-tile-wrapper">
        <div className="collection-tile" style={{ 
        backgroundImage: `url(${imgURL})` 
      }}></div>
      <Link className="collection-tile-text" to={href}>{r.title}</Link>
      </div>
      
    )
  });

  return (
    <div className="collection-holder">
      <h1 className="collection-title">{props.title}</h1>
      <pre className="collection-description">{props.body}</pre>
      <div className="collection">{tiles}</div>
    </div>
  );
}