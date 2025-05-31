"use strict";var s=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var d=s(function(J,y){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(i,a,u,o,t,q){var v,n,c,e,r,f;if(v=a.data,n=a.accessors[0],i===1||u===0)return r=t.call(q,n(v,o),0,o,a),r===void 0?NaN:r;for(e=o,f=0;f<i&&(c=t.call(q,n(v,e),f,e,a),c===void 0);f++)e+=u;if(f===i)return NaN;for(f+=1,f;f<i;f++)if(e+=u,r=t.call(q,n(v,e),f,e,a),r!==void 0){if(Z(r))return r;(r<c||r===c&&j(r))&&(c=r)}return c}y.exports=O
});var l=s(function(K,m){
var P=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/array-base-arraylike2object/dist'),z=d();function C(i,a,u,o,t,q){var v,n,c,e,r;if(i<=0)return NaN;if(c=w(a),c.accessorProtocol)return z(i,c,u,o,t,q);if(i===1||u===0)return e=t.call(q,a[o],0,o,a),e===void 0?NaN:e;for(n=o,r=0;r<i&&(v=t.call(q,a[n],r,n,a),v===void 0);r++)n+=u;if(r===i)return NaN;for(r+=1,r;r<i;r++)if(n+=u,e=t.call(q,a[n],r,n,a),e!==void 0){if(P(e))return e;(e<v||e===v&&R(e))&&(v=e)}return v}m.exports=C
});var B=s(function(L,p){
var D=require('@stdlib/strided-base-stride2offset/dist'),E=l();function F(i,a,u,o,t){return E(i,a,u,D(i,u),o,t)}p.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=B(),H=l();G(N,"ndarray",H);module.exports=N;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
