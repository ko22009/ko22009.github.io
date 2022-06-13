import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../hook/useWindowSize";

const Layout = ({
  location,
  title,
  children,
  Subheader,
  className,
  Footer,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;
  const buttonRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [classButton, setClassButton] = useState("");
  const windowSize = useWindowSize();

  useEffect(() => {
    const wrapper = document.getElementById("wrapper");
    if (!wrapper) return;
    const rightPadding = +window
      .getComputedStyle(wrapper, null)
      .paddingRight.match(/[0-9]+/g);
    const fullWidth = wrapper.offsetWidth + wrapper.offsetLeft - rightPadding;
    const offsetButton = buttonRef.current.clientWidth;
    if (fullWidth + rightPadding + offsetButton < document.body.clientWidth) {
      setClassButton("go-up-full");
      setLeft(fullWidth);
    } else {
      setClassButton("");
      setLeft(fullWidth - offsetButton);
    }
  }, [windowSize.width]);

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

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
        <header className="bg-wrapper">
          <div className="global-wrapper">
            <Subheader />
          </div>
        </header>
      )}
      <div className="global-wrapper">
        <main>{children}</main>
        <button
          ref={buttonRef}
          className={`button go-up ${classButton}`}
          style={{ left }}
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
