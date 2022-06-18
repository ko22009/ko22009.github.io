const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: value.match(/([a-z\d-]+)(\/*|)$/i)[1],
    });
    createNodeField({
      name: `category`,
      node,
      value: value.split("/")[1],
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const postsTemplate = path.resolve(`./src/templates/postsTemplate.js`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fileAbsolutePath: { regex: "/index.md$/" }
            frontmatter: { draft: { ne: true } }
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                category
                slug
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then(async (result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMdx.edges;

    const categoryResults = await graphql(
      `
        {
          allMdx(filter: { fileAbsolutePath: { regex: "/category.md$/" } }) {
            edges {
              node {
                id
                fields {
                  category
                  slug
                }
                frontmatter {
                  title
                }
                body
              }
            }
          }
        }
      `
    );

    const categoryEdges = categoryResults.data.allMdx.edges;

    categoryEdges.map((edge) => {
      createPage({
        path: `/posts/${edge.node.fields.category}`,
        component: postsTemplate,
        context: {
          category: edge.node.fields.category,
          categoryTitle: edge.node.frontmatter.title,
        },
      });
    });

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const category = categoryEdges.find(
        (edge) =>
          edge.node.fields.slug === "category" &&
          edge.node.fields.category === post.node.fields.category
      );
      createPage({
        path: `/posts/${post.node.fields.category}/${
          post.node.fields.slug.match(/([a-z\d-]+)(\/*|)$/i)[1]
        }`,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug.match(/([a-z\d-]+)(\/*|)$/i)[1],
          category: post.node.fields.category,
          categoryTitle: category?.node.frontmatter.title,
          previous,
          next,
        },
      });
    });
  });
};
