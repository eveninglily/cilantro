# 🌿 Cilantro

Cilantro is a plaintext recipe viewer. Store your recipes as text files, but get all the benefits of a rich viewer. Inspired by [Chowdown](https://chowdown.io), but written from the ground up in React.

# 🚀 Getting Started

(TODO: Improve these docs)

There are be two main ways to use Cilantro: as a webapp, which you can host (either through Github pages or your own setup), or as an Electron app to use locally.

If you want to run your own webserver; just fork the repo, make your changes in `public/recipes`, and then `npm run deploy` to push to the `gh-pages` branch.

Electron downloads still to come

# 📘 Recipe Format

Recipes are stored as `markdown` files, with all the action happening in the front matter section.

TODO: Expand on this recipe

```markdown
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

## 📋 Index
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

## 📬 Exportability

Data portability and freedom is important. Since your Cilantro recipes are stored in plaintext, it's really easy to share, sync, or move them.

In the web version, recipe pages also contain metadata for all the recipe formats I know about:

Since all the recipes are stored in plaintext, it's very easy to export them, back them up, and sync with your service of choice.

I'm also working on allowing some sort of static generation for the web version. When that's done, pages will include
- [Recipe schema](https://schema.org/Recipe) data
- [h-recipe](https://microformats.org/wiki/h-recipe) and [hRecipe](https://microformats.org/wiki/hrecipe) markup
