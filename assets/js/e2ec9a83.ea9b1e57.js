"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[8022],{9613:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,l(l({ref:e},p),{},{components:r})):n.createElement(h,l({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7743:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7605),a=(r(9496),r(9613));const i={},l="$stringStartsWith",o={unversionedId:"functions/stringStartsWith",id:"functions/stringStartsWith",title:"$stringStartsWith",description:"Returns whether the given text starts with the provided word.",source:"@site/docs/functions/stringStartsWith.md",sourceDirName:"functions",slug:"/functions/stringStartsWith",permalink:"/docs/functions/stringStartsWith",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/functions/stringStartsWith.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$stringSlice",permalink:"/docs/functions/stringSlice"},next:{title:"$stringTrim",permalink:"/docs/functions/stringTrim"}},s={},u=[{value:"Returns whether the given text starts with the provided word.",id:"returns-whether-the-given-text-starts-with-the-provided-word",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2},{value:"Aliases",id:"aliases",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stringstartswith"},"$stringStartsWith"),(0,a.kt)("h2",{id:"returns-whether-the-given-text-starts-with-the-provided-word"},"Returns whether the given text starts with the provided word."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Spread"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"The text to work with."),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Word"),(0,a.kt)("td",{parentName:"tr",align:null},"The word to be matched."),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"$stringStartsWith[text;word]"))),(0,a.kt)("h2",{id:"return-type"},"Return Type"),(0,a.kt)("p",null,"Boolean"),(0,a.kt)("h2",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$startsWith")))}d.isMDXComponent=!0}}]);