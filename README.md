# Cilantro

Cilantro is a plaintext recipe viewer. Store your recipes as text files, but get all the benefits of a rich viewer. Inspired by [Chowdown](https://chowdown.io), but written from the ground up in React.

# Recipe Format

Recipes are stored as `markdown` files, with all the action happening in the front matter section.

TODO: Example & Explain

As of now, anything that works in Chowdown should work here. We're working on adding support for richer information without breaking backwards compatibility and exportability.

Support is being considered for an importer for other recipe formats.

## Exportability

Since all the recipes are stored in plaintext, it's very easy to export them, back them up, and sync with your service of choice.

The recipe pages also have

- rich embed data
- https://schema.org/Recipe data
- Required markup for h-recipe and hRecipe formats

# Getting Started

TODO

# Plans

Some things I'm thinking of:

- Electron app?
- Have a git repo as source of truth for recipes and pull them in
- Editor to help format markdown and then prompt you to update it in your repo
