import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Toc from "../components/toc";
import cn from "classnames";
import { useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = pageContext;

  const Subheader = () => (
    <>
      <h1 itemProp="headline">{post.frontmatter.title}</h1>
      <span>{post.frontmatter.date}</span>
    </>
  );

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.slug, title: post.frontmatter.title },
  };

  return (
    <Layout
      className="post"
      Subheader={Subheader}
      location={location}
      title={siteTitle}
    >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div
          className={cn(
            "content",
            !post.tableOfContents.items && "content-full"
          )}
        >
          <div id="wrapper">
            <MDXRenderer>{post.body}</MDXRenderer>
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <hr />
            <DiscussionEmbed {...disqusConfig} />
          </div>
          <nav className={cn("toc", !post.tableOfContents.items && "hide")}>
            <Toc post={post.tableOfContents} />
          </nav>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
