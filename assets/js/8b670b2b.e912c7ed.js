"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},s=void 0,d={unversionedId:"build/build-index",id:"build/build-index",title:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",source:"@site/../docs/build/build-index.md",sourceDirName:"build",slug:"/build-index",permalink:"/docs/build-index",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-index.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",keywords:["build","index","tools","resources"],slug:"../build-index"},sidebar:"docs",previous:{title:"Video Tutorials",permalink:"/docs/learn-video-tutorials"},next:{title:"Builders Starter's Guide",permalink:"/docs/build-build-with-polkadot"}},u={},c=[{value:"Development Guide",id:"development-guide",level:2},{value:"Tools &amp; Resources",id:"tools--resources",level:2},{value:"Grants",id:"grants",level:3},{value:"PSPs",id:"psps",level:3},{value:"Hackathon",id:"hackathon",level:3}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the builder's section of the Polkadot Wiki\n"),(0,n.kt)("p",null,"Here, you will discover many development tools and resources in the Polkadot ecosystem. We are\nalways adding new tools and frameworks as we learn about them so if you are working on something\nthat should be included please reach out to us on\n",(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:matrix.org"},"Element"),"\n",". This section of\nthe wiki is divided into the following parts:"),(0,n.kt)("h2",{id:"development-guide"},"Development Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain, parathread, or\nsmart contract for your project and how to get started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/build-pdk"},"Parachain Development")," - Tools for building parachains and parathreads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/build-smart-contracts"},"Polkadot Smart Contracts")," - Tools to deploy contracts to a Polkadot\nparachain.")),(0,n.kt)("h2",{id:"tools--resources"},"Tools & Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," - Command line utility\nfor generating and inspecting key pairs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Polkadot Standards Proposals (PSPs) are\nstandards for the Polkadot ecosystem."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,n.kt)("h3",{id:"grants"},"Grants"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/grants"},"Grants")," - Information regarding grants and funding sources available in the\nPolkadot ecosystem.")),(0,n.kt)("h3",{id:"psps"},"PSPs"),(0,n.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,n.kt)("h3",{id:"hackathon"},"Hackathon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/build-hackathon"},"Resources For Running a Hackathon"))))}m.isMDXComponent=!0}}]);