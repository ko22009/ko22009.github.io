import * as React from "react";
import useCountView from "../hook/useCountView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import { CommentCount } from "gatsby-plugin-disqus";
import Tag from "./tag";
import { Link } from "gatsby";

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
        <div className="date">
          {node.frontmatter.date}, {node.fields.readingTime?.text}
        </div>
        <div className="element-info">
          {count}
          <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faEye} />
        </div>
        <div className="element-info">
          <CommentCount placeholder={"0"} config={disqusConfig} />
          <FontAwesomeIcon style={{ marginLeft: "6px" }} icon={faComment} />
        </div>
      </div>
      <Tag primary={true}>
        <Link to={"/posts/" + node.fields.category}>
          {node.fields.category}
        </Link>
      </Tag>
      {tags?.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </>
  );
};

export default PostInfo;
