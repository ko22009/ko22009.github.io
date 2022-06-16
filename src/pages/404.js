import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle} location={location}>
      <Seo title="404: Not Found" />
      <h2 className="header">404: Not Found</h2>
      <p>
        Page not found. <a href="/">Go to main page</a>
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
