"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[260],{2482:function(e,t,l){var n=l(1597),r=l(7294),a=l(3295);t.Z=function(e){var t=e.posts;return r.createElement("ol",{className:"post-list"},t.map((function(e){var t=e.node,l=t.frontmatter.title||t.fields.slug;return r.createElement("li",{key:"posts/"+t.fields.category+"/"+t.fields.slug,itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(n.Link,{to:"/posts/"+t.fields.category+"/"+t.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},l))),r.createElement(a.Z,{node:t})),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"})))})))}},2614:function(e,t,l){l.r(t);var n=l(7294),r=l(8678),a=l(2482),s=l(262);t.default=function(e){var t,l=e.data,o=e.pageContext.category,i=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title,c=l.allMdx.edges,m="/posts/"+o;return 0===c.length?n.createElement(r.Z,{location:m,title:i},n.createElement(s.Z,{title:"All posts"}),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(r.Z,{Subheader:function(){return n.createElement(n.Fragment,null,n.createElement("h1",{itemProp:"headline"},"Posts"))},className:"layout",location:m,title:i},n.createElement(s.Z,null),n.createElement(a.Z,{posts:c}))}}}]);
//# sourceMappingURL=component---src-templates-posts-template-js-3d351976ca69dcd16c18.js.map