import * as React from "react";
import { Link, graphql } from "gatsby";
import { CommentCount } from "disqus-react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import { ClapButton } from "@lyket/react";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
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
      <h2>
        <a href="/posts">Posts</a>
      </h2>
      <ol style={{ listStyle: `none` }} id="wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.slug;
          const disqusConfig = {
            shortname: process.env.GATSBY_DISQUS_NAME,
            config: { identifier: node.slug, title: title },
          };
          return (
            <li
              key={node.slug}
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={"/" + node.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <div className="data">
                  <span>{node.frontmatter.date}</span>
                  <span>|</span>
                  <CommentCount
                    shortname={disqusConfig.shortname}
                    config={disqusConfig.config}
                  >
                    Comments
                  </CommentCount>
                  <span>|</span>
                  <ClapButton
                    component={ClapButton.templates.Medium}
                    id={node.slug.slice(0, -1)}
                    namespace="ko2-blog-post"
                  />
                </div>
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
      <footer>
        <Bio />
      </footer>
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
