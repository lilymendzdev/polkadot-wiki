(self.webpackChunk=self.webpackChunk||[]).push([[4024],{95304:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(74848),a=s(28453);s(47379);const o={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},r=void 0,i={id:"learn/learn-teleport",title:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Asset Conversion",permalink:"/docs/learn-asset-conversion-assethub"},next:{title:"Introduction to NFTs",permalink:"/docs/learn-nft"}},l={},c=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["One of the main properties that Polkadot brings to the blockchain industry is secure\ninteroperability. This interoperability allows for ",(0,n.jsx)(t.strong,{children:"asset teleportation"}),", i.e., the process of\nmoving assets (such as fungible and non-fungible tokens) between chains (parachains) to use them as\nany other asset native to that chain. Interoperability is possible through ",(0,n.jsx)(t.a,{href:"/docs/learn-xcm",children:"XCM"})," and\n",(0,n.jsx)(t.a,{href:"/docs/learn-spree",children:"SPREE modules"}),", which together ensure that assets are not lost or duplicated across\nmultiple chains."]}),"\n",(0,n.jsx)(t.admonition,{title:"Walk-through video tutorial about teleporting assets",type:"info",children:(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://youtu.be/3tE9ouub5Tg",children:"this technical explainer video"})," to learn how to teleport assets\nfrom Kusama to the Asset Hub. The same procedure applies to teleporting between Polkadot and the\nPolkadot Asset Hub, or any other parachain."]})}),"\n",(0,n.jsx)(t.h2,{id:"how-teleports-work",children:"How Teleports work"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"teleport",src:s(70883).A+"",width:"1397",height:"611"})}),"\n",(0,n.jsx)(t.p,{children:"As you can see from the diagram above, there are only two actors within this model: the source and\nthe destination. How we transfer assets between the source and the destination is briefly summarized\nin the numbered labels on the diagram and explained in more detail below."}),"\n",(0,n.jsx)(t.h3,{id:"initiate-teleport",children:"Initiate Teleport"}),"\n",(0,n.jsxs)(t.p,{children:["The source gathers the assets to be teleported from the sending account and ",(0,n.jsx)(t.strong,{children:"takes them out"})," from\nthe circulating supply, taking note of the total amount of assets that was taken out."]}),"\n",(0,n.jsx)(t.h3,{id:"receive-teleported-assets",children:"Receive Teleported Assets"}),"\n",(0,n.jsxs)(t.p,{children:["The source chain then creates an ",(0,n.jsx)(t.a,{href:"/docs/learn-xcm",children:"XCM"})," instruction called ",(0,n.jsx)(t.code,{children:"ReceiveTeleportedAssets"}),"\ncontaining the receiving account and the amount of assets taken out from circulation as parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["It then sends this instruction over to the destination chain, where it gets processed, and new\nassets are ",(0,n.jsx)(t.strong,{children:"put back into"})," the circulating supply."]}),"\n",(0,n.jsx)(t.h3,{id:"deposit-asset",children:"Deposit Asset"}),"\n",(0,n.jsxs)(t.p,{children:["The destination deposits the assets to the receiving account. The actions of ",(0,n.jsx)(t.strong,{children:"taking out"})," from the\ncirculating supply and ",(0,n.jsx)(t.strong,{children:"putting back"})," into the circulating supply show the great flexibility that\nan ",(0,n.jsx)(t.a,{href:"/docs/learn-xcm",children:"XCM"})," executor has in regulating the flow of an asset without changing its\ncirculating supply. Assets are transferred to an inaccessible account to remove them from\ncirculation. Likewise, for putting assets back into circulation, assets are released from a\npre-filled and inaccessible treasury, or perform a mint of the assets. This process requires mutual\ntrust between the source and destination. The destination must trust the source of having\nappropriately removed the sent assets from the circulating supply, and the source must trust the\ndestination of having put the received assets back into circulation. The result of an asset\nteleportation should result in the same circulating supply of the asset, and failing to uphold this\ncondition will result in a change in the asset's total issuance (in the case of fungible tokens) or\na complete loss/duplication of an NFT."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},47379:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var n=s(90675),a=s(10467),o=s(96540),r=s(69761),i=s(84393),l=s(11135);function c(e,t,s){return p.apply(this,arguments)}function p(){return(p=(0,a.A)((0,n.A)().mark((function e(t,s,a){var o,l,c,p,d;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return o="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return o="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==o){e.next=22;break}return e.abrupt("return");case 22:return c=new r.E(o),e.next=25,i.G.create({provider:c});case 25:p=e.sent,(d=s.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=p.toString(),e.abrupt("break",39);case 33:return e.next=35,p();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+s);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,s,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,s,n);break;case"precise":(0,l.Precise)(e,s,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,s);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,s=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,o.useState)(""),u=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,a.A)((0,n.A)().mark((function e(){var a;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,s,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),u}},11135:e=>{var t="polkadot",s="kusama",n="statemine",a="statemint",o="polkadotpeople",r="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,c){var p=void 0;if(l===t||l===a)p=3;else if(l===s||l===n||l===o)p=6;else{if(l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=8}e=parseFloat(e),c((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(p)+" "+i[l].symbol).toString())},Precise:function(e,t,s){s(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var c=void 0;if(l===t||l===a||l==o)c=1;else{if(l!==s&&l!==n&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}i((e/=c).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},70883:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});const n=s.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},47790:()=>{}}]);