"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_position:3,title:"webpackFinal"},a="webpackFinal`: `function|undefined",c={unversionedId:"registry/config/options/webpackFinal",id:"registry/config/options/webpackFinal",title:"webpackFinal",description:"The @js-widgets/webpack-cli comes with a [default webpack",source:"@site/docs/registry/config/options/webpackFinal.md",sourceDirName:"registry/config/options",slug:"/registry/config/options/webpackFinal",permalink:"/webpack-cli/docs/registry/config/options/webpackFinal",draft:!1,editUrl:"https://github.com/js-widgets/webpack-cli/edit/main/website/docs/registry/config/options/webpackFinal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"webpackFinal"},sidebar:"tutorialSidebar",previous:{title:"directoryUrl",permalink:"/webpack-cli/docs/registry/config/options/directoryUrl"},next:{title:"allExternalPeerDependencies",permalink:"/webpack-cli/docs/registry/config/options/allExternalPeerDependencies"}},s={},l=[{value:"Examples",id:"examples",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webpackfinal-functionundefined"},(0,i.kt)("inlineCode",{parentName:"h1"},"webpackFinal"),": ",(0,i.kt)("inlineCode",{parentName:"h1"},"function|undefined")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@js-widgets/webpack-cli")," comes with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-widgets/webpack-cli/blob/main/src/defaultConfig/webpack.config.js"},"default webpack\nconfiguration"),". This function\ntakes this defaults and applies modifications to it suited for this particular project."),(0,i.kt)("p",null,"Every project will use different webpack configurations because it will use different technologies. The good news is\nthat it is likely that your component library (Storybook, Fractal, ...) will already have this function in order to\nrender the components in the library. You should leverage it!"),(0,i.kt)("p",null,"In particular Storybook ",(0,i.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config"},"uses the same function"),"!"),(0,i.kt)("p",null,"Running the CLI in debug mode will print the composed webpack configuration. You can use that to see how to make the\nnecessary changes."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(config) => {\n  config.module.rules[2].use.options.presets.push('@babel/preset-react');\n  return config;\n}\n")))}u.isMDXComponent=!0}}]);