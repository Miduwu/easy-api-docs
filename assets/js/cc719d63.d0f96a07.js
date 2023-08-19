"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},l="EASY-API",i={unversionedId:"old/README",id:"old/README",title:"EASY-API",description:"A powerful library to create your own API with ease.",source:"@site/docs/old/README.md",sourceDirName:"old",slug:"/old/",permalink:"/docs/old/",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/old/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$writeFile",permalink:"/docs/old/functions/$writeFile"},next:{title:"Escapers",permalink:"/docs/old/escapers"}},s={},c=[{value:"Install",id:"install",level:2},{value:"Features",id:"features",level:2},{value:"Easy setup",id:"easy-setup",level:2},{value:"You need to know...",id:"you-need-to-know",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"easy-api"},"EASY-API"),(0,o.kt)("p",null,"A powerful library to create your own API with ease."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/1b637c74e2bcd2feb02d7a3ca3d61263bed5d673dfd472ee663157db1d2000f6/68747470733a2f2f692e696d6775722e636f6d2f326b735a5342792e6a7067",alt:"image",title:":size=750"})),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"npm i easy-api.ts"))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 Optimized and advanced codes and functions."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcdd Easy to learn."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcda Constant updates."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd25 Image manipulation.")),(0,o.kt)("h2",{id:"easy-setup"},"Easy setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { API } = require(\"easy-api.ts\"); // Use: import { API } from 'easy-api.ts'; for TypeScript.\n\nconst api = new API({\n    port: process.env.PORT || 3000,\n    spaces: 1,\n    reverseReading: false\n})\n\napi.routes.add({\n    path: '/color',\n    code: `\n    $ignore[Check docs to see how does functions work ;)]\n    $if[$getQuery[hex]==undefined||$isValidHex[$getQuery[hex]]==false;\n        $send[400;json;{\n            \"error\": \"Invalid hex color code provided\"\n        }]\n        $break $ignore[IMPORTANT!!]\n    ]\n\n    $createCanvas[512;512]\n    $color[$getQuery[hex]]\n    $drawRect[0;0;512;512]\n    $send[200;canvas;$default]\n    `\n    `\n})\n\n// Lets load the handler...\napi.routes.load('./routes').then(() => {\n    console.log('Source loaded.')\n    api.connect() // We're connecting to the API when the source is loaded.\n})\n")),(0,o.kt)("h2",{id:"you-need-to-know"},"You need to know..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need node ",(0,o.kt)("strong",{parentName:"li"},">=14")),(0,o.kt)("li",{parentName:"ul"},"This is a wrapper of express extended with custom functions like canvas."),(0,o.kt)("li",{parentName:"ul"},"This can contain some bugs (report it)."),(0,o.kt)("li",{parentName:"ul"},"We'd like you to join our support server.")),(0,o.kt)("p",null,"?> ",(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/emojis/829109483526422570.png",alt:"img",title:":size=13"})," Synced with ",(0,o.kt)("strong",{parentName:"p"},"2.2.1")," version."))}d.isMDXComponent=!0}}]);