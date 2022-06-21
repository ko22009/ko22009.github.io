import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>
        Page not found. <a href="/">Go to main page</a>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
