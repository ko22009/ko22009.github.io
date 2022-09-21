import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import Slider from "../components/slider";
import img1 from "../images/projects/card.png";
import img2 from "../images/projects/main.png";
import img3 from "../images/projects/history.png";
import { useState } from "react";

const Contacts = ({ location }) => {
  const siteTitle = `Projects`;
  const Footer = () => (
    <footer>
      <div className="global-wrapper">
        <Bio />
      </div>
    </footer>
  );
  const style = {
    position: "relative",
    height: "450px",
    margin: "0 auto",
    cursor: "zoom-in",
  };
  function open(e) {
    if (!active) window.open(e.target.src);
  }
  const [active, setActive] = useState(() => false);

  return (
    <Layout className="layout" location={location} Footer={Footer}>
      <Seo title={siteTitle} />
      <h1>{siteTitle}</h1>
      <div style={{ maxWidth: "800px" }}>
        <h2>Burger</h2>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQDPj0Vqqd2RIGHwwXsGEdQ%2F%25D0%25B1%25D1%2583%25D1%2580%25D0%25B3%25D0%25B5%25D1%2580%25D0%25BD%25D0%25B0%25D1%258F%3Fnode-id%3D0%253A1"
          allowFullScreen
        ></iframe>
        <h2>Volunteer</h2>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIyIKzcvd6274cu4NRCLPvB%2Fvolunteer%3Fnode-id%3D0%253A1"
          allowFullScreen
        ></iframe>
        <h2>Pizza</h2>
        <Slider
          items={[
            <img
              style={style}
              src={img1}
              onClick={open}
              onMouseMove={() => setActive(true)}
              onMouseDown={() => setActive(false)}
            />,
            <img
              style={style}
              src={img2}
              onClick={open}
              onMouseMove={() => setActive(true)}
              onMouseDown={() => setActive(false)}
            />,
            <img
              style={style}
              src={img3}
              onClick={open}
              onMouseMove={() => setActive(true)}
              onMouseDown={() => setActive(false)}
            />,
          ]}
        />
      </div>
    </Layout>
  );
};

export default Contacts;
