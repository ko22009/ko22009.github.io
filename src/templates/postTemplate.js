import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Toc from "../components/toc";
import cn from "classnames";
import { useEffect } from "react";
import PostInfo from "../components/post-info";
import useCountView from "../hook/useCountView";
import { Disqus } from "gatsby-plugin-disqus";
import ScrollUp from "../components/scrollUp";

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next, categoryTitle } = pageContext;

  const Subheader = () => (
    <>
      <h1>{post.frontmatter.title}</h1>
      <PostInfo node={post} />
    </>
  );
  useCountView(`${post.fields.category}-${post.fields.slug}`, true);

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
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  };

  return (
    <Layout
      className="post"
      location={location}
      Subheader={Subheader}
      title={siteTitle}
    >
      <Seo
        title={`${categoryTitle}: ${post.frontmatter.title}`}
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
          <div className="inner-content">
            <p>{post.frontmatter.description}</p>
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
                    <Link
                      to={`/posts/${previous.fields.category}/${previous.fields.slug}`}
                      rel="prev"
                    >
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link
                      to={`/posts/${next.fields.category}/${next.fields.slug}`}
                      rel="next"
                    >
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <hr />
            <Disqus config={disqusConfig} />
          </div>
          <nav className={cn("toc", !post.tableOfContents.items && "hide")}>
            <Toc post={post.tableOfContents} />
            <ScrollUp className="desktop" />
          </nav>
        </div>
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug }, category: { eq: $category } }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      body
      fields {
        category
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY hh:mma")
        description
        tags
      }
    }
  }
`;
