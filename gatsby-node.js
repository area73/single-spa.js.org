/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsTemplate = path.resolve(`src/templates/docsTemplate.js`)
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if(allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  return allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const template = node.frontmatter.path.startsWith('/docs/') ? docsTemplate : blogTemplate
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}, // additional data can be passed via context
    });
  });

};