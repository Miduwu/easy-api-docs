"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[657],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7605),a=(n(9496),n(9613));const i={},l="$stringRepeat",o={unversionedId:"functions/stringRepeat",id:"functions/stringRepeat",title:"$stringRepeat",description:"Repeat the given text certain amount of times.",source:"@site/docs/functions/stringRepeat.md",sourceDirName:"functions",slug:"/functions/stringRepeat",permalink:"/docs/functions/stringRepeat",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/functions/stringRepeat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$stringLength",permalink:"/docs/functions/stringLength"},next:{title:"$stringReplaceRegex",permalink:"/docs/functions/stringReplaceRegex"}},p={},u=[{value:"Repeat the given text certain amount of times.",id:"repeat-the-given-text-certain-amount-of-times",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2},{value:"Aliases",id:"aliases",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stringrepeat"},"$stringRepeat"),(0,a.kt)("h2",{id:"repeat-the-given-text-certain-amount-of-times"},"Repeat the given text certain amount of times."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Spread"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"The text to work with."),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Times"),(0,a.kt)("td",{parentName:"tr",align:null},"How many times to repeat the word."),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"$stringRepeat[text;times]"))),(0,a.kt)("h2",{id:"return-type"},"Return Type"),(0,a.kt)("p",null,"String"),(0,a.kt)("h2",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$repeatText"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$repeat")))}m.isMDXComponent=!0}}]);