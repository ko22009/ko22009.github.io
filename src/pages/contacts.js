import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const Contacts = ({ location }) => {
  const siteTitle = `Contacts`;
  const Footer = () => (
    <footer>
      <div className="global-wrapper">
        <Bio />
      </div>
    </footer>
  );

  return (
    <Layout className="layout" location={location} Footer={Footer}>
      <Seo title={siteTitle} summary={"Contact information"} />
      <h1>{siteTitle}</h1>
      <p>
        telegram:{" "}
        <a href="https://t.me/ko22009" target="_blank" rel="noreferrer">
          t.me/ko22009
        </a>
      </p>
      <p>
        github repo:{" "}
        <a href="https://github.com/ko22009" target="_blank" rel="noreferrer">
          https://github.com/ko22009
        </a>
      </p>
      <p>
        email:{" "}
        <a href="mailto:ko22009@yandex.ru" target="_blank" rel="noreferrer">
          ko22009@yandex.ru
        </a>
      </p>
      <p>
        linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/ko22009/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/ko22009/
        </a>
      </p>
    </Layout>
  );
};

export default Contacts;
