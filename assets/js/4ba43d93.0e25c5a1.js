"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),o=n(2389),l=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:f,groupId:g,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[x,I]=(0,a.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=g){const e=k[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&I(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==x&&(N(t),I(r),null!=g&&T(g,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:4,title:"1.3. Render File"},s=void 0,c={unversionedId:"registry/render-file",id:"registry/render-file",title:"1.3. Render File",description:"Take a look at the i18n page for more information on translating widgets.",source:"@site/docs/registry/render-file.mdx",sourceDirName:"registry",slug:"/registry/render-file",permalink:"/webpack-cli/docs/registry/render-file",draft:!1,editUrl:"https://github.com/js-widgets/webpack-cli/edit/main/website/docs/registry/render-file.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"1.3. Render File"},sidebar:"tutorialSidebar",previous:{title:"1.2. Widget Definition",permalink:"/webpack-cli/docs/registry/widget-definition"},next:{title:"2. Build the Registry",permalink:"/webpack-cli/docs/build-registry"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"../i18n"},"i18n page")," for more information on translating widgets.")),(0,a.kt)("p",null,"Widgets are stand alone JS applications, but a component library only has components. To bridge that gap we need to\ncreate a render file. This is a file that will render a component in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," that the CMS will print on the page. The\nJavaScript application will render inside that ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,a.kt)("p",null,"Rendering a component is heavily dependent on the JS framework you are using. This step will look different for React,\nVue, Angular, Web Components, ..."),(0,a.kt)(i.Z,{defaultValue:"react",values:[{label:"Web Components",value:"wc"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"wc",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/notification/index.js"',title:'"src/components/notification/index.js"'},"require('./toast-notification');\n\n/**\n * Renders the widget.\n *\n * It renders a react application as the widget.\n *\n * @param {string} instanceId\n *   The already present HTML element ID where the react app will be rendered.\n * @param {string} langCode\n *   The language code for internationalization purposes.\n * @param {string} origin\n *   Protocol and hostname where a JSONAPI endpoint is available.\n * @param {Function} cb\n *   A callback that executes after the widget has been rendered.\n *\n * @return {Promise<void>}\n *   The async render function.\n */\nmodule.exports = async function(instanceId, langCode, origin, cb) => {\n  const element = document.getElementById(instanceId);\n  if (!element) {\n    return;\n  }\n  // Just print the custom HTML element inside of the div and call the callback.\n  // highlight-start\n  element.innerHTML = `<bx-toast-notification\n    title=\"${element.getAttribute('data-title')}\"\n    subtitle=\"${element.getAttribute('data-description')}\"\n    caption=\"${element.getAttribute('data-caption')}\"\n    kind=\"${element.getAttribute('data-kind')}\"\n  />`;\n  // highlight-end\n  // Execute the callback so the parent process knows we are done rendering.\n  cb(element);\n};\n"))),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/notification/index.js"',title:'"src/components/notification/index.js"'},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.scss';\nimport ToastNotification from './components/Widget';\nimport * as serviceWorker from './core/bin/serviceWorker';\nimport { IntlProvider } from 'react-intl';\nimport i18n from './core/bin/i18n.js';\n\n/**\n * Renders the widget.\n *\n * It renders a react application as the widget.\n *\n * @param {string} instanceId\n *   The already present HTML element ID where the react app will be rendered.\n * @param {string} langCode\n *   The language code for internationalization purposes.\n * @param {string} origin\n *   Protocol and hostname where a JSONAPI endpoint is available.\n * @param {Function} cb\n *   A callback that executes after the widget has been rendered.\n *\n * @return {Promise<void>}\n *   The async render function.\n */\nmodule.exports = async function(instanceId, langCode, origin, cb) => {\n  const element = document.getElementById(instanceId);\n  const translation = new i18n(langCode || serviceWorker.getUrlLocale());\n\n  ReactDOM.render(\n    <React.StrictMode>\n      <IntlProvider locale={translation.locale} messages={translation.messages}>\n        // highlight-start\n        <ToastNotification\n          title={element.getAttribute('data-title')}\n          subtitle={element.getAttribute('data-description')}\n          caption={element.getAttribute('data-caption')}\n          kind={element.getAttribute('data-kind')}\n        />\n        // highlight-end\n      </IntlProvider>\n    </React.StrictMode>,\n    element,\n    () => cb(element),\n  );\n  serviceWorker.unregister();\n}\n"))),(0,a.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"I have not worked with Vue widgets yet. If you have worked with Vue and you want to provide the example code, please\nfind the Edit link below and edit this page."))),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"I have not worked with Angular widgets yet. If you have worked with Angular and you want to provide the example code, please\nfind the Edit link below and edit this page.")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that the editorial input from the CMS is made available to you as data attributes in the wrapping ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>"),". You can\nget those values with ",(0,a.kt)("inlineCode",{parentName:"p"},"element.getAttribute('data-<propertyname>')"),". This is how you feed the editorial input to the\nJavaScript component props.")))}m.isMDXComponent=!0}}]);