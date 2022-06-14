const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const postsTemplate = path.resolve(`./src/templates/postsTemplate.js`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
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
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMdx.edges;
    const category = posts.reduce((acc, val) => {
      if (!acc.includes(val.node.fields.category)) {
        acc.push(val.node.fields.category);
      }
      return acc;
    }, []);

    category.map((category) => {
      createPage({
        path: `/posts/${category}`,
        component: postsTemplate,
        context: {
          category,
        },
      });
    });

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: `/posts/${post.node.fields.category}/${
          post.node.fields.slug.match(/([a-z\d-]+)(\/*|)$/i)[1]
        }`,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug.match(/([a-z\d-]+)(\/*|)$/i)[1],
          category: post.node.fields.category,
          previous,
          next,
        },
      });
    });
  });
};

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
