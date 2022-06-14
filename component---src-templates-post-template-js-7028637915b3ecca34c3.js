/*! For license information please see component---src-templates-post-template-js-7028637915b3ecca34c3.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[946],{9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,c){return o()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),c=r(7316),a=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=c(e,a),i=f(t),m=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:p},i),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return s.createElement(m,u({},l))}},3240:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),o=r(1597),l=r(2102),c=r(8678),a=r(262);function i(e){var t,r=e.post;return n.createElement("ul",{className:"toc-list"},r.url&&n.createElement("li",null,n.createElement("a",{href:r.url},r.title)),null===(t=r.items)||void 0===t?void 0:t.map((function(e,t){var r;return n.createElement("ul",{className:"toc-list",key:e.url},n.createElement("li",null,n.createElement("a",{href:e.url},e.title),null===(r=e.items)||void 0===r?void 0:r.map((function(e){return n.createElement(i,{key:e.url,post:e})}))))})))}var u=r(5900),s=r.n(u),p=r(3295),f=r(259),m=r(8200),d=function(e){var t,r=e.data,u=e.location,d=e.pageContext,y=r.mdx,v=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",b=d.previous,h=d.next;(0,f.Z)(y.slug,!0),(0,n.useEffect)((function(){document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}),[]);var x={identifier:y.slug,title:y.frontmatter.title};return n.createElement(c.Z,{className:"post",Subheader:function(){return n.createElement(n.Fragment,null,n.createElement("h1",{itemProp:"headline"},y.frontmatter.title),n.createElement(p.Z,{node:y}))},location:u,title:v},n.createElement(a.Z,{title:y.frontmatter.title,description:y.frontmatter.description||y.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("div",{className:s()("content",!y.tableOfContents.items&&"content-full")},n.createElement("div",null,n.createElement(l.MDXRenderer,null,y.body),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,b&&n.createElement(o.Link,{to:"/posts/"+b.category+"/"+b.slug,rel:"prev"},"← ",b.frontmatter.title)),n.createElement("li",null,h&&n.createElement(o.Link,{to:"/posts/"+b.category+"/"+b.slug,rel:"next"},h.frontmatter.title," →")))),n.createElement("hr",null),n.createElement(m.h$,{config:x})),n.createElement("nav",{className:s()("toc",!y.tableOfContents.items&&"hide")},n.createElement(i,{post:y.tableOfContents})))))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-7028637915b3ecca34c3.js.map