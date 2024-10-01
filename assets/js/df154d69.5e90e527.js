"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3880],{80179:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(74848),o=n(28453);const a={id:"learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"XCM, The Messaging Format at the Forefront of Interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},i=void 0,r={id:"learn/learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",description:"XCM, The Messaging Format at the Forefront of Interoperability.",source:"@site/../docs/learn/learn-xcm.md",sourceDirName:"learn",slug:"/learn-xcm",permalink:"/docs/learn-xcm",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-xcm",title:"Introduction to Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"XCM, The Messaging Format at the Forefront of Interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm"},sidebar:"docs",previous:{title:"Cross Consensus Messaging (XCM)",permalink:"/docs/learn-xcm-index"},next:{title:"XCM Pallet",permalink:"/docs/learn-xcm-pallet"}},c={},l=[{value:"A Format, Not a Protocol",id:"a-format-not-a-protocol",level:2},{value:"XCM Tech Stack",id:"xcm-tech-stack",level:3},{value:"Core Functionality of XCM",id:"core-functionality-of-xcm",level:2},{value:"Cross-Consensus Message Format (XCM Format)",id:"cross-consensus-message-format-xcm-format",level:4},{value:"Resources",id:"resources",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{title:"XCM Documentation",type:"info",children:(0,t.jsxs)(s.p,{children:["For a more practical approach to utilizing XCM, refer to the ",(0,t.jsx)(s.a,{href:"./learn/xcm",children:"XCM Docs"}),". Please keep in\nmind that XCM is under active development."]})}),"\n",(0,t.jsxs)(s.p,{children:["The Cross-Consensus Message Format, or ",(0,t.jsx)(s.strong,{children:"XCM"}),", is a ",(0,t.jsx)(s.strong,{children:"messaging format"})," and language used to\ncommunicate between consensus systems."]}),"\n",(0,t.jsx)(s.p,{children:'One of Polkadot\'s main functionalities is interoperability amongst parachains and any other\nparticipating consensus-driven systems. XCM is the language through which complex, cross-consensus\ninteractions can occur. Two blockchains can "speak" XCM to seamlessly interact with each other using\na standard messaging format.'}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"We typically discuss XCM in the context of parachains, but please bear this in mind that it expands\nto the domain of all consensus systems! Remember, a consensus system here means any system or\nprotocol that achieves finality to agree on the latest and correct state, whether it's a Polkadot\nparachain, an EVM smart contract, or other bridged consensus systems."})}),"\n",(0,t.jsxs)(s.p,{children:["XCM is not meant to be only specific to Polkadot, but rather its primary intention is to define a\n",(0,t.jsx)(s.strong,{children:"generic"})," and ",(0,t.jsx)(s.strong,{children:"common"})," format amongst different consensus systems to communicate."]}),"\n",(0,t.jsx)(s.p,{children:"It's important to note that XCM does not define how messages are delivered but rather define how\nthey should look, act, and contain relative instructions to the on-chain actions the message intends\nto perform."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/learn-xcm-transport#xcmp-design",children:(0,t.jsx)(s.strong,{children:"XCMP"})}),", or Cross Chain Message Passing, is the actual\nnetwork-layer protocol to deliver XCM-formatted messages to other participating parachains. There\nare other ways to define transport layer protocols for delivering XCM messages(see:\n",(0,t.jsx)(s.a,{href:"/docs/learn-xcm-transport#hrmp-xcmp-lite",children:"HRMP"})," and\n",(0,t.jsx)(s.a,{href:"/docs/learn-xcm-transport#vmp-vertical-message-passing",children:"VMP"}),")."]}),"\n",(0,t.jsx)(s.p,{children:"XCM has four high-level core design principles which it stands to follow:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Asynchronous"}),": XCM messages in no way assume that the sender will be blocking on its\ncompletion."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Absolute"}),": XCM messages are guaranteed to be delivered and interpreted accurately, in order\nand in a timely fashion. Once a message is sent, one can be sure it will be processed as it was\nintended to be."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Asymmetric"}),": XCM messages, by default, do not have results that let the sender know that the\nmessage was received - they follow the 'fire and forget' paradigm. Any results must be separately\ncommunicated to the sender with an additional message back to the origin."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Agnostic"}),": XCM makes no assumptions about the nature of the consensus systems between which\nthe messages are being passed. XCM as a message format should be usable in any system that\nderives finality through consensus."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"These four crucial design decisions allow for XCM messages to be a reliable yet convenient way to\nproperly convey the intentions from one consensus system to another without any compatibility\nissues."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["XCM is constantly in development - meaning the format is expected to change over time. XCM v3 is the\nlatest version, and is deployed on Polkadot. To view updates on the XCM format, visit the\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/xcm-format",children:"xcm-format repository"})," to view any RFCs that have been\nsubmitted that would contribute to the next release."]})}),"\n",(0,t.jsx)(s.h2,{id:"a-format-not-a-protocol",children:"A Format, Not a Protocol"}),"\n",(0,t.jsxs)(s.p,{children:["What started as an approach to ",(0,t.jsx)(s.em,{children:"cross-chain communication"}),", has evolved into a format for\n",(0,t.jsx)(s.a,{href:"https://polkadot.network/cross-chain-communication",children:(0,t.jsx)(s.strong,{children:"Cross-Consensus Communication"})})," that is not\nonly conducted between chains, but also between smart contracts, pallets, bridges, and even sharded\nenclaves like ",(0,t.jsx)(s.a,{href:"/docs/learn-spree",children:"SPREE"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"XCM cannot actually send messages between systems. It is a format for how message transfer should be\nperformed, similar to how RESTful services use REST as an architectural style of development, where\nHTTP requests contain specific parameters to perform some action."}),"\n",(0,t.jsx)(s.p,{children:'Similar to UDP, out of the box XCM is a "fire and forget" model, unless there is a separate XCM\nmessage designed to be a response message which can be sent from the recipient to the sender. All\nerror handling should also be done on the recipient side.'}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"XCM is not designed in a way where every system supporting the format is expected to be able to\ninterpret any possible XCM message. Practically speaking, one can imagine that some messages will\nnot have reasonable interpretations under some systems or will be intentionally unsupported."})}),"\n",(0,t.jsxs)(s.p,{children:["Furthermore, it's essential to realize that XCM messages by themselves are ",(0,t.jsx)(s.em,{children:"not"})," considered\ntransactions. XCM describes how to change the state of the target network, but the message by itself\ndoesn't perform the state change."]}),"\n",(0,t.jsxs)(s.p,{children:["This partly ties to what is called ",(0,t.jsx)(s.strong,{children:"asynchronous composability"}),", which allows XCM messages to\nbypass the concept of time-constrained mechanisms, like on-chain scheduling and execution over time\nin the correct order in which it was intended."]}),"\n",(0,t.jsx)(s.h3,{id:"xcm-tech-stack",children:"XCM Tech Stack"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"xcm tech stack",src:n(60288).A+"",width:"1204",height:"1316"})}),"\n",(0,t.jsx)(s.p,{children:"XCM can be used to express the meaning of the messages over each of these three communication\nchannels."}),"\n",(0,t.jsx)(s.h2,{id:"core-functionality-of-xcm",children:"Core Functionality of XCM"}),"\n",(0,t.jsx)(s.p,{children:"XCM opens the doors to a multi-hop, multi-network communications."}),"\n",(0,t.jsx)(s.p,{children:"XCM introduces some key features and additions to cross-consensus messaging, including:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Programmability"})," - the ability to have ",(0,t.jsx)(s.strong,{children:"expectations"})," for messages, which allow for more\ncomprehensive use cases, safe dispatches for version checking, branching, and NFT/Asset support."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Functional Multichain Decomposition"})," - the ability to define mechanisms to cross-reference and\nperform actions on other chains on behalf of the origin chain (remote locking), context/id for\nthese messages, and asset namespacing."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Bridging"})," - introduces the concept of a universal location, which allows for a base reference\nfor global consensus systems for multi-hop setups. This location is above the parent relay chain\nor other consensus systems like Ethereum or Bitcoin."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["A core part of the vision that XCM provides is improving communication between the chains to make\n",(0,t.jsx)(s.strong,{children:"system parachains"})," a reality. For example, the Polkadot relay chain handles more than just\nparachain management and shared security - it handles user balances/assets, auctions, governance,\nand staking. Ideally, the relay chain should be for what it's intended to be - a place for shared\nsecurity. System parachains can alleviate these core responsibilities from the relay chain but only\nby using a standard format like XCM."]}),"\n",(0,t.jsx)(s.p,{children:"This is where system parachains come in, where each of these core responsibilities can be delegated\nto a system parachain respectively."}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"XCM bridging, functional multichain decomposition, and programmability upgrades are crucial to\nbringing ecosystems together using a common communication abstraction."})}),"\n",(0,t.jsxs)(s.p,{children:["For more information on the specific instructions used for these key features, head over to the\n",(0,t.jsx)(s.a,{href:"/docs/learn-xcm-instructions",children:"instructions and registers page"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"cross-consensus-message-format-xcm-format",children:"Cross-Consensus Message Format (XCM Format)"}),"\n",(0,t.jsxs)(s.p,{children:["For an updated and complete description of the cross-consensus message format please see the\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/xcm-format",children:"xcm-format repository on GitHub"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=cS8GvPGMLS0",children:"Shawn Tabrizi: XCM - The Backbone Of A Multichain Future | Polkadot Decoded 2022"})," -\nHigh level overview which should answer \u201cWhat is XCM?"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392",children:"XCM: The Cross-Consensus Message Format"})," -\nDetailed blog post by Dr. Gavin Wood about the XCM Format."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/paritytech/xcm-format",children:"XCM Format specification"})," - The best starting point for\nunderstanding the XCM API at a technical level."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=K2c6xrCoQOU&t=1196s",children:"Gavin Wood, Polkadot founder: XCM v3 | Polkadot Decoded 2022"})," -\nHigh level overview of XCM and specifically the new features available in XCM v3."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://medium.com/web3foundation/polkadots-messaging-scheme-b1ec560908b7",children:"XCMP Scheme"})," - An\noverall overview of XCMP describing a number of design decisions."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://paritytech.github.io/polkadot/book/types/messages.html",children:"Messaging Overview"})," - An overview\nof the messaging schemes from the Polkadot Parachain Host Implementor's guide."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=5cgq5jOZx9g",children:"Sub0 Online: Getting Started with XCM - Your First Cross Chain Messages"})," -\nCode focused workshop on how XCM v1 works, and the core concepts of XCM."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://blog.quarkslab.com/resources/2022-02-27-xcmv2-audit/21-12-908-REP.pdf",children:"XCM: Cross-Consensus Messaging Audit"})," -\nTechnical audit report by Quarkslab prepared for Parity."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/xcm/pallet-xcm/src/lib.rs",children:"XCM pallet code"})," -\nThe pallet that contains XCM logic from the Polkadot code repository"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=bFMvWmU1pYI",children:"XCM Config & Pallet-XCM | Polkadot Deep Dives"})," - A\ntechnical deep dive into ",(0,t.jsx)(s.code,{children:"pallet-xcm"})," and the XCM configuration."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},60288:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/cross-consensus-tech-stack-e9c1b2ab8b6f6f3f9a78b3a412af0698.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(96540);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);