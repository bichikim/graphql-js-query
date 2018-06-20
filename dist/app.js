!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("graohql-js-query",[],e):"object"==typeof exports?exports["graohql-js-query"]=e():t["graohql-js-query"]=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/index.ts (referenced with single entry) */function(t,e,n){"use strict";n.r(e);var r=function(t){var e=[];return Object.keys(t).forEach(function(n){e.push(n+":"+t[n])}),e},o=function(t){return"string"==typeof t?t:r(t).join(",")},u=function(){function t(t,e,n){this._name=t,this._args=e,this._results=n}return t.prototype.toString=function(){var t=this._args,e=this._results,n=this._name;return t&&(n+="("+r(t).join(",")+")"),e&&(n+="{"+e.map(o).join(",")+"}"),n},t}();e.default=function(t){return function(e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return new u(t,e,n)}}}},
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){t.exports=n(/*! ./src/index.ts */0)}])});
//# sourceMappingURL=app.js.map