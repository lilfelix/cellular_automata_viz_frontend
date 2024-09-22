/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/google-protobuf/google-protobuf.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-protobuf/google-protobuf.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof __webpack_require__.g&&null!=__webpack_require__.g?__webpack_require__.g:this;function ba(a,b){if(b){var c=e;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function da(){da=function(){};e.Symbol||(e.Symbol=ea)}function fa(a,b){this.a=a;aa(this,"description",{configurable:!0,writable:!0,value:b})}fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function ha(){da();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});ha=function(){}}function ia(a){ha();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
function ja(a,b){ha();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ba("Array.prototype.entries",function(a){return a?a:function(){return ja(this,function(b,c){return[b,c]})}});var ka=this||self;
function g(a,b,c){a=a.split(".");c=c||ka;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){g(a,b,c)}function na(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<oa.length;h++)c=oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},l=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,h=0;h<c;h++)h in f&&(d[h]=b.call(void 0,f[h],h,a));return d};
function ra(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function sa(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var h=d}else a&&(f+=": "+a,h=b);throw Error(f,h||[]);}function n(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];a||sa("",null,b,d);return a}function ta(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];"string"!==typeof a&&sa("Expected string but got %s: %s.",[k(a),a],b,d)}
function ua(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];Array.isArray(a)||sa("Expected array but got %s: %s.",[k(a),a],b,d)}function p(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);}function q(a,b,c,d){for(var f=[],h=3;h<arguments.length;++h)f[h-3]=arguments[h];a instanceof b||sa("Expected instanceof %s but got %s.",[va(b),va(a)],c,f)}
function va(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};function r(a,b){this.c=a;this.b=b;this.a={};this.arrClean=!0;if(0<this.c.length){for(a=0;a<this.c.length;a++){b=this.c[a];var c=b[0];this.a[c.toString()]=new wa(c,b[1])}this.arrClean=!0}}g("jspb.Map",r,void 0);
r.prototype.g=function(){if(this.arrClean){if(this.b){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.c.length=0;a=u(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.c.push([d.key,d.value])}this.arrClean=!0}return this.c};r.prototype.toArray=r.prototype.g;
r.prototype.Mc=function(a,b){for(var c=this.g(),d=[],f=0;f<c.length;f++){var h=this.a[c[f][0].toString()];v(this,h);var m=h.a;m?(n(b),d.push([h.key,b(a,m)])):d.push([h.key,h.value])}return d};r.prototype.toObject=r.prototype.Mc;r.fromObject=function(a,b,c){b=new r([],b);for(var d=0;d<a.length;d++){var f=a[d][0],h=c(a[d][1]);b.set(f,h)}return b};function w(a){this.a=0;this.b=a}w.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(w.prototype[Symbol.iterator]=function(){return this});r.prototype.Jb=function(){return u(this).length};r.prototype.getLength=r.prototype.Jb;r.prototype.clear=function(){this.a={};this.arrClean=!1};r.prototype.clear=r.prototype.clear;r.prototype.Cb=function(a){a=a.toString();var b=this.a.hasOwnProperty(a);delete this.a[a];this.arrClean=!1;return b};r.prototype.del=r.prototype.Cb;
r.prototype.Eb=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,d.value])}return a};r.prototype.getEntryList=r.prototype.Eb;r.prototype.entries=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,v(this,d)])}return new w(a)};r.prototype.entries=r.prototype.entries;r.prototype.keys=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new w(a)};
r.prototype.keys=r.prototype.keys;r.prototype.values=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(v(this,this.a[b[c]]));return new w(a)};r.prototype.values=r.prototype.values;r.prototype.forEach=function(a,b){var c=u(this);c.sort();for(var d=0;d<c.length;d++){var f=this.a[c[d]];a.call(b,v(this,f),f.key,this)}};r.prototype.forEach=r.prototype.forEach;
r.prototype.set=function(a,b){var c=new wa(a);this.b?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.arrClean=!1;return this};r.prototype.set=r.prototype.set;function v(a,b){return a.b?(b.a||(b.a=new a.b(b.value)),b.a):b.value}r.prototype.get=function(a){if(a=this.a[a.toString()])return v(this,a)};r.prototype.get=r.prototype.get;r.prototype.has=function(a){return a.toString()in this.a};r.prototype.has=r.prototype.has;
r.prototype.Jc=function(a,b,c,d,f){var h=u(this);h.sort();for(var m=0;m<h.length;m++){var t=this.a[h[m]];b.Va(a);c.call(b,1,t.key);this.b?d.call(b,2,v(this,t),f):d.call(b,2,t.value);b.Ya()}};r.prototype.serializeBinary=r.prototype.Jc;r.deserializeBinary=function(a,b,c,d,f,h,m){for(;b.oa()&&!b.bb();){var t=b.c;1==t?h=c.call(b):2==t&&(a.b?(n(f),m||(m=new a.b),d.call(b,m,f)):m=d.call(b))}n(void 0!=h);n(void 0!=m);a.set(h,m)};
function u(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){this.key=a;this.value=b;this.a=void 0};function xa(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)b+=String.fromCharCode.apply(null,ra(a,c,c+8192));return b};var ya={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},za={"'":"\\'"};var Aa={},x=null;function Ba(a,b){void 0===b&&(b=0);Ca();b=Aa[b];for(var c=[],d=0;d<a.length;d+=3){var f=a[d],h=d+1<a.length,m=h?a[d+1]:0,t=d+2<a.length,B=t?a[d+2]:0,M=f>>2;f=(f&3)<<4|m>>4;m=(m&15)<<2|B>>6;B&=63;t||(B=64,h||(m=64));c.push(b[M],b[f],b[m]||"",b[B]||"")}return c.join("")}function Da(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ea(a,function(h){d[f++]=h});return d.subarray(0,f)}
function Ea(a,b){function c(B){for(;d<a.length;){var M=a.charAt(d++),La=x[M];if(null!=La)return La;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M);}return B}Ca();for(var d=0;;){var f=c(-1),h=c(0),m=c(64),t=c(64);if(64===t&&-1===f)break;b(f<<2|h>>4);64!=m&&(b(h<<4&240|m>>2),64!=t&&b(m<<6&192|t))}}
function Ca(){if(!x){x={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Aa[c]=d;for(var f=0;f<d.length;f++){var h=d[f];void 0===x[h]&&(x[h]=f)}}}};g("jspb.ConstBinaryMessage",function(){},void 0);g("jspb.BinaryMessage",function(){},void 0);g("jspb.BinaryConstants.FieldType",{yb:-1,ee:1,FLOAT:2,ke:3,te:4,je:5,xb:6,wb:7,BOOL:8,re:9,ie:10,le:11,ce:12,se:13,ge:14,me:15,ne:16,oe:17,pe:18,he:30,ve:31},void 0);g("jspb.BinaryConstants.WireType",{yb:-1,ue:0,xb:1,de:2,qe:3,fe:4,wb:5},void 0);
g("jspb.BinaryConstants.FieldTypeToWireType",function(a){switch(a){case 5:case 3:case 13:case 4:case 17:case 18:case 8:case 14:case 31:return 0;case 1:case 6:case 16:case 30:return 1;case 9:case 11:case 12:return 2;case 2:case 7:case 15:return 5;default:return-1}},void 0);g("jspb.BinaryConstants.INVALID_FIELD_NUMBER",-1,void 0);g("jspb.BinaryConstants.FLOAT32_EPS",1.401298464324817E-45,void 0);g("jspb.BinaryConstants.FLOAT32_MIN",1.1754943508222875E-38,void 0);
g("jspb.BinaryConstants.FLOAT32_MAX",3.4028234663852886E38,void 0);g("jspb.BinaryConstants.FLOAT64_EPS",4.9E-324,void 0);g("jspb.BinaryConstants.FLOAT64_MIN",2.2250738585072014E-308,void 0);g("jspb.BinaryConstants.FLOAT64_MAX",1.7976931348623157E308,void 0);g("jspb.BinaryConstants.TWO_TO_20",1048576,void 0);g("jspb.BinaryConstants.TWO_TO_23",8388608,void 0);g("jspb.BinaryConstants.TWO_TO_31",2147483648,void 0);g("jspb.BinaryConstants.TWO_TO_32",4294967296,void 0);
g("jspb.BinaryConstants.TWO_TO_52",4503599627370496,void 0);g("jspb.BinaryConstants.TWO_TO_63",0x7fffffffffffffff,void 0);g("jspb.BinaryConstants.TWO_TO_64",1.8446744073709552E19,void 0);g("jspb.BinaryConstants.ZERO_HASH","\x00\x00\x00\x00\x00\x00\x00\x00",void 0);var y=0,z=0;g("jspb.utils.getSplit64Low",function(){return y},void 0);g("jspb.utils.getSplit64High",function(){return z},void 0);function Fa(a){var b=a>>>0;a=Math.floor((a-b)/4294967296)>>>0;y=b;z=a}g("jspb.utils.splitUint64",Fa,void 0);function A(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));y=c;z=a}g("jspb.utils.splitInt64",A,void 0);
function Ga(a){var b=0>a;a=2*Math.abs(a);Fa(a);a=y;var c=z;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);y=a;z=c}g("jspb.utils.splitZigzag64",Ga,void 0);
function Ha(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?y=z=0:(z=0,y=2147483648);else if(isNaN(a))z=0,y=2147483647;else if(3.4028234663852886E38<a)z=0,y=(b<<31|2139095040)>>>0;else if(1.1754943508222875E-38>a)a=Math.round(a/Math.pow(2,-149)),z=0,y=(b<<31|a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(8388608*a);16777216<=a&&++c;z=0;y=(b<<31|c+127<<23|a&8388607)>>>0}}g("jspb.utils.splitFloat32",Ha,void 0);
function Ia(a){var b=0>a?1:0;a=b?-a:a;if(0===a)z=0<1/a?0:2147483648,y=0;else if(isNaN(a))z=2147483647,y=4294967295;else if(1.7976931348623157E308<a)z=(b<<31|2146435072)>>>0,y=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),z=(b<<31|a/4294967296)>>>0,y=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);z=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;y=4503599627370496*a>>>0}}g("jspb.utils.splitFloat64",Ia,void 0);
function C(a){var b=a.charCodeAt(4),c=a.charCodeAt(5),d=a.charCodeAt(6),f=a.charCodeAt(7);y=a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)>>>0;z=b+(c<<8)+(d<<16)+(f<<24)>>>0}g("jspb.utils.splitHash64",C,void 0);function D(a,b){return 4294967296*b+(a>>>0)}g("jspb.utils.joinUint64",D,void 0);function E(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=D(a,b);return c?-a:a}g("jspb.utils.joinInt64",E,void 0);
function Ja(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)}g("jspb.utils.toZigzag64",Ja,void 0);function Ka(a,b){return Ma(a,b,E)}g("jspb.utils.joinZigzag64",Ka,void 0);function Ma(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)}g("jspb.utils.fromZigzag64",Ma,void 0);function Na(a){var b=2*(a>>31)+1,c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))}g("jspb.utils.joinFloat32",Na,void 0);
function Oa(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=4294967296*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+4503599627370496)}g("jspb.utils.joinFloat64",Oa,void 0);function Pa(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)}g("jspb.utils.joinHash64",Pa,void 0);g("jspb.utils.DIGITS","0123456789abcdef".split(""),void 0);
function F(a,b){function c(f,h){f=f?String(f):"";return h?"0000000".slice(f.length)+f:f}if(2097151>=b)return""+D(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)}g("jspb.utils.joinUnsignedDecimalString",F,void 0);function G(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=F(a,b);return c?"-"+a:a}
g("jspb.utils.joinSignedDecimalString",G,void 0);function Qa(a,b){C(a);a=y;var c=z;return b?G(a,c):F(a,c)}g("jspb.utils.hash64ToDecimalString",Qa,void 0);g("jspb.utils.hash64ArrayToDecimalStrings",function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qa(a[d],b);return c},void 0);
function H(a){function b(m,t){for(var B=0;8>B&&(1!==m||0<t);B++)t=m*f[B]+t,f[B]=t&255,t>>>=8}function c(){for(var m=0;8>m;m++)f[m]=~f[m]&255}n(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var f=[0,0,0,0,0,0,0,0],h=0;h<a.length;h++)b(10,a.charCodeAt(h)-48);d&&(c(),b(1,1));return xa(f)}g("jspb.utils.decimalStringToHash64",H,void 0);g("jspb.utils.splitDecimalString",function(a){C(H(a))},void 0);function Ra(a){return String.fromCharCode(10>a?48+a:87+a)}
function Sa(a){return 97<=a?a-97+10:a-48}g("jspb.utils.hash64ToHexString",function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=Ra(d>>4);b[2*c+3]=Ra(d&15)}return b.join("")},void 0);g("jspb.utils.hexStringToHash64",function(a){a=a.toLowerCase();n(18==a.length);n("0"==a[0]);n("x"==a[1]);for(var b="",c=0;8>c;c++)b=String.fromCharCode(16*Sa(a.charCodeAt(2*c+2))+Sa(a.charCodeAt(2*c+3)))+b;return b},void 0);
g("jspb.utils.hash64ToNumber",function(a,b){C(a);a=y;var c=z;return b?E(a,c):D(a,c)},void 0);g("jspb.utils.numberToHash64",function(a){A(a);return Pa(y,z)},void 0);g("jspb.utils.countVarints",function(a,b,c){for(var d=0,f=b;f<c;f++)d+=a[f]>>7;return c-b-d},void 0);
g("jspb.utils.countVarintFields",function(a,b,c,d){var f=0;d*=8;if(128>d)for(;b<c&&a[b++]==d;)for(f++;;){var h=a[b++];if(0==(h&128))break}else for(;b<c;){for(h=d;128<h;){if(a[b]!=(h&127|128))return f;b++;h>>=7}if(a[b++]!=h)break;for(f++;h=a[b++],0!=(h&128););}return f},void 0);function Ta(a,b,c,d,f){var h=0;if(128>d)for(;b<c&&a[b++]==d;)h++,b+=f;else for(;b<c;){for(var m=d;128<m;){if(a[b++]!=(m&127|128))return h;m>>=7}if(a[b++]!=m)break;h++;b+=f}return h}
g("jspb.utils.countFixed32Fields",function(a,b,c,d){return Ta(a,b,c,8*d+5,4)},void 0);g("jspb.utils.countFixed64Fields",function(a,b,c,d){return Ta(a,b,c,8*d+1,8)},void 0);g("jspb.utils.countDelimitedFields",function(a,b,c,d){var f=0;for(d=8*d+2;b<c;){for(var h=d;128<h;){if(a[b++]!=(h&127|128))return f;h>>=7}if(a[b++]!=h)break;f++;for(var m=0,t=1;h=a[b++],m+=(h&127)*t,t*=128,0!=(h&128););b+=m}return f},void 0);
g("jspb.utils.debugBytesToTextFormat",function(a){var b='"';if(a){a=Ua(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'},void 0);
g("jspb.utils.debugScalarToTextFormat",function(a){if("string"===typeof a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),f=d.charCodeAt(0),h=c+1,m;if(!(m=ya[d])){if(!(31<f&&127>f))if(f=d,f in za)d=za[f];else if(f in ya)d=za[f]=ya[f];else{m=f.charCodeAt(0);if(31<m&&127>m)d=f;else{if(256>m){if(d="\\x",16>m||256<m)d+="0"}else d="\\u",4096>m&&(d+="0");d+=m.toString(16).toUpperCase()}d=za[f]=d}m=d}b[h]=m}b.push('"');a=b.join("")}else a=a.toString();return a},void 0);
g("jspb.utils.stringToByteArray",function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b},void 0);
function Ua(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Da(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);p("Type not convertible to Uint8Array.");return new Uint8Array(0)}g("jspb.utils.byteSourceToUint8Array",Ua,void 0);function I(a,b,c){this.b=null;this.a=this.c=this.h=0;this.v=!1;a&&this.H(a,b,c)}g("jspb.BinaryDecoder",I,void 0);var Va=[];I.getInstanceCacheLength=function(){return Va.length};function Wa(a,b,c){if(Va.length){var d=Va.pop();a&&d.H(a,b,c);return d}return new I(a,b,c)}I.alloc=Wa;I.prototype.Ca=function(){this.clear();100>Va.length&&Va.push(this)};I.prototype.free=I.prototype.Ca;I.prototype.clone=function(){return Wa(this.b,this.h,this.c-this.h)};I.prototype.clone=I.prototype.clone;
I.prototype.clear=function(){this.b=null;this.a=this.c=this.h=0;this.v=!1};I.prototype.clear=I.prototype.clear;I.prototype.Y=function(){return this.b};I.prototype.getBuffer=I.prototype.Y;I.prototype.H=function(a,b,c){this.b=Ua(a);this.h=void 0!==b?b:0;this.c=void 0!==c?this.h+c:this.b.length;this.a=this.h};I.prototype.setBlock=I.prototype.H;I.prototype.Db=function(){return this.c};I.prototype.getEnd=I.prototype.Db;I.prototype.setEnd=function(a){this.c=a};I.prototype.setEnd=I.prototype.setEnd;
I.prototype.reset=function(){this.a=this.h};I.prototype.reset=I.prototype.reset;I.prototype.B=function(){return this.a};I.prototype.getCursor=I.prototype.B;I.prototype.Ma=function(a){this.a=a};I.prototype.setCursor=I.prototype.Ma;I.prototype.advance=function(a){this.a+=a;n(this.a<=this.c)};I.prototype.advance=I.prototype.advance;I.prototype.ya=function(){return this.a==this.c};I.prototype.atEnd=I.prototype.ya;I.prototype.Qb=function(){return this.a>this.c};I.prototype.pastEnd=I.prototype.Qb;
I.prototype.getError=function(){return this.v||0>this.a||this.a>this.c};I.prototype.getError=I.prototype.getError;I.prototype.w=function(a){for(var b=128,c=0,d=0,f=0;4>f&&128<=b;f++)b=this.b[this.a++],c|=(b&127)<<7*f;128<=b&&(b=this.b[this.a++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(f=0;5>f&&128<=b;f++)b=this.b[this.a++],d|=(b&127)<<7*f+3;if(128>b)return a(c>>>0,d>>>0);p("Failed to read varint, encoding is invalid.");this.v=!0};I.prototype.readSplitVarint64=I.prototype.w;
I.prototype.ea=function(a){return this.w(function(b,c){return Ma(b,c,a)})};I.prototype.readSplitZigzagVarint64=I.prototype.ea;I.prototype.ta=function(a){var b=this.b,c=this.a;this.a+=8;for(var d=0,f=0,h=c+7;h>=c;h--)d=d<<8|b[h],f=f<<8|b[h+4];return a(d,f)};I.prototype.readSplitFixed64=I.prototype.ta;I.prototype.kb=function(){for(;this.b[this.a]&128;)this.a++;this.a++};I.prototype.skipVarint=I.prototype.kb;I.prototype.mb=function(a){for(;128<a;)this.a--,a>>>=7;this.a--};I.prototype.unskipVarint=I.prototype.mb;
I.prototype.o=function(){var a=this.b;var b=a[this.a];var c=b&127;if(128>b)return this.a+=1,n(this.a<=this.c),c;b=a[this.a+1];c|=(b&127)<<7;if(128>b)return this.a+=2,n(this.a<=this.c),c;b=a[this.a+2];c|=(b&127)<<14;if(128>b)return this.a+=3,n(this.a<=this.c),c;b=a[this.a+3];c|=(b&127)<<21;if(128>b)return this.a+=4,n(this.a<=this.c),c;b=a[this.a+4];c|=(b&15)<<28;if(128>b)return this.a+=5,n(this.a<=this.c),c>>>0;this.a+=5;128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=
a[this.a++]&&n(!1);n(this.a<=this.c);return c};I.prototype.readUnsignedVarint32=I.prototype.o;I.prototype.da=function(){return~~this.o()};I.prototype.readSignedVarint32=I.prototype.da;I.prototype.O=function(){return this.o().toString()};I.prototype.Ea=function(){return this.da().toString()};I.prototype.readSignedVarint32String=I.prototype.Ea;I.prototype.Ia=function(){var a=this.o();return a>>>1^-(a&1)};I.prototype.readZigzagVarint32=I.prototype.Ia;I.prototype.Ga=function(){return this.w(D)};
I.prototype.readUnsignedVarint64=I.prototype.Ga;I.prototype.Ha=function(){return this.w(F)};I.prototype.readUnsignedVarint64String=I.prototype.Ha;I.prototype.sa=function(){return this.w(E)};I.prototype.readSignedVarint64=I.prototype.sa;I.prototype.Fa=function(){return this.w(G)};I.prototype.readSignedVarint64String=I.prototype.Fa;I.prototype.Ja=function(){return this.w(Ka)};I.prototype.readZigzagVarint64=I.prototype.Ja;I.prototype.fb=function(){return this.ea(Pa)};
I.prototype.readZigzagVarintHash64=I.prototype.fb;I.prototype.Ka=function(){return this.ea(G)};I.prototype.readZigzagVarint64String=I.prototype.Ka;I.prototype.Gc=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a};I.prototype.readUint8=I.prototype.Gc;I.prototype.Ec=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return a<<0|b<<8};I.prototype.readUint16=I.prototype.Ec;
I.prototype.m=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return(a<<0|b<<8|c<<16|d<<24)>>>0};I.prototype.readUint32=I.prototype.m;I.prototype.ga=function(){var a=this.m(),b=this.m();return D(a,b)};I.prototype.readUint64=I.prototype.ga;I.prototype.ha=function(){var a=this.m(),b=this.m();return F(a,b)};I.prototype.readUint64String=I.prototype.ha;
I.prototype.Xb=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a<<24>>24};I.prototype.readInt8=I.prototype.Xb;I.prototype.Vb=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return(a<<0|b<<8)<<16>>16};I.prototype.readInt16=I.prototype.Vb;I.prototype.P=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return a<<0|b<<8|c<<16|d<<24};I.prototype.readInt32=I.prototype.P;
I.prototype.ba=function(){var a=this.m(),b=this.m();return E(a,b)};I.prototype.readInt64=I.prototype.ba;I.prototype.ca=function(){var a=this.m(),b=this.m();return G(a,b)};I.prototype.readInt64String=I.prototype.ca;I.prototype.aa=function(){var a=this.m();return Na(a,0)};I.prototype.readFloat=I.prototype.aa;I.prototype.Z=function(){var a=this.m(),b=this.m();return Oa(a,b)};I.prototype.readDouble=I.prototype.Z;I.prototype.pa=function(){return!!this.b[this.a++]};I.prototype.readBool=I.prototype.pa;
I.prototype.ra=function(){return this.da()};I.prototype.readEnum=I.prototype.ra;
I.prototype.fa=function(a){var b=this.b,c=this.a;a=c+a;for(var d=[],f="";c<a;){var h=b[c++];if(128>h)d.push(h);else if(192>h)continue;else if(224>h){var m=b[c++];d.push((h&31)<<6|m&63)}else if(240>h){m=b[c++];var t=b[c++];d.push((h&15)<<12|(m&63)<<6|t&63)}else if(248>h){m=b[c++];t=b[c++];var B=b[c++];h=(h&7)<<18|(m&63)<<12|(t&63)<<6|B&63;h-=65536;d.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=d.length&&(f+=String.fromCharCode.apply(null,d),d.length=0)}f+=xa(d);this.a=c;return f};
I.prototype.readString=I.prototype.fa;I.prototype.Dc=function(){var a=this.o();return this.fa(a)};I.prototype.readStringWithLength=I.prototype.Dc;I.prototype.qa=function(a){if(0>a||this.a+a>this.b.length)return this.v=!0,p("Invalid byte length!"),new Uint8Array(0);var b=this.b.subarray(this.a,this.a+a);this.a+=a;n(this.a<=this.c);return b};I.prototype.readBytes=I.prototype.qa;I.prototype.ia=function(){return this.w(Pa)};I.prototype.readVarintHash64=I.prototype.ia;
I.prototype.$=function(){var a=this.b,b=this.a,c=a[b],d=a[b+1],f=a[b+2],h=a[b+3],m=a[b+4],t=a[b+5],B=a[b+6];a=a[b+7];this.a+=8;return String.fromCharCode(c,d,f,h,m,t,B,a)};I.prototype.readFixedHash64=I.prototype.$;function J(a,b,c){this.a=Wa(a,b,c);this.O=this.a.B();this.b=this.c=-1;this.h=!1;this.v=null}g("jspb.BinaryReader",J,void 0);var K=[];J.clearInstanceCache=function(){K=[]};J.getInstanceCacheLength=function(){return K.length};function Xa(a,b,c){if(K.length){var d=K.pop();a&&d.a.H(a,b,c);return d}return new J(a,b,c)}J.alloc=Xa;J.prototype.zb=Xa;J.prototype.alloc=J.prototype.zb;J.prototype.Ca=function(){this.a.clear();this.b=this.c=-1;this.h=!1;this.v=null;100>K.length&&K.push(this)};
J.prototype.free=J.prototype.Ca;J.prototype.Fb=function(){return this.O};J.prototype.getFieldCursor=J.prototype.Fb;J.prototype.B=function(){return this.a.B()};J.prototype.getCursor=J.prototype.B;J.prototype.Y=function(){return this.a.Y()};J.prototype.getBuffer=J.prototype.Y;J.prototype.Hb=function(){return this.c};J.prototype.getFieldNumber=J.prototype.Hb;J.prototype.Lb=function(){return this.b};J.prototype.getWireType=J.prototype.Lb;J.prototype.Mb=function(){return 2==this.b};
J.prototype.isDelimited=J.prototype.Mb;J.prototype.bb=function(){return 4==this.b};J.prototype.isEndGroup=J.prototype.bb;J.prototype.getError=function(){return this.h||this.a.getError()};J.prototype.getError=J.prototype.getError;J.prototype.H=function(a,b,c){this.a.H(a,b,c);this.b=this.c=-1};J.prototype.setBlock=J.prototype.H;J.prototype.reset=function(){this.a.reset();this.b=this.c=-1};J.prototype.reset=J.prototype.reset;J.prototype.advance=function(a){this.a.advance(a)};J.prototype.advance=J.prototype.advance;
J.prototype.oa=function(){if(this.a.ya())return!1;if(this.getError())return p("Decoder hit an error"),!1;this.O=this.a.B();var a=this.a.o(),b=a>>>3;a&=7;if(0!=a&&5!=a&&1!=a&&2!=a&&3!=a&&4!=a)return p("Invalid wire type: %s (at position %s)",a,this.O),this.h=!0,!1;this.c=b;this.b=a;return!0};J.prototype.nextField=J.prototype.oa;J.prototype.Oa=function(){this.a.mb(this.c<<3|this.b)};J.prototype.unskipHeader=J.prototype.Oa;
J.prototype.Lc=function(){var a=this.c;for(this.Oa();this.oa()&&this.c==a;)this.C();this.a.ya()||this.Oa()};J.prototype.skipMatchingFields=J.prototype.Lc;J.prototype.lb=function(){0!=this.b?(p("Invalid wire type for skipVarintField"),this.C()):this.a.kb()};J.prototype.skipVarintField=J.prototype.lb;J.prototype.gb=function(){if(2!=this.b)p("Invalid wire type for skipDelimitedField"),this.C();else{var a=this.a.o();this.a.advance(a)}};J.prototype.skipDelimitedField=J.prototype.gb;
J.prototype.hb=function(){5!=this.b?(p("Invalid wire type for skipFixed32Field"),this.C()):this.a.advance(4)};J.prototype.skipFixed32Field=J.prototype.hb;J.prototype.ib=function(){1!=this.b?(p("Invalid wire type for skipFixed64Field"),this.C()):this.a.advance(8)};J.prototype.skipFixed64Field=J.prototype.ib;J.prototype.jb=function(){var a=this.c;do{if(!this.oa()){p("Unmatched start-group tag: stream EOF");this.h=!0;break}if(4==this.b){this.c!=a&&(p("Unmatched end-group tag"),this.h=!0);break}this.C()}while(1)};
J.prototype.skipGroup=J.prototype.jb;J.prototype.C=function(){switch(this.b){case 0:this.lb();break;case 1:this.ib();break;case 2:this.gb();break;case 5:this.hb();break;case 3:this.jb();break;default:p("Invalid wire encoding for field.")}};J.prototype.skipField=J.prototype.C;J.prototype.Hc=function(a,b){null===this.v&&(this.v={});n(!this.v[a]);this.v[a]=b};J.prototype.registerReadCallback=J.prototype.Hc;J.prototype.Ic=function(a){n(null!==this.v);a=this.v[a];n(a);return a(this)};
J.prototype.runReadCallback=J.prototype.Ic;J.prototype.Yb=function(a,b){n(2==this.b);var c=this.a.c,d=this.a.o();d=this.a.B()+d;this.a.setEnd(d);b(a,this);this.a.Ma(d);this.a.setEnd(c)};J.prototype.readMessage=J.prototype.Yb;J.prototype.Ub=function(a,b,c){n(3==this.b);n(this.c==a);c(b,this);this.h||4==this.b||(p("Group submessage did not end with an END_GROUP tag"),this.h=!0)};J.prototype.readGroup=J.prototype.Ub;
J.prototype.Gb=function(){n(2==this.b);var a=this.a.o(),b=this.a.B(),c=b+a;a=Wa(this.a.Y(),b,a);this.a.Ma(c);return a};J.prototype.getFieldDecoder=J.prototype.Gb;J.prototype.P=function(){n(0==this.b);return this.a.da()};J.prototype.readInt32=J.prototype.P;J.prototype.Wb=function(){n(0==this.b);return this.a.Ea()};J.prototype.readInt32String=J.prototype.Wb;J.prototype.ba=function(){n(0==this.b);return this.a.sa()};J.prototype.readInt64=J.prototype.ba;J.prototype.ca=function(){n(0==this.b);return this.a.Fa()};
J.prototype.readInt64String=J.prototype.ca;J.prototype.m=function(){n(0==this.b);return this.a.o()};J.prototype.readUint32=J.prototype.m;J.prototype.Fc=function(){n(0==this.b);return this.a.O()};J.prototype.readUint32String=J.prototype.Fc;J.prototype.ga=function(){n(0==this.b);return this.a.Ga()};J.prototype.readUint64=J.prototype.ga;J.prototype.ha=function(){n(0==this.b);return this.a.Ha()};J.prototype.readUint64String=J.prototype.ha;J.prototype.zc=function(){n(0==this.b);return this.a.Ia()};
J.prototype.readSint32=J.prototype.zc;J.prototype.Ac=function(){n(0==this.b);return this.a.Ja()};J.prototype.readSint64=J.prototype.Ac;J.prototype.Bc=function(){n(0==this.b);return this.a.Ka()};J.prototype.readSint64String=J.prototype.Bc;J.prototype.Rb=function(){n(5==this.b);return this.a.m()};J.prototype.readFixed32=J.prototype.Rb;J.prototype.Sb=function(){n(1==this.b);return this.a.ga()};J.prototype.readFixed64=J.prototype.Sb;J.prototype.Tb=function(){n(1==this.b);return this.a.ha()};
J.prototype.readFixed64String=J.prototype.Tb;J.prototype.vc=function(){n(5==this.b);return this.a.P()};J.prototype.readSfixed32=J.prototype.vc;J.prototype.wc=function(){n(5==this.b);return this.a.P().toString()};J.prototype.readSfixed32String=J.prototype.wc;J.prototype.xc=function(){n(1==this.b);return this.a.ba()};J.prototype.readSfixed64=J.prototype.xc;J.prototype.yc=function(){n(1==this.b);return this.a.ca()};J.prototype.readSfixed64String=J.prototype.yc;
J.prototype.aa=function(){n(5==this.b);return this.a.aa()};J.prototype.readFloat=J.prototype.aa;J.prototype.Z=function(){n(1==this.b);return this.a.Z()};J.prototype.readDouble=J.prototype.Z;J.prototype.pa=function(){n(0==this.b);return!!this.a.o()};J.prototype.readBool=J.prototype.pa;J.prototype.ra=function(){n(0==this.b);return this.a.sa()};J.prototype.readEnum=J.prototype.ra;J.prototype.fa=function(){n(2==this.b);var a=this.a.o();return this.a.fa(a)};J.prototype.readString=J.prototype.fa;
J.prototype.qa=function(){n(2==this.b);var a=this.a.o();return this.a.qa(a)};J.prototype.readBytes=J.prototype.qa;J.prototype.ia=function(){n(0==this.b);return this.a.ia()};J.prototype.readVarintHash64=J.prototype.ia;J.prototype.Cc=function(){n(0==this.b);return this.a.fb()};J.prototype.readSintHash64=J.prototype.Cc;J.prototype.w=function(a){n(0==this.b);return this.a.w(a)};J.prototype.readSplitVarint64=J.prototype.w;
J.prototype.ea=function(a){n(0==this.b);return this.a.w(function(b,c){return Ma(b,c,a)})};J.prototype.readSplitZigzagVarint64=J.prototype.ea;J.prototype.$=function(){n(1==this.b);return this.a.$()};J.prototype.readFixedHash64=J.prototype.$;J.prototype.ta=function(a){n(1==this.b);return this.a.ta(a)};J.prototype.readSplitFixed64=J.prototype.ta;function L(a,b){n(2==a.b);var c=a.a.o();c=a.a.B()+c;for(var d=[];a.a.B()<c;)d.push(b.call(a.a));return d}J.prototype.gc=function(){return L(this,this.a.da)};
J.prototype.readPackedInt32=J.prototype.gc;J.prototype.hc=function(){return L(this,this.a.Ea)};J.prototype.readPackedInt32String=J.prototype.hc;J.prototype.ic=function(){return L(this,this.a.sa)};J.prototype.readPackedInt64=J.prototype.ic;J.prototype.jc=function(){return L(this,this.a.Fa)};J.prototype.readPackedInt64String=J.prototype.jc;J.prototype.qc=function(){return L(this,this.a.o)};J.prototype.readPackedUint32=J.prototype.qc;J.prototype.rc=function(){return L(this,this.a.O)};
J.prototype.readPackedUint32String=J.prototype.rc;J.prototype.sc=function(){return L(this,this.a.Ga)};J.prototype.readPackedUint64=J.prototype.sc;J.prototype.tc=function(){return L(this,this.a.Ha)};J.prototype.readPackedUint64String=J.prototype.tc;J.prototype.nc=function(){return L(this,this.a.Ia)};J.prototype.readPackedSint32=J.prototype.nc;J.prototype.oc=function(){return L(this,this.a.Ja)};J.prototype.readPackedSint64=J.prototype.oc;J.prototype.pc=function(){return L(this,this.a.Ka)};
J.prototype.readPackedSint64String=J.prototype.pc;J.prototype.bc=function(){return L(this,this.a.m)};J.prototype.readPackedFixed32=J.prototype.bc;J.prototype.cc=function(){return L(this,this.a.ga)};J.prototype.readPackedFixed64=J.prototype.cc;J.prototype.dc=function(){return L(this,this.a.ha)};J.prototype.readPackedFixed64String=J.prototype.dc;J.prototype.kc=function(){return L(this,this.a.P)};J.prototype.readPackedSfixed32=J.prototype.kc;J.prototype.lc=function(){return L(this,this.a.ba)};
J.prototype.readPackedSfixed64=J.prototype.lc;J.prototype.mc=function(){return L(this,this.a.ca)};J.prototype.readPackedSfixed64String=J.prototype.mc;J.prototype.fc=function(){return L(this,this.a.aa)};J.prototype.readPackedFloat=J.prototype.fc;J.prototype.$b=function(){return L(this,this.a.Z)};J.prototype.readPackedDouble=J.prototype.$b;J.prototype.Zb=function(){return L(this,this.a.pa)};J.prototype.readPackedBool=J.prototype.Zb;J.prototype.ac=function(){return L(this,this.a.ra)};
J.prototype.readPackedEnum=J.prototype.ac;J.prototype.uc=function(){return L(this,this.a.ia)};J.prototype.readPackedVarintHash64=J.prototype.uc;J.prototype.ec=function(){return L(this,this.a.$)};J.prototype.readPackedFixedHash64=J.prototype.ec;function Ya(a,b,c,d,f){this.ma=a;this.Ba=b;this.la=c;this.Na=d;this.na=f}g("jspb.ExtensionFieldInfo",Ya,void 0);function Za(a,b,c,d,f,h){this.Za=a;this.za=b;this.Aa=c;this.Wa=d;this.Ab=f;this.Nb=h}g("jspb.ExtensionFieldBinaryInfo",Za,void 0);Ya.prototype.F=function(){return!!this.la};Ya.prototype.isMessageType=Ya.prototype.F;function N(){}g("jspb.Message",N,void 0);N.GENERATE_TO_OBJECT=!0;N.GENERATE_FROM_OBJECT=!0;var $a="function"==typeof Uint8Array;N.prototype.Ib=function(){return this.b};
N.prototype.getJsPbMessageId=N.prototype.Ib;
N.initialize=function(a,b,c,d,f,h){a.f=null;b||(b=c?[c]:[]);a.b=c?String(c):void 0;a.D=0===c?-1:0;a.u=b;a:{c=a.u.length;b=-1;if(c&&(b=c-1,c=a.u[b],!(null===c||"object"!=typeof c||Array.isArray(c)||$a&&c instanceof Uint8Array))){a.G=b-a.D;a.i=c;break a}-1<d?(a.G=Math.max(d,b+1-a.D),a.i=null):a.G=Number.MAX_VALUE}a.a={};if(f)for(d=0;d<f.length;d++)b=f[d],b<a.G?(b+=a.D,a.u[b]=a.u[b]||ab):(bb(a),a.i[b]=a.i[b]||ab);if(h&&h.length)for(d=0;d<h.length;d++)cb(a,h[d])};
var ab=Object.freeze?Object.freeze([]):[];function bb(a){var b=a.G+a.D;a.u[b]||(a.i=a.u[b]={})}function db(a,b,c){for(var d=[],f=0;f<a.length;f++)d[f]=b.call(a[f],c,a[f]);return d}N.toObjectList=db;N.toObjectExtension=function(a,b,c,d,f){for(var h in c){var m=c[h],t=d.call(a,m);if(null!=t){for(var B in m.Ba)if(m.Ba.hasOwnProperty(B))break;b[B]=m.Na?m.na?db(t,m.Na,f):m.Na(f,t):t}}};
N.serializeBinaryExtensions=function(a,b,c,d){for(var f in c){var h=c[f],m=h.Za;if(!h.Aa)throw Error("Message extension present that was generated without binary serialization support");var t=d.call(a,m);if(null!=t)if(m.F())if(h.Wa)h.Aa.call(b,m.ma,t,h.Wa);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else h.Aa.call(b,m.ma,t)}};
N.readBinaryExtension=function(a,b,c,d,f){var h=c[b.c];if(h){c=h.Za;if(!h.za)throw Error("Deserializing extension whose generated code does not support binary format");if(c.F()){var m=new c.la;h.za.call(b,m,h.Ab)}else m=h.za.call(b);c.na&&!h.Nb?(b=d.call(a,c))?b.push(m):f.call(a,c,[m]):f.call(a,c,m)}else b.C()};function O(a,b){if(b<a.G){b+=a.D;var c=a.u[b];return c===ab?a.u[b]=[]:c}if(a.i)return c=a.i[b],c===ab?a.i[b]=[]:c}N.getField=O;N.getRepeatedField=function(a,b){return O(a,b)};
function eb(a,b){a=O(a,b);return null==a?a:+a}N.getOptionalFloatingPointField=eb;function fb(a,b){a=O(a,b);return null==a?a:!!a}N.getBooleanField=fb;N.getRepeatedFloatingPointField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.a[b]=!0}return c};N.getRepeatedBooleanField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.a[b]=!0}return c};
function gb(a){if(null==a||"string"===typeof a)return a;if($a&&a instanceof Uint8Array)return Ba(a);p("Cannot coerce to b64 string: "+k(a));return null}N.bytesAsB64=gb;function hb(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return Da(a);p("Cannot coerce to Uint8Array: "+k(a));return null}N.bytesAsU8=hb;N.bytesListAsB64=function(a){ib(a);return a.length&&"string"!==typeof a[0]?l(a,gb):a};N.bytesListAsU8=function(a){ib(a);return!a.length||a[0]instanceof Uint8Array?a:l(a,hb)};
function ib(a){if(a&&1<a.length){var b=k(a[0]);qa(a,function(c){k(c)!=b&&p("Inconsistent type in JSPB repeated field array. Got "+k(c)+" expected "+b)})}}function jb(a,b,c){a=O(a,b);return null==a?c:a}N.getFieldWithDefault=jb;N.getBooleanFieldWithDefault=function(a,b,c){a=fb(a,b);return null==a?c:a};N.getFloatingPointFieldWithDefault=function(a,b,c){a=eb(a,b);return null==a?c:a};N.getFieldProto3=jb;
N.getMapField=function(a,b,c,d){a.f||(a.f={});if(b in a.f)return a.f[b];var f=O(a,b);if(!f){if(c)return;f=[];P(a,b,f)}return a.f[b]=new r(f,d)};function P(a,b,c){q(a,N);b<a.G?a.u[b+a.D]=c:(bb(a),a.i[b]=c);return a}N.setField=P;N.setProto3IntField=function(a,b,c){return Q(a,b,c,0)};N.setProto3FloatField=function(a,b,c){return Q(a,b,c,0)};N.setProto3BooleanField=function(a,b,c){return Q(a,b,c,!1)};N.setProto3StringField=function(a,b,c){return Q(a,b,c,"")};
N.setProto3BytesField=function(a,b,c){return Q(a,b,c,"")};N.setProto3EnumField=function(a,b,c){return Q(a,b,c,0)};N.setProto3StringIntField=function(a,b,c){return Q(a,b,c,"0")};function Q(a,b,c,d){q(a,N);c!==d?P(a,b,c):b<a.G?a.u[b+a.D]=null:(bb(a),delete a.i[b]);return a}N.addToRepeatedField=function(a,b,c,d){q(a,N);b=O(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};function kb(a,b,c,d){q(a,N);(c=cb(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),P(a,c,void 0));return P(a,b,d)}
N.setOneofField=kb;function cb(a,b){for(var c,d,f=0;f<b.length;f++){var h=b[f],m=O(a,h);null!=m&&(c=h,d=m,P(a,h,void 0))}return c?(P(a,c,d),c):0}N.computeOneofCase=cb;N.getWrapperField=function(a,b,c,d){a.f||(a.f={});if(!a.f[c]){var f=O(a,c);if(d||f)a.f[c]=new b(f)}return a.f[c]};N.getRepeatedWrapperField=function(a,b,c){lb(a,b,c);b=a.f[c];b==ab&&(b=a.f[c]=[]);return b};function lb(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=O(a,c),f=[],h=0;h<d.length;h++)f[h]=new b(d[h]);a.f[c]=f}}
N.setWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});var d=c?c.g():c;a.f[b]=c;return P(a,b,d)};N.setOneofWrapperField=function(a,b,c,d){q(a,N);a.f||(a.f={});var f=d?d.g():d;a.f[b]=d;return kb(a,b,c,f)};N.setRepeatedWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});c=c||[];for(var d=[],f=0;f<c.length;f++)d[f]=c[f].g();a.f[b]=c;return P(a,b,d)};
N.addToRepeatedWrapperField=function(a,b,c,d,f){lb(a,d,b);var h=a.f[b];h||(h=a.f[b]=[]);c=c?c:new d;a=O(a,b);void 0!=f?(h.splice(f,0,c),a.splice(f,0,c.g())):(h.push(c),a.push(c.g()));return c};N.toMap=function(a,b,c,d){for(var f={},h=0;h<a.length;h++)f[b.call(a[h])]=c?c.call(a[h],d,a[h]):a[h];return f};function mb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}N.prototype.g=function(){mb(this);return this.u};
N.prototype.toArray=N.prototype.g;N.prototype.toString=function(){mb(this);return this.u.toString()};N.prototype.getExtension=function(a){if(this.i){this.f||(this.f={});var b=a.ma;if(a.na){if(a.F())return this.f[b]||(this.f[b]=l(this.i[b]||[],function(c){return new a.la(c)})),this.f[b]}else if(a.F())return!this.f[b]&&this.i[b]&&(this.f[b]=new a.la(this.i[b])),this.f[b];return this.i[b]}};N.prototype.getExtension=N.prototype.getExtension;
N.prototype.Kc=function(a,b){this.f||(this.f={});bb(this);var c=a.ma;a.na?(b=b||[],a.F()?(this.f[c]=b,this.i[c]=l(b,function(d){return d.g()})):this.i[c]=b):a.F()?(this.f[c]=b,this.i[c]=b?b.g():b):this.i[c]=b;return this};N.prototype.setExtension=N.prototype.Kc;N.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.g();b=b.g();var d=[],f=0,h=c.length>b.length?c.length:b.length;a.b&&(d[0]=a.b,f=1);for(;f<h;f++)nb(c[f],b[f])||(d[f]=b[f]);return new a.constructor(d)};
N.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&nb(a.g(),b.g())};function ob(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!nb(a[d],b[d]))return!1;return!0}N.compareExtensions=ob;
function nb(a,b){if(a==b)return!0;if(!la(a)||!la(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if($a&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,f=void 0,h=Math.max(a.length,b.length);for(c=0;c<h;c++){var m=a[c],t=b[c];m&&m.constructor==Object&&(n(void 0===d),n(c===a.length-1),d=m,m=void 0);t&&t.constructor==
Object&&(n(void 0===f),n(c===b.length-1),f=t,t=void 0);if(!nb(m,t))return!1}return d||f?(d=d||{},f=f||{},ob(d,f)):!0}if(a.constructor===Object)return ob(a,b);throw Error("Invalid type in JSPB array");}N.compareFields=nb;N.prototype.Bb=function(){return pb(this)};N.prototype.cloneMessage=N.prototype.Bb;N.prototype.clone=function(){return pb(this)};N.prototype.clone=N.prototype.clone;N.clone=function(a){return pb(a)};function pb(a){return new a.constructor(qb(a.g()))}
N.copyInto=function(a,b){q(a,N);q(b,N);n(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=pb(a);for(var c=b.g(),d=a.g(),f=c.length=0;f<d.length;f++)c[f]=d[f];b.f=a.f;b.i=a.i};function qb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?qb(n(d)):d)}return b}if($a&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?qb(n(d)):d);return b}
N.registerMessageType=function(a,b){b.we=a};var R={dump:function(a){q(a,N,"jspb.Message instance expected");n(a.getExtension,"Only unobfuscated and unoptimized compilation modes supported.");return R.X(a)}};g("jspb.debug.dump",R.dump,void 0);
R.X=function(a){var b=k(a);if("number"==b||"string"==b||"boolean"==b||"null"==b||"undefined"==b||"undefined"!==typeof Uint8Array&&a instanceof Uint8Array)return a;if("array"==b)return ua(a),l(a,R.X);if(a instanceof r){var c={};a=a.entries();for(var d=a.next();!d.done;d=a.next())c[d.value[0]]=R.X(d.value[1]);return c}q(a,N,"Only messages expected: "+a);b=a.constructor;var f={$name:b.name||b.displayName};for(t in b.prototype){var h=/^get([A-Z]\w*)/.exec(t);if(h&&"getExtension"!=t&&"getJsPbMessageId"!=
t){var m="has"+h[1];if(!a[m]||a[m]())m=a[t](),f[R.$a(h[1])]=R.X(m)}}if(a.extensionObject_)return f.$extensions="Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly",f;for(d in b.extensions)if(/^\d+$/.test(d)){m=b.extensions[d];var t=a.getExtension(m);h=void 0;m=m.Ba;var B=[],M=0;for(h in m)B[M++]=h;h=B[0];null!=t&&(c||(c=f.$extensions={}),c[R.$a(h)]=R.X(t))}return f};R.$a=function(a){return a.replace(/^[A-Z]/,function(b){return b.toLowerCase()})};function S(){this.a=[]}g("jspb.BinaryEncoder",S,void 0);S.prototype.length=function(){return this.a.length};S.prototype.length=S.prototype.length;S.prototype.end=function(){var a=this.a;this.a=[];return a};S.prototype.end=S.prototype.end;S.prototype.l=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);for(n(0<=b&&4294967296>b);0<b||127<a;)this.a.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.a.push(a)};S.prototype.writeSplitVarint64=S.prototype.l;
S.prototype.A=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);n(0<=b&&4294967296>b);this.s(a);this.s(b)};S.prototype.writeSplitFixed64=S.prototype.A;S.prototype.j=function(a){n(a==Math.floor(a));for(n(0<=a&&4294967296>a);127<a;)this.a.push(a&127|128),a>>>=7;this.a.push(a)};S.prototype.writeUnsignedVarint32=S.prototype.j;S.prototype.M=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);if(0<=a)this.j(a);else{for(var b=0;9>b;b++)this.a.push(a&127|128),a>>=7;this.a.push(1)}};
S.prototype.writeSignedVarint32=S.prototype.M;S.prototype.va=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);A(a);this.l(y,z)};S.prototype.writeUnsignedVarint64=S.prototype.va;S.prototype.ua=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.l(y,z)};S.prototype.writeSignedVarint64=S.prototype.ua;S.prototype.wa=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.j((a<<1^a>>31)>>>0)};S.prototype.writeZigzagVarint32=S.prototype.wa;
S.prototype.xa=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);Ga(a);this.l(y,z)};S.prototype.writeZigzagVarint64=S.prototype.xa;S.prototype.Ta=function(a){this.W(H(a))};S.prototype.writeZigzagVarint64String=S.prototype.Ta;S.prototype.W=function(a){var b=this;C(a);Ja(y,z,function(c,d){b.l(c>>>0,d>>>0)})};S.prototype.writeZigzagVarintHash64=S.prototype.W;S.prototype.be=function(a){n(a==Math.floor(a));n(0<=a&&256>a);this.a.push(a>>>0&255)};S.prototype.writeUint8=S.prototype.be;
S.prototype.ae=function(a){n(a==Math.floor(a));n(0<=a&&65536>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeUint16=S.prototype.ae;S.prototype.s=function(a){n(a==Math.floor(a));n(0<=a&&4294967296>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeUint32=S.prototype.s;S.prototype.V=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);Fa(a);this.s(y);this.s(z)};S.prototype.writeUint64=S.prototype.V;
S.prototype.Qc=function(a){n(a==Math.floor(a));n(-128<=a&&128>a);this.a.push(a>>>0&255)};S.prototype.writeInt8=S.prototype.Qc;S.prototype.Pc=function(a){n(a==Math.floor(a));n(-32768<=a&&32768>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeInt16=S.prototype.Pc;S.prototype.S=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeInt32=S.prototype.S;
S.prototype.T=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.A(y,z)};S.prototype.writeInt64=S.prototype.T;S.prototype.ka=function(a){n(a==Math.floor(a));n(-9223372036854775808<=+a&&0x7fffffffffffffff>+a);C(H(a));this.A(y,z)};S.prototype.writeInt64String=S.prototype.ka;S.prototype.L=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-3.4028234663852886E38<=a&&3.4028234663852886E38>=a);Ha(a);this.s(y)};S.prototype.writeFloat=S.prototype.L;
S.prototype.J=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-1.7976931348623157E308<=a&&1.7976931348623157E308>=a);Ia(a);this.s(y);this.s(z)};S.prototype.writeDouble=S.prototype.J;S.prototype.I=function(a){n("boolean"===typeof a||"number"===typeof a);this.a.push(a?1:0)};S.prototype.writeBool=S.prototype.I;S.prototype.R=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.M(a)};S.prototype.writeEnum=S.prototype.R;S.prototype.ja=function(a){this.a.push.apply(this.a,a)};
S.prototype.writeBytes=S.prototype.ja;S.prototype.N=function(a){C(a);this.l(y,z)};S.prototype.writeVarintHash64=S.prototype.N;S.prototype.K=function(a){C(a);this.s(y);this.s(z)};S.prototype.writeFixedHash64=S.prototype.K;
S.prototype.U=function(a){var b=this.a.length;ta(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.a.push(d);else if(2048>d)this.a.push(d>>6|192),this.a.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var f=a.charCodeAt(c+1);56320<=f&&57343>=f&&(d=1024*(d-55296)+f-56320+65536,this.a.push(d>>18|240),this.a.push(d>>12&63|128),this.a.push(d>>6&63|128),this.a.push(d&63|128),c++)}else this.a.push(d>>12|224),this.a.push(d>>6&63|128),this.a.push(d&63|128)}return this.a.length-
b};S.prototype.writeString=S.prototype.U;function T(a,b){this.lo=a;this.hi=b}g("jspb.arith.UInt64",T,void 0);T.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};T.prototype.cmp=T.prototype.cmp;T.prototype.La=function(){return new T((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};T.prototype.rightShift=T.prototype.La;T.prototype.Da=function(){return new T(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};T.prototype.leftShift=T.prototype.Da;
T.prototype.cb=function(){return!!(this.hi&2147483648)};T.prototype.msb=T.prototype.cb;T.prototype.Ob=function(){return!!(this.lo&1)};T.prototype.lsb=T.prototype.Ob;T.prototype.Ua=function(){return 0==this.lo&&0==this.hi};T.prototype.zero=T.prototype.Ua;T.prototype.add=function(a){return new T((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};T.prototype.add=T.prototype.add;
T.prototype.sub=function(a){return new T((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};T.prototype.sub=T.prototype.sub;function rb(a,b){var c=a&65535;a>>>=16;var d=b&65535,f=b>>>16;b=c*d+65536*(c*f&65535)+65536*(a*d&65535);for(c=a*f+(c*f>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new T(b>>>0,c>>>0)}T.mul32x32=rb;T.prototype.eb=function(a){var b=rb(this.lo,a);a=rb(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};T.prototype.mul=T.prototype.eb;
T.prototype.Xa=function(a){if(0==a)return[];var b=new T(0,0),c=new T(this.lo,this.hi);a=new T(a,0);for(var d=new T(1,0);!a.cb();)a=a.Da(),d=d.Da();for(;!d.Ua();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.La(),d=d.La();return[b,c]};T.prototype.div=T.prototype.Xa;T.prototype.toString=function(){for(var a="",b=this;!b.Ua();){b=b.Xa(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};T.prototype.toString=T.prototype.toString;
function U(a){for(var b=new T(0,0),c=new T(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;c.lo=parseInt(a[d],10);b=b.eb(10).add(c)}return b}T.fromString=U;T.prototype.clone=function(){return new T(this.lo,this.hi)};T.prototype.clone=T.prototype.clone;function V(a,b){this.lo=a;this.hi=b}g("jspb.arith.Int64",V,void 0);V.prototype.add=function(a){return new V((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};V.prototype.add=V.prototype.add;
V.prototype.sub=function(a){return new V((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};V.prototype.sub=V.prototype.sub;V.prototype.clone=function(){return new V(this.lo,this.hi)};V.prototype.clone=V.prototype.clone;V.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new T(this.lo,this.hi);a&&(b=(new T(0,0)).sub(b));return(a?"-":"")+b.toString()};V.prototype.toString=V.prototype.toString;
function sb(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=U(a);if(null===a)return null;b&&(a=(new T(0,0)).sub(a));return new V(a.lo,a.hi)}V.fromString=sb;function W(){this.c=[];this.b=0;this.a=new S;this.h=[]}g("jspb.BinaryWriter",W,void 0);function tb(a,b){var c=a.a.end();a.c.push(c);a.c.push(b);a.b+=c.length+b.length}function X(a,b){Y(a,b,2);b=a.a.end();a.c.push(b);a.b+=b.length;b.push(a.b);return b}function Z(a,b){var c=b.pop();c=a.b+a.a.length()-c;for(n(0<=c);127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++}W.prototype.pb=function(a,b,c){tb(this,a.subarray(b,c))};W.prototype.writeSerializedMessage=W.prototype.pb;
W.prototype.Pb=function(a,b,c){null!=a&&null!=b&&null!=c&&this.pb(a,b,c)};W.prototype.maybeWriteSerializedMessage=W.prototype.Pb;W.prototype.reset=function(){this.c=[];this.a.end();this.b=0;this.h=[]};W.prototype.reset=W.prototype.reset;W.prototype.ab=function(){n(0==this.h.length);for(var a=new Uint8Array(this.b+this.a.length()),b=this.c,c=b.length,d=0,f=0;f<c;f++){var h=b[f];a.set(h,d);d+=h.length}b=this.a.end();a.set(b,d);d+=b.length;n(d==a.length);this.c=[a];return a};
W.prototype.getResultBuffer=W.prototype.ab;W.prototype.Kb=function(a){return Ba(this.ab(),a)};W.prototype.getResultBase64String=W.prototype.Kb;W.prototype.Va=function(a){this.h.push(X(this,a))};W.prototype.beginSubMessage=W.prototype.Va;W.prototype.Ya=function(){n(0<=this.h.length);Z(this,this.h.pop())};W.prototype.endSubMessage=W.prototype.Ya;function Y(a,b,c){n(1<=b&&b==Math.floor(b));a.a.j(8*b+c)}
W.prototype.Nc=function(a,b,c){switch(a){case 1:this.J(b,c);break;case 2:this.L(b,c);break;case 3:this.T(b,c);break;case 4:this.V(b,c);break;case 5:this.S(b,c);break;case 6:this.Qa(b,c);break;case 7:this.Pa(b,c);break;case 8:this.I(b,c);break;case 9:this.U(b,c);break;case 10:p("Group field type not supported in writeAny()");break;case 11:p("Message field type not supported in writeAny()");break;case 12:this.ja(b,c);break;case 13:this.s(b,c);break;case 14:this.R(b,c);break;case 15:this.Ra(b,c);break;
case 16:this.Sa(b,c);break;case 17:this.rb(b,c);break;case 18:this.sb(b,c);break;case 30:this.K(b,c);break;case 31:this.N(b,c);break;default:p("Invalid field type in writeAny()")}};W.prototype.writeAny=W.prototype.Nc;function ub(a,b,c){null!=c&&(Y(a,b,0),a.a.j(c))}function vb(a,b,c){null!=c&&(Y(a,b,0),a.a.M(c))}W.prototype.S=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32=W.prototype.S;
W.prototype.ob=function(a,b){null!=b&&(b=parseInt(b,10),n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32String=W.prototype.ob;W.prototype.T=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.ua(b)))};W.prototype.writeInt64=W.prototype.T;W.prototype.ka=function(a,b){null!=b&&(b=sb(b),Y(this,a,0),this.a.l(b.lo,b.hi))};W.prototype.writeInt64String=W.prototype.ka;
W.prototype.s=function(a,b){null!=b&&(n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32=W.prototype.s;W.prototype.ub=function(a,b){null!=b&&(b=parseInt(b,10),n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32String=W.prototype.ub;W.prototype.V=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),null!=b&&(Y(this,a,0),this.a.va(b)))};W.prototype.writeUint64=W.prototype.V;W.prototype.vb=function(a,b){null!=b&&(b=U(b),Y(this,a,0),this.a.l(b.lo,b.hi))};
W.prototype.writeUint64String=W.prototype.vb;W.prototype.rb=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),null!=b&&(Y(this,a,0),this.a.wa(b)))};W.prototype.writeSint32=W.prototype.rb;W.prototype.sb=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.xa(b)))};W.prototype.writeSint64=W.prototype.sb;W.prototype.$d=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.W(b))};W.prototype.writeSintHash64=W.prototype.$d;
W.prototype.Zd=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.Ta(b))};W.prototype.writeSint64String=W.prototype.Zd;W.prototype.Pa=function(a,b){null!=b&&(n(0<=b&&4294967296>b),Y(this,a,5),this.a.s(b))};W.prototype.writeFixed32=W.prototype.Pa;W.prototype.Qa=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),Y(this,a,1),this.a.V(b))};W.prototype.writeFixed64=W.prototype.Qa;W.prototype.nb=function(a,b){null!=b&&(b=U(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeFixed64String=W.prototype.nb;
W.prototype.Ra=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,5),this.a.S(b))};W.prototype.writeSfixed32=W.prototype.Ra;W.prototype.Sa=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),Y(this,a,1),this.a.T(b))};W.prototype.writeSfixed64=W.prototype.Sa;W.prototype.qb=function(a,b){null!=b&&(b=sb(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeSfixed64String=W.prototype.qb;W.prototype.L=function(a,b){null!=b&&(Y(this,a,5),this.a.L(b))};
W.prototype.writeFloat=W.prototype.L;W.prototype.J=function(a,b){null!=b&&(Y(this,a,1),this.a.J(b))};W.prototype.writeDouble=W.prototype.J;W.prototype.I=function(a,b){null!=b&&(n("boolean"===typeof b||"number"===typeof b),Y(this,a,0),this.a.I(b))};W.prototype.writeBool=W.prototype.I;W.prototype.R=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,0),this.a.M(b))};W.prototype.writeEnum=W.prototype.R;W.prototype.U=function(a,b){null!=b&&(a=X(this,a),this.a.U(b),Z(this,a))};
W.prototype.writeString=W.prototype.U;W.prototype.ja=function(a,b){null!=b&&(b=Ua(b),Y(this,a,2),this.a.j(b.length),tb(this,b))};W.prototype.writeBytes=W.prototype.ja;W.prototype.Rc=function(a,b,c){null!=b&&(a=X(this,a),c(b,this),Z(this,a))};W.prototype.writeMessage=W.prototype.Rc;W.prototype.Sc=function(a,b,c){null!=b&&(Y(this,1,3),Y(this,2,0),this.a.M(a),a=X(this,3),c(b,this),Z(this,a),Y(this,1,4))};W.prototype.writeMessageSet=W.prototype.Sc;
W.prototype.Oc=function(a,b,c){null!=b&&(Y(this,a,3),c(b,this),Y(this,a,4))};W.prototype.writeGroup=W.prototype.Oc;W.prototype.K=function(a,b){null!=b&&(n(8==b.length),Y(this,a,1),this.a.K(b))};W.prototype.writeFixedHash64=W.prototype.K;W.prototype.N=function(a,b){null!=b&&(n(8==b.length),Y(this,a,0),this.a.N(b))};W.prototype.writeVarintHash64=W.prototype.N;W.prototype.A=function(a,b,c){Y(this,a,1);this.a.A(b,c)};W.prototype.writeSplitFixed64=W.prototype.A;
W.prototype.l=function(a,b,c){Y(this,a,0);this.a.l(b,c)};W.prototype.writeSplitVarint64=W.prototype.l;W.prototype.tb=function(a,b,c){Y(this,a,0);var d=this.a;Ja(b,c,function(f,h){d.l(f>>>0,h>>>0)})};W.prototype.writeSplitZigzagVarint64=W.prototype.tb;W.prototype.Ed=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)vb(this,a,b[c])};W.prototype.writeRepeatedInt32=W.prototype.Ed;W.prototype.Fd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ob(a,b[c])};
W.prototype.writeRepeatedInt32String=W.prototype.Fd;W.prototype.Gd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.ua(d))}};W.prototype.writeRepeatedInt64=W.prototype.Gd;W.prototype.Qd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.A(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitFixed64=W.prototype.Qd;W.prototype.Rd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.l(a,c(b[f]),d(b[f]))};
W.prototype.writeRepeatedSplitVarint64=W.prototype.Rd;W.prototype.Sd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.tb(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitZigzagVarint64=W.prototype.Sd;W.prototype.Hd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ka(a,b[c])};W.prototype.writeRepeatedInt64String=W.prototype.Hd;W.prototype.Ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)ub(this,a,b[c])};W.prototype.writeRepeatedUint32=W.prototype.Ud;
W.prototype.Vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ub(a,b[c])};W.prototype.writeRepeatedUint32String=W.prototype.Vd;W.prototype.Wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.va(d))}};W.prototype.writeRepeatedUint64=W.prototype.Wd;W.prototype.Xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.vb(a,b[c])};W.prototype.writeRepeatedUint64String=W.prototype.Xd;
W.prototype.Md=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.wa(d))}};W.prototype.writeRepeatedSint32=W.prototype.Md;W.prototype.Nd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.xa(d))}};W.prototype.writeRepeatedSint64=W.prototype.Nd;W.prototype.Od=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.Ta(d))}};W.prototype.writeRepeatedSint64String=W.prototype.Od;
W.prototype.Pd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.W(d))}};W.prototype.writeRepeatedSintHash64=W.prototype.Pd;W.prototype.yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Pa(a,b[c])};W.prototype.writeRepeatedFixed32=W.prototype.yd;W.prototype.zd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Qa(a,b[c])};W.prototype.writeRepeatedFixed64=W.prototype.zd;
W.prototype.Ad=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.nb(a,b[c])};W.prototype.writeRepeatedFixed64String=W.prototype.Ad;W.prototype.Jd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Ra(a,b[c])};W.prototype.writeRepeatedSfixed32=W.prototype.Jd;W.prototype.Kd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Sa(a,b[c])};W.prototype.writeRepeatedSfixed64=W.prototype.Kd;W.prototype.Ld=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.qb(a,b[c])};
W.prototype.writeRepeatedSfixed64String=W.prototype.Ld;W.prototype.Cd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.L(a,b[c])};W.prototype.writeRepeatedFloat=W.prototype.Cd;W.prototype.wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.J(a,b[c])};W.prototype.writeRepeatedDouble=W.prototype.wd;W.prototype.ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.I(a,b[c])};W.prototype.writeRepeatedBool=W.prototype.ud;
W.prototype.xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.R(a,b[c])};W.prototype.writeRepeatedEnum=W.prototype.xd;W.prototype.Td=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.U(a,b[c])};W.prototype.writeRepeatedString=W.prototype.Td;W.prototype.vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ja(a,b[c])};W.prototype.writeRepeatedBytes=W.prototype.vd;W.prototype.Id=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var f=X(this,a);c(b[d],this);Z(this,f)}};
W.prototype.writeRepeatedMessage=W.prototype.Id;W.prototype.Dd=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)Y(this,a,3),c(b[d],this),Y(this,a,4)};W.prototype.writeRepeatedGroup=W.prototype.Dd;W.prototype.Bd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.K(a,b[c])};W.prototype.writeRepeatedFixedHash64=W.prototype.Bd;W.prototype.Yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.N(a,b[c])};W.prototype.writeRepeatedVarintHash64=W.prototype.Yd;
W.prototype.ad=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(b[c]);Z(this,a)}};W.prototype.writePackedInt32=W.prototype.ad;W.prototype.bd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedInt32String=W.prototype.bd;W.prototype.cd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.ua(b[c]);Z(this,a)}};W.prototype.writePackedInt64=W.prototype.cd;
W.prototype.md=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.A(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitFixed64=W.prototype.md;W.prototype.nd=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.l(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitVarint64=W.prototype.nd;W.prototype.od=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=this.a,h=0;h<b.length;h++)Ja(c(b[h]),d(b[h]),function(m,t){f.l(m>>>0,t>>>0)});Z(this,a)}};
W.prototype.writePackedSplitZigzagVarint64=W.prototype.od;W.prototype.dd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=sb(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};W.prototype.writePackedInt64String=W.prototype.dd;W.prototype.pd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(b[c]);Z(this,a)}};W.prototype.writePackedUint32=W.prototype.pd;
W.prototype.qd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedUint32String=W.prototype.qd;W.prototype.rd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.va(b[c]);Z(this,a)}};W.prototype.writePackedUint64=W.prototype.rd;W.prototype.sd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=U(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};
W.prototype.writePackedUint64String=W.prototype.sd;W.prototype.hd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.wa(b[c]);Z(this,a)}};W.prototype.writePackedSint32=W.prototype.hd;W.prototype.jd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.xa(b[c]);Z(this,a)}};W.prototype.writePackedSint64=W.prototype.jd;W.prototype.kd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(H(b[c]));Z(this,a)}};
W.prototype.writePackedSint64String=W.prototype.kd;W.prototype.ld=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(b[c]);Z(this,a)}};W.prototype.writePackedSintHash64=W.prototype.ld;W.prototype.Wc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.s(b[a])};W.prototype.writePackedFixed32=W.prototype.Wc;W.prototype.Xc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.V(b[a])};
W.prototype.writePackedFixed64=W.prototype.Xc;W.prototype.Yc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++){var c=U(b[a]);this.a.A(c.lo,c.hi)}};W.prototype.writePackedFixed64String=W.prototype.Yc;W.prototype.ed=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.S(b[a])};W.prototype.writePackedSfixed32=W.prototype.ed;
W.prototype.fd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.T(b[a])};W.prototype.writePackedSfixed64=W.prototype.fd;W.prototype.gd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.ka(b[a])};W.prototype.writePackedSfixed64String=W.prototype.gd;W.prototype.$c=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.L(b[a])};W.prototype.writePackedFloat=W.prototype.$c;
W.prototype.Uc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.J(b[a])};W.prototype.writePackedDouble=W.prototype.Uc;W.prototype.Tc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(b.length),a=0;a<b.length;a++)this.a.I(b[a])};W.prototype.writePackedBool=W.prototype.Tc;W.prototype.Vc=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.R(b[c]);Z(this,a)}};W.prototype.writePackedEnum=W.prototype.Vc;
W.prototype.Zc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.K(b[a])};W.prototype.writePackedFixedHash64=W.prototype.Zc;W.prototype.td=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.N(b[c]);Z(this,a)}};W.prototype.writePackedVarintHash64=W.prototype.td; true&&(exports.debug=R,exports.Map=r,exports.Message=N,exports.BinaryReader=J,exports.BinaryWriter=W,exports.ExtensionFieldInfo=Ya,exports.ExtensionFieldBinaryInfo=Za,exports.exportSymbol=ma,exports.inherits=na,exports.object={extend:pa},exports.typeOf=k);


/***/ }),

/***/ "./node_modules/grpc-web/index.js":
/*!****************************************!*\
  !*** ./node_modules/grpc-web/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);
function t(){t=function(){};r.Symbol||(r.Symbol=da)}function ea(a,b){this.a=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}ea.prototype.toString=function(){return this.a};var da=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ea("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function u(){t();var a=r.Symbol.iterator;a||(a=r.Symbol.iterator=r.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}});u=function(){}}function fa(a){u();a={next:a};a[r.Symbol.iterator]=function(){return this};return a}function ha(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ja;if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={V:!0},ma={};try{ma.__proto__=la;ka=ma.V;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function oa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(a,b){u();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function v(a,b){if(b){var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Array.prototype.keys",function(a){return a?a:function(){return pa(this,function(b){return b})}});v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,g=0;g<f;g++){var e=d[g];if(b.call(c,e,g,d)){b=e;break a}}b=void 0}return b}});v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
v("Promise",function(a){function b(e){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.b=function(e){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(e)};var f=r.setTimeout;c.prototype.c=function(e){f(e,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(e){this.c(function(){throw e;})};b.prototype.f=function(){function e(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:e(this.s),reject:e(this.g)}};b.prototype.s=function(e){if(e===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.v(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.m(e):this.h(e)}};
b.prototype.m=function(e){var h=void 0;try{h=e.then}catch(k){this.g(k);return}"function"==typeof h?this.w(h,e):this.h(e)};b.prototype.g=function(e){this.i(2,e)};b.prototype.h=function(e){this.i(1,e)};b.prototype.i=function(e,h){if(0!=this.b)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.b);this.b=e;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var e=0;e<this.a.length;++e)g.b(this.a[e]);this.a=null}};var g=new c;b.prototype.v=function(e){var h=this.f();
e.F(h.resolve,h.reject)};b.prototype.w=function(e,h){var k=this.f();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(q,w){return"function"==typeof q?function(A){try{l(q(A))}catch(L){m(L)}}:w}var l,m,p=new b(function(q,w){l=q;m=w});this.F(k(e,l),k(h,m));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.F=function(e,h){function k(){switch(l.b){case 1:e(l.c);break;case 2:h(l.c);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?g.b(k):this.a.push(k)};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=ha(e),m=l.next();!m.done;m=l.next())d(m.value).F(h,k)})};b.all=function(e){var h=ha(e),k=h.next();return k.done?d([]):new b(function(l,m){function p(A){return function(L){q[A]=L;w--;0==w&&l(q)}}var q=[],w=0;do q.push(void 0),w++,d(k.value).F(p(q.length-1),m),k=h.next();while(!k.done)})};return b});var qa=qa||{},x=this||self;
function y(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ra(){}function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=va:z=wa;return z.apply(null,arguments)}
function B(a,b){function c(){}c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a};function xa(a){this.a=a||{}}xa.prototype.get=function(a){return this.a[a]};xa.prototype.G=function(){return Object.keys(this.a)};function C(a,b,c,d){this.f=a;this.c=b;this.b=c;this.a=d}C.prototype.getRequestMessage=function(){return this.f};C.prototype.getMethodDescriptor=function(){return this.c};C.prototype.getMetadata=function(){return this.b};C.prototype.getCallOptions=function(){return this.a};function D(a,b,c,d){c=void 0===c?{}:c;this.c=a;this.a=c;this.b=b;this.f=void 0===d?null:d}D.prototype.getResponseMessage=function(){return this.c};D.prototype.getMetadata=function(){return this.a};D.prototype.getMethodDescriptor=function(){return this.b};D.prototype.getStatus=function(){return this.f};function ya(a,b,c,d,f,g){this.name=a;this.a=f;this.b=g}function za(a,b,c){c=void 0===c?{}:c;var d=void 0===d?new xa:d;return new C(b,a,c,d)}ya.prototype.getName=function(){return this.name};ya.prototype.getName=ya.prototype.getName;function Aa(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function Ba(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}};function E(a,b,c){c=void 0===c?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c}oa(E,Error);E.prototype.toString=function(){var a="RpcError("+(Ba(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};E.prototype.name="RpcError";function Ca(a){this.a=a}Ca.prototype.on=function(a,b){return"data"==a||"error"==a?this:this.a.on(a,b)};Ca.prototype.removeListener=function(a,b){return this.a.removeListener(a,b)};Ca.prototype.cancel=function(){this.a.cancel()};function Da(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}B(F,Error);F.prototype.name="CustomError";function Ea(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");F.call(this,c+a[d])}B(Ea,F);Ea.prototype.name="AssertionError";function Fa(a,b){throw new Ea("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Ga(){this.l=null;this.i=[];this.m=0;this.b=Ha;this.f=this.a=this.h=0;this.c=null;this.g=0}
function Ia(a,b){function c(l){l==Ja?e.h=l:l==G?e.h=l:Ka(e,h,k,"invalid frame byte");e.b=La;e.a=0;e.f=0}function d(l){e.f++;e.a=(e.a<<8)+l;4==e.f&&(e.b=Ma,e.g=0,"undefined"!==typeof Uint8Array?e.c=new Uint8Array(e.a):e.c=Array(e.a),0==e.a&&g())}function f(l){e.c[e.g++]=l;e.g==e.a&&g()}function g(){var l={};l[e.h]=e.c;e.i.push(l);e.b=Ha}var e=a,h,k=0;for(b instanceof Uint8Array||b instanceof Array?h=b:h=new Uint8Array(b);k<h.length;){switch(e.b){case Na:Ka(e,h,k,"stream already broken");break;case Ha:c(h[k]);
break;case La:d(h[k]);break;case Ma:f(h[k]);break;default:throw Error("unexpected parser state: "+e.b);}e.m++;k++}a=e.i;e.i=[];return 0<a.length?a:null}var Ha=0,La=1,Ma=2,Na=3,Ja=0,G=128;function Ka(a,b,c,d){a.b=Na;a.l="The stream is broken @"+a.m+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.l);};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function H(a,b){return-1!=a.indexOf(b)}function Qa(a,b){return a<b?-1:a>b?1:0};var I;a:{var Ra=x.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){I=Sa;break a}}I=""};function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ua(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var g=0;g<Va.length;g++)c=Va[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Xa(a){var b=1;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c};function Ya(a){Ya[" "](a);return a}Ya[" "]=ra;function Za(a){var b=$a;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)};var ab=H(I,"Opera"),bb=H(I,"Trident")||H(I,"MSIE"),cb=H(I,"Edge"),db=H(I,"Gecko")&&!(H(I.toLowerCase(),"webkit")&&!H(I,"Edge"))&&!(H(I,"Trident")||H(I,"MSIE"))&&!H(I,"Edge"),eb=H(I.toLowerCase(),"webkit")&&!H(I,"Edge"),fb;
a:{var gb="",hb=function(){var a=I;if(db)return/rv:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hb&&(gb=hb?hb[1]:"");if(bb){var ib,jb=x.document;ib=jb?jb.documentMode:void 0;if(null!=ib&&ib>parseFloat(gb)){fb=String(ib);break a}}fb=gb}var $a={};
function kb(){return Za(function(){for(var a=0,b=Pa(String(fb)).split("."),c=Pa("9").split("."),d=Math.max(b.length,c.length),f=0;0==a&&f<d;f++){var g=b[f]||"",e=c[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];if(0==g[0].length&&0==e[0].length)break;a=Qa(0==g[1].length?0:parseInt(g[1],10),0==e[1].length?0:parseInt(e[1],10))||Qa(0==g[2].length,0==e[2].length)||Qa(g[2],e[2]);g=g[3];e=e[3]}while(0==a)}return 0<=a})};function lb(){0!=mb&&(Object.prototype.hasOwnProperty.call(this,ta)&&this[ta]||(this[ta]=++ua));this.K=this.K}var mb=0;lb.prototype.K=!1;var nb=Object.freeze||function(a){return a};function J(a,b){this.type=a;this.a=this.target=b;this.defaultPrevented=!1}J.prototype.b=function(){this.defaultPrevented=!0};var ob=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{x.addEventListener("test",ra,b),x.removeEventListener("test",ra,b)}catch(c){}return a}();function K(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(db){a:{try{Ya(b.nodeName);var f=!0;break a}catch(g){}f=!1}f||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:pb[a.pointerType]||"";this.c=a;a.defaultPrevented&&K.O.b.call(this)}}B(K,J);var pb=nb({2:"touch",3:"pen",4:"mouse"});K.prototype.b=function(){K.O.b.call(this);var a=this.c;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1E6*Math.random()|0);var qb=0;function rb(a,b,c,d,f){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.H=f;this.key=++qb;this.A=this.D=!1}function sb(a){a.A=!0;a.listener=null;a.proxy=null;a.src=null;a.H=null};function tb(a){this.src=a;this.a={};this.b=0}tb.prototype.add=function(a,b,c,d,f){var g=a.toString();a=this.a[g];a||(a=this.a[g]=[],this.b++);var e=ub(a,b,d,f);-1<e?(b=a[e],c||(b.D=!1)):(b=new rb(b,this.src,g,!!d,f),b.D=c,a.push(b));return b};tb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var f=this.a[a];b=ub(f,b,c,d);return-1<b?(sb(f[b]),Array.prototype.splice.call(f,b,1),0==f.length&&(delete this.a[a],this.b--),!0):!1};
function vb(a,b){var c=b.type;if(c in a.a){var d=a.a[c],f=Oa(d,b),g;(g=0<=f)&&Array.prototype.splice.call(d,f,1);g&&(sb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function ub(a,b,c,d){for(var f=0;f<a.length;++f){var g=a[f];if(!g.A&&g.listener==b&&g.capture==!!c&&g.H==d)return f}return-1};var wb="closure_lm_"+(1E6*Math.random()|0),xb={},yb=0;function zb(a,b,c,d,f){if(d&&d.once)Ab(a,b,c,d,f);else if(Array.isArray(b))for(var g=0;g<b.length;g++)zb(a,b[g],c,d,f);else c=Bb(c),a&&a[M]?a.f.add(String(b),c,!1,sa(d)?!!d.capture:!!d,f):Cb(a,b,c,!1,d,f)}
function Cb(a,b,c,d,f,g){if(!b)throw Error("Invalid event type");var e=sa(f)?!!f.capture:!!f,h=Db(a);h||(a[wb]=h=new tb(a));c=h.add(b,c,d,e,g);if(!c.proxy){d=Eb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ob||(f=e),void 0===f&&(f=!1),a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Fb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");yb++}}
function Eb(){function a(c){return b.call(a.src,a.listener,c)}var b=Gb;return a}function Ab(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Ab(a,b[g],c,d,f);else c=Bb(c),a&&a[M]?a.f.add(String(b),c,!0,sa(d)?!!d.capture:!!d,f):Cb(a,b,c,!0,d,f)}function Hb(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Hb(a,b[g],c,d,f);else(d=sa(d)?!!d.capture:!!d,c=Bb(c),a&&a[M])?a.f.remove(String(b),c,d,f):a&&(a=Db(a))&&(b=a.a[b.toString()],a=-1,b&&(a=ub(b,c,d,f)),(c=-1<a?b[a]:null)&&Ib(c))}
function Ib(a){if("number"!==typeof a&&a&&!a.A){var b=a.src;if(b&&b[M])vb(b.f,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);yb--;(c=Db(b))?(vb(c,a),0==c.b&&(c.src=null,b[wb]=null)):sb(a)}}}function Fb(a){return a in xb?xb[a]:xb[a]="on"+a}function Gb(a,b){if(a.A)a=!0;else{b=new K(b,this);var c=a.listener,d=a.H||a.src;a.D&&Ib(a);a=c.call(d,b)}return a}
function Db(a){a=a[wb];return a instanceof tb?a:null}var Jb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Bb(a){if("function"===typeof a)return a;a[Jb]||(a[Jb]=function(b){return a.handleEvent(b)});return a[Jb]};function N(){lb.call(this);this.f=new tb(this);this.U=this}B(N,lb);N.prototype[M]=!0;N.prototype.addEventListener=function(a,b,c,d){zb(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){Hb(this,a,b,c,d)};function O(a,b){a=a.U;var c=b.type||b;if("string"===typeof b)b=new J(b,a);else if(b instanceof J)b.target=b.target||a;else{var d=b;b=new J(c,a);Wa(b,d)}a=b.a=a;Kb(a,c,!0,b);Kb(a,c,!1,b)}
function Kb(a,b,c,d){if(b=a.f.a[String(b)]){b=b.concat();for(var f=!0,g=0;g<b.length;++g){var e=b[g];if(e&&!e.A&&e.capture==c){var h=e.listener,k=e.H||e.src;e.D&&vb(a.f,e);f=!1!==h.call(k,d)&&f}}}};var Lb=x;function Mb(a,b,c){if("function"===typeof a)c&&(a=z(a,c));else if(a&&"function"==typeof a.handleEvent)a=z(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:Lb.setTimeout(a,b||0)};function Nb(a,b){this.name=a;this.value=b}Nb.prototype.toString=function(){return this.name};var Ob=new Nb("OFF",Infinity),Pb=new Nb("SEVERE",1E3),Qb=new Nb("CONFIG",700),Rb=new Nb("FINE",500);function Tb(){this.clear()}var Ub;Tb.prototype.clear=function(){};function Vb(a,b,c){this.reset(a||Ob,b,c,void 0,void 0)}Vb.prototype.reset=function(){};function Wb(a,b){this.a=null;this.f=[];this.b=(void 0===b?null:b)||null;this.c=[];this.g={getName:function(){return a}}}
function Xb(a){if(a.a)return a.a;if(a.b)return Xb(a.b);Fa("Root logger has no level set.");return Ob}function Yb(a,b){for(;a;)a.f.forEach(function(c){c(b)}),a=a.b}function Zb(){this.entries={};var a=new Wb("");a.a=Qb;this.entries[""]=a}var $b;function ac(a,b,c){var d=a.entries[b];if(d)return void 0!==c&&(d.a=c),d;d=ac(a,b.substr(0,b.lastIndexOf(".")));var f=new Wb(b,d);a.entries[b]=f;d.c.push(f);void 0!==c&&(f.a=c);return f}function bc(){$b||($b=new Zb);return $b}
function cc(a,b,c){var d;if(d=a)if(d=a&&b){d=b.value;var f=a?Xb(ac(bc(),a.getName())):Ob;d=d>=f.value}d&&(b=b||Ob,d=ac(bc(),a.getName()),"function"===typeof c&&(c=c()),Ub||(Ub=new Tb),a=a.getName(),a=new Vb(b,c,a),Yb(d,a))}function P(a,b){a&&cc(a,Rb,b)};function dc(){}dc.prototype.a=null;function ec(a){var b;(b=a.a)||(b={},fc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var gc;function hc(){}B(hc,dc);function ic(a){return(a=fc(a))?new ActiveXObject(a):new XMLHttpRequest}function fc(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}gc=new hc;t();u();function jc(a,b){this.b=a[x.Symbol.iterator]();this.c=b;this.f=0}jc.prototype[Symbol.iterator]=function(){return this};jc.prototype.next=function(){var a=this.b.next();return{value:a.done?void 0:this.c.call(void 0,a.value,this.f++),done:a.done}};function kc(a,b){return new jc(a,b)}t();u();t();u();var lc="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Q(){}Q.prototype.next=function(){return Q.prototype.a.call(this)};Q.prototype.a=function(){throw lc;};Q.prototype.u=function(){return this};function mc(a){if(a instanceof R||a instanceof S||a instanceof T)return a;if("function"==typeof a.next)return new R(function(){return nc(a)});t();u();if("function"==typeof a[Symbol.iterator])return t(),u(),new R(function(){return a[Symbol.iterator]()});if("function"==typeof a.u)return new R(function(){return nc(a.u())});throw Error("Not an iterator or iterable.");}
function nc(a){if(!(a instanceof Q))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.a();break}catch(d){if(d!==lc)throw d;b=!0}return{value:c,done:b}}}}t();u();function R(a){this.b=a}R.prototype.u=function(){return new S(this.b())};R.prototype[Symbol.iterator]=function(){return new T(this.b())};R.prototype.c=function(){return new T(this.b())};t();u();function S(a){this.b=a}oa(S,Q);S.prototype.a=function(){var a=this.b.next();if(a.done)throw lc;return a.value};S.prototype.next=function(){return S.prototype.a.call(this)};
S.prototype[Symbol.iterator]=function(){return new T(this.b)};S.prototype.c=function(){return new T(this.b)};function T(a){R.call(this,function(){return a});this.f=a}oa(T,R);T.prototype.next=function(){return this.f.next()};function oc(a,b){this.o={};this.j=[];this.B=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}n=oc.prototype;n.G=function(){pc(this);return this.j.concat()};n.has=function(a){return U(this.o,a)};n.clear=function(){this.o={};this.B=this.size=this.j.length=0};n.remove=function(a){return this.delete(a)};
n.delete=function(a){return U(this.o,a)?(delete this.o[a],--this.size,this.B++,this.j.length>2*this.size&&pc(this),!0):!1};function pc(a){if(a.size!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];U(a.o,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.size!=a.j.length){var f={};for(c=b=0;b<a.j.length;)d=a.j[b],U(f,d)||(a.j[c++]=d,f[d]=1),b++;a.j.length=c}}n.get=function(a,b){return U(this.o,a)?this.o[a]:b};n.set=function(a,b){U(this.o,a)||(this.size+=1,this.j.push(a),this.B++);this.o[a]=b};
n.addAll=function(a){if(a instanceof oc)for(var b=a.G(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};n.forEach=function(a,b){for(var c=this.G(),d=0;d<c.length;d++){var f=c[d],g=this.get(f);a.call(b,g,f,this)}};n.clone=function(){return new oc(this)};n.keys=function(){return mc(this.u(!0)).c()};n.values=function(){return mc(this.u(!1)).c()};n.entries=function(){var a=this;return kc(this.keys(),function(b){return[b,a.get(b)]})};
n.u=function(a){pc(this);var b=0,c=this.B,d=this,f=new Q;f.a=function(){if(c!=d.B)throw Error("The map has changed since the iterator was created");if(b>=d.j.length)throw lc;var g=d.j[b++];return a?g:d.o[g]};f.next=f.a.bind(f);return f};function U(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var qc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rc(a){N.call(this);this.headers=new oc;this.C=a||null;this.c=!1;this.J=this.a=null;this.P=this.v="";this.g=0;this.l="";this.i=this.N=this.s=this.L=!1;this.h=0;this.w=null;this.m=sc;this.I=this.M=!1}B(rc,N);var sc="";rc.prototype.b=ac(bc(),"goog.net.XhrIo",void 0).g;var tc=/^https?$/i,uc=["POST","PUT"];
function vc(a,b,c){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.v+"; newUri="+b);a.v=b;a.l="";a.g=0;a.P="POST";a.L=!1;a.c=!0;a.a=a.C?ic(a.C):ic(gc);a.J=a.C?ec(a.C):ec(gc);a.a.onreadystatechange=z(a.R,a);try{P(a.b,V(a,"Opening Xhr")),a.N=!0,a.a.open("POST",String(b),!0),a.N=!1}catch(g){P(a.b,V(a,"Error opening Xhr: "+g.message));wc(a,g);return}b=c||"";c=a.headers.clone();var d=c.G().find(function(g){return"content-type"==g.toLowerCase()}),f=x.FormData&&b instanceof
x.FormData;!(0<=Oa(uc,"POST"))||d||f||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");c.forEach(function(g,e){this.a.setRequestHeader(e,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.M&&(a.a.withCredentials=a.M);try{xc(a),0<a.h&&(a.I=yc(a.a),P(a.b,V(a,"Will abort after "+a.h+"ms if incomplete, xhr2 "+a.I)),a.I?(a.a.timeout=a.h,a.a.ontimeout=z(a.T,a)):a.w=Mb(a.T,a.h,a)),P(a.b,V(a,"Sending request")),a.s=!0,a.a.send(b),a.s=!1}catch(g){P(a.b,
V(a,"Send error: "+g.message)),wc(a,g)}}function yc(a){return bb&&kb()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}n=rc.prototype;n.T=function(){"undefined"!=typeof qa&&this.a&&(this.l="Timed out after "+this.h+"ms, aborting",this.g=8,P(this.b,V(this,this.l)),O(this,"timeout"),this.abort(8))};function wc(a,b){a.c=!1;a.a&&(a.i=!0,a.a.abort(),a.i=!1);a.l=b;a.g=5;zc(a);Ac(a)}function zc(a){a.L||(a.L=!0,O(a,"complete"),O(a,"error"))}
n.abort=function(a){this.a&&this.c&&(P(this.b,V(this,"Aborting")),this.c=!1,this.i=!0,this.a.abort(),this.i=!1,this.g=a||7,O(this,"complete"),O(this,"abort"),Ac(this))};n.R=function(){this.K||(this.N||this.s||this.i?Bc(this):this.W())};n.W=function(){Bc(this)};
function Bc(a){if(a.c&&"undefined"!=typeof qa)if(a.J[1]&&4==W(a)&&2==a.getStatus())P(a.b,V(a,"Local request error detected and ignored"));else if(a.s&&4==W(a))Mb(a.R,0,a);else if(O(a,"readystatechange"),4==W(a)){P(a.b,V(a,"Request complete"));a.c=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var f;if(f=0===b){var g=String(a.v).match(qc)[1]||null;if(!g&&x.self&&x.self.location){var e=x.self.location.protocol;
g=e.substr(0,e.length-1)}f=!tc.test(g?g.toLowerCase():"")}d=f}if(d)O(a,"complete"),O(a,"success");else{a.g=6;try{var h=2<W(a)?a.a.statusText:""}catch(k){P(a.b,"Can not get status: "+k.message),h=""}a.l=h+" ["+a.getStatus()+"]";zc(a)}}finally{Ac(a)}}}function Ac(a){if(a.a){xc(a);var b=a.a,c=a.J[0]?ra:null;a.a=null;a.J=null;O(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.b)&&cc(a,Pb,"Problem encountered resetting onreadystatechange: "+d.message)}}}
function xc(a){a.a&&a.I&&(a.a.ontimeout=null);a.w&&(Lb.clearTimeout(a.w),a.w=null)}function W(a){return a.a?a.a.readyState:0}n.getStatus=function(){try{return 2<W(this)?this.a.status:-1}catch(a){return-1}};
function Cc(a){try{if(!a.a)return null;if("response"in a.a)return a.a.response;switch(a.m){case sc:case "text":return a.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.a)return a.a.mozResponseArrayBuffer}var b=a.b;b&&cc(b,Pb,"Response type "+a.m+" is not supported on this browser");return null}catch(c){return P(a.b,"Can not get response: "+c.message),null}}
function Dc(a){var b={};a=(a.a&&4==W(a)?a.a.getAllResponseHeaders()||"":"").split("\r\n");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d=Xa(a[c]),f=d[0];d=d[1];if("string"===typeof d){d=d.trim();var g=b[f]||[];b[f]=g;g.push(d)}}return Ua(b,function(e){return e.join(", ")})}function V(a,b){return b+" ["+a.P+" "+a.v+" "+a.getStatus()+"]"};var Ec={},Fc=null;function Gc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):H("=.",a[b-1])&&(c=H("=.",a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Hc(a,function(g){d[f++]=g});return d.subarray(0,f)}
function Hc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Fc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ic();for(var d=0;;){var f=c(-1),g=c(0),e=c(64),h=c(64);if(64===h&&-1===f)break;b(f<<2|g>>4);64!=e&&(b(g<<4&240|e>>2),64!=h&&b(e<<6&192|h))}}
function Ic(){if(!Fc){Fc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ec[c]=d;for(var f=0;f<d.length;f++){var g=d[f];void 0===Fc[g]&&(Fc[g]=f)}}}};var Jc=["content-type","grpc-status","grpc-message"];
function X(a){this.a=a.Z;this.m=null;this.b=[];this.h=[];this.g=[];this.f=[];this.c=[];this.l=!1;this.i=0;this.s=new Ga;var b=this;zb(this.a,"readystatechange",function(){var c=b.a;if(c=c.a?c.a.getResponseHeader("Content-Type"):null){c=c.toLowerCase();if(0==c.lastIndexOf("application/grpc-web-text",0)){c=b.a;try{var d=c.a?c.a.responseText:""}catch(k){P(c.b,"Can not get responseText: "+k.message),d=""}c=d||"";d=c.length-c.length%4;c=c.substr(b.i,d-b.i);if(0==c.length)return;b.i=d;c=Gc(c)}else if(0==
c.lastIndexOf("application/grpc",0))c=new Uint8Array(Cc(b.a));else{Y(b,new E(2,"Unknown Content-type received."));return}d=null;try{d=Ia(b.s,c)}catch(k){Y(b,new E(2,"Error in parsing response body"))}if(d)for(c=0;c<d.length;c++){if(Ja in d[c]){var f=d[c][Ja];if(f){var g=!1,e=void 0;try{e=b.m(f),g=!0}catch(k){Y(b,new E(13,"Error when deserializing response data; error: "+k+(", response: "+e)))}if(g)for(f=e,g=0;g<b.b.length;g++)b.b[g](f)}}if(G in d[c]&&0<d[c][G].length){f="";for(g=0;g<d[c][G].length;g++)f+=
String.fromCharCode(d[c][G][g]);f=f.trim().split("\r\n");g={};for(e=0;e<f.length;e++){var h=f[e].indexOf(":");g[f[e].substring(0,h).trim()]=f[e].substring(h+1).trim()}f=g;g=0;e="";"grpc-status"in f&&(g=Number(f["grpc-status"]),delete f["grpc-status"]);"grpc-message"in f&&(e=f["grpc-message"],delete f["grpc-message"]);Y(b,new E(g,e,f))}}}});zb(this.a,"complete",function(){var c=b.a.g,d=2,f="",g={};d=Dc(b.a);var e={};for(h in d)d.hasOwnProperty(h)&&(e[h.toLowerCase()]=d[h]);Object.keys(e).forEach(function(k){Jc.includes(k)||
(g[k]=e[k])});Kc(b,g);var h=-1;if(0!=c){switch(c){case 7:d=10;break;case 8:d=4;break;case 6:h=b.a.getStatus();d=Aa(h);break;default:d=14}10==d&&b.l||(f=Da(c),-1!=h&&(f+=", http status code: "+h),Y(b,new E(d,f)))}else c=!1,"grpc-status"in e&&(d=Number(e["grpc-status"]),"grpc-message"in e&&(f=e["grpc-message"]),0!=d&&(Y(b,new E(d,f||"",e)),c=!0)),c||Lc(b)})}
X.prototype.on=function(a,b){"data"==a?this.b.push(b):"status"==a?this.h.push(b):"metadata"==a?this.g.push(b):"end"==a?this.c.push(b):"error"==a&&this.f.push(b);return this};function Mc(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)}X.prototype.removeListener=function(a,b){"data"==a?Mc(this.b,b):"status"==a?Mc(this.h,b):"metadata"==a?Mc(this.g,b):"end"==a?Mc(this.c,b):"error"==a&&Mc(this.f,b);return this};X.prototype.cancel=function(){this.l=!0;this.a.abort()};
function Y(a,b){if(0!=b.code)for(var c=new E(b.code,decodeURIComponent(b.message||""),b.metadata),d=0;d<a.f.length;d++)a.f[d](c);b={code:b.code,details:decodeURIComponent(b.message||""),metadata:b.metadata};for(c=0;c<a.h.length;c++)a.h[c](b)}function Kc(a,b){for(var c=0;c<a.g.length;c++)a.g[c](b)}function Lc(a){for(var b=0;b<a.c.length;b++)a.c[b]()}X.prototype.cancel=X.prototype.cancel;X.prototype.removeListener=X.prototype.removeListener;X.prototype.on=X.prototype.on;function Nc(a){var b="";Ta(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n"});return b};function Z(a,b){a=void 0===a?{}:a;this.a=a.format||y("format",a)||"text";this.g=a.aa||y("suppressCorsPreflight",a)||!1;this.f=a.withCredentials||y("withCredentials",a)||!1;this.b=a.$||y("streamInterceptors",a)||[];this.h=a.ba||y("unaryInterceptors",a)||[];this.c=b||null}Z.prototype.X=function(a,b,c,d,f){var g=this,e=a.substr(0,a.length-d.name.length);a=Oc(function(h){return Pc(g,h,e)},this.b).call(this,za(d,b,c));Qc(a,f,!1);return new Ca(a)};
Z.prototype.S=function(a,b,c,d){var f=this,g=a.substr(0,a.length-d.name.length);return Oc(function(e){return new Promise(function(h,k){var l=Pc(f,e,g),m,p,q;Qc(l,function(w,A,L,Sb,Rc){w?k(w):Rc?q=A:L?p=L:Sb?m=Sb:(w=e.getMethodDescriptor(),A=m,A=void 0===A?{}:A,h(new D(q,w,A,void 0===p?null:p)))},!0)})},this.h).call(this,za(d,b,c)).then(function(e){return e.getResponseMessage()})};Z.prototype.unaryCall=function(a,b,c,d){return this.S(a,b,c,d)};
Z.prototype.Y=function(a,b,c,d){var f=this,g=a.substr(0,a.length-d.name.length);return Oc(function(e){return Pc(f,e,g)},this.b).call(this,za(d,b,c))};
function Pc(a,b,c){var d=b.getMethodDescriptor(),f=c+d.getName();c=a.c?a.c:new rc;c.M=a.f;var g=new X({Z:c});g.m=d.b;var e=b.getMetadata();for(h in e)c.headers.set(h,e[h]);"text"==a.a?(c.headers.set("Content-Type","application/grpc-web-text"),c.headers.set("Accept","application/grpc-web-text")):c.headers.set("Content-Type","application/grpc-web+proto");c.headers.set("X-User-Agent","grpc-web-javascript/0.1");c.headers.set("X-Grpc-Web","1");if(c.headers.has("deadline")){var h=Number(c.headers.get("deadline"));
h=Math.ceil(h-(new Date).getTime());c.headers.delete("deadline");Infinity===h&&(h=0);0<h&&(c.headers.set("grpc-timeout",h+"m"),c.h=Math.max(0,Math.max(1E3,Math.ceil(1.1*h))))}if(a.g){e=c.headers;h={};for(var k=ha(e.keys()),l=k.next();!l.done;l=k.next())l=l.value,h[l]=e.get(l);c.headers.clear();b:{for(m in h){var m=!1;break b}m=!0}if(!m)if(h=Nc(h),"string"===typeof f){if(m=encodeURIComponent("$httpHeaders"),h=null!=h?"="+encodeURIComponent(String(h)):"",m+=h)h=f.indexOf("#"),0>h&&(h=f.length),e=f.indexOf("?"),
0>e||e>h?(e=h,k=""):k=f.substring(e+1,h),f=[f.substr(0,e),k,f.substr(h)],h=f[1],f[1]=m?h?h+"&"+m:m:h,f=f[0]+(f[1]?"?"+f[1]:"")+f[2]}else f.a("$httpHeaders",h)}b=(0,d.a)(b.getRequestMessage());d=b.length;m=[0,0,0,0];h=new Uint8Array(5+d);for(e=3;0<=e;e--)m[e]=d%256,d>>>=8;h.set(new Uint8Array(m),1);h.set(b,5);b=h;if("text"==a.a){a=b;var p;void 0===p&&(p=0);Ic();p=Ec[p];b=Array(Math.floor(a.length/3));d=p[64]||"";for(m=h=0;h<a.length-2;h+=3){l=a[h];var q=a[h+1];k=a[h+2];e=p[l>>2];l=p[(l&3)<<4|q>>4];
q=p[(q&15)<<2|k>>6];k=p[k&63];b[m++]=e+l+q+k}e=0;k=d;switch(a.length-h){case 2:e=a[h+1],k=p[(e&15)<<2]||d;case 1:a=a[h],b[m]=p[a>>2]+p[(a&3)<<4|e>>4]+k+d}b=b.join("")}else"binary"==a.a&&(c.m="arraybuffer");vc(c,f,b);return g}
function Qc(a,b,c){var d=!1,f=null,g=!1;a.on("data",function(e){d=!0;f=e});a.on("error",function(e){0==e.code||g||(g=!0,b(e,null))});a.on("status",function(e){0==e.code||g?c&&b(null,null,e):(g=!0,b({code:e.code,message:e.details,metadata:e.metadata},null))});if(c)a.on("metadata",function(e){b(null,null,null,e)});a.on("end",function(){g||(d?c?b(null,f,null,null,!0):b(null,f):b({code:2,message:"Incomplete response"}));c&&b(null,null)})}
function Oc(a,b){var c=a;b.forEach(function(d){var f=c;c=function(g){return d.intercept(g,f)}});return c}Z.prototype.serverStreaming=Z.prototype.Y;Z.prototype.unaryCall=Z.prototype.unaryCall;Z.prototype.thenableCall=Z.prototype.S;Z.prototype.rpcCall=Z.prototype.X;module.exports.CallOptions=xa;module.exports.MethodDescriptor=ya;module.exports.GrpcWebClientBase=Z;module.exports.RpcError=E;module.exports.StatusCode={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,UNAUTHENTICATED:16,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15};module.exports.MethodType={UNARY:"unary",SERVER_STREAMING:"server_streaming",BIDI_STREAMING:"bidi_streaming"};
Lb="undefined"!==typeof globalThis&&globalThis||self;


/***/ }),

/***/ "../cell_automata_project/proto/generated/Sim_serverServiceClientPb.ts":
/*!*****************************************************************************!*\
  !*** ../cell_automata_project/proto/generated/Sim_serverServiceClientPb.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview gRPC-Web generated client stub for sim_server
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateServiceClient = void 0;
// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.3
// source: sim_server.proto
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(__webpack_require__(/*! grpc-web */ "./node_modules/grpc-web/index.js"));
var sim_server_pb = __importStar(__webpack_require__(/*! ./sim_server_pb */ "../cell_automata_project/proto/generated/sim_server_pb.js")); // proto import: "sim_server.proto"
var StateServiceClient = /** @class */ (function () {
    function StateServiceClient(hostname, credentials, options) {
        this.methodDescriptorInitWorldState = new grpcWeb.MethodDescriptor('/sim_server.StateService/InitWorldState', grpcWeb.MethodType.UNARY, sim_server_pb.InitializeRequest, sim_server_pb.WorldStateResponse, function (request) {
            return request.serializeBinary();
        }, sim_server_pb.WorldStateResponse.deserializeBinary);
        this.methodDescriptorStepWorldStateForward = new grpcWeb.MethodDescriptor('/sim_server.StateService/StepWorldStateForward', grpcWeb.MethodType.UNARY, sim_server_pb.StepRequest, sim_server_pb.WorldStateResponse, function (request) {
            return request.serializeBinary();
        }, sim_server_pb.WorldStateResponse.deserializeBinary);
        this.methodDescriptorStartSimulation = new grpcWeb.MethodDescriptor('/sim_server.StateService/StartSimulation', grpcWeb.MethodType.UNARY, sim_server_pb.StartSimulationRequest, sim_server_pb.SimulationResultResponse, function (request) {
            return request.serializeBinary();
        }, sim_server_pb.SimulationResultResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname.replace(/\/+$/, '');
        this.credentials_ = credentials;
        this.options_ = options;
    }
    StateServiceClient.prototype.initWorldState = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/sim_server.StateService/InitWorldState', request, metadata || {}, this.methodDescriptorInitWorldState, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/sim_server.StateService/InitWorldState', request, metadata || {}, this.methodDescriptorInitWorldState);
    };
    StateServiceClient.prototype.stepWorldStateForward = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/sim_server.StateService/StepWorldStateForward', request, metadata || {}, this.methodDescriptorStepWorldStateForward, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/sim_server.StateService/StepWorldStateForward', request, metadata || {}, this.methodDescriptorStepWorldStateForward);
    };
    StateServiceClient.prototype.startSimulation = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/sim_server.StateService/StartSimulation', request, metadata || {}, this.methodDescriptorStartSimulation, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/sim_server.StateService/StartSimulation', request, metadata || {}, this.methodDescriptorStartSimulation);
    };
    return StateServiceClient;
}());
exports.StateServiceClient = StateServiceClient;


/***/ }),

/***/ "../cell_automata_project/proto/generated/sim_server_pb.js":
/*!*****************************************************************!*\
  !*** ../cell_automata_project/proto/generated/sim_server_pb.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// source: sim_server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.sim_server.GridDimensions', null, global);
goog.exportSymbol('proto.sim_server.InitializeRequest', null, global);
goog.exportSymbol('proto.sim_server.Metadata', null, global);
goog.exportSymbol('proto.sim_server.SimulationResultResponse', null, global);
goog.exportSymbol('proto.sim_server.StartSimulationRequest', null, global);
goog.exportSymbol('proto.sim_server.StepRequest', null, global);
goog.exportSymbol('proto.sim_server.Vector2D', null, global);
goog.exportSymbol('proto.sim_server.Vector3D', null, global);
goog.exportSymbol('proto.sim_server.WorldStateResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.Metadata.displayName = 'proto.sim_server.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.Vector3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sim_server.Vector3D.repeatedFields_, null);
};
goog.inherits(proto.sim_server.Vector3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.Vector3D.displayName = 'proto.sim_server.Vector3D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.Vector2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sim_server.Vector2D.repeatedFields_, null);
};
goog.inherits(proto.sim_server.Vector2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.Vector2D.displayName = 'proto.sim_server.Vector2D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.GridDimensions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.GridDimensions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.GridDimensions.displayName = 'proto.sim_server.GridDimensions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.InitializeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.InitializeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.InitializeRequest.displayName = 'proto.sim_server.InitializeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.StepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.StepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.StepRequest.displayName = 'proto.sim_server.StepRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.WorldStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.WorldStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.WorldStateResponse.displayName = 'proto.sim_server.WorldStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.StartSimulationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.StartSimulationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.StartSimulationRequest.displayName = 'proto.sim_server.StartSimulationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sim_server.SimulationResultResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sim_server.SimulationResultResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sim_server.SimulationResultResponse.displayName = 'proto.sim_server.SimulationResultResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stateId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    step: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.Metadata}
 */
proto.sim_server.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.Metadata;
  return proto.sim_server.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.Metadata}
 */
proto.sim_server.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStateId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStep(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStateId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStep();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 state_id = 1;
 * @return {number}
 */
proto.sim_server.Metadata.prototype.getStateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.Metadata} returns this
 */
proto.sim_server.Metadata.prototype.setStateId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 step = 2;
 * @return {number}
 */
proto.sim_server.Metadata.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.Metadata} returns this
 */
proto.sim_server.Metadata.prototype.setStep = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.sim_server.Metadata.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sim_server.Metadata} returns this
 */
proto.sim_server.Metadata.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sim_server.Vector3D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.Vector3D.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.Vector3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.Vector3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Vector3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    vec2dList: jspb.Message.toObjectList(msg.getVec2dList(),
    proto.sim_server.Vector2D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.Vector3D}
 */
proto.sim_server.Vector3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.Vector3D;
  return proto.sim_server.Vector3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.Vector3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.Vector3D}
 */
proto.sim_server.Vector3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sim_server.Vector2D;
      reader.readMessage(value,proto.sim_server.Vector2D.deserializeBinaryFromReader);
      msg.addVec2d(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.Vector3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.Vector3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.Vector3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Vector3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVec2dList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sim_server.Vector2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vector2D vec2d = 1;
 * @return {!Array<!proto.sim_server.Vector2D>}
 */
proto.sim_server.Vector3D.prototype.getVec2dList = function() {
  return /** @type{!Array<!proto.sim_server.Vector2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sim_server.Vector2D, 1));
};


/**
 * @param {!Array<!proto.sim_server.Vector2D>} value
 * @return {!proto.sim_server.Vector3D} returns this
*/
proto.sim_server.Vector3D.prototype.setVec2dList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sim_server.Vector2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sim_server.Vector2D}
 */
proto.sim_server.Vector3D.prototype.addVec2d = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sim_server.Vector2D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sim_server.Vector3D} returns this
 */
proto.sim_server.Vector3D.prototype.clearVec2dList = function() {
  return this.setVec2dList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sim_server.Vector2D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.Vector2D.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.Vector2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.Vector2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Vector2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    vec1dList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.Vector2D}
 */
proto.sim_server.Vector2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.Vector2D;
  return proto.sim_server.Vector2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.Vector2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.Vector2D}
 */
proto.sim_server.Vector2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVec1d(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.Vector2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.Vector2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.Vector2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.Vector2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVec1dList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 vec1d = 1;
 * @return {!Array<number>}
 */
proto.sim_server.Vector2D.prototype.getVec1dList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.sim_server.Vector2D} returns this
 */
proto.sim_server.Vector2D.prototype.setVec1dList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.sim_server.Vector2D} returns this
 */
proto.sim_server.Vector2D.prototype.addVec1d = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sim_server.Vector2D} returns this
 */
proto.sim_server.Vector2D.prototype.clearVec1dList = function() {
  return this.setVec1dList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.GridDimensions.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.GridDimensions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.GridDimensions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.GridDimensions.toObject = function(includeInstance, msg) {
  var f, obj = {
    xMax: jspb.Message.getFieldWithDefault(msg, 1, 0),
    yMax: jspb.Message.getFieldWithDefault(msg, 2, 0),
    zMax: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.GridDimensions}
 */
proto.sim_server.GridDimensions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.GridDimensions;
  return proto.sim_server.GridDimensions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.GridDimensions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.GridDimensions}
 */
proto.sim_server.GridDimensions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXMax(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setYMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setZMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.GridDimensions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.GridDimensions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.GridDimensions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.GridDimensions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXMax();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getYMax();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getZMax();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 x_max = 1;
 * @return {number}
 */
proto.sim_server.GridDimensions.prototype.getXMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.GridDimensions} returns this
 */
proto.sim_server.GridDimensions.prototype.setXMax = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 y_max = 2;
 * @return {number}
 */
proto.sim_server.GridDimensions.prototype.getYMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.GridDimensions} returns this
 */
proto.sim_server.GridDimensions.prototype.setYMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 z_max = 3;
 * @return {number}
 */
proto.sim_server.GridDimensions.prototype.getZMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.GridDimensions} returns this
 */
proto.sim_server.GridDimensions.prototype.setZMax = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.InitializeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.InitializeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.InitializeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.InitializeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dimensions: (f = msg.getDimensions()) && proto.sim_server.GridDimensions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.InitializeRequest}
 */
proto.sim_server.InitializeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.InitializeRequest;
  return proto.sim_server.InitializeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.InitializeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.InitializeRequest}
 */
proto.sim_server.InitializeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sim_server.GridDimensions;
      reader.readMessage(value,proto.sim_server.GridDimensions.deserializeBinaryFromReader);
      msg.setDimensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.InitializeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.InitializeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.InitializeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.InitializeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDimensions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sim_server.GridDimensions.serializeBinaryToWriter
    );
  }
};


/**
 * optional GridDimensions dimensions = 1;
 * @return {?proto.sim_server.GridDimensions}
 */
proto.sim_server.InitializeRequest.prototype.getDimensions = function() {
  return /** @type{?proto.sim_server.GridDimensions} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.GridDimensions, 1));
};


/**
 * @param {?proto.sim_server.GridDimensions|undefined} value
 * @return {!proto.sim_server.InitializeRequest} returns this
*/
proto.sim_server.InitializeRequest.prototype.setDimensions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.InitializeRequest} returns this
 */
proto.sim_server.InitializeRequest.prototype.clearDimensions = function() {
  return this.setDimensions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.InitializeRequest.prototype.hasDimensions = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.StepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.StepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.StepRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.StepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldStateId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rule: msg.getRule_asB64(),
    numSteps: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.StepRequest}
 */
proto.sim_server.StepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.StepRequest;
  return proto.sim_server.StepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.StepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.StepRequest}
 */
proto.sim_server.StepRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorldStateId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRule(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.StepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.StepRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.StepRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.StepRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldStateId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRule_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 world_state_id = 1;
 * @return {number}
 */
proto.sim_server.StepRequest.prototype.getWorldStateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.StepRequest} returns this
 */
proto.sim_server.StepRequest.prototype.setWorldStateId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes rule = 2;
 * @return {string}
 */
proto.sim_server.StepRequest.prototype.getRule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes rule = 2;
 * This is a type-conversion wrapper around `getRule()`
 * @return {string}
 */
proto.sim_server.StepRequest.prototype.getRule_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRule()));
};


/**
 * optional bytes rule = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRule()`
 * @return {!Uint8Array}
 */
proto.sim_server.StepRequest.prototype.getRule_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRule()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sim_server.StepRequest} returns this
 */
proto.sim_server.StepRequest.prototype.setRule = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 num_steps = 3;
 * @return {number}
 */
proto.sim_server.StepRequest.prototype.getNumSteps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.StepRequest} returns this
 */
proto.sim_server.StepRequest.prototype.setNumSteps = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sim_server.StepRequest} returns this
 */
proto.sim_server.StepRequest.prototype.clearNumSteps = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.StepRequest.prototype.hasNumSteps = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.WorldStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.WorldStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.WorldStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.WorldStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.sim_server.Metadata.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.sim_server.Vector3D.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.WorldStateResponse}
 */
proto.sim_server.WorldStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.WorldStateResponse;
  return proto.sim_server.WorldStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.WorldStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.WorldStateResponse}
 */
proto.sim_server.WorldStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sim_server.Metadata;
      reader.readMessage(value,proto.sim_server.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.sim_server.Vector3D;
      reader.readMessage(value,proto.sim_server.Vector3D.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.WorldStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.WorldStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.WorldStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.WorldStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sim_server.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sim_server.Vector3D.serializeBinaryToWriter
    );
  }
};


/**
 * optional Metadata metadata = 1;
 * @return {?proto.sim_server.Metadata}
 */
proto.sim_server.WorldStateResponse.prototype.getMetadata = function() {
  return /** @type{?proto.sim_server.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.Metadata, 1));
};


/**
 * @param {?proto.sim_server.Metadata|undefined} value
 * @return {!proto.sim_server.WorldStateResponse} returns this
*/
proto.sim_server.WorldStateResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.WorldStateResponse} returns this
 */
proto.sim_server.WorldStateResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.WorldStateResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vector3D state = 2;
 * @return {?proto.sim_server.Vector3D}
 */
proto.sim_server.WorldStateResponse.prototype.getState = function() {
  return /** @type{?proto.sim_server.Vector3D} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.Vector3D, 2));
};


/**
 * @param {?proto.sim_server.Vector3D|undefined} value
 * @return {!proto.sim_server.WorldStateResponse} returns this
*/
proto.sim_server.WorldStateResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.WorldStateResponse} returns this
 */
proto.sim_server.WorldStateResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.WorldStateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.StartSimulationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.StartSimulationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.StartSimulationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.StartSimulationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    initReq: (f = msg.getInitReq()) && proto.sim_server.InitializeRequest.toObject(includeInstance, f),
    stepReq: (f = msg.getStepReq()) && proto.sim_server.StepRequest.toObject(includeInstance, f),
    timeout: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.StartSimulationRequest}
 */
proto.sim_server.StartSimulationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.StartSimulationRequest;
  return proto.sim_server.StartSimulationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.StartSimulationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.StartSimulationRequest}
 */
proto.sim_server.StartSimulationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sim_server.InitializeRequest;
      reader.readMessage(value,proto.sim_server.InitializeRequest.deserializeBinaryFromReader);
      msg.setInitReq(value);
      break;
    case 2:
      var value = new proto.sim_server.StepRequest;
      reader.readMessage(value,proto.sim_server.StepRequest.deserializeBinaryFromReader);
      msg.setStepReq(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.StartSimulationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.StartSimulationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.StartSimulationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.StartSimulationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sim_server.InitializeRequest.serializeBinaryToWriter
    );
  }
  f = message.getStepReq();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sim_server.StepRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional InitializeRequest init_req = 1;
 * @return {?proto.sim_server.InitializeRequest}
 */
proto.sim_server.StartSimulationRequest.prototype.getInitReq = function() {
  return /** @type{?proto.sim_server.InitializeRequest} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.InitializeRequest, 1));
};


/**
 * @param {?proto.sim_server.InitializeRequest|undefined} value
 * @return {!proto.sim_server.StartSimulationRequest} returns this
*/
proto.sim_server.StartSimulationRequest.prototype.setInitReq = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.StartSimulationRequest} returns this
 */
proto.sim_server.StartSimulationRequest.prototype.clearInitReq = function() {
  return this.setInitReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.StartSimulationRequest.prototype.hasInitReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StepRequest step_req = 2;
 * @return {?proto.sim_server.StepRequest}
 */
proto.sim_server.StartSimulationRequest.prototype.getStepReq = function() {
  return /** @type{?proto.sim_server.StepRequest} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.StepRequest, 2));
};


/**
 * @param {?proto.sim_server.StepRequest|undefined} value
 * @return {!proto.sim_server.StartSimulationRequest} returns this
*/
proto.sim_server.StartSimulationRequest.prototype.setStepReq = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.StartSimulationRequest} returns this
 */
proto.sim_server.StartSimulationRequest.prototype.clearStepReq = function() {
  return this.setStepReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.StartSimulationRequest.prototype.hasStepReq = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timeout = 3;
 * @return {number}
 */
proto.sim_server.StartSimulationRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sim_server.StartSimulationRequest} returns this
 */
proto.sim_server.StartSimulationRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.sim_server.StartSimulationRequest} returns this
 */
proto.sim_server.StartSimulationRequest.prototype.clearTimeout = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.StartSimulationRequest.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sim_server.SimulationResultResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sim_server.SimulationResultResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sim_server.SimulationResultResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.SimulationResultResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    startState: (f = msg.getStartState()) && proto.sim_server.WorldStateResponse.toObject(includeInstance, f),
    endState: (f = msg.getEndState()) && proto.sim_server.WorldStateResponse.toObject(includeInstance, f),
    stateChangedDuringSim: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sim_server.SimulationResultResponse}
 */
proto.sim_server.SimulationResultResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sim_server.SimulationResultResponse;
  return proto.sim_server.SimulationResultResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sim_server.SimulationResultResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sim_server.SimulationResultResponse}
 */
proto.sim_server.SimulationResultResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sim_server.WorldStateResponse;
      reader.readMessage(value,proto.sim_server.WorldStateResponse.deserializeBinaryFromReader);
      msg.setStartState(value);
      break;
    case 2:
      var value = new proto.sim_server.WorldStateResponse;
      reader.readMessage(value,proto.sim_server.WorldStateResponse.deserializeBinaryFromReader);
      msg.setEndState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStateChangedDuringSim(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sim_server.SimulationResultResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sim_server.SimulationResultResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sim_server.SimulationResultResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sim_server.SimulationResultResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sim_server.WorldStateResponse.serializeBinaryToWriter
    );
  }
  f = message.getEndState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sim_server.WorldStateResponse.serializeBinaryToWriter
    );
  }
  f = message.getStateChangedDuringSim();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional WorldStateResponse start_state = 1;
 * @return {?proto.sim_server.WorldStateResponse}
 */
proto.sim_server.SimulationResultResponse.prototype.getStartState = function() {
  return /** @type{?proto.sim_server.WorldStateResponse} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.WorldStateResponse, 1));
};


/**
 * @param {?proto.sim_server.WorldStateResponse|undefined} value
 * @return {!proto.sim_server.SimulationResultResponse} returns this
*/
proto.sim_server.SimulationResultResponse.prototype.setStartState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.SimulationResultResponse} returns this
 */
proto.sim_server.SimulationResultResponse.prototype.clearStartState = function() {
  return this.setStartState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.SimulationResultResponse.prototype.hasStartState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WorldStateResponse end_state = 2;
 * @return {?proto.sim_server.WorldStateResponse}
 */
proto.sim_server.SimulationResultResponse.prototype.getEndState = function() {
  return /** @type{?proto.sim_server.WorldStateResponse} */ (
    jspb.Message.getWrapperField(this, proto.sim_server.WorldStateResponse, 2));
};


/**
 * @param {?proto.sim_server.WorldStateResponse|undefined} value
 * @return {!proto.sim_server.SimulationResultResponse} returns this
*/
proto.sim_server.SimulationResultResponse.prototype.setEndState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sim_server.SimulationResultResponse} returns this
 */
proto.sim_server.SimulationResultResponse.prototype.clearEndState = function() {
  return this.setEndState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sim_server.SimulationResultResponse.prototype.hasEndState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool state_changed_during_sim = 3;
 * @return {boolean}
 */
proto.sim_server.SimulationResultResponse.prototype.getStateChangedDuringSim = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sim_server.SimulationResultResponse} returns this
 */
proto.sim_server.SimulationResultResponse.prototype.setStateChangedDuringSim = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.sim_server);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Sim_serverServiceClientPb_1 = __webpack_require__(/*! ./proto/generated/Sim_serverServiceClientPb */ "../cell_automata_project/proto/generated/Sim_serverServiceClientPb.ts");
var sim_server_pb_1 = __webpack_require__(/*! ./proto/generated/sim_server_pb */ "../cell_automata_project/proto/generated/sim_server_pb.js");
var stateService = new Sim_serverServiceClientPb_1.StateServiceClient('http://localhost:8080', null, null);
function startSimulation() {
    var request = new sim_server_pb_1.StartSimulationRequest();
    var initReq = new sim_server_pb_1.InitializeRequest();
    var dims = new sim_server_pb_1.GridDimensions();
    dims.setXMax(10);
    dims.setYMax(10);
    dims.setZMax(10);
    initReq.setDimensions(dims);
    var stepReq = new sim_server_pb_1.StepRequest();
    stepReq.setNumSteps(1000);
    stepReq.setRule("ASNFZ4mrze8BI0VniavN7w==");
    request.setTimeout(5);
    request.setInitReq(initReq);
    request.setStepReq(stepReq);
    stateService.startSimulation(request)
        .then(function (response) {
        console.log("Received response: " + response.getStateChangedDuringSim());
    })
        .catch(function (err) {
        console.log("Received error: " + err.code + ", " + err.message);
    });
}
// Attach the function to the global window object so it can be accessed from HTML
window.startSimulation = startSimulation;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtZmFicmljLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1wcm90b2J1Zi9nb29nbGUtcHJvdG9idWYuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLWZhYnJpYy8uL25vZGVfbW9kdWxlcy9ncnBjLXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtZmFicmljLy4uL2NlbGxfYXV0b21hdGFfcHJvamVjdC9wcm90by9nZW5lcmF0ZWQvU2ltX3NlcnZlclNlcnZpY2VDbGllbnRQYi50cyIsIndlYnBhY2s6Ly9zb2NpYWwtZmFicmljLy4uL2NlbGxfYXV0b21hdGFfcHJvamVjdC9wcm90by9nZW5lcmF0ZWQvc2ltX3NlcnZlcl9wYi5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtZmFicmljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvY2lhbC1mYWJyaWMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zb2NpYWwtZmFicmljLy4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Ysd0RBQXdELHNFQUFzRSxxQkFBTSxRQUFRLHFCQUFNLENBQUMscUJBQU0sTUFBTSxpQkFBaUIsTUFBTSxRQUFRLGVBQWUsWUFBWSxhQUFhLEtBQUssV0FBVyxnQkFBZ0IsRUFBRSxPQUFPLGdCQUFnQixPQUFPLE9BQU8sdUJBQXVCLG9DQUFvQztBQUNoYyxlQUFlLFFBQVEsa0JBQWtCLG1CQUFtQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsZ0JBQWdCLHdCQUF3QixpQkFBaUIsU0FBUyx1QkFBdUIsb0NBQW9DLEVBQUUsaUNBQWlDLGVBQWUsa0JBQWtCLGNBQWMsd0VBQXdFLGtEQUFrRCxRQUFRLFNBQVM7QUFDcmMsY0FBYyxLQUFLLHdCQUF3QixxREFBcUQsNkRBQTZELDZDQUE2QyxxQkFBcUIsRUFBRSxnQkFBZ0IsZUFBZSxLQUFLLEdBQUcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FB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dkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsUUFBUSxDQUFDLHdCQUF3QixFQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsVUFBQyxHQUFxQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixHQUFHLENBQUMsSUFBSSxVQUFLLEdBQUcsQ0FBQyxPQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxrRkFBa0Y7QUFDakYsTUFBYyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuIENvcHlyaWdodCBUaGUgQ2xvc3VyZSBMaWJyYXJ5IEF1dGhvcnMuXG4gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiovXG52YXIgYWE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfSxlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXM7ZnVuY3Rpb24gYmEoYSxiKXtpZihiKXt2YXIgYz1lO2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aC0xO2QrKyl7dmFyIGY9YVtkXTtmIGluIGN8fChjW2ZdPXt9KTtjPWNbZl19YT1hW2EubGVuZ3RoLTFdO2Q9Y1thXTtiPWIoZCk7YiE9ZCYmbnVsbCE9YiYmYWEoYyxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfX1cbmZ1bmN0aW9uIGNhKGEpe3ZhciBiPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGI8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtiKytdfTp7ZG9uZTohMH19fWZ1bmN0aW9uIGRhKCl7ZGE9ZnVuY3Rpb24oKXt9O2UuU3ltYm9sfHwoZS5TeW1ib2w9ZWEpfWZ1bmN0aW9uIGZhKGEsYil7dGhpcy5hPWE7YWEodGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9ZmEucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX07dmFyIGVhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtpZih0aGlzIGluc3RhbmNlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yXCIpO3JldHVybiBuZXcgZmEoXCJqc2NvbXBfc3ltYm9sX1wiKyhjfHxcIlwiKStcIl9cIitiKyssYyl9dmFyIGI9MDtyZXR1cm4gYX0oKTtcbmZ1bmN0aW9uIGhhKCl7ZGEoKTt2YXIgYT1lLlN5bWJvbC5pdGVyYXRvcjthfHwoYT1lLlN5bWJvbC5pdGVyYXRvcj1lLlN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZhYShBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGlhKGNhKHRoaXMpKX19KTtoYT1mdW5jdGlvbigpe319ZnVuY3Rpb24gaWEoYSl7aGEoKTthPXtuZXh0OmF9O2FbZS5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfVxuZnVuY3Rpb24gamEoYSxiKXtoYSgpO2EgaW5zdGFuY2VvZiBTdHJpbmcmJihhKz1cIlwiKTt2YXIgYz0wLGQ9e25leHQ6ZnVuY3Rpb24oKXtpZihjPGEubGVuZ3RoKXt2YXIgZj1jKys7cmV0dXJue3ZhbHVlOmIoZixhW2ZdKSxkb25lOiExfX1kLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohMCx2YWx1ZTp2b2lkIDB9fTtyZXR1cm4gZC5uZXh0KCl9fTtkW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gZH07cmV0dXJuIGR9YmEoXCJBcnJheS5wcm90b3R5cGUuZW50cmllc1wiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oKXtyZXR1cm4gamEodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybltiLGNdfSl9fSk7dmFyIGthPXRoaXN8fHNlbGY7XG5mdW5jdGlvbiBnKGEsYixjKXthPWEuc3BsaXQoXCIuXCIpO2M9Y3x8a2E7YVswXWluIGN8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBjLmV4ZWNTY3JpcHR8fGMuZXhlY1NjcmlwdChcInZhciBcIithWzBdKTtmb3IodmFyIGQ7YS5sZW5ndGgmJihkPWEuc2hpZnQoKSk7KWEubGVuZ3RofHx2b2lkIDA9PT1iP2NbZF0mJmNbZF0hPT1PYmplY3QucHJvdG90eXBlW2RdP2M9Y1tkXTpjPWNbZF09e306Y1tkXT1ifVxuZnVuY3Rpb24gayhhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO1xuZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn1mdW5jdGlvbiBsYShhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT1iJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWJ9ZnVuY3Rpb24gbWEoYSxiLGMpe2coYSxiLGMpfWZ1bmN0aW9uIG5hKGEsYil7ZnVuY3Rpb24gYygpe31jLnByb3RvdHlwZT1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hfTt2YXIgb2E9XCJjb25zdHJ1Y3RvciBoYXNPd25Qcm9wZXJ0eSBpc1Byb3RvdHlwZU9mIHByb3BlcnR5SXNFbnVtZXJhYmxlIHRvTG9jYWxlU3RyaW5nIHRvU3RyaW5nIHZhbHVlT2ZcIi5zcGxpdChcIiBcIik7ZnVuY3Rpb24gcGEoYSxiKXtmb3IodmFyIGMsZCxmPTE7Zjxhcmd1bWVudHMubGVuZ3RoO2YrKyl7ZD1hcmd1bWVudHNbZl07Zm9yKGMgaW4gZClhW2NdPWRbY107Zm9yKHZhciBoPTA7aDxvYS5sZW5ndGg7aCsrKWM9b2FbaF0sT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYykmJihhW2NdPWRbY10pfX07dmFyIHFhPUFycmF5LnByb3RvdHlwZS5mb3JFYWNoP2Z1bmN0aW9uKGEsYil7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgsZD1cInN0cmluZ1wiPT09dHlwZW9mIGE/YS5zcGxpdChcIlwiKTphLGY9MDtmPGM7ZisrKWYgaW4gZCYmYi5jYWxsKHZvaWQgMCxkW2ZdLGYsYSl9LGw9QXJyYXkucHJvdG90eXBlLm1hcD9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYSxiLHZvaWQgMCl9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEubGVuZ3RoLGQ9QXJyYXkoYyksZj1cInN0cmluZ1wiPT09dHlwZW9mIGE/YS5zcGxpdChcIlwiKTphLGg9MDtoPGM7aCsrKWggaW4gZiYmKGRbaF09Yi5jYWxsKHZvaWQgMCxmW2hdLGgsYSkpO3JldHVybiBkfTtcbmZ1bmN0aW9uIHJhKGEsYixjKXtyZXR1cm4gMj49YXJndW1lbnRzLmxlbmd0aD9BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLGIpOkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsYixjKX07ZnVuY3Rpb24gc2EoYSxiLGMsZCl7dmFyIGY9XCJBc3NlcnRpb24gZmFpbGVkXCI7aWYoYyl7Zis9XCI6IFwiK2M7dmFyIGg9ZH1lbHNlIGEmJihmKz1cIjogXCIrYSxoPWIpO3Rocm93IEVycm9yKGYsaHx8W10pO31mdW5jdGlvbiBuKGEsYixjKXtmb3IodmFyIGQ9W10sZj0yO2Y8YXJndW1lbnRzLmxlbmd0aDsrK2YpZFtmLTJdPWFyZ3VtZW50c1tmXTthfHxzYShcIlwiLG51bGwsYixkKTtyZXR1cm4gYX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPVtdLGY9MjtmPGFyZ3VtZW50cy5sZW5ndGg7KytmKWRbZi0yXT1hcmd1bWVudHNbZl07XCJzdHJpbmdcIiE9PXR5cGVvZiBhJiZzYShcIkV4cGVjdGVkIHN0cmluZyBidXQgZ290ICVzOiAlcy5cIixbayhhKSxhXSxiLGQpfVxuZnVuY3Rpb24gdWEoYSxiLGMpe2Zvcih2YXIgZD1bXSxmPTI7Zjxhcmd1bWVudHMubGVuZ3RoOysrZilkW2YtMl09YXJndW1lbnRzW2ZdO0FycmF5LmlzQXJyYXkoYSl8fHNhKFwiRXhwZWN0ZWQgYXJyYXkgYnV0IGdvdCAlczogJXMuXCIsW2soYSksYV0sYixkKX1mdW5jdGlvbiBwKGEsYil7Zm9yKHZhciBjPVtdLGQ9MTtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZC0xXT1hcmd1bWVudHNbZF07dGhyb3cgRXJyb3IoXCJGYWlsdXJlXCIrKGE/XCI6IFwiK2E6XCJcIiksYyk7fWZ1bmN0aW9uIHEoYSxiLGMsZCl7Zm9yKHZhciBmPVtdLGg9MztoPGFyZ3VtZW50cy5sZW5ndGg7KytoKWZbaC0zXT1hcmd1bWVudHNbaF07YSBpbnN0YW5jZW9mIGJ8fHNhKFwiRXhwZWN0ZWQgaW5zdGFuY2VvZiAlcyBidXQgZ290ICVzLlwiLFt2YShiKSx2YShhKV0sYyxmKX1cbmZ1bmN0aW9uIHZhKGEpe3JldHVybiBhIGluc3RhbmNlb2YgRnVuY3Rpb24/YS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxcInVua25vd24gdHlwZSBuYW1lXCI6YSBpbnN0YW5jZW9mIE9iamVjdD9hLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lfHxhLmNvbnN0cnVjdG9yLm5hbWV8fE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTpudWxsPT09YT9cIm51bGxcIjp0eXBlb2YgYX07ZnVuY3Rpb24gcihhLGIpe3RoaXMuYz1hO3RoaXMuYj1iO3RoaXMuYT17fTt0aGlzLmFyckNsZWFuPSEwO2lmKDA8dGhpcy5jLmxlbmd0aCl7Zm9yKGE9MDthPHRoaXMuYy5sZW5ndGg7YSsrKXtiPXRoaXMuY1thXTt2YXIgYz1iWzBdO3RoaXMuYVtjLnRvU3RyaW5nKCldPW5ldyB3YShjLGJbMV0pfXRoaXMuYXJyQ2xlYW49ITB9fWcoXCJqc3BiLk1hcFwiLHIsdm9pZCAwKTtcbnIucHJvdG90eXBlLmc9ZnVuY3Rpb24oKXtpZih0aGlzLmFyckNsZWFuKXtpZih0aGlzLmIpe3ZhciBhPXRoaXMuYSxiO2ZvcihiIGluIGEpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYikpe3ZhciBjPWFbYl0uYTtjJiZjLmcoKX19fWVsc2V7dGhpcy5jLmxlbmd0aD0wO2E9dSh0aGlzKTthLnNvcnQoKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD10aGlzLmFbYVtiXV07KGM9ZC5hKSYmYy5nKCk7dGhpcy5jLnB1c2goW2Qua2V5LGQudmFsdWVdKX10aGlzLmFyckNsZWFuPSEwfXJldHVybiB0aGlzLmN9O3IucHJvdG90eXBlLnRvQXJyYXk9ci5wcm90b3R5cGUuZztcbnIucHJvdG90eXBlLk1jPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXRoaXMuZygpLGQ9W10sZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgaD10aGlzLmFbY1tmXVswXS50b1N0cmluZygpXTt2KHRoaXMsaCk7dmFyIG09aC5hO20/KG4oYiksZC5wdXNoKFtoLmtleSxiKGEsbSldKSk6ZC5wdXNoKFtoLmtleSxoLnZhbHVlXSl9cmV0dXJuIGR9O3IucHJvdG90eXBlLnRvT2JqZWN0PXIucHJvdG90eXBlLk1jO3IuZnJvbU9iamVjdD1mdW5jdGlvbihhLGIsYyl7Yj1uZXcgcihbXSxiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrKyl7dmFyIGY9YVtkXVswXSxoPWMoYVtkXVsxXSk7Yi5zZXQoZixoKX1yZXR1cm4gYn07ZnVuY3Rpb24gdyhhKXt0aGlzLmE9MDt0aGlzLmI9YX13LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYTx0aGlzLmIubGVuZ3RoP3tkb25lOiExLHZhbHVlOnRoaXMuYlt0aGlzLmErK119Ontkb25lOiEwLHZhbHVlOnZvaWQgMH19O1xuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmKHcucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pO3IucHJvdG90eXBlLkpiPWZ1bmN0aW9uKCl7cmV0dXJuIHUodGhpcykubGVuZ3RofTtyLnByb3RvdHlwZS5nZXRMZW5ndGg9ci5wcm90b3R5cGUuSmI7ci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmE9e307dGhpcy5hcnJDbGVhbj0hMX07ci5wcm90b3R5cGUuY2xlYXI9ci5wcm90b3R5cGUuY2xlYXI7ci5wcm90b3R5cGUuQ2I9ZnVuY3Rpb24oYSl7YT1hLnRvU3RyaW5nKCk7dmFyIGI9dGhpcy5hLmhhc093blByb3BlcnR5KGEpO2RlbGV0ZSB0aGlzLmFbYV07dGhpcy5hcnJDbGVhbj0hMTtyZXR1cm4gYn07ci5wcm90b3R5cGUuZGVsPXIucHJvdG90eXBlLkNiO1xuci5wcm90b3R5cGUuRWI9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXUodGhpcyk7Yi5zb3J0KCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPXRoaXMuYVtiW2NdXTthLnB1c2goW2Qua2V5LGQudmFsdWVdKX1yZXR1cm4gYX07ci5wcm90b3R5cGUuZ2V0RW50cnlMaXN0PXIucHJvdG90eXBlLkViO3IucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXUodGhpcyk7Yi5zb3J0KCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPXRoaXMuYVtiW2NdXTthLnB1c2goW2Qua2V5LHYodGhpcyxkKV0pfXJldHVybiBuZXcgdyhhKX07ci5wcm90b3R5cGUuZW50cmllcz1yLnByb3RvdHlwZS5lbnRyaWVzO3IucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXUodGhpcyk7Yi5zb3J0KCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspYS5wdXNoKHRoaXMuYVtiW2NdXS5rZXkpO3JldHVybiBuZXcgdyhhKX07XG5yLnByb3RvdHlwZS5rZXlzPXIucHJvdG90eXBlLmtleXM7ci5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIGE9W10sYj11KHRoaXMpO2Iuc29ydCgpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKWEucHVzaCh2KHRoaXMsdGhpcy5hW2JbY11dKSk7cmV0dXJuIG5ldyB3KGEpfTtyLnByb3RvdHlwZS52YWx1ZXM9ci5wcm90b3R5cGUudmFsdWVzO3IucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oYSxiKXt2YXIgYz11KHRoaXMpO2Muc29ydCgpO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZj10aGlzLmFbY1tkXV07YS5jYWxsKGIsdih0aGlzLGYpLGYua2V5LHRoaXMpfX07ci5wcm90b3R5cGUuZm9yRWFjaD1yLnByb3RvdHlwZS5mb3JFYWNoO1xuci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IHdhKGEpO3RoaXMuYj8oYy5hPWIsYy52YWx1ZT1iLmcoKSk6Yy52YWx1ZT1iO3RoaXMuYVthLnRvU3RyaW5nKCldPWM7dGhpcy5hcnJDbGVhbj0hMTtyZXR1cm4gdGhpc307ci5wcm90b3R5cGUuc2V0PXIucHJvdG90eXBlLnNldDtmdW5jdGlvbiB2KGEsYil7cmV0dXJuIGEuYj8oYi5hfHwoYi5hPW5ldyBhLmIoYi52YWx1ZSkpLGIuYSk6Yi52YWx1ZX1yLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7aWYoYT10aGlzLmFbYS50b1N0cmluZygpXSlyZXR1cm4gdih0aGlzLGEpfTtyLnByb3RvdHlwZS5nZXQ9ci5wcm90b3R5cGUuZ2V0O3IucHJvdG90eXBlLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gYS50b1N0cmluZygpaW4gdGhpcy5hfTtyLnByb3RvdHlwZS5oYXM9ci5wcm90b3R5cGUuaGFzO1xuci5wcm90b3R5cGUuSmM9ZnVuY3Rpb24oYSxiLGMsZCxmKXt2YXIgaD11KHRoaXMpO2guc29ydCgpO2Zvcih2YXIgbT0wO208aC5sZW5ndGg7bSsrKXt2YXIgdD10aGlzLmFbaFttXV07Yi5WYShhKTtjLmNhbGwoYiwxLHQua2V5KTt0aGlzLmI/ZC5jYWxsKGIsMix2KHRoaXMsdCksZik6ZC5jYWxsKGIsMix0LnZhbHVlKTtiLllhKCl9fTtyLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnk9ci5wcm90b3R5cGUuSmM7ci5kZXNlcmlhbGl6ZUJpbmFyeT1mdW5jdGlvbihhLGIsYyxkLGYsaCxtKXtmb3IoO2Iub2EoKSYmIWIuYmIoKTspe3ZhciB0PWIuYzsxPT10P2g9Yy5jYWxsKGIpOjI9PXQmJihhLmI/KG4oZiksbXx8KG09bmV3IGEuYiksZC5jYWxsKGIsbSxmKSk6bT1kLmNhbGwoYikpfW4odm9pZCAwIT1oKTtuKHZvaWQgMCE9bSk7YS5zZXQoaCxtKX07XG5mdW5jdGlvbiB1KGEpe2E9YS5hO3ZhciBiPVtdLGM7Zm9yKGMgaW4gYSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxjKSYmYi5wdXNoKGMpO3JldHVybiBifWZ1bmN0aW9uIHdhKGEsYil7dGhpcy5rZXk9YTt0aGlzLnZhbHVlPWI7dGhpcy5hPXZvaWQgMH07ZnVuY3Rpb24geGEoYSl7aWYoODE5Mj49YS5sZW5ndGgpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxhKTtmb3IodmFyIGI9XCJcIixjPTA7YzxhLmxlbmd0aDtjKz04MTkyKWIrPVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxyYShhLGMsYys4MTkyKSk7cmV0dXJuIGJ9O3ZhciB5YT17XCJcXHgwMFwiOlwiXFxcXDBcIixcIlxcYlwiOlwiXFxcXGJcIixcIlxcZlwiOlwiXFxcXGZcIixcIlxcblwiOlwiXFxcXG5cIixcIlxcclwiOlwiXFxcXHJcIixcIlxcdFwiOlwiXFxcXHRcIixcIlxceDBCXCI6XCJcXFxceDBCXCIsJ1wiJzonXFxcXFwiJyxcIlxcXFxcIjpcIlxcXFxcXFxcXCIsXCI8XCI6XCJcXFxcdTAwM0NcIn0semE9e1wiJ1wiOlwiXFxcXCdcIn07dmFyIEFhPXt9LHg9bnVsbDtmdW5jdGlvbiBCYShhLGIpe3ZvaWQgMD09PWImJihiPTApO0NhKCk7Yj1BYVtiXTtmb3IodmFyIGM9W10sZD0wO2Q8YS5sZW5ndGg7ZCs9Myl7dmFyIGY9YVtkXSxoPWQrMTxhLmxlbmd0aCxtPWg/YVtkKzFdOjAsdD1kKzI8YS5sZW5ndGgsQj10P2FbZCsyXTowLE09Zj4+MjtmPShmJjMpPDw0fG0+PjQ7bT0obSYxNSk8PDJ8Qj4+NjtCJj02Mzt0fHwoQj02NCxofHwobT02NCkpO2MucHVzaChiW01dLGJbZl0sYlttXXx8XCJcIixiW0JdfHxcIlwiKX1yZXR1cm4gYy5qb2luKFwiXCIpfWZ1bmN0aW9uIERhKGEpe3ZhciBiPWEubGVuZ3RoLGM9MypiLzQ7YyUzP2M9TWF0aC5mbG9vcihjKTotMSE9XCI9LlwiLmluZGV4T2YoYVtiLTFdKSYmKGM9LTEhPVwiPS5cIi5pbmRleE9mKGFbYi0yXSk/Yy0yOmMtMSk7dmFyIGQ9bmV3IFVpbnQ4QXJyYXkoYyksZj0wO0VhKGEsZnVuY3Rpb24oaCl7ZFtmKytdPWh9KTtyZXR1cm4gZC5zdWJhcnJheSgwLGYpfVxuZnVuY3Rpb24gRWEoYSxiKXtmdW5jdGlvbiBjKEIpe2Zvcig7ZDxhLmxlbmd0aDspe3ZhciBNPWEuY2hhckF0KGQrKyksTGE9eFtNXTtpZihudWxsIT1MYSlyZXR1cm4gTGE7aWYoIS9eW1xcc1xceGEwXSokLy50ZXN0KE0pKXRocm93IEVycm9yKFwiVW5rbm93biBiYXNlNjQgZW5jb2RpbmcgYXQgY2hhcjogXCIrTSk7fXJldHVybiBCfUNhKCk7Zm9yKHZhciBkPTA7Oyl7dmFyIGY9YygtMSksaD1jKDApLG09Yyg2NCksdD1jKDY0KTtpZig2ND09PXQmJi0xPT09ZilicmVhaztiKGY8PDJ8aD4+NCk7NjQhPW0mJihiKGg8PDQmMjQwfG0+PjIpLDY0IT10JiZiKG08PDYmMTkyfHQpKX19XG5mdW5jdGlvbiBDYSgpe2lmKCF4KXt4PXt9O2Zvcih2YXIgYT1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCIuc3BsaXQoXCJcIiksYj1bXCIrLz1cIixcIisvXCIsXCItXz1cIixcIi1fLlwiLFwiLV9cIl0sYz0wOzU+YztjKyspe3ZhciBkPWEuY29uY2F0KGJbY10uc3BsaXQoXCJcIikpO0FhW2NdPWQ7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDtmKyspe3ZhciBoPWRbZl07dm9pZCAwPT09eFtoXSYmKHhbaF09Zil9fX19O2coXCJqc3BiLkNvbnN0QmluYXJ5TWVzc2FnZVwiLGZ1bmN0aW9uKCl7fSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeU1lc3NhZ2VcIixmdW5jdGlvbigpe30sdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuRmllbGRUeXBlXCIse3liOi0xLGVlOjEsRkxPQVQ6MixrZTozLHRlOjQsamU6NSx4Yjo2LHdiOjcsQk9PTDo4LHJlOjksaWU6MTAsbGU6MTEsY2U6MTIsc2U6MTMsZ2U6MTQsbWU6MTUsbmU6MTYsb2U6MTcscGU6MTgsaGU6MzAsdmU6MzF9LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLldpcmVUeXBlXCIse3liOi0xLHVlOjAseGI6MSxkZToyLHFlOjMsZmU6NCx3Yjo1fSx2b2lkIDApO1xuZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZpZWxkVHlwZVRvV2lyZVR5cGVcIixmdW5jdGlvbihhKXtzd2l0Y2goYSl7Y2FzZSA1OmNhc2UgMzpjYXNlIDEzOmNhc2UgNDpjYXNlIDE3OmNhc2UgMTg6Y2FzZSA4OmNhc2UgMTQ6Y2FzZSAzMTpyZXR1cm4gMDtjYXNlIDE6Y2FzZSA2OmNhc2UgMTY6Y2FzZSAzMDpyZXR1cm4gMTtjYXNlIDk6Y2FzZSAxMTpjYXNlIDEyOnJldHVybiAyO2Nhc2UgMjpjYXNlIDc6Y2FzZSAxNTpyZXR1cm4gNTtkZWZhdWx0OnJldHVybi0xfX0sdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuSU5WQUxJRF9GSUVMRF9OVU1CRVJcIiwtMSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GTE9BVDMyX0VQU1wiLDEuNDAxMjk4NDY0MzI0ODE3RS00NSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GTE9BVDMyX01JTlwiLDEuMTc1NDk0MzUwODIyMjg3NUUtMzgsdm9pZCAwKTtcbmcoXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GTE9BVDMyX01BWFwiLDMuNDAyODIzNDY2Mzg1Mjg4NkUzOCx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GTE9BVDY0X0VQU1wiLDQuOUUtMzI0LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZMT0FUNjRfTUlOXCIsMi4yMjUwNzM4NTg1MDcyMDE0RS0zMDgsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuRkxPQVQ2NF9NQVhcIiwxLjc5NzY5MzEzNDg2MjMxNTdFMzA4LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT18yMFwiLDEwNDg1NzYsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuVFdPX1RPXzIzXCIsODM4ODYwOCx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5UV09fVE9fMzFcIiwyMTQ3NDgzNjQ4LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT18zMlwiLDQyOTQ5NjcyOTYsdm9pZCAwKTtcbmcoXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5UV09fVE9fNTJcIiw0NTAzNTk5NjI3MzcwNDk2LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT182M1wiLDB4N2ZmZmZmZmZmZmZmZmZmZix2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5UV09fVE9fNjRcIiwxLjg0NDY3NDQwNzM3MDk1NTJFMTksdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuWkVST19IQVNIXCIsXCJcXHgwMFxceDAwXFx4MDBcXHgwMFxceDAwXFx4MDBcXHgwMFxceDAwXCIsdm9pZCAwKTt2YXIgeT0wLHo9MDtnKFwianNwYi51dGlscy5nZXRTcGxpdDY0TG93XCIsZnVuY3Rpb24oKXtyZXR1cm4geX0sdm9pZCAwKTtnKFwianNwYi51dGlscy5nZXRTcGxpdDY0SGlnaFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHp9LHZvaWQgMCk7ZnVuY3Rpb24gRmEoYSl7dmFyIGI9YT4+PjA7YT1NYXRoLmZsb29yKChhLWIpLzQyOTQ5NjcyOTYpPj4+MDt5PWI7ej1hfWcoXCJqc3BiLnV0aWxzLnNwbGl0VWludDY0XCIsRmEsdm9pZCAwKTtmdW5jdGlvbiBBKGEpe3ZhciBiPTA+YTthPU1hdGguYWJzKGEpO3ZhciBjPWE+Pj4wO2E9TWF0aC5mbG9vcigoYS1jKS80Mjk0OTY3Mjk2KTthPj4+PTA7YiYmKGE9fmE+Pj4wLGM9KH5jPj4+MCkrMSw0Mjk0OTY3Mjk1PGMmJihjPTAsYSsrLDQyOTQ5NjcyOTU8YSYmKGE9MCkpKTt5PWM7ej1hfWcoXCJqc3BiLnV0aWxzLnNwbGl0SW50NjRcIixBLHZvaWQgMCk7XG5mdW5jdGlvbiBHYShhKXt2YXIgYj0wPmE7YT0yKk1hdGguYWJzKGEpO0ZhKGEpO2E9eTt2YXIgYz16O2ImJigwPT1hPzA9PWM/Yz1hPTQyOTQ5NjcyOTU6KGMtLSxhPTQyOTQ5NjcyOTUpOmEtLSk7eT1hO3o9Y31nKFwianNwYi51dGlscy5zcGxpdFppZ3phZzY0XCIsR2Esdm9pZCAwKTtcbmZ1bmN0aW9uIEhhKGEpe3ZhciBiPTA+YT8xOjA7YT1iPy1hOmE7aWYoMD09PWEpMDwxL2E/eT16PTA6KHo9MCx5PTIxNDc0ODM2NDgpO2Vsc2UgaWYoaXNOYU4oYSkpej0wLHk9MjE0NzQ4MzY0NztlbHNlIGlmKDMuNDAyODIzNDY2Mzg1Mjg4NkUzODxhKXo9MCx5PShiPDwzMXwyMTM5MDk1MDQwKT4+PjA7ZWxzZSBpZigxLjE3NTQ5NDM1MDgyMjI4NzVFLTM4PmEpYT1NYXRoLnJvdW5kKGEvTWF0aC5wb3coMiwtMTQ5KSksej0wLHk9KGI8PDMxfGEpPj4+MDtlbHNle3ZhciBjPU1hdGguZmxvb3IoTWF0aC5sb2coYSkvTWF0aC5MTjIpO2EqPU1hdGgucG93KDIsLWMpO2E9TWF0aC5yb3VuZCg4Mzg4NjA4KmEpOzE2Nzc3MjE2PD1hJiYrK2M7ej0wO3k9KGI8PDMxfGMrMTI3PDwyM3xhJjgzODg2MDcpPj4+MH19ZyhcImpzcGIudXRpbHMuc3BsaXRGbG9hdDMyXCIsSGEsdm9pZCAwKTtcbmZ1bmN0aW9uIElhKGEpe3ZhciBiPTA+YT8xOjA7YT1iPy1hOmE7aWYoMD09PWEpej0wPDEvYT8wOjIxNDc0ODM2NDgseT0wO2Vsc2UgaWYoaXNOYU4oYSkpej0yMTQ3NDgzNjQ3LHk9NDI5NDk2NzI5NTtlbHNlIGlmKDEuNzk3NjkzMTM0ODYyMzE1N0UzMDg8YSl6PShiPDwzMXwyMTQ2NDM1MDcyKT4+PjAseT0wO2Vsc2UgaWYoMi4yMjUwNzM4NTg1MDcyMDE0RS0zMDg+YSlhLz1NYXRoLnBvdygyLC0xMDc0KSx6PShiPDwzMXxhLzQyOTQ5NjcyOTYpPj4+MCx5PWE+Pj4wO2Vsc2V7dmFyIGM9YSxkPTA7aWYoMjw9Yylmb3IoOzI8PWMmJjEwMjM+ZDspZCsrLGMvPTI7ZWxzZSBmb3IoOzE+YyYmLTEwMjI8ZDspYyo9MixkLS07YSo9TWF0aC5wb3coMiwtZCk7ej0oYjw8MzF8ZCsxMDIzPDwyMHwxMDQ4NTc2KmEmMTA0ODU3NSk+Pj4wO3k9NDUwMzU5OTYyNzM3MDQ5NiphPj4+MH19ZyhcImpzcGIudXRpbHMuc3BsaXRGbG9hdDY0XCIsSWEsdm9pZCAwKTtcbmZ1bmN0aW9uIEMoYSl7dmFyIGI9YS5jaGFyQ29kZUF0KDQpLGM9YS5jaGFyQ29kZUF0KDUpLGQ9YS5jaGFyQ29kZUF0KDYpLGY9YS5jaGFyQ29kZUF0KDcpO3k9YS5jaGFyQ29kZUF0KDApKyhhLmNoYXJDb2RlQXQoMSk8PDgpKyhhLmNoYXJDb2RlQXQoMik8PDE2KSsoYS5jaGFyQ29kZUF0KDMpPDwyNCk+Pj4wO3o9YisoYzw8OCkrKGQ8PDE2KSsoZjw8MjQpPj4+MH1nKFwianNwYi51dGlscy5zcGxpdEhhc2g2NFwiLEMsdm9pZCAwKTtmdW5jdGlvbiBEKGEsYil7cmV0dXJuIDQyOTQ5NjcyOTYqYisoYT4+PjApfWcoXCJqc3BiLnV0aWxzLmpvaW5VaW50NjRcIixELHZvaWQgMCk7ZnVuY3Rpb24gRShhLGIpe3ZhciBjPWImMjE0NzQ4MzY0ODtjJiYoYT1+YSsxPj4+MCxiPX5iPj4+MCwwPT1hJiYoYj1iKzE+Pj4wKSk7YT1EKGEsYik7cmV0dXJuIGM/LWE6YX1nKFwianNwYi51dGlscy5qb2luSW50NjRcIixFLHZvaWQgMCk7XG5mdW5jdGlvbiBKYShhLGIsYyl7dmFyIGQ9Yj4+MzE7cmV0dXJuIGMoYTw8MV5kLChiPDwxfGE+Pj4zMSleZCl9ZyhcImpzcGIudXRpbHMudG9aaWd6YWc2NFwiLEphLHZvaWQgMCk7ZnVuY3Rpb24gS2EoYSxiKXtyZXR1cm4gTWEoYSxiLEUpfWcoXCJqc3BiLnV0aWxzLmpvaW5aaWd6YWc2NFwiLEthLHZvaWQgMCk7ZnVuY3Rpb24gTWEoYSxiLGMpe3ZhciBkPS0oYSYxKTtyZXR1cm4gYygoYT4+PjF8Yjw8MzEpXmQsYj4+PjFeZCl9ZyhcImpzcGIudXRpbHMuZnJvbVppZ3phZzY0XCIsTWEsdm9pZCAwKTtmdW5jdGlvbiBOYShhKXt2YXIgYj0yKihhPj4zMSkrMSxjPWE+Pj4yMyYyNTU7YSY9ODM4ODYwNztyZXR1cm4gMjU1PT1jP2E/TmFOOkluZmluaXR5KmI6MD09Yz9iKk1hdGgucG93KDIsLTE0OSkqYTpiKk1hdGgucG93KDIsYy0xNTApKihhK01hdGgucG93KDIsMjMpKX1nKFwianNwYi51dGlscy5qb2luRmxvYXQzMlwiLE5hLHZvaWQgMCk7XG5mdW5jdGlvbiBPYShhLGIpe3ZhciBjPTIqKGI+PjMxKSsxLGQ9Yj4+PjIwJjIwNDc7YT00Mjk0OTY3Mjk2KihiJjEwNDg1NzUpK2E7cmV0dXJuIDIwNDc9PWQ/YT9OYU46SW5maW5pdHkqYzowPT1kP2MqTWF0aC5wb3coMiwtMTA3NCkqYTpjKk1hdGgucG93KDIsZC0xMDc1KSooYSs0NTAzNTk5NjI3MzcwNDk2KX1nKFwianNwYi51dGlscy5qb2luRmxvYXQ2NFwiLE9hLHZvaWQgMCk7ZnVuY3Rpb24gUGEoYSxiKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShhPj4+MCYyNTUsYT4+PjgmMjU1LGE+Pj4xNiYyNTUsYT4+PjI0JjI1NSxiPj4+MCYyNTUsYj4+PjgmMjU1LGI+Pj4xNiYyNTUsYj4+PjI0JjI1NSl9ZyhcImpzcGIudXRpbHMuam9pbkhhc2g2NFwiLFBhLHZvaWQgMCk7ZyhcImpzcGIudXRpbHMuRElHSVRTXCIsXCIwMTIzNDU2Nzg5YWJjZGVmXCIuc3BsaXQoXCJcIiksdm9pZCAwKTtcbmZ1bmN0aW9uIEYoYSxiKXtmdW5jdGlvbiBjKGYsaCl7Zj1mP1N0cmluZyhmKTpcIlwiO3JldHVybiBoP1wiMDAwMDAwMFwiLnNsaWNlKGYubGVuZ3RoKStmOmZ9aWYoMjA5NzE1MT49YilyZXR1cm5cIlwiK0QoYSxiKTt2YXIgZD0oYT4+PjI0fGI8PDgpPj4+MCYxNjc3NzIxNTtiPWI+PjE2JjY1NTM1O2E9KGEmMTY3NzcyMTUpKzY3NzcyMTYqZCs2NzEwNjU2KmI7ZCs9ODE0NzQ5NypiO2IqPTI7MUU3PD1hJiYoZCs9TWF0aC5mbG9vcihhLzFFNyksYSU9MUU3KTsxRTc8PWQmJihiKz1NYXRoLmZsb29yKGQvMUU3KSxkJT0xRTcpO3JldHVybiBjKGIsMCkrYyhkLGIpK2MoYSwxKX1nKFwianNwYi51dGlscy5qb2luVW5zaWduZWREZWNpbWFsU3RyaW5nXCIsRix2b2lkIDApO2Z1bmN0aW9uIEcoYSxiKXt2YXIgYz1iJjIxNDc0ODM2NDg7YyYmKGE9fmErMT4+PjAsYj1+YisoMD09YT8xOjApPj4+MCk7YT1GKGEsYik7cmV0dXJuIGM/XCItXCIrYTphfVxuZyhcImpzcGIudXRpbHMuam9pblNpZ25lZERlY2ltYWxTdHJpbmdcIixHLHZvaWQgMCk7ZnVuY3Rpb24gUWEoYSxiKXtDKGEpO2E9eTt2YXIgYz16O3JldHVybiBiP0coYSxjKTpGKGEsYyl9ZyhcImpzcGIudXRpbHMuaGFzaDY0VG9EZWNpbWFsU3RyaW5nXCIsUWEsdm9pZCAwKTtnKFwianNwYi51dGlscy5oYXNoNjRBcnJheVRvRGVjaW1hbFN0cmluZ3NcIixmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1BcnJheShhLmxlbmd0aCksZD0wO2Q8YS5sZW5ndGg7ZCsrKWNbZF09UWEoYVtkXSxiKTtyZXR1cm4gY30sdm9pZCAwKTtcbmZ1bmN0aW9uIEgoYSl7ZnVuY3Rpb24gYihtLHQpe2Zvcih2YXIgQj0wOzg+QiYmKDEhPT1tfHwwPHQpO0IrKyl0PW0qZltCXSt0LGZbQl09dCYyNTUsdD4+Pj04fWZ1bmN0aW9uIGMoKXtmb3IodmFyIG09MDs4Pm07bSsrKWZbbV09fmZbbV0mMjU1fW4oMDxhLmxlbmd0aCk7dmFyIGQ9ITE7XCItXCI9PT1hWzBdJiYoZD0hMCxhPWEuc2xpY2UoMSkpO2Zvcih2YXIgZj1bMCwwLDAsMCwwLDAsMCwwXSxoPTA7aDxhLmxlbmd0aDtoKyspYigxMCxhLmNoYXJDb2RlQXQoaCktNDgpO2QmJihjKCksYigxLDEpKTtyZXR1cm4geGEoZil9ZyhcImpzcGIudXRpbHMuZGVjaW1hbFN0cmluZ1RvSGFzaDY0XCIsSCx2b2lkIDApO2coXCJqc3BiLnV0aWxzLnNwbGl0RGVjaW1hbFN0cmluZ1wiLGZ1bmN0aW9uKGEpe0MoSChhKSl9LHZvaWQgMCk7ZnVuY3Rpb24gUmEoYSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMTA+YT80OCthOjg3K2EpfVxuZnVuY3Rpb24gU2EoYSl7cmV0dXJuIDk3PD1hP2EtOTcrMTA6YS00OH1nKFwianNwYi51dGlscy5oYXNoNjRUb0hleFN0cmluZ1wiLGZ1bmN0aW9uKGEpe3ZhciBiPUFycmF5KDE4KTtiWzBdPVwiMFwiO2JbMV09XCJ4XCI7Zm9yKHZhciBjPTA7OD5jO2MrKyl7dmFyIGQ9YS5jaGFyQ29kZUF0KDctYyk7YlsyKmMrMl09UmEoZD4+NCk7YlsyKmMrM109UmEoZCYxNSl9cmV0dXJuIGIuam9pbihcIlwiKX0sdm9pZCAwKTtnKFwianNwYi51dGlscy5oZXhTdHJpbmdUb0hhc2g2NFwiLGZ1bmN0aW9uKGEpe2E9YS50b0xvd2VyQ2FzZSgpO24oMTg9PWEubGVuZ3RoKTtuKFwiMFwiPT1hWzBdKTtuKFwieFwiPT1hWzFdKTtmb3IodmFyIGI9XCJcIixjPTA7OD5jO2MrKyliPVN0cmluZy5mcm9tQ2hhckNvZGUoMTYqU2EoYS5jaGFyQ29kZUF0KDIqYysyKSkrU2EoYS5jaGFyQ29kZUF0KDIqYyszKSkpK2I7cmV0dXJuIGJ9LHZvaWQgMCk7XG5nKFwianNwYi51dGlscy5oYXNoNjRUb051bWJlclwiLGZ1bmN0aW9uKGEsYil7QyhhKTthPXk7dmFyIGM9ejtyZXR1cm4gYj9FKGEsYyk6RChhLGMpfSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLm51bWJlclRvSGFzaDY0XCIsZnVuY3Rpb24oYSl7QShhKTtyZXR1cm4gUGEoeSx6KX0sdm9pZCAwKTtnKFwianNwYi51dGlscy5jb3VudFZhcmludHNcIixmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZj1iO2Y8YztmKyspZCs9YVtmXT4+NztyZXR1cm4gYy1iLWR9LHZvaWQgMCk7XG5nKFwianNwYi51dGlscy5jb3VudFZhcmludEZpZWxkc1wiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBmPTA7ZCo9ODtpZigxMjg+ZClmb3IoO2I8YyYmYVtiKytdPT1kOylmb3IoZisrOzspe3ZhciBoPWFbYisrXTtpZigwPT0oaCYxMjgpKWJyZWFrfWVsc2UgZm9yKDtiPGM7KXtmb3IoaD1kOzEyODxoOyl7aWYoYVtiXSE9KGgmMTI3fDEyOCkpcmV0dXJuIGY7YisrO2g+Pj03fWlmKGFbYisrXSE9aClicmVhaztmb3IoZisrO2g9YVtiKytdLDAhPShoJjEyOCk7KTt9cmV0dXJuIGZ9LHZvaWQgMCk7ZnVuY3Rpb24gVGEoYSxiLGMsZCxmKXt2YXIgaD0wO2lmKDEyOD5kKWZvcig7YjxjJiZhW2IrK109PWQ7KWgrKyxiKz1mO2Vsc2UgZm9yKDtiPGM7KXtmb3IodmFyIG09ZDsxMjg8bTspe2lmKGFbYisrXSE9KG0mMTI3fDEyOCkpcmV0dXJuIGg7bT4+PTd9aWYoYVtiKytdIT1tKWJyZWFrO2grKztiKz1mfXJldHVybiBofVxuZyhcImpzcGIudXRpbHMuY291bnRGaXhlZDMyRmllbGRzXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIFRhKGEsYixjLDgqZCs1LDQpfSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmNvdW50Rml4ZWQ2NEZpZWxkc1wiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBUYShhLGIsYyw4KmQrMSw4KX0sdm9pZCAwKTtnKFwianNwYi51dGlscy5jb3VudERlbGltaXRlZEZpZWxkc1wiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBmPTA7Zm9yKGQ9OCpkKzI7YjxjOyl7Zm9yKHZhciBoPWQ7MTI4PGg7KXtpZihhW2IrK10hPShoJjEyN3wxMjgpKXJldHVybiBmO2g+Pj03fWlmKGFbYisrXSE9aClicmVhaztmKys7Zm9yKHZhciBtPTAsdD0xO2g9YVtiKytdLG0rPShoJjEyNykqdCx0Kj0xMjgsMCE9KGgmMTI4KTspO2IrPW19cmV0dXJuIGZ9LHZvaWQgMCk7XG5nKFwianNwYi51dGlscy5kZWJ1Z0J5dGVzVG9UZXh0Rm9ybWF0XCIsZnVuY3Rpb24oYSl7dmFyIGI9J1wiJztpZihhKXthPVVhKGEpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIrPVwiXFxcXHhcIiwxNj5hW2NdJiYoYis9XCIwXCIpLGIrPWFbY10udG9TdHJpbmcoMTYpfXJldHVybiBiKydcIid9LHZvaWQgMCk7XG5nKFwianNwYi51dGlscy5kZWJ1Z1NjYWxhclRvVGV4dEZvcm1hdFwiLGZ1bmN0aW9uKGEpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSl7YT1TdHJpbmcoYSk7Zm9yKHZhciBiPVsnXCInXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWEuY2hhckF0KGMpLGY9ZC5jaGFyQ29kZUF0KDApLGg9YysxLG07aWYoIShtPXlhW2RdKSl7aWYoISgzMTxmJiYxMjc+ZikpaWYoZj1kLGYgaW4gemEpZD16YVtmXTtlbHNlIGlmKGYgaW4geWEpZD16YVtmXT15YVtmXTtlbHNle209Zi5jaGFyQ29kZUF0KDApO2lmKDMxPG0mJjEyNz5tKWQ9ZjtlbHNle2lmKDI1Nj5tKXtpZihkPVwiXFxcXHhcIiwxNj5tfHwyNTY8bSlkKz1cIjBcIn1lbHNlIGQ9XCJcXFxcdVwiLDQwOTY+bSYmKGQrPVwiMFwiKTtkKz1tLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWQ9emFbZl09ZH1tPWR9YltoXT1tfWIucHVzaCgnXCInKTthPWIuam9pbihcIlwiKX1lbHNlIGE9YS50b1N0cmluZygpO3JldHVybiBhfSx2b2lkIDApO1xuZyhcImpzcGIudXRpbHMuc3RyaW5nVG9CeXRlQXJyYXlcIixmdW5jdGlvbihhKXtmb3IodmFyIGI9bmV3IFVpbnQ4QXJyYXkoYS5sZW5ndGgpLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YS5jaGFyQ29kZUF0KGMpO2lmKDI1NTxkKXRocm93IEVycm9yKFwiQ29udmVyc2lvbiBlcnJvcjogc3RyaW5nIGNvbnRhaW5zIGNvZGVwb2ludCBvdXRzaWRlIG9mIGJ5dGUgcmFuZ2VcIik7YltjXT1kfXJldHVybiBifSx2b2lkIDApO1xuZnVuY3Rpb24gVWEoYSl7aWYoYS5jb25zdHJ1Y3Rvcj09PVVpbnQ4QXJyYXkpcmV0dXJuIGE7aWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5QnVmZmVyKXJldHVybiBuZXcgVWludDhBcnJheShhKTtpZihhLmNvbnN0cnVjdG9yPT09QXJyYXkpcmV0dXJuIG5ldyBVaW50OEFycmF5KGEpO2lmKGEuY29uc3RydWN0b3I9PT1TdHJpbmcpcmV0dXJuIERhKGEpO2lmKGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KXJldHVybiBuZXcgVWludDhBcnJheShhLmJ1ZmZlcixhLmJ5dGVPZmZzZXQsYS5ieXRlTGVuZ3RoKTtwKFwiVHlwZSBub3QgY29udmVydGlibGUgdG8gVWludDhBcnJheS5cIik7cmV0dXJuIG5ldyBVaW50OEFycmF5KDApfWcoXCJqc3BiLnV0aWxzLmJ5dGVTb3VyY2VUb1VpbnQ4QXJyYXlcIixVYSx2b2lkIDApO2Z1bmN0aW9uIEkoYSxiLGMpe3RoaXMuYj1udWxsO3RoaXMuYT10aGlzLmM9dGhpcy5oPTA7dGhpcy52PSExO2EmJnRoaXMuSChhLGIsYyl9ZyhcImpzcGIuQmluYXJ5RGVjb2RlclwiLEksdm9pZCAwKTt2YXIgVmE9W107SS5nZXRJbnN0YW5jZUNhY2hlTGVuZ3RoPWZ1bmN0aW9uKCl7cmV0dXJuIFZhLmxlbmd0aH07ZnVuY3Rpb24gV2EoYSxiLGMpe2lmKFZhLmxlbmd0aCl7dmFyIGQ9VmEucG9wKCk7YSYmZC5IKGEsYixjKTtyZXR1cm4gZH1yZXR1cm4gbmV3IEkoYSxiLGMpfUkuYWxsb2M9V2E7SS5wcm90b3R5cGUuQ2E9ZnVuY3Rpb24oKXt0aGlzLmNsZWFyKCk7MTAwPlZhLmxlbmd0aCYmVmEucHVzaCh0aGlzKX07SS5wcm90b3R5cGUuZnJlZT1JLnByb3RvdHlwZS5DYTtJLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBXYSh0aGlzLmIsdGhpcy5oLHRoaXMuYy10aGlzLmgpfTtJLnByb3RvdHlwZS5jbG9uZT1JLnByb3RvdHlwZS5jbG9uZTtcbkkucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5iPW51bGw7dGhpcy5hPXRoaXMuYz10aGlzLmg9MDt0aGlzLnY9ITF9O0kucHJvdG90eXBlLmNsZWFyPUkucHJvdG90eXBlLmNsZWFyO0kucHJvdG90eXBlLlk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtJLnByb3RvdHlwZS5nZXRCdWZmZXI9SS5wcm90b3R5cGUuWTtJLnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmI9VWEoYSk7dGhpcy5oPXZvaWQgMCE9PWI/YjowO3RoaXMuYz12b2lkIDAhPT1jP3RoaXMuaCtjOnRoaXMuYi5sZW5ndGg7dGhpcy5hPXRoaXMuaH07SS5wcm90b3R5cGUuc2V0QmxvY2s9SS5wcm90b3R5cGUuSDtJLnByb3RvdHlwZS5EYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O0kucHJvdG90eXBlLmdldEVuZD1JLnByb3RvdHlwZS5EYjtJLnByb3RvdHlwZS5zZXRFbmQ9ZnVuY3Rpb24oYSl7dGhpcy5jPWF9O0kucHJvdG90eXBlLnNldEVuZD1JLnByb3RvdHlwZS5zZXRFbmQ7XG5JLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuYT10aGlzLmh9O0kucHJvdG90eXBlLnJlc2V0PUkucHJvdG90eXBlLnJlc2V0O0kucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTtJLnByb3RvdHlwZS5nZXRDdXJzb3I9SS5wcm90b3R5cGUuQjtJLnByb3RvdHlwZS5NYT1mdW5jdGlvbihhKXt0aGlzLmE9YX07SS5wcm90b3R5cGUuc2V0Q3Vyc29yPUkucHJvdG90eXBlLk1hO0kucHJvdG90eXBlLmFkdmFuY2U9ZnVuY3Rpb24oYSl7dGhpcy5hKz1hO24odGhpcy5hPD10aGlzLmMpfTtJLnByb3RvdHlwZS5hZHZhbmNlPUkucHJvdG90eXBlLmFkdmFuY2U7SS5wcm90b3R5cGUueWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hPT10aGlzLmN9O0kucHJvdG90eXBlLmF0RW5kPUkucHJvdG90eXBlLnlhO0kucHJvdG90eXBlLlFiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYT50aGlzLmN9O0kucHJvdG90eXBlLnBhc3RFbmQ9SS5wcm90b3R5cGUuUWI7XG5JLnByb3RvdHlwZS5nZXRFcnJvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZ8fDA+dGhpcy5hfHx0aGlzLmE+dGhpcy5jfTtJLnByb3RvdHlwZS5nZXRFcnJvcj1JLnByb3RvdHlwZS5nZXRFcnJvcjtJLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0xMjgsYz0wLGQ9MCxmPTA7ND5mJiYxMjg8PWI7ZisrKWI9dGhpcy5iW3RoaXMuYSsrXSxjfD0oYiYxMjcpPDw3KmY7MTI4PD1iJiYoYj10aGlzLmJbdGhpcy5hKytdLGN8PShiJjEyNyk8PDI4LGR8PShiJjEyNyk+PjQpO2lmKDEyODw9Yilmb3IoZj0wOzU+ZiYmMTI4PD1iO2YrKyliPXRoaXMuYlt0aGlzLmErK10sZHw9KGImMTI3KTw8NypmKzM7aWYoMTI4PmIpcmV0dXJuIGEoYz4+PjAsZD4+PjApO3AoXCJGYWlsZWQgdG8gcmVhZCB2YXJpbnQsIGVuY29kaW5nIGlzIGludmFsaWQuXCIpO3RoaXMudj0hMH07SS5wcm90b3R5cGUucmVhZFNwbGl0VmFyaW50NjQ9SS5wcm90b3R5cGUudztcbkkucHJvdG90eXBlLmVhPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLncoZnVuY3Rpb24oYixjKXtyZXR1cm4gTWEoYixjLGEpfSl9O0kucHJvdG90eXBlLnJlYWRTcGxpdFppZ3phZ1ZhcmludDY0PUkucHJvdG90eXBlLmVhO0kucHJvdG90eXBlLnRhPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYixjPXRoaXMuYTt0aGlzLmErPTg7Zm9yKHZhciBkPTAsZj0wLGg9Yys3O2g+PWM7aC0tKWQ9ZDw8OHxiW2hdLGY9Zjw8OHxiW2grNF07cmV0dXJuIGEoZCxmKX07SS5wcm90b3R5cGUucmVhZFNwbGl0Rml4ZWQ2ND1JLnByb3RvdHlwZS50YTtJLnByb3RvdHlwZS5rYj1mdW5jdGlvbigpe2Zvcig7dGhpcy5iW3RoaXMuYV0mMTI4Oyl0aGlzLmErKzt0aGlzLmErK307SS5wcm90b3R5cGUuc2tpcFZhcmludD1JLnByb3RvdHlwZS5rYjtJLnByb3RvdHlwZS5tYj1mdW5jdGlvbihhKXtmb3IoOzEyODxhOyl0aGlzLmEtLSxhPj4+PTc7dGhpcy5hLS19O0kucHJvdG90eXBlLnVuc2tpcFZhcmludD1JLnByb3RvdHlwZS5tYjtcbkkucHJvdG90eXBlLm89ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmI7dmFyIGI9YVt0aGlzLmFdO3ZhciBjPWImMTI3O2lmKDEyOD5iKXJldHVybiB0aGlzLmErPTEsbih0aGlzLmE8PXRoaXMuYyksYztiPWFbdGhpcy5hKzFdO2N8PShiJjEyNyk8PDc7aWYoMTI4PmIpcmV0dXJuIHRoaXMuYSs9MixuKHRoaXMuYTw9dGhpcy5jKSxjO2I9YVt0aGlzLmErMl07Y3w9KGImMTI3KTw8MTQ7aWYoMTI4PmIpcmV0dXJuIHRoaXMuYSs9MyxuKHRoaXMuYTw9dGhpcy5jKSxjO2I9YVt0aGlzLmErM107Y3w9KGImMTI3KTw8MjE7aWYoMTI4PmIpcmV0dXJuIHRoaXMuYSs9NCxuKHRoaXMuYTw9dGhpcy5jKSxjO2I9YVt0aGlzLmErNF07Y3w9KGImMTUpPDwyODtpZigxMjg+YilyZXR1cm4gdGhpcy5hKz01LG4odGhpcy5hPD10aGlzLmMpLGM+Pj4wO3RoaXMuYSs9NTsxMjg8PWFbdGhpcy5hKytdJiYxMjg8PWFbdGhpcy5hKytdJiYxMjg8PWFbdGhpcy5hKytdJiYxMjg8PWFbdGhpcy5hKytdJiYxMjg8PVxuYVt0aGlzLmErK10mJm4oITEpO24odGhpcy5hPD10aGlzLmMpO3JldHVybiBjfTtJLnByb3RvdHlwZS5yZWFkVW5zaWduZWRWYXJpbnQzMj1JLnByb3RvdHlwZS5vO0kucHJvdG90eXBlLmRhPWZ1bmN0aW9uKCl7cmV0dXJufn50aGlzLm8oKX07SS5wcm90b3R5cGUucmVhZFNpZ25lZFZhcmludDMyPUkucHJvdG90eXBlLmRhO0kucHJvdG90eXBlLk89ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vKCkudG9TdHJpbmcoKX07SS5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYSgpLnRvU3RyaW5nKCl9O0kucHJvdG90eXBlLnJlYWRTaWduZWRWYXJpbnQzMlN0cmluZz1JLnByb3RvdHlwZS5FYTtJLnByb3RvdHlwZS5JYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMubygpO3JldHVybiBhPj4+MV4tKGEmMSl9O0kucHJvdG90eXBlLnJlYWRaaWd6YWdWYXJpbnQzMj1JLnByb3RvdHlwZS5JYTtJLnByb3RvdHlwZS5HYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoRCl9O1xuSS5wcm90b3R5cGUucmVhZFVuc2lnbmVkVmFyaW50NjQ9SS5wcm90b3R5cGUuR2E7SS5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53KEYpfTtJLnByb3RvdHlwZS5yZWFkVW5zaWduZWRWYXJpbnQ2NFN0cmluZz1JLnByb3RvdHlwZS5IYTtJLnByb3RvdHlwZS5zYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoRSl9O0kucHJvdG90eXBlLnJlYWRTaWduZWRWYXJpbnQ2ND1JLnByb3RvdHlwZS5zYTtJLnByb3RvdHlwZS5GYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoRyl9O0kucHJvdG90eXBlLnJlYWRTaWduZWRWYXJpbnQ2NFN0cmluZz1JLnByb3RvdHlwZS5GYTtJLnByb3RvdHlwZS5KYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoS2EpfTtJLnByb3RvdHlwZS5yZWFkWmlnemFnVmFyaW50NjQ9SS5wcm90b3R5cGUuSmE7SS5wcm90b3R5cGUuZmI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYShQYSl9O1xuSS5wcm90b3R5cGUucmVhZFppZ3phZ1ZhcmludEhhc2g2ND1JLnByb3RvdHlwZS5mYjtJLnByb3RvdHlwZS5LYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhKEcpfTtJLnByb3RvdHlwZS5yZWFkWmlnemFnVmFyaW50NjRTdHJpbmc9SS5wcm90b3R5cGUuS2E7SS5wcm90b3R5cGUuR2M9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmJbdGhpcy5hXTt0aGlzLmErPTE7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuIGF9O0kucHJvdG90eXBlLnJlYWRVaW50OD1JLnByb3RvdHlwZS5HYztJLnByb3RvdHlwZS5FYz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdLGI9dGhpcy5iW3RoaXMuYSsxXTt0aGlzLmErPTI7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuIGE8PDB8Yjw8OH07SS5wcm90b3R5cGUucmVhZFVpbnQxNj1JLnByb3RvdHlwZS5FYztcbkkucHJvdG90eXBlLm09ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmJbdGhpcy5hXSxiPXRoaXMuYlt0aGlzLmErMV0sYz10aGlzLmJbdGhpcy5hKzJdLGQ9dGhpcy5iW3RoaXMuYSszXTt0aGlzLmErPTQ7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuKGE8PDB8Yjw8OHxjPDwxNnxkPDwyNCk+Pj4wfTtJLnByb3RvdHlwZS5yZWFkVWludDMyPUkucHJvdG90eXBlLm07SS5wcm90b3R5cGUuZ2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm0oKSxiPXRoaXMubSgpO3JldHVybiBEKGEsYil9O0kucHJvdG90eXBlLnJlYWRVaW50NjQ9SS5wcm90b3R5cGUuZ2E7SS5wcm90b3R5cGUuaGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm0oKSxiPXRoaXMubSgpO3JldHVybiBGKGEsYil9O0kucHJvdG90eXBlLnJlYWRVaW50NjRTdHJpbmc9SS5wcm90b3R5cGUuaGE7XG5JLnByb3RvdHlwZS5YYj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdO3RoaXMuYSs9MTtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4gYTw8MjQ+PjI0fTtJLnByb3RvdHlwZS5yZWFkSW50OD1JLnByb3RvdHlwZS5YYjtJLnByb3RvdHlwZS5WYj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdLGI9dGhpcy5iW3RoaXMuYSsxXTt0aGlzLmErPTI7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuKGE8PDB8Yjw8OCk8PDE2Pj4xNn07SS5wcm90b3R5cGUucmVhZEludDE2PUkucHJvdG90eXBlLlZiO0kucHJvdG90eXBlLlA9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmJbdGhpcy5hXSxiPXRoaXMuYlt0aGlzLmErMV0sYz10aGlzLmJbdGhpcy5hKzJdLGQ9dGhpcy5iW3RoaXMuYSszXTt0aGlzLmErPTQ7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuIGE8PDB8Yjw8OHxjPDwxNnxkPDwyNH07SS5wcm90b3R5cGUucmVhZEludDMyPUkucHJvdG90eXBlLlA7XG5JLnByb3RvdHlwZS5iYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMubSgpLGI9dGhpcy5tKCk7cmV0dXJuIEUoYSxiKX07SS5wcm90b3R5cGUucmVhZEludDY0PUkucHJvdG90eXBlLmJhO0kucHJvdG90eXBlLmNhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5tKCksYj10aGlzLm0oKTtyZXR1cm4gRyhhLGIpfTtJLnByb3RvdHlwZS5yZWFkSW50NjRTdHJpbmc9SS5wcm90b3R5cGUuY2E7SS5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm0oKTtyZXR1cm4gTmEoYSwwKX07SS5wcm90b3R5cGUucmVhZEZsb2F0PUkucHJvdG90eXBlLmFhO0kucHJvdG90eXBlLlo9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm0oKSxiPXRoaXMubSgpO3JldHVybiBPYShhLGIpfTtJLnByb3RvdHlwZS5yZWFkRG91YmxlPUkucHJvdG90eXBlLlo7SS5wcm90b3R5cGUucGE9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuYlt0aGlzLmErK119O0kucHJvdG90eXBlLnJlYWRCb29sPUkucHJvdG90eXBlLnBhO1xuSS5wcm90b3R5cGUucmE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYSgpfTtJLnByb3RvdHlwZS5yZWFkRW51bT1JLnByb3RvdHlwZS5yYTtcbkkucHJvdG90eXBlLmZhPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYixjPXRoaXMuYTthPWMrYTtmb3IodmFyIGQ9W10sZj1cIlwiO2M8YTspe3ZhciBoPWJbYysrXTtpZigxMjg+aClkLnB1c2goaCk7ZWxzZSBpZigxOTI+aCljb250aW51ZTtlbHNlIGlmKDIyND5oKXt2YXIgbT1iW2MrK107ZC5wdXNoKChoJjMxKTw8NnxtJjYzKX1lbHNlIGlmKDI0MD5oKXttPWJbYysrXTt2YXIgdD1iW2MrK107ZC5wdXNoKChoJjE1KTw8MTJ8KG0mNjMpPDw2fHQmNjMpfWVsc2UgaWYoMjQ4Pmgpe209YltjKytdO3Q9YltjKytdO3ZhciBCPWJbYysrXTtoPShoJjcpPDwxOHwobSY2Myk8PDEyfCh0JjYzKTw8NnxCJjYzO2gtPTY1NTM2O2QucHVzaCgoaD4+MTAmMTAyMykrNTUyOTYsKGgmMTAyMykrNTYzMjApfTgxOTI8PWQubGVuZ3RoJiYoZis9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGQpLGQubGVuZ3RoPTApfWYrPXhhKGQpO3RoaXMuYT1jO3JldHVybiBmfTtcbkkucHJvdG90eXBlLnJlYWRTdHJpbmc9SS5wcm90b3R5cGUuZmE7SS5wcm90b3R5cGUuRGM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm8oKTtyZXR1cm4gdGhpcy5mYShhKX07SS5wcm90b3R5cGUucmVhZFN0cmluZ1dpdGhMZW5ndGg9SS5wcm90b3R5cGUuRGM7SS5wcm90b3R5cGUucWE9ZnVuY3Rpb24oYSl7aWYoMD5hfHx0aGlzLmErYT50aGlzLmIubGVuZ3RoKXJldHVybiB0aGlzLnY9ITAscChcIkludmFsaWQgYnl0ZSBsZW5ndGghXCIpLG5ldyBVaW50OEFycmF5KDApO3ZhciBiPXRoaXMuYi5zdWJhcnJheSh0aGlzLmEsdGhpcy5hK2EpO3RoaXMuYSs9YTtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4gYn07SS5wcm90b3R5cGUucmVhZEJ5dGVzPUkucHJvdG90eXBlLnFhO0kucHJvdG90eXBlLmlhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudyhQYSl9O0kucHJvdG90eXBlLnJlYWRWYXJpbnRIYXNoNjQ9SS5wcm90b3R5cGUuaWE7XG5JLnByb3RvdHlwZS4kPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5iLGI9dGhpcy5hLGM9YVtiXSxkPWFbYisxXSxmPWFbYisyXSxoPWFbYiszXSxtPWFbYis0XSx0PWFbYis1XSxCPWFbYis2XTthPWFbYis3XTt0aGlzLmErPTg7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyxkLGYsaCxtLHQsQixhKX07SS5wcm90b3R5cGUucmVhZEZpeGVkSGFzaDY0PUkucHJvdG90eXBlLiQ7ZnVuY3Rpb24gSihhLGIsYyl7dGhpcy5hPVdhKGEsYixjKTt0aGlzLk89dGhpcy5hLkIoKTt0aGlzLmI9dGhpcy5jPS0xO3RoaXMuaD0hMTt0aGlzLnY9bnVsbH1nKFwianNwYi5CaW5hcnlSZWFkZXJcIixKLHZvaWQgMCk7dmFyIEs9W107Si5jbGVhckluc3RhbmNlQ2FjaGU9ZnVuY3Rpb24oKXtLPVtdfTtKLmdldEluc3RhbmNlQ2FjaGVMZW5ndGg9ZnVuY3Rpb24oKXtyZXR1cm4gSy5sZW5ndGh9O2Z1bmN0aW9uIFhhKGEsYixjKXtpZihLLmxlbmd0aCl7dmFyIGQ9Sy5wb3AoKTthJiZkLmEuSChhLGIsYyk7cmV0dXJuIGR9cmV0dXJuIG5ldyBKKGEsYixjKX1KLmFsbG9jPVhhO0oucHJvdG90eXBlLnpiPVhhO0oucHJvdG90eXBlLmFsbG9jPUoucHJvdG90eXBlLnpiO0oucHJvdG90eXBlLkNhPWZ1bmN0aW9uKCl7dGhpcy5hLmNsZWFyKCk7dGhpcy5iPXRoaXMuYz0tMTt0aGlzLmg9ITE7dGhpcy52PW51bGw7MTAwPksubGVuZ3RoJiZLLnB1c2godGhpcyl9O1xuSi5wcm90b3R5cGUuZnJlZT1KLnByb3RvdHlwZS5DYTtKLnByb3RvdHlwZS5GYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLk99O0oucHJvdG90eXBlLmdldEZpZWxkQ3Vyc29yPUoucHJvdG90eXBlLkZiO0oucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLkIoKX07Si5wcm90b3R5cGUuZ2V0Q3Vyc29yPUoucHJvdG90eXBlLkI7Si5wcm90b3R5cGUuWT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEuWSgpfTtKLnByb3RvdHlwZS5nZXRCdWZmZXI9Si5wcm90b3R5cGUuWTtKLnByb3RvdHlwZS5IYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O0oucHJvdG90eXBlLmdldEZpZWxkTnVtYmVyPUoucHJvdG90eXBlLkhiO0oucHJvdG90eXBlLkxiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYn07Si5wcm90b3R5cGUuZ2V0V2lyZVR5cGU9Si5wcm90b3R5cGUuTGI7Si5wcm90b3R5cGUuTWI9ZnVuY3Rpb24oKXtyZXR1cm4gMj09dGhpcy5ifTtcbkoucHJvdG90eXBlLmlzRGVsaW1pdGVkPUoucHJvdG90eXBlLk1iO0oucHJvdG90eXBlLmJiPWZ1bmN0aW9uKCl7cmV0dXJuIDQ9PXRoaXMuYn07Si5wcm90b3R5cGUuaXNFbmRHcm91cD1KLnByb3RvdHlwZS5iYjtKLnByb3RvdHlwZS5nZXRFcnJvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmh8fHRoaXMuYS5nZXRFcnJvcigpfTtKLnByb3RvdHlwZS5nZXRFcnJvcj1KLnByb3RvdHlwZS5nZXRFcnJvcjtKLnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmEuSChhLGIsYyk7dGhpcy5iPXRoaXMuYz0tMX07Si5wcm90b3R5cGUuc2V0QmxvY2s9Si5wcm90b3R5cGUuSDtKLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuYS5yZXNldCgpO3RoaXMuYj10aGlzLmM9LTF9O0oucHJvdG90eXBlLnJlc2V0PUoucHJvdG90eXBlLnJlc2V0O0oucHJvdG90eXBlLmFkdmFuY2U9ZnVuY3Rpb24oYSl7dGhpcy5hLmFkdmFuY2UoYSl9O0oucHJvdG90eXBlLmFkdmFuY2U9Si5wcm90b3R5cGUuYWR2YW5jZTtcbkoucHJvdG90eXBlLm9hPWZ1bmN0aW9uKCl7aWYodGhpcy5hLnlhKCkpcmV0dXJuITE7aWYodGhpcy5nZXRFcnJvcigpKXJldHVybiBwKFwiRGVjb2RlciBoaXQgYW4gZXJyb3JcIiksITE7dGhpcy5PPXRoaXMuYS5CKCk7dmFyIGE9dGhpcy5hLm8oKSxiPWE+Pj4zO2EmPTc7aWYoMCE9YSYmNSE9YSYmMSE9YSYmMiE9YSYmMyE9YSYmNCE9YSlyZXR1cm4gcChcIkludmFsaWQgd2lyZSB0eXBlOiAlcyAoYXQgcG9zaXRpb24gJXMpXCIsYSx0aGlzLk8pLHRoaXMuaD0hMCwhMTt0aGlzLmM9Yjt0aGlzLmI9YTtyZXR1cm4hMH07Si5wcm90b3R5cGUubmV4dEZpZWxkPUoucHJvdG90eXBlLm9hO0oucHJvdG90eXBlLk9hPWZ1bmN0aW9uKCl7dGhpcy5hLm1iKHRoaXMuYzw8M3x0aGlzLmIpfTtKLnByb3RvdHlwZS51bnNraXBIZWFkZXI9Si5wcm90b3R5cGUuT2E7XG5KLnByb3RvdHlwZS5MYz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYztmb3IodGhpcy5PYSgpO3RoaXMub2EoKSYmdGhpcy5jPT1hOyl0aGlzLkMoKTt0aGlzLmEueWEoKXx8dGhpcy5PYSgpfTtKLnByb3RvdHlwZS5za2lwTWF0Y2hpbmdGaWVsZHM9Si5wcm90b3R5cGUuTGM7Si5wcm90b3R5cGUubGI9ZnVuY3Rpb24oKXswIT10aGlzLmI/KHAoXCJJbnZhbGlkIHdpcmUgdHlwZSBmb3Igc2tpcFZhcmludEZpZWxkXCIpLHRoaXMuQygpKTp0aGlzLmEua2IoKX07Si5wcm90b3R5cGUuc2tpcFZhcmludEZpZWxkPUoucHJvdG90eXBlLmxiO0oucHJvdG90eXBlLmdiPWZ1bmN0aW9uKCl7aWYoMiE9dGhpcy5iKXAoXCJJbnZhbGlkIHdpcmUgdHlwZSBmb3Igc2tpcERlbGltaXRlZEZpZWxkXCIpLHRoaXMuQygpO2Vsc2V7dmFyIGE9dGhpcy5hLm8oKTt0aGlzLmEuYWR2YW5jZShhKX19O0oucHJvdG90eXBlLnNraXBEZWxpbWl0ZWRGaWVsZD1KLnByb3RvdHlwZS5nYjtcbkoucHJvdG90eXBlLmhiPWZ1bmN0aW9uKCl7NSE9dGhpcy5iPyhwKFwiSW52YWxpZCB3aXJlIHR5cGUgZm9yIHNraXBGaXhlZDMyRmllbGRcIiksdGhpcy5DKCkpOnRoaXMuYS5hZHZhbmNlKDQpfTtKLnByb3RvdHlwZS5za2lwRml4ZWQzMkZpZWxkPUoucHJvdG90eXBlLmhiO0oucHJvdG90eXBlLmliPWZ1bmN0aW9uKCl7MSE9dGhpcy5iPyhwKFwiSW52YWxpZCB3aXJlIHR5cGUgZm9yIHNraXBGaXhlZDY0RmllbGRcIiksdGhpcy5DKCkpOnRoaXMuYS5hZHZhbmNlKDgpfTtKLnByb3RvdHlwZS5za2lwRml4ZWQ2NEZpZWxkPUoucHJvdG90eXBlLmliO0oucHJvdG90eXBlLmpiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jO2Rve2lmKCF0aGlzLm9hKCkpe3AoXCJVbm1hdGNoZWQgc3RhcnQtZ3JvdXAgdGFnOiBzdHJlYW0gRU9GXCIpO3RoaXMuaD0hMDticmVha31pZig0PT10aGlzLmIpe3RoaXMuYyE9YSYmKHAoXCJVbm1hdGNoZWQgZW5kLWdyb3VwIHRhZ1wiKSx0aGlzLmg9ITApO2JyZWFrfXRoaXMuQygpfXdoaWxlKDEpfTtcbkoucHJvdG90eXBlLnNraXBHcm91cD1KLnByb3RvdHlwZS5qYjtKLnByb3RvdHlwZS5DPWZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMuYil7Y2FzZSAwOnRoaXMubGIoKTticmVhaztjYXNlIDE6dGhpcy5pYigpO2JyZWFrO2Nhc2UgMjp0aGlzLmdiKCk7YnJlYWs7Y2FzZSA1OnRoaXMuaGIoKTticmVhaztjYXNlIDM6dGhpcy5qYigpO2JyZWFrO2RlZmF1bHQ6cChcIkludmFsaWQgd2lyZSBlbmNvZGluZyBmb3IgZmllbGQuXCIpfX07Si5wcm90b3R5cGUuc2tpcEZpZWxkPUoucHJvdG90eXBlLkM7Si5wcm90b3R5cGUuSGM9ZnVuY3Rpb24oYSxiKXtudWxsPT09dGhpcy52JiYodGhpcy52PXt9KTtuKCF0aGlzLnZbYV0pO3RoaXMudlthXT1ifTtKLnByb3RvdHlwZS5yZWdpc3RlclJlYWRDYWxsYmFjaz1KLnByb3RvdHlwZS5IYztKLnByb3RvdHlwZS5JYz1mdW5jdGlvbihhKXtuKG51bGwhPT10aGlzLnYpO2E9dGhpcy52W2FdO24oYSk7cmV0dXJuIGEodGhpcyl9O1xuSi5wcm90b3R5cGUucnVuUmVhZENhbGxiYWNrPUoucHJvdG90eXBlLkljO0oucHJvdG90eXBlLlliPWZ1bmN0aW9uKGEsYil7bigyPT10aGlzLmIpO3ZhciBjPXRoaXMuYS5jLGQ9dGhpcy5hLm8oKTtkPXRoaXMuYS5CKCkrZDt0aGlzLmEuc2V0RW5kKGQpO2IoYSx0aGlzKTt0aGlzLmEuTWEoZCk7dGhpcy5hLnNldEVuZChjKX07Si5wcm90b3R5cGUucmVhZE1lc3NhZ2U9Si5wcm90b3R5cGUuWWI7Si5wcm90b3R5cGUuVWI9ZnVuY3Rpb24oYSxiLGMpe24oMz09dGhpcy5iKTtuKHRoaXMuYz09YSk7YyhiLHRoaXMpO3RoaXMuaHx8ND09dGhpcy5ifHwocChcIkdyb3VwIHN1Ym1lc3NhZ2UgZGlkIG5vdCBlbmQgd2l0aCBhbiBFTkRfR1JPVVAgdGFnXCIpLHRoaXMuaD0hMCl9O0oucHJvdG90eXBlLnJlYWRHcm91cD1KLnByb3RvdHlwZS5VYjtcbkoucHJvdG90eXBlLkdiPWZ1bmN0aW9uKCl7bigyPT10aGlzLmIpO3ZhciBhPXRoaXMuYS5vKCksYj10aGlzLmEuQigpLGM9YithO2E9V2EodGhpcy5hLlkoKSxiLGEpO3RoaXMuYS5NYShjKTtyZXR1cm4gYX07Si5wcm90b3R5cGUuZ2V0RmllbGREZWNvZGVyPUoucHJvdG90eXBlLkdiO0oucHJvdG90eXBlLlA9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5kYSgpfTtKLnByb3RvdHlwZS5yZWFkSW50MzI9Si5wcm90b3R5cGUuUDtKLnByb3RvdHlwZS5XYj1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLkVhKCl9O0oucHJvdG90eXBlLnJlYWRJbnQzMlN0cmluZz1KLnByb3RvdHlwZS5XYjtKLnByb3RvdHlwZS5iYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLnNhKCl9O0oucHJvdG90eXBlLnJlYWRJbnQ2ND1KLnByb3RvdHlwZS5iYTtKLnByb3RvdHlwZS5jYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLkZhKCl9O1xuSi5wcm90b3R5cGUucmVhZEludDY0U3RyaW5nPUoucHJvdG90eXBlLmNhO0oucHJvdG90eXBlLm09ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5vKCl9O0oucHJvdG90eXBlLnJlYWRVaW50MzI9Si5wcm90b3R5cGUubTtKLnByb3RvdHlwZS5GYz1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLk8oKX07Si5wcm90b3R5cGUucmVhZFVpbnQzMlN0cmluZz1KLnByb3RvdHlwZS5GYztKLnByb3RvdHlwZS5nYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLkdhKCl9O0oucHJvdG90eXBlLnJlYWRVaW50NjQ9Si5wcm90b3R5cGUuZ2E7Si5wcm90b3R5cGUuaGE9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5IYSgpfTtKLnByb3RvdHlwZS5yZWFkVWludDY0U3RyaW5nPUoucHJvdG90eXBlLmhhO0oucHJvdG90eXBlLnpjPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuSWEoKX07XG5KLnByb3RvdHlwZS5yZWFkU2ludDMyPUoucHJvdG90eXBlLnpjO0oucHJvdG90eXBlLkFjPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuSmEoKX07Si5wcm90b3R5cGUucmVhZFNpbnQ2ND1KLnByb3RvdHlwZS5BYztKLnByb3RvdHlwZS5CYz1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLkthKCl9O0oucHJvdG90eXBlLnJlYWRTaW50NjRTdHJpbmc9Si5wcm90b3R5cGUuQmM7Si5wcm90b3R5cGUuUmI9ZnVuY3Rpb24oKXtuKDU9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5tKCl9O0oucHJvdG90eXBlLnJlYWRGaXhlZDMyPUoucHJvdG90eXBlLlJiO0oucHJvdG90eXBlLlNiPWZ1bmN0aW9uKCl7bigxPT10aGlzLmIpO3JldHVybiB0aGlzLmEuZ2EoKX07Si5wcm90b3R5cGUucmVhZEZpeGVkNjQ9Si5wcm90b3R5cGUuU2I7Si5wcm90b3R5cGUuVGI9ZnVuY3Rpb24oKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5oYSgpfTtcbkoucHJvdG90eXBlLnJlYWRGaXhlZDY0U3RyaW5nPUoucHJvdG90eXBlLlRiO0oucHJvdG90eXBlLnZjPWZ1bmN0aW9uKCl7big1PT10aGlzLmIpO3JldHVybiB0aGlzLmEuUCgpfTtKLnByb3RvdHlwZS5yZWFkU2ZpeGVkMzI9Si5wcm90b3R5cGUudmM7Si5wcm90b3R5cGUud2M9ZnVuY3Rpb24oKXtuKDU9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5QKCkudG9TdHJpbmcoKX07Si5wcm90b3R5cGUucmVhZFNmaXhlZDMyU3RyaW5nPUoucHJvdG90eXBlLndjO0oucHJvdG90eXBlLnhjPWZ1bmN0aW9uKCl7bigxPT10aGlzLmIpO3JldHVybiB0aGlzLmEuYmEoKX07Si5wcm90b3R5cGUucmVhZFNmaXhlZDY0PUoucHJvdG90eXBlLnhjO0oucHJvdG90eXBlLnljPWZ1bmN0aW9uKCl7bigxPT10aGlzLmIpO3JldHVybiB0aGlzLmEuY2EoKX07Si5wcm90b3R5cGUucmVhZFNmaXhlZDY0U3RyaW5nPUoucHJvdG90eXBlLnljO1xuSi5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oKXtuKDU9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5hYSgpfTtKLnByb3RvdHlwZS5yZWFkRmxvYXQ9Si5wcm90b3R5cGUuYWE7Si5wcm90b3R5cGUuWj1mdW5jdGlvbigpe24oMT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLlooKX07Si5wcm90b3R5cGUucmVhZERvdWJsZT1KLnByb3RvdHlwZS5aO0oucHJvdG90eXBlLnBhPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiEhdGhpcy5hLm8oKX07Si5wcm90b3R5cGUucmVhZEJvb2w9Si5wcm90b3R5cGUucGE7Si5wcm90b3R5cGUucmE9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5zYSgpfTtKLnByb3RvdHlwZS5yZWFkRW51bT1KLnByb3RvdHlwZS5yYTtKLnByb3RvdHlwZS5mYT1mdW5jdGlvbigpe24oMj09dGhpcy5iKTt2YXIgYT10aGlzLmEubygpO3JldHVybiB0aGlzLmEuZmEoYSl9O0oucHJvdG90eXBlLnJlYWRTdHJpbmc9Si5wcm90b3R5cGUuZmE7XG5KLnByb3RvdHlwZS5xYT1mdW5jdGlvbigpe24oMj09dGhpcy5iKTt2YXIgYT10aGlzLmEubygpO3JldHVybiB0aGlzLmEucWEoYSl9O0oucHJvdG90eXBlLnJlYWRCeXRlcz1KLnByb3RvdHlwZS5xYTtKLnByb3RvdHlwZS5pYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLmlhKCl9O0oucHJvdG90eXBlLnJlYWRWYXJpbnRIYXNoNjQ9Si5wcm90b3R5cGUuaWE7Si5wcm90b3R5cGUuQ2M9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5mYigpfTtKLnByb3RvdHlwZS5yZWFkU2ludEhhc2g2ND1KLnByb3RvdHlwZS5DYztKLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLncoYSl9O0oucHJvdG90eXBlLnJlYWRTcGxpdFZhcmludDY0PUoucHJvdG90eXBlLnc7XG5KLnByb3RvdHlwZS5lYT1mdW5jdGlvbihhKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS53KGZ1bmN0aW9uKGIsYyl7cmV0dXJuIE1hKGIsYyxhKX0pfTtKLnByb3RvdHlwZS5yZWFkU3BsaXRaaWd6YWdWYXJpbnQ2ND1KLnByb3RvdHlwZS5lYTtKLnByb3RvdHlwZS4kPWZ1bmN0aW9uKCl7bigxPT10aGlzLmIpO3JldHVybiB0aGlzLmEuJCgpfTtKLnByb3RvdHlwZS5yZWFkRml4ZWRIYXNoNjQ9Si5wcm90b3R5cGUuJDtKLnByb3RvdHlwZS50YT1mdW5jdGlvbihhKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS50YShhKX07Si5wcm90b3R5cGUucmVhZFNwbGl0Rml4ZWQ2ND1KLnByb3RvdHlwZS50YTtmdW5jdGlvbiBMKGEsYil7bigyPT1hLmIpO3ZhciBjPWEuYS5vKCk7Yz1hLmEuQigpK2M7Zm9yKHZhciBkPVtdO2EuYS5CKCk8YzspZC5wdXNoKGIuY2FsbChhLmEpKTtyZXR1cm4gZH1KLnByb3RvdHlwZS5nYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmRhKX07XG5KLnByb3RvdHlwZS5yZWFkUGFja2VkSW50MzI9Si5wcm90b3R5cGUuZ2M7Si5wcm90b3R5cGUuaGM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5FYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRJbnQzMlN0cmluZz1KLnByb3RvdHlwZS5oYztKLnByb3RvdHlwZS5pYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLnNhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEludDY0PUoucHJvdG90eXBlLmljO0oucHJvdG90eXBlLmpjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuRmEpfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkSW50NjRTdHJpbmc9Si5wcm90b3R5cGUuamM7Si5wcm90b3R5cGUucWM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5vKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFVpbnQzMj1KLnByb3RvdHlwZS5xYztKLnByb3RvdHlwZS5yYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLk8pfTtcbkoucHJvdG90eXBlLnJlYWRQYWNrZWRVaW50MzJTdHJpbmc9Si5wcm90b3R5cGUucmM7Si5wcm90b3R5cGUuc2M9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5HYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRVaW50NjQ9Si5wcm90b3R5cGUuc2M7Si5wcm90b3R5cGUudGM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5IYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRVaW50NjRTdHJpbmc9Si5wcm90b3R5cGUudGM7Si5wcm90b3R5cGUubmM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5JYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRTaW50MzI9Si5wcm90b3R5cGUubmM7Si5wcm90b3R5cGUub2M9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5KYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRTaW50NjQ9Si5wcm90b3R5cGUub2M7Si5wcm90b3R5cGUucGM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5LYSl9O1xuSi5wcm90b3R5cGUucmVhZFBhY2tlZFNpbnQ2NFN0cmluZz1KLnByb3RvdHlwZS5wYztKLnByb3RvdHlwZS5iYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLm0pfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkRml4ZWQzMj1KLnByb3RvdHlwZS5iYztKLnByb3RvdHlwZS5jYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmdhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEZpeGVkNjQ9Si5wcm90b3R5cGUuY2M7Si5wcm90b3R5cGUuZGM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5oYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRGaXhlZDY0U3RyaW5nPUoucHJvdG90eXBlLmRjO0oucHJvdG90eXBlLmtjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuUCl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRTZml4ZWQzMj1KLnByb3RvdHlwZS5rYztKLnByb3RvdHlwZS5sYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmJhKX07XG5KLnByb3RvdHlwZS5yZWFkUGFja2VkU2ZpeGVkNjQ9Si5wcm90b3R5cGUubGM7Si5wcm90b3R5cGUubWM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5jYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRTZml4ZWQ2NFN0cmluZz1KLnByb3RvdHlwZS5tYztKLnByb3RvdHlwZS5mYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmFhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEZsb2F0PUoucHJvdG90eXBlLmZjO0oucHJvdG90eXBlLiRiPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuWil9O0oucHJvdG90eXBlLnJlYWRQYWNrZWREb3VibGU9Si5wcm90b3R5cGUuJGI7Si5wcm90b3R5cGUuWmI9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5wYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRCb29sPUoucHJvdG90eXBlLlpiO0oucHJvdG90eXBlLmFjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEucmEpfTtcbkoucHJvdG90eXBlLnJlYWRQYWNrZWRFbnVtPUoucHJvdG90eXBlLmFjO0oucHJvdG90eXBlLnVjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuaWEpfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkVmFyaW50SGFzaDY0PUoucHJvdG90eXBlLnVjO0oucHJvdG90eXBlLmVjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuJCl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRGaXhlZEhhc2g2ND1KLnByb3RvdHlwZS5lYztmdW5jdGlvbiBZYShhLGIsYyxkLGYpe3RoaXMubWE9YTt0aGlzLkJhPWI7dGhpcy5sYT1jO3RoaXMuTmE9ZDt0aGlzLm5hPWZ9ZyhcImpzcGIuRXh0ZW5zaW9uRmllbGRJbmZvXCIsWWEsdm9pZCAwKTtmdW5jdGlvbiBaYShhLGIsYyxkLGYsaCl7dGhpcy5aYT1hO3RoaXMuemE9Yjt0aGlzLkFhPWM7dGhpcy5XYT1kO3RoaXMuQWI9Zjt0aGlzLk5iPWh9ZyhcImpzcGIuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvXCIsWmEsdm9pZCAwKTtZYS5wcm90b3R5cGUuRj1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5sYX07WWEucHJvdG90eXBlLmlzTWVzc2FnZVR5cGU9WWEucHJvdG90eXBlLkY7ZnVuY3Rpb24gTigpe31nKFwianNwYi5NZXNzYWdlXCIsTix2b2lkIDApO04uR0VORVJBVEVfVE9fT0JKRUNUPSEwO04uR0VORVJBVEVfRlJPTV9PQkpFQ1Q9ITA7dmFyICRhPVwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4QXJyYXk7Ti5wcm90b3R5cGUuSWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtcbk4ucHJvdG90eXBlLmdldEpzUGJNZXNzYWdlSWQ9Ti5wcm90b3R5cGUuSWI7XG5OLmluaXRpYWxpemU9ZnVuY3Rpb24oYSxiLGMsZCxmLGgpe2EuZj1udWxsO2J8fChiPWM/W2NdOltdKTthLmI9Yz9TdHJpbmcoYyk6dm9pZCAwO2EuRD0wPT09Yz8tMTowO2EudT1iO2E6e2M9YS51Lmxlbmd0aDtiPS0xO2lmKGMmJihiPWMtMSxjPWEudVtiXSwhKG51bGw9PT1jfHxcIm9iamVjdFwiIT10eXBlb2YgY3x8QXJyYXkuaXNBcnJheShjKXx8JGEmJmMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkpe2EuRz1iLWEuRDthLmk9YzticmVhayBhfS0xPGQ/KGEuRz1NYXRoLm1heChkLGIrMS1hLkQpLGEuaT1udWxsKTphLkc9TnVtYmVyLk1BWF9WQUxVRX1hLmE9e307aWYoZilmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKWI9ZltkXSxiPGEuRz8oYis9YS5ELGEudVtiXT1hLnVbYl18fGFiKTooYmIoYSksYS5pW2JdPWEuaVtiXXx8YWIpO2lmKGgmJmgubGVuZ3RoKWZvcihkPTA7ZDxoLmxlbmd0aDtkKyspY2IoYSxoW2RdKX07XG52YXIgYWI9T2JqZWN0LmZyZWV6ZT9PYmplY3QuZnJlZXplKFtdKTpbXTtmdW5jdGlvbiBiYihhKXt2YXIgYj1hLkcrYS5EO2EudVtiXXx8KGEuaT1hLnVbYl09e30pfWZ1bmN0aW9uIGRiKGEsYixjKXtmb3IodmFyIGQ9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKWRbZl09Yi5jYWxsKGFbZl0sYyxhW2ZdKTtyZXR1cm4gZH1OLnRvT2JqZWN0TGlzdD1kYjtOLnRvT2JqZWN0RXh0ZW5zaW9uPWZ1bmN0aW9uKGEsYixjLGQsZil7Zm9yKHZhciBoIGluIGMpe3ZhciBtPWNbaF0sdD1kLmNhbGwoYSxtKTtpZihudWxsIT10KXtmb3IodmFyIEIgaW4gbS5CYSlpZihtLkJhLmhhc093blByb3BlcnR5KEIpKWJyZWFrO2JbQl09bS5OYT9tLm5hP2RiKHQsbS5OYSxmKTptLk5hKGYsdCk6dH19fTtcbk4uc2VyaWFsaXplQmluYXJ5RXh0ZW5zaW9ucz1mdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGYgaW4gYyl7dmFyIGg9Y1tmXSxtPWguWmE7aWYoIWguQWEpdGhyb3cgRXJyb3IoXCJNZXNzYWdlIGV4dGVuc2lvbiBwcmVzZW50IHRoYXQgd2FzIGdlbmVyYXRlZCB3aXRob3V0IGJpbmFyeSBzZXJpYWxpemF0aW9uIHN1cHBvcnRcIik7dmFyIHQ9ZC5jYWxsKGEsbSk7aWYobnVsbCE9dClpZihtLkYoKSlpZihoLldhKWguQWEuY2FsbChiLG0ubWEsdCxoLldhKTtlbHNlIHRocm93IEVycm9yKFwiTWVzc2FnZSBleHRlbnNpb24gcHJlc2VudCBob2xkaW5nIHN1Ym1lc3NhZ2Ugd2l0aG91dCBiaW5hcnkgc3VwcG9ydCBlbmFibGVkLCBhbmQgbWVzc2FnZSBpcyBiZWluZyBzZXJpYWxpemVkIHRvIGJpbmFyeSBmb3JtYXRcIik7ZWxzZSBoLkFhLmNhbGwoYixtLm1hLHQpfX07XG5OLnJlYWRCaW5hcnlFeHRlbnNpb249ZnVuY3Rpb24oYSxiLGMsZCxmKXt2YXIgaD1jW2IuY107aWYoaCl7Yz1oLlphO2lmKCFoLnphKXRocm93IEVycm9yKFwiRGVzZXJpYWxpemluZyBleHRlbnNpb24gd2hvc2UgZ2VuZXJhdGVkIGNvZGUgZG9lcyBub3Qgc3VwcG9ydCBiaW5hcnkgZm9ybWF0XCIpO2lmKGMuRigpKXt2YXIgbT1uZXcgYy5sYTtoLnphLmNhbGwoYixtLGguQWIpfWVsc2UgbT1oLnphLmNhbGwoYik7Yy5uYSYmIWguTmI/KGI9ZC5jYWxsKGEsYykpP2IucHVzaChtKTpmLmNhbGwoYSxjLFttXSk6Zi5jYWxsKGEsYyxtKX1lbHNlIGIuQygpfTtmdW5jdGlvbiBPKGEsYil7aWYoYjxhLkcpe2IrPWEuRDt2YXIgYz1hLnVbYl07cmV0dXJuIGM9PT1hYj9hLnVbYl09W106Y31pZihhLmkpcmV0dXJuIGM9YS5pW2JdLGM9PT1hYj9hLmlbYl09W106Y31OLmdldEZpZWxkPU87Ti5nZXRSZXBlYXRlZEZpZWxkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE8oYSxiKX07XG5mdW5jdGlvbiBlYihhLGIpe2E9TyhhLGIpO3JldHVybiBudWxsPT1hP2E6K2F9Ti5nZXRPcHRpb25hbEZsb2F0aW5nUG9pbnRGaWVsZD1lYjtmdW5jdGlvbiBmYihhLGIpe2E9TyhhLGIpO3JldHVybiBudWxsPT1hP2E6ISFhfU4uZ2V0Qm9vbGVhbkZpZWxkPWZiO04uZ2V0UmVwZWF0ZWRGbG9hdGluZ1BvaW50RmllbGQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1PKGEsYik7YS5hfHwoYS5hPXt9KTtpZighYS5hW2JdKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyljW2RdPStjW2RdO2EuYVtiXT0hMH1yZXR1cm4gY307Ti5nZXRSZXBlYXRlZEJvb2xlYW5GaWVsZD1mdW5jdGlvbihhLGIpe3ZhciBjPU8oYSxiKTthLmF8fChhLmE9e30pO2lmKCFhLmFbYl0pe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF09ISFjW2RdO2EuYVtiXT0hMH1yZXR1cm4gY307XG5mdW5jdGlvbiBnYihhKXtpZihudWxsPT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7aWYoJGEmJmEgaW5zdGFuY2VvZiBVaW50OEFycmF5KXJldHVybiBCYShhKTtwKFwiQ2Fubm90IGNvZXJjZSB0byBiNjQgc3RyaW5nOiBcIitrKGEpKTtyZXR1cm4gbnVsbH1OLmJ5dGVzQXNCNjQ9Z2I7ZnVuY3Rpb24gaGIoYSl7aWYobnVsbD09YXx8YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIGE7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBEYShhKTtwKFwiQ2Fubm90IGNvZXJjZSB0byBVaW50OEFycmF5OiBcIitrKGEpKTtyZXR1cm4gbnVsbH1OLmJ5dGVzQXNVOD1oYjtOLmJ5dGVzTGlzdEFzQjY0PWZ1bmN0aW9uKGEpe2liKGEpO3JldHVybiBhLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXR5cGVvZiBhWzBdP2woYSxnYik6YX07Ti5ieXRlc0xpc3RBc1U4PWZ1bmN0aW9uKGEpe2liKGEpO3JldHVybiFhLmxlbmd0aHx8YVswXWluc3RhbmNlb2YgVWludDhBcnJheT9hOmwoYSxoYil9O1xuZnVuY3Rpb24gaWIoYSl7aWYoYSYmMTxhLmxlbmd0aCl7dmFyIGI9ayhhWzBdKTtxYShhLGZ1bmN0aW9uKGMpe2soYykhPWImJnAoXCJJbmNvbnNpc3RlbnQgdHlwZSBpbiBKU1BCIHJlcGVhdGVkIGZpZWxkIGFycmF5LiBHb3QgXCIrayhjKStcIiBleHBlY3RlZCBcIitiKX0pfX1mdW5jdGlvbiBqYihhLGIsYyl7YT1PKGEsYik7cmV0dXJuIG51bGw9PWE/YzphfU4uZ2V0RmllbGRXaXRoRGVmYXVsdD1qYjtOLmdldEJvb2xlYW5GaWVsZFdpdGhEZWZhdWx0PWZ1bmN0aW9uKGEsYixjKXthPWZiKGEsYik7cmV0dXJuIG51bGw9PWE/YzphfTtOLmdldEZsb2F0aW5nUG9pbnRGaWVsZFdpdGhEZWZhdWx0PWZ1bmN0aW9uKGEsYixjKXthPWViKGEsYik7cmV0dXJuIG51bGw9PWE/YzphfTtOLmdldEZpZWxkUHJvdG8zPWpiO1xuTi5nZXRNYXBGaWVsZD1mdW5jdGlvbihhLGIsYyxkKXthLmZ8fChhLmY9e30pO2lmKGIgaW4gYS5mKXJldHVybiBhLmZbYl07dmFyIGY9TyhhLGIpO2lmKCFmKXtpZihjKXJldHVybjtmPVtdO1AoYSxiLGYpfXJldHVybiBhLmZbYl09bmV3IHIoZixkKX07ZnVuY3Rpb24gUChhLGIsYyl7cShhLE4pO2I8YS5HP2EudVtiK2EuRF09YzooYmIoYSksYS5pW2JdPWMpO3JldHVybiBhfU4uc2V0RmllbGQ9UDtOLnNldFByb3RvM0ludEZpZWxkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYywwKX07Ti5zZXRQcm90bzNGbG9hdEZpZWxkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYywwKX07Ti5zZXRQcm90bzNCb29sZWFuRmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLCExKX07Ti5zZXRQcm90bzNTdHJpbmdGaWVsZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFEoYSxiLGMsXCJcIil9O1xuTi5zZXRQcm90bzNCeXRlc0ZpZWxkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYyxcIlwiKX07Ti5zZXRQcm90bzNFbnVtRmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLDApfTtOLnNldFByb3RvM1N0cmluZ0ludEZpZWxkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYyxcIjBcIil9O2Z1bmN0aW9uIFEoYSxiLGMsZCl7cShhLE4pO2MhPT1kP1AoYSxiLGMpOmI8YS5HP2EudVtiK2EuRF09bnVsbDooYmIoYSksZGVsZXRlIGEuaVtiXSk7cmV0dXJuIGF9Ti5hZGRUb1JlcGVhdGVkRmllbGQ9ZnVuY3Rpb24oYSxiLGMsZCl7cShhLE4pO2I9TyhhLGIpO3ZvaWQgMCE9ZD9iLnNwbGljZShkLDAsYyk6Yi5wdXNoKGMpO3JldHVybiBhfTtmdW5jdGlvbiBrYihhLGIsYyxkKXtxKGEsTik7KGM9Y2IoYSxjKSkmJmMhPT1iJiZ2b2lkIDAhPT1kJiYoYS5mJiZjIGluIGEuZiYmKGEuZltjXT12b2lkIDApLFAoYSxjLHZvaWQgMCkpO3JldHVybiBQKGEsYixkKX1cbk4uc2V0T25lb2ZGaWVsZD1rYjtmdW5jdGlvbiBjYihhLGIpe2Zvcih2YXIgYyxkLGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGg9YltmXSxtPU8oYSxoKTtudWxsIT1tJiYoYz1oLGQ9bSxQKGEsaCx2b2lkIDApKX1yZXR1cm4gYz8oUChhLGMsZCksYyk6MH1OLmNvbXB1dGVPbmVvZkNhc2U9Y2I7Ti5nZXRXcmFwcGVyRmllbGQ9ZnVuY3Rpb24oYSxiLGMsZCl7YS5mfHwoYS5mPXt9KTtpZighYS5mW2NdKXt2YXIgZj1PKGEsYyk7aWYoZHx8ZilhLmZbY109bmV3IGIoZil9cmV0dXJuIGEuZltjXX07Ti5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyl7bGIoYSxiLGMpO2I9YS5mW2NdO2I9PWFiJiYoYj1hLmZbY109W10pO3JldHVybiBifTtmdW5jdGlvbiBsYihhLGIsYyl7YS5mfHwoYS5mPXt9KTtpZighYS5mW2NdKXtmb3IodmFyIGQ9TyhhLGMpLGY9W10saD0wO2g8ZC5sZW5ndGg7aCsrKWZbaF09bmV3IGIoZFtoXSk7YS5mW2NdPWZ9fVxuTi5zZXRXcmFwcGVyRmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3EoYSxOKTthLmZ8fChhLmY9e30pO3ZhciBkPWM/Yy5nKCk6YzthLmZbYl09YztyZXR1cm4gUChhLGIsZCl9O04uc2V0T25lb2ZXcmFwcGVyRmllbGQ9ZnVuY3Rpb24oYSxiLGMsZCl7cShhLE4pO2EuZnx8KGEuZj17fSk7dmFyIGY9ZD9kLmcoKTpkO2EuZltiXT1kO3JldHVybiBrYihhLGIsYyxmKX07Ti5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyl7cShhLE4pO2EuZnx8KGEuZj17fSk7Yz1jfHxbXTtmb3IodmFyIGQ9W10sZj0wO2Y8Yy5sZW5ndGg7ZisrKWRbZl09Y1tmXS5nKCk7YS5mW2JdPWM7cmV0dXJuIFAoYSxiLGQpfTtcbk4uYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyxkLGYpe2xiKGEsZCxiKTt2YXIgaD1hLmZbYl07aHx8KGg9YS5mW2JdPVtdKTtjPWM/YzpuZXcgZDthPU8oYSxiKTt2b2lkIDAhPWY/KGguc3BsaWNlKGYsMCxjKSxhLnNwbGljZShmLDAsYy5nKCkpKTooaC5wdXNoKGMpLGEucHVzaChjLmcoKSkpO3JldHVybiBjfTtOLnRvTWFwPWZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZj17fSxoPTA7aDxhLmxlbmd0aDtoKyspZltiLmNhbGwoYVtoXSldPWM/Yy5jYWxsKGFbaF0sZCxhW2hdKTphW2hdO3JldHVybiBmfTtmdW5jdGlvbiBtYihhKXtpZihhLmYpZm9yKHZhciBiIGluIGEuZil7dmFyIGM9YS5mW2JdO2lmKEFycmF5LmlzQXJyYXkoYykpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspY1tkXSYmY1tkXS5nKCk7ZWxzZSBjJiZjLmcoKX19Ti5wcm90b3R5cGUuZz1mdW5jdGlvbigpe21iKHRoaXMpO3JldHVybiB0aGlzLnV9O1xuTi5wcm90b3R5cGUudG9BcnJheT1OLnByb3RvdHlwZS5nO04ucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7bWIodGhpcyk7cmV0dXJuIHRoaXMudS50b1N0cmluZygpfTtOLnByb3RvdHlwZS5nZXRFeHRlbnNpb249ZnVuY3Rpb24oYSl7aWYodGhpcy5pKXt0aGlzLmZ8fCh0aGlzLmY9e30pO3ZhciBiPWEubWE7aWYoYS5uYSl7aWYoYS5GKCkpcmV0dXJuIHRoaXMuZltiXXx8KHRoaXMuZltiXT1sKHRoaXMuaVtiXXx8W10sZnVuY3Rpb24oYyl7cmV0dXJuIG5ldyBhLmxhKGMpfSkpLHRoaXMuZltiXX1lbHNlIGlmKGEuRigpKXJldHVybiF0aGlzLmZbYl0mJnRoaXMuaVtiXSYmKHRoaXMuZltiXT1uZXcgYS5sYSh0aGlzLmlbYl0pKSx0aGlzLmZbYl07cmV0dXJuIHRoaXMuaVtiXX19O04ucHJvdG90eXBlLmdldEV4dGVuc2lvbj1OLnByb3RvdHlwZS5nZXRFeHRlbnNpb247XG5OLnByb3RvdHlwZS5LYz1mdW5jdGlvbihhLGIpe3RoaXMuZnx8KHRoaXMuZj17fSk7YmIodGhpcyk7dmFyIGM9YS5tYTthLm5hPyhiPWJ8fFtdLGEuRigpPyh0aGlzLmZbY109Yix0aGlzLmlbY109bChiLGZ1bmN0aW9uKGQpe3JldHVybiBkLmcoKX0pKTp0aGlzLmlbY109Yik6YS5GKCk/KHRoaXMuZltjXT1iLHRoaXMuaVtjXT1iP2IuZygpOmIpOnRoaXMuaVtjXT1iO3JldHVybiB0aGlzfTtOLnByb3RvdHlwZS5zZXRFeHRlbnNpb249Ti5wcm90b3R5cGUuS2M7Ti5kaWZmZXJlbmNlPWZ1bmN0aW9uKGEsYil7aWYoIShhIGluc3RhbmNlb2YgYi5jb25zdHJ1Y3RvcikpdGhyb3cgRXJyb3IoXCJNZXNzYWdlcyBoYXZlIGRpZmZlcmVudCB0eXBlcy5cIik7dmFyIGM9YS5nKCk7Yj1iLmcoKTt2YXIgZD1bXSxmPTAsaD1jLmxlbmd0aD5iLmxlbmd0aD9jLmxlbmd0aDpiLmxlbmd0aDthLmImJihkWzBdPWEuYixmPTEpO2Zvcig7ZjxoO2YrKyluYihjW2ZdLGJbZl0pfHwoZFtmXT1iW2ZdKTtyZXR1cm4gbmV3IGEuY29uc3RydWN0b3IoZCl9O1xuTi5lcXVhbHM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09Ynx8ISghYXx8IWIpJiZhIGluc3RhbmNlb2YgYi5jb25zdHJ1Y3RvciYmbmIoYS5nKCksYi5nKCkpfTtmdW5jdGlvbiBvYihhLGIpe2E9YXx8e307Yj1ifHx7fTt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT0wO2ZvcihkIGluIGIpY1tkXT0wO2ZvcihkIGluIGMpaWYoIW5iKGFbZF0sYltkXSkpcmV0dXJuITE7cmV0dXJuITB9Ti5jb21wYXJlRXh0ZW5zaW9ucz1vYjtcbmZ1bmN0aW9uIG5iKGEsYil7aWYoYT09YilyZXR1cm4hMDtpZighbGEoYSl8fCFsYShiKSlyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGEmJmlzTmFOKGEpfHxcIm51bWJlclwiPT09dHlwZW9mIGImJmlzTmFOKGIpP1N0cmluZyhhKT09U3RyaW5nKGIpOiExO2lmKGEuY29uc3RydWN0b3IhPWIuY29uc3RydWN0b3IpcmV0dXJuITE7aWYoJGEmJmEuY29uc3RydWN0b3I9PT1VaW50OEFycmF5KXtpZihhLmxlbmd0aCE9Yi5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYVtjXSE9YltjXSlyZXR1cm4hMTtyZXR1cm4hMH1pZihhLmNvbnN0cnVjdG9yPT09QXJyYXkpe3ZhciBkPXZvaWQgMCxmPXZvaWQgMCxoPU1hdGgubWF4KGEubGVuZ3RoLGIubGVuZ3RoKTtmb3IoYz0wO2M8aDtjKyspe3ZhciBtPWFbY10sdD1iW2NdO20mJm0uY29uc3RydWN0b3I9PU9iamVjdCYmKG4odm9pZCAwPT09ZCksbihjPT09YS5sZW5ndGgtMSksZD1tLG09dm9pZCAwKTt0JiZ0LmNvbnN0cnVjdG9yPT1cbk9iamVjdCYmKG4odm9pZCAwPT09ZiksbihjPT09Yi5sZW5ndGgtMSksZj10LHQ9dm9pZCAwKTtpZighbmIobSx0KSlyZXR1cm4hMX1yZXR1cm4gZHx8Zj8oZD1kfHx7fSxmPWZ8fHt9LG9iKGQsZikpOiEwfWlmKGEuY29uc3RydWN0b3I9PT1PYmplY3QpcmV0dXJuIG9iKGEsYik7dGhyb3cgRXJyb3IoXCJJbnZhbGlkIHR5cGUgaW4gSlNQQiBhcnJheVwiKTt9Ti5jb21wYXJlRmllbGRzPW5iO04ucHJvdG90eXBlLkJiPWZ1bmN0aW9uKCl7cmV0dXJuIHBiKHRoaXMpfTtOLnByb3RvdHlwZS5jbG9uZU1lc3NhZ2U9Ti5wcm90b3R5cGUuQmI7Ti5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gcGIodGhpcyl9O04ucHJvdG90eXBlLmNsb25lPU4ucHJvdG90eXBlLmNsb25lO04uY2xvbmU9ZnVuY3Rpb24oYSl7cmV0dXJuIHBiKGEpfTtmdW5jdGlvbiBwYihhKXtyZXR1cm4gbmV3IGEuY29uc3RydWN0b3IocWIoYS5nKCkpKX1cbk4uY29weUludG89ZnVuY3Rpb24oYSxiKXtxKGEsTik7cShiLE4pO24oYS5jb25zdHJ1Y3Rvcj09Yi5jb25zdHJ1Y3RvcixcIkNvcHkgc291cmNlIGFuZCB0YXJnZXQgbWVzc2FnZSBzaG91bGQgaGF2ZSB0aGUgc2FtZSB0eXBlLlwiKTthPXBiKGEpO2Zvcih2YXIgYz1iLmcoKSxkPWEuZygpLGY9Yy5sZW5ndGg9MDtmPGQubGVuZ3RoO2YrKyljW2ZdPWRbZl07Yi5mPWEuZjtiLmk9YS5pfTtmdW5jdGlvbiBxYihhKXtpZihBcnJheS5pc0FycmF5KGEpKXtmb3IodmFyIGI9QXJyYXkoYS5sZW5ndGgpLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXTtudWxsIT1kJiYoYltjXT1cIm9iamVjdFwiPT10eXBlb2YgZD9xYihuKGQpKTpkKX1yZXR1cm4gYn1pZigkYSYmYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIG5ldyBVaW50OEFycmF5KGEpO2I9e307Zm9yKGMgaW4gYSlkPWFbY10sbnVsbCE9ZCYmKGJbY109XCJvYmplY3RcIj09dHlwZW9mIGQ/cWIobihkKSk6ZCk7cmV0dXJuIGJ9XG5OLnJlZ2lzdGVyTWVzc2FnZVR5cGU9ZnVuY3Rpb24oYSxiKXtiLndlPWF9O3ZhciBSPXtkdW1wOmZ1bmN0aW9uKGEpe3EoYSxOLFwianNwYi5NZXNzYWdlIGluc3RhbmNlIGV4cGVjdGVkXCIpO24oYS5nZXRFeHRlbnNpb24sXCJPbmx5IHVub2JmdXNjYXRlZCBhbmQgdW5vcHRpbWl6ZWQgY29tcGlsYXRpb24gbW9kZXMgc3VwcG9ydGVkLlwiKTtyZXR1cm4gUi5YKGEpfX07ZyhcImpzcGIuZGVidWcuZHVtcFwiLFIuZHVtcCx2b2lkIDApO1xuUi5YPWZ1bmN0aW9uKGEpe3ZhciBiPWsoYSk7aWYoXCJudW1iZXJcIj09Ynx8XCJzdHJpbmdcIj09Ynx8XCJib29sZWFuXCI9PWJ8fFwibnVsbFwiPT1ifHxcInVuZGVmaW5lZFwiPT1ifHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIFVpbnQ4QXJyYXkmJmEgaW5zdGFuY2VvZiBVaW50OEFycmF5KXJldHVybiBhO2lmKFwiYXJyYXlcIj09YilyZXR1cm4gdWEoYSksbChhLFIuWCk7aWYoYSBpbnN0YW5jZW9mIHIpe3ZhciBjPXt9O2E9YS5lbnRyaWVzKCk7Zm9yKHZhciBkPWEubmV4dCgpOyFkLmRvbmU7ZD1hLm5leHQoKSljW2QudmFsdWVbMF1dPVIuWChkLnZhbHVlWzFdKTtyZXR1cm4gY31xKGEsTixcIk9ubHkgbWVzc2FnZXMgZXhwZWN0ZWQ6IFwiK2EpO2I9YS5jb25zdHJ1Y3Rvcjt2YXIgZj17JG5hbWU6Yi5uYW1lfHxiLmRpc3BsYXlOYW1lfTtmb3IodCBpbiBiLnByb3RvdHlwZSl7dmFyIGg9L15nZXQoW0EtWl1cXHcqKS8uZXhlYyh0KTtpZihoJiZcImdldEV4dGVuc2lvblwiIT10JiZcImdldEpzUGJNZXNzYWdlSWRcIiE9XG50KXt2YXIgbT1cImhhc1wiK2hbMV07aWYoIWFbbV18fGFbbV0oKSltPWFbdF0oKSxmW1IuJGEoaFsxXSldPVIuWChtKX19aWYoYS5leHRlbnNpb25PYmplY3RfKXJldHVybiBmLiRleHRlbnNpb25zPVwiUmVjdXJzaXZlIGR1bXBpbmcgb2YgZXh0ZW5zaW9ucyBub3Qgc3VwcG9ydGVkIGluIGNvbXBpbGVkIGNvZGUuIFN3aXRjaCB0byB1bmNvbXBpbGVkIG9yIGR1bXAgZXh0ZW5zaW9uIG9iamVjdCBkaXJlY3RseVwiLGY7Zm9yKGQgaW4gYi5leHRlbnNpb25zKWlmKC9eXFxkKyQvLnRlc3QoZCkpe209Yi5leHRlbnNpb25zW2RdO3ZhciB0PWEuZ2V0RXh0ZW5zaW9uKG0pO2g9dm9pZCAwO209bS5CYTt2YXIgQj1bXSxNPTA7Zm9yKGggaW4gbSlCW00rK109aDtoPUJbMF07bnVsbCE9dCYmKGN8fChjPWYuJGV4dGVuc2lvbnM9e30pLGNbUi4kYShoKV09Ui5YKHQpKX1yZXR1cm4gZn07Ui4kYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eW0EtWl0vLGZ1bmN0aW9uKGIpe3JldHVybiBiLnRvTG93ZXJDYXNlKCl9KX07ZnVuY3Rpb24gUygpe3RoaXMuYT1bXX1nKFwianNwYi5CaW5hcnlFbmNvZGVyXCIsUyx2b2lkIDApO1MucHJvdG90eXBlLmxlbmd0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEubGVuZ3RofTtTLnByb3RvdHlwZS5sZW5ndGg9Uy5wcm90b3R5cGUubGVuZ3RoO1MucHJvdG90eXBlLmVuZD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYTt0aGlzLmE9W107cmV0dXJuIGF9O1MucHJvdG90eXBlLmVuZD1TLnByb3RvdHlwZS5lbmQ7Uy5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIpe24oYT09TWF0aC5mbG9vcihhKSk7bihiPT1NYXRoLmZsb29yKGIpKTtuKDA8PWEmJjQyOTQ5NjcyOTY+YSk7Zm9yKG4oMDw9YiYmNDI5NDk2NzI5Nj5iKTswPGJ8fDEyNzxhOyl0aGlzLmEucHVzaChhJjEyN3wxMjgpLGE9KGE+Pj43fGI8PDI1KT4+PjAsYj4+Pj03O3RoaXMuYS5wdXNoKGEpfTtTLnByb3RvdHlwZS53cml0ZVNwbGl0VmFyaW50NjQ9Uy5wcm90b3R5cGUubDtcblMucHJvdG90eXBlLkE9ZnVuY3Rpb24oYSxiKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oYj09TWF0aC5mbG9vcihiKSk7bigwPD1hJiY0Mjk0OTY3Mjk2PmEpO24oMDw9YiYmNDI5NDk2NzI5Nj5iKTt0aGlzLnMoYSk7dGhpcy5zKGIpfTtTLnByb3RvdHlwZS53cml0ZVNwbGl0Rml4ZWQ2ND1TLnByb3RvdHlwZS5BO1MucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtmb3IobigwPD1hJiY0Mjk0OTY3Mjk2PmEpOzEyNzxhOyl0aGlzLmEucHVzaChhJjEyN3wxMjgpLGE+Pj49Nzt0aGlzLmEucHVzaChhKX07Uy5wcm90b3R5cGUud3JpdGVVbnNpZ25lZFZhcmludDMyPVMucHJvdG90eXBlLmo7Uy5wcm90b3R5cGUuTT1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTIxNDc0ODM2NDg8PWEmJjIxNDc0ODM2NDg+YSk7aWYoMDw9YSl0aGlzLmooYSk7ZWxzZXtmb3IodmFyIGI9MDs5PmI7YisrKXRoaXMuYS5wdXNoKGEmMTI3fDEyOCksYT4+PTc7dGhpcy5hLnB1c2goMSl9fTtcblMucHJvdG90eXBlLndyaXRlU2lnbmVkVmFyaW50MzI9Uy5wcm90b3R5cGUuTTtTLnByb3RvdHlwZS52YT1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oMDw9YSYmMS44NDQ2NzQ0MDczNzA5NTUyRTE5PmEpO0EoYSk7dGhpcy5sKHkseil9O1MucHJvdG90eXBlLndyaXRlVW5zaWduZWRWYXJpbnQ2ND1TLnByb3RvdHlwZS52YTtTLnByb3RvdHlwZS51YT1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWEmJjB4N2ZmZmZmZmZmZmZmZmZmZj5hKTtBKGEpO3RoaXMubCh5LHopfTtTLnByb3RvdHlwZS53cml0ZVNpZ25lZFZhcmludDY0PVMucHJvdG90eXBlLnVhO1MucHJvdG90eXBlLndhPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtMjE0NzQ4MzY0ODw9YSYmMjE0NzQ4MzY0OD5hKTt0aGlzLmooKGE8PDFeYT4+MzEpPj4+MCl9O1MucHJvdG90eXBlLndyaXRlWmlnemFnVmFyaW50MzI9Uy5wcm90b3R5cGUud2E7XG5TLnByb3RvdHlwZS54YT1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWEmJjB4N2ZmZmZmZmZmZmZmZmZmZj5hKTtHYShhKTt0aGlzLmwoeSx6KX07Uy5wcm90b3R5cGUud3JpdGVaaWd6YWdWYXJpbnQ2ND1TLnByb3RvdHlwZS54YTtTLnByb3RvdHlwZS5UYT1mdW5jdGlvbihhKXt0aGlzLlcoSChhKSl9O1MucHJvdG90eXBlLndyaXRlWmlnemFnVmFyaW50NjRTdHJpbmc9Uy5wcm90b3R5cGUuVGE7Uy5wcm90b3R5cGUuVz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO0MoYSk7SmEoeSx6LGZ1bmN0aW9uKGMsZCl7Yi5sKGM+Pj4wLGQ+Pj4wKX0pfTtTLnByb3RvdHlwZS53cml0ZVppZ3phZ1ZhcmludEhhc2g2ND1TLnByb3RvdHlwZS5XO1MucHJvdG90eXBlLmJlPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigwPD1hJiYyNTY+YSk7dGhpcy5hLnB1c2goYT4+PjAmMjU1KX07Uy5wcm90b3R5cGUud3JpdGVVaW50OD1TLnByb3RvdHlwZS5iZTtcblMucHJvdG90eXBlLmFlPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigwPD1hJiY2NTUzNj5hKTt0aGlzLmEucHVzaChhPj4+MCYyNTUpO3RoaXMuYS5wdXNoKGE+Pj44JjI1NSl9O1MucHJvdG90eXBlLndyaXRlVWludDE2PVMucHJvdG90eXBlLmFlO1MucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKDA8PWEmJjQyOTQ5NjcyOTY+YSk7dGhpcy5hLnB1c2goYT4+PjAmMjU1KTt0aGlzLmEucHVzaChhPj4+OCYyNTUpO3RoaXMuYS5wdXNoKGE+Pj4xNiYyNTUpO3RoaXMuYS5wdXNoKGE+Pj4yNCYyNTUpfTtTLnByb3RvdHlwZS53cml0ZVVpbnQzMj1TLnByb3RvdHlwZS5zO1MucHJvdG90eXBlLlY9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKDA8PWEmJjEuODQ0Njc0NDA3MzcwOTU1MkUxOT5hKTtGYShhKTt0aGlzLnMoeSk7dGhpcy5zKHopfTtTLnByb3RvdHlwZS53cml0ZVVpbnQ2ND1TLnByb3RvdHlwZS5WO1xuUy5wcm90b3R5cGUuUWM9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKC0xMjg8PWEmJjEyOD5hKTt0aGlzLmEucHVzaChhPj4+MCYyNTUpfTtTLnByb3RvdHlwZS53cml0ZUludDg9Uy5wcm90b3R5cGUuUWM7Uy5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKC0zMjc2ODw9YSYmMzI3Njg+YSk7dGhpcy5hLnB1c2goYT4+PjAmMjU1KTt0aGlzLmEucHVzaChhPj4+OCYyNTUpfTtTLnByb3RvdHlwZS53cml0ZUludDE2PVMucHJvdG90eXBlLlBjO1MucHJvdG90eXBlLlM9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKC0yMTQ3NDgzNjQ4PD1hJiYyMTQ3NDgzNjQ4PmEpO3RoaXMuYS5wdXNoKGE+Pj4wJjI1NSk7dGhpcy5hLnB1c2goYT4+PjgmMjU1KTt0aGlzLmEucHVzaChhPj4+MTYmMjU1KTt0aGlzLmEucHVzaChhPj4+MjQmMjU1KX07Uy5wcm90b3R5cGUud3JpdGVJbnQzMj1TLnByb3RvdHlwZS5TO1xuUy5wcm90b3R5cGUuVD1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWEmJjB4N2ZmZmZmZmZmZmZmZmZmZj5hKTtBKGEpO3RoaXMuQSh5LHopfTtTLnByb3RvdHlwZS53cml0ZUludDY0PVMucHJvdG90eXBlLlQ7Uy5wcm90b3R5cGUua2E9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKC05MjIzMzcyMDM2ODU0Nzc1ODA4PD0rYSYmMHg3ZmZmZmZmZmZmZmZmZmZmPithKTtDKEgoYSkpO3RoaXMuQSh5LHopfTtTLnByb3RvdHlwZS53cml0ZUludDY0U3RyaW5nPVMucHJvdG90eXBlLmthO1MucHJvdG90eXBlLkw9ZnVuY3Rpb24oYSl7bihJbmZpbml0eT09PWF8fC1JbmZpbml0eT09PWF8fGlzTmFOKGEpfHwtMy40MDI4MjM0NjYzODUyODg2RTM4PD1hJiYzLjQwMjgyMzQ2NjM4NTI4ODZFMzg+PWEpO0hhKGEpO3RoaXMucyh5KX07Uy5wcm90b3R5cGUud3JpdGVGbG9hdD1TLnByb3RvdHlwZS5MO1xuUy5wcm90b3R5cGUuSj1mdW5jdGlvbihhKXtuKEluZmluaXR5PT09YXx8LUluZmluaXR5PT09YXx8aXNOYU4oYSl8fC0xLjc5NzY5MzEzNDg2MjMxNTdFMzA4PD1hJiYxLjc5NzY5MzEzNDg2MjMxNTdFMzA4Pj1hKTtJYShhKTt0aGlzLnMoeSk7dGhpcy5zKHopfTtTLnByb3RvdHlwZS53cml0ZURvdWJsZT1TLnByb3RvdHlwZS5KO1MucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7bihcImJvb2xlYW5cIj09PXR5cGVvZiBhfHxcIm51bWJlclwiPT09dHlwZW9mIGEpO3RoaXMuYS5wdXNoKGE/MTowKX07Uy5wcm90b3R5cGUud3JpdGVCb29sPVMucHJvdG90eXBlLkk7Uy5wcm90b3R5cGUuUj1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTIxNDc0ODM2NDg8PWEmJjIxNDc0ODM2NDg+YSk7dGhpcy5NKGEpfTtTLnByb3RvdHlwZS53cml0ZUVudW09Uy5wcm90b3R5cGUuUjtTLnByb3RvdHlwZS5qYT1mdW5jdGlvbihhKXt0aGlzLmEucHVzaC5hcHBseSh0aGlzLmEsYSl9O1xuUy5wcm90b3R5cGUud3JpdGVCeXRlcz1TLnByb3RvdHlwZS5qYTtTLnByb3RvdHlwZS5OPWZ1bmN0aW9uKGEpe0MoYSk7dGhpcy5sKHkseil9O1MucHJvdG90eXBlLndyaXRlVmFyaW50SGFzaDY0PVMucHJvdG90eXBlLk47Uy5wcm90b3R5cGUuSz1mdW5jdGlvbihhKXtDKGEpO3RoaXMucyh5KTt0aGlzLnMoeil9O1MucHJvdG90eXBlLndyaXRlRml4ZWRIYXNoNjQ9Uy5wcm90b3R5cGUuSztcblMucHJvdG90eXBlLlU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmxlbmd0aDt0YShhKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YS5jaGFyQ29kZUF0KGMpO2lmKDEyOD5kKXRoaXMuYS5wdXNoKGQpO2Vsc2UgaWYoMjA0OD5kKXRoaXMuYS5wdXNoKGQ+PjZ8MTkyKSx0aGlzLmEucHVzaChkJjYzfDEyOCk7ZWxzZSBpZig2NTUzNj5kKWlmKDU1Mjk2PD1kJiY1NjMxOT49ZCYmYysxPGEubGVuZ3RoKXt2YXIgZj1hLmNoYXJDb2RlQXQoYysxKTs1NjMyMDw9ZiYmNTczNDM+PWYmJihkPTEwMjQqKGQtNTUyOTYpK2YtNTYzMjArNjU1MzYsdGhpcy5hLnB1c2goZD4+MTh8MjQwKSx0aGlzLmEucHVzaChkPj4xMiY2M3wxMjgpLHRoaXMuYS5wdXNoKGQ+PjYmNjN8MTI4KSx0aGlzLmEucHVzaChkJjYzfDEyOCksYysrKX1lbHNlIHRoaXMuYS5wdXNoKGQ+PjEyfDIyNCksdGhpcy5hLnB1c2goZD4+NiY2M3wxMjgpLHRoaXMuYS5wdXNoKGQmNjN8MTI4KX1yZXR1cm4gdGhpcy5hLmxlbmd0aC1cbmJ9O1MucHJvdG90eXBlLndyaXRlU3RyaW5nPVMucHJvdG90eXBlLlU7ZnVuY3Rpb24gVChhLGIpe3RoaXMubG89YTt0aGlzLmhpPWJ9ZyhcImpzcGIuYXJpdGguVUludDY0XCIsVCx2b2lkIDApO1QucHJvdG90eXBlLmNtcD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5oaTxhLmhpfHx0aGlzLmhpPT1hLmhpJiZ0aGlzLmxvPGEubG8/LTE6dGhpcy5oaT09YS5oaSYmdGhpcy5sbz09YS5sbz8wOjF9O1QucHJvdG90eXBlLmNtcD1ULnByb3RvdHlwZS5jbXA7VC5wcm90b3R5cGUuTGE9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFQoKHRoaXMubG8+Pj4xfCh0aGlzLmhpJjEpPDwzMSk+Pj4wLHRoaXMuaGk+Pj4xPj4+MCl9O1QucHJvdG90eXBlLnJpZ2h0U2hpZnQ9VC5wcm90b3R5cGUuTGE7VC5wcm90b3R5cGUuRGE9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFQodGhpcy5sbzw8MT4+PjAsKHRoaXMuaGk8PDF8dGhpcy5sbz4+PjMxKT4+PjApfTtULnByb3RvdHlwZS5sZWZ0U2hpZnQ9VC5wcm90b3R5cGUuRGE7XG5ULnByb3RvdHlwZS5jYj1mdW5jdGlvbigpe3JldHVybiEhKHRoaXMuaGkmMjE0NzQ4MzY0OCl9O1QucHJvdG90eXBlLm1zYj1ULnByb3RvdHlwZS5jYjtULnByb3RvdHlwZS5PYj1mdW5jdGlvbigpe3JldHVybiEhKHRoaXMubG8mMSl9O1QucHJvdG90eXBlLmxzYj1ULnByb3RvdHlwZS5PYjtULnByb3RvdHlwZS5VYT1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLmxvJiYwPT10aGlzLmhpfTtULnByb3RvdHlwZS56ZXJvPVQucHJvdG90eXBlLlVhO1QucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFQoKHRoaXMubG8rYS5sbyY0Mjk0OTY3Mjk1KT4+PjA+Pj4wLCgodGhpcy5oaSthLmhpJjQyOTQ5NjcyOTUpPj4+MCkrKDQyOTQ5NjcyOTY8PXRoaXMubG8rYS5sbz8xOjApPj4+MCl9O1QucHJvdG90eXBlLmFkZD1ULnByb3RvdHlwZS5hZGQ7XG5ULnByb3RvdHlwZS5zdWI9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBUKCh0aGlzLmxvLWEubG8mNDI5NDk2NzI5NSk+Pj4wPj4+MCwoKHRoaXMuaGktYS5oaSY0Mjk0OTY3Mjk1KT4+PjApLSgwPnRoaXMubG8tYS5sbz8xOjApPj4+MCl9O1QucHJvdG90eXBlLnN1Yj1ULnByb3RvdHlwZS5zdWI7ZnVuY3Rpb24gcmIoYSxiKXt2YXIgYz1hJjY1NTM1O2E+Pj49MTY7dmFyIGQ9YiY2NTUzNSxmPWI+Pj4xNjtiPWMqZCs2NTUzNiooYypmJjY1NTM1KSs2NTUzNiooYSpkJjY1NTM1KTtmb3IoYz1hKmYrKGMqZj4+PjE2KSsoYSpkPj4+MTYpOzQyOTQ5NjcyOTY8PWI7KWItPTQyOTQ5NjcyOTYsYys9MTtyZXR1cm4gbmV3IFQoYj4+PjAsYz4+PjApfVQubXVsMzJ4MzI9cmI7VC5wcm90b3R5cGUuZWI9ZnVuY3Rpb24oYSl7dmFyIGI9cmIodGhpcy5sbyxhKTthPXJiKHRoaXMuaGksYSk7YS5oaT1hLmxvO2EubG89MDtyZXR1cm4gYi5hZGQoYSl9O1QucHJvdG90eXBlLm11bD1ULnByb3RvdHlwZS5lYjtcblQucHJvdG90eXBlLlhhPWZ1bmN0aW9uKGEpe2lmKDA9PWEpcmV0dXJuW107dmFyIGI9bmV3IFQoMCwwKSxjPW5ldyBUKHRoaXMubG8sdGhpcy5oaSk7YT1uZXcgVChhLDApO2Zvcih2YXIgZD1uZXcgVCgxLDApOyFhLmNiKCk7KWE9YS5EYSgpLGQ9ZC5EYSgpO2Zvcig7IWQuVWEoKTspMD49YS5jbXAoYykmJihiPWIuYWRkKGQpLGM9Yy5zdWIoYSkpLGE9YS5MYSgpLGQ9ZC5MYSgpO3JldHVybltiLGNdfTtULnByb3RvdHlwZS5kaXY9VC5wcm90b3R5cGUuWGE7VC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCJcIixiPXRoaXM7IWIuVWEoKTspe2I9Yi5YYSgxMCk7dmFyIGM9YlswXTthPWJbMV0ubG8rYTtiPWN9XCJcIj09YSYmKGE9XCIwXCIpO3JldHVybiBhfTtULnByb3RvdHlwZS50b1N0cmluZz1ULnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIFUoYSl7Zm9yKHZhciBiPW5ldyBUKDAsMCksYz1uZXcgVCgwLDApLGQ9MDtkPGEubGVuZ3RoO2QrKyl7aWYoXCIwXCI+YVtkXXx8XCI5XCI8YVtkXSlyZXR1cm4gbnVsbDtjLmxvPXBhcnNlSW50KGFbZF0sMTApO2I9Yi5lYigxMCkuYWRkKGMpfXJldHVybiBifVQuZnJvbVN0cmluZz1VO1QucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBUKHRoaXMubG8sdGhpcy5oaSl9O1QucHJvdG90eXBlLmNsb25lPVQucHJvdG90eXBlLmNsb25lO2Z1bmN0aW9uIFYoYSxiKXt0aGlzLmxvPWE7dGhpcy5oaT1ifWcoXCJqc3BiLmFyaXRoLkludDY0XCIsVix2b2lkIDApO1YucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFYoKHRoaXMubG8rYS5sbyY0Mjk0OTY3Mjk1KT4+PjA+Pj4wLCgodGhpcy5oaSthLmhpJjQyOTQ5NjcyOTUpPj4+MCkrKDQyOTQ5NjcyOTY8PXRoaXMubG8rYS5sbz8xOjApPj4+MCl9O1YucHJvdG90eXBlLmFkZD1WLnByb3RvdHlwZS5hZGQ7XG5WLnByb3RvdHlwZS5zdWI9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBWKCh0aGlzLmxvLWEubG8mNDI5NDk2NzI5NSk+Pj4wPj4+MCwoKHRoaXMuaGktYS5oaSY0Mjk0OTY3Mjk1KT4+PjApLSgwPnRoaXMubG8tYS5sbz8xOjApPj4+MCl9O1YucHJvdG90eXBlLnN1Yj1WLnByb3RvdHlwZS5zdWI7Vi5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFYodGhpcy5sbyx0aGlzLmhpKX07Vi5wcm90b3R5cGUuY2xvbmU9Vi5wcm90b3R5cGUuY2xvbmU7Vi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT0wIT0odGhpcy5oaSYyMTQ3NDgzNjQ4KSxiPW5ldyBUKHRoaXMubG8sdGhpcy5oaSk7YSYmKGI9KG5ldyBUKDAsMCkpLnN1YihiKSk7cmV0dXJuKGE/XCItXCI6XCJcIikrYi50b1N0cmluZygpfTtWLnByb3RvdHlwZS50b1N0cmluZz1WLnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIHNiKGEpe3ZhciBiPTA8YS5sZW5ndGgmJlwiLVwiPT1hWzBdO2ImJihhPWEuc3Vic3RyaW5nKDEpKTthPVUoYSk7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7YiYmKGE9KG5ldyBUKDAsMCkpLnN1YihhKSk7cmV0dXJuIG5ldyBWKGEubG8sYS5oaSl9Vi5mcm9tU3RyaW5nPXNiO2Z1bmN0aW9uIFcoKXt0aGlzLmM9W107dGhpcy5iPTA7dGhpcy5hPW5ldyBTO3RoaXMuaD1bXX1nKFwianNwYi5CaW5hcnlXcml0ZXJcIixXLHZvaWQgMCk7ZnVuY3Rpb24gdGIoYSxiKXt2YXIgYz1hLmEuZW5kKCk7YS5jLnB1c2goYyk7YS5jLnB1c2goYik7YS5iKz1jLmxlbmd0aCtiLmxlbmd0aH1mdW5jdGlvbiBYKGEsYil7WShhLGIsMik7Yj1hLmEuZW5kKCk7YS5jLnB1c2goYik7YS5iKz1iLmxlbmd0aDtiLnB1c2goYS5iKTtyZXR1cm4gYn1mdW5jdGlvbiBaKGEsYil7dmFyIGM9Yi5wb3AoKTtjPWEuYithLmEubGVuZ3RoKCktYztmb3IobigwPD1jKTsxMjc8YzspYi5wdXNoKGMmMTI3fDEyOCksYz4+Pj03LGEuYisrO2IucHVzaChjKTthLmIrK31XLnByb3RvdHlwZS5wYj1mdW5jdGlvbihhLGIsYyl7dGIodGhpcyxhLnN1YmFycmF5KGIsYykpfTtXLnByb3RvdHlwZS53cml0ZVNlcmlhbGl6ZWRNZXNzYWdlPVcucHJvdG90eXBlLnBiO1xuVy5wcm90b3R5cGUuUGI9ZnVuY3Rpb24oYSxiLGMpe251bGwhPWEmJm51bGwhPWImJm51bGwhPWMmJnRoaXMucGIoYSxiLGMpfTtXLnByb3RvdHlwZS5tYXliZVdyaXRlU2VyaWFsaXplZE1lc3NhZ2U9Vy5wcm90b3R5cGUuUGI7Vy5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmM9W107dGhpcy5hLmVuZCgpO3RoaXMuYj0wO3RoaXMuaD1bXX07Vy5wcm90b3R5cGUucmVzZXQ9Vy5wcm90b3R5cGUucmVzZXQ7Vy5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuaC5sZW5ndGgpO2Zvcih2YXIgYT1uZXcgVWludDhBcnJheSh0aGlzLmIrdGhpcy5hLmxlbmd0aCgpKSxiPXRoaXMuYyxjPWIubGVuZ3RoLGQ9MCxmPTA7ZjxjO2YrKyl7dmFyIGg9YltmXTthLnNldChoLGQpO2QrPWgubGVuZ3RofWI9dGhpcy5hLmVuZCgpO2Euc2V0KGIsZCk7ZCs9Yi5sZW5ndGg7bihkPT1hLmxlbmd0aCk7dGhpcy5jPVthXTtyZXR1cm4gYX07XG5XLnByb3RvdHlwZS5nZXRSZXN1bHRCdWZmZXI9Vy5wcm90b3R5cGUuYWI7Vy5wcm90b3R5cGUuS2I9ZnVuY3Rpb24oYSl7cmV0dXJuIEJhKHRoaXMuYWIoKSxhKX07Vy5wcm90b3R5cGUuZ2V0UmVzdWx0QmFzZTY0U3RyaW5nPVcucHJvdG90eXBlLktiO1cucHJvdG90eXBlLlZhPWZ1bmN0aW9uKGEpe3RoaXMuaC5wdXNoKFgodGhpcyxhKSl9O1cucHJvdG90eXBlLmJlZ2luU3ViTWVzc2FnZT1XLnByb3RvdHlwZS5WYTtXLnByb3RvdHlwZS5ZYT1mdW5jdGlvbigpe24oMDw9dGhpcy5oLmxlbmd0aCk7Wih0aGlzLHRoaXMuaC5wb3AoKSl9O1cucHJvdG90eXBlLmVuZFN1Yk1lc3NhZ2U9Vy5wcm90b3R5cGUuWWE7ZnVuY3Rpb24gWShhLGIsYyl7bigxPD1iJiZiPT1NYXRoLmZsb29yKGIpKTthLmEuaig4KmIrYyl9XG5XLnByb3RvdHlwZS5OYz1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2UgMTp0aGlzLkooYixjKTticmVhaztjYXNlIDI6dGhpcy5MKGIsYyk7YnJlYWs7Y2FzZSAzOnRoaXMuVChiLGMpO2JyZWFrO2Nhc2UgNDp0aGlzLlYoYixjKTticmVhaztjYXNlIDU6dGhpcy5TKGIsYyk7YnJlYWs7Y2FzZSA2OnRoaXMuUWEoYixjKTticmVhaztjYXNlIDc6dGhpcy5QYShiLGMpO2JyZWFrO2Nhc2UgODp0aGlzLkkoYixjKTticmVhaztjYXNlIDk6dGhpcy5VKGIsYyk7YnJlYWs7Y2FzZSAxMDpwKFwiR3JvdXAgZmllbGQgdHlwZSBub3Qgc3VwcG9ydGVkIGluIHdyaXRlQW55KClcIik7YnJlYWs7Y2FzZSAxMTpwKFwiTWVzc2FnZSBmaWVsZCB0eXBlIG5vdCBzdXBwb3J0ZWQgaW4gd3JpdGVBbnkoKVwiKTticmVhaztjYXNlIDEyOnRoaXMuamEoYixjKTticmVhaztjYXNlIDEzOnRoaXMucyhiLGMpO2JyZWFrO2Nhc2UgMTQ6dGhpcy5SKGIsYyk7YnJlYWs7Y2FzZSAxNTp0aGlzLlJhKGIsYyk7YnJlYWs7XG5jYXNlIDE2OnRoaXMuU2EoYixjKTticmVhaztjYXNlIDE3OnRoaXMucmIoYixjKTticmVhaztjYXNlIDE4OnRoaXMuc2IoYixjKTticmVhaztjYXNlIDMwOnRoaXMuSyhiLGMpO2JyZWFrO2Nhc2UgMzE6dGhpcy5OKGIsYyk7YnJlYWs7ZGVmYXVsdDpwKFwiSW52YWxpZCBmaWVsZCB0eXBlIGluIHdyaXRlQW55KClcIil9fTtXLnByb3RvdHlwZS53cml0ZUFueT1XLnByb3RvdHlwZS5OYztmdW5jdGlvbiB1YihhLGIsYyl7bnVsbCE9YyYmKFkoYSxiLDApLGEuYS5qKGMpKX1mdW5jdGlvbiB2YihhLGIsYyl7bnVsbCE9YyYmKFkoYSxiLDApLGEuYS5NKGMpKX1XLnByb3RvdHlwZS5TPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTIxNDc0ODM2NDg8PWImJjIxNDc0ODM2NDg+YiksdmIodGhpcyxhLGIpKX07Vy5wcm90b3R5cGUud3JpdGVJbnQzMj1XLnByb3RvdHlwZS5TO1xuVy5wcm90b3R5cGUub2I9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYj1wYXJzZUludChiLDEwKSxuKC0yMTQ3NDgzNjQ4PD1iJiYyMTQ3NDgzNjQ4PmIpLHZiKHRoaXMsYSxiKSl9O1cucHJvdG90eXBlLndyaXRlSW50MzJTdHJpbmc9Vy5wcm90b3R5cGUub2I7Vy5wcm90b3R5cGUuVD1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKC05MjIzMzcyMDM2ODU0Nzc1ODA4PD1iJiYweDdmZmZmZmZmZmZmZmZmZmY+YiksbnVsbCE9YiYmKFkodGhpcyxhLDApLHRoaXMuYS51YShiKSkpfTtXLnByb3RvdHlwZS53cml0ZUludDY0PVcucHJvdG90eXBlLlQ7Vy5wcm90b3R5cGUua2E9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYj1zYihiKSxZKHRoaXMsYSwwKSx0aGlzLmEubChiLmxvLGIuaGkpKX07Vy5wcm90b3R5cGUud3JpdGVJbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5rYTtcblcucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigwPD1iJiY0Mjk0OTY3Mjk2PmIpLHViKHRoaXMsYSxiKSl9O1cucHJvdG90eXBlLndyaXRlVWludDMyPVcucHJvdG90eXBlLnM7Vy5wcm90b3R5cGUudWI9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYj1wYXJzZUludChiLDEwKSxuKDA8PWImJjQyOTQ5NjcyOTY+YiksdWIodGhpcyxhLGIpKX07Vy5wcm90b3R5cGUud3JpdGVVaW50MzJTdHJpbmc9Vy5wcm90b3R5cGUudWI7Vy5wcm90b3R5cGUuVj1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKDA8PWImJjEuODQ0Njc0NDA3MzcwOTU1MkUxOT5iKSxudWxsIT1iJiYoWSh0aGlzLGEsMCksdGhpcy5hLnZhKGIpKSl9O1cucHJvdG90eXBlLndyaXRlVWludDY0PVcucHJvdG90eXBlLlY7Vy5wcm90b3R5cGUudmI9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYj1VKGIpLFkodGhpcyxhLDApLHRoaXMuYS5sKGIubG8sYi5oaSkpfTtcblcucHJvdG90eXBlLndyaXRlVWludDY0U3RyaW5nPVcucHJvdG90eXBlLnZiO1cucHJvdG90eXBlLnJiPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTIxNDc0ODM2NDg8PWImJjIxNDc0ODM2NDg+YiksbnVsbCE9YiYmKFkodGhpcyxhLDApLHRoaXMuYS53YShiKSkpfTtXLnByb3RvdHlwZS53cml0ZVNpbnQzMj1XLnByb3RvdHlwZS5yYjtXLnByb3RvdHlwZS5zYj1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKC05MjIzMzcyMDM2ODU0Nzc1ODA4PD1iJiYweDdmZmZmZmZmZmZmZmZmZmY+YiksbnVsbCE9YiYmKFkodGhpcyxhLDApLHRoaXMuYS54YShiKSkpfTtXLnByb3RvdHlwZS53cml0ZVNpbnQ2ND1XLnByb3RvdHlwZS5zYjtXLnByb3RvdHlwZS4kZD1mdW5jdGlvbihhLGIpe251bGwhPWImJm51bGwhPWImJihZKHRoaXMsYSwwKSx0aGlzLmEuVyhiKSl9O1cucHJvdG90eXBlLndyaXRlU2ludEhhc2g2ND1XLnByb3RvdHlwZS4kZDtcblcucHJvdG90eXBlLlpkPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmbnVsbCE9YiYmKFkodGhpcyxhLDApLHRoaXMuYS5UYShiKSl9O1cucHJvdG90eXBlLndyaXRlU2ludDY0U3RyaW5nPVcucHJvdG90eXBlLlpkO1cucHJvdG90eXBlLlBhPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oMDw9YiYmNDI5NDk2NzI5Nj5iKSxZKHRoaXMsYSw1KSx0aGlzLmEucyhiKSl9O1cucHJvdG90eXBlLndyaXRlRml4ZWQzMj1XLnByb3RvdHlwZS5QYTtXLnByb3RvdHlwZS5RYT1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKDA8PWImJjEuODQ0Njc0NDA3MzcwOTU1MkUxOT5iKSxZKHRoaXMsYSwxKSx0aGlzLmEuVihiKSl9O1cucHJvdG90eXBlLndyaXRlRml4ZWQ2ND1XLnByb3RvdHlwZS5RYTtXLnByb3RvdHlwZS5uYj1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPVUoYiksWSh0aGlzLGEsMSksdGhpcy5hLkEoYi5sbyxiLmhpKSl9O1cucHJvdG90eXBlLndyaXRlRml4ZWQ2NFN0cmluZz1XLnByb3RvdHlwZS5uYjtcblcucHJvdG90eXBlLlJhPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTIxNDc0ODM2NDg8PWImJjIxNDc0ODM2NDg+YiksWSh0aGlzLGEsNSksdGhpcy5hLlMoYikpfTtXLnByb3RvdHlwZS53cml0ZVNmaXhlZDMyPVcucHJvdG90eXBlLlJhO1cucHJvdG90eXBlLlNhPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWImJjB4N2ZmZmZmZmZmZmZmZmZmZj5iKSxZKHRoaXMsYSwxKSx0aGlzLmEuVChiKSl9O1cucHJvdG90eXBlLndyaXRlU2ZpeGVkNjQ9Vy5wcm90b3R5cGUuU2E7Vy5wcm90b3R5cGUucWI9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYj1zYihiKSxZKHRoaXMsYSwxKSx0aGlzLmEuQShiLmxvLGIuaGkpKX07Vy5wcm90b3R5cGUud3JpdGVTZml4ZWQ2NFN0cmluZz1XLnByb3RvdHlwZS5xYjtXLnByb3RvdHlwZS5MPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKFkodGhpcyxhLDUpLHRoaXMuYS5MKGIpKX07XG5XLnByb3RvdHlwZS53cml0ZUZsb2F0PVcucHJvdG90eXBlLkw7Vy5wcm90b3R5cGUuSj1mdW5jdGlvbihhLGIpe251bGwhPWImJihZKHRoaXMsYSwxKSx0aGlzLmEuSihiKSl9O1cucHJvdG90eXBlLndyaXRlRG91YmxlPVcucHJvdG90eXBlLko7Vy5wcm90b3R5cGUuST1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYiksWSh0aGlzLGEsMCksdGhpcy5hLkkoYikpfTtXLnByb3RvdHlwZS53cml0ZUJvb2w9Vy5wcm90b3R5cGUuSTtXLnByb3RvdHlwZS5SPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTIxNDc0ODM2NDg8PWImJjIxNDc0ODM2NDg+YiksWSh0aGlzLGEsMCksdGhpcy5hLk0oYikpfTtXLnByb3RvdHlwZS53cml0ZUVudW09Vy5wcm90b3R5cGUuUjtXLnByb3RvdHlwZS5VPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKGE9WCh0aGlzLGEpLHRoaXMuYS5VKGIpLFoodGhpcyxhKSl9O1xuVy5wcm90b3R5cGUud3JpdGVTdHJpbmc9Vy5wcm90b3R5cGUuVTtXLnByb3RvdHlwZS5qYT1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPVVhKGIpLFkodGhpcyxhLDIpLHRoaXMuYS5qKGIubGVuZ3RoKSx0Yih0aGlzLGIpKX07Vy5wcm90b3R5cGUud3JpdGVCeXRlcz1XLnByb3RvdHlwZS5qYTtXLnByb3RvdHlwZS5SYz1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YiYmKGE9WCh0aGlzLGEpLGMoYix0aGlzKSxaKHRoaXMsYSkpfTtXLnByb3RvdHlwZS53cml0ZU1lc3NhZ2U9Vy5wcm90b3R5cGUuUmM7Vy5wcm90b3R5cGUuU2M9ZnVuY3Rpb24oYSxiLGMpe251bGwhPWImJihZKHRoaXMsMSwzKSxZKHRoaXMsMiwwKSx0aGlzLmEuTShhKSxhPVgodGhpcywzKSxjKGIsdGhpcyksWih0aGlzLGEpLFkodGhpcywxLDQpKX07Vy5wcm90b3R5cGUud3JpdGVNZXNzYWdlU2V0PVcucHJvdG90eXBlLlNjO1xuVy5wcm90b3R5cGUuT2M9ZnVuY3Rpb24oYSxiLGMpe251bGwhPWImJihZKHRoaXMsYSwzKSxjKGIsdGhpcyksWSh0aGlzLGEsNCkpfTtXLnByb3RvdHlwZS53cml0ZUdyb3VwPVcucHJvdG90eXBlLk9jO1cucHJvdG90eXBlLks9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobig4PT1iLmxlbmd0aCksWSh0aGlzLGEsMSksdGhpcy5hLksoYikpfTtXLnByb3RvdHlwZS53cml0ZUZpeGVkSGFzaDY0PVcucHJvdG90eXBlLks7Vy5wcm90b3R5cGUuTj1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKDg9PWIubGVuZ3RoKSxZKHRoaXMsYSwwKSx0aGlzLmEuTihiKSl9O1cucHJvdG90eXBlLndyaXRlVmFyaW50SGFzaDY0PVcucHJvdG90eXBlLk47Vy5wcm90b3R5cGUuQT1mdW5jdGlvbihhLGIsYyl7WSh0aGlzLGEsMSk7dGhpcy5hLkEoYixjKX07Vy5wcm90b3R5cGUud3JpdGVTcGxpdEZpeGVkNjQ9Vy5wcm90b3R5cGUuQTtcblcucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiLGMpe1kodGhpcyxhLDApO3RoaXMuYS5sKGIsYyl9O1cucHJvdG90eXBlLndyaXRlU3BsaXRWYXJpbnQ2ND1XLnByb3RvdHlwZS5sO1cucHJvdG90eXBlLnRiPWZ1bmN0aW9uKGEsYixjKXtZKHRoaXMsYSwwKTt2YXIgZD10aGlzLmE7SmEoYixjLGZ1bmN0aW9uKGYsaCl7ZC5sKGY+Pj4wLGg+Pj4wKX0pfTtXLnByb3RvdHlwZS53cml0ZVNwbGl0WmlnemFnVmFyaW50NjQ9Vy5wcm90b3R5cGUudGI7Vy5wcm90b3R5cGUuRWQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXZiKHRoaXMsYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEludDMyPVcucHJvdG90eXBlLkVkO1cucHJvdG90eXBlLkZkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLm9iKGEsYltjXSl9O1xuVy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEludDMyU3RyaW5nPVcucHJvdG90eXBlLkZkO1cucHJvdG90eXBlLkdkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtudWxsIT1kJiYoWSh0aGlzLGEsMCksdGhpcy5hLnVhKGQpKX19O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRJbnQ2ND1XLnByb3RvdHlwZS5HZDtXLnByb3RvdHlwZS5RZD1mdW5jdGlvbihhLGIsYyxkKXtpZihudWxsIT1iKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXRoaXMuQShhLGMoYltmXSksZChiW2ZdKSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTcGxpdEZpeGVkNjQ9Vy5wcm90b3R5cGUuUWQ7Vy5wcm90b3R5cGUuUmQ9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbCE9Yilmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl0aGlzLmwoYSxjKGJbZl0pLGQoYltmXSkpfTtcblcucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTcGxpdFZhcmludDY0PVcucHJvdG90eXBlLlJkO1cucHJvdG90eXBlLlNkPWZ1bmN0aW9uKGEsYixjLGQpe2lmKG51bGwhPWIpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspdGhpcy50YihhLGMoYltmXSksZChiW2ZdKSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTcGxpdFppZ3phZ1ZhcmludDY0PVcucHJvdG90eXBlLlNkO1cucHJvdG90eXBlLkhkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmthKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRJbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5IZDtXLnByb3RvdHlwZS5VZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdWIodGhpcyxhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkVWludDMyPVcucHJvdG90eXBlLlVkO1xuVy5wcm90b3R5cGUuVmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMudWIoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFVpbnQzMlN0cmluZz1XLnByb3RvdHlwZS5WZDtXLnByb3RvdHlwZS5XZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107bnVsbCE9ZCYmKFkodGhpcyxhLDApLHRoaXMuYS52YShkKSl9fTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkVWludDY0PVcucHJvdG90eXBlLldkO1cucHJvdG90eXBlLlhkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLnZiKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRVaW50NjRTdHJpbmc9Vy5wcm90b3R5cGUuWGQ7XG5XLnByb3RvdHlwZS5NZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107bnVsbCE9ZCYmKFkodGhpcyxhLDApLHRoaXMuYS53YShkKSl9fTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ludDMyPVcucHJvdG90eXBlLk1kO1cucHJvdG90eXBlLk5kPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtudWxsIT1kJiYoWSh0aGlzLGEsMCksdGhpcy5hLnhhKGQpKX19O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTaW50NjQ9Vy5wcm90b3R5cGUuTmQ7Vy5wcm90b3R5cGUuT2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO251bGwhPWQmJihZKHRoaXMsYSwwKSx0aGlzLmEuVGEoZCkpfX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNpbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5PZDtcblcucHJvdG90eXBlLlBkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtudWxsIT1kJiYoWSh0aGlzLGEsMCksdGhpcy5hLlcoZCkpfX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNpbnRIYXNoNjQ9Vy5wcm90b3R5cGUuUGQ7Vy5wcm90b3R5cGUueWQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuUGEoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEZpeGVkMzI9Vy5wcm90b3R5cGUueWQ7Vy5wcm90b3R5cGUuemQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuUWEoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEZpeGVkNjQ9Vy5wcm90b3R5cGUuemQ7XG5XLnByb3RvdHlwZS5BZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5uYihhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRml4ZWQ2NFN0cmluZz1XLnByb3RvdHlwZS5BZDtXLnByb3RvdHlwZS5KZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5SYShhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ZpeGVkMzI9Vy5wcm90b3R5cGUuSmQ7Vy5wcm90b3R5cGUuS2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuU2EoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNmaXhlZDY0PVcucHJvdG90eXBlLktkO1cucHJvdG90eXBlLkxkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLnFiKGEsYltjXSl9O1xuVy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNmaXhlZDY0U3RyaW5nPVcucHJvdG90eXBlLkxkO1cucHJvdG90eXBlLkNkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLkwoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEZsb2F0PVcucHJvdG90eXBlLkNkO1cucHJvdG90eXBlLndkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLkooYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZERvdWJsZT1XLnByb3RvdHlwZS53ZDtXLnByb3RvdHlwZS51ZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5JKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRCb29sPVcucHJvdG90eXBlLnVkO1xuVy5wcm90b3R5cGUueGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuUihhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRW51bT1XLnByb3RvdHlwZS54ZDtXLnByb3RvdHlwZS5UZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5VKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTdHJpbmc9Vy5wcm90b3R5cGUuVGQ7Vy5wcm90b3R5cGUudmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuamEoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEJ5dGVzPVcucHJvdG90eXBlLnZkO1cucHJvdG90eXBlLklkPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsIT1iKWZvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZj1YKHRoaXMsYSk7YyhiW2RdLHRoaXMpO1oodGhpcyxmKX19O1xuVy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZE1lc3NhZ2U9Vy5wcm90b3R5cGUuSWQ7Vy5wcm90b3R5cGUuRGQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGwhPWIpZm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspWSh0aGlzLGEsMyksYyhiW2RdLHRoaXMpLFkodGhpcyxhLDQpfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkR3JvdXA9Vy5wcm90b3R5cGUuRGQ7Vy5wcm90b3R5cGUuQmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuSyhhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRml4ZWRIYXNoNjQ9Vy5wcm90b3R5cGUuQmQ7Vy5wcm90b3R5cGUuWWQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuTihhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkVmFyaW50SGFzaDY0PVcucHJvdG90eXBlLllkO1xuVy5wcm90b3R5cGUuYWQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLk0oYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRJbnQzMj1XLnByb3RvdHlwZS5hZDtXLnByb3RvdHlwZS5iZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuTShwYXJzZUludChiW2NdLDEwKSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRJbnQzMlN0cmluZz1XLnByb3RvdHlwZS5iZDtXLnByb3RvdHlwZS5jZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEudWEoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRJbnQ2ND1XLnByb3RvdHlwZS5jZDtcblcucHJvdG90eXBlLm1kPWZ1bmN0aW9uKGEsYixjLGQpe2lmKG51bGwhPWIpe2E9WCh0aGlzLGEpO2Zvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXRoaXMuYS5BKGMoYltmXSksZChiW2ZdKSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRTcGxpdEZpeGVkNjQ9Vy5wcm90b3R5cGUubWQ7Vy5wcm90b3R5cGUubmQ9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbCE9Yil7YT1YKHRoaXMsYSk7Zm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspdGhpcy5hLmwoYyhiW2ZdKSxkKGJbZl0pKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNwbGl0VmFyaW50NjQ9Vy5wcm90b3R5cGUubmQ7Vy5wcm90b3R5cGUub2Q9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbCE9Yil7YT1YKHRoaXMsYSk7Zm9yKHZhciBmPXRoaXMuYSxoPTA7aDxiLmxlbmd0aDtoKyspSmEoYyhiW2hdKSxkKGJbaF0pLGZ1bmN0aW9uKG0sdCl7Zi5sKG0+Pj4wLHQ+Pj4wKX0pO1oodGhpcyxhKX19O1xuVy5wcm90b3R5cGUud3JpdGVQYWNrZWRTcGxpdFppZ3phZ1ZhcmludDY0PVcucHJvdG90eXBlLm9kO1cucHJvdG90eXBlLmRkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1zYihiW2NdKTt0aGlzLmEubChkLmxvLGQuaGkpfVoodGhpcyxhKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkSW50NjRTdHJpbmc9Vy5wcm90b3R5cGUuZGQ7Vy5wcm90b3R5cGUucGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLmooYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRVaW50MzI9Vy5wcm90b3R5cGUucGQ7XG5XLnByb3RvdHlwZS5xZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuaihwYXJzZUludChiW2NdLDEwKSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRVaW50MzJTdHJpbmc9Vy5wcm90b3R5cGUucWQ7Vy5wcm90b3R5cGUucmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLnZhKGJbY10pO1oodGhpcyxhKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkVWludDY0PVcucHJvdG90eXBlLnJkO1cucHJvdG90eXBlLnNkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1VKGJbY10pO3RoaXMuYS5sKGQubG8sZC5oaSl9Wih0aGlzLGEpfX07XG5XLnByb3RvdHlwZS53cml0ZVBhY2tlZFVpbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5zZDtXLnByb3RvdHlwZS5oZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEud2EoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRTaW50MzI9Vy5wcm90b3R5cGUuaGQ7Vy5wcm90b3R5cGUuamQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLnhhKGJbY10pO1oodGhpcyxhKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkU2ludDY0PVcucHJvdG90eXBlLmpkO1cucHJvdG90eXBlLmtkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS5XKEgoYltjXSkpO1oodGhpcyxhKX19O1xuVy5wcm90b3R5cGUud3JpdGVQYWNrZWRTaW50NjRTdHJpbmc9Vy5wcm90b3R5cGUua2Q7Vy5wcm90b3R5cGUubGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLlcoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRTaW50SGFzaDY0PVcucHJvdG90eXBlLmxkO1cucHJvdG90eXBlLldjPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpZm9yKFkodGhpcyxhLDIpLHRoaXMuYS5qKDQqYi5sZW5ndGgpLGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLmEucyhiW2FdKX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRGaXhlZDMyPVcucHJvdG90eXBlLldjO1cucHJvdG90eXBlLlhjPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpZm9yKFkodGhpcyxhLDIpLHRoaXMuYS5qKDgqYi5sZW5ndGgpLGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLmEuVihiW2FdKX07XG5XLnByb3RvdHlwZS53cml0ZVBhY2tlZEZpeGVkNjQ9Vy5wcm90b3R5cGUuWGM7Vy5wcm90b3R5cGUuWWM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1VKGJbYV0pO3RoaXMuYS5BKGMubG8sYy5oaSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEZpeGVkNjRTdHJpbmc9Vy5wcm90b3R5cGUuWWM7Vy5wcm90b3R5cGUuZWQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooNCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5TKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNmaXhlZDMyPVcucHJvdG90eXBlLmVkO1xuVy5wcm90b3R5cGUuZmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5UKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNmaXhlZDY0PVcucHJvdG90eXBlLmZkO1cucHJvdG90eXBlLmdkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpZm9yKFkodGhpcyxhLDIpLHRoaXMuYS5qKDgqYi5sZW5ndGgpLGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLmEua2EoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkU2ZpeGVkNjRTdHJpbmc9Vy5wcm90b3R5cGUuZ2Q7Vy5wcm90b3R5cGUuJGM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooNCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5MKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEZsb2F0PVcucHJvdG90eXBlLiRjO1xuVy5wcm90b3R5cGUuVWM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5KKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZERvdWJsZT1XLnByb3RvdHlwZS5VYztXLnByb3RvdHlwZS5UYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaihiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5JKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEJvb2w9Vy5wcm90b3R5cGUuVGM7Vy5wcm90b3R5cGUuVmM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLlIoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRFbnVtPVcucHJvdG90eXBlLlZjO1xuVy5wcm90b3R5cGUuWmM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5LKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEZpeGVkSGFzaDY0PVcucHJvdG90eXBlLlpjO1cucHJvdG90eXBlLnRkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS5OKGJbY10pO1oodGhpcyxhKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkVmFyaW50SGFzaDY0PVcucHJvdG90eXBlLnRkO1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmKGV4cG9ydHMuZGVidWc9UixleHBvcnRzLk1hcD1yLGV4cG9ydHMuTWVzc2FnZT1OLGV4cG9ydHMuQmluYXJ5UmVhZGVyPUosZXhwb3J0cy5CaW5hcnlXcml0ZXI9VyxleHBvcnRzLkV4dGVuc2lvbkZpZWxkSW5mbz1ZYSxleHBvcnRzLkV4dGVuc2lvbkZpZWxkQmluYXJ5SW5mbz1aYSxleHBvcnRzLmV4cG9ydFN5bWJvbD1tYSxleHBvcnRzLmluaGVyaXRzPW5hLGV4cG9ydHMub2JqZWN0PXtleHRlbmQ6cGF9LGV4cG9ydHMudHlwZU9mPWspO1xuIiwiLypcblxuIENvcHlyaWdodCBUaGUgQ2xvc3VyZSBMaWJyYXJ5IEF1dGhvcnMuXG4gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiovXG52YXIgbjtmdW5jdGlvbiBhYShhKXt2YXIgYj0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fX12YXIgYmE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfTtmdW5jdGlvbiBjYShhKXthPVtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3csXCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYsXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLGFdO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7KytiKXt2YXIgYz1hW2JdO2lmKGMmJmMuTWF0aD09TWF0aClyZXR1cm4gY310aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIGdsb2JhbCBvYmplY3RcIik7fXZhciByPWNhKHRoaXMpO1xuZnVuY3Rpb24gdCgpe3Q9ZnVuY3Rpb24oKXt9O3IuU3ltYm9sfHwoci5TeW1ib2w9ZGEpfWZ1bmN0aW9uIGVhKGEsYil7dGhpcy5hPWE7YmEodGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9ZWEucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX07dmFyIGRhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtpZih0aGlzIGluc3RhbmNlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yXCIpO3JldHVybiBuZXcgZWEoXCJqc2NvbXBfc3ltYm9sX1wiKyhjfHxcIlwiKStcIl9cIitiKyssYyl9dmFyIGI9MDtyZXR1cm4gYX0oKTtcbmZ1bmN0aW9uIHUoKXt0KCk7dmFyIGE9ci5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9ci5TeW1ib2wuaXRlcmF0b3I9ci5TeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVthXSYmYmEoQXJyYXkucHJvdG90eXBlLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBmYShhYSh0aGlzKSl9fSk7dT1mdW5jdGlvbigpe319ZnVuY3Rpb24gZmEoYSl7dSgpO2E9e25leHQ6YX07YVtyLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9ZnVuY3Rpb24gaGEoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0OmFhKGEpfX1cbnZhciBpYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuY3JlYXRlP09iamVjdC5jcmVhdGU6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31iLnByb3RvdHlwZT1hO3JldHVybiBuZXcgYn0samE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKWphPU9iamVjdC5zZXRQcm90b3R5cGVPZjtlbHNle3ZhciBrYTthOnt2YXIgbGE9e1Y6ITB9LG1hPXt9O3RyeXttYS5fX3Byb3RvX189bGE7a2E9bWEuVjticmVhayBhfWNhdGNoKGEpe31rYT0hMX1qYT1rYT9mdW5jdGlvbihhLGIpe2EuX19wcm90b19fPWI7aWYoYS5fX3Byb3RvX18hPT1iKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgZXh0ZW5zaWJsZVwiKTtyZXR1cm4gYX06bnVsbH12YXIgbmE9amE7XG5mdW5jdGlvbiBvYShhLGIpe2EucHJvdG90eXBlPWlhKGIucHJvdG90eXBlKTthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hO2lmKG5hKW5hKGEsYik7ZWxzZSBmb3IodmFyIGMgaW4gYilpZihcInByb3RvdHlwZVwiIT1jKWlmKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKXt2YXIgZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsYyk7ZCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYyxkKX1lbHNlIGFbY109YltjXTthLk89Yi5wcm90b3R5cGV9XG5mdW5jdGlvbiBwYShhLGIpe3UoKTthIGluc3RhbmNlb2YgU3RyaW5nJiYoYSs9XCJcIik7dmFyIGM9MCxkPXtuZXh0OmZ1bmN0aW9uKCl7aWYoYzxhLmxlbmd0aCl7dmFyIGY9YysrO3JldHVybnt2YWx1ZTpiKGYsYVtmXSksZG9uZTohMX19ZC5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07cmV0dXJuIGQubmV4dCgpfX07ZFtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIGR9O3JldHVybiBkfWZ1bmN0aW9uIHYoYSxiKXtpZihiKXt2YXIgYz1yO2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aC0xO2QrKyl7dmFyIGY9YVtkXTtmIGluIGN8fChjW2ZdPXt9KTtjPWNbZl19YT1hW2EubGVuZ3RoLTFdO2Q9Y1thXTtiPWIoZCk7YiE9ZCYmbnVsbCE9YiYmYmEoYyxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfX1cbnYoXCJBcnJheS5wcm90b3R5cGUua2V5c1wiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oKXtyZXR1cm4gcGEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYn0pfX0pO3YoXCJBcnJheS5wcm90b3R5cGUuZmluZFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oYixjKXthOnt2YXIgZD10aGlzO2QgaW5zdGFuY2VvZiBTdHJpbmcmJihkPVN0cmluZyhkKSk7Zm9yKHZhciBmPWQubGVuZ3RoLGc9MDtnPGY7ZysrKXt2YXIgZT1kW2ddO2lmKGIuY2FsbChjLGUsZyxkKSl7Yj1lO2JyZWFrIGF9fWI9dm9pZCAwfXJldHVybiBifX0pO3YoXCJPYmplY3QuaXNcIixmdW5jdGlvbihhKXtyZXR1cm4gYT9hOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9PT1jPzAhPT1ifHwxL2I9PT0xL2M6YiE9PWImJmMhPT1jfX0pO1xudihcIkFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1wiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzO2QgaW5zdGFuY2VvZiBTdHJpbmcmJihkPVN0cmluZyhkKSk7dmFyIGY9ZC5sZW5ndGg7Yz1jfHwwO2ZvcigwPmMmJihjPU1hdGgubWF4KGMrZiwwKSk7YzxmO2MrKyl7dmFyIGc9ZFtjXTtpZihnPT09Ynx8T2JqZWN0LmlzKGcsYikpcmV0dXJuITB9cmV0dXJuITF9fSk7XG52KFwiUHJvbWlzZVwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZSl7dGhpcy5iPTA7dGhpcy5jPXZvaWQgMDt0aGlzLmE9W107dmFyIGg9dGhpcy5mKCk7dHJ5e2UoaC5yZXNvbHZlLGgucmVqZWN0KX1jYXRjaChrKXtoLnJlamVjdChrKX19ZnVuY3Rpb24gYygpe3RoaXMuYT1udWxsfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBiP2U6bmV3IGIoZnVuY3Rpb24oaCl7aChlKX0pfWlmKGEpcmV0dXJuIGE7Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihlKXtpZihudWxsPT10aGlzLmEpe3RoaXMuYT1bXTt2YXIgaD10aGlzO3RoaXMuYyhmdW5jdGlvbigpe2guZygpfSl9dGhpcy5hLnB1c2goZSl9O3ZhciBmPXIuc2V0VGltZW91dDtjLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGUpe2YoZSwwKX07Yy5wcm90b3R5cGUuZz1mdW5jdGlvbigpe2Zvcig7dGhpcy5hJiZ0aGlzLmEubGVuZ3RoOyl7dmFyIGU9dGhpcy5hO3RoaXMuYT1bXTtmb3IodmFyIGg9MDtoPGUubGVuZ3RoOysraCl7dmFyIGs9XG5lW2hdO2VbaF09bnVsbDt0cnl7aygpfWNhdGNoKGwpe3RoaXMuZihsKX19fXRoaXMuYT1udWxsfTtjLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGUpe3RoaXMuYyhmdW5jdGlvbigpe3Rocm93IGU7fSl9O2IucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGwpe3JldHVybiBmdW5jdGlvbihtKXtrfHwoaz0hMCxsLmNhbGwoaCxtKSl9fXZhciBoPXRoaXMsaz0hMTtyZXR1cm57cmVzb2x2ZTplKHRoaXMucykscmVqZWN0OmUodGhpcy5nKX19O2IucHJvdG90eXBlLnM9ZnVuY3Rpb24oZSl7aWYoZT09PXRoaXMpdGhpcy5nKG5ldyBUeXBlRXJyb3IoXCJBIFByb21pc2UgY2Fubm90IHJlc29sdmUgdG8gaXRzZWxmXCIpKTtlbHNlIGlmKGUgaW5zdGFuY2VvZiBiKXRoaXMudihlKTtlbHNle2E6c3dpdGNoKHR5cGVvZiBlKXtjYXNlIFwib2JqZWN0XCI6dmFyIGg9bnVsbCE9ZTticmVhayBhO2Nhc2UgXCJmdW5jdGlvblwiOmg9ITA7YnJlYWsgYTtkZWZhdWx0Omg9ITF9aD90aGlzLm0oZSk6dGhpcy5oKGUpfX07XG5iLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGUpe3ZhciBoPXZvaWQgMDt0cnl7aD1lLnRoZW59Y2F0Y2goayl7dGhpcy5nKGspO3JldHVybn1cImZ1bmN0aW9uXCI9PXR5cGVvZiBoP3RoaXMudyhoLGUpOnRoaXMuaChlKX07Yi5wcm90b3R5cGUuZz1mdW5jdGlvbihlKXt0aGlzLmkoMixlKX07Yi5wcm90b3R5cGUuaD1mdW5jdGlvbihlKXt0aGlzLmkoMSxlKX07Yi5wcm90b3R5cGUuaT1mdW5jdGlvbihlLGgpe2lmKDAhPXRoaXMuYil0aHJvdyBFcnJvcihcIkNhbm5vdCBzZXR0bGUoXCIrZStcIiwgXCIraCtcIik6IFByb21pc2UgYWxyZWFkeSBzZXR0bGVkIGluIHN0YXRlXCIrdGhpcy5iKTt0aGlzLmI9ZTt0aGlzLmM9aDt0aGlzLmwoKX07Yi5wcm90b3R5cGUubD1mdW5jdGlvbigpe2lmKG51bGwhPXRoaXMuYSl7Zm9yKHZhciBlPTA7ZTx0aGlzLmEubGVuZ3RoOysrZSlnLmIodGhpcy5hW2VdKTt0aGlzLmE9bnVsbH19O3ZhciBnPW5ldyBjO2IucHJvdG90eXBlLnY9ZnVuY3Rpb24oZSl7dmFyIGg9dGhpcy5mKCk7XG5lLkYoaC5yZXNvbHZlLGgucmVqZWN0KX07Yi5wcm90b3R5cGUudz1mdW5jdGlvbihlLGgpe3ZhciBrPXRoaXMuZigpO3RyeXtlLmNhbGwoaCxrLnJlc29sdmUsay5yZWplY3QpfWNhdGNoKGwpe2sucmVqZWN0KGwpfX07Yi5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLGgpe2Z1bmN0aW9uIGsocSx3KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBxP2Z1bmN0aW9uKEEpe3RyeXtsKHEoQSkpfWNhdGNoKEwpe20oTCl9fTp3fXZhciBsLG0scD1uZXcgYihmdW5jdGlvbihxLHcpe2w9cTttPXd9KTt0aGlzLkYoayhlLGwpLGsoaCxtKSk7cmV0dXJuIHB9O2IucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLGUpfTtiLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGUsaCl7ZnVuY3Rpb24gaygpe3N3aXRjaChsLmIpe2Nhc2UgMTplKGwuYyk7YnJlYWs7Y2FzZSAyOmgobC5jKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiVW5leHBlY3RlZCBzdGF0ZTogXCIrXG5sLmIpO319dmFyIGw9dGhpcztudWxsPT10aGlzLmE/Zy5iKGspOnRoaXMuYS5wdXNoKGspfTtiLnJlc29sdmU9ZDtiLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGIoZnVuY3Rpb24oaCxrKXtrKGUpfSl9O2IucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGIoZnVuY3Rpb24oaCxrKXtmb3IodmFyIGw9aGEoZSksbT1sLm5leHQoKTshbS5kb25lO209bC5uZXh0KCkpZChtLnZhbHVlKS5GKGgsayl9KX07Yi5hbGw9ZnVuY3Rpb24oZSl7dmFyIGg9aGEoZSksaz1oLm5leHQoKTtyZXR1cm4gay5kb25lP2QoW10pOm5ldyBiKGZ1bmN0aW9uKGwsbSl7ZnVuY3Rpb24gcChBKXtyZXR1cm4gZnVuY3Rpb24oTCl7cVtBXT1MO3ctLTswPT13JiZsKHEpfX12YXIgcT1bXSx3PTA7ZG8gcS5wdXNoKHZvaWQgMCksdysrLGQoay52YWx1ZSkuRihwKHEubGVuZ3RoLTEpLG0pLGs9aC5uZXh0KCk7d2hpbGUoIWsuZG9uZSl9KX07cmV0dXJuIGJ9KTt2YXIgcWE9cWF8fHt9LHg9dGhpc3x8c2VsZjtcbmZ1bmN0aW9uIHkoYSxiKXthPWEuc3BsaXQoXCIuXCIpO2I9Ynx8eDtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihiPWJbYVtjXV0sbnVsbD09YilyZXR1cm4gbnVsbDtyZXR1cm4gYn1mdW5jdGlvbiByYSgpe31mdW5jdGlvbiBzYShhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT1iJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWJ9dmFyIHRhPVwiY2xvc3VyZV91aWRfXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCksdWE9MDtmdW5jdGlvbiB2YShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIHdhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBmPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoZixkKTtyZXR1cm4gYS5hcHBseShiLGYpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHooYSxiLGMpe0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/ej12YTp6PXdhO3JldHVybiB6LmFwcGx5KG51bGwsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIEIoYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EuTz1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hfTtmdW5jdGlvbiB4YShhKXt0aGlzLmE9YXx8e319eGEucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hW2FdfTt4YS5wcm90b3R5cGUuRz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyh0aGlzLmEpfTtmdW5jdGlvbiBDKGEsYixjLGQpe3RoaXMuZj1hO3RoaXMuYz1iO3RoaXMuYj1jO3RoaXMuYT1kfUMucHJvdG90eXBlLmdldFJlcXVlc3RNZXNzYWdlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZn07Qy5wcm90b3R5cGUuZ2V0TWV0aG9kRGVzY3JpcHRvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O0MucHJvdG90eXBlLmdldE1ldGFkYXRhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYn07Qy5wcm90b3R5cGUuZ2V0Q2FsbE9wdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTtmdW5jdGlvbiBEKGEsYixjLGQpe2M9dm9pZCAwPT09Yz97fTpjO3RoaXMuYz1hO3RoaXMuYT1jO3RoaXMuYj1iO3RoaXMuZj12b2lkIDA9PT1kP251bGw6ZH1ELnByb3RvdHlwZS5nZXRSZXNwb25zZU1lc3NhZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jfTtELnByb3RvdHlwZS5nZXRNZXRhZGF0YT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF9O0QucHJvdG90eXBlLmdldE1ldGhvZERlc2NyaXB0b3I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtELnByb3RvdHlwZS5nZXRTdGF0dXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mfTtmdW5jdGlvbiB5YShhLGIsYyxkLGYsZyl7dGhpcy5uYW1lPWE7dGhpcy5hPWY7dGhpcy5iPWd9ZnVuY3Rpb24gemEoYSxiLGMpe2M9dm9pZCAwPT09Yz97fTpjO3ZhciBkPXZvaWQgMD09PWQ/bmV3IHhhOmQ7cmV0dXJuIG5ldyBDKGIsYSxjLGQpfXlhLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZX07eWEucHJvdG90eXBlLmdldE5hbWU9eWEucHJvdG90eXBlLmdldE5hbWU7ZnVuY3Rpb24gQWEoYSl7c3dpdGNoKGEpe2Nhc2UgMjAwOnJldHVybiAwO2Nhc2UgNDAwOnJldHVybiAzO2Nhc2UgNDAxOnJldHVybiAxNjtjYXNlIDQwMzpyZXR1cm4gNztjYXNlIDQwNDpyZXR1cm4gNTtjYXNlIDQwOTpyZXR1cm4gMTA7Y2FzZSA0MTI6cmV0dXJuIDk7Y2FzZSA0Mjk6cmV0dXJuIDg7Y2FzZSA0OTk6cmV0dXJuIDE7Y2FzZSA1MDA6cmV0dXJuIDI7Y2FzZSA1MDE6cmV0dXJuIDEyO2Nhc2UgNTAzOnJldHVybiAxNDtjYXNlIDUwNDpyZXR1cm4gNDtkZWZhdWx0OnJldHVybiAyfX1cbmZ1bmN0aW9uIEJhKGEpe3N3aXRjaChhKXtjYXNlIDA6cmV0dXJuXCJPS1wiO2Nhc2UgMTpyZXR1cm5cIkNBTkNFTExFRFwiO2Nhc2UgMjpyZXR1cm5cIlVOS05PV05cIjtjYXNlIDM6cmV0dXJuXCJJTlZBTElEX0FSR1VNRU5UXCI7Y2FzZSA0OnJldHVyblwiREVBRExJTkVfRVhDRUVERURcIjtjYXNlIDU6cmV0dXJuXCJOT1RfRk9VTkRcIjtjYXNlIDY6cmV0dXJuXCJBTFJFQURZX0VYSVNUU1wiO2Nhc2UgNzpyZXR1cm5cIlBFUk1JU1NJT05fREVOSUVEXCI7Y2FzZSAxNjpyZXR1cm5cIlVOQVVUSEVOVElDQVRFRFwiO2Nhc2UgODpyZXR1cm5cIlJFU09VUkNFX0VYSEFVU1RFRFwiO2Nhc2UgOTpyZXR1cm5cIkZBSUxFRF9QUkVDT05ESVRJT05cIjtjYXNlIDEwOnJldHVyblwiQUJPUlRFRFwiO2Nhc2UgMTE6cmV0dXJuXCJPVVRfT0ZfUkFOR0VcIjtjYXNlIDEyOnJldHVyblwiVU5JTVBMRU1FTlRFRFwiO2Nhc2UgMTM6cmV0dXJuXCJJTlRFUk5BTFwiO2Nhc2UgMTQ6cmV0dXJuXCJVTkFWQUlMQUJMRVwiO2Nhc2UgMTU6cmV0dXJuXCJEQVRBX0xPU1NcIjtcbmRlZmF1bHQ6cmV0dXJuXCJcIn19O2Z1bmN0aW9uIEUoYSxiLGMpe2M9dm9pZCAwPT09Yz97fTpjO2I9RXJyb3IuY2FsbCh0aGlzLGIpO3RoaXMubWVzc2FnZT1iLm1lc3NhZ2U7XCJzdGFja1wiaW4gYiYmKHRoaXMuc3RhY2s9Yi5zdGFjayk7dGhpcy5jb2RlPWE7dGhpcy5tZXRhZGF0YT1jfW9hKEUsRXJyb3IpO0UucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJScGNFcnJvcihcIisoQmEodGhpcy5jb2RlKXx8U3RyaW5nKHRoaXMuY29kZSkpK1wiKVwiO3RoaXMubWVzc2FnZSYmKGErPVwiOiBcIit0aGlzLm1lc3NhZ2UpO3JldHVybiBhfTtFLnByb3RvdHlwZS5uYW1lPVwiUnBjRXJyb3JcIjtmdW5jdGlvbiBDYShhKXt0aGlzLmE9YX1DYS5wcm90b3R5cGUub249ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImRhdGFcIj09YXx8XCJlcnJvclwiPT1hP3RoaXM6dGhpcy5hLm9uKGEsYil9O0NhLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmEucmVtb3ZlTGlzdGVuZXIoYSxiKX07Q2EucHJvdG90eXBlLmNhbmNlbD1mdW5jdGlvbigpe3RoaXMuYS5jYW5jZWwoKX07ZnVuY3Rpb24gRGEoYSl7c3dpdGNoKGEpe2Nhc2UgMDpyZXR1cm5cIk5vIEVycm9yXCI7Y2FzZSAxOnJldHVyblwiQWNjZXNzIGRlbmllZCB0byBjb250ZW50IGRvY3VtZW50XCI7Y2FzZSAyOnJldHVyblwiRmlsZSBub3QgZm91bmRcIjtjYXNlIDM6cmV0dXJuXCJGaXJlZm94IHNpbGVudGx5IGVycm9yZWRcIjtjYXNlIDQ6cmV0dXJuXCJBcHBsaWNhdGlvbiBjdXN0b20gZXJyb3JcIjtjYXNlIDU6cmV0dXJuXCJBbiBleGNlcHRpb24gb2NjdXJyZWRcIjtjYXNlIDY6cmV0dXJuXCJIdHRwIHJlc3BvbnNlIGF0IDQwMCBvciA1MDAgbGV2ZWxcIjtjYXNlIDc6cmV0dXJuXCJSZXF1ZXN0IHdhcyBhYm9ydGVkXCI7Y2FzZSA4OnJldHVyblwiUmVxdWVzdCB0aW1lZCBvdXRcIjtjYXNlIDk6cmV0dXJuXCJUaGUgcmVzb3VyY2UgaXMgbm90IGF2YWlsYWJsZSBvZmZsaW5lXCI7ZGVmYXVsdDpyZXR1cm5cIlVucmVjb2duaXplZCBlcnJvciBjb2RlXCJ9fTtmdW5jdGlvbiBGKGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsRik7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX1CKEYsRXJyb3IpO0YucHJvdG90eXBlLm5hbWU9XCJDdXN0b21FcnJvclwiO2Z1bmN0aW9uIEVhKGEsYil7YT1hLnNwbGl0KFwiJXNcIik7Zm9yKHZhciBjPVwiXCIsZD1hLmxlbmd0aC0xLGY9MDtmPGQ7ZisrKWMrPWFbZl0rKGY8Yi5sZW5ndGg/YltmXTpcIiVzXCIpO0YuY2FsbCh0aGlzLGMrYVtkXSl9QihFYSxGKTtFYS5wcm90b3R5cGUubmFtZT1cIkFzc2VydGlvbkVycm9yXCI7ZnVuY3Rpb24gRmEoYSxiKXt0aHJvdyBuZXcgRWEoXCJGYWlsdXJlXCIrKGE/XCI6IFwiK2E6XCJcIiksQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTt9O2Z1bmN0aW9uIEdhKCl7dGhpcy5sPW51bGw7dGhpcy5pPVtdO3RoaXMubT0wO3RoaXMuYj1IYTt0aGlzLmY9dGhpcy5hPXRoaXMuaD0wO3RoaXMuYz1udWxsO3RoaXMuZz0wfVxuZnVuY3Rpb24gSWEoYSxiKXtmdW5jdGlvbiBjKGwpe2w9PUphP2UuaD1sOmw9PUc/ZS5oPWw6S2EoZSxoLGssXCJpbnZhbGlkIGZyYW1lIGJ5dGVcIik7ZS5iPUxhO2UuYT0wO2UuZj0wfWZ1bmN0aW9uIGQobCl7ZS5mKys7ZS5hPShlLmE8PDgpK2w7ND09ZS5mJiYoZS5iPU1hLGUuZz0wLFwidW5kZWZpbmVkXCIhPT10eXBlb2YgVWludDhBcnJheT9lLmM9bmV3IFVpbnQ4QXJyYXkoZS5hKTplLmM9QXJyYXkoZS5hKSwwPT1lLmEmJmcoKSl9ZnVuY3Rpb24gZihsKXtlLmNbZS5nKytdPWw7ZS5nPT1lLmEmJmcoKX1mdW5jdGlvbiBnKCl7dmFyIGw9e307bFtlLmhdPWUuYztlLmkucHVzaChsKTtlLmI9SGF9dmFyIGU9YSxoLGs9MDtmb3IoYiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXl8fGIgaW5zdGFuY2VvZiBBcnJheT9oPWI6aD1uZXcgVWludDhBcnJheShiKTtrPGgubGVuZ3RoOyl7c3dpdGNoKGUuYil7Y2FzZSBOYTpLYShlLGgsayxcInN0cmVhbSBhbHJlYWR5IGJyb2tlblwiKTticmVhaztjYXNlIEhhOmMoaFtrXSk7XG5icmVhaztjYXNlIExhOmQoaFtrXSk7YnJlYWs7Y2FzZSBNYTpmKGhba10pO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJ1bmV4cGVjdGVkIHBhcnNlciBzdGF0ZTogXCIrZS5iKTt9ZS5tKys7aysrfWE9ZS5pO2UuaT1bXTtyZXR1cm4gMDxhLmxlbmd0aD9hOm51bGx9dmFyIEhhPTAsTGE9MSxNYT0yLE5hPTMsSmE9MCxHPTEyODtmdW5jdGlvbiBLYShhLGIsYyxkKXthLmI9TmE7YS5sPVwiVGhlIHN0cmVhbSBpcyBicm9rZW4gQFwiK2EubStcIi9cIitjK1wiLiBFcnJvcjogXCIrZCtcIi4gV2l0aCBpbnB1dDpcXG5cIitiO3Rocm93IEVycm9yKGEubCk7fTt2YXIgT2E9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuXCJzdHJpbmdcIiE9PXR5cGVvZiBifHwxIT1iLmxlbmd0aD8tMTphLmluZGV4T2YoYiwwKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihjIGluIGEmJmFbY109PT1iKXJldHVybiBjO3JldHVybi0xfTt2YXIgUGE9U3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGEpe3JldHVybiBhLnRyaW0oKX06ZnVuY3Rpb24oYSl7cmV0dXJuL15bXFxzXFx4YTBdKihbXFxzXFxTXSo/KVtcXHNcXHhhMF0qJC8uZXhlYyhhKVsxXX07ZnVuY3Rpb24gSChhLGIpe3JldHVybi0xIT1hLmluZGV4T2YoYil9ZnVuY3Rpb24gUWEoYSxiKXtyZXR1cm4gYTxiPy0xOmE+Yj8xOjB9O3ZhciBJO2E6e3ZhciBSYT14Lm5hdmlnYXRvcjtpZihSYSl7dmFyIFNhPVJhLnVzZXJBZ2VudDtpZihTYSl7ST1TYTticmVhayBhfX1JPVwiXCJ9O2Z1bmN0aW9uIFRhKGEsYil7Zm9yKHZhciBjIGluIGEpYi5jYWxsKHZvaWQgMCxhW2NdLGMsYSl9ZnVuY3Rpb24gVWEoYSxiKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1iLmNhbGwodm9pZCAwLGFbZF0sZCxhKTtyZXR1cm4gY312YXIgVmE9XCJjb25zdHJ1Y3RvciBoYXNPd25Qcm9wZXJ0eSBpc1Byb3RvdHlwZU9mIHByb3BlcnR5SXNFbnVtZXJhYmxlIHRvTG9jYWxlU3RyaW5nIHRvU3RyaW5nIHZhbHVlT2ZcIi5zcGxpdChcIiBcIik7ZnVuY3Rpb24gV2EoYSxiKXtmb3IodmFyIGMsZCxmPTE7Zjxhcmd1bWVudHMubGVuZ3RoO2YrKyl7ZD1hcmd1bWVudHNbZl07Zm9yKGMgaW4gZClhW2NdPWRbY107Zm9yKHZhciBnPTA7ZzxWYS5sZW5ndGg7ZysrKWM9VmFbZ10sT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYykmJihhW2NdPWRbY10pfX07ZnVuY3Rpb24gWGEoYSl7dmFyIGI9MTthPWEuc3BsaXQoXCI6XCIpO2Zvcih2YXIgYz1bXTswPGImJmEubGVuZ3RoOyljLnB1c2goYS5zaGlmdCgpKSxiLS07YS5sZW5ndGgmJmMucHVzaChhLmpvaW4oXCI6XCIpKTtyZXR1cm4gY307ZnVuY3Rpb24gWWEoYSl7WWFbXCIgXCJdKGEpO3JldHVybiBhfVlhW1wiIFwiXT1yYTtmdW5jdGlvbiBaYShhKXt2YXIgYj0kYTtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsOSk/Yls5XTpiWzldPWEoOSl9O3ZhciBhYj1IKEksXCJPcGVyYVwiKSxiYj1IKEksXCJUcmlkZW50XCIpfHxIKEksXCJNU0lFXCIpLGNiPUgoSSxcIkVkZ2VcIiksZGI9SChJLFwiR2Vja29cIikmJiEoSChJLnRvTG93ZXJDYXNlKCksXCJ3ZWJraXRcIikmJiFIKEksXCJFZGdlXCIpKSYmIShIKEksXCJUcmlkZW50XCIpfHxIKEksXCJNU0lFXCIpKSYmIUgoSSxcIkVkZ2VcIiksZWI9SChJLnRvTG93ZXJDYXNlKCksXCJ3ZWJraXRcIikmJiFIKEksXCJFZGdlXCIpLGZiO1xuYTp7dmFyIGdiPVwiXCIsaGI9ZnVuY3Rpb24oKXt2YXIgYT1JO2lmKGRiKXJldHVybi9ydjooW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihjYilyZXR1cm4vRWRnZVxcLyhbXFxkXFwuXSspLy5leGVjKGEpO2lmKGJiKXJldHVybi9cXGIoPzpNU0lFfHJ2KVs6IF0oW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihlYilyZXR1cm4vV2ViS2l0XFwvKFxcUyspLy5leGVjKGEpO2lmKGFiKXJldHVybi8oPzpWZXJzaW9uKVsgXFwvXT8oXFxTKykvLmV4ZWMoYSl9KCk7aGImJihnYj1oYj9oYlsxXTpcIlwiKTtpZihiYil7dmFyIGliLGpiPXguZG9jdW1lbnQ7aWI9amI/amIuZG9jdW1lbnRNb2RlOnZvaWQgMDtpZihudWxsIT1pYiYmaWI+cGFyc2VGbG9hdChnYikpe2ZiPVN0cmluZyhpYik7YnJlYWsgYX19ZmI9Z2J9dmFyICRhPXt9O1xuZnVuY3Rpb24ga2IoKXtyZXR1cm4gWmEoZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPVBhKFN0cmluZyhmYikpLnNwbGl0KFwiLlwiKSxjPVBhKFwiOVwiKS5zcGxpdChcIi5cIiksZD1NYXRoLm1heChiLmxlbmd0aCxjLmxlbmd0aCksZj0wOzA9PWEmJmY8ZDtmKyspe3ZhciBnPWJbZl18fFwiXCIsZT1jW2ZdfHxcIlwiO2Rve2c9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoZyl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtlPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGUpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aWYoMD09Z1swXS5sZW5ndGgmJjA9PWVbMF0ubGVuZ3RoKWJyZWFrO2E9UWEoMD09Z1sxXS5sZW5ndGg/MDpwYXJzZUludChnWzFdLDEwKSwwPT1lWzFdLmxlbmd0aD8wOnBhcnNlSW50KGVbMV0sMTApKXx8UWEoMD09Z1syXS5sZW5ndGgsMD09ZVsyXS5sZW5ndGgpfHxRYShnWzJdLGVbMl0pO2c9Z1szXTtlPWVbM119d2hpbGUoMD09YSl9cmV0dXJuIDA8PWF9KX07ZnVuY3Rpb24gbGIoKXswIT1tYiYmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLHRhKSYmdGhpc1t0YV18fCh0aGlzW3RhXT0rK3VhKSk7dGhpcy5LPXRoaXMuS312YXIgbWI9MDtsYi5wcm90b3R5cGUuSz0hMTt2YXIgbmI9T2JqZWN0LmZyZWV6ZXx8ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2Z1bmN0aW9uIEooYSxiKXt0aGlzLnR5cGU9YTt0aGlzLmE9dGhpcy50YXJnZXQ9Yjt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITF9Si5wcm90b3R5cGUuYj1mdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMH07dmFyIG9iPWZ1bmN0aW9uKCl7aWYoIXguYWRkRXZlbnRMaXN0ZW5lcnx8IU9iamVjdC5kZWZpbmVQcm9wZXJ0eSlyZXR1cm4hMTt2YXIgYT0hMSxiPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7YT0hMH19KTt0cnl7eC5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLHJhLGIpLHgucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixyYSxiKX1jYXRjaChjKXt9cmV0dXJuIGF9KCk7ZnVuY3Rpb24gSyhhLGIpe0ouY2FsbCh0aGlzLGE/YS50eXBlOlwiXCIpO3RoaXMucmVsYXRlZFRhcmdldD10aGlzLmE9dGhpcy50YXJnZXQ9bnVsbDt0aGlzLmJ1dHRvbj10aGlzLnNjcmVlblk9dGhpcy5zY3JlZW5YPXRoaXMuY2xpZW50WT10aGlzLmNsaWVudFg9MDt0aGlzLmtleT1cIlwiO3RoaXMubWV0YUtleT10aGlzLnNoaWZ0S2V5PXRoaXMuYWx0S2V5PXRoaXMuY3RybEtleT0hMTt0aGlzLnBvaW50ZXJJZD0wO3RoaXMucG9pbnRlclR5cGU9XCJcIjt0aGlzLmM9bnVsbDtpZihhKXt2YXIgYz10aGlzLnR5cGU9YS50eXBlLGQ9YS5jaGFuZ2VkVG91Y2hlcyYmYS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/YS5jaGFuZ2VkVG91Y2hlc1swXTpudWxsO3RoaXMudGFyZ2V0PWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQ7dGhpcy5hPWI7aWYoYj1hLnJlbGF0ZWRUYXJnZXQpe2lmKGRiKXthOnt0cnl7WWEoYi5ub2RlTmFtZSk7dmFyIGY9ITA7YnJlYWsgYX1jYXRjaChnKXt9Zj0hMX1mfHwoYj1udWxsKX19ZWxzZVwibW91c2VvdmVyXCI9PVxuYz9iPWEuZnJvbUVsZW1lbnQ6XCJtb3VzZW91dFwiPT1jJiYoYj1hLnRvRWxlbWVudCk7dGhpcy5yZWxhdGVkVGFyZ2V0PWI7ZD8odGhpcy5jbGllbnRYPXZvaWQgMCE9PWQuY2xpZW50WD9kLmNsaWVudFg6ZC5wYWdlWCx0aGlzLmNsaWVudFk9dm9pZCAwIT09ZC5jbGllbnRZP2QuY2xpZW50WTpkLnBhZ2VZLHRoaXMuc2NyZWVuWD1kLnNjcmVlblh8fDAsdGhpcy5zY3JlZW5ZPWQuc2NyZWVuWXx8MCk6KHRoaXMuY2xpZW50WD12b2lkIDAhPT1hLmNsaWVudFg/YS5jbGllbnRYOmEucGFnZVgsdGhpcy5jbGllbnRZPXZvaWQgMCE9PWEuY2xpZW50WT9hLmNsaWVudFk6YS5wYWdlWSx0aGlzLnNjcmVlblg9YS5zY3JlZW5YfHwwLHRoaXMuc2NyZWVuWT1hLnNjcmVlbll8fDApO3RoaXMuYnV0dG9uPWEuYnV0dG9uO3RoaXMua2V5PWEua2V5fHxcIlwiO3RoaXMuY3RybEtleT1hLmN0cmxLZXk7dGhpcy5hbHRLZXk9YS5hbHRLZXk7dGhpcy5zaGlmdEtleT1hLnNoaWZ0S2V5O3RoaXMubWV0YUtleT1cbmEubWV0YUtleTt0aGlzLnBvaW50ZXJJZD1hLnBvaW50ZXJJZHx8MDt0aGlzLnBvaW50ZXJUeXBlPVwic3RyaW5nXCI9PT10eXBlb2YgYS5wb2ludGVyVHlwZT9hLnBvaW50ZXJUeXBlOnBiW2EucG9pbnRlclR5cGVdfHxcIlwiO3RoaXMuYz1hO2EuZGVmYXVsdFByZXZlbnRlZCYmSy5PLmIuY2FsbCh0aGlzKX19QihLLEopO3ZhciBwYj1uYih7MjpcInRvdWNoXCIsMzpcInBlblwiLDQ6XCJtb3VzZVwifSk7Sy5wcm90b3R5cGUuYj1mdW5jdGlvbigpe0suTy5iLmNhbGwodGhpcyk7dmFyIGE9dGhpcy5jO2EucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITF9O3ZhciBNPVwiY2xvc3VyZV9saXN0ZW5hYmxlX1wiKygxRTYqTWF0aC5yYW5kb20oKXwwKTt2YXIgcWI9MDtmdW5jdGlvbiByYihhLGIsYyxkLGYpe3RoaXMubGlzdGVuZXI9YTt0aGlzLnByb3h5PW51bGw7dGhpcy5zcmM9Yjt0aGlzLnR5cGU9Yzt0aGlzLmNhcHR1cmU9ISFkO3RoaXMuSD1mO3RoaXMua2V5PSsrcWI7dGhpcy5BPXRoaXMuRD0hMX1mdW5jdGlvbiBzYihhKXthLkE9ITA7YS5saXN0ZW5lcj1udWxsO2EucHJveHk9bnVsbDthLnNyYz1udWxsO2EuSD1udWxsfTtmdW5jdGlvbiB0YihhKXt0aGlzLnNyYz1hO3RoaXMuYT17fTt0aGlzLmI9MH10Yi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYixjLGQsZil7dmFyIGc9YS50b1N0cmluZygpO2E9dGhpcy5hW2ddO2F8fChhPXRoaXMuYVtnXT1bXSx0aGlzLmIrKyk7dmFyIGU9dWIoYSxiLGQsZik7LTE8ZT8oYj1hW2VdLGN8fChiLkQ9ITEpKTooYj1uZXcgcmIoYix0aGlzLnNyYyxnLCEhZCxmKSxiLkQ9YyxhLnB1c2goYikpO3JldHVybiBifTt0Yi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYixjLGQpe2E9YS50b1N0cmluZygpO2lmKCEoYSBpbiB0aGlzLmEpKXJldHVybiExO3ZhciBmPXRoaXMuYVthXTtiPXViKGYsYixjLGQpO3JldHVybi0xPGI/KHNiKGZbYl0pLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChmLGIsMSksMD09Zi5sZW5ndGgmJihkZWxldGUgdGhpcy5hW2FdLHRoaXMuYi0tKSwhMCk6ITF9O1xuZnVuY3Rpb24gdmIoYSxiKXt2YXIgYz1iLnR5cGU7aWYoYyBpbiBhLmEpe3ZhciBkPWEuYVtjXSxmPU9hKGQsYiksZzsoZz0wPD1mKSYmQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGQsZiwxKTtnJiYoc2IoYiksMD09YS5hW2NdLmxlbmd0aCYmKGRlbGV0ZSBhLmFbY10sYS5iLS0pKX19ZnVuY3Rpb24gdWIoYSxiLGMsZCl7Zm9yKHZhciBmPTA7ZjxhLmxlbmd0aDsrK2Ype3ZhciBnPWFbZl07aWYoIWcuQSYmZy5saXN0ZW5lcj09YiYmZy5jYXB0dXJlPT0hIWMmJmcuSD09ZClyZXR1cm4gZn1yZXR1cm4tMX07dmFyIHdiPVwiY2xvc3VyZV9sbV9cIisoMUU2Kk1hdGgucmFuZG9tKCl8MCkseGI9e30seWI9MDtmdW5jdGlvbiB6YihhLGIsYyxkLGYpe2lmKGQmJmQub25jZSlBYihhLGIsYyxkLGYpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGc9MDtnPGIubGVuZ3RoO2crKyl6YihhLGJbZ10sYyxkLGYpO2Vsc2UgYz1CYihjKSxhJiZhW01dP2EuZi5hZGQoU3RyaW5nKGIpLGMsITEsc2EoZCk/ISFkLmNhcHR1cmU6ISFkLGYpOkNiKGEsYixjLCExLGQsZil9XG5mdW5jdGlvbiBDYihhLGIsYyxkLGYsZyl7aWYoIWIpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVcIik7dmFyIGU9c2EoZik/ISFmLmNhcHR1cmU6ISFmLGg9RGIoYSk7aHx8KGFbd2JdPWg9bmV3IHRiKGEpKTtjPWguYWRkKGIsYyxkLGUsZyk7aWYoIWMucHJveHkpe2Q9RWIoKTtjLnByb3h5PWQ7ZC5zcmM9YTtkLmxpc3RlbmVyPWM7aWYoYS5hZGRFdmVudExpc3RlbmVyKW9ifHwoZj1lKSx2b2lkIDA9PT1mJiYoZj0hMSksYS5hZGRFdmVudExpc3RlbmVyKGIudG9TdHJpbmcoKSxkLGYpO2Vsc2UgaWYoYS5hdHRhY2hFdmVudClhLmF0dGFjaEV2ZW50KEZiKGIudG9TdHJpbmcoKSksZCk7ZWxzZSBpZihhLmFkZExpc3RlbmVyJiZhLnJlbW92ZUxpc3RlbmVyKWEuYWRkTGlzdGVuZXIoZCk7ZWxzZSB0aHJvdyBFcnJvcihcImFkZEV2ZW50TGlzdGVuZXIgYW5kIGF0dGFjaEV2ZW50IGFyZSB1bmF2YWlsYWJsZS5cIik7eWIrK319XG5mdW5jdGlvbiBFYigpe2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGIuY2FsbChhLnNyYyxhLmxpc3RlbmVyLGMpfXZhciBiPUdiO3JldHVybiBhfWZ1bmN0aW9uIEFiKGEsYixjLGQsZil7aWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGc9MDtnPGIubGVuZ3RoO2crKylBYihhLGJbZ10sYyxkLGYpO2Vsc2UgYz1CYihjKSxhJiZhW01dP2EuZi5hZGQoU3RyaW5nKGIpLGMsITAsc2EoZCk/ISFkLmNhcHR1cmU6ISFkLGYpOkNiKGEsYixjLCEwLGQsZil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxmKXtpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKUhiKGEsYltnXSxjLGQsZik7ZWxzZShkPXNhKGQpPyEhZC5jYXB0dXJlOiEhZCxjPUJiKGMpLGEmJmFbTV0pP2EuZi5yZW1vdmUoU3RyaW5nKGIpLGMsZCxmKTphJiYoYT1EYihhKSkmJihiPWEuYVtiLnRvU3RyaW5nKCldLGE9LTEsYiYmKGE9dWIoYixjLGQsZikpLChjPS0xPGE/YlthXTpudWxsKSYmSWIoYykpfVxuZnVuY3Rpb24gSWIoYSl7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBhJiZhJiYhYS5BKXt2YXIgYj1hLnNyYztpZihiJiZiW01dKXZiKGIuZixhKTtlbHNle3ZhciBjPWEudHlwZSxkPWEucHJveHk7Yi5yZW1vdmVFdmVudExpc3RlbmVyP2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLGQsYS5jYXB0dXJlKTpiLmRldGFjaEV2ZW50P2IuZGV0YWNoRXZlbnQoRmIoYyksZCk6Yi5hZGRMaXN0ZW5lciYmYi5yZW1vdmVMaXN0ZW5lciYmYi5yZW1vdmVMaXN0ZW5lcihkKTt5Yi0tOyhjPURiKGIpKT8odmIoYyxhKSwwPT1jLmImJihjLnNyYz1udWxsLGJbd2JdPW51bGwpKTpzYihhKX19fWZ1bmN0aW9uIEZiKGEpe3JldHVybiBhIGluIHhiP3hiW2FdOnhiW2FdPVwib25cIithfWZ1bmN0aW9uIEdiKGEsYil7aWYoYS5BKWE9ITA7ZWxzZXtiPW5ldyBLKGIsdGhpcyk7dmFyIGM9YS5saXN0ZW5lcixkPWEuSHx8YS5zcmM7YS5EJiZJYihhKTthPWMuY2FsbChkLGIpfXJldHVybiBhfVxuZnVuY3Rpb24gRGIoYSl7YT1hW3diXTtyZXR1cm4gYSBpbnN0YW5jZW9mIHRiP2E6bnVsbH12YXIgSmI9XCJfX2Nsb3N1cmVfZXZlbnRzX2ZuX1wiKygxRTkqTWF0aC5yYW5kb20oKT4+PjApO2Z1bmN0aW9uIEJiKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhO2FbSmJdfHwoYVtKYl09ZnVuY3Rpb24oYil7cmV0dXJuIGEuaGFuZGxlRXZlbnQoYil9KTtyZXR1cm4gYVtKYl19O2Z1bmN0aW9uIE4oKXtsYi5jYWxsKHRoaXMpO3RoaXMuZj1uZXcgdGIodGhpcyk7dGhpcy5VPXRoaXN9QihOLGxiKTtOLnByb3RvdHlwZVtNXT0hMDtOLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjLGQpe3piKHRoaXMsYSxiLGMsZCl9O04ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMsZCl7SGIodGhpcyxhLGIsYyxkKX07ZnVuY3Rpb24gTyhhLGIpe2E9YS5VO3ZhciBjPWIudHlwZXx8YjtpZihcInN0cmluZ1wiPT09dHlwZW9mIGIpYj1uZXcgSihiLGEpO2Vsc2UgaWYoYiBpbnN0YW5jZW9mIEopYi50YXJnZXQ9Yi50YXJnZXR8fGE7ZWxzZXt2YXIgZD1iO2I9bmV3IEooYyxhKTtXYShiLGQpfWE9Yi5hPWE7S2IoYSxjLCEwLGIpO0tiKGEsYywhMSxiKX1cbmZ1bmN0aW9uIEtiKGEsYixjLGQpe2lmKGI9YS5mLmFbU3RyaW5nKGIpXSl7Yj1iLmNvbmNhdCgpO2Zvcih2YXIgZj0hMCxnPTA7ZzxiLmxlbmd0aDsrK2cpe3ZhciBlPWJbZ107aWYoZSYmIWUuQSYmZS5jYXB0dXJlPT1jKXt2YXIgaD1lLmxpc3RlbmVyLGs9ZS5IfHxlLnNyYztlLkQmJnZiKGEuZixlKTtmPSExIT09aC5jYWxsKGssZCkmJmZ9fX19O3ZhciBMYj14O2Z1bmN0aW9uIE1iKGEsYixjKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSljJiYoYT16KGEsYykpO2Vsc2UgaWYoYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5oYW5kbGVFdmVudClhPXooYS5oYW5kbGVFdmVudCxhKTtlbHNlIHRocm93IEVycm9yKFwiSW52YWxpZCBsaXN0ZW5lciBhcmd1bWVudFwiKTtyZXR1cm4gMjE0NzQ4MzY0NzxOdW1iZXIoYik/LTE6TGIuc2V0VGltZW91dChhLGJ8fDApfTtmdW5jdGlvbiBOYihhLGIpe3RoaXMubmFtZT1hO3RoaXMudmFsdWU9Yn1OYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lfTt2YXIgT2I9bmV3IE5iKFwiT0ZGXCIsSW5maW5pdHkpLFBiPW5ldyBOYihcIlNFVkVSRVwiLDFFMyksUWI9bmV3IE5iKFwiQ09ORklHXCIsNzAwKSxSYj1uZXcgTmIoXCJGSU5FXCIsNTAwKTtmdW5jdGlvbiBUYigpe3RoaXMuY2xlYXIoKX12YXIgVWI7VGIucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBWYihhLGIsYyl7dGhpcy5yZXNldChhfHxPYixiLGMsdm9pZCAwLHZvaWQgMCl9VmIucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBXYihhLGIpe3RoaXMuYT1udWxsO3RoaXMuZj1bXTt0aGlzLmI9KHZvaWQgMD09PWI/bnVsbDpiKXx8bnVsbDt0aGlzLmM9W107dGhpcy5nPXtnZXROYW1lOmZ1bmN0aW9uKCl7cmV0dXJuIGF9fX1cbmZ1bmN0aW9uIFhiKGEpe2lmKGEuYSlyZXR1cm4gYS5hO2lmKGEuYilyZXR1cm4gWGIoYS5iKTtGYShcIlJvb3QgbG9nZ2VyIGhhcyBubyBsZXZlbCBzZXQuXCIpO3JldHVybiBPYn1mdW5jdGlvbiBZYihhLGIpe2Zvcig7YTspYS5mLmZvckVhY2goZnVuY3Rpb24oYyl7YyhiKX0pLGE9YS5ifWZ1bmN0aW9uIFpiKCl7dGhpcy5lbnRyaWVzPXt9O3ZhciBhPW5ldyBXYihcIlwiKTthLmE9UWI7dGhpcy5lbnRyaWVzW1wiXCJdPWF9dmFyICRiO2Z1bmN0aW9uIGFjKGEsYixjKXt2YXIgZD1hLmVudHJpZXNbYl07aWYoZClyZXR1cm4gdm9pZCAwIT09YyYmKGQuYT1jKSxkO2Q9YWMoYSxiLnN1YnN0cigwLGIubGFzdEluZGV4T2YoXCIuXCIpKSk7dmFyIGY9bmV3IFdiKGIsZCk7YS5lbnRyaWVzW2JdPWY7ZC5jLnB1c2goZik7dm9pZCAwIT09YyYmKGYuYT1jKTtyZXR1cm4gZn1mdW5jdGlvbiBiYygpeyRifHwoJGI9bmV3IFpiKTtyZXR1cm4gJGJ9XG5mdW5jdGlvbiBjYyhhLGIsYyl7dmFyIGQ7aWYoZD1hKWlmKGQ9YSYmYil7ZD1iLnZhbHVlO3ZhciBmPWE/WGIoYWMoYmMoKSxhLmdldE5hbWUoKSkpOk9iO2Q9ZD49Zi52YWx1ZX1kJiYoYj1ifHxPYixkPWFjKGJjKCksYS5nZXROYW1lKCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjJiYoYz1jKCkpLFVifHwoVWI9bmV3IFRiKSxhPWEuZ2V0TmFtZSgpLGE9bmV3IFZiKGIsYyxhKSxZYihkLGEpKX1mdW5jdGlvbiBQKGEsYil7YSYmY2MoYSxSYixiKX07ZnVuY3Rpb24gZGMoKXt9ZGMucHJvdG90eXBlLmE9bnVsbDtmdW5jdGlvbiBlYyhhKXt2YXIgYjsoYj1hLmEpfHwoYj17fSxmYyhhKSYmKGJbMF09ITAsYlsxXT0hMCksYj1hLmE9Yik7cmV0dXJuIGJ9O3ZhciBnYztmdW5jdGlvbiBoYygpe31CKGhjLGRjKTtmdW5jdGlvbiBpYyhhKXtyZXR1cm4oYT1mYyhhKSk/bmV3IEFjdGl2ZVhPYmplY3QoYSk6bmV3IFhNTEh0dHBSZXF1ZXN0fWZ1bmN0aW9uIGZjKGEpe2lmKCFhLmImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBYTUxIdHRwUmVxdWVzdCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFjdGl2ZVhPYmplY3Qpe2Zvcih2YXIgYj1bXCJNU1hNTDIuWE1MSFRUUC42LjBcIixcIk1TWE1MMi5YTUxIVFRQLjMuMFwiLFwiTVNYTUwyLlhNTEhUVFBcIixcIk1pY3Jvc29mdC5YTUxIVFRQXCJdLGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTt0cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KGQpLGEuYj1kfWNhdGNoKGYpe319dGhyb3cgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIEFjdGl2ZVhPYmplY3QuIEFjdGl2ZVggbWlnaHQgYmUgZGlzYWJsZWQsIG9yIE1TWE1MIG1pZ2h0IG5vdCBiZSBpbnN0YWxsZWRcIik7fXJldHVybiBhLmJ9Z2M9bmV3IGhjO3QoKTt1KCk7ZnVuY3Rpb24gamMoYSxiKXt0aGlzLmI9YVt4LlN5bWJvbC5pdGVyYXRvcl0oKTt0aGlzLmM9Yjt0aGlzLmY9MH1qYy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtqYy5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYi5uZXh0KCk7cmV0dXJue3ZhbHVlOmEuZG9uZT92b2lkIDA6dGhpcy5jLmNhbGwodm9pZCAwLGEudmFsdWUsdGhpcy5mKyspLGRvbmU6YS5kb25lfX07ZnVuY3Rpb24ga2MoYSxiKXtyZXR1cm4gbmV3IGpjKGEsYil9dCgpO3UoKTt0KCk7dSgpO3ZhciBsYz1cIlN0b3BJdGVyYXRpb25cImluIHg/eC5TdG9wSXRlcmF0aW9uOnttZXNzYWdlOlwiU3RvcEl0ZXJhdGlvblwiLHN0YWNrOlwiXCJ9O2Z1bmN0aW9uIFEoKXt9US5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiBRLnByb3RvdHlwZS5hLmNhbGwodGhpcyl9O1EucHJvdG90eXBlLmE9ZnVuY3Rpb24oKXt0aHJvdyBsYzt9O1EucHJvdG90eXBlLnU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307ZnVuY3Rpb24gbWMoYSl7aWYoYSBpbnN0YW5jZW9mIFJ8fGEgaW5zdGFuY2VvZiBTfHxhIGluc3RhbmNlb2YgVClyZXR1cm4gYTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5leHQpcmV0dXJuIG5ldyBSKGZ1bmN0aW9uKCl7cmV0dXJuIG5jKGEpfSk7dCgpO3UoKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhW1N5bWJvbC5pdGVyYXRvcl0pcmV0dXJuIHQoKSx1KCksbmV3IFIoZnVuY3Rpb24oKXtyZXR1cm4gYVtTeW1ib2wuaXRlcmF0b3JdKCl9KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnUpcmV0dXJuIG5ldyBSKGZ1bmN0aW9uKCl7cmV0dXJuIG5jKGEudSgpKX0pO3Rocm93IEVycm9yKFwiTm90IGFuIGl0ZXJhdG9yIG9yIGl0ZXJhYmxlLlwiKTt9XG5mdW5jdGlvbiBuYyhhKXtpZighKGEgaW5zdGFuY2VvZiBRKSlyZXR1cm4gYTt2YXIgYj0hMTtyZXR1cm57bmV4dDpmdW5jdGlvbigpe2Zvcih2YXIgYzshYjspdHJ5e2M9YS5hKCk7YnJlYWt9Y2F0Y2goZCl7aWYoZCE9PWxjKXRocm93IGQ7Yj0hMH1yZXR1cm57dmFsdWU6Yyxkb25lOmJ9fX19dCgpO3UoKTtmdW5jdGlvbiBSKGEpe3RoaXMuYj1hfVIucHJvdG90eXBlLnU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFModGhpcy5iKCkpfTtSLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBUKHRoaXMuYigpKX07Ui5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3JldHVybiBuZXcgVCh0aGlzLmIoKSl9O3QoKTt1KCk7ZnVuY3Rpb24gUyhhKXt0aGlzLmI9YX1vYShTLFEpO1MucHJvdG90eXBlLmE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmIubmV4dCgpO2lmKGEuZG9uZSl0aHJvdyBsYztyZXR1cm4gYS52YWx1ZX07Uy5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiBTLnByb3RvdHlwZS5hLmNhbGwodGhpcyl9O1xuUy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBuZXcgVCh0aGlzLmIpfTtTLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBUKHRoaXMuYil9O2Z1bmN0aW9uIFQoYSl7Ui5jYWxsKHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gYX0pO3RoaXMuZj1hfW9hKFQsUik7VC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmYubmV4dCgpfTtmdW5jdGlvbiBvYyhhLGIpe3RoaXMubz17fTt0aGlzLmo9W107dGhpcy5CPXRoaXMuc2l6ZT0wO3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMTxjKXtpZihjJTIpdGhyb3cgRXJyb3IoXCJVbmV2ZW4gbnVtYmVyIG9mIGFyZ3VtZW50c1wiKTtmb3IodmFyIGQ9MDtkPGM7ZCs9Mil0aGlzLnNldChhcmd1bWVudHNbZF0sYXJndW1lbnRzW2QrMV0pfWVsc2UgYSYmdGhpcy5hZGRBbGwoYSl9bj1vYy5wcm90b3R5cGU7bi5HPWZ1bmN0aW9uKCl7cGModGhpcyk7cmV0dXJuIHRoaXMuai5jb25jYXQoKX07bi5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIFUodGhpcy5vLGEpfTtuLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5vPXt9O3RoaXMuQj10aGlzLnNpemU9dGhpcy5qLmxlbmd0aD0wfTtuLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kZWxldGUoYSl9O1xubi5kZWxldGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUodGhpcy5vLGEpPyhkZWxldGUgdGhpcy5vW2FdLC0tdGhpcy5zaXplLHRoaXMuQisrLHRoaXMuai5sZW5ndGg+Mip0aGlzLnNpemUmJnBjKHRoaXMpLCEwKTohMX07ZnVuY3Rpb24gcGMoYSl7aWYoYS5zaXplIT1hLmoubGVuZ3RoKXtmb3IodmFyIGI9MCxjPTA7YjxhLmoubGVuZ3RoOyl7dmFyIGQ9YS5qW2JdO1UoYS5vLGQpJiYoYS5qW2MrK109ZCk7YisrfWEuai5sZW5ndGg9Y31pZihhLnNpemUhPWEuai5sZW5ndGgpe3ZhciBmPXt9O2ZvcihjPWI9MDtiPGEuai5sZW5ndGg7KWQ9YS5qW2JdLFUoZixkKXx8KGEualtjKytdPWQsZltkXT0xKSxiKys7YS5qLmxlbmd0aD1jfX1uLmdldD1mdW5jdGlvbihhLGIpe3JldHVybiBVKHRoaXMubyxhKT90aGlzLm9bYV06Yn07bi5zZXQ9ZnVuY3Rpb24oYSxiKXtVKHRoaXMubyxhKXx8KHRoaXMuc2l6ZSs9MSx0aGlzLmoucHVzaChhKSx0aGlzLkIrKyk7dGhpcy5vW2FdPWJ9O1xubi5hZGRBbGw9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIG9jKWZvcih2YXIgYj1hLkcoKSxjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5zZXQoYltjXSxhLmdldChiW2NdKSk7ZWxzZSBmb3IoYiBpbiBhKXRoaXMuc2V0KGIsYVtiXSl9O24uZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLkcoKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBmPWNbZF0sZz10aGlzLmdldChmKTthLmNhbGwoYixnLGYsdGhpcyl9fTtuLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBvYyh0aGlzKX07bi5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIG1jKHRoaXMudSghMCkpLmMoKX07bi52YWx1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gbWModGhpcy51KCExKSkuYygpfTtuLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBrYyh0aGlzLmtleXMoKSxmdW5jdGlvbihiKXtyZXR1cm5bYixhLmdldChiKV19KX07XG5uLnU9ZnVuY3Rpb24oYSl7cGModGhpcyk7dmFyIGI9MCxjPXRoaXMuQixkPXRoaXMsZj1uZXcgUTtmLmE9ZnVuY3Rpb24oKXtpZihjIT1kLkIpdGhyb3cgRXJyb3IoXCJUaGUgbWFwIGhhcyBjaGFuZ2VkIHNpbmNlIHRoZSBpdGVyYXRvciB3YXMgY3JlYXRlZFwiKTtpZihiPj1kLmoubGVuZ3RoKXRocm93IGxjO3ZhciBnPWQualtiKytdO3JldHVybiBhP2c6ZC5vW2ddfTtmLm5leHQ9Zi5hLmJpbmQoZik7cmV0dXJuIGZ9O2Z1bmN0aW9uIFUoYSxiKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYil9O3ZhciBxYz0vXig/OihbXjovPyMuXSspOik/KD86XFwvXFwvKD86KFteXFxcXC8/I10qKUApPyhbXlxcXFwvPyNdKj8pKD86OihbMC05XSspKT8oPz1bXFxcXC8/I118JCkpPyhbXj8jXSspPyg/OlxcPyhbXiNdKikpPyg/OiMoW1xcc1xcU10qKSk/JC87ZnVuY3Rpb24gcmMoYSl7Ti5jYWxsKHRoaXMpO3RoaXMuaGVhZGVycz1uZXcgb2M7dGhpcy5DPWF8fG51bGw7dGhpcy5jPSExO3RoaXMuSj10aGlzLmE9bnVsbDt0aGlzLlA9dGhpcy52PVwiXCI7dGhpcy5nPTA7dGhpcy5sPVwiXCI7dGhpcy5pPXRoaXMuTj10aGlzLnM9dGhpcy5MPSExO3RoaXMuaD0wO3RoaXMudz1udWxsO3RoaXMubT1zYzt0aGlzLkk9dGhpcy5NPSExfUIocmMsTik7dmFyIHNjPVwiXCI7cmMucHJvdG90eXBlLmI9YWMoYmMoKSxcImdvb2cubmV0LlhocklvXCIsdm9pZCAwKS5nO3ZhciB0Yz0vXmh0dHBzPyQvaSx1Yz1bXCJQT1NUXCIsXCJQVVRcIl07XG5mdW5jdGlvbiB2YyhhLGIsYyl7aWYoYS5hKXRocm93IEVycm9yKFwiW2dvb2cubmV0LlhocklvXSBPYmplY3QgaXMgYWN0aXZlIHdpdGggYW5vdGhlciByZXF1ZXN0PVwiK2EuditcIjsgbmV3VXJpPVwiK2IpO2Eudj1iO2EubD1cIlwiO2EuZz0wO2EuUD1cIlBPU1RcIjthLkw9ITE7YS5jPSEwO2EuYT1hLkM/aWMoYS5DKTppYyhnYyk7YS5KPWEuQz9lYyhhLkMpOmVjKGdjKTthLmEub25yZWFkeXN0YXRlY2hhbmdlPXooYS5SLGEpO3RyeXtQKGEuYixWKGEsXCJPcGVuaW5nIFhoclwiKSksYS5OPSEwLGEuYS5vcGVuKFwiUE9TVFwiLFN0cmluZyhiKSwhMCksYS5OPSExfWNhdGNoKGcpe1AoYS5iLFYoYSxcIkVycm9yIG9wZW5pbmcgWGhyOiBcIitnLm1lc3NhZ2UpKTt3YyhhLGcpO3JldHVybn1iPWN8fFwiXCI7Yz1hLmhlYWRlcnMuY2xvbmUoKTt2YXIgZD1jLkcoKS5maW5kKGZ1bmN0aW9uKGcpe3JldHVyblwiY29udGVudC10eXBlXCI9PWcudG9Mb3dlckNhc2UoKX0pLGY9eC5Gb3JtRGF0YSYmYiBpbnN0YW5jZW9mXG54LkZvcm1EYXRhOyEoMDw9T2EodWMsXCJQT1NUXCIpKXx8ZHx8Znx8Yy5zZXQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIpO2MuZm9yRWFjaChmdW5jdGlvbihnLGUpe3RoaXMuYS5zZXRSZXF1ZXN0SGVhZGVyKGUsZyl9LGEpO2EubSYmKGEuYS5yZXNwb25zZVR5cGU9YS5tKTtcIndpdGhDcmVkZW50aWFsc1wiaW4gYS5hJiZhLmEud2l0aENyZWRlbnRpYWxzIT09YS5NJiYoYS5hLndpdGhDcmVkZW50aWFscz1hLk0pO3RyeXt4YyhhKSwwPGEuaCYmKGEuST15YyhhLmEpLFAoYS5iLFYoYSxcIldpbGwgYWJvcnQgYWZ0ZXIgXCIrYS5oK1wibXMgaWYgaW5jb21wbGV0ZSwgeGhyMiBcIithLkkpKSxhLkk/KGEuYS50aW1lb3V0PWEuaCxhLmEub250aW1lb3V0PXooYS5ULGEpKTphLnc9TWIoYS5ULGEuaCxhKSksUChhLmIsVihhLFwiU2VuZGluZyByZXF1ZXN0XCIpKSxhLnM9ITAsYS5hLnNlbmQoYiksYS5zPSExfWNhdGNoKGcpe1AoYS5iLFxuVihhLFwiU2VuZCBlcnJvcjogXCIrZy5tZXNzYWdlKSksd2MoYSxnKX19ZnVuY3Rpb24geWMoYSl7cmV0dXJuIGJiJiZrYigpJiZcIm51bWJlclwiPT09dHlwZW9mIGEudGltZW91dCYmdm9pZCAwIT09YS5vbnRpbWVvdXR9bj1yYy5wcm90b3R5cGU7bi5UPWZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHFhJiZ0aGlzLmEmJih0aGlzLmw9XCJUaW1lZCBvdXQgYWZ0ZXIgXCIrdGhpcy5oK1wibXMsIGFib3J0aW5nXCIsdGhpcy5nPTgsUCh0aGlzLmIsVih0aGlzLHRoaXMubCkpLE8odGhpcyxcInRpbWVvdXRcIiksdGhpcy5hYm9ydCg4KSl9O2Z1bmN0aW9uIHdjKGEsYil7YS5jPSExO2EuYSYmKGEuaT0hMCxhLmEuYWJvcnQoKSxhLmk9ITEpO2EubD1iO2EuZz01O3pjKGEpO0FjKGEpfWZ1bmN0aW9uIHpjKGEpe2EuTHx8KGEuTD0hMCxPKGEsXCJjb21wbGV0ZVwiKSxPKGEsXCJlcnJvclwiKSl9XG5uLmFib3J0PWZ1bmN0aW9uKGEpe3RoaXMuYSYmdGhpcy5jJiYoUCh0aGlzLmIsVih0aGlzLFwiQWJvcnRpbmdcIikpLHRoaXMuYz0hMSx0aGlzLmk9ITAsdGhpcy5hLmFib3J0KCksdGhpcy5pPSExLHRoaXMuZz1hfHw3LE8odGhpcyxcImNvbXBsZXRlXCIpLE8odGhpcyxcImFib3J0XCIpLEFjKHRoaXMpKX07bi5SPWZ1bmN0aW9uKCl7dGhpcy5LfHwodGhpcy5OfHx0aGlzLnN8fHRoaXMuaT9CYyh0aGlzKTp0aGlzLlcoKSl9O24uVz1mdW5jdGlvbigpe0JjKHRoaXMpfTtcbmZ1bmN0aW9uIEJjKGEpe2lmKGEuYyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHFhKWlmKGEuSlsxXSYmND09VyhhKSYmMj09YS5nZXRTdGF0dXMoKSlQKGEuYixWKGEsXCJMb2NhbCByZXF1ZXN0IGVycm9yIGRldGVjdGVkIGFuZCBpZ25vcmVkXCIpKTtlbHNlIGlmKGEucyYmND09VyhhKSlNYihhLlIsMCxhKTtlbHNlIGlmKE8oYSxcInJlYWR5c3RhdGVjaGFuZ2VcIiksND09VyhhKSl7UChhLmIsVihhLFwiUmVxdWVzdCBjb21wbGV0ZVwiKSk7YS5jPSExO3RyeXt2YXIgYj1hLmdldFN0YXR1cygpO2E6c3dpdGNoKGIpe2Nhc2UgMjAwOmNhc2UgMjAxOmNhc2UgMjAyOmNhc2UgMjA0OmNhc2UgMjA2OmNhc2UgMzA0OmNhc2UgMTIyMzp2YXIgYz0hMDticmVhayBhO2RlZmF1bHQ6Yz0hMX12YXIgZDtpZighKGQ9Yykpe3ZhciBmO2lmKGY9MD09PWIpe3ZhciBnPVN0cmluZyhhLnYpLm1hdGNoKHFjKVsxXXx8bnVsbDtpZighZyYmeC5zZWxmJiZ4LnNlbGYubG9jYXRpb24pe3ZhciBlPXguc2VsZi5sb2NhdGlvbi5wcm90b2NvbDtcbmc9ZS5zdWJzdHIoMCxlLmxlbmd0aC0xKX1mPSF0Yy50ZXN0KGc/Zy50b0xvd2VyQ2FzZSgpOlwiXCIpfWQ9Zn1pZihkKU8oYSxcImNvbXBsZXRlXCIpLE8oYSxcInN1Y2Nlc3NcIik7ZWxzZXthLmc9Njt0cnl7dmFyIGg9MjxXKGEpP2EuYS5zdGF0dXNUZXh0OlwiXCJ9Y2F0Y2goayl7UChhLmIsXCJDYW4gbm90IGdldCBzdGF0dXM6IFwiK2subWVzc2FnZSksaD1cIlwifWEubD1oK1wiIFtcIithLmdldFN0YXR1cygpK1wiXVwiO3pjKGEpfX1maW5hbGx5e0FjKGEpfX19ZnVuY3Rpb24gQWMoYSl7aWYoYS5hKXt4YyhhKTt2YXIgYj1hLmEsYz1hLkpbMF0/cmE6bnVsbDthLmE9bnVsbDthLko9bnVsbDtPKGEsXCJyZWFkeVwiKTt0cnl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9Y31jYXRjaChkKXsoYT1hLmIpJiZjYyhhLFBiLFwiUHJvYmxlbSBlbmNvdW50ZXJlZCByZXNldHRpbmcgb25yZWFkeXN0YXRlY2hhbmdlOiBcIitkLm1lc3NhZ2UpfX19XG5mdW5jdGlvbiB4YyhhKXthLmEmJmEuSSYmKGEuYS5vbnRpbWVvdXQ9bnVsbCk7YS53JiYoTGIuY2xlYXJUaW1lb3V0KGEudyksYS53PW51bGwpfWZ1bmN0aW9uIFcoYSl7cmV0dXJuIGEuYT9hLmEucmVhZHlTdGF0ZTowfW4uZ2V0U3RhdHVzPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiAyPFcodGhpcyk/dGhpcy5hLnN0YXR1czotMX1jYXRjaChhKXtyZXR1cm4tMX19O1xuZnVuY3Rpb24gQ2MoYSl7dHJ5e2lmKCFhLmEpcmV0dXJuIG51bGw7aWYoXCJyZXNwb25zZVwiaW4gYS5hKXJldHVybiBhLmEucmVzcG9uc2U7c3dpdGNoKGEubSl7Y2FzZSBzYzpjYXNlIFwidGV4dFwiOnJldHVybiBhLmEucmVzcG9uc2VUZXh0O2Nhc2UgXCJhcnJheWJ1ZmZlclwiOmlmKFwibW96UmVzcG9uc2VBcnJheUJ1ZmZlclwiaW4gYS5hKXJldHVybiBhLmEubW96UmVzcG9uc2VBcnJheUJ1ZmZlcn12YXIgYj1hLmI7YiYmY2MoYixQYixcIlJlc3BvbnNlIHR5cGUgXCIrYS5tK1wiIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyXCIpO3JldHVybiBudWxsfWNhdGNoKGMpe3JldHVybiBQKGEuYixcIkNhbiBub3QgZ2V0IHJlc3BvbnNlOiBcIitjLm1lc3NhZ2UpLG51bGx9fVxuZnVuY3Rpb24gRGMoYSl7dmFyIGI9e307YT0oYS5hJiY0PT1XKGEpP2EuYS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKXx8XCJcIjpcIlwiKS5zcGxpdChcIlxcclxcblwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZighL15bXFxzXFx4YTBdKiQvLnRlc3QoYVtjXSkpe3ZhciBkPVhhKGFbY10pLGY9ZFswXTtkPWRbMV07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkKXtkPWQudHJpbSgpO3ZhciBnPWJbZl18fFtdO2JbZl09ZztnLnB1c2goZCl9fXJldHVybiBVYShiLGZ1bmN0aW9uKGUpe3JldHVybiBlLmpvaW4oXCIsIFwiKX0pfWZ1bmN0aW9uIFYoYSxiKXtyZXR1cm4gYitcIiBbXCIrYS5QK1wiIFwiK2EuditcIiBcIithLmdldFN0YXR1cygpK1wiXVwifTt2YXIgRWM9e30sRmM9bnVsbDtmdW5jdGlvbiBHYyhhKXt2YXIgYj1hLmxlbmd0aCxjPTMqYi80O2MlMz9jPU1hdGguZmxvb3IoYyk6SChcIj0uXCIsYVtiLTFdKSYmKGM9SChcIj0uXCIsYVtiLTJdKT9jLTI6Yy0xKTt2YXIgZD1uZXcgVWludDhBcnJheShjKSxmPTA7SGMoYSxmdW5jdGlvbihnKXtkW2YrK109Z30pO3JldHVybiBkLnN1YmFycmF5KDAsZil9XG5mdW5jdGlvbiBIYyhhLGIpe2Z1bmN0aW9uIGMoayl7Zm9yKDtkPGEubGVuZ3RoOyl7dmFyIGw9YS5jaGFyQXQoZCsrKSxtPUZjW2xdO2lmKG51bGwhPW0pcmV0dXJuIG07aWYoIS9eW1xcc1xceGEwXSokLy50ZXN0KGwpKXRocm93IEVycm9yKFwiVW5rbm93biBiYXNlNjQgZW5jb2RpbmcgYXQgY2hhcjogXCIrbCk7fXJldHVybiBrfUljKCk7Zm9yKHZhciBkPTA7Oyl7dmFyIGY9YygtMSksZz1jKDApLGU9Yyg2NCksaD1jKDY0KTtpZig2ND09PWgmJi0xPT09ZilicmVhaztiKGY8PDJ8Zz4+NCk7NjQhPWUmJihiKGc8PDQmMjQwfGU+PjIpLDY0IT1oJiZiKGU8PDYmMTkyfGgpKX19XG5mdW5jdGlvbiBJYygpe2lmKCFGYyl7RmM9e307Zm9yKHZhciBhPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIi5zcGxpdChcIlwiKSxiPVtcIisvPVwiLFwiKy9cIixcIi1fPVwiLFwiLV8uXCIsXCItX1wiXSxjPTA7NT5jO2MrKyl7dmFyIGQ9YS5jb25jYXQoYltjXS5zcGxpdChcIlwiKSk7RWNbY109ZDtmb3IodmFyIGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIGc9ZFtmXTt2b2lkIDA9PT1GY1tnXSYmKEZjW2ddPWYpfX19fTt2YXIgSmM9W1wiY29udGVudC10eXBlXCIsXCJncnBjLXN0YXR1c1wiLFwiZ3JwYy1tZXNzYWdlXCJdO1xuZnVuY3Rpb24gWChhKXt0aGlzLmE9YS5aO3RoaXMubT1udWxsO3RoaXMuYj1bXTt0aGlzLmg9W107dGhpcy5nPVtdO3RoaXMuZj1bXTt0aGlzLmM9W107dGhpcy5sPSExO3RoaXMuaT0wO3RoaXMucz1uZXcgR2E7dmFyIGI9dGhpczt6Yih0aGlzLmEsXCJyZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYz1iLmE7aWYoYz1jLmE/Yy5hLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpOm51bGwpe2M9Yy50b0xvd2VyQ2FzZSgpO2lmKDA9PWMubGFzdEluZGV4T2YoXCJhcHBsaWNhdGlvbi9ncnBjLXdlYi10ZXh0XCIsMCkpe2M9Yi5hO3RyeXt2YXIgZD1jLmE/Yy5hLnJlc3BvbnNlVGV4dDpcIlwifWNhdGNoKGspe1AoYy5iLFwiQ2FuIG5vdCBnZXQgcmVzcG9uc2VUZXh0OiBcIitrLm1lc3NhZ2UpLGQ9XCJcIn1jPWR8fFwiXCI7ZD1jLmxlbmd0aC1jLmxlbmd0aCU0O2M9Yy5zdWJzdHIoYi5pLGQtYi5pKTtpZigwPT1jLmxlbmd0aClyZXR1cm47Yi5pPWQ7Yz1HYyhjKX1lbHNlIGlmKDA9PVxuYy5sYXN0SW5kZXhPZihcImFwcGxpY2F0aW9uL2dycGNcIiwwKSljPW5ldyBVaW50OEFycmF5KENjKGIuYSkpO2Vsc2V7WShiLG5ldyBFKDIsXCJVbmtub3duIENvbnRlbnQtdHlwZSByZWNlaXZlZC5cIikpO3JldHVybn1kPW51bGw7dHJ5e2Q9SWEoYi5zLGMpfWNhdGNoKGspe1koYixuZXcgRSgyLFwiRXJyb3IgaW4gcGFyc2luZyByZXNwb25zZSBib2R5XCIpKX1pZihkKWZvcihjPTA7YzxkLmxlbmd0aDtjKyspe2lmKEphIGluIGRbY10pe3ZhciBmPWRbY11bSmFdO2lmKGYpe3ZhciBnPSExLGU9dm9pZCAwO3RyeXtlPWIubShmKSxnPSEwfWNhdGNoKGspe1koYixuZXcgRSgxMyxcIkVycm9yIHdoZW4gZGVzZXJpYWxpemluZyByZXNwb25zZSBkYXRhOyBlcnJvcjogXCIraysoXCIsIHJlc3BvbnNlOiBcIitlKSkpfWlmKGcpZm9yKGY9ZSxnPTA7ZzxiLmIubGVuZ3RoO2crKyliLmJbZ10oZil9fWlmKEcgaW4gZFtjXSYmMDxkW2NdW0ddLmxlbmd0aCl7Zj1cIlwiO2ZvcihnPTA7ZzxkW2NdW0ddLmxlbmd0aDtnKyspZis9XG5TdHJpbmcuZnJvbUNoYXJDb2RlKGRbY11bR11bZ10pO2Y9Zi50cmltKCkuc3BsaXQoXCJcXHJcXG5cIik7Zz17fTtmb3IoZT0wO2U8Zi5sZW5ndGg7ZSsrKXt2YXIgaD1mW2VdLmluZGV4T2YoXCI6XCIpO2dbZltlXS5zdWJzdHJpbmcoMCxoKS50cmltKCldPWZbZV0uc3Vic3RyaW5nKGgrMSkudHJpbSgpfWY9ZztnPTA7ZT1cIlwiO1wiZ3JwYy1zdGF0dXNcImluIGYmJihnPU51bWJlcihmW1wiZ3JwYy1zdGF0dXNcIl0pLGRlbGV0ZSBmW1wiZ3JwYy1zdGF0dXNcIl0pO1wiZ3JwYy1tZXNzYWdlXCJpbiBmJiYoZT1mW1wiZ3JwYy1tZXNzYWdlXCJdLGRlbGV0ZSBmW1wiZ3JwYy1tZXNzYWdlXCJdKTtZKGIsbmV3IEUoZyxlLGYpKX19fX0pO3piKHRoaXMuYSxcImNvbXBsZXRlXCIsZnVuY3Rpb24oKXt2YXIgYz1iLmEuZyxkPTIsZj1cIlwiLGc9e307ZD1EYyhiLmEpO3ZhciBlPXt9O2ZvcihoIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShoKSYmKGVbaC50b0xvd2VyQ2FzZSgpXT1kW2hdKTtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKGspe0pjLmluY2x1ZGVzKGspfHxcbihnW2tdPWVba10pfSk7S2MoYixnKTt2YXIgaD0tMTtpZigwIT1jKXtzd2l0Y2goYyl7Y2FzZSA3OmQ9MTA7YnJlYWs7Y2FzZSA4OmQ9NDticmVhaztjYXNlIDY6aD1iLmEuZ2V0U3RhdHVzKCk7ZD1BYShoKTticmVhaztkZWZhdWx0OmQ9MTR9MTA9PWQmJmIubHx8KGY9RGEoYyksLTEhPWgmJihmKz1cIiwgaHR0cCBzdGF0dXMgY29kZTogXCIraCksWShiLG5ldyBFKGQsZikpKX1lbHNlIGM9ITEsXCJncnBjLXN0YXR1c1wiaW4gZSYmKGQ9TnVtYmVyKGVbXCJncnBjLXN0YXR1c1wiXSksXCJncnBjLW1lc3NhZ2VcImluIGUmJihmPWVbXCJncnBjLW1lc3NhZ2VcIl0pLDAhPWQmJihZKGIsbmV3IEUoZCxmfHxcIlwiLGUpKSxjPSEwKSksY3x8TGMoYil9KX1cblgucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGEsYil7XCJkYXRhXCI9PWE/dGhpcy5iLnB1c2goYik6XCJzdGF0dXNcIj09YT90aGlzLmgucHVzaChiKTpcIm1ldGFkYXRhXCI9PWE/dGhpcy5nLnB1c2goYik6XCJlbmRcIj09YT90aGlzLmMucHVzaChiKTpcImVycm9yXCI9PWEmJnRoaXMuZi5wdXNoKGIpO3JldHVybiB0aGlzfTtmdW5jdGlvbiBNYyhhLGIpe2I9YS5pbmRleE9mKGIpOy0xPGImJmEuc3BsaWNlKGIsMSl9WC5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oYSxiKXtcImRhdGFcIj09YT9NYyh0aGlzLmIsYik6XCJzdGF0dXNcIj09YT9NYyh0aGlzLmgsYik6XCJtZXRhZGF0YVwiPT1hP01jKHRoaXMuZyxiKTpcImVuZFwiPT1hP01jKHRoaXMuYyxiKTpcImVycm9yXCI9PWEmJk1jKHRoaXMuZixiKTtyZXR1cm4gdGhpc307WC5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKCl7dGhpcy5sPSEwO3RoaXMuYS5hYm9ydCgpfTtcbmZ1bmN0aW9uIFkoYSxiKXtpZigwIT1iLmNvZGUpZm9yKHZhciBjPW5ldyBFKGIuY29kZSxkZWNvZGVVUklDb21wb25lbnQoYi5tZXNzYWdlfHxcIlwiKSxiLm1ldGFkYXRhKSxkPTA7ZDxhLmYubGVuZ3RoO2QrKylhLmZbZF0oYyk7Yj17Y29kZTpiLmNvZGUsZGV0YWlsczpkZWNvZGVVUklDb21wb25lbnQoYi5tZXNzYWdlfHxcIlwiKSxtZXRhZGF0YTpiLm1ldGFkYXRhfTtmb3IoYz0wO2M8YS5oLmxlbmd0aDtjKyspYS5oW2NdKGIpfWZ1bmN0aW9uIEtjKGEsYil7Zm9yKHZhciBjPTA7YzxhLmcubGVuZ3RoO2MrKylhLmdbY10oYil9ZnVuY3Rpb24gTGMoYSl7Zm9yKHZhciBiPTA7YjxhLmMubGVuZ3RoO2IrKylhLmNbYl0oKX1YLnByb3RvdHlwZS5jYW5jZWw9WC5wcm90b3R5cGUuY2FuY2VsO1gucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPVgucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1gucHJvdG90eXBlLm9uPVgucHJvdG90eXBlLm9uO2Z1bmN0aW9uIE5jKGEpe3ZhciBiPVwiXCI7VGEoYSxmdW5jdGlvbihjLGQpe2IrPWQ7Yis9XCI6XCI7Yis9YztiKz1cIlxcclxcblwifSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIFooYSxiKXthPXZvaWQgMD09PWE/e306YTt0aGlzLmE9YS5mb3JtYXR8fHkoXCJmb3JtYXRcIixhKXx8XCJ0ZXh0XCI7dGhpcy5nPWEuYWF8fHkoXCJzdXBwcmVzc0NvcnNQcmVmbGlnaHRcIixhKXx8ITE7dGhpcy5mPWEud2l0aENyZWRlbnRpYWxzfHx5KFwid2l0aENyZWRlbnRpYWxzXCIsYSl8fCExO3RoaXMuYj1hLiR8fHkoXCJzdHJlYW1JbnRlcmNlcHRvcnNcIixhKXx8W107dGhpcy5oPWEuYmF8fHkoXCJ1bmFyeUludGVyY2VwdG9yc1wiLGEpfHxbXTt0aGlzLmM9Ynx8bnVsbH1aLnByb3RvdHlwZS5YPWZ1bmN0aW9uKGEsYixjLGQsZil7dmFyIGc9dGhpcyxlPWEuc3Vic3RyKDAsYS5sZW5ndGgtZC5uYW1lLmxlbmd0aCk7YT1PYyhmdW5jdGlvbihoKXtyZXR1cm4gUGMoZyxoLGUpfSx0aGlzLmIpLmNhbGwodGhpcyx6YShkLGIsYykpO1FjKGEsZiwhMSk7cmV0dXJuIG5ldyBDYShhKX07XG5aLnByb3RvdHlwZS5TPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBmPXRoaXMsZz1hLnN1YnN0cigwLGEubGVuZ3RoLWQubmFtZS5sZW5ndGgpO3JldHVybiBPYyhmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxrKXt2YXIgbD1QYyhmLGUsZyksbSxwLHE7UWMobCxmdW5jdGlvbih3LEEsTCxTYixSYyl7dz9rKHcpOlJjP3E9QTpMP3A9TDpTYj9tPVNiOih3PWUuZ2V0TWV0aG9kRGVzY3JpcHRvcigpLEE9bSxBPXZvaWQgMD09PUE/e306QSxoKG5ldyBEKHEsdyxBLHZvaWQgMD09PXA/bnVsbDpwKSkpfSwhMCl9KX0sdGhpcy5oKS5jYWxsKHRoaXMsemEoZCxiLGMpKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFJlc3BvbnNlTWVzc2FnZSgpfSl9O1oucHJvdG90eXBlLnVuYXJ5Q2FsbD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5TKGEsYixjLGQpfTtcbloucHJvdG90eXBlLlk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGY9dGhpcyxnPWEuc3Vic3RyKDAsYS5sZW5ndGgtZC5uYW1lLmxlbmd0aCk7cmV0dXJuIE9jKGZ1bmN0aW9uKGUpe3JldHVybiBQYyhmLGUsZyl9LHRoaXMuYikuY2FsbCh0aGlzLHphKGQsYixjKSl9O1xuZnVuY3Rpb24gUGMoYSxiLGMpe3ZhciBkPWIuZ2V0TWV0aG9kRGVzY3JpcHRvcigpLGY9YytkLmdldE5hbWUoKTtjPWEuYz9hLmM6bmV3IHJjO2MuTT1hLmY7dmFyIGc9bmV3IFgoe1o6Y30pO2cubT1kLmI7dmFyIGU9Yi5nZXRNZXRhZGF0YSgpO2ZvcihoIGluIGUpYy5oZWFkZXJzLnNldChoLGVbaF0pO1widGV4dFwiPT1hLmE/KGMuaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2dycGMtd2ViLXRleHRcIiksYy5oZWFkZXJzLnNldChcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vZ3JwYy13ZWItdGV4dFwiKSk6Yy5oZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vZ3JwYy13ZWIrcHJvdG9cIik7Yy5oZWFkZXJzLnNldChcIlgtVXNlci1BZ2VudFwiLFwiZ3JwYy13ZWItamF2YXNjcmlwdC8wLjFcIik7Yy5oZWFkZXJzLnNldChcIlgtR3JwYy1XZWJcIixcIjFcIik7aWYoYy5oZWFkZXJzLmhhcyhcImRlYWRsaW5lXCIpKXt2YXIgaD1OdW1iZXIoYy5oZWFkZXJzLmdldChcImRlYWRsaW5lXCIpKTtcbmg9TWF0aC5jZWlsKGgtKG5ldyBEYXRlKS5nZXRUaW1lKCkpO2MuaGVhZGVycy5kZWxldGUoXCJkZWFkbGluZVwiKTtJbmZpbml0eT09PWgmJihoPTApOzA8aCYmKGMuaGVhZGVycy5zZXQoXCJncnBjLXRpbWVvdXRcIixoK1wibVwiKSxjLmg9TWF0aC5tYXgoMCxNYXRoLm1heCgxRTMsTWF0aC5jZWlsKDEuMSpoKSkpKX1pZihhLmcpe2U9Yy5oZWFkZXJzO2g9e307Zm9yKHZhciBrPWhhKGUua2V5cygpKSxsPWsubmV4dCgpOyFsLmRvbmU7bD1rLm5leHQoKSlsPWwudmFsdWUsaFtsXT1lLmdldChsKTtjLmhlYWRlcnMuY2xlYXIoKTtiOntmb3IobSBpbiBoKXt2YXIgbT0hMTticmVhayBifW09ITB9aWYoIW0paWYoaD1OYyhoKSxcInN0cmluZ1wiPT09dHlwZW9mIGYpe2lmKG09ZW5jb2RlVVJJQ29tcG9uZW50KFwiJGh0dHBIZWFkZXJzXCIpLGg9bnVsbCE9aD9cIj1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGgpKTpcIlwiLG0rPWgpaD1mLmluZGV4T2YoXCIjXCIpLDA+aCYmKGg9Zi5sZW5ndGgpLGU9Zi5pbmRleE9mKFwiP1wiKSxcbjA+ZXx8ZT5oPyhlPWgsaz1cIlwiKTprPWYuc3Vic3RyaW5nKGUrMSxoKSxmPVtmLnN1YnN0cigwLGUpLGssZi5zdWJzdHIoaCldLGg9ZlsxXSxmWzFdPW0/aD9oK1wiJlwiK206bTpoLGY9ZlswXSsoZlsxXT9cIj9cIitmWzFdOlwiXCIpK2ZbMl19ZWxzZSBmLmEoXCIkaHR0cEhlYWRlcnNcIixoKX1iPSgwLGQuYSkoYi5nZXRSZXF1ZXN0TWVzc2FnZSgpKTtkPWIubGVuZ3RoO209WzAsMCwwLDBdO2g9bmV3IFVpbnQ4QXJyYXkoNStkKTtmb3IoZT0zOzA8PWU7ZS0tKW1bZV09ZCUyNTYsZD4+Pj04O2guc2V0KG5ldyBVaW50OEFycmF5KG0pLDEpO2guc2V0KGIsNSk7Yj1oO2lmKFwidGV4dFwiPT1hLmEpe2E9Yjt2YXIgcDt2b2lkIDA9PT1wJiYocD0wKTtJYygpO3A9RWNbcF07Yj1BcnJheShNYXRoLmZsb29yKGEubGVuZ3RoLzMpKTtkPXBbNjRdfHxcIlwiO2ZvcihtPWg9MDtoPGEubGVuZ3RoLTI7aCs9Myl7bD1hW2hdO3ZhciBxPWFbaCsxXTtrPWFbaCsyXTtlPXBbbD4+Ml07bD1wWyhsJjMpPDw0fHE+PjRdO1xucT1wWyhxJjE1KTw8MnxrPj42XTtrPXBbayY2M107YlttKytdPWUrbCtxK2t9ZT0wO2s9ZDtzd2l0Y2goYS5sZW5ndGgtaCl7Y2FzZSAyOmU9YVtoKzFdLGs9cFsoZSYxNSk8PDJdfHxkO2Nhc2UgMTphPWFbaF0sYlttXT1wW2E+PjJdK3BbKGEmMyk8PDR8ZT4+NF0raytkfWI9Yi5qb2luKFwiXCIpfWVsc2VcImJpbmFyeVwiPT1hLmEmJihjLm09XCJhcnJheWJ1ZmZlclwiKTt2YyhjLGYsYik7cmV0dXJuIGd9XG5mdW5jdGlvbiBRYyhhLGIsYyl7dmFyIGQ9ITEsZj1udWxsLGc9ITE7YS5vbihcImRhdGFcIixmdW5jdGlvbihlKXtkPSEwO2Y9ZX0pO2Eub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpezA9PWUuY29kZXx8Z3x8KGc9ITAsYihlLG51bGwpKX0pO2Eub24oXCJzdGF0dXNcIixmdW5jdGlvbihlKXswPT1lLmNvZGV8fGc/YyYmYihudWxsLG51bGwsZSk6KGc9ITAsYih7Y29kZTplLmNvZGUsbWVzc2FnZTplLmRldGFpbHMsbWV0YWRhdGE6ZS5tZXRhZGF0YX0sbnVsbCkpfSk7aWYoYylhLm9uKFwibWV0YWRhdGFcIixmdW5jdGlvbihlKXtiKG51bGwsbnVsbCxudWxsLGUpfSk7YS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7Z3x8KGQ/Yz9iKG51bGwsZixudWxsLG51bGwsITApOmIobnVsbCxmKTpiKHtjb2RlOjIsbWVzc2FnZTpcIkluY29tcGxldGUgcmVzcG9uc2VcIn0pKTtjJiZiKG51bGwsbnVsbCl9KX1cbmZ1bmN0aW9uIE9jKGEsYil7dmFyIGM9YTtiLmZvckVhY2goZnVuY3Rpb24oZCl7dmFyIGY9YztjPWZ1bmN0aW9uKGcpe3JldHVybiBkLmludGVyY2VwdChnLGYpfX0pO3JldHVybiBjfVoucHJvdG90eXBlLnNlcnZlclN0cmVhbWluZz1aLnByb3RvdHlwZS5ZO1oucHJvdG90eXBlLnVuYXJ5Q2FsbD1aLnByb3RvdHlwZS51bmFyeUNhbGw7Wi5wcm90b3R5cGUudGhlbmFibGVDYWxsPVoucHJvdG90eXBlLlM7Wi5wcm90b3R5cGUucnBjQ2FsbD1aLnByb3RvdHlwZS5YO21vZHVsZS5leHBvcnRzLkNhbGxPcHRpb25zPXhhO21vZHVsZS5leHBvcnRzLk1ldGhvZERlc2NyaXB0b3I9eWE7bW9kdWxlLmV4cG9ydHMuR3JwY1dlYkNsaWVudEJhc2U9Wjttb2R1bGUuZXhwb3J0cy5ScGNFcnJvcj1FO21vZHVsZS5leHBvcnRzLlN0YXR1c0NvZGU9e09LOjAsQ0FOQ0VMTEVEOjEsVU5LTk9XTjoyLElOVkFMSURfQVJHVU1FTlQ6MyxERUFETElORV9FWENFRURFRDo0LE5PVF9GT1VORDo1LEFMUkVBRFlfRVhJU1RTOjYsUEVSTUlTU0lPTl9ERU5JRUQ6NyxVTkFVVEhFTlRJQ0FURUQ6MTYsUkVTT1VSQ0VfRVhIQVVTVEVEOjgsRkFJTEVEX1BSRUNPTkRJVElPTjo5LEFCT1JURUQ6MTAsT1VUX09GX1JBTkdFOjExLFVOSU1QTEVNRU5URUQ6MTIsSU5URVJOQUw6MTMsVU5BVkFJTEFCTEU6MTQsREFUQV9MT1NTOjE1fTttb2R1bGUuZXhwb3J0cy5NZXRob2RUeXBlPXtVTkFSWTpcInVuYXJ5XCIsU0VSVkVSX1NUUkVBTUlORzpcInNlcnZlcl9zdHJlYW1pbmdcIixCSURJX1NUUkVBTUlORzpcImJpZGlfc3RyZWFtaW5nXCJ9O1xuTGI9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBnbG9iYWxUaGlzJiZnbG9iYWxUaGlzfHxzZWxmO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGdSUEMtV2ViIGdlbmVyYXRlZCBjbGllbnQgc3R1YiBmb3Igc2ltX3NlcnZlclxuICogQGVuaGFuY2VhYmxlXG4gKiBAcHVibGljXG4gKi9cblxuLy8gQ29kZSBnZW5lcmF0ZWQgYnkgcHJvdG9jLWdlbi1ncnBjLXdlYi4gRE8gTk9UIEVESVQuXG4vLyB2ZXJzaW9uczpcbi8vIFx0cHJvdG9jLWdlbi1ncnBjLXdlYiB2MS41LjBcbi8vIFx0cHJvdG9jICAgICAgICAgICAgICB2NS4yNy4zXG4vLyBzb3VyY2U6IHNpbV9zZXJ2ZXIucHJvdG9cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcblxuXG5pbXBvcnQgKiBhcyBncnBjV2ViIGZyb20gJ2dycGMtd2ViJztcblxuaW1wb3J0ICogYXMgc2ltX3NlcnZlcl9wYiBmcm9tICcuL3NpbV9zZXJ2ZXJfcGInOyAvLyBwcm90byBpbXBvcnQ6IFwic2ltX3NlcnZlci5wcm90b1wiXG5cblxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZUNsaWVudCB7XG4gIGNsaWVudF86IGdycGNXZWIuQWJzdHJhY3RDbGllbnRCYXNlO1xuICBob3N0bmFtZV86IHN0cmluZztcbiAgY3JlZGVudGlhbHNfOiBudWxsIHwgeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZzsgfTtcbiAgb3B0aW9uc186IG51bGwgfCB7IFtpbmRleDogc3RyaW5nXTogYW55OyB9O1xuXG4gIGNvbnN0cnVjdG9yIChob3N0bmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgY3JlZGVudGlhbHM/OiBudWxsIHwgeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZzsgfSxcbiAgICAgICAgICAgICAgIG9wdGlvbnM/OiBudWxsIHwgeyBbaW5kZXg6IHN0cmluZ106IGFueTsgfSkge1xuICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICAgIGlmICghY3JlZGVudGlhbHMpIGNyZWRlbnRpYWxzID0ge307XG4gICAgb3B0aW9uc1snZm9ybWF0J10gPSAnYmluYXJ5JztcblxuICAgIHRoaXMuY2xpZW50XyA9IG5ldyBncnBjV2ViLkdycGNXZWJDbGllbnRCYXNlKG9wdGlvbnMpO1xuICAgIHRoaXMuaG9zdG5hbWVfID0gaG9zdG5hbWUucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG4gICAgdGhpcy5jcmVkZW50aWFsc18gPSBjcmVkZW50aWFscztcbiAgICB0aGlzLm9wdGlvbnNfID0gb3B0aW9ucztcbiAgfVxuXG4gIG1ldGhvZERlc2NyaXB0b3JJbml0V29ybGRTdGF0ZSA9IG5ldyBncnBjV2ViLk1ldGhvZERlc2NyaXB0b3IoXG4gICAgJy9zaW1fc2VydmVyLlN0YXRlU2VydmljZS9Jbml0V29ybGRTdGF0ZScsXG4gICAgZ3JwY1dlYi5NZXRob2RUeXBlLlVOQVJZLFxuICAgIHNpbV9zZXJ2ZXJfcGIuSW5pdGlhbGl6ZVJlcXVlc3QsXG4gICAgc2ltX3NlcnZlcl9wYi5Xb3JsZFN0YXRlUmVzcG9uc2UsXG4gICAgKHJlcXVlc3Q6IHNpbV9zZXJ2ZXJfcGIuSW5pdGlhbGl6ZVJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICAgIH0sXG4gICAgc2ltX3NlcnZlcl9wYi5Xb3JsZFN0YXRlUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlcbiAgKTtcblxuICBpbml0V29ybGRTdGF0ZShcbiAgICByZXF1ZXN0OiBzaW1fc2VydmVyX3BiLkluaXRpYWxpemVSZXF1ZXN0LFxuICAgIG1ldGFkYXRhPzogZ3JwY1dlYi5NZXRhZGF0YSB8IG51bGwpOiBQcm9taXNlPHNpbV9zZXJ2ZXJfcGIuV29ybGRTdGF0ZVJlc3BvbnNlPjtcblxuICBpbml0V29ybGRTdGF0ZShcbiAgICByZXF1ZXN0OiBzaW1fc2VydmVyX3BiLkluaXRpYWxpemVSZXF1ZXN0LFxuICAgIG1ldGFkYXRhOiBncnBjV2ViLk1ldGFkYXRhIHwgbnVsbCxcbiAgICBjYWxsYmFjazogKGVycjogZ3JwY1dlYi5ScGNFcnJvcixcbiAgICAgICAgICAgICAgIHJlc3BvbnNlOiBzaW1fc2VydmVyX3BiLldvcmxkU3RhdGVSZXNwb25zZSkgPT4gdm9pZCk6IGdycGNXZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08c2ltX3NlcnZlcl9wYi5Xb3JsZFN0YXRlUmVzcG9uc2U+O1xuXG4gIGluaXRXb3JsZFN0YXRlKFxuICAgIHJlcXVlc3Q6IHNpbV9zZXJ2ZXJfcGIuSW5pdGlhbGl6ZVJlcXVlc3QsXG4gICAgbWV0YWRhdGE/OiBncnBjV2ViLk1ldGFkYXRhIHwgbnVsbCxcbiAgICBjYWxsYmFjaz86IChlcnI6IGdycGNXZWIuUnBjRXJyb3IsXG4gICAgICAgICAgICAgICByZXNwb25zZTogc2ltX3NlcnZlcl9wYi5Xb3JsZFN0YXRlUmVzcG9uc2UpID0+IHZvaWQpIHtcbiAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKFxuICAgICAgICB0aGlzLmhvc3RuYW1lXyArXG4gICAgICAgICAgJy9zaW1fc2VydmVyLlN0YXRlU2VydmljZS9Jbml0V29ybGRTdGF0ZScsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgICB0aGlzLm1ldGhvZERlc2NyaXB0b3JJbml0V29ybGRTdGF0ZSxcbiAgICAgICAgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbChcbiAgICB0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL3NpbV9zZXJ2ZXIuU3RhdGVTZXJ2aWNlL0luaXRXb3JsZFN0YXRlJyxcbiAgICByZXF1ZXN0LFxuICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgIHRoaXMubWV0aG9kRGVzY3JpcHRvckluaXRXb3JsZFN0YXRlKTtcbiAgfVxuXG4gIG1ldGhvZERlc2NyaXB0b3JTdGVwV29ybGRTdGF0ZUZvcndhcmQgPSBuZXcgZ3JwY1dlYi5NZXRob2REZXNjcmlwdG9yKFxuICAgICcvc2ltX3NlcnZlci5TdGF0ZVNlcnZpY2UvU3RlcFdvcmxkU3RhdGVGb3J3YXJkJyxcbiAgICBncnBjV2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gICAgc2ltX3NlcnZlcl9wYi5TdGVwUmVxdWVzdCxcbiAgICBzaW1fc2VydmVyX3BiLldvcmxkU3RhdGVSZXNwb25zZSxcbiAgICAocmVxdWVzdDogc2ltX3NlcnZlcl9wYi5TdGVwUmVxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gICAgfSxcbiAgICBzaW1fc2VydmVyX3BiLldvcmxkU3RhdGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeVxuICApO1xuXG4gIHN0ZXBXb3JsZFN0YXRlRm9yd2FyZChcbiAgICByZXF1ZXN0OiBzaW1fc2VydmVyX3BiLlN0ZXBSZXF1ZXN0LFxuICAgIG1ldGFkYXRhPzogZ3JwY1dlYi5NZXRhZGF0YSB8IG51bGwpOiBQcm9taXNlPHNpbV9zZXJ2ZXJfcGIuV29ybGRTdGF0ZVJlc3BvbnNlPjtcblxuICBzdGVwV29ybGRTdGF0ZUZvcndhcmQoXG4gICAgcmVxdWVzdDogc2ltX3NlcnZlcl9wYi5TdGVwUmVxdWVzdCxcbiAgICBtZXRhZGF0YTogZ3JwY1dlYi5NZXRhZGF0YSB8IG51bGwsXG4gICAgY2FsbGJhY2s6IChlcnI6IGdycGNXZWIuUnBjRXJyb3IsXG4gICAgICAgICAgICAgICByZXNwb25zZTogc2ltX3NlcnZlcl9wYi5Xb3JsZFN0YXRlUmVzcG9uc2UpID0+IHZvaWQpOiBncnBjV2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPHNpbV9zZXJ2ZXJfcGIuV29ybGRTdGF0ZVJlc3BvbnNlPjtcblxuICBzdGVwV29ybGRTdGF0ZUZvcndhcmQoXG4gICAgcmVxdWVzdDogc2ltX3NlcnZlcl9wYi5TdGVwUmVxdWVzdCxcbiAgICBtZXRhZGF0YT86IGdycGNXZWIuTWV0YWRhdGEgfCBudWxsLFxuICAgIGNhbGxiYWNrPzogKGVycjogZ3JwY1dlYi5ScGNFcnJvcixcbiAgICAgICAgICAgICAgIHJlc3BvbnNlOiBzaW1fc2VydmVyX3BiLldvcmxkU3RhdGVSZXNwb25zZSkgPT4gdm9pZCkge1xuICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbGllbnRfLnJwY0NhbGwoXG4gICAgICAgIHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICAgICAnL3NpbV9zZXJ2ZXIuU3RhdGVTZXJ2aWNlL1N0ZXBXb3JsZFN0YXRlRm9yd2FyZCcsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgICB0aGlzLm1ldGhvZERlc2NyaXB0b3JTdGVwV29ybGRTdGF0ZUZvcndhcmQsXG4gICAgICAgIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwoXG4gICAgdGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9zaW1fc2VydmVyLlN0YXRlU2VydmljZS9TdGVwV29ybGRTdGF0ZUZvcndhcmQnLFxuICAgIHJlcXVlc3QsXG4gICAgbWV0YWRhdGEgfHwge30sXG4gICAgdGhpcy5tZXRob2REZXNjcmlwdG9yU3RlcFdvcmxkU3RhdGVGb3J3YXJkKTtcbiAgfVxuXG4gIG1ldGhvZERlc2NyaXB0b3JTdGFydFNpbXVsYXRpb24gPSBuZXcgZ3JwY1dlYi5NZXRob2REZXNjcmlwdG9yKFxuICAgICcvc2ltX3NlcnZlci5TdGF0ZVNlcnZpY2UvU3RhcnRTaW11bGF0aW9uJyxcbiAgICBncnBjV2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gICAgc2ltX3NlcnZlcl9wYi5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LFxuICAgIHNpbV9zZXJ2ZXJfcGIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLFxuICAgIChyZXF1ZXN0OiBzaW1fc2VydmVyX3BiLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QpID0+IHtcbiAgICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICAgIH0sXG4gICAgc2ltX3NlcnZlcl9wYi5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlcbiAgKTtcblxuICBzdGFydFNpbXVsYXRpb24oXG4gICAgcmVxdWVzdDogc2ltX3NlcnZlcl9wYi5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LFxuICAgIG1ldGFkYXRhPzogZ3JwY1dlYi5NZXRhZGF0YSB8IG51bGwpOiBQcm9taXNlPHNpbV9zZXJ2ZXJfcGIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlPjtcblxuICBzdGFydFNpbXVsYXRpb24oXG4gICAgcmVxdWVzdDogc2ltX3NlcnZlcl9wYi5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LFxuICAgIG1ldGFkYXRhOiBncnBjV2ViLk1ldGFkYXRhIHwgbnVsbCxcbiAgICBjYWxsYmFjazogKGVycjogZ3JwY1dlYi5ScGNFcnJvcixcbiAgICAgICAgICAgICAgIHJlc3BvbnNlOiBzaW1fc2VydmVyX3BiLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZSkgPT4gdm9pZCk6IGdycGNXZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08c2ltX3NlcnZlcl9wYi5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2U+O1xuXG4gIHN0YXJ0U2ltdWxhdGlvbihcbiAgICByZXF1ZXN0OiBzaW1fc2VydmVyX3BiLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QsXG4gICAgbWV0YWRhdGE/OiBncnBjV2ViLk1ldGFkYXRhIHwgbnVsbCxcbiAgICBjYWxsYmFjaz86IChlcnI6IGdycGNXZWIuUnBjRXJyb3IsXG4gICAgICAgICAgICAgICByZXNwb25zZTogc2ltX3NlcnZlcl9wYi5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UpID0+IHZvaWQpIHtcbiAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKFxuICAgICAgICB0aGlzLmhvc3RuYW1lXyArXG4gICAgICAgICAgJy9zaW1fc2VydmVyLlN0YXRlU2VydmljZS9TdGFydFNpbXVsYXRpb24nLFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgICAgdGhpcy5tZXRob2REZXNjcmlwdG9yU3RhcnRTaW11bGF0aW9uLFxuICAgICAgICBjYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsaWVudF8udW5hcnlDYWxsKFxuICAgIHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvc2ltX3NlcnZlci5TdGF0ZVNlcnZpY2UvU3RhcnRTaW11bGF0aW9uJyxcbiAgICByZXF1ZXN0LFxuICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgIHRoaXMubWV0aG9kRGVzY3JpcHRvclN0YXJ0U2ltdWxhdGlvbik7XG4gIH1cblxufVxuXG4iLCIvLyBzb3VyY2U6IHNpbV9zZXJ2ZXIucHJvdG9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQGVuaGFuY2VhYmxlXG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfSByZXBvcnRzIGVycm9yIG9uIGltcGxpY2l0IHR5cGUgdXNhZ2VzLlxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcblxudmFyIGpzcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYnKTtcbnZhciBnb29nID0ganNwYjtcbnZhciBnbG9iYWwgPVxuICAgICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fFxuICAgICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpIHx8XG4gICAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmKSB8fFxuICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KS5jYWxsKG51bGwpIHx8XG4gICAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGEnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlJywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGEsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGEnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zaW1fc2VydmVyLlZlY3RvcjNELmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zaW1fc2VydmVyLlZlY3RvcjJELmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucywganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMuZGlzcGxheU5hbWUgPSAncHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucyc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0Jztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UuZGlzcGxheU5hbWUgPSAncHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0Jztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZSA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZSwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLmRpc3BsYXlOYW1lID0gJ3Byb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlJztcbn1cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YX0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgc3RhdGVJZDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKSxcbiAgICBzdGVwOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIDApLFxuICAgIHN0YXR1czoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YX1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGE7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGF9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YX1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldFN0YXRlSWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldFN0ZXAodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRTdGF0dXModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRTdGF0ZUlkKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RlcCgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFN0YXR1cygpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgaW50NjQgc3RhdGVfaWQgPSAxO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnByb3RvdHlwZS5nZXRTdGF0ZUlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5wcm90b3R5cGUuc2V0U3RhdGVJZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDY0IHN0ZXAgPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5wcm90b3R5cGUuc2V0U3RlcCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBzdGF0dXMgPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGF9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgcmVwZWF0ZWQgZmllbGRzIHdpdGhpbiB0aGlzIG1lc3NhZ2UgdHlwZS5cbiAqIEBwcml2YXRlIHshQXJyYXk8bnVtYmVyPn1cbiAqIEBjb25zdFxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnJlcGVhdGVkRmllbGRzXyA9IFsxXTtcblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgdmVjMmRMaXN0OiBqc3BiLk1lc3NhZ2UudG9PYmplY3RMaXN0KG1zZy5nZXRWZWMyZExpc3QoKSxcbiAgICBwcm90by5zaW1fc2VydmVyLlZlY3RvcjJELnRvT2JqZWN0LCBpbmNsdWRlSW5zdGFuY2UpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlZlY3RvcjNEfVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRDtcbiAgcmV0dXJuIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlZlY3RvcjNEfVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zaW1fc2VydmVyLlZlY3RvcjJELmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuYWRkVmVjMmQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRWZWMyZExpc3QoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiByZXBlYXRlZCBWZWN0b3IyRCB2ZWMyZCA9IDE7XG4gKiBAcmV0dXJuIHshQXJyYXk8IXByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQ+fVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnByb3RvdHlwZS5nZXRWZWMyZExpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQ+fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFJlcGVhdGVkV3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQsIDEpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFBcnJheTwhcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRD59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH0gcmV0dXJucyB0aGlzXG4qL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRC5wcm90b3R5cGUuc2V0VmVjMmRMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRD19IG9wdF92YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlZlY3RvcjJEfVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjNELnByb3RvdHlwZS5hZGRWZWMyZCA9IGZ1bmN0aW9uKG9wdF92YWx1ZSwgb3B0X2luZGV4KSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCBvcHRfdmFsdWUsIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQsIG9wdF9pbmRleCk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBsaXN0IG1ha2luZyBpdCBlbXB0eSBidXQgbm9uLW51bGwuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QucHJvdG90eXBlLmNsZWFyVmVjMmRMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFZlYzJkTGlzdChbXSk7XG59O1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIHJlcGVhdGVkIGZpZWxkcyB3aXRoaW4gdGhpcyBtZXNzYWdlIHR5cGUuXG4gKiBAcHJpdmF0ZSB7IUFycmF5PG51bWJlcj59XG4gKiBAY29uc3RcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC5yZXBlYXRlZEZpZWxkc18gPSBbMV07XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkR9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHZlYzFkTGlzdDogKGYgPSBqc3BiLk1lc3NhZ2UuZ2V0UmVwZWF0ZWRGaWVsZChtc2csIDEpKSA9PSBudWxsID8gdW5kZWZpbmVkIDogZlxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQ7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLlZlY3RvcjJELmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkR9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlcyA9IC8qKiBAdHlwZSB7IUFycmF5PG51bWJlcj59ICovIChyZWFkZXIuaXNEZWxpbWl0ZWQoKSA/IHJlYWRlci5yZWFkUGFja2VkVWludDMyKCkgOiBbcmVhZGVyLnJlYWRVaW50MzIoKV0pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXNnLmFkZFZlYzFkKHZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLlZlY3RvcjJEfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFZlYzFkTGlzdCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlUGFja2VkVWludDMyKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgdWludDMyIHZlYzFkID0gMTtcbiAqIEByZXR1cm4geyFBcnJheTxudW1iZXI+fVxuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjJELnByb3RvdHlwZS5nZXRWZWMxZExpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IUFycmF5PG51bWJlcj59ICovIChqc3BiLk1lc3NhZ2UuZ2V0UmVwZWF0ZWRGaWVsZCh0aGlzLCAxKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlZlY3RvcjJEfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRC5wcm90b3R5cGUuc2V0VmVjMWRMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRGaWVsZCh0aGlzLCAxLCB2YWx1ZSB8fCBbXSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9pbmRleFxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkR9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zaW1fc2VydmVyLlZlY3RvcjJELnByb3RvdHlwZS5hZGRWZWMxZCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRfaW5kZXgpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5hZGRUb1JlcGVhdGVkRmllbGQodGhpcywgMSwgdmFsdWUsIG9wdF9pbmRleCk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBsaXN0IG1ha2luZyBpdCBlbXB0eSBidXQgbm9uLW51bGwuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IyRH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yMkQucHJvdG90eXBlLmNsZWFyVmVjMWRMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFZlYzFkTGlzdChbXSk7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9uc30gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgeE1heDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCAwKSxcbiAgICB5TWF4OiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIDApLFxuICAgIHpNYXg6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgMClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zO1xuICByZXR1cm4gcHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRYTWF4KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRZTWF4KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRaTWF4KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0WE1heCgpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFlNYXgoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDIsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRaTWF4KCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50NjQoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCB4X21heCA9IDE7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMucHJvdG90eXBlLmdldFhNYXggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zLnByb3RvdHlwZS5zZXRYTWF4ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgaW50NjQgeV9tYXggPSAyO1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5wcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zLnByb3RvdHlwZS5nZXRZTWF4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5wcm90b3R5cGUuc2V0WU1heCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zSW50RmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDY0IHpfbWF4ID0gMztcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5wcm90b3R5cGUuZ2V0Wk1heCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCAwKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9uc30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMucHJvdG90eXBlLnNldFpNYXggPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBkaW1lbnNpb25zOiAoZiA9IG1zZy5nZXREaW1lbnNpb25zKCkpICYmIHByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnMudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3R9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnM7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldERpbWVuc2lvbnModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXREaW1lbnNpb25zKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgMSxcbiAgICAgIGYsXG4gICAgICBwcm90by5zaW1fc2VydmVyLkdyaWREaW1lbnNpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIEdyaWREaW1lbnNpb25zIGRpbWVuc2lvbnMgPSAxO1xuICogQHJldHVybiB7P3Byb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3QucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9uc30gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8uc2ltX3NlcnZlci5HcmlkRGltZW5zaW9ucywgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7P3Byb3RvLnNpbV9zZXJ2ZXIuR3JpZERpbWVuc2lvbnN8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3R9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3QucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBtZXNzYWdlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3QucHJvdG90eXBlLmNsZWFyRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zZXREaW1lbnNpb25zKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdC5wcm90b3R5cGUuaGFzRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgd29ybGRTdGF0ZUlkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDEsIDApLFxuICAgIHJ1bGU6IG1zZy5nZXRSdWxlX2FzQjY0KCksXG4gICAgbnVtU3RlcHM6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMywgMClcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0O1xuICByZXR1cm4gcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQ2NCgpKTtcbiAgICAgIG1zZy5zZXRXb3JsZFN0YXRlSWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKHJlYWRlci5yZWFkQnl0ZXMoKSk7XG4gICAgICBtc2cuc2V0UnVsZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0TnVtU3RlcHModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRXb3JsZFN0YXRlSWQoKTtcbiAgaWYgKGYgIT09IDApIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRSdWxlX2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZUJ5dGVzKFxuICAgICAgMixcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZChtZXNzYWdlLCAzKSk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVJbnQ2NChcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDY0IHdvcmxkX3N0YXRlX2lkID0gMTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5wcm90b3R5cGUuZ2V0V29ybGRTdGF0ZUlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5wcm90b3R5cGUuc2V0V29ybGRTdGF0ZUlkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgYnl0ZXMgcnVsZSA9IDI7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLmdldFJ1bGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGJ5dGVzIHJ1bGUgPSAyO1xuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0UnVsZSgpYFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnByb3RvdHlwZS5nZXRSdWxlX2FzQjY0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzQjY0KFxuICAgICAgdGhpcy5nZXRSdWxlKCkpKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBieXRlcyBydWxlID0gMjtcbiAqIE5vdGUgdGhhdCBVaW50OEFycmF5IGlzIG5vdCBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzLlxuICogQHNlZSBodHRwOi8vY2FuaXVzZS5jb20vVWludDhBcnJheVxuICogVGhpcyBpcyBhIHR5cGUtY29udmVyc2lvbiB3cmFwcGVyIGFyb3VuZCBgZ2V0UnVsZSgpYFxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLmdldFJ1bGVfYXNVOCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshVWludDhBcnJheX0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0FzVTgoXG4gICAgICB0aGlzLmdldFJ1bGUoKSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IShzdHJpbmd8VWludDhBcnJheSl9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLnNldFJ1bGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0J5dGVzRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDY0IG51bV9zdGVwcyA9IDM7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLmdldE51bVN0ZXBzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDMsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5wcm90b3R5cGUuc2V0TnVtU3RlcHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldEZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLmNsZWFyTnVtU3RlcHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRGaWVsZCh0aGlzLCAzLCB1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3QucHJvdG90eXBlLmhhc051bVN0ZXBzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMykgIT0gbnVsbDtcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgbWV0YWRhdGE6IChmID0gbXNnLmdldE1ldGFkYXRhKCkpICYmIHByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGEudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKSxcbiAgICBzdGF0ZTogKGYgPSBtc2cuZ2V0U3RhdGUoKSkgJiYgcHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRC50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIGYpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZX1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZTtcbiAgcmV0dXJuIHByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfVxuICovXG5wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGE7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldE1ldGFkYXRhKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5zaW1fc2VydmVyLlZlY3RvcjNEO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRTdGF0ZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRNZXRhZGF0YSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdGUoKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAyLFxuICAgICAgZixcbiAgICAgIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgTWV0YWRhdGEgbWV0YWRhdGEgPSAxO1xuICogQHJldHVybiB7P3Byb3RvLnNpbV9zZXJ2ZXIuTWV0YWRhdGF9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnByb3RvdHlwZS5nZXRNZXRhZGF0YSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5zaW1fc2VydmVyLk1ldGFkYXRhfSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zaW1fc2VydmVyLk1ldGFkYXRhLCAxKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHs/cHJvdG8uc2ltX3NlcnZlci5NZXRhZGF0YXx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2V9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnByb3RvdHlwZS5zZXRNZXRhZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIG1lc3NhZ2UgZmllbGQgbWFraW5nIGl0IHVuZGVmaW5lZC5cbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnByb3RvdHlwZS5jbGVhck1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldE1ldGFkYXRhKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UucHJvdG90eXBlLmhhc01ldGFkYXRhID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMSkgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBWZWN0b3IzRCBzdGF0ZSA9IDI7XG4gKiBAcmV0dXJuIHs/cHJvdG8uc2ltX3NlcnZlci5WZWN0b3IzRH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0R9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIHByb3RvLnNpbV9zZXJ2ZXIuVmVjdG9yM0QsIDIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0gez9wcm90by5zaW1fc2VydmVyLlZlY3RvcjNEfHVuZGVmaW5lZH0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4qL1xucHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB0aGUgbWVzc2FnZSBmaWVsZCBtYWtpbmcgaXQgdW5kZWZpbmVkLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0U3RhdGUodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5wcm90b3R5cGUuaGFzU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5nZXRGaWVsZCh0aGlzLCAyKSAhPSBudWxsO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG4gICAgaW5pdFJlcTogKGYgPSBtc2cuZ2V0SW5pdFJlcSgpKSAmJiBwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgc3RlcFJlcTogKGYgPSBtc2cuZ2V0U3RlcFJlcSgpKSAmJiBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgdGltZW91dDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fVxuICovXG5wcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdH1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0SW5pdFJlcSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0U3RlcFJlcSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHJlYWRlci5yZWFkSW50NjQoKSk7XG4gICAgICBtc2cuc2V0VGltZW91dCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0SW5pdFJlcSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RlcFJlcSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDIsXG4gICAgICBmLFxuICAgICAgcHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkKG1lc3NhZ2UsIDMpKTtcbiAgaWYgKGYgIT0gbnVsbCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMyxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgSW5pdGlhbGl6ZVJlcXVlc3QgaW5pdF9yZXEgPSAxO1xuICogQHJldHVybiB7P3Byb3RvLnNpbV9zZXJ2ZXIuSW5pdGlhbGl6ZVJlcXVlc3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuZ2V0SW5pdFJlcSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zaW1fc2VydmVyLkluaXRpYWxpemVSZXF1ZXN0LCAxKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHs/cHJvdG8uc2ltX3NlcnZlci5Jbml0aWFsaXplUmVxdWVzdHx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiovXG5wcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QucHJvdG90eXBlLnNldEluaXRSZXEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBtZXNzYWdlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LnByb3RvdHlwZS5jbGVhckluaXRSZXEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0SW5pdFJlcSh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuaGFzSW5pdFJlcSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgU3RlcFJlcXVlc3Qgc3RlcF9yZXEgPSAyO1xuICogQHJldHVybiB7P3Byb3RvLnNpbV9zZXJ2ZXIuU3RlcFJlcXVlc3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuZ2V0U3RlcFJlcSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0fSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zaW1fc2VydmVyLlN0ZXBSZXF1ZXN0LCAyKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHs/cHJvdG8uc2ltX3NlcnZlci5TdGVwUmVxdWVzdHx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiovXG5wcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QucHJvdG90eXBlLnNldFN0ZXBSZXEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBtZXNzYWdlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LnByb3RvdHlwZS5jbGVhclN0ZXBSZXEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0U3RlcFJlcSh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuaGFzU3RlcFJlcSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDIpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgaW50NjQgdGltZW91dCA9IDM7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuZ2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCAwKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TdGFydFNpbXVsYXRpb25SZXF1ZXN0LnByb3RvdHlwZS5zZXRUaW1lb3V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRGaWVsZCh0aGlzLCAzLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBmaWVsZCBtYWtpbmcgaXQgdW5kZWZpbmVkLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU3RhcnRTaW11bGF0aW9uUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0RmllbGQodGhpcywgMywgdW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5wcm90by5zaW1fc2VydmVyLlN0YXJ0U2ltdWxhdGlvblJlcXVlc3QucHJvdG90eXBlLmhhc1RpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5nZXRGaWVsZCh0aGlzLCAzKSAhPSBudWxsO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbiAgICBzdGFydFN0YXRlOiAoZiA9IG1zZy5nZXRTdGFydFN0YXRlKCkpICYmIHByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgZW5kU3RhdGU6IChmID0gbXNnLmdldEVuZFN0YXRlKCkpICYmIHByb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG4gICAgc3RhdGVDaGFuZ2VkRHVyaW5nU2ltOiBqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQobXNnLCAzLCBmYWxzZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlfVxuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlO1xuICByZXR1cm4gcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgcHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2U7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUscHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRTdGFydFN0YXRlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZTtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldEVuZFN0YXRlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKHJlYWRlci5yZWFkQm9vbCgpKTtcbiAgICAgIG1zZy5zZXRTdGF0ZUNoYW5nZWREdXJpbmdTaW0odmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhcnRTdGF0ZSgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEVuZFN0YXRlKCk7XG4gIGlmIChmICE9IG51bGwpIHtcbiAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgMixcbiAgICAgIGYsXG4gICAgICBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdGVDaGFuZ2VkRHVyaW5nU2ltKCk7XG4gIGlmIChmKSB7XG4gICAgd3JpdGVyLndyaXRlQm9vbChcbiAgICAgIDMsXG4gICAgICBmXG4gICAgKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIFdvcmxkU3RhdGVSZXNwb25zZSBzdGFydF9zdGF0ZSA9IDE7XG4gKiBAcmV0dXJuIHs/cHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2V9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnByb3RvdHlwZS5nZXRTdGFydFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZSwgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7P3Byb3RvLnNpbV9zZXJ2ZXIuV29ybGRTdGF0ZVJlc3BvbnNlfHVuZGVmaW5lZH0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4qL1xucHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXJ0U3RhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFdyYXBwZXJGaWVsZCh0aGlzLCAxLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHRoZSBtZXNzYWdlIGZpZWxkIG1ha2luZyBpdCB1bmRlZmluZWQuXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5wcm90b3R5cGUuY2xlYXJTdGFydFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFN0YXJ0U3RhdGUodW5kZWZpbmVkKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBmaWVsZCBpcyBzZXQuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5wcm90b3R5cGUuaGFzU3RhcnRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgV29ybGRTdGF0ZVJlc3BvbnNlIGVuZF9zdGF0ZSA9IDI7XG4gKiBAcmV0dXJuIHs/cHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2V9XG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnByb3RvdHlwZS5nZXRFbmRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZX0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRXcmFwcGVyRmllbGQodGhpcywgcHJvdG8uc2ltX3NlcnZlci5Xb3JsZFN0YXRlUmVzcG9uc2UsIDIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0gez9wcm90by5zaW1fc2VydmVyLldvcmxkU3RhdGVSZXNwb25zZXx1bmRlZmluZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnByb3RvdHlwZS5zZXRFbmRTdGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0V3JhcHBlckZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIG1lc3NhZ2UgZmllbGQgbWFraW5nIGl0IHVuZGVmaW5lZC5cbiAqIEByZXR1cm4geyFwcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZX0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLnNpbV9zZXJ2ZXIuU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLnByb3RvdHlwZS5jbGVhckVuZFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldEVuZFN0YXRlKHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UucHJvdG90eXBlLmhhc0VuZFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGQodGhpcywgMikgIT0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBib29sIHN0YXRlX2NoYW5nZWRfZHVyaW5nX3NpbSA9IDM7XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5wcm90b3R5cGUuZ2V0U3RhdGVDaGFuZ2VkRHVyaW5nU2ltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge2Jvb2xlYW59ICovIChqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgZmFsc2UpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uc2ltX3NlcnZlci5TaW11bGF0aW9uUmVzdWx0UmVzcG9uc2V9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5zaW1fc2VydmVyLlNpbXVsYXRpb25SZXN1bHRSZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdGVDaGFuZ2VkRHVyaW5nU2ltID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNCb29sZWFuRmllbGQodGhpcywgMywgdmFsdWUpO1xufTtcblxuXG5nb29nLm9iamVjdC5leHRlbmQoZXhwb3J0cywgcHJvdG8uc2ltX3NlcnZlcik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJpbXBvcnQgKiBhcyBncnBjV2ViIGZyb20gJ2dycGMtd2ViJztcbmltcG9ydCB7IFN0YXRlU2VydmljZUNsaWVudCB9IGZyb20gJy4vcHJvdG8vZ2VuZXJhdGVkL1NpbV9zZXJ2ZXJTZXJ2aWNlQ2xpZW50UGInO1xuaW1wb3J0IHsgU3RhcnRTaW11bGF0aW9uUmVxdWVzdCwgU2ltdWxhdGlvblJlc3VsdFJlc3BvbnNlLCBJbml0aWFsaXplUmVxdWVzdCwgR3JpZERpbWVuc2lvbnMsIFN0ZXBSZXF1ZXN0IH0gZnJvbSAnLi9wcm90by9nZW5lcmF0ZWQvc2ltX3NlcnZlcl9wYic7XG5cbmNvbnN0IHN0YXRlU2VydmljZSA9IG5ldyBTdGF0ZVNlcnZpY2VDbGllbnQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsIG51bGwsIG51bGwpO1xuXG5mdW5jdGlvbiBzdGFydFNpbXVsYXRpb24oKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgU3RhcnRTaW11bGF0aW9uUmVxdWVzdCgpO1xuXG4gIGNvbnN0IGluaXRSZXEgPSBuZXcgSW5pdGlhbGl6ZVJlcXVlc3QoKTtcbiAgY29uc3QgZGltcyA9IG5ldyBHcmlkRGltZW5zaW9ucygpO1xuICBkaW1zLnNldFhNYXgoMTApO1xuICBkaW1zLnNldFlNYXgoMTApO1xuICBkaW1zLnNldFpNYXgoMTApO1xuICBpbml0UmVxLnNldERpbWVuc2lvbnMoZGltcyk7XG5cbiAgY29uc3Qgc3RlcFJlcSA9IG5ldyBTdGVwUmVxdWVzdCgpO1xuICBzdGVwUmVxLnNldE51bVN0ZXBzKDEwMDApO1xuICBzdGVwUmVxLnNldFJ1bGUoXCJBU05GWjRtcnplOEJJMFZuaWF2Tjd3PT1cIik7XG5cbiAgcmVxdWVzdC5zZXRUaW1lb3V0KDUpO1xuICByZXF1ZXN0LnNldEluaXRSZXEoaW5pdFJlcSk7XG4gIHJlcXVlc3Quc2V0U3RlcFJlcShzdGVwUmVxKTtcblxuICBzdGF0ZVNlcnZpY2Uuc3RhcnRTaW11bGF0aW9uKHJlcXVlc3QpXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBTaW11bGF0aW9uUmVzdWx0UmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCByZXNwb25zZTogJHtyZXNwb25zZS5nZXRTdGF0ZUNoYW5nZWREdXJpbmdTaW0oKX1gKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBncnBjV2ViLlJwY0Vycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgZXJyb3I6ICR7ZXJyLmNvZGV9LCAke2Vyci5tZXNzYWdlfWApO1xuICAgIH0pO1xufVxuXG4vLyBBdHRhY2ggdGhlIGZ1bmN0aW9uIHRvIHRoZSBnbG9iYWwgd2luZG93IG9iamVjdCBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSBIVE1MXG4od2luZG93IGFzIGFueSkuc3RhcnRTaW11bGF0aW9uID0gc3RhcnRTaW11bGF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=