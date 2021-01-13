import React from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../models";
import CookbookView from "./CookbookView";

export function TagCloudView(props: { index: { [tag: string]: Recipe[] } }) {
  const tags = [];

  for (const t in props.index) {
    tags.push(t);
  }

  const tLinks = tags.map((t, i) => {
    const url = "/tags/" + t;
    return (
      <span className="recipe-tags" key={i}>
        <Link to={url}>{t}</Link>
        {i + 1 !== tags.length ? "," : ""}
      </span>
    );
  });

  return (
    <div>
      <h1>Tags</h1>
      {tLinks}
    </div>
  );
}

export function TagPageWrapper(props: { index: { [tag: string]: Recipe[] } }) {
  const { tag } = useParams<{ tag: string }>();
  const tagbookData = {
    title: "Tag: " + tag,
    description: "",
    recipes: props.index[tag],
  };
  return <CookbookView {...tagbookData} />;
}
