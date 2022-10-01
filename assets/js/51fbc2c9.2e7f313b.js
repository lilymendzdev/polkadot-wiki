"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",keywords:["comparisons","polkadot","blockchain"],slug:"../learn-comparisons"},l=void 0,c={unversionedId:"learn/learn-comparisons",id:"learn/learn-comparisons",title:"Polkadot Comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",source:"@site/../docs/learn/learn-comparisons.md",sourceDirName:"learn",slug:"/learn-comparisons",permalink:"/docs/learn-comparisons",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparisons.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959959,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"Learn how Polkadot compares to Ethereum 2, Cosmos, and other chains.",keywords:["comparisons","polkadot","blockchain"],slug:"../learn-comparisons"},sidebar:"docs",previous:{title:"Comparing Polkadot and Kusama",permalink:"/docs/learn-kusama-vs-polkadot"},next:{title:"Ethereum 2.0",permalink:"/docs/learn-comparisons-ethereum-2"}},p={},h=[{value:"In-Depth Comparisons",id:"in-depth-comparisons",level:2},{value:"Other Comparisons",id:"other-comparisons",level:2},{value:"Ethereum 1.x",id:"ethereum-1x",level:3},{value:"Binance Smart Chain",id:"binance-smart-chain",level:2}],d={toc:h};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot is a blockchain technology but makes some innovations that sets it apart from other popular\nchains."),(0,o.kt)("h2",{id:"in-depth-comparisons"},"In-Depth Comparisons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-ethereum-2"},"vs Ethereum 2.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"vs Cosmos")))),(0,o.kt)("h2",{id:"other-comparisons"},"Other Comparisons"),(0,o.kt)("h3",{id:"ethereum-1x"},"Ethereum 1.x"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org"},"Ethereum")," is a smart contract blockchain that allows for general computation\nto be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current\nEthereum release and the immediately planned future upgrades."),(0,o.kt)("p",null,"The difference between Ethereum 1.x and Polkadot is quite large. Ethereum is a single chain that\nallows developers to extend its functionality through the deployment of blobs of code onto the chain\n(called smart contracts). Polkadot, as described in the whitepaper, is a fully extensible and\nscalable blockchain network that provides security and interoperability through shared state."),(0,o.kt)("p",null,"In practical terms, this means that the layer of abstraction between these two projects is\nremarkably different for developers. In Ethereum, developers write smart contracts that all execute\non a single virtual machine, called the Ethereum Virtual Machine (EVM). In Polkadot, however,\ndevelopers write their logic into individual blockchains, where the interface is part of the state\ntransition function of the blockchain itself. Polkadot will also support smart contract blockchains\nfor Wasm and EVM to provide compatibility with existing contracts, but will not have smart contract\nfunctionality on its core chain, the Relay Chain."),(0,o.kt)("p",null,"As such, Polkadot is a possible augmentation and scaling method for Ethereum 1.x, rather than\ncompetition."),(0,o.kt)("h2",{id:"binance-smart-chain"},"Binance Smart Chain"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.binance.com"},"Binance Chain")," is a Proof of Stake Authority (PoSA) blockchain used to\nexchange digital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract\nchain bridged to Binance Chain. Together, they form the Binance Dual Chain System. Binance Smart\nChain is also a Proof of Stake Authority chain and allows users to create smart contracts and dapps."),(0,o.kt)("p",null,"Both chains are built with Cosmos SDK and therefore are a part of the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"Cosmos")," ecosystem. Due to specifics of the Cosmos architecture,\ninteroperability of Binance Smart Chain is based on bridges. This means all validators of both\nchains are also bridge operators, therefore the security of the system relies on trusting\nvalidators. At the moment, there are 21 Binance Smart Chain validator nodes."),(0,o.kt)("p",null,"Polkadot has an entirely different purpose, as it was built to connect and secure unique\nblockchains. It is a protocol on which single blockchains (such as Binance Smart Chain) could be\nbuilt and benefit from shared security, interoperability and scalability. Interoperability within\nPolkadot is based on pooled security on Polkadot, and the security of the entire Polkadot network,\nand has much stronger economic security."),(0,o.kt)("p",null,"Scalability based on bridges relies on each bridged chain finding its own set of validators,\ntherefore duplicate resources are required. Scalability on Polkadot is based on the security of the\nRelay Chain, and as the number of validators in the active set on Polkadot are increased, more\nparachains can be supported."))}m.isMDXComponent=!0}}]);