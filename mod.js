// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function t(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+a(n):a(n)+r,t&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!i(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=t(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=t(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):n.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function s(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,a,t=parseFloat(r.arg);if(!isFinite(t)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+a);t=r.arg}switch(r.specifier){case"e":case"E":a=t.toExponential(r.precision);break;case"f":case"F":a=t.toFixed(r.precision);break;case"g":case"G":l(t)<1e-4?((e=r.precision)>0&&(e-=1),a=t.toExponential(e)):a=t.toPrecision(r.precision),r.alternate||(a=f.call(a,y,"$1e"),a=f.call(a,b,"e"),a=f.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),r.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,w,"$1.e")),t>=0&&r.sign&&(a=r.sign+a),a=r.specifier===u.call(r.specifier)?u.call(a):p.call(a)}function _(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function E(r,e,i){var a=e-r.length;return a<0?r:r=i?r+_(a):_(a)+r}var k=String.fromCharCode,x=isNaN,N=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,i,a,n,o,l,p,u,f;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",p=1,u=0;u<r.length;u++)if(s(a=r[u]))l+=a;else{if(e=void 0!==a.precision,!(a=I(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,x(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,x(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1;break;case"c":if(!x(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=x(o)?String(a.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=E(a.arg,a.width,a.padRight)),l+=a.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,i,a,t;for(i=[],t=0,a=V.exec(r);a;)(e=r.slice(t,V.lastIndex-a[0].length)).length&&i.push(e),i.push(j(a)),t=V.lastIndex,a=V.exec(r);return(e=r.slice(t)).length&&i.push(e),i}function T(r){return"string"==typeof r}function $(r){var e,i,a;if(!T(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(i=new Array(arguments.length))[0]=e,a=1;a<i.length;a++)i[a]=arguments[a];return S.apply(null,i)}var A,C=Object.prototype,R=C.toString,G=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var a,t,n,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(P.call(r,e)||Z.call(r,e)?(a=r.__proto__,r.__proto__=C,delete r[e],r[e]=i.value,r.__proto__=a):r[e]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&G&&G.call(r,e,i.get),o&&O&&O.call(r,e,i.set),r};var W=A;function L(r){return r!=r}var U=Number.NEGATIVE_INFINITY;function X(r){return 0===r&&1/r===U}function z(r,e,i,a,t){var n,o,c,s;if(r<=0)return NaN;if(1===r||0===i)return void 0===(c=a.call(t,e[0],0,0,e))?NaN:c;for(o=i<0?(1-r)*i:0,s=0;s<r&&void 0===(n=a.call(t,e[o],s,o,e));s++)o+=i;if(s===r)return NaN;for(s+=1;s<r;s++)if(o+=i,void 0!==(c=a.call(t,e[o],s,o,e))){if(L(c))return c;(c<n||c===n&&X(c))&&(n=c)}return n}W(z,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,i,a,t,n){var o,c,s,l;if(r<=0)return NaN;if(1===r||0===i)return void 0===(s=t.call(n,e[0],0,0,e))?NaN:s;for(c=a,l=0;l<r&&void 0===(o=t.call(n,e[c],l,c,e));l++)c+=i;if(l===r)return NaN;for(l+=1;l<r;l++)if(c+=i,void 0!==(s=t.call(n,e[c],l,c,e))){if(L(s))return s;(s<o||s===o&&X(s))&&(o=s)}return o}});const{ndarray:M}=z;export{z as default,M as ndarray};
//# sourceMappingURL=mod.js.map
