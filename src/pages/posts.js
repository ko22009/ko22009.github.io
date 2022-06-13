import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Posts from "../components/posts";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMdx.edges;
  const Subheader = () => (
    <>
      <h1 itemProp="headline">Posts</h1>
    </>
  );
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
    <Layout
      Subheader={Subheader}
      className="layout"
      location={location}
      title={siteTitle}
    >
      <Seo />
      <Posts posts={posts} />
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
          slug
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
