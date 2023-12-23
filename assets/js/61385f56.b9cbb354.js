"use strict";(self.webpackChunkbdjs=self.webpackChunkbdjs||[]).push([[757],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),u=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(a.Provider,{value:n},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),d=r,m=l["".concat(a,".").concat(d)]||l[d]||f[d]||i;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[l]="string"==typeof e?e:r,s[1]=c;for(var u=2;u<i;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(7605),r=(t(9496),t(9613));const i={sidebar_position:8},s="Function Injections",c={unversionedId:"tips/function-injection",id:"tips/function-injection",title:"Function Injections",description:'Some functions allows the execution of child-functions in their scope. We call these functions "Subfunction".',source:"@site/docs/tips/function-injection.md",sourceDirName:"tips",slug:"/tips/function-injection",permalink:"/docs/tips/function-injection",draft:!1,editUrl:"https://github.com/Miduwu/easy-api-docs/tree/new/docs/tips/function-injection.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Old Syntax",permalink:"/docs/tips/old-syntax"}},a={},u=[{value:"Setup",id:"setup",level:2},{value:"Supported functions",id:"supported-functions",level:2}],p={toc:u},l="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-injections"},"Function Injections"),(0,r.kt)("p",null,'Some functions allows the execution of child-functions in their scope. We call these functions "Subfunction".\nTo extend the functionality, we added ',(0,r.kt)("strong",{parentName:"p"},"injections"),'.\nThis option allows to "inject" subfunction to a supported function.'),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const api = new API({\n    dots: false,\n    reverse: false\n})\n\n// As first argument we pass the target function name.\n// As second argument we pass the subfunction name.\n// As third argument we pass the subfunction data.\napi.functions.inject('createCanvas', 'testCanvas', {\n    run: async (d, message) => {\n        console.log(d.function.name, message)\n    }\n})\n\napi.route({\n    url: '/hello',\n    method: 'get',\n    code: `\n        $createCanvas[\n            $setDimentions[1024;1024]\n            $testCanvas[HI BRO!] # will work\n        ]\n        $testCanvas[GN BRO!] # will not work\n        $reply[\n            $setCode[200]\n            $setType[json]\n            $setBody[{ \"hello\": \"true\" }]\n        ]\n    `\n})\n")),(0,r.kt)("h2",{id:"supported-functions"},"Supported functions"),(0,r.kt)("p",null,"This is the list of functions that supports injection."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"$createCanvas"))))}f.isMDXComponent=!0}}]);