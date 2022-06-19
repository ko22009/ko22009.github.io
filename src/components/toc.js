import React from "react";
import "./toc.css";

export default function Toc(props) {
  const { post } = props;
  return (
    <ul className="toc-list">
      {post.url && (
        <li>
          <a href={post.url}>{post.title}</a>
        </li>
      )}
      {post.items?.map((p, i) => (
        <li key={p.url}>
          <a href={p.url}>{p.title}</a>
          {p.items?.map((p) => (
            <Toc key={p.url} post={p} />
          ))}
        </li>
      ))}
    </ul>
  );
}
