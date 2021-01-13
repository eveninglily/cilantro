import React from "react";
import { Link } from "react-router-dom";
import { CookbookData, Recipe } from "../models";

import "../App.css";

function CookbookTile(props: Recipe) {
  const href = "/r/" + props.id;
  const imgURL = process.env.PUBLIC_URL + "/recipes/images/" + props.imgUrl;
  const desc = props.bodyText && props.bodyText.substring(0, 100) + "...";

  return (
    <div className="cookbook-tile">
      <div
        className="cookbook-tile-image"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      >
        <Link className="cookbook-tile-title" to={href}>
          {props.title}
        </Link>
      </div>
      <div className="cookbook-tile-text">{desc}</div>
    </div>
  );
}

export default function CookbookView(props: CookbookData) {
  const tiles = props.recipes.map((r) => {
    return CookbookTile(r);
  });

  return (
    <div className="cookbook-holder">
      <h1 className="cookbook-title">{props.title}</h1>
      <pre className="cookbook-description">{props.description}</pre>
      <div className="cookbook">{tiles}</div>
    </div>
  );
}
