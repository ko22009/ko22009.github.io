import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const Resume = ({ location }) => {
  const siteTitle = `Resume`;
  const Footer = () => (
    <footer>
      <div className="global-wrapper">
        <Bio />
      </div>
    </footer>
  );

  return (
    <Layout className="layout" location={location} Footer={Footer}>
      <Seo title={siteTitle} />
      <h1>{siteTitle}</h1>
    </Layout>
  );
};

export default Resume;
