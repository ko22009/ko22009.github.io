import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import Posts from "../components/posts";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const edges = data.allMdx.edges;

  const Footer = () => (
    <footer>
      <div className="global-wrapper">
        <Bio />
      </div>
    </footer>
  );

  return (
    <Layout
      className="layout"
      location={location}
      title={siteTitle}
      Footer={Footer}
    >
      <Seo />
      <Posts posts={edges} />
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
    allMdx(
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            category
            slug
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
