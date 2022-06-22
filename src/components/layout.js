import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";
import ScrollUp from "./scrollUp";
import { useRef } from "react";

const Layout = ({ children, Subheader, className, Footer, location }) => {
  let header;
  const headerRef = useRef();
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
  const menu = (
    <>
      {groups.map((group) => (
        <Link
          key={group.fieldValue}
          className={cn(
            location?.pathname.includes(`/posts/${group.fieldValue}`) &&
              "active",
            "menu-item"
          )}
          to={`/posts/${group.fieldValue}`}
        >
          {group.fieldValue}
        </Link>
      ))}
      <Link
        className={cn(
          location?.pathname.includes("/resume") && "active",
          "menu-item"
        )}
        to="/resume"
      >
        resume
      </Link>
      <Link
        className={cn(
          location?.pathname.includes("/contacts") && "active",
          "menu-item"
        )}
        to="/contacts"
      >
        contacts
      </Link>
    </>
  );
  header = (
    <div ref={headerRef} className="main-heading">
      <Link
        className={cn(location?.pathname === "/" && "active", "main")}
        to="/"
      >
        {title}
      </Link>
      {menu}
      <div
        className="menu"
        onClick={() => headerRef.current.classList.toggle("active")}
      >
        <div className="hamburger"></div>
      </div>
      <div className="menu-bg">
        <div className="mobile-menu">{menu}</div>
      </div>
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
