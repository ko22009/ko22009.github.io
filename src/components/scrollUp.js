import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useEffect, useRef } from "react";
import useWindowSize from "../hook/useWindowSize";

const ScrollUp = ({ className }) => {
  const buttonRef = useRef(null);
  const sizes = useWindowSize();
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      if (!buttonRef.current) return;
      if (
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20) &&
        ((className === "mobile" && sizes.width <= 1100) ||
          (className === "desktop" && sizes.width > 1100))
      ) {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }
    scrollFunction();
    return () => window.removeEventListener("scroll", scrollFunction);
  }, [buttonRef, className, sizes.width]);

  return (
    <button
      ref={buttonRef}
      className={`button go-up ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={faArrowUp} size="1x" />
    </button>
  );
};

export default ScrollUp;
