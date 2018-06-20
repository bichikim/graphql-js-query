!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("graohql-js-query",[],t):"object"==typeof exports?exports["graohql-js-query"]=t():r["graohql-js-query"]=t()}(this,function(){return function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},n.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=1)}([
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(r,t,n){"use strict";n.r(t);var e=function(r,t){if(void 0===t&&(t=!0),"string"==typeof r)return'"'+r+'"';if("number"==typeof r)return""+String(r);if(r instanceof u)return""+r.toString();if(Array.isArray(r))return t?"["+r.map(function(r){return e(r)}).join(",")+"]":"{"+r.map(function(r){return"string"==typeof r?r:e(r,t)}).join(",")+"}";var n=o(r,t).join(",");return t?"{"+n+"}":""+n},o=function(r,t){void 0===t&&(t=!0);var n=[];return Object.keys(r).forEach(function(o){var i=r[o],f=":";if(!t){var s=typeof i;"string"===s||"number"===s||i instanceof u||(f="")}n.push(""+o+f+e(i,t))}),n},u=function(){function r(r){var t=r.name,n=r.args,e=r.results;this._name=t,this._args=n,this._results=e}return r.prototype.toString=function(){var r=this._results,t=this._args,n=this._name.join(":");return t&&(n+="("+o(t).join(",")+")"),r&&r.length>0&&(n+=""+e(r,!1)),n},r}();t.default=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return function(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return new u({name:r,results:n,args:t})}}}},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(r,t,n){r.exports=n(/*! ./src/index.ts */0)}])});
//# sourceMappingURL=app.js.map