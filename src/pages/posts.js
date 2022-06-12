import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = "Posts | " + data.site.siteMetadata?.title;
  const posts = data.allMdx.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout className="layout" location={location} title={siteTitle}>
      <Seo />
      <ol style={{ listStyle: `none` }} id="wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <li
              key={node.fields.slug}
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={node.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
