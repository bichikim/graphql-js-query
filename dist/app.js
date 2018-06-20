!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("graohql-js-query",[],n):"object"==typeof exports?exports["graohql-js-query"]=n():t["graohql-js-query"]=n()}(this,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=1)}([
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(t,n,r){"use strict";r.r(n);var e=function(t,n){if(void 0===n&&(n=!0),"string"==typeof t)return'"'+t+'"';if("number"==typeof t)return""+String(t);if(t instanceof i)return""+t.toString();if(Array.isArray(t))return n?"["+t.map(function(t){return e(t)}).join(",")+"]":"{"+t.map(function(t){return"string"==typeof t?t:e(t,n)}).join(",")+"}";var r=o(t,n).join(",");return n?"{"+r+"}":""+r},o=function(t,n){void 0===n&&(n=!0);var r=[];return Object.keys(t).forEach(function(o){var u=t[o],f=":";if(!n){var s=typeof u;"string"===s||"number"===s||u instanceof i||(f="")}r.push(""+o+f+e(u,n))}),r},u=function(t){return"string"==typeof t?t:o(t,!1).join(",")},i=function(){function t(t){var n=t.name,r=t.args,e=t.results;this._name=n,this._args=r,this._results=e}return t.prototype.toString=function(){var t=this._results,n=this._args,r=this._name.join(":");return n&&(r+="("+o(n).join(",")+")"),t&&t.length>0&&(r+="{"+t.map(u).join(",")+"}"),r},t}();n.default=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return new i({name:t,results:r,args:n})}}}},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){t.exports=r(/*! ./src/index.ts */0)}])});
//# sourceMappingURL=app.js.map