require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Front-end blog`,
    siteUrl: `https://ko22009.github.io`,
    keywords: `js, javascript, react, graph-ql, gatsby, css, html, nextjs`,
    author: {
      name: `Kutliakhmetov Ruslan`,
      summary: `Striving for Excellence.`,
    },
    description: `It's personal front-end blog by Kutliakhmetov Ruslan, designed for sharing experience.`,
    social: {
      telegram: `https://t.me/ko22009`,
      github: `https://github.com/ko22009`,
      mail: `kosid2@gmail.com`,
      linkedin: "https://www.linkedin.com/in/ko22009/",
      twitter: `https://twitter.com/ko22009`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ko22009.github.io/",
        sitemap: "https://ko22009.github.io/sitemap/sitemap-index.xml",
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill="#fff" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `header-nav`,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blog-ko2`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: "AIzaSyAOtZHPtZl3zsoVjsUjzDnQClRThlRewmM",
          authDomain: "blog-ko2.firebaseapp.com",
          databaseURL: "https://blog-ko2.firebaseio.com",
          projectId: "blog-ko2",
          storageBucket: "blog-ko2.appspot.com",
          messagingSenderId: "516385271403",
          appId: "1:516385271403:web:ce7a5ae7073b596c0f4b2e",
          measurementId: "G-5QKB153WBS",
        },
      },
    },
  ],
};
