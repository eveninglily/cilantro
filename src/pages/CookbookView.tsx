import React from "react";
import { Link } from "react-router-dom";
import { CookbookData } from "../models";

import "../App.css";

export default function CookbookView(props: CookbookData) {
  const tiles = props.recipes.map((r) => {
    const href = "/r/" + r.id;
    const imgURL = process.env.PUBLIC_URL + "/recipes/images/" + r.imgUrl;
    return (
      <div className="cookbook-tile-wrapper">
        <Link className="cookbook-tile-text" to={href}>
          {r.title}
        </Link>
        <div
          className="cookbook-tile"
          style={{
            backgroundImage: `url(${imgURL})`,
          }}
        ></div>
      </div>
    );
  });

  return (
    <div className="cookbook-holder">
      <h1 className="cookbook-title">{props.title}</h1>
      <pre className="cookbook-description">{props.description}</pre>
      <div className="cookbook">{tiles}</div>
    </div>
  );
}
