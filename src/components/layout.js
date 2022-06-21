import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";
import ScrollUp from "./scrollUp";

const Layout = ({ children, Subheader, className, Footer, location }) => {
  let header;
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(filter: { fileAbsolutePath: { regex: "/category.md$/" } }) {
        group(field: fields___category) {
          fieldValue
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const groups = data.allMdx.group;
  const title = data.site.siteMetadata.title;
  header = (
    <div className="main-heading">
      <Link
        className={cn(location?.pathname === "/" && "active", "main")}
        to="/"
      >
        {title}
      </Link>
      {groups.map((group) => (
        <Link
          key={group.fieldValue}
          className={cn(
            location?.pathname.includes(`/posts/${group.fieldValue}`) &&
              "active"
          )}
          to={`/posts/${group.fieldValue}`}
        >
          {group.fieldValue}
        </Link>
      ))}
      <Link
        className={cn(location?.pathname.includes("/resume") && "active")}
        to="/resume"
      >
        resume
      </Link>
      <Link
        className={cn(location?.pathname.includes("/contacts") && "active")}
        to="/contacts"
      >
        contacts
      </Link>
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
