(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";window.Promise=require("es6-promise").Promise;
//# sourceMappingURL=out.js.map

},{"es6-promise":3}],2:[function(require,module,exports){
function drainQueue(){if(!draining){draining=!0;for(var e,o=queue.length;o;){e=queue,queue=[];for(var r=-1;++r<o;)e[r]();o=queue.length}draining=!1}}function noop(){}var process=module.exports={},queue=[],draining=!1;process.nextTick=function(e){queue.push(e),draining||setTimeout(drainQueue,0)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],3:[function(require,module,exports){
(function (process,global){
(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){return"object"==typeof t&&null!==t}function r(){}function o(){return function(){process.nextTick(c)}}function i(){var t=0,e=new F(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function s(){var t=new MessageChannel;return t.port1.onmessage=c,function(){t.port2.postMessage(0)}}function u(){return function(){setTimeout(c,1)}}function c(){for(var t=0;D>t;t+=2){var e=N[t],n=N[t+1];e(n),N[t]=void 0,N[t+1]=void 0}D=0}function a(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function l(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(e){return z.error=e,z}}function p(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function _(t,e,n){Y(function(t){var r=!1,o=p(n,e,function(n){r||(r=!0,e!==n?m(t,n):w(t,n))},function(e){r||(r=!0,g(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,g(t,o))},t)}function d(t,e){e._state===W?w(t,e._result):t._state===q?g(t,e._result):b(e,void 0,function(e){m(t,e)},function(e){g(t,e)})}function v(t,n){if(n.constructor===t.constructor)d(t,n);else{var r=h(n);r===z?g(t,z.error):void 0===r?w(t,n):e(r)?_(t,n,r):w(t,n)}}function m(e,n){e===n?g(e,f()):t(n)?v(e,n):w(e,n)}function y(t){t._onerror&&t._onerror(t._result),A(t)}function w(t,e){t._state===U&&(t._result=e,t._state=W,0===t._subscribers.length||Y(A,t))}function g(t,e){t._state===U&&(t._state=q,t._result=e,Y(y,t))}function b(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+W]=n,o[i+q]=r,0===i&&t._state&&Y(A,t)}function A(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function E(t,e){try{return t(e)}catch(n){return B.error=n,B}}function P(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=E(r,o),i===B?(c=!0,s=i.error,i=null):u=!0,n===i)return void g(n,l())}else i=o,u=!0;n._state!==U||(a&&u?m(n,i):c?g(n,s):t===W?w(n,i):t===q&&g(n,i))}function T(t,e){try{e(function(e){m(t,e)},function(e){g(t,e)})}catch(n){g(t,n)}}function S(t,e,n,r){this._instanceConstructor=t,this.promise=new t(a,r),this._abortOnReject=n,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):g(this.promise,this._validationError())}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(t){this._id=V++,this._state=void 0,this._result=void 0,this._subscribers=[],a!==t&&(e(t)||k(),this instanceof O||M(),T(this,t))}var C;C=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var R,x=C,D=(Date.now||function(){return(new Date).getTime()},Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return r.prototype=t,new r},0),Y=function(t,e){N[D]=t,N[D+1]=e,D+=2,2===D&&R()},I="undefined"!=typeof window?window:{},F=I.MutationObserver||I.WebKitMutationObserver,K="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,N=new Array(1e3);R="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?o():F?i():K?s():u();var U=void 0,W=1,q=2,z=new j,B=new j;S.prototype._validateInput=function(t){return x(t)},S.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},S.prototype._init=function(){this._result=new Array(this.length)};var G=S;S.prototype._enumerate=function(){for(var t=this.length,e=this.promise,n=this._input,r=0;e._state===U&&t>r;r++)this._eachEntry(n[r],r)},S.prototype._eachEntry=function(t,e){var r=this._instanceConstructor;n(t)?t.constructor===r&&t._state!==U?(t._onerror=null,this._settledAt(t._state,e,t._result)):this._willSettleAt(r.resolve(t),e):(this._remaining--,this._result[e]=this._makeResult(W,e,t))},S.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===U&&(this._remaining--,this._abortOnReject&&t===q?g(r,n):this._result[e]=this._makeResult(t,e,n)),0===this._remaining&&w(r,this._result)},S.prototype._makeResult=function(t,e,n){return n},S.prototype._willSettleAt=function(t,e){var n=this;b(t,void 0,function(t){n._settledAt(W,e,t)},function(t){n._settledAt(q,e,t)})};var H=function(t,e){return new G(this,t,!0,e).promise},J=function(t,e){function n(t){m(i,t)}function r(t){g(i,t)}var o=this,i=new o(a,e);if(!x(t))return g(i,new TypeError("You must pass an array to race.")),i;for(var s=t.length,u=0;i._state===U&&s>u;u++)b(o.resolve(t[u]),void 0,n,r);return i},L=function(t,e){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var r=new n(a,e);return m(r,t),r},Q=function(t,e){var n=this,r=new n(a,e);return g(r,t),r},V=0,X=O;O.all=H,O.race=J,O.resolve=L,O.reject=Q,O.prototype={constructor:O,then:function(t,e){var n=this,r=n._state;if(r===W&&!t||r===q&&!e)return this;var o=new this.constructor(a),i=n._result;if(r){var s=arguments[r-1];Y(function(){P(r,o,s,i)})}else b(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var Z=function(){var t;t="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var n="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var n;return new t.Promise(function(t){n=t}),e(n)}();n||(t.Promise=X)},$={Promise:X,polyfill:Z};"function"==typeof define&&define.amd?define(function(){return $}):"undefined"!=typeof module&&module.exports?module.exports=$:"undefined"!=typeof this&&(this.ES6Promise=$)}).call(this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":2}]},{},[1]);

//# sourceMappingURL=promise-polyfill.js.map