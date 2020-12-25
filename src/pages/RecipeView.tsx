import React from 'react';
import { Link } from 'react-router-dom';
import { Ingredient, Recipe } from '../models';
import '../App.css';

function Tag(props: {text: string}) {
  const url = "/tags/" + props.text
  return <Link to={url}>{props.text}</Link>
}

export default function RecipeView(props: Recipe) {
  const tagHTML = props.tags.map((tag, i) => {
    return (<span key={i}><Tag text={tag} />{(i + 1) !== props.tags.length ? "," : ""} </span>)
  });

  const ingredients = props.ingredients.map((i: Ingredient) => {
    return (
      <li className="ingredient">
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

  // TODO: Use more semantic tags here
  // TODO: Add whatever schema stuff we need for this to be portable
  return (
    <div className="recipe-page">
      <h1 className="recipe-name">{props.title}</h1>
      <div className="recipe-meta">
        <span className="recipe-serves">Yield {props.serves}</span>
        <span className="recipe-time">Time {props.time}</span>
        <a href={props.sourceURL} className="recipe-source">Source</a>
      </div>
      <div className="recipe-header">
        <p className="recipe-description">{props.bodyText}</p>
        <img className="recipe-picture" src={props.imgUrl} alt={props.title}/>
      </div>
      <div className="recipe-tags">{tagHTML}</div>
      <div className="recipe-body">
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">{ingredients}</ul>
        </div>
        <div className="recipe-steps">
          <h2>Preparation</h2>
          <ol className="prep-steps">{steps}</ol>
        </div>
      </div>
    </div>
  );
}
