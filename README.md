# Cilantro

Cilantro is a plaintext recipe viewer. Store your recipes as text files, but get all the benefits of a rich viewer. Inspired by [Chowdown](https://chowdown.io), but written from the ground up in React.

# Recipe Format

Recipes are stored as `markdown` files, with all the action happening in the front matter section.

TODO: Put an actual recipe here :)
```markdown
---
title: "My recipe"
image: "my-recipe.png"
tags: dinner, chicken, spicy
yield: 2 servings
ingredients:
  - 1 lb Chicken
  - .5 Tbsp cumin
  - Canola oil
  
directions:
  - Step 1
  - Step 2
  - Step 3
---

This is the body text of our example recipe!
```

As of now, anything that works in Chowdown should work here. We're working on adding support for richer information without breaking backwards compatibility and exportability.

Long-term, I'd like to support importing other recipe formats into this one.

## Exportability

Since all the recipes are stored in plaintext, it's very easy to export them, back them up, and sync with your service of choice.

The recipe pages also have

- rich embed data
- https://schema.org/Recipe data
- Required markup for h-recipe and hRecipe formats

# Getting Started

TODO
