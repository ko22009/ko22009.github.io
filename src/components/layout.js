import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";
import ScrollUp from "./scrollUp";

const Layout = ({
  title,
  children,
  Subheader,
  className,
  Footer,
  location,
}) => {
  let header;
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        group(field: fields___category) {
          fieldValue
        }
      }
    }
  `);
  const groups = data.allMdx.group;
  header = (
    <div className="main-heading">
      <Link
        className={cn(location.pathname === "/" && "active", "main")}
        to="/"
      >
        {title}
      </Link>
      {groups.map((group) => (
        <Link
          key={group.fieldValue}
          className={cn(
            location.pathname.includes(`/posts/${group.fieldValue}`) && "active"
          )}
          to={`/posts/${group.fieldValue}`}
        >
          {group.fieldValue}
        </Link>
      ))}
    </div>
  );

  return (
    <div className={className}>
      <div className="global-header">
        <div className="global-wrapper">{header}</div>
      </div>
      {Subheader && (
        <div className="global-wrapper">
          <Subheader />
        </div>
      )}
      <div className="global-wrapper">
        <main>{children}</main>
        <ScrollUp className="mobile" />
      </div>
      {Footer && <Footer />}
    </div>
  );
};

export default Layout;
