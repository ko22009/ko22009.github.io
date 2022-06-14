import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import Posts from "../components/posts";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const groups = data.allMdx.group;

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
      {groups.map((group) => (
        <div key={group.fieldValue}>
          <h2 className="title">
            <a href={`/posts/${group.fieldValue}`}>
              {group.fieldValue.toUpperCase()}
            </a>
          </h2>
          <Posts posts={group.edges} />
        </div>
      ))}
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
      group(field: fields___category) {
        fieldValue
        totalCount
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
  }
`;
