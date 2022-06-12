import * as React from "react";
import { CommentCount } from "disqus-react";
import { ClapButton } from "@lyket/react";

const PostInfo = ({ node }) => {
  const title = node.frontmatter.title || node.slug;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: node.slug, title: title },
  };
  return (
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
  );
};

export default PostInfo;
