"use strict";(self.webpackChunki_mes_doc=self.webpackChunki_mes_doc||[]).push([[610],{78665:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),r=a(86010),n=a(32600),s=a(39960);const i="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD";var u=a(95999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},36299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),r=a(95999),n=a(71750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},38561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(67294),r=a(86010),n=a(95999),s=a(39960),i=a(44996),m=a(51548),o=a(18780),c=a(47459),g=a(86753);const d="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var h=a(20062);const E="image_o0gy";function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,m=n||i&&"mailto:"+i||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:m},l.createElement("img",{className:E,src:s,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const _="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?N:_),key:t},l.createElement(v,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}function k(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:E}=(0,i.C)(),{children:b,frontMatter:v,assets:_,metadata:f,truncated:N,isBlogPostPage:k=!1}=e,{date:P,formattedDate:T,permalink:w,tags:y,readingTime:I,title:L,editUrl:M,authors:R}=f,A=null!=(t=_.image)?t:v.image,x=!k&&N,U=y.length>0,C=k?"h1":"h2";return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(C,{className:d,itemProp:"headline"},k?L:l.createElement(s.Z,{itemProp:"url",to:w},L)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",a(I))),l.createElement(Z,{authors:R,assets:_})),A&&l.createElement("meta",{itemProp:"image",content:E(A,{absolute:!0})}),l.createElement("div",{id:k?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,b)),(U||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",k&&p)},U&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":x})},l.createElement(h.Z,{tags:y})),k&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:M})),x&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":U})},l.createElement(s.Z,{to:f.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),r=a(39960),n=a(78665),s=a(38561),i=a(95999),m=a(51548),o=a(36299),c=a(14739),g=a(86010);function d(e){const{metadata:t,items:a,sidebar:d,listMetadata:u}=e,{allTagsPath:p,name:h,count:E}=t,b=function(){const{selectMessage:e}=(0,m.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(E),tagName:h});return l.createElement(m.FG,{className:(0,g.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},l.createElement(m.d,{title:v}),l.createElement(c.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:d},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,v),l.createElement(r.Z,{href:p},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(o.Z,{metadata:u})))}},86753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(95999),n=a(87462),s=a(86010);const i="iconEdit_dcUD";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(51548);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},71750:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294),r=a(39960);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),n=a(39960);const s="tag_hD8n",i="tagRegular_D6E_",m="tagWithCount_i0QQ";function o(e){const{permalink:t,name:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s,o?m:i)},a,o&&l.createElement("span",null,o))}},20062:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(86010),n=a(95999),s=a(7774);const i="tags_XVD_",m="tag_JSN8";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);