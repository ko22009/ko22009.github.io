import { Link } from "gatsby";
import * as React from "react";
import PostInfo from "./post-info";

const Posts = ({ posts }) => {
  return (
    <ol className="post-list">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <li
            key={`posts/${node.fields.category}/${node.fields.slug}`}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <div className="title-header">
                <h2>
                  <Link
                    to={`/posts/${node.fields.category}/${node.fields.slug}`}
                    itemProp="url"
                  >
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
              </div>
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
