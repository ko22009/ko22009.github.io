---
title: Gatsby for beginners
date: "2022-06-19T21:40:00Z"
description: "Describe main features gatsby, pros and cons. \nWe create new project in gatsby."
tags: ['gatsby', 'graphql']
---

## About gatsby
Gatsby it is one of frameworks which help us to create static web-site. It's similar to nextjs, but doesn't have api.
And also gatsby can fetch data from cms: Wordpress, Drupal or just fetching from api and so on. It's useful when we want manage data from cms,
but show from gatsby (static content).

Project written on it has many plugins which provide more boilerplate for us.
For images, we need use gatsby-plugin-image if you want optimized image.

## Main principles
- dynamic routing create in file: gatsby-node.js by createPage in method createPages.  
We can add additional data to pages by page's context.
- static routing: just put in src/pages
- adding additional field to base data by createNodeField in method onCreateNode.

## Pros
- we don't need server for our site.
- built-in: optimized version for web.
- we have strict separation from the api (more clear code).
- We don't need back-end for writing posts and database for storing posts:  
  we can write posts by different formats: markdown, txt and so on.
- it is easy write query with graphql and GraphiQL.
- maintainers of gatsbyjs offer free tier for user's projects.

## Cons
- more time for building and start developing than react-create-app.
- no flexibility when we want another structure directory of posts.
- and another architecture characteristic which we need to follow for better results.
- realization of custom logic maybe impossible and complicated.

## Examples for using
- blog
- business card website
- simple e-commerce website
- and so on. we can use api from google firebase for our bold decisions.

## How to start
1. We should preinstall nodejs, if you haven't.
2. Install gatsby cli instrument: `npm install -g gatsby-cli`
3. Run cmd command: `gatsby new`
4. Go to folder project and run: `npm run develop`
5. Visit page and show our started project: <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>
6. For looking View GraphiQL visit: <a href="http://localhost:8000/___graphql" target="_blank">http://localhost:8000/___graphql</a>  

And Read the docs: https://www.gatsbyjs.com/docs/