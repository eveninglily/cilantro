import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Ingredient, Recipe } from '../models';
import '../App.css';

function Tag(props: {text: string}) {
  const url = "/tags/" + props.text
  return <Link to={url}>{props.text}</Link>
}

export function RecipeWrapper(props: {recipes: Recipe[]}) {
  const { id } = useParams<{id: string}>();
  const x = Number(id);
  return <RecipeView {...props.recipes[x]} />
}

export default function RecipeView(props: Recipe) {
  const tagHTML = props.tags.map((tag, i) => {
    return (<span className="recipe-tag" key={i}><Tag text={tag} />{(i + 1) !== props.tags.length ? "," : ""} </span>)
  });

  const ingredients = props.ingredients.map((i: Ingredient) => {
    // TODO: Add hrecipe unit stuff
    return (
      <li className="ingredient p-ingredient">
        <span className="ingredient-amount">{i.amount}</span>
        <span className="ingredient-item">{i.item}</span>
      </li>
    );
  });

  const steps = props.steps.map(s => {
    return (
      <li className="prep-step">
        <p className="prep-step-text">{s}</p>
      </li>
    )
  });

  const imgURL = process.env.PUBLIC_URL + "/recipes/images/" + props.imgUrl

  return (
    <article className="recipe hRecipe h-recipe">
      <h1 className="recipe-title fn p-name">{props.title}</h1>
      <header className="recipe-meta">
        {props.serves && <span className="recipe-serves yield"><b>Yield</b> {props.serves}</span>}
        {props.time && <span className="recipe-time"><b>Time</b> {props.time}</span>}
        {props.sourceURL && <span><b>Source</b> <a href={props.sourceURL} className="recipe-source">Link</a></span>}
        {props.sourceAuthor && <span className="recipe-author"><b>By</b> {props.sourceAuthor} </span>}
      </header>
      <div className="recipe-info">
        <p className="recipe-description p-summary summary">{props.bodyText}</p>
        <img className="recipe-picture u-photo photo" src={imgURL} alt={props.title}/>
      </div>
      <div className="recipe-tags">{tagHTML}</div>
      <div className="recipe-body">
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">{ingredients}</ul>
        </div>
        <div className="recipe-steps">
          <h2>Preparation</h2>
          <ol className="prep-steps instructions e-instructions">{steps}</ol>
        </div>
      </div>
      <RecipeJSONLD recipe={props} />
    </article>
  );
}

// TODO: expand this
function RecipeJSONLD(props: {recipe: Recipe}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "cookTime": props.recipe.time,
    "description": props.recipe.bodyText,
    "image": props.recipe.imgUrl,
    "recipeIngredient": props.recipe.ingredients,
    "name": props.recipe.title,
    "recipeInstructions": props.recipe.steps.join(". "),
    "recipeYield": props.recipe.serves,
  }
  return <script type="application/ld+json">
    {JSON.stringify(data)}
  </script>
}