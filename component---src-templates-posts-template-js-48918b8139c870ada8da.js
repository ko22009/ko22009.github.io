"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[260],{2482:function(e,t,l){var n=l(1597),a=l(7294),r=l(3295);t.Z=function(e){var t=e.posts;return a.createElement("ol",{className:"post-list"},t.map((function(e){var t=e.node,l=t.frontmatter.title||t.fields.slug;return a.createElement("li",{key:"posts/"+t.fields.category+"/"+t.fields.slug,itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("div",{className:"title-header"},a.createElement("h2",null,a.createElement(n.Link,{to:"/posts/"+t.fields.category+"/"+t.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},l)))),a.createElement(r.Z,{node:t})),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"})))})))}},2614:function(e,t,l){l.r(t);var n=l(7294),a=l(8678),r=l(2482),s=l(262);t.default=function(e){var t,l=e.data,i=e.pageContext,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title,c=l.allMdx.edges;return 0===c.length?n.createElement(a.Z,{title:o},n.createElement(s.Z,{title:"All posts"}),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(a.Z,{Subheader:function(){return n.createElement(n.Fragment,null,n.createElement("h2",{className:"header"},i.categoryTitle))},className:"layout",title:o},n.createElement(s.Z,{title:i.categoryTitle}),n.createElement(r.Z,{posts:c}))}}}]);
//# sourceMappingURL=component---src-templates-posts-template-js-48918b8139c870ada8da.js.map