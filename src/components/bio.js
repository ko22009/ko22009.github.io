import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";
import telegram from "../images/telegram.svg";
import twitter from "../images/twitter.svg";
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
            linkedin
            twitter
          }
        }
      }
    }
  `);

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
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={linkedin} alt="linkedin" />
        </a>
        <a href={social.twitter} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Bio;
