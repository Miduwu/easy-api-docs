"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[9465],{9613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},699:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(8957),a=(n(9496),n(9613));const l={},i="$for",o={unversionedId:"functions/for",id:"functions/for",title:"$for",description:"For statement.",source:"@site/docs/functions/for.mdx",sourceDirName:"functions",slug:"/functions/for",permalink:"/docs/functions/for",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/functions/for.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"$font",permalink:"/docs/functions/font"},next:{title:"$function",permalink:"/docs/functions/function"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:2},{value:"Iteration types",id:"iteration-types",level:2},{value:"Example",id:"example",level:2}],c={toc:u},d="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for"},"$for"),(0,a.kt)("p",null,"For statement."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"$for: [initialization;condition;type;code;separator?]"))),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Level"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"initialization"),(0,a.kt)("td",{parentName:"tr",align:null},"The variable for initialization."),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"condition"),(0,a.kt)("td",{parentName:"tr",align:null},"The condition to keep iterating."),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"Iteration type."),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:null},"The code to execute for each iteration."),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"separator"),(0,a.kt)("td",{parentName:"tr",align:null},"Result separator."),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h2",{id:"iteration-types"},"Iteration types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"increment: Increments the variable value."),(0,a.kt)("li",{parentName:"ul"},"decrement: Decrements the variable value.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$set:[i;0]\n$for:[$get:[i];$get:[i]<11;increment;\n    $log: [INDEX: $get:[i]]\n    $set: [i;$calculate: [$get:[i] + 1]]\n]\n")))}s.isMDXComponent=!0}}]);