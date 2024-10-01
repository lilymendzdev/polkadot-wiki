"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1018],{31962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(74848),s=t(28453),r=t(67141);const a={id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},i=void 0,l={id:"learn/learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",description:"Polkadot-JS Guides for Ledger Devices.",source:"@site/../docs/learn/learn-guides-ledger.md",sourceDirName:"learn",slug:"/learn-guides-ledger",permalink:"/docs/learn-guides-ledger",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},sidebar:"docs",previous:{title:"Identity Guides",permalink:"/docs/learn-guides-identity"},next:{title:"Polkadot Vault Guides",permalink:"/docs/learn-guides-vault"}},d={},c=[{value:"Loading Your Account",id:"loading-your-account",level:2},{value:"Derivation paths",id:"derivation-paths",level:3},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Navigating your Account",id:"navigating-your-account",level:2},{value:"Sending a Transfer with Ledger Devices",id:"sending-a-transfer-with-ledger-devices",level:2},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:2},{value:"Staking",id:"staking",level:2},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](../general/polkadotjs-ui.md), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/ledger",children:"Ledger devices"})," are hardware wallets that keep your private key secured\non a physical device not directly exposed to your computer or the internet."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/ledger#polkadot-generic-app",children:"Polkadot Generic application"})," allows you to manage\nyour DOT/KSM on Polkadot/Kusama networks, tokens on their Asset Hubs and possibly all chains within\nthe Polkadot ecosystem. It is versatile and capable of handling parachains and relay chains without\nbeing affected by their runtime upgrades."]}),"\n",(0,o.jsx)(n.h2,{id:"loading-your-account",children:"Loading Your Account"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Ledger Live should be off while using Ledger with Polkadot-JS UI, as it can interfere with normal\noperation."})}),"\n",(0,o.jsxs)(n.p,{children:["You can import your Ledger account to ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/extension/",children:"Polkadot Extension"})," or to\nthe ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"Polkadot-JS UI"}),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension",children:"this support article"}),",\nwhile if you want to import Ledger accounts to the Polkadot-JS UI, you can consult\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui",children:"this other article"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"derivation-paths",children:"Derivation paths"}),"\n",(0,o.jsxs)(n.p,{children:["When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,o.jsx)(n.code,{children:"account type"})," and an ",(0,o.jsx)(n.code,{children:"account index"}),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a Polkadot ledger account for the first time on Ledger Live\nwith name ",(0,o.jsx)(n.code,{children:"Polkadot 1"}),", this can be added to Polkadot-JS using the 0/0 derivation path (i.e. account\ntype = 0 and account index = 0). If you add a second account called ",(0,o.jsx)(n.code,{children:"Polkadot 2"}),", this will\ncorrespond to the 1/0 derivation path, and so on. We thus have multiple parent accounts that can be\nviewed and used in both Ledger Live and Polkadot-JS. Additionally, we can use Polkadot-JS UI to\ncreate multiple children accounts from each parent account. For example, ",(0,o.jsx)(n.code,{children:"Polkadot 1"})," with 0/0\nderivation path can have child 0/1, 0/2, etc. that can be used within the UI. However, such children\naccounts cannot be used in Ledger Live, as it only scans through the parent accounts. So, remember\nthat the balances on the children accounts cannot be viewed, and you will not be able to transact\nwith those accounts on Ledger Live."]}),"\n",(0,o.jsx)(n.h3,{id:"confirming-the-address-on-your-device",children:"Confirming the Address on your Device"}),"\n",(0,o.jsxs)(n.p,{children:["If your Ledger account is directly imported into the Polkadot-JS UI, you can ask the UI to confirm\nthe address on your Ledger device. There are a few methods to check the balance of your Ledger\naccount. Check out\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-",children:"this support article"}),"\nfor information."]}),"\n",(0,o.jsx)(n.h2,{id:"navigating-your-account",children:"Navigating your Account"}),"\n",(0,o.jsxs)(n.p,{children:["Once you have loaded your account on the \u201cAccounts\u201d tab, it should show a row with your Ledger\naccount. Your account\u2019s DOT balance is on the row\u2019s far right. Expanding the balance arrow will show\nyour balance details, such as locks or reserved amounts. For more information about the type of\nbalances, visit the ",(0,o.jsx)(n.a,{href:"/docs/learn-account-balances#balance-types-on-polkadot-js",children:"balances page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sending-a-transfer-with-ledger-devices",children:"Sending a Transfer with Ledger Devices"}),"\n",(0,o.jsx)(n.admonition,{title:"Verifying Extrinsics",type:"danger",children:(0,o.jsxs)(n.p,{children:["Visit the\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-using-Ledger",children:(0,o.jsx)(n.strong,{children:"dedicated support page"})}),"\nand see ",(0,o.jsx)(n.a,{href:"https://youtu.be/bxMs-9fBtFk?t=360",children:(0,o.jsx)(n.strong,{children:"this video tutorial"})})," tutorial to learn how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nwhile signing transactions."]})}),"\n",(0,o.jsx)(n.admonition,{title:"Signature error message",type:"info",children:(0,o.jsxs)(n.p,{children:["If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the Polkadot Ledger Generic application on your Ledger Nano\ndevice. Visit\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181994",children:"this support page"})," for\nmore information about signing transactions using your ledger."]})}),"\n",(0,o.jsxs)(n.p,{children:["General instructions to send a transfer can be found on\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui",children:"this support page"}),".\nTo sign transactions with your Ledger Nano check\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181994",children:"this support article"})," or\nsee ",(0,o.jsx)(n.a,{href:"https://youtu.be/gbvrHzr4EDY?t=579",children:"this video tutorial"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"receiving-a-transfer",children:"Receiving a Transfer"}),"\n",(0,o.jsxs)(n.p,{children:["To receive a transfer on the accounts stored on your Ledger device, you must provide the sender\n(i.e., the payer) with your address. To do so, follow the instructions on\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui",children:"this support page"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Sharing your account address",type:"caution",children:(0,o.jsxs)(n.p,{children:["Before giving anyone your address, ensure it matches what's on the Ledger by\n",(0,o.jsx)(n.a,{href:"#confirming-the-address-on-your-device",children:"confirming the address on your device"}),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense."]})}),"\n",(0,o.jsx)(n.p,{children:"The easiest way to get your address is to click on the account name. This will open a sidebar\nshowing your address and other information, such as on-chain identity. Another method is just\nclicking on your account's avatar icon - this immediately copies your address to the clipboard."}),"\n",(0,o.jsx)(n.admonition,{title:"Your Asset Hub address is the same as your relay chain address",type:"note",children:(0,o.jsx)(n.p,{children:"Make sure that you clarify to the sender that you wish to receive your tokens on the Asset Hub\nparachain, otherwise (if you're receiving DOT or KSM tokens) they could be sent on the Polkadot or\nKusama relay chain."})}),"\n",(0,o.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,o.jsxs)(n.p,{children:["For staking using Ledger devices, follow the instructions on\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-",children:"this support article"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ledger-developer-release",children:"Ledger Developer Release"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,o.jsx)(n.em,{children:"know precisely what you're doing"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"why-you-might-need-the-developer-release",children:"Why you might need the Developer Release"}),"\n",(0,o.jsxs)(n.p,{children:["Ledger apps for the Polkadot ecosystem are developed by ",(0,o.jsx)(n.a,{href:"https://zondax.ch/",children:"Zondax"}),". When new\nfunctionalities are added to the Ledger apps, they are made available on a developer release for\ntesting purposes. After a successful audit and review, the apps would be available for download and\ninstallation using ",(0,o.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"}),". As it takes some time for\nLedger to audit and review the release, the app upgrade option may not be available on Ledger Live\nwhen the new runtime is deployed on the network. If this happens, users cannot use Ledger devices to\nsign transactions. Suppose you cannot wait a few days until the app passes the Ledger audit, you can\ninstall the developer release from the shell using the latest version published on\n",(0,o.jsx)(n.a,{href:"https://github.com/Zondax/ledger-polkadot/releases",children:"the Zondax GitHub repository"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"install-the-developer-release",children:"Install the Developer Release"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://youtu.be/4SyVQrlXZ_Q",children:(0,o.jsx)(n.strong,{children:"this video tutorial"})})," to learn how to install the developer\nrelease of your ledger app."]}),(0,o.jsx)(n.p,{children:"Currently, the developer release can be installed only on the Nano S and S Plus devices and can't be\ninstalled on the Nano X."})]}),"\n",(0,o.jsxs)(n.p,{children:["To install the developer version, make sure you have the latest ",(0,o.jsx)(n.code,{children:"pip"})," version and follow the steps\nbelow:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.em,{children:"ledgerblue"})," running the command ",(0,o.jsx)(n.code,{children:"python3 -m pip install ledgerblue"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Download the developer release from the\n",(0,o.jsx)(n.a,{href:"https://github.com/Zondax/ledger-polkadot/releases",children:"Zondax GitHub repository"}),". The file will be\nnamed ",(0,o.jsx)(n.code,{children:"installer_nanos_plus.sh"})," or something similar, depending on your ledger device."]}),"\n",(0,o.jsxs)(n.li,{children:["Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,o.jsx)(n.code,{children:"chmod +x installer_nanos_plus.sh"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You can now use the ",(0,o.jsx)(n.code,{children:"./installer_nanos_plus.sh --help"})," command to visualize the available options\n(see below)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Dev Ledger Help Menu",src:t(93611).A+"",width:"525",height:"54"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Attach your Ledger Nano (in this case, Nano S Plus) to your computer, enter the PIN code, and run\nthe command ",(0,o.jsx)(n.code,{children:"./installer_nanos_plus.sh load"}),'. Scroll with the right button until you see "Allow\nunsafe manager", left and right press to confirm. You will be asked to confirm the action of\nuninstalling the app and subsequently installing the newer version. After confirming both actions,\nthe shell script will install the version on your device. You must insert the PIN code to use the\ndevice after the installation.']}),"\n",(0,o.jsx)(n.li,{children:"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},67141:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(96540),s=t(74848);const r=function(e){var n,t=e.message,r=(0,o.useState)(!0),a=r[0],i=r[1];return(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsxs)("div",{className:"message-box",children:[(0,s.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,s.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(n=t,n.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},93611:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);