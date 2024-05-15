"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[6702],{9613:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(9496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2498:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7605),n=(r(9496),r(9613));const l={},i="$varMultiply",o={unversionedId:"functions/varMultiply",id:"functions/varMultiply",title:"$varMultiply",description:"Shorthand for $var[...;$calculate[$get[...] * $get[...]]].",source:"@site/docs/functions/varMultiply.md",sourceDirName:"functions",slug:"/functions/varMultiply",permalink:"/docs/functions/varMultiply",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/functions/varMultiply.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$varDivide",permalink:"/docs/functions/varDivide"},next:{title:"$varSubstract",permalink:"/docs/functions/varSubstract"}},u={},p=[{value:"Shorthand for $var[...;$calculate[$get... * $get...]].",id:"shorthand-for-varcalculateget--get",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p},s="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"varmultiply"},"$varMultiply"),(0,n.kt)("h2",{id:"shorthand-for-varcalculateget--get"},"Shorthand for $var[...;$calculate[$get","[...]"," * $get","[...]","]]."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Spread"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable name."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amount"),(0,n.kt)("td",{parentName:"tr",align:null},"Amount to divide the variable with."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"$varMultiply","[varName;amount?]"),(0,n.kt)("h2",{parentName:"blockquote",id:"aliases"},"Aliases"),(0,n.kt)("p",{parentName:"blockquote"},"$varMulti, $letMulti, $setMulti")))}m.isMDXComponent=!0}}]);