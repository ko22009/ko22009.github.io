(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[946],{9100:function(e,t,r){var n=r(9489),l=r(7067);function o(t,r,c){return l()?(e.exports=o=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var l=[null];l.push.apply(l,t);var o=new(Function.bind.apply(e,l));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),l=r(319),o=r(9713),c=r(7316),a=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=c(e,a),i=p(t),m=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:f},i),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(l(t),[""+r])).apply(void 0,[{}].concat(l(o)))}),[r,t]);return u.createElement(m,s({},o))}},3240:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),l=r(1597),o=r(2102),c=r(8678),a=r(262);function i(e){var t,r=e.post;return n.createElement("ul",{className:"toc-list"},r.url&&n.createElement("li",null,n.createElement("a",{href:r.url},r.title)),null===(t=r.items)||void 0===t?void 0:t.map((function(e,t){var r;return n.createElement("li",{key:e.url},n.createElement("a",{href:e.url},e.title),null===(r=e.items)||void 0===r?void 0:r.map((function(e){return n.createElement(i,{key:e.url,post:e})})))})))}var s=r(5900),u=r.n(s),f=r(3295),p=r(259),m=r(8200),d=r(7698),y=function(e){var t,r=e.data,s=e.pageContext,y=e.location,v=r.mdx,b=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",E=s.previous,x=s.next,h=s.categoryTitle;(0,p.Z)(v.fields.category+"-"+v.fields.slug,!0),(0,n.useEffect)((function(){document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}),[]);var g={identifier:v.fields.slug,title:v.frontmatter.title};return n.createElement(c.Z,{className:"post",location:y,Subheader:function(){return n.createElement(n.Fragment,null,n.createElement("h2",{className:"header"},v.frontmatter.title),n.createElement(f.Z,{node:v}))},title:b},n.createElement(a.Z,{title:h+": "+v.frontmatter.title,description:v.frontmatter.description||v.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:u()("content",!v.tableOfContents.items&&"content-full")},n.createElement("div",{className:"inner-content"},n.createElement("p",null,v.frontmatter.description),n.createElement(o.MDXRenderer,null,v.body),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,E&&n.createElement(l.Link,{to:"/posts/"+E.fields.category+"/"+E.fields.slug,rel:"prev"},"← ",E.frontmatter.title)),n.createElement("li",null,x&&n.createElement(l.Link,{to:"/posts/"+x.fields.category+"/"+x.fields.slug,rel:"next"},x.frontmatter.title," →")))),n.createElement("hr",null),n.createElement(m.h$,{config:g})),n.createElement("nav",{className:u()("toc",!v.tableOfContents.items&&"hide")},n.createElement(i,{post:v.tableOfContents}),n.createElement(d.Z,{className:"desktop"})))))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-ef61cf62d5b90f36e79d.js.map