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
      <Seo
        title={siteTitle}
        keywords="resume, front-end, senior, js, react"
        summary={"Resume Kutliakhmetov Ruslan"}
      />
      <h1>{siteTitle}</h1>
      <p>
        Senior front-end developer
      </p>
      <p>English: Intermediate.</p>
      <p>Leisure: gym, films, walks</p>
      <h2>University</h2>
      <table className="flat">
        <tbody>
          <tr>
            <td>2012 – 2016</td>
            <td>
              South Ural State University
              <br />
              Higher School of Economics and Management, Applied Informatics
            </td>
          </tr>
          <tr>
            <td>2012 – 2016</td>
            <td>
              South Ural State University
              <br />
              Interpreter in the field of professional communications (English)
            </td>
          </tr>
          <tr>
            <td>2016 – 2018</td>
            <td>
              South Ural State University
              <br />
              Higher School of Economics and Management, Business Informatics)
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Experience</h2>

      <table className="flat">
        <tbody>
          <tr>
            <td>
              November 2022 <br /> Currently
            </td>
            <td>
              <b>GAZPROM ID</b>
              <br />
              front-end developer. Portal.
              <br />{" "}
              <span className="stack">
                react, micro-front-end
              </span>
            </td>
          </tr>
          <tr>
            <td>
              April 2022 <br /> July 2022
            </td>
            <td>
              <b>AlphaInsurance</b>
              <br />
              Senior front-end developer. Insurance CRM.
              <br />{" "}
              <span className="stack">
                react, mobx, typescript, react-query
              </span>
            </td>
          </tr>
          <tr>
            <td>
              August 2021 <br /> April 2022
            </td>
            <td>
              <b>SelectiIT</b>
              <br />
              Senior front-end developer. Education portal. Investing product of
              bank.
              <br />{" "}
              <span className="stack">
                react, redux, mobx, typescript, jest, react-testing-library
              </span>
            </td>
          </tr>
          <tr>
            <td>
              September 2020 <br /> September 2021
            </td>
            <td>
              <b>Bars Group</b>
              <br />
              Middle front-end developer. Medical CRM-system.
              <br />{" "}
              <span className="stack">
                js, php, company framework, integration support
              </span>
            </td>
          </tr>
          <tr>
            <td>
              April 2020 <br /> August 2021
            </td>
            <td>
              <b>Freelancer</b>
              <br />
              Front-end developer. Transport CRM-system.
              <br /> <span className="stack">react, redux, typescript</span>
            </td>
          </tr>
          <tr>
            <td>
              July 2019 <br /> August 2020
            </td>
            <td>
              <b>TPTHub</b>
              <br />
              Fullstack developer. Transport CRM-system.
              <br />{" "}
              <span className="stack">php, bootstrap, js, laravel, vuejs.</span>
            </td>
          </tr>
          <tr>
            <td>
              April 2018 <br /> May 2018
            </td>
            <td>
              <b>Freelancer</b>
              <br />
              Fullstack developer. Website delivery food. Integrations.
              <br />{" "}
              <span className="stack">vuejs, laravel, php, js, gulp</span>
            </td>
          </tr>
          <tr>
            <td>
              January 2018 <br /> March 2018
            </td>
            <td>
              <b>Intersvyaz</b>
              <br />
              Fullstack developer. Marketing department. Website company.
              Landing pages.
              <br /> <span className="stack">bitrix, php, js, gulp.</span>
            </td>
          </tr>
          <tr>
            <td>
              August 2017 <br /> December 2018
            </td>
            <td>
              <b>Freelancer</b>
              <br />
              Fullstack developer. The site of the company, online store,
              transport crm-system.
              <br />{" "}
              <span className="stack">
                wordpress, yii2, vuejs, php, js, laravel, gulp, webpack.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              March 2017 <br /> May 2017
            </td>
            <td>
              <b>DigitalWand</b>
              <br />
              Full-stack. CRM-system company.
              <br /> <span className="stack">yii2, bitrix, js.</span>
            </td>
          </tr>
          <tr>
            <td>
              September 2016 <br /> June 2016
            </td>
            <td>
              <b>South Ural State University</b>
              <br />
              Diploma. Full-stack and team lead. CRM-system volunteer center.
              <br /> <span className="stack">laravel, bootstrap, js.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Resume;
