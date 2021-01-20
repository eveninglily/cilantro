# 🌿 Cilantro

Cilantro is a plaintext recipe viewer. Store your recipes as text files, but get all the benefits of a rich viewer. Inspired by [Chowdown](https://chowdown.io), but written from the ground up in React.

# 🚀 Getting Started

## 📑 As a website

Here's how to deploy on Github pages. If you want to deploy to another environment, just replace `npm run deploy` with `npm run build`, and use the `build` folder whereever you want.

- Clone the repo
- `npm install`
- Add pictures, recipes, etc to `public/recipes`, and edit the `README.md` to include all of the recipes
- Edit the `homepage` in `package.json` to point to your GH Pages
- `npm run deploy`

Note: If you want a static-ish built site, you'll want puppeteer and all dependencies installed. If you don't want that, remove the `postbuild` step in `package.json`

## 🖥️ As a desktop application

Cilantro will be available as a desktop app soon, with Electron.

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
Right now, you need to create a `README.md` file formatted in this way to import recipes. The `recipes` field should just be a list of the filenames, minus the `md` portion.

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

The site can be statically built, so the pages also offer a lot of metadata
- [Recipe schema](https://schema.org/Recipe) data
- [h-recipe](https://microformats.org/wiki/h-recipe) and [hRecipe](https://microformats.org/wiki/hrecipe) markup
- Rich embed data
