"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9909],{66232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(74848),s=n(28453),r=n(67141);const a={id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},l=void 0,c={id:"learn/archive/learn-controller",title:"Controller Accounts",description:"Controller Accounts used in Staking.",source:"@site/../docs/learn/archive/learn-controller.md",sourceDirName:"learn/archive",slug:"/learn/learn-controller",permalink:"/docs/learn/learn-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/archive/learn-controller.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713e3,frontMatter:{id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},sidebar:"docs",previous:{title:"Redenomination of DOT",permalink:"/docs/learn/learn-redenomination"},next:{title:"Polkadot Developer Portal",permalink:"/docs/build-guide"}},i={},d=[{value:"Stash as Controller",id:"stash-as-controller",level:2},{value:"Stash not as Controller",id:"stash-not-as-controller",level:2}];function h(e){const t={h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{message:"The content on this page is archived. Controller accounts are deprecated. For more information, see\n[this discussion](https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748)."}),"\n",(0,o.jsx)(t.p,{children:'Controller accounts were used for staking and were a "less-powerful" version of staking proxies.\nControllers could only sign for unbonding and rebonding funds, nominating and changing the reward\ndestination. The stash account was still used to bond more funds and change the controller.\nController accounts became redundant and added unnecessary complexity to the staking mechanics.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"controller-accounts",src:n(73768).A+"",width:"1920",height:"800"})}),"\n",(0,o.jsx)(t.p,{children:"With the setup shown above, the stash account was not entirely isolated. More complicated designs to\nfully isolate the stash account included having both controller and staking proxies (see below)."}),"\n",(0,o.jsx)(t.h2,{id:"stash-as-controller",children:"Stash as Controller"}),"\n",(0,o.jsx)(t.p,{children:"It was unnecessary to have a controller if you had a staking proxy. In this case the stash was also\nset to be the controller, and the account security would not have been compromised. The staking\nproxy was used to sign all staking-relate transactions. Note that you needed to sign with the stash\nto change the staking proxy."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"stash-as-controller",src:n(50515).A+"",width:"1920",height:"800"})}),"\n",(0,o.jsx)(t.p,{children:'This past situation was similar to the present setup, except that now there is no option to set the\nstash as controller and that the action of "changing the controller" is missing. From a practical\nperspective, we need to use only one account and remember one password to sign for all\nstaking-related transactions. From a security perspective, who controls the staking proxy controls\nour staking actions.'}),"\n",(0,o.jsx)(t.h2,{id:"stash-not-as-controller",children:"Stash not as Controller"}),"\n",(0,o.jsx)(t.p,{children:"If the stash and controller were different accounts, the staking proxy was used to bond more funds\nand change the controller. Thus the staking proxy was used to sign for those transactions that were\nused less often and usually signed by the stash."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"stash-not-as-controller",src:n(29331).A+"",width:"1920",height:"800"})}),"\n",(0,o.jsx)(t.p,{children:"From a practical perspective, there were two accounts, and we needed to remember two passwords. From\na security perspective, the party who wanted to control our staking actions was required to control\ntwo accounts."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},67141:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(96540),s=n(74848);const r=function(e){var t,n=e.message,r=(0,o.useState)(!0),a=r[0],l=r[1];return(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsxs)("div",{className:"message-box",children:[(0,s.jsx)("button",{className:"close-button",onClick:function(){l(!1)},children:"\u2716 "}),(0,s.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},50515:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/stash-as-controller-b9840d38c845fce713390da24c60e4a4.png"},73768:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/stash-controller-978875461a51b1f2689c22bdadfde1e4.png"},29331:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/stash-not-as-controller-8a6c27ea620379446da133a42f860029.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var o=n(96540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);