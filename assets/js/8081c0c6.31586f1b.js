"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1760],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),h=d(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return a?r.createElement(m,n(n({ref:e},c),{},{components:a})):r.createElement(m,n({ref:e},c))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=a.length,n=new Array(s);n[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[h]="string"==typeof t?t:o,n[1]=i;for(var d=2;d<s;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49750:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=a(87462),o=a(63366),s=(a(67294),a(3905)),n=["components"],i={id:"parity-data-dashboards",title:"Parity Data Dashboards",sidebar_label:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",keywords:["data","data-analytics","polkadot","dashboard","dashboards"],slug:"../parity-data-dashboards"},l=void 0,d={unversionedId:"general/parity-data-dashboards",id:"general/parity-data-dashboards",title:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",source:"@site/../docs/general/parity-data-dashboards.md",sourceDirName:"general",slug:"/parity-data-dashboards",permalink:"/docs/parity-data-dashboards",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/parity-data-dashboards.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1717417120,formattedLastUpdatedAt:"Jun 3, 2024",frontMatter:{id:"parity-data-dashboards",title:"Parity Data Dashboards",sidebar_label:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",keywords:["data","data-analytics","polkadot","dashboard","dashboards"],slug:"../parity-data-dashboards"},sidebar:"docs",previous:{title:"Dashboards",permalink:"/docs/dashboards-index"},next:{title:"Staking Dashboard",permalink:"/docs/staking-dashboard"}},c={},h=[{value:"Accessing Polkadot Ecosystem Dashboards",id:"accessing-polkadot-ecosystem-dashboards",level:2},{value:"Notes on How to Use the Interactive Charts",id:"notes-on-how-to-use-the-interactive-charts",level:2},{value:"Where the Data Comes From",id:"where-the-data-comes-from",level:2},{value:"Support: Data Requests, Collaborations, Parachain Onboarding etc.",id:"support-data-requests-collaborations-parachain-onboarding-etc",level:2}],p={toc:h},u="wrapper";function m(t){var e=t.components,i=(0,o.Z)(t,n);return(0,s.kt)(u,(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"accessing-polkadot-ecosystem-dashboards"},"Accessing Polkadot Ecosystem Dashboards"),(0,s.kt)("p",null,"The Parity Data Team has made publicly available a ",(0,s.kt)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/"},"website"),"\nthat displays a number of dashboards relating to Polkadot Ecosystem On-Chain data. The graphs\nprovided are grouped into the following sections:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/stablecoins.html"},"Stablecoins")," - metrics around stablecoins\nin Polkadot AssetHub."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/treasuries.html"},"Treasury")," - metrics around treasuries in\nthe ecosystem."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/staking.html"},"Staking")," - metrics pertaining to staking,\nnomination pools and more."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/parachains.html"},"Ecosystem")," - high level activity metrics\nfor Relay Chains and Parachains."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/eoyr.html"},"Monthly Report")," - an updated version of the\n",(0,s.kt)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/reports/2023/index.html"},"Polkadot in Numbers: Annual Report 2023"),".")),(0,s.kt)("h2",{id:"notes-on-how-to-use-the-interactive-charts"},"Notes on How to Use the Interactive Charts"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/parachains.html"},"Ecosystem Tab")," shows a number of\nuniversally applicable metrics (Active Accounts, Unique Accounts, Transactions, Events) across both\nPolkadot & Kusama Relay/Parachains. Users can select whether they want to view:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Polkadot or Kusama"),(0,s.kt)("li",{parentName:"ul"},"Daily or monthly figures"),(0,s.kt)("li",{parentName:"ul"},"Substrate Only, EVM Only or Substrate + EVM numbers.")),(0,s.kt)("p",null,"The default view is set to Polkadot,Monthly, Substrate + EVM."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Default Selection",src:a(16406).Z,width:"2436",height:"1568"})),(0,s.kt)("p",null,"Here is an example of selecting Polkadot, Daily, Substrate Only for Transactions."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Daily Substrate Transactions Selection",src:a(12322).Z,width:"2476",height:"1244"})),(0,s.kt)("p",null,"Users can also specify which chains they would like to view metrics for. The default view is set to\nthe entire Relay & Parachain grouping. Below is an example of selecting data for only Polkadot\nRelay, Moonbeam and Nodle chains. Users can hit invert selection for convenience to de-select all\noptions before selecting their desired chains."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chain Selection",src:a(47442).Z,width:"2488",height:"1582"})),(0,s.kt)("p",null,"Also, for all graphs on the website, in the top right users can toggle between chart types: choosing\nbar, line or stacked and a combination of those. See below for an example from the\n",(0,s.kt)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/stablecoins.html"},"Stablecoins")," tab."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Stablecoin USDC Example",src:a(60192).Z,width:"2198",height:"818"})),(0,s.kt)("h2",{id:"where-the-data-comes-from"},"Where the Data Comes From"),(0,s.kt)("p",null,"The data displayed on the website comes from DotLake, which is a scalable and cost-efficient data\nplatform built on Google Cloud Platform (GCP) by the Data Team at\n",(0,s.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Technologies"),". It's designed to store all blocks, events,\nextrinsics, and more for all the chains in the Polkadot ecosystem. The platform uses a range of\nexisting technologies, keeping the architecture simple with low operational overhead. This includes\ntools like Terraform, the Substrate Sidecar, Rust & Python programming languages, and various GCP\nservices like Cloud Storage, BigQuery, Cloud Run & Jobs, and Workflows & Functions."),(0,s.kt)("p",null,"The approach allows the processing of data from block number N to M, storing the raw results as JSON\nin Google Cloud Storage. This method not only provides a convenient abstraction, but also avoids the\npitfalls of custom block parsing strategies in the ever-evolving Substrate Framework. The key to the\nplatform's efficiency is the Block Compressor, which optimizes and reduces the data size\nsignificantly, making it more manageable for analytical purposes."),(0,s.kt)("p",null,"DotLake has evolved from it's origins as a data warehouse built to serve Parity's internal data\nneeds. Since then, the scope has been broadened to share data intitiatives and learnings with the\nwider community. The plan is to progressively make datasets available to the public, alongside\ndashboards, metrics, code, and best practices employed to ingest and decode Substrate data."),(0,s.kt)("p",null,"DotLake currently consists of 80+ Polkadot, Kusama, solo-chains and test-nets with their full\nhistory and is continuously expanding."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"DotLake Batch Architecture")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"DotLake Batch Architecture",src:a(32172).Z,width:"1999",height:"1175"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Real-Time Architecture")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Real-Time Architecture",src:a(84378).Z,width:"1999",height:"1071"})),(0,s.kt)("h2",{id:"support-data-requests-collaborations-parachain-onboarding-etc"},"Support: Data Requests, Collaborations, Parachain Onboarding etc."),(0,s.kt)("p",null,"The Parity Data Team is very eager to collaborate with the Ecosystem. If you have any questions,\ndata requests that you need help with, interest in partnerships or you are a Parachain team and want\nyour chain onboarded to the platform - please get in contact with ",(0,s.kt)("a",{parentName:"p",href:"mailto:data-team@parity.io"},"data-team@parity.io"),"."))}m.isMDXComponent=!0},32172:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dotlake-batch-faf8cffceeafe58fffe1130238cd4efd.png"},84378:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dotlake-rt-27bf74fd16b4c6e348e7132b7124eae7.png"},47442:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ecosystem-chain-selection-example-a76c465ade1ad0a26cabd744346155b6.png"},16406:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ecosystem-chart-default-selection-f6144245cd32be99b964e56aa1b1c36d.png"},12322:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ecosystem-polkadot-daily-substrate-transactions-selection-d2fab579bc6f4845d00ec4720cc10264.png"},60192:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/stablecoins-usdc-toggle-chart-type-example-37f2f6aa33e5a49b26adca7f2980773a.png"}}]);