# 🌿 Cilantro

Cilantro is a plaintext recipe viewer. Store your recipes as text files, but get all the benefits of a rich viewer. Inspired by [Chowdown](https://chowdown.io), but written from the ground up in React.

# Recipe Format

Recipes are stored as `markdown` files, with all the action happening in the front matter section.

TODO: Put an actual recipe here :)

```markdown
---
---
layout: recipe
title: "Foolproof Pan Pizza"
image: pizza.jpg
tags: dinner, party

yield: 2 servings
time: 15 minutes, 24hr waiting period

sourceURL: https://www.seriouseats.com/recipes/2013/01/foolproof-pan-pizza-recipe.html
sourceAuthor: J. Kenji López-Alt

ingredients:
  - 400g bread flour
  - 10g kosher salt
  - 4g instant yeast
  - 275g water
  - 8g EVOO
  - pizza sauce
  - mozzarella
  - other toppings

directions:
  - Step 1
  - Step 2
  - Step 3
  - Step 4
---

This is the body of the recipe! This text is mostly just here for notes, or meta info, etc

```

As of now, anything that works in Chowdown should work here. We're working on adding support for richer information without breaking backwards compatibility and exportability.

Long-term, I'd like to support importing other recipe formats into this one.

## Index
Right now, you need to create a `README.md` file formatted in this way to import recipes.

TODO: document this more & talk about plans to loosen it
```markdown
---
title: "Evan's Recipes"
recipes:
  - myrecipe
---

This is my cookbook!

This supports several lines.

It does not currently support any other markdown formatting, but might in the future!
```

## Exportability

Since all the recipes are stored in plaintext, it's very easy to export them, back them up, and sync with your service of choice.

The recipe pages also have

- https://schema.org/Recipe data
- Required markup for h-recipe and hRecipe formats

# Getting Started

TODO

## Why not create this as a Jekyll/Hugo/etc. theme instead?

I gave _a lot_ of thought to this. Ultimately, I think that while the basic features can be done better by these static site generators, some of the more advanced features would be difficult to replicate.