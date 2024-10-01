"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6555],{35209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453),o=n(67141);const r={id:"ledger",title:"Using the Polkadot Ledger Apps",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},a=void 0,l={id:"general/ledger",title:"Using the Polkadot Ledger Apps",description:"Use the Polkadot Ledger Application.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/ledger",permalink:"/docs/ledger",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726730833e3,frontMatter:{id:"ledger",title:"Using the Polkadot Ledger Apps",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},sidebar:"docs",previous:{title:"Wallets and Extensions",permalink:"/docs/wallets-and-extensions"},next:{title:"Polkadot Vault",permalink:"/docs/polkadot-vault"}},d={},c=[{value:"Ledger Devices Compatibility",id:"ledger-devices-compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Polkadot Ledger Apps",id:"polkadot-ledger-apps",level:2},{value:"Polkadot Migration App",id:"polkadot-migration-app",level:3},{value:"Polkadot (Generic) App",id:"polkadot-generic-app",level:3},{value:"Migration Process",id:"migration-process",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{message:"If you need help using Ledger, see [this support article](https://support.ledger.com/hc/en-us/articles/360016289919-Polkadot-DOT?docs=true). If the problem persists, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home)."}),"\n",(0,i.jsxs)(t.p,{children:["The Polkadot ",(0,i.jsx)(t.a,{href:"https://www.ledger.com/",children:"Ledger"})," application is compatible with the Ledger Nano S,\nNano X, and Stax devices. Ledger devices are hardware wallets that keep your secret key secured on a\nphysical device that does not expose it to your computer or the internet. The private keys will not\nbe exposed even if you connect your Ledger device via USB to your computer."]}),"\n",(0,i.jsx)(t.p,{children:"Ledger devices are hierarchical deterministic wallets (HD wallets), where:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Deterministic"})," means that only one seed phrase generates all the accounts for different\nblockchain networks."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Hierarchical"})," means that the accounts are generated in a tree-like structure for different\npurposes."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ledger-devices-compatibility",children:"Ledger Devices Compatibility"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Device"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Platform"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Battery"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Apps"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Security"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Nano S"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["PC",(0,i.jsx)("sup",{children:"1"})]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["All (lite, XL",(0,i.jsx)("sup",{children:"2"}),")"]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Certified Secure Element (CC EAL5+)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Discontinued"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Nano S Plus"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"PC"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"All (lite, XL, plus)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Certified Secure Element (CC EAL6+)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"In Production"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Nano X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"PC, Mobile via bluetooth"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"All (lite, XL, plus)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Certified Secure Element (CC EAL5+)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"In Production"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Stax"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"PC, Mobile via bluetooth"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Dedicated"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Certified Secure Element (CC EAL6+)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"In Production"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)("sup",{children:"1"})," Because of required WebUSB support, Ledger wallets currently only work on\nChromium-based browsers like Google Chrome.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)("sup",{children:"2"})," The lite version of the Polkadot Ledger App that you can install by default in the\nLedger Nano S has limited functionality. The Ledger Nano S is no longer produced and has limited\nmemory that is just right to accommodate the XL version of the Polkadot Ledger App, which gives the\nuser more functionalities.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.p,{children:"If you do use a Nano S with the XL version, you will not be able to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Install any other Ledger application on your device"}),"\n",(0,i.jsx)(t.li,{children:"Add Polkadot accounts to the Ledger Live App."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["But you will be able to add them to ",(0,i.jsx)(t.a,{href:"/docs/wallets-and-extensions",children:"wallets and extensions"})," that\nsupport Ledger devices."]}),"\n",(0,i.jsxs)(t.p,{children:["More information on Ledger device comparisons\n",(0,i.jsx)(t.a,{href:"https://shop.ledger.com/pages/hardware-wallets-comparison",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(t.p,{children:"Here is a list of what you will need before using Polkadot with Ledger:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A Ledger Nano X, Stax, or Nano S plus (recommended for the Polkadot Ledger App space requirements\nand functionalities)."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," installed and up-to-date."]}),"\n",(0,i.jsx)(t.li,{children:'The latest firmware of the Polkadot Ledger App installed (always check for updates in Ledger Live\nunder the "Manager" tab; you will need to allow access with your nano).'}),"\n",(0,i.jsx)(t.li,{children:"A Chromium-based web browser if you use a browser extension."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Ledger devices are tiny computers. They have an operating system (or firmware), and on top of it,\nyou can install applications. Every blockchain needs to develop its own application to use Ledger\ndevices. Make sure you have your Ledger devices with firmware and apps up-to-date."}),"\n",(0,i.jsx)(t.h2,{id:"polkadot-ledger-apps",children:"Polkadot Ledger Apps"}),"\n",(0,i.jsxs)(t.p,{children:["Ledger devices can be equipped with applications that are blockchain-specific. Third parties usually\ndevelop such applications, enabling users to transact securely on the blockchain network. Polkadot\nLedger apps are developed by ",(0,i.jsx)(t.a,{href:"https://zondax.ch/",children:"Zondax"})," and are available\n",(0,i.jsx)(t.a,{href:"https://github.com/Zondax/ledger-polkadot",children:"here"}),". The Polkadot Ledger application allows you to\nmanage Polkadot, Kusama and their parachains native tokens."]}),"\n",(0,i.jsx)(t.admonition,{title:"Ledger apps may not support all the transactions",type:"note",children:(0,i.jsxs)(t.p,{children:["Check the ",(0,i.jsx)(t.a,{href:"https://github.com/Zondax/ledger-polkadot",children:"Ledger Polkadot App"})," specification for the\nlist of transactions supported. Some transactions are supported only on a specific app version, and\nothers are not supported by any version. For instance, joining a\n",(0,i.jsx)(t.a,{href:"/docs/learn-nomination-pools",children:"nomination pool"})," is only possible with the ",(0,i.jsx)(t.strong,{children:"XL version"})," but\nnot on the ",(0,i.jsx)(t.strong,{children:"lite version"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"polkadot-migration-app",children:"Polkadot Migration App"}),"\n",(0,i.jsx)(t.admonition,{title:"For Migration Only",type:"warning",children:(0,i.jsx)(t.p,{children:"This app is only meant for performing the migration to the Polkadot Generic App; do not use it\nfrequently. After you migrate your assets, delete the Migration app and use the Polkadot Generic\nApp."})}),"\n",(0,i.jsxs)(t.p,{children:["The Polkadot Migration app is for users having ",(0,i.jsxs)(t.strong,{children:["old Ledger accounts not on the Polkadot relay chain\nand ",(0,i.jsx)(t.a,{href:"/docs/glossary#system-parachains",children:"Polkadot System Chains"})]}),". Old Ledger accounts are accounts\nthat have been created using the old Kusama Ledger app and any parachain Ledger apps (for both\nKusama and Polkadot) except for Polkadot System Chains."]}),"\n",(0,i.jsx)(t.p,{children:"Suppose you have accounts on any Polkadot parachain, Kusama relay chain, and Kusama parachains. In\nthat case, you will need the Polkadot Migration app to move fungible and non-fungible assets (NFT),\nidentities, etc., from old Ledger accounts to a new one or an existing one created with the Polkadot\nLedger app."}),"\n",(0,i.jsx)(t.h3,{id:"polkadot-generic-app",children:"Polkadot (Generic) App"}),"\n",(0,i.jsxs)(t.p,{children:["The Polkadot Ledger Generic App will allow you to use your Ledger device on the relay chain and\nparachains without being affected by runtime upgrades. The goal is to provide a single application\nfor the entire Polkadot ecosystem without compromising security. This new app will also count with\nClear Signing, allowing you to see what you sign on a trusted display. This way, unintentionally\nsigning rogue transactions can be avoided. ",(0,i.jsx)(t.a,{href:"/docs/transaction-attacks",children:"See this page"})," to understand\nthe importance of verifying transactions before signing them."]}),"\n",(0,i.jsx)(t.p,{children:"The Polkadot Ledger Generic app brings the following benefits:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Innovation Acceleration: Enabling teams to innovate and develop new features for relay chains,\nparachains, and current/future users."}),"\n",(0,i.jsx)(t.li,{children:"Network Adoption: Facilitating a smoother and more user-friendly adoption of the Polkadot\necosystem."}),"\n",(0,i.jsx)(t.li,{children:"Innovation without compromising security: The new Polkadot app comes with the highest security\nstandards so that users can keep their assets safe."}),"\n",(0,i.jsx)(t.li,{children:"Development Efficiency: The app helps developing teams save costs by having and maintaining their\napp."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The Polkadot Ledger Generic app will be supported by Ledger Live,\n",(0,i.jsx)(t.a,{href:"https://novawallet.io/",children:"Nova Wallet"}),", ",(0,i.jsx)(t.a,{href:"https://www.talisman.xyz/",children:"Talisman"}),", and\n",(0,i.jsx)(t.a,{href:"https://www.subwallet.app/",children:"Subwallet"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information about the Polkadot Generic App, see the\n",(0,i.jsx)(t.a,{href:"https://support.ledger.com/hc/en-us/articles/17550211746845-New-Polkadot-app-FAQ?docs=true%20:dot",children:"Ledger FAQ"}),",\nand ",(0,i.jsx)(t.a,{href:"https://substrate.beryx.io/new_polkadot_ledger_app",children:"Zondax beryx page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"migration-process",children:"Migration Process"}),"\n",(0,i.jsx)(t.p,{children:"The migration process is not meant for Polkadot relay chain and System Chains users. Those users can\ninstall the Polkadot app and operate it as usual. For users of Kusama relay chain, Kusama System\nChains and parachains, and Polkadot parachains, see the procedure below:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Install Polkadot Migration and Polkadot App."}),"\n",(0,i.jsxs)(t.li,{children:["Use a browser extension or mobile wallet that supports the new apps. No application will\nautomatically migrate your assets. You need to manually migrate your assets,\n",(0,i.jsx)(t.a,{href:"/docs/learn-identity",children:"identities"}),", ",(0,i.jsx)(t.a,{href:"/docs/learn-staking",children:"staking"}),", etc., to the\naccount controlled by the Polkadot app and sign in with the Migration app (some extensions and\nwallets UI will prompt which app you need to use to sign in depending on the chain you are in)."]}),"\n",(0,i.jsx)(t.li,{children:"When the migration process is finished, you can delete the Migration app, and everything will be\naccessible using the Polkadot Generic app."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Staking and Identities",type:"info",children:(0,i.jsx)(t.p,{children:"The migration process will also include removing identities from your old account and resetting them\nto the new one. You will also need to unstake, wait for the unbonding period, transfer the funds to\nthe new account, and stake again."})}),"\n",(0,i.jsx)(t.h2,{id:"using-ledger-live",children:"Using Ledger Live"}),"\n",(0,i.jsxs)(t.p,{children:["See\n",(0,i.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live",children:"this support article"}),"\nto learn how to use Polkadot with ledger live."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{title:"Polkadot-JS Guides",type:"info",children:(0,i.jsxs)(t.p,{children:["If you are an advanced user, see the\n",(0,i.jsx)(t.a,{href:"/docs/learn-guides-ledger",children:"Polkadot-JS guides about Ledger"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},67141:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(96540),s=n(74848);const o=function(e){var t,n=e.message,o=(0,i.useState)(!0),r=o[0],a=o[1];return(0,s.jsx)(s.Fragment,{children:r&&(0,s.jsxs)("div",{className:"message-box",children:[(0,s.jsx)("button",{className:"close-button",onClick:function(){a(!1)},children:"\u2716 "}),(0,s.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);