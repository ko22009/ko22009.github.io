import * as React from "react";
import { ClapButton } from "@lyket/react";
import useCountView from "../hook/useCountView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import { Medium } from "./Medium";
import { CommentCount } from "gatsby-plugin-disqus";

const PostInfo = ({ node }) => {
  const title = node.frontmatter.title || node.slug;
  const [count] = useCountView(node.slug, false);
  const disqusConfig = { identifier: node.slug, title: title };

  return (
    <div className="data">
      <div className="date">{node.frontmatter.date}</div>
      <div className="element-info">
        {count}
        <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faEye} />
      </div>
      <ClapButton
        component={Medium}
        namespace="ko2-blog-post"
        id={node.slug.slice(0, -1)}
      ></ClapButton>
      <div className="element-info">
        <CommentCount placeholder={"0"} config={disqusConfig} />
        <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faComment} />
      </div>
    </div>
  );
};

export default PostInfo;
