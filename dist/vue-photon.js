!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VuePhoton=e():t.VuePhoton=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}([function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,u){var l,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},s._ssrRegister=l):a&&(l=u?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(s.functional){s._injectStyles=l;var c=s.render;s.render=function(t,e){return l.call(e),c(t,e)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},function(t,e,n){var r=n(21),a=n(25);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1},o=(r(t.i,a,i),a.locals?a.locals:{});t.exports=o},function(t,e,n){var r=n(21),a=n(27);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1},o=(r(t.i,a,i),a.locals?a.locals:{});t.exports=o},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["btn",this.theme?"btn-"+this.theme:"",this.size?"btn-"+this.size:"",{active:this.active}]},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-button",props:{theme:{type:String,default:""},size:{type:String,default:""},active:{type:Boolean,default:!1}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/button/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"btn-group"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-button-group",props:{}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/button-group/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("input",{attrs:{type:"checkbox",defaultChecked:this.defaultValue},domProps:{checked:this.value},on:{change:this.change}}),this._v(" "),this._t("default")],2)};r._withStripped=!0;var a={name:"vp-checkbox",props:{defaultValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1}},methods:{change(t){const e=t.target.checked;this.$emit("change",{target:{value:e}})}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/checkbox/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"form-group"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-form-group",props:{}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/form-group/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["icon",this.value?"icon-"+this.value:""]},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-icon",props:{value:String}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/icon/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("input",{class:["form-control"],attrs:{type:this.type,autocomplete:this.autocomplete?"on":"off"}})};r._withStripped=!0;var a={name:"vp-input",props:{type:String,value:String,autocomplete:{type:Boolean,default:!1}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/input/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["pane",{"pane-sm":this.mini,sidebar:this.sidebar}]},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-pane",props:{mini:Boolean,sidebar:Boolean}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/pane/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pane-group"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-pane-group",props:{}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/pane-group/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"radio-group"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-radio-group",props:{name:String,value:String},model:{prop:"value",event:"change"},provide(){return{radioGroup:this}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/radio-group/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("select",{staticClass:"form-control",attrs:{multiple:t.multiple},domProps:{value:t.value},on:{change:t.change}},[t._l(t.items,(function(e,n){return[t._t("default",null,null,{item:e,index:n})]}))],2)};r._withStripped=!0;var a={name:"vp-select",model:{prop:"value",event:"change"},props:{value:[String,Array,Number,Boolean],multiple:Boolean,items:{type:Array,defalut:[]}},mounted(){this.setValue()},methods:{getValue(){const t=this.$el.querySelectorAll("option:checked"),e=[].slice.call(t).map(t=>t.value);return this.multiple?e:e[0]},setValue(){const{value:t,multiple:e}=this,n=e?t:[t],r=this.$el.querySelectorAll("option");[].slice.call(r);r.forEach(t=>{n.includes(t.value)&&(t.selected=!0)})},change(t){this.$emit("change",this.getValue())}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/select/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{class:["table",{"table-striped":t.striped}]},[n("thead",[n("tr",[t._l(t.columns,(function(e,n){return[t._t("column",null,null,{item:e,index:n})]}))],2)]),t._v(" "),n("tbody",t._l(t.items,(function(e,r){return n("tr",{key:r},t._l(t.columns,(function(a){return n("td",{key:a.dataIndex},[t._t("item",null,null,{item:e,column:a,index:r})],2)})),0)})),0)])};r._withStripped=!0;var a={name:"vp-table",props:{striped:Boolean,columns:Array,items:Array}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/table/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tabs"},[n("nav",{staticClass:"tab-group tabs__menu"},[t._l(t.tabs,(function(e,r){return n("div",{key:r,class:["tab-item",{active:r===t.activeIndex}],on:{click:function(e){return t.change(r)}}},[t.interactive?n("span",{staticClass:"icon icon-cancel icon-close-tab",on:{click:function(e){return t.del(r)}}}):t._e(),t._v("\n      "+t._s(e.title)+"\n    ")])})),t._v(" "),t.interactive?n("div",{staticClass:"tab-item tab-item-fixed",on:{click:t.add}},[n("span",{staticClass:"icon icon-plus"})]):t._e()],2),t._v(" "),n("div",{staticClass:"tabs__content"},[t._t("default")],2)])};r._withStripped=!0;var a={name:"vp-tabs",props:{interactive:{type:Boolean,default:!1},activeIndex:{type:Number,default:0}},data:()=>({tabs:[]}),mounted(){this.tabs=this.$children,this.tabs[this.activeIndex].active=!0},methods:{change(t){this.tabs.forEach((e,n)=>e.active=t===n),this.$emit("update:activeIndex",t)},add(){},del(t){}}},i=(n(24),n(0)),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/tabs/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("textarea",{class:["form-control"],attrs:{autocomplete:this.autocomplete?"on":"off"}})};r._withStripped=!0;var a={name:"vp-textarea",props:{autocomplete:{type:Boolean,default:!1}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/textarea/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toolbar-actions"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-toolbar-actions",props:{mini:Boolean,sidebar:Boolean}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/toolbar-actions/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"toolbar toolbar-footer"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)};r._withStripped=!0;var a={name:"vp-toolbar-footer",props:{title:String}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/toolbar-footer/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"toolbar toolbar-header"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)};r._withStripped=!0;var a={name:"vp-toolbar-header",props:{title:String}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/toolbar-header/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["window",{"is-relative":this.relative,"is-shadowable":this.shadowable,"is-bordered":this.bordered}]},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-window",props:{relative:{type:Boolean,default:!1},shadowable:{type:Boolean,default:!0},bordered:{type:Boolean,default:!0}}},i=(n(26),n(0)),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/window/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"window-content"},[this._t("default")],2)};r._withStripped=!0;var a={name:"vp-window-content",props:{}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/window-content/index.vue";e.default=o.exports},function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o={};function u(t,e,n){for(var r=0;r<e.length;r++){var a={css:e[r][1],media:e[r][2],sourceMap:e[r][3]};o[t][r]?o[t][r](a):o[t].push(h(a,n))}}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,c=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=c(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,v=0;function h(t,e){var n,r,a;if(e.singleton){var i=v++;n=f||(f=l(e)),r=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else n=l(e),r=p.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a()),t=n.base?t+n.base:t,e=e||[],o[t]||(o[t]=[]),u(t,e,n),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){o[t]||(o[t]=[]),u(t,e,n);for(var r=e.length;r<o[t].length;r++)o[t][r]();o[t].length=e.length,0===o[t].length&&delete o[t]}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(o=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(l," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(i).concat([a]).join("\n")}var o,u,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r=0;r<t.length;r++){var a=[].concat(t[r]);n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a)}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"install",(function(){return y}));var r=n(3);n.d(e,"Button",(function(){return r.default}));var a=n(4);n.d(e,"ButtonGroup",(function(){return a.default}));var i=n(5);n.d(e,"Checkbox",(function(){return i.default}));var o=n(6);n.d(e,"FormGroup",(function(){return o.default}));var u=n(7);n.d(e,"Icon",(function(){return u.default}));var l=n(8);n.d(e,"Input",(function(){return l.default}));var s=n(9);n.d(e,"Pane",(function(){return s.default}));var c=n(10);n.d(e,"PaneGroup",(function(){return c.default}));var d=n(11);n.d(e,"RadioGroup",(function(){return d.default}));var p=n(12);n.d(e,"Select",(function(){return p.default}));var f=n(13);n.d(e,"Table",(function(){return f.default}));var v=n(14);n.d(e,"Tabs",(function(){return v.default}));var h=n(15);n.d(e,"Textarea",(function(){return h.default}));var _=n(16);n.d(e,"ToolbarActions",(function(){return _.default}));var m=n(17);n.d(e,"ToolbarFooter",(function(){return m.default}));var b=n(18);n.d(e,"ToolbarHeader",(function(){return b.default}));var x=n(19);n.d(e,"Window",(function(){return x.default}));var g=n(20);n.d(e,"WindowContent",(function(){return g.default}));const w=n(28),y=function(t){var e;y.installed||(e=w,e.keys().map(e)).forEach(e=>{const n=e.default;t.component(n.name,n)})};"undefined"!=typeof window&&window.Vue&&y(window.Vue)},function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e,n){(e=n(22)(!1)).push([t.i,".tabs__content{padding:14px}\n",""]),t.exports=e},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){(e=n(22)(!1)).push([t.i,".window.is-relative{position:relative}.window.is-shadowable{box-shadow:0 0 30px rgba(0,0,0,0.1)}.window.is-bordered{border:1px solid #bebebe;border-radius:4px;overflow:hidden}\n",""]),t.exports=e},function(t,e,n){var r={"./button-group/index.vue":4,"./button/index.vue":3,"./checkbox/index.vue":5,"./form-group/index.vue":6,"./icon/index.vue":7,"./input/index.vue":8,"./pane-group/index.vue":10,"./pane/index.vue":9,"./radio-group/index.vue":11,"./radio/index.vue":29,"./select/index.vue":12,"./tab/index.vue":30,"./table/index.vue":13,"./tabs/index.vue":14,"./textarea/index.vue":15,"./toolbar-actions/index.vue":16,"./toolbar-footer/index.vue":17,"./toolbar-header/index.vue":18,"./window-content/index.vue":20,"./window/index.vue":19};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=28},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radio"},[n("label",[n("input",{staticClass:"radio__input",attrs:{type:"radio",name:t.name},domProps:{checked:t.checked,value:t.value},on:{change:t.onChange}}),t._v(" "),n("span",{staticClass:"radio__label"},[t._v(t._s(t.label))])])])};r._withStripped=!0;var a={name:"vp-radio",props:{label:String,value:String},inject:{radioGroup:{from:"radioGroup"}},computed:{checked(){return this.radioGroup.value===this.value},name(){return this.radioGroup.name}},methods:{onChange(t){const{value:e}=t.target;this.radioGroup.$emit("change",e)}}},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/radio/index.vue";e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return this.active?e("div",{staticClass:"tab"},[this._t("default")],2):this._e()};r._withStripped=!0;var a={name:"vp-tab",props:{title:String},data:()=>({active:!1})},i=n(0),o=Object(i.a)(a,r,[],!1,null,null,null);o.options.__file="packages/tab/index.vue";e.default=o.exports}])}));