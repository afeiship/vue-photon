!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pane=t():e.pane=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,s){var a,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},f._ssrRegister=a):o&&(a=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var c=f.render;f.render=function(e,t){return a.call(t),c(e,t)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:f}}n.d(t,"a",(function(){return r}))},16:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:["pane",{"pane-sm":this.mini,sidebar:this.sidebar}]},[this._t("default")],2)};r._withStripped=!0;var o={name:"vp-pane",props:{mini:Boolean,sidebar:Boolean}},i=n(0),u=Object(i.a)(o,r,[],!1,null,null,null);u.options.__file="packages/pane/index.vue";t.default=u.exports}})}));