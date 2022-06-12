import * as React from "react";
import RootLayout from "./src/components/RootLayout";
import "gatsby-plugin-firebase-v9.0";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
