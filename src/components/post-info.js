import * as React from "react";
import { ClapButton } from "@lyket/react";
import useCountView from "../hook/useCountView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import { Medium } from "./Medium";
import { CommentCount } from "gatsby-plugin-disqus";
import Tag from "./tag";

const PostInfo = ({ node }) => {
  const tags = node.frontmatter.tags;
  const title = node.frontmatter.title || node.fields.slug;
  const [count] = useCountView(
    `${node.fields.category}-${node.fields.slug}`,
    false
  );
  const disqusConfig = { identifier: node.fields.slug, title: title };

  return (
    <>
      <div className="data">
        <div className="date">{node.frontmatter.date}</div>
        <div className="element-info">
          {count}
          <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faEye} />
        </div>
        <ClapButton
          component={Medium}
          namespace={`ko2-blog`}
          id={`${node.fields.category}-${node.fields.slug}`}
        ></ClapButton>
        <div className="element-info">
          <CommentCount placeholder={"0"} config={disqusConfig} />
          <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faComment} />
        </div>
      </div>
      {tags?.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </>
  );
};

export default PostInfo;
