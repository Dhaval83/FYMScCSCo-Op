(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.dr(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.b6(b)
return new t(c,this)}:function(){if(t===null)t=A.b6(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.b6(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
ba(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b7(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.b8==null){A.de()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.bo("Return interceptor for "+A.R(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aO
if(p==null)p=$.aO=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dk(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aO
if(p==null)p=$.aO=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
a_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aa.prototype
return J.ab.prototype}if(typeof a=="string")return J.C.prototype
if(a==null)return J.I.prototype
if(typeof a=="boolean")return J.a9.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.L.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b7(a)},
bQ(a){if(typeof a=="string")return J.C.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.L.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b7(a)},
d9(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.L.prototype
if(typeof a=="bigint")return J.J.prototype
return a}if(a instanceof A.j)return a
return J.b7(a)},
bY(a){return J.d9(a).gB(a)},
bb(a){return J.bQ(a).gj(a)},
bZ(a){return J.a_(a).gi(a)},
a3(a){return J.a_(a).h(a)},
a8:function a8(){},
a9:function a9(){},
I:function I(){},
K:function K(){},
w:function w(){},
ao:function ao(){},
S:function S(){},
v:function v(){},
J:function J(){},
L:function L(){},
o:function o(a){this.$ti=a},
aA:function aA(a){this.$ti=a},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ac:function ac(){},
aa:function aa(){},
ab:function ab(){},
C:function C(){}},A={aZ:function aZ(){},
dj(a){var t,s
for(t=$.a2.length,s=0;s<t;++s)if(a===$.a2[s])return!0
return!1},
aB:function aB(a){this.a=a},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
k:function k(){},
bW(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dK(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
R(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a3(a)
return t},
aC(a){return A.ce(a)},
ce(a){var t,s,r,q
if(a instanceof A.j)return A.m(A.a0(a),null)
t=J.a_(a)
if(t===B.m||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.m(A.a0(a),null)},
ck(a){if(typeof a=="number"||A.b4(a))return J.a3(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.z)return a.h(0)
return"Instance of '"+A.aC(a)+"'"},
E(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cj(a){var t=A.E(a).getFullYear()+0
return t},
ch(a){var t=A.E(a).getMonth()+1
return t},
cf(a){var t=A.E(a).getDate()+0
return t},
bk(a){var t=A.E(a).getHours()+0
return t},
bl(a){var t=A.E(a).getMinutes()+0
return t},
ci(a){var t=A.E(a).getSeconds()+0
return t},
cg(a){var t=A.E(a).getMilliseconds()+0
return t},
b9(a,b){if(a==null)J.bb(a)
throw A.b(A.bO(a,b))},
bO(a,b){var t,s="index"
if(!A.bI(b))return new A.H(!0,b,s,null)
t=J.bb(a)
if(b<0||b>=t)return new A.az(t,!0,b,s,"Index out of range")
return new A.aD(!0,b,s,"Value not in range")},
b(a){return A.bS(new Error(),a)},
bS(a,b){var t
if(b==null)b=new A.aJ()
a.dartException=b
t=A.ds
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
ds(){return J.a3(this.dartException)},
bV(a){throw A.b(a)},
dq(a,b){throw A.bS(b,a)},
dp(a){throw A.b(A.bh(a))},
c5(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aF().constructor.prototype):Object.create(new A.a6(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bg(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.c1(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bg(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
c1(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.c_)}throw A.b("Error in functionType of tearoff")},
c2(a,b,c,d){var t=A.bf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bg(a,b,c,d){if(c)return A.c4(a,b,d)
return A.c2(b.length,d,a,b)},
c3(a,b,c,d){var t=A.bf,s=A.c0
switch(b?-1:a){case 0:throw A.b(new A.aE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
c4(a,b,c){var t,s
if($.bd==null)$.bd=A.bc("interceptor")
if($.be==null)$.be=A.bc("receiver")
t=b.length
s=A.c3(t,c,a,b)
return s},
b6(a){return A.c5(a)},
c_(a,b){return A.aQ(v.typeUniverse,A.a0(a.a),b)},
bf(a){return a.a},
c0(a){return a.b},
bc(a){var t,s,r,q=new A.a6("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.b(new A.H(!1,null,null,"Field name "+a+" not found."))},
dL(a){throw A.b(new A.aM(a))},
da(a){return v.getIsolateTag(a)},
dk(a){var t,s,r,q,p,o=A.bC($.bR.$1(a)),n=$.aT[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cM($.bM.$2(a,o))
if(r!=null){n=$.aT[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.aY(t)
$.aT[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aX[o]=t
return t}if(q==="-"){p=A.aY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bT(a,t)
if(q==="*")throw A.b(A.bo(o))
if(v.leafTags[o]===true){p=A.aY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bT(a,t)},
bT(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ba(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aY(a){return J.ba(a,!1,null,!!a.$in)},
dm(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.aY(t)
else return J.ba(t,c,null,null)},
de(){if(!0===$.b8)return
$.b8=!0
A.df()},
df(){var t,s,r,q,p,o,n,m
$.aT=Object.create(null)
$.aX=Object.create(null)
A.dd()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bU.$1(p)
if(o!=null){n=A.dm(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dd(){var t,s,r,q,p,o,n=B.f()
n=A.G(B.h,A.G(B.i,A.G(B.c,A.G(B.c,A.G(B.j,A.G(B.k,A.G(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bR=new A.aU(q)
$.bM=new A.aV(p)
$.bU=new A.aW(o)},
G(a,b){return a(b)||b},
d8(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
z:function z(){},
au:function au(){},
aI:function aI(){},
aF:function aF(){},
a6:function a6(a,b){this.a=a
this.b=b},
aM:function aM(a){this.a=a},
aE:function aE(a){this.a=a},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a},
aW:function aW(a){this.a=a},
A(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bO(b,a))},
ae:function ae(){},
O:function O(){},
af:function af(){},
D:function D(){},
M:function M(){},
N:function N(){},
ag:function ag(){},
ah:function ah(){},
ai:function ai(){},
aj:function aj(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
P:function P(){},
an:function an(){},
T:function T(){},
U:function U(){},
V:function V(){},
W:function W(){},
bm(a,b){var t=b.c
return t==null?b.c=A.b2(a,b.x,!0):t},
b_(a,b){var t=b.c
return t==null?b.c=A.Y(a,"bi",[b.x]):t},
bn(a){var t=a.w
if(t===6||t===7||t===8)return A.bn(a.x)
return t===12||t===13},
cl(a){return a.as},
bP(a){return A.ar(v.typeUniverse,a,!1)},
y(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.by(a0,s,!0)
case 7:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.b2(a0,s,!0)
case 8:t=a1.x
s=A.y(a0,t,a2,a3)
if(s===t)return a1
return A.bw(a0,s,!0)
case 9:r=a1.y
q=A.F(a0,r,a2,a3)
if(q===r)return a1
return A.Y(a0,a1.x,q)
case 10:p=a1.x
o=A.y(a0,p,a2,a3)
n=a1.y
m=A.F(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b0(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.F(a0,k,a2,a3)
if(j===k)return a1
return A.bx(a0,l,j)
case 12:i=a1.x
h=A.y(a0,i,a2,a3)
g=a1.y
f=A.d5(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bv(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.F(a0,e,a2,a3)
p=a1.x
o=A.y(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b1(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.b(A.a5("Attempted to substitute unexpected RTI kind "+a))}},
F(a,b,c,d){var t,s,r,q,p=b.length,o=A.aR(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.y(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d6(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aR(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.y(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d5(a,b,c,d){var t,s=b.a,r=A.F(a,s,c,d),q=b.b,p=A.F(a,q,c,d),o=b.c,n=A.d6(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ap()
t.a=r
t.b=p
t.c=n
return t},
bL(a,b){a[v.arrayRti]=b
return a},
bN(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dc(t)
return a.$S()}return null},
dg(a,b){var t
if(A.bn(b))if(a instanceof A.z){t=A.bN(a)
if(t!=null)return t}return A.a0(a)},
a0(a){if(a instanceof A.j)return A.bG(a)
if(Array.isArray(a))return A.aS(a)
return A.b3(J.a_(a))},
aS(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bG(a){var t=a.$ti
return t!=null?t:A.b3(a)},
b3(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cU(a,t)},
cU(a,b){var t=a instanceof A.z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cI(v.typeUniverse,t.name)
b.$ccache=s
return s},
dc(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ar(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
db(a){return A.B(A.bG(a))},
d4(a){var t=a instanceof A.z?A.bN(a):null
if(t!=null)return t
if(u.R.b(a))return J.bZ(a).a
if(Array.isArray(a))return A.aS(a)
return A.a0(a)},
B(a){var t=a.r
return t==null?a.r=A.bD(a):t},
bD(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.aP(a)
t=A.ar(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.bD(t):s},
q(a){return A.B(A.ar(v.typeUniverse,a,!1))},
cT(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.t(n,a,A.cZ)
if(!A.u(n))t=n===u._
else t=!0
if(t)return A.t(n,a,A.d2)
t=n.w
if(t===7)return A.t(n,a,A.cR)
if(t===1)return A.t(n,a,A.bJ)
s=t===6?n.x:n
r=s.w
if(r===8)return A.t(n,a,A.cV)
if(s===u.S)q=A.bI
else if(s===u.i||s===u.H)q=A.cY
else if(s===u.N)q=A.d0
else q=s===u.y?A.b4:null
if(q!=null)return A.t(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dh)){n.f="$i"+p
if(p==="cd")return A.t(n,a,A.cX)
return A.t(n,a,A.d1)}}else if(r===11){o=A.d8(s.x,s.y)
return A.t(n,a,o==null?A.bJ:o)}return A.t(n,a,A.cP)},
t(a,b,c){a.b=c
return a.b(b)},
cS(a){var t,s=this,r=A.cO
if(!A.u(s))t=s===u._
else t=!0
if(t)r=A.cN
else if(s===u.K)r=A.cL
else{t=A.a1(s)
if(t)r=A.cQ}s.a=r
return s.a(a)},
as(a){var t,s=a.w
if(!A.u(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.as(a.x)))t=s===8&&A.as(a.x)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cP(a){var t=this
if(a==null)return A.as(t)
return A.di(v.typeUniverse,A.dg(a,t),t)},
cR(a){if(a==null)return!0
return this.x.b(a)},
d1(a){var t,s=this
if(a==null)return A.as(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a_(a)[t]},
cX(a){var t,s=this
if(a==null)return A.as(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a_(a)[t]},
cO(a){var t=this
if(a==null){if(A.a1(t))return a}else if(t.b(a))return a
A.bE(a,t)},
cQ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bE(a,t)},
bE(a,b){throw A.b(A.cy(A.bp(a,A.m(b,null))))},
bp(a,b){return A.ay(a)+": type '"+A.m(A.d4(a),null)+"' is not a subtype of type '"+b+"'"},
cy(a){return new A.aq("TypeError: "+a)},
l(a,b){return new A.aq("TypeError: "+A.bp(a,b))},
cV(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.b_(v.typeUniverse,s).b(a)},
cZ(a){return a!=null},
cL(a){if(a!=null)return a
throw A.b(A.l(a,"Object"))},
d2(a){return!0},
cN(a){return a},
bJ(a){return!1},
b4(a){return!0===a||!1===a},
dz(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.l(a,"bool"))},
dB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.l(a,"bool"))},
dA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.l(a,"bool?"))},
dC(a){if(typeof a=="number")return a
throw A.b(A.l(a,"double"))},
dE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"double"))},
dD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"double?"))},
bI(a){return typeof a=="number"&&Math.floor(a)===a},
bB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.l(a,"int"))},
dG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.l(a,"int"))},
dF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.l(a,"int?"))},
cY(a){return typeof a=="number"},
dH(a){if(typeof a=="number")return a
throw A.b(A.l(a,"num"))},
dI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"num"))},
cK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.l(a,"num?"))},
d0(a){return typeof a=="string"},
bC(a){if(typeof a=="string")return a
throw A.b(A.l(a,"String"))},
dJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.l(a,"String"))},
cM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.l(a,"String?"))},
bK(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.m(a[r],b)
return t},
d3(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bK(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.m(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bF(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.bL([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.d.A(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b9(a4,k)
n=B.n.C(n+m,a4[k])
j=a5[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.m(j,a4)}n+=">"}else{n=""
s=null}p=a3.x
h=a3.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.m(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.m(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.m(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.m(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
m(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.m(a.x,b)
if(m===7){t=a.x
s=A.m(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.m(a.x,b)+">"
if(m===9){q=A.d7(a.x)
p=a.y
return p.length>0?q+("<"+A.bK(p,b)+">"):q}if(m===11)return A.d3(a,b)
if(m===12)return A.bF(a,b,null)
if(m===13)return A.bF(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b9(b,o)
return b[o]}return"?"},
d7(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cJ(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cI(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ar(a,b,!1)
else if(typeof n=="number"){t=n
s=A.Z(a,5,"#")
r=A.aR(t)
for(q=0;q<t;++q)r[q]=s
p=A.Y(a,b,r)
o[b]=p
return p}else return n},
cG(a,b){return A.bz(a.tR,b)},
cF(a,b){return A.bz(a.eT,b)},
ar(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bt(A.br(a,null,b,c))
s.set(b,t)
return t},
aQ(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bt(A.br(a,b,c,!0))
r.set(c,s)
return s},
cH(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b0(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
r(a,b){b.a=A.cS
b.b=A.cT
return b},
Z(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.p(null,null)
t.w=b
t.as=c
s=A.r(a,t)
a.eC.set(c,s)
return s},
by(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cD(a,b,s,c)
a.eC.set(s,t)
return t},
cD(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.u(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.p(null,null)
r.w=6
r.x=b
r.as=c
return A.r(a,r)},
b2(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cC(a,b,s,c)
a.eC.set(s,t)
return t},
cC(a,b,c,d){var t,s,r,q
if(d){t=b.w
if(!A.u(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a1(b.x)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.a1(r.x))return r
else return A.bm(a,b)}}q=new A.p(null,null)
q.w=7
q.x=b
q.as=c
return A.r(a,q)},
bw(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cA(a,b,s,c)
a.eC.set(s,t)
return t},
cA(a,b,c,d){var t,s
if(d){t=b.w
if(A.u(b)||b===u.K||b===u._)return b
else if(t===1)return A.Y(a,"bi",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.p(null,null)
s.w=8
s.x=b
s.as=c
return A.r(a,s)},
cE(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.w=14
t.x=b
t.as=r
s=A.r(a,t)
a.eC.set(r,s)
return s},
X(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cz(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
Y(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.X(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.p(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.r(a,s)
a.eC.set(q,r)
return r},
b0(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.X(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.p(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.r(a,p)
a.eC.set(r,o)
return o},
bx(a,b,c){var t,s,r="+"+(b+"("+A.X(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.r(a,t)
a.eC.set(r,s)
return s},
bv(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.X(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.X(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cz(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.p(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.r(a,q)
a.eC.set(s,p)
return p},
b1(a,b,c,d){var t,s=b.as+("<"+A.X(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cB(a,b,c,s,d)
a.eC.set(s,t)
return t},
cB(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aR(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.y(a,b,s,0)
n=A.F(a,c,s,0)
return A.b1(a,o,n,c!==n)}}m=new A.p(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.r(a,m)},
br(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bt(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ct(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bs(a,s,m,l,!1)
else if(r===46)s=A.bs(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.x(a.u,a.e,l.pop()))
break
case 94:l.push(A.cE(a.u,l.pop()))
break
case 35:l.push(A.Z(a.u,5,"#"))
break
case 64:l.push(A.Z(a.u,2,"@"))
break
case 126:l.push(A.Z(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cv(a,l)
break
case 38:A.cu(a,l)
break
case 42:q=a.u
l.push(A.by(q,A.x(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.b2(q,A.x(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bw(q,A.x(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cs(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bu(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cx(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.x(a.u,a.e,n)},
ct(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bs(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.cJ(t,p.x)[q]
if(o==null)A.bV('No "'+q+'" in "'+A.cl(p)+'"')
d.push(A.aQ(t,p,o))}else d.push(q)
return n},
cv(a,b){var t,s=a.u,r=A.bq(a,b),q=b.pop()
if(typeof q=="string")b.push(A.Y(s,q,r))
else{t=A.x(s,a.e,q)
switch(t.w){case 12:b.push(A.b1(s,t,r,a.n))
break
default:b.push(A.b0(s,t,r))
break}}},
cs(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.bq(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.x(n,a.e,m)
p=new A.ap()
p.a=r
p.b=t
p.c=s
b.push(A.bv(n,q,p))
return
case-4:b.push(A.bx(n,b.pop(),r))
return
default:throw A.b(A.a5("Unexpected state under `()`: "+A.R(m)))}},
cu(a,b){var t=b.pop()
if(0===t){b.push(A.Z(a.u,1,"0&"))
return}if(1===t){b.push(A.Z(a.u,4,"1&"))
return}throw A.b(A.a5("Unexpected extended operation "+A.R(t)))},
bq(a,b){var t=b.splice(a.p)
A.bu(a.u,a.e,t)
a.p=b.pop()
return t},
x(a,b,c){if(typeof c=="string")return A.Y(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cw(a,b,c)}else return c},
bu(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.x(a,b,c[t])},
cx(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.x(a,b,c[t])},
cw(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.b(A.a5("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.b(A.a5("Bad index "+c+" for "+b.h(0)))},
di(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.f(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
f(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.u(d))t=d===u._
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.u(b))return!1
t=b.w
if(t===1)return!0
r=s===14
if(r)if(A.f(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.f(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.f(a,b.x,c,d,e,!1)
if(s===6)return A.f(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.f(a,b.x,c,d,e,!1)
if(q===6){t=A.bm(a,d)
return A.f(a,b,c,t,e,!1)}if(s===8){if(!A.f(a,b.x,c,d,e,!1))return!1
return A.f(a,A.b_(a,b),c,d,e,!1)}if(s===7){t=A.f(a,u.P,c,d,e,!1)
return t&&A.f(a,b.x,c,d,e,!1)}if(q===8){if(A.f(a,b,c,d.x,e,!1))return!0
return A.f(a,b,c,A.b_(a,d),e,!1)}if(q===7){t=A.f(a,b,c,u.P,e,!1)
return t||A.f(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.f(a,k,c,j,e,!1)||!A.f(a,j,e,k,c,!1))return!1}return A.bH(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bH(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.cW(a,b,c,d,e,!1)}if(p&&q===11)return A.d_(a,b,c,d,e,!1)
return!1},
bH(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.f(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.f(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.f(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.f(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.f(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cW(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aQ(a,b,s[p])
return A.bA(a,q,null,c,d.y,e,!1)}return A.bA(a,b.y,null,c,d.y,e,!1)},
bA(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.f(a,b[t],d,e[t],f,!1))return!1
return!0},
d_(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.f(a,s[t],c,r[t],e,!1))return!1
return!0},
a1(a){var t,s=a.w
if(!(a===u.P||a===u.T))if(!A.u(a))if(s!==7)if(!(s===6&&A.a1(a.x)))t=s===8&&A.a1(a.x)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dh(a){var t
if(!A.u(a))t=a===u._
else t=!0
return t},
u(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bz(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aR(a){return a>0?new Array(a):v.typeUniverse.sEA},
p:function p(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ap:function ap(){this.c=this.b=this.a=null},
aP:function aP(a){this.a=a},
aN:function aN(){},
aq:function aq(a){this.a=a},
d:function d(){},
cm(a,b,c){var t=J.bY(b)
if(!t.n())return a
if(c.length===0){do a+=A.R(t.gm())
while(t.n())}else{a+=A.R(t.gm())
for(;t.n();)a=a+c+A.R(t.gm())}return a},
c6(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
c7(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
a7(a){if(a>=10)return""+a
return"0"+a},
ay(a){if(typeof a=="number"||A.b4(a)||a==null)return J.a3(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ck(a)},
a5(a){return new A.at(a)},
cr(a){return new A.aL(a)},
bo(a){return new A.aK(a)},
bh(a){return new A.av(a)},
bj(a,b,c){var t,s
if(A.dj(a))return b+"..."+c
t=new A.aH(b)
B.d.A($.a2,a)
try{s=t
s.a=A.cm(s.a,a,", ")}finally{if(0>=$.a2.length)return A.b9($.a2,-1)
$.a2.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
aw:function aw(a,b){this.a=a
this.b=b},
ax:function ax(){},
at:function at(a){this.a=a},
aJ:function aJ(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function az(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aL:function aL(a){this.a=a},
aK:function aK(a){this.a=a},
av:function av(a){this.a=a},
Q:function Q(){},
j:function j(){},
aH:function aH(a){this.a=a},
dr(a){A.dq(new A.aB("Field '"+a+"' has been assigned during initialization."),new Error())},
dl(){var t,s=new A.aw(Date.now(),!1),r=self,q=u.m,p=u.z,o=p.a(q.a(r.document).querySelector("#output"))
if(o==null)o=q.a(o)
t=p.a(q.a(r.document).querySelector("#output1"))
if(t==null)t=q.a(t)
o.textContent="The time is "+A.bk(s)+":"+A.bl(s)+" and your Dart web app is running!"
t.textContent="Sum is 60 "}},B={}
var w=[A,J,B]
var $={}
A.aZ.prototype={}
J.a8.prototype={
h(a){return"Instance of '"+A.aC(a)+"'"},
gi(a){return A.B(A.b3(this))}}
J.a9.prototype={
h(a){return String(a)},
gi(a){return A.B(u.y)},
$ic:1,
$ib5:1}
J.I.prototype={
h(a){return"null"},
$ic:1}
J.K.prototype={$ih:1}
J.w.prototype={
h(a){return String(a)}}
J.ao.prototype={}
J.S.prototype={}
J.v.prototype={
h(a){var t=a[$.bX()]
if(t==null)return this.D(a)
return"JavaScript function for "+J.a3(t)}}
J.J.prototype={
h(a){return String(a)}}
J.L.prototype={
h(a){return String(a)}}
J.o.prototype={
A(a,b){A.aS(a).c.a(b)
if(!!a.fixed$length)A.bV(A.cr("add"))
a.push(b)},
h(a){return A.bj(a,"[","]")},
gB(a){return new J.a4(a,a.length,A.aS(a).l("a4<1>"))},
gj(a){return a.length},
$ie:1}
J.aA.prototype={}
J.a4.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dp(r)
throw A.b(r)}t=s.c
if(t>=q){s.sv(null)
return!1}s.sv(r[t]);++s.c
return!0},
sv(a){this.d=this.$ti.l("1?").a(a)}}
J.ac.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.B(u.H)},
$ii:1}
J.aa.prototype={
gi(a){return A.B(u.S)},
$ic:1,
$ia:1}
J.ab.prototype={
gi(a){return A.B(u.i)},
$ic:1}
J.C.prototype={
C(a,b){return a+b},
h(a){return a},
gi(a){return A.B(u.N)},
gj(a){return a.length},
$ic:1,
$iaG:1}
A.aB.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ad.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=J.bQ(r),p=q.gj(r)
if(s.b!==p)throw A.b(A.bh(r))
t=s.c
if(t>=p){s.su(null)
return!1}s.su(q.k(r,t));++s.c
return!0},
su(a){this.d=this.$ti.l("1?").a(a)}}
A.k.prototype={}
A.z.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bW(s==null?"unknown":s)+"'"},
gE(){return this},
$C:"$1",
$R:1,
$D:null}
A.au.prototype={$C:"$2",$R:2}
A.aI.prototype={}
A.aF.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bW(t)+"'"}}
A.a6.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aC(this.a)+"'")}}
A.aM.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aE.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aU.prototype={
$1(a){return this.a(a)}}
A.aV.prototype={
$2(a,b){return this.a(a,b)}}
A.aW.prototype={
$1(a){return this.a(A.bC(a))}}
A.ae.prototype={
gi(a){return B.q},
$ic:1}
A.O.prototype={}
A.af.prototype={
gi(a){return B.r},
$ic:1}
A.D.prototype={
gj(a){return a.length},
$in:1}
A.M.prototype={
k(a,b){A.A(b,a,a.length)
return a[b]},
$ie:1}
A.N.prototype={$ie:1}
A.ag.prototype={
gi(a){return B.t},
$ic:1}
A.ah.prototype={
gi(a){return B.u},
$ic:1}
A.ai.prototype={
gi(a){return B.v},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.aj.prototype={
gi(a){return B.w},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.ak.prototype={
gi(a){return B.x},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.al.prototype={
gi(a){return B.y},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.am.prototype={
gi(a){return B.z},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.P.prototype={
gi(a){return B.A},
gj(a){return a.length},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.an.prototype={
gi(a){return B.B},
gj(a){return a.length},
k(a,b){A.A(b,a,a.length)
return a[b]},
$ic:1}
A.T.prototype={}
A.U.prototype={}
A.V.prototype={}
A.W.prototype={}
A.p.prototype={
l(a){return A.aQ(v.typeUniverse,this,a)},
F(a){return A.cH(v.typeUniverse,this,a)}}
A.ap.prototype={}
A.aP.prototype={
h(a){return A.m(this.a,null)}}
A.aN.prototype={
h(a){return this.a}}
A.aq.prototype={}
A.d.prototype={
gB(a){return new A.ad(a,this.gj(a),A.a0(a).l("ad<d.E>"))},
h(a){return A.bj(a,"[","]")}}
A.aw.prototype={
h(a){var t=this,s=A.c6(A.cj(t)),r=A.a7(A.ch(t)),q=A.a7(A.cf(t)),p=A.a7(A.bk(t)),o=A.a7(A.bl(t)),n=A.a7(A.ci(t)),m=A.c7(A.cg(t))
return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m}}
A.ax.prototype={}
A.at.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ay(t)
return"Assertion failed"}}
A.aJ.prototype={}
A.H.prototype={
gq(){return"Invalid argument"+(!this.a?"(s)":"")},
gp(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gq()+r+p
if(!t.a)return o
return o+t.gp()+": "+A.ay(t.gt())},
gt(){return this.b}}
A.aD.prototype={
gt(){return A.cK(this.b)},
gq(){return"RangeError"},
gp(){return""}}
A.az.prototype={
gt(){return A.bB(this.b)},
gq(){return"RangeError"},
gp(){if(A.bB(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aL.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aK.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.av.prototype={
h(a){return"Concurrent modification during iteration: "+A.ay(this.a)+"."}}
A.Q.prototype={
h(a){return"null"}}
A.j.prototype={$ij:1,
h(a){return"Instance of '"+A.aC(this)+"'"},
gi(a){return A.db(this)},
toString(){return this.h(this)}}
A.aH.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.w.prototype
t.D=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.aZ,J.a8,J.a4,A.ax,A.ad,A.k,A.z,A.p,A.ap,A.aP,A.d,A.aw,A.Q,A.aH])
r(J.a8,[J.a9,J.I,J.K,J.J,J.L,J.ac,J.C])
r(J.K,[J.w,J.o,A.ae,A.O])
r(J.w,[J.ao,J.S,J.v])
s(J.aA,J.o)
r(J.ac,[J.aa,J.ab])
r(A.ax,[A.aB,A.aM,A.aE,A.aN,A.at,A.aJ,A.H,A.aL,A.aK,A.av])
r(A.z,[A.au,A.aI,A.aU,A.aW])
r(A.aI,[A.aF,A.a6])
s(A.aV,A.au)
r(A.O,[A.af,A.D])
r(A.D,[A.T,A.V])
s(A.U,A.T)
s(A.M,A.U)
s(A.W,A.V)
s(A.N,A.W)
r(A.M,[A.ag,A.ah])
r(A.N,[A.ai,A.aj,A.ak,A.al,A.am,A.P,A.an])
s(A.aq,A.aN)
r(A.H,[A.aD,A.az])
t(A.T,A.d)
t(A.U,A.k)
t(A.V,A.d)
t(A.W,A.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",i:"double",dn:"num",aG:"String",b5:"bool",Q:"Null",cd:"List",j:"Object",dx:"Map"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cG(v.typeUniverse,JSON.parse('{"ao":"w","S":"w","v":"w","a9":{"b5":[],"c":[]},"I":{"c":[]},"K":{"h":[]},"w":{"h":[]},"o":{"h":[],"e":["1"]},"aA":{"o":["1"],"h":[],"e":["1"]},"ac":{"i":[]},"aa":{"i":[],"a":[],"c":[]},"ab":{"i":[],"c":[]},"C":{"aG":[],"c":[]},"ae":{"h":[],"c":[]},"O":{"h":[]},"af":{"h":[],"c":[]},"D":{"n":["1"],"h":[]},"M":{"d":["i"],"n":["i"],"h":[],"e":["i"],"k":["i"]},"N":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"]},"ag":{"d":["i"],"n":["i"],"h":[],"e":["i"],"k":["i"],"c":[],"d.E":"i"},"ah":{"d":["i"],"n":["i"],"h":[],"e":["i"],"k":["i"],"c":[],"d.E":"i"},"ai":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"aj":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"ak":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"al":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"am":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"P":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"an":{"d":["a"],"n":["a"],"h":[],"e":["a"],"k":["a"],"c":[],"d.E":"a"},"cc":{"e":["a"]},"cq":{"e":["a"]},"cp":{"e":["a"]},"ca":{"e":["a"]},"cn":{"e":["a"]},"cb":{"e":["a"]},"co":{"e":["a"]},"c8":{"e":["i"]},"c9":{"e":["i"]}}'))
A.cF(v.typeUniverse,JSON.parse('{"D":1}'))
var u=(function rtii(){var t=A.bP
return{Z:t("dw"),s:t("o<aG>"),b:t("o<@>"),T:t("I"),m:t("h"),g:t("v"),p:t("n<@>"),P:t("Q"),K:t("j"),L:t("dy"),N:t("aG"),R:t("c"),o:t("S"),y:t("b5"),i:t("i"),S:t("a"),A:t("0&*"),_:t("j*"),O:t("bi<Q>?"),z:t("h?"),X:t("j?"),H:t("dn")}})();(function constants(){B.m=J.a8.prototype
B.d=J.o.prototype
B.n=J.C.prototype
B.o=J.v.prototype
B.p=J.K.prototype
B.e=J.ao.prototype
B.a=J.S.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.c=function(hooks) { return hooks; }

B.q=A.q("dt")
B.r=A.q("du")
B.t=A.q("c8")
B.u=A.q("c9")
B.v=A.q("ca")
B.w=A.q("cb")
B.x=A.q("cc")
B.y=A.q("cn")
B.z=A.q("co")
B.A=A.q("cp")
B.B=A.q("cq")})();(function staticFields(){$.aO=null
$.a2=A.bL([],A.bP("o<j>"))
$.be=null
$.bd=null
$.bR=null
$.bM=null
$.bU=null
$.aT=null
$.aX=null
$.b8=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dv","bX",()=>A.da("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ae,ArrayBufferView:A.O,DataView:A.af,Float32Array:A.ag,Float64Array:A.ah,Int16Array:A.ai,Int32Array:A.aj,Int8Array:A.ak,Uint16Array:A.al,Uint32Array:A.am,Uint8ClampedArray:A.P,CanvasPixelArray:A.P,Uint8Array:A.an})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.D.$nativeSuperclassTag="ArrayBufferView"
A.T.$nativeSuperclassTag="ArrayBufferView"
A.U.$nativeSuperclassTag="ArrayBufferView"
A.M.$nativeSuperclassTag="ArrayBufferView"
A.V.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"
A.N.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dl
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
