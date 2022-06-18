import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Posts from "../components/posts";
import Seo from "../components/seo";

const PostsTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMdx.edges;
  const Subheader = () => (
    <>
      <h2 className="header">{pageContext.categoryTitle}</h2>
    </>
  );

  return (
    <Layout
      Subheader={Subheader}
      location={location}
      className="layout"
      title={siteTitle}
    >
      <Seo title={pageContext.categoryTitle} />
      {!posts.length && (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      )}
      <Posts posts={posts} />
    </Layout>
  );
};

export default PostsTemplate;

export const pageQuery = graphql`
  query allMdx($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        fields: { category: { eq: $category } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            category
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
