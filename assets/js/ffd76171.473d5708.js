"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[639],{98319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453),a=t(3514);const o={id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",description:"Reference point for network maintenance guides.",keywords:["maintain","validator","collator"],slug:"../maintain-index"},s=void 0,l={id:"maintain/maintain-index",title:"Network Maintainers",description:"Reference point for network maintenance guides.",source:"@site/../docs/maintain/maintain-index.md",sourceDirName:"maintain",slug:"/maintain-index",permalink:"/docs/maintain-index",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-index.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727167801e3,frontMatter:{id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",description:"Reference point for network maintenance guides.",keywords:["maintain","validator","collator"],slug:"../maintain-index"},sidebar:"docs",previous:{title:"Parachain Development",permalink:"/docs/build-pdk"},next:{title:"Parameters",permalink:"/docs/maintain-polkadot-parameters"}},c={},d=[];function u(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Welcome to the network maintainers section of the Polkadot Wiki. Here you will find information and\nguides to set up a node and run the network."}),"\n",(0,i.jsx)(a.A,{}),"\n",(0,i.jsxs)(n.admonition,{title:"Polkadot's Canary Network Kusama",type:"info",children:[(0,i.jsx)(n.p,{children:"For more information about being a Kusama maintainer, see the pages below:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/learn-nominator",children:"Nomination Guide"})," - Walkthrough on how to nominate on the Kusama\ncanary network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/maintain-guides-how-to-validate-kusama",children:"Validation Guide (Kusama)"})," - Walkthrough on how\nto validate on the Kusama canary network."]}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>k});t(96540);var i=t(34164),r=t(26972),a=t(28774),o=t(53465),s=t(16654),l=t(21312),c=t(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function m(e){var n=e.href,t=e.children;return(0,u.jsx)(a.A,{href:n,className:(0,i.A)("card padding--lg",d.cardContainer),children:t})}function f(e){var n=e.href,t=e.icon,r=e.title,a=e.description;return(0,u.jsxs)(m,{href:n,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),a&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function h(e){var n,t,i=e.item,a=(0,r.Nr)(i),s=(t=(0,o.W)().selectMessage,function(e){return t(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,u.jsx)(f,{href:a,icon:"\ud83d\uddc3\ufe0f",title:i.label,description:null!=(n=i.description)?n:s(i.items.length)}):null}function p(e){var n,t,i=e.item,a=(0,s.A)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(null!=(n=i.docId)?n:void 0);return(0,u.jsx)(f,{href:i.href,icon:a,title:i.label,description:null!=(t=i.description)?t:null==o?void 0:o.description})}function x(e){var n=e.item;switch(n.type){case"link":return(0,u.jsx)(p,{item:n});case"category":return(0,u.jsx)(h,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function g(e){var n=e.className,t=(0,r.$S)();return(0,u.jsx)(k,{items:t.items,className:n})}function k(e){var n=e.items,t=e.className;if(!n)return(0,u.jsx)(g,Object.assign({},e));var a=(0,r.d1)(n);return(0,u.jsx)("section",{className:(0,i.A)("row",t),children:a.map((function(e,n){return(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},n)}))})}},53465:(e,n,t)=>{t.d(n,{W:()=>c});var i=t(96540),r=t(44586),a=["zero","one","two","few","many","other"];function o(e){return a.filter((function(n){return e.includes(n)}))}var s={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,r.A)().i18n.currentLocale;return(0,i.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:o(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(i){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+i.message+"\n"),s}var n,t}),[e])}function c(){var e=l();return{selectMessage:function(n,t){return function(e,n,t){var i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+i.length+": "+e);var r=t.select(n),a=t.pluralForms.indexOf(r);return i[Math.min(a,i.length-1)]}(t,n,e)}}}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);