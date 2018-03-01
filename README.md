# Documentation website for single-spa
This repo is a documentation website for [single-spa](https://github.com/canopytax/single-spa) built using [Gatsby](https://www.gatsbyjs.org/)

## Updating this website

### Documentation
The docs are just Markdown files that can be found in `./content/docs/`. Feel free to make a pull request that adds or updates any of the documentation found there -- you shouldn't even need to run this project locally to make these changes; you can just use Github's web UI to edit and create the PR.

### Layout and templates
To update the layouts and template of pages, you'll be working in the `./src/` folder. What you'll find there is basically a ReactJS project, getting data from a GraphQL backend using Relay. See the [development section](#developing) to get started.

## Developing
1. `git clone git@github.com:CanopyTax/single-spa.js.org.git`
1. `yarn add gatsby --global` or `npm i -g gastby`
1. `cd single-spa.js.org`
1. `yarn` or `npm i`
1. `yarn develop` or `npm run develop`
1. Follow the prompts in the console to access the local env or the local GraphQL endpoint
1. Make changes in `./src/` for templates and layouts, or content updates in `./content/`
1. Rejoice.
