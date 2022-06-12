// custom typefaces
import "typeface-ibm-plex-sans";
// normalize CSS across browsers
import "./src/normalize.css";
// custom CSS styles
import "./src/style.css";
// Highlighting for code blocks
import "prismjs/themes/prism.css";

import "gatsby-plugin-firebase-v9.0";

import * as React from "react";
import RootLayout from "./src/components/RootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
