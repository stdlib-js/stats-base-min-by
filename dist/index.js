"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var q=c(function(E,l){
var B=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-negative-zero/dist');function Z(n,e,f,o,t){var u,a,i,r;if(n<=0)return NaN;if(n===1||f===0)return i=o.call(t,e[0],0,0,e),i===void 0?NaN:i;for(f<0?a=(1-n)*f:a=0,r=0;r<n&&(u=o.call(t,e[a],r,a,e),u===void 0);r++)a+=f;if(r===n)return NaN;for(r+=1,r;r<n;r++)if(a+=f,i=o.call(t,e[a],r,a,e),i!==void 0){if(B(i))return i;(i<u||i===u&&d(i))&&(u=i)}return u}l.exports=Z
});var y=c(function(F,s){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist');function j(n,e,f,o,t,u){var a,i,r,v;if(n<=0)return NaN;if(n===1||f===0)return r=t.call(u,e[0],0,0,e),r===void 0?NaN:r;for(i=o,v=0;v<n&&(a=t.call(u,e[i],v,i,e),a===void 0);v++)i+=f;if(v===n)return NaN;for(v+=1,v;v<n;v++)if(i+=f,r=t.call(u,e[i],v,i,e),r!==void 0){if(O(r))return r;(r<a||r===a&&R(r))&&(a=r)}return a}s.exports=j
});var p=c(function(G,N){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=q(),z=y();w(m,"ndarray",z);N.exports=m
});var C=p();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
