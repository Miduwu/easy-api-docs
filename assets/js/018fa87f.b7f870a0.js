"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[1440],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7605),n=(r(9496),r(9613));const l={},o="$arrayDelete",i={unversionedId:"functions/arrayDelete",id:"functions/arrayDelete",title:"$arrayDelete",description:"Deletes an array from the interpreter data.",source:"@site/docs/functions/arrayDelete.mdx",sourceDirName:"functions",slug:"/functions/arrayDelete",permalink:"/docs/functions/arrayDelete",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/functions/arrayDelete.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$arrayAt",permalink:"/docs/functions/arrayAt"},next:{title:"$arrayExists",permalink:"/docs/functions/arrayExists"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:2},{value:"Example",id:"example",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"arraydelete"},"$arrayDelete"),(0,n.kt)("p",null,"Deletes an array from the interpreter data."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"$arrayDelete:[name]"))),(0,n.kt)("h2",{id:"fields"},"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Level"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"The array name."),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"$newArray:[data;a,b,c,d;,]\n$arrayAt:[data;3] # c\n$arrayDelete:[data]\n$arrayAt:[data;3] # throws an error.\n")))}d.isMDXComponent=!0}}]);