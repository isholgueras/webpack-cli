"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[990],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,d=f["".concat(o,".").concat(m)]||f[m]||p[m]||i;return r?a.createElement(d,c(c({ref:t},s),{},{components:r})):a.createElement(d,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9095:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),c=["components"],l={},o="[2.0.0](https://github.com/js-widgets/webpack-cli/compare/v1.3.0...v2.0.0) (2021-12-07)",u={type:"mdx",permalink:"/webpack-cli/changelog",source:"@site/src/pages/changelog.md"},s=[{value:"Features",id:"features",children:[]},{value:"BREAKING CHANGES",id:"breaking-changes",children:[]},{value:"Features",id:"features-1",children:[]},{value:"Features",id:"features-2",children:[]},{value:"1.1.5 (2021-09-23)",id:"115-2021-09-23",children:[{value:"Bug Fixes",id:"bug-fixes",children:[]}]},{value:"1.1.1 (2021-09-17)",id:"111-2021-09-17",children:[{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Features",id:"features-3",children:[]},{value:"Features",id:"features-4",children:[]}]}],p={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"200-2021-12-07"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/js-widgets/webpack-cli/compare/v1.3.0...v2.0.0"},"2.0.0")," (2021-12-07)"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"webpack improvements (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/issues/4"},"#4"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/5253c45435511ffc96e06a7a52ec3c445db4980c"},"5253c45"),")")),(0,i.kt)("h3",{id:"breaking-changes"},"BREAKING CHANGES"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It also leverages webpack to create the ",(0,i.kt)("inlineCode",{parentName:"li"},"window.renderMyWidget = ..."),". One only needs to export a function from now on. This is a breaking change, since render files need an export now.")),(0,i.kt)("h1",{id:"130-2021-12-01"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/js-widgets/webpack-cli/compare/v1.2.0...v1.3.0"},"1.3.0")," (2021-12-01)"),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add support for assets URL (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/issues/2"},"#2"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/ea87803f97e0d3d1be65ccdb37f75c3ed032beb9"},"ea87803"),")")),(0,i.kt)("h1",{id:"120-2021-11-18"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/js-widgets/webpack-cli/compare/v1.1.5...v1.2.0"},"1.2.0")," (2021-11-18)"),(0,i.kt)("h3",{id:"features-2"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allow some environment variables (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/issues/1"},"#1"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/8c5cf44d48ab4a6f9d0f8d79cfcfa713e9190c02"},"8c5cf44"),")")),(0,i.kt)("h2",{id:"115-2021-09-23"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/js-widgets/webpack-cli/compare/v1.1.4...v1.1.5"},"1.1.5")," (2021-09-23)"),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add shebang for node execution (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/c423c26458d53159cb4c99f2f1d660627061ff57"},"c423c26"),")"),(0,i.kt)("li",{parentName:"ul"},"revert remove changelog (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/23f4c401c71657b00bc7c22121e5a249f4290656"},"23f4c40"),")")),(0,i.kt)("h2",{id:"111-2021-09-17"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/js-widgets/webpack-cli/compare/v1.1.0...v1.1.1"},"1.1.1")," (2021-09-17)"),(0,i.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use the correct JS file (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/333e444f90ed364f3e8aa37d2339925eb6ba5ef1"},"333e444"),")")),(0,i.kt)("h1",{id:"110-2021-09-17"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/js-widgets/webpack-cli/compare/v1.0.0...v1.1.0"},"1.1.0")," (2021-09-17)"),(0,i.kt)("h3",{id:"features-3"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add coverage badge to README.md (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/378939e8395793e6914ca53c8a788fe7ca46aa9b"},"378939e"),")")),(0,i.kt)("h1",{id:"100-2021-09-17"},"1.0.0 (2021-09-17)"),(0,i.kt)("h3",{id:"features-4"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"initial commit (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/js-widgets/webpack-cli/commit/f067989c80b442148d1312ef41df664ed214b3a8"},"f067989"),")")))}f.isMDXComponent=!0}}]);