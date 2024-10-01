"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2357],{32037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),i=n(28453),a=n(67141),c=n(3514);const o={id:"maintain-archive",title:"Maintain Archive",sidebar_label:"Archive",description:"Archive for the Maintain Section.",keywords:["Democracy","Council","Gov1","Councillor"],slug:"../maintain-archive"},s=void 0,l={id:"maintain/maintain-archive",title:"Maintain Archive",description:"Archive for the Maintain Section.",source:"@site/../docs/maintain/maintain-archive.md",sourceDirName:"maintain",slug:"/maintain-archive",permalink:"/docs/maintain-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-archive.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713e3,frontMatter:{id:"maintain-archive",title:"Maintain Archive",sidebar_label:"Archive",description:"Archive for the Maintain Section.",keywords:["Democracy","Council","Gov1","Councillor"],slug:"../maintain-archive"},sidebar:"docs",previous:{title:"Validator Community Overview",permalink:"/docs/maintain-guides-validator-community"},next:{title:"Participate in Democracy",permalink:"/docs/maintain/maintain-guides-democracy"}},u={},d=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{message:"This section contains archived pages. The content in them no longer applies to Polkadot but can\nstill be relevant for parachains and related projects."}),"\n",(0,r.jsx)(c.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},67141:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),i=n(74848);const a=function(e){var t,n=e.message,a=(0,r.useState)(!0),c=a[0],o=a[1];return(0,i.jsx)(i.Fragment,{children:c&&(0,i.jsxs)("div",{className:"message-box",children:[(0,i.jsx)("button",{className:"close-button",onClick:function(){o(!1)},children:"\u2716 "}),(0,i.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(34164),i=n(26972),a=n(28774),c=n(53465),o=n(16654),s=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){var t=e.href,n=e.children;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){var t=e.href,n=e.icon,i=e.title,a=e.description;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){var t,n,r=e.item,a=(0,i.Nr)(r),o=(n=(0,c.W)().selectMessage,function(e){return n(e,(0,s.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,d.jsx)(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:o(r.items.length)}):null}function p(e){var t,n,r=e.item,a=(0,o.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.cC)(null!=(t=r.docId)?t:void 0);return(0,d.jsx)(h,{href:r.href,icon:a,title:r.label,description:null!=(n=r.description)?n:null==c?void 0:c.description})}function v(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,i.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){var t=e.items,n=e.className;if(!t)return(0,d.jsx)(g,Object.assign({},e));var a=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:a.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(v,{item:e})},t)}))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(44586),a=["zero","one","two","few","many","other"];function c(e){return a.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,i.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:c(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,n}),[e])}function l(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var i=n.select(t),a=n.pluralForms.indexOf(i);return r[Math.min(a,r.length-1)]}(n,t,e)}}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);