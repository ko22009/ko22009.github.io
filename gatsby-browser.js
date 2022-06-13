import "typeface-ibm-plex-sans";
import "./src/normalize.css";
import "./src/style.css";
import "prismjs/themes/prism.css";
import "react-placeholder/lib/reactPlaceholder.css";

import "gatsby-plugin-firebase-v9.0";

import * as React from "react";
import RootLayout from "./src/components/RootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
