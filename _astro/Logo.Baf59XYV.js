var o={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i;function c(){if(i)return s;i=1;var d=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function a(x,t,e){var n=null;if(e!==void 0&&(n=""+e),t.key!==void 0&&(n=""+t.key),"key"in t){e={};for(var w in t)w!=="key"&&(e[w]=t[w])}else e=t;return t=e.ref,{$$typeof:d,type:x,key:n,ref:t!==void 0?t:null,props:e}}return s.Fragment=u,s.jsx=a,s.jsxs=a,s}var l;function m(){return l||(l=1,o.exports=c()),o.exports}var r=m();const h=()=>r.jsxs("a",{href:"/",className:"tw-flex tw-h-9 tw-items-center tw-gap-2 tw-rounded-xl tw-px-2 hover:tw-bg-muted tw-transition-colors tw-justify-center",children:[r.jsx("section",{id:"logo-icon",className:"tw-flex tw-items-center tw-gap-1.5 tw-leading-none",children:r.jsx("div",{className:"tw-border-box tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-xl tw-border-2 sm:tw-h-6 sm:tw-w-6 sm:tw-rounded-lg tw-bg-blue-dark tw-border-blue-dark",children:r.jsx("div",{className:"tw-h-3.5 tw-w-0.5 tw-rotate-12 tw-rounded-full tw-bg-white sm:tw-h-3 sm:tw-w-0.5"})})}),r.jsxs("section",{id:"logo-text",className:"tw--mt-1 tw-text-[26px] tw-font-medium tw-flex tw-gap-1 sm:tw-gap-0.5 tw-font-dm-sans",children:[r.jsx("span",{className:"tw-text-black-theme",children:"achronus"}),r.jsx("span",{className:"tw-text-blue-dark",children:"dev"})]})]});export{h as L,r as j};
