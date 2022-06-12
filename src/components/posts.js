import { Link } from "gatsby";
import * as React from "react";
import PostInfo from "./post-info";

const Posts = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }} id="wrapper">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.slug;

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
              <PostInfo node={node} />
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
  );
};

export default Posts;
