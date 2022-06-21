/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
import telegram from "../images/telegram.svg";
import profile from "../images/profile-pic.jpg";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            telegram
            github
            mail
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div>
      <blockquote className="bio">
        <img
          width="50"
          height="50"
          className="bio-avatar"
          src={profile}
          alt="Profile"
        />
        {author?.name && (
          <p>
            Personal front-end blog since {new Date().getFullYear()}
            <br />
            Written by <strong>{author.name}:</strong> {author?.summary}
          </p>
        )}
      </blockquote>
      <div className="links">
        <a href={social.telegram} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={telegram} alt="telegram" />
        </a>
        <a href={social.github} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={github} alt="github" />
        </a>
        <a href={`mailto:${social.mail}`} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={mail} alt="mail" />
        </a>
      </div>
    </div>
  );
};

export default Bio;
