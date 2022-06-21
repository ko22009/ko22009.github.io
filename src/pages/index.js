import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import Posts from "../components/posts";

const BlogIndex = ({ data, location }) => {
  const edges = data.allMdx.edges;

  const Footer = () => (
    <footer>
      <div className="global-wrapper">
        <Bio />
      </div>
    </footer>
  );

  return (
    <Layout className="layout" location={location} Footer={Footer}>
      <Seo />
      <h1>Recently posts</h1>
      <Posts posts={edges} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index.md$/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          excerpt
          fields {
            category
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY hh:mma")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
