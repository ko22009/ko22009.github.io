import * as React from "react";
import { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";

const Layout = ({ title, children, Subheader, className, Footer }) => {
  let header;
  const buttonRef = useRef(null);
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
  console.log(window.location.pathname);
  header = (
    <div className="main-heading">
      <Link
        className={cn(window.location.pathname === "/" && "active", "main")}
        to="/"
      >
        {title}
      </Link>
      {groups.map((group) => (
        <Link
          key={group.fieldValue}
          className={cn(
            window.location.pathname.includes(`/posts/${group.fieldValue}`) &&
              "active"
          )}
          to={`/posts/${group.fieldValue}`}
        >
          {group.fieldValue}
        </Link>
      ))}
    </div>
  );

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (!buttonRef.current) return;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }
  }, [buttonRef]);

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
        <button
          ref={buttonRef}
          className={`button go-up`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faArrowUp} size="1x" />
        </button>
      </div>
      {Footer && <Footer />}
    </div>
  );
};

export default Layout;
