import * as React from "react";
import cn from "classnames";

const Tag = ({ children, primary = false }) => {
  return <div className={cn("tag", primary && "tag-primary")}>{children}</div>;
};

export default Tag;
