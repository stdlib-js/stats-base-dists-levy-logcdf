"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=q(function(k,v){
var a=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-erfc/dist'),l=require('@stdlib/math-base-special-sqrt/dist'),y=require('@stdlib/constants-float64-ninf/dist'),d=require('@stdlib/math-base-special-ln/dist');function p(e,r,t){var i;return a(e)||a(r)||a(t)||t<=0?NaN:e<r?y:(i=l(t/(2*(e-r))),d(N(i)))}v.exports=p
});var o=q(function(w,s){
var F=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-erfc/dist'),z=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist');function R(e,r){if(n(e)||n(r)||r<=0)return F(NaN);return t;function t(i){var u;return n(i)?NaN:i<e?O:(u=z(r/(2*(i-e))),I(g(u)))}}s.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),h=o();b(c,"factory",h);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
