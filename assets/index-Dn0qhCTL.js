function Qg(l,r){for(var c=0;c<r.length;c++){const s=r[c];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in l)){const f=Object.getOwnPropertyDescriptor(s,o);f&&Object.defineProperty(l,o,f.get?f:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function c(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(o){if(o.ep)return;o.ep=!0;const f=c(o);fetch(o.href,f)}})();function n1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ks={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function Zg(){if(Km)return Si;Km=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(s,o,f){var m=null;if(f!==void 0&&(m=""+f),o.key!==void 0&&(m=""+o.key),"key"in o){f={};for(var g in o)g!=="key"&&(f[g]=o[g])}else f=o;return o=f.ref,{$$typeof:l,type:s,key:m,ref:o!==void 0?o:null,props:f}}return Si.Fragment=r,Si.jsx=c,Si.jsxs=c,Si}var $m;function Kg(){return $m||($m=1,ks.exports=Zg()),ks.exports}var j=Kg(),Vs={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function $g(){if(Jm)return ut;Jm=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,N={};function A(S,G,at){this.props=S,this.context=G,this.refs=N,this.updater=at||U}A.prototype.isReactComponent={},A.prototype.setState=function(S,G){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,G,"setState")},A.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function C(){}C.prototype=A.prototype;function B(S,G,at){this.props=S,this.context=G,this.refs=N,this.updater=at||U}var Y=B.prototype=new C;Y.constructor=B,z(Y,A.prototype),Y.isPureReactComponent=!0;var F=Array.isArray,D={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function et(S,G,at,I,Z,yt){return at=yt.ref,{$$typeof:l,type:S,key:G,ref:at!==void 0?at:null,props:yt}}function Vt(S,G){return et(S.type,G,void 0,void 0,void 0,S.props)}function $(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function ct(S){var G={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(at){return G[at]})}var ue=/\/+/g;function na(S,G){return typeof S=="object"&&S!==null&&S.key!=null?ct(""+S.key):G.toString(36)}function Ge(){}function la(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Ge,Ge):(S.status="pending",S.then(function(G){S.status==="pending"&&(S.status="fulfilled",S.value=G)},function(G){S.status==="pending"&&(S.status="rejected",S.reason=G)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function fe(S,G,at,I,Z){var yt=typeof S;(yt==="undefined"||yt==="boolean")&&(S=null);var st=!1;if(S===null)st=!0;else switch(yt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(S.$$typeof){case l:case r:st=!0;break;case b:return st=S._init,fe(st(S._payload),G,at,I,Z)}}if(st)return Z=Z(S),st=I===""?"."+na(S,0):I,F(Z)?(at="",st!=null&&(at=st.replace(ue,"$&/")+"/"),fe(Z,G,at,"",function(Bt){return Bt})):Z!=null&&($(Z)&&(Z=Vt(Z,at+(Z.key==null||S&&S.key===Z.key?"":(""+Z.key).replace(ue,"$&/")+"/")+st)),G.push(Z)),1;st=0;var ce=I===""?".":I+":";if(F(S))for(var xt=0;xt<S.length;xt++)I=S[xt],yt=ce+na(I,xt),st+=fe(I,G,at,yt,Z);else if(xt=T(S),typeof xt=="function")for(S=xt.call(S),xt=0;!(I=S.next()).done;)I=I.value,yt=ce+na(I,xt++),st+=fe(I,G,at,yt,Z);else if(yt==="object"){if(typeof S.then=="function")return fe(la(S),G,at,I,Z);throw G=String(S),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return st}function Q(S,G,at){if(S==null)return S;var I=[],Z=0;return fe(S,I,"","",function(yt){return G.call(at,yt,Z++)}),I}function rt(S){if(S._status===-1){var G=S._result;G=G(),G.then(function(at){(S._status===0||S._status===-1)&&(S._status=1,S._result=at)},function(at){(S._status===0||S._status===-1)&&(S._status=2,S._result=at)}),S._status===-1&&(S._status=0,S._result=G)}if(S._status===1)return S._result.default;throw S._result}var nt=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function wt(){}return ut.Children={map:Q,forEach:function(S,G,at){Q(S,function(){G.apply(this,arguments)},at)},count:function(S){var G=0;return Q(S,function(){G++}),G},toArray:function(S){return Q(S,function(G){return G})||[]},only:function(S){if(!$(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ut.Component=A,ut.Fragment=c,ut.Profiler=o,ut.PureComponent=B,ut.StrictMode=s,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ut.act=function(){throw Error("act(...) is not supported in production builds of React.")},ut.cache=function(S){return function(){return S.apply(null,arguments)}},ut.cloneElement=function(S,G,at){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var I=z({},S.props),Z=S.key,yt=void 0;if(G!=null)for(st in G.ref!==void 0&&(yt=void 0),G.key!==void 0&&(Z=""+G.key),G)!lt.call(G,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&G.ref===void 0||(I[st]=G[st]);var st=arguments.length-2;if(st===1)I.children=at;else if(1<st){for(var ce=Array(st),xt=0;xt<st;xt++)ce[xt]=arguments[xt+2];I.children=ce}return et(S.type,Z,void 0,void 0,yt,I)},ut.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},ut.createElement=function(S,G,at){var I,Z={},yt=null;if(G!=null)for(I in G.key!==void 0&&(yt=""+G.key),G)lt.call(G,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(Z[I]=G[I]);var st=arguments.length-2;if(st===1)Z.children=at;else if(1<st){for(var ce=Array(st),xt=0;xt<st;xt++)ce[xt]=arguments[xt+2];Z.children=ce}if(S&&S.defaultProps)for(I in st=S.defaultProps,st)Z[I]===void 0&&(Z[I]=st[I]);return et(S,yt,void 0,void 0,null,Z)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(S){return{$$typeof:g,render:S}},ut.isValidElement=$,ut.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:rt}},ut.memo=function(S,G){return{$$typeof:h,type:S,compare:G===void 0?null:G}},ut.startTransition=function(S){var G=D.T,at={};D.T=at;try{var I=S(),Z=D.S;Z!==null&&Z(at,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(wt,nt)}catch(yt){nt(yt)}finally{D.T=G}},ut.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ut.use=function(S){return D.H.use(S)},ut.useActionState=function(S,G,at){return D.H.useActionState(S,G,at)},ut.useCallback=function(S,G){return D.H.useCallback(S,G)},ut.useContext=function(S){return D.H.useContext(S)},ut.useDebugValue=function(){},ut.useDeferredValue=function(S,G){return D.H.useDeferredValue(S,G)},ut.useEffect=function(S,G){return D.H.useEffect(S,G)},ut.useId=function(){return D.H.useId()},ut.useImperativeHandle=function(S,G,at){return D.H.useImperativeHandle(S,G,at)},ut.useInsertionEffect=function(S,G){return D.H.useInsertionEffect(S,G)},ut.useLayoutEffect=function(S,G){return D.H.useLayoutEffect(S,G)},ut.useMemo=function(S,G){return D.H.useMemo(S,G)},ut.useOptimistic=function(S,G){return D.H.useOptimistic(S,G)},ut.useReducer=function(S,G,at){return D.H.useReducer(S,G,at)},ut.useRef=function(S){return D.H.useRef(S)},ut.useState=function(S){return D.H.useState(S)},ut.useSyncExternalStore=function(S,G,at){return D.H.useSyncExternalStore(S,G,at)},ut.useTransition=function(){return D.H.useTransition()},ut.version="19.0.0",ut}var Fm;function Yo(){return Fm||(Fm=1,Vs.exports=$g()),Vs.exports}var M=Yo();const Bo=n1(M),Wm=Qg({__proto__:null,default:Bo},[M]);var Qs={exports:{}},xi={},Zs={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function Jg(){return Pm||(Pm=1,function(l){function r(Q,rt){var nt=Q.length;Q.push(rt);t:for(;0<nt;){var wt=nt-1>>>1,S=Q[wt];if(0<o(S,rt))Q[wt]=rt,Q[nt]=S,nt=wt;else break t}}function c(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var rt=Q[0],nt=Q.pop();if(nt!==rt){Q[0]=nt;t:for(var wt=0,S=Q.length,G=S>>>1;wt<G;){var at=2*(wt+1)-1,I=Q[at],Z=at+1,yt=Q[Z];if(0>o(I,nt))Z<S&&0>o(yt,I)?(Q[wt]=yt,Q[Z]=nt,wt=Z):(Q[wt]=I,Q[at]=nt,wt=at);else if(Z<S&&0>o(yt,nt))Q[wt]=yt,Q[Z]=nt,wt=Z;else break t}}return rt}function o(Q,rt){var nt=Q.sortIndex-rt.sortIndex;return nt!==0?nt:Q.id-rt.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();l.unstable_now=function(){return m.now()-g}}var p=[],h=[],b=1,R=null,T=3,U=!1,z=!1,N=!1,A=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function Y(Q){for(var rt=c(h);rt!==null;){if(rt.callback===null)s(h);else if(rt.startTime<=Q)s(h),rt.sortIndex=rt.expirationTime,r(p,rt);else break;rt=c(h)}}function F(Q){if(N=!1,Y(Q),!z)if(c(p)!==null)z=!0,la();else{var rt=c(h);rt!==null&&fe(F,rt.startTime-Q)}}var D=!1,lt=-1,et=5,Vt=-1;function $(){return!(l.unstable_now()-Vt<et)}function ct(){if(D){var Q=l.unstable_now();Vt=Q;var rt=!0;try{t:{z=!1,N&&(N=!1,C(lt),lt=-1),U=!0;var nt=T;try{e:{for(Y(Q),R=c(p);R!==null&&!(R.expirationTime>Q&&$());){var wt=R.callback;if(typeof wt=="function"){R.callback=null,T=R.priorityLevel;var S=wt(R.expirationTime<=Q);if(Q=l.unstable_now(),typeof S=="function"){R.callback=S,Y(Q),rt=!0;break e}R===c(p)&&s(p),Y(Q)}else s(p);R=c(p)}if(R!==null)rt=!0;else{var G=c(h);G!==null&&fe(F,G.startTime-Q),rt=!1}}break t}finally{R=null,T=nt,U=!1}rt=void 0}}finally{rt?ue():D=!1}}}var ue;if(typeof B=="function")ue=function(){B(ct)};else if(typeof MessageChannel<"u"){var na=new MessageChannel,Ge=na.port2;na.port1.onmessage=ct,ue=function(){Ge.postMessage(null)}}else ue=function(){A(ct,0)};function la(){D||(D=!0,ue())}function fe(Q,rt){lt=A(function(){Q(l.unstable_now())},rt)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(Q){Q.callback=null},l.unstable_continueExecution=function(){z||U||(z=!0,la())},l.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<Q?Math.floor(1e3/Q):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_getFirstCallbackNode=function(){return c(p)},l.unstable_next=function(Q){switch(T){case 1:case 2:case 3:var rt=3;break;default:rt=T}var nt=T;T=rt;try{return Q()}finally{T=nt}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(Q,rt){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var nt=T;T=Q;try{return rt()}finally{T=nt}},l.unstable_scheduleCallback=function(Q,rt,nt){var wt=l.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?wt+nt:wt):nt=wt,Q){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=nt+S,Q={id:b++,callback:rt,priorityLevel:Q,startTime:nt,expirationTime:S,sortIndex:-1},nt>wt?(Q.sortIndex=nt,r(h,Q),c(p)===null&&Q===c(h)&&(N?(C(lt),lt=-1):N=!0,fe(F,nt-wt))):(Q.sortIndex=S,r(p,Q),z||U||(z=!0,la())),Q},l.unstable_shouldYield=$,l.unstable_wrapCallback=function(Q){var rt=T;return function(){var nt=T;T=rt;try{return Q.apply(this,arguments)}finally{T=nt}}}}(Ks)),Ks}var Im;function Fg(){return Im||(Im=1,Zs.exports=Jg()),Zs.exports}var $s={exports:{}},le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function Wg(){if(th)return le;th=1;var l=Yo();function r(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},o=Symbol.for("react.portal");function f(p,h,b){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:p,containerInfo:h,implementation:b}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,le.createPortal=function(p,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return f(p,h,null,b)},le.flushSync=function(p){var h=m.T,b=s.p;try{if(m.T=null,s.p=2,p)return p()}finally{m.T=h,s.p=b,s.d.f()}},le.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},le.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},le.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var b=h.as,R=g(b,h.crossOrigin),T=typeof h.integrity=="string"?h.integrity:void 0,U=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:R,integrity:T,fetchPriority:U}):b==="script"&&s.d.X(p,{crossOrigin:R,integrity:T,fetchPriority:U,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},le.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},le.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,R=g(b,h.crossOrigin);s.d.L(p,b,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},le.preloadModule=function(p,h){if(typeof p=="string")if(h){var b=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},le.requestFormReset=function(p){s.d.r(p)},le.unstable_batchedUpdates=function(p,h){return p(h)},le.useFormState=function(p,h,b){return m.H.useFormState(p,h,b)},le.useFormStatus=function(){return m.H.useHostTransitionStatus()},le.version="19.0.0",le}var eh;function Pg(){if(eh)return $s.exports;eh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),$s.exports=Wg(),$s.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function Ig(){if(ah)return xi;ah=1;var l=Fg(),r=Yo(),c=Pg();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),U=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),F=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var et=Symbol.for("react.client.reference");function Vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case g:return"Portal";case b:return"Profiler";case h:return"StrictMode";case N:return"Suspense";case A:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Provider";case T:return(t._context.displayName||"Context")+".Consumer";case z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return e=t.displayName||null,e!==null?e:Vt(t.type)||"Memo";case B:e=t._payload,t=t._init;try{return Vt(t(e))}catch{}}return null}var $=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=Object.assign,ue,na;function Ge(t){if(ue===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ue=e&&e[1]||"",na=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+na}var la=!1;function fe(t,e){if(!t||la)return"";la=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(H){var _=H}Reflect.construct(t,[],X)}else{try{X.call()}catch(H){_=H}t.call(X.prototype)}}else{try{throw Error()}catch(H){_=H}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(H){if(H&&_&&typeof H.stack=="string")return[H.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),d=u[0],y=u[1];if(d&&y){var v=d.split(`
`),E=y.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===E.length)for(n=v.length-1,i=E.length-1;1<=n&&0<=i&&v[n]!==E[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==E[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==E[i]){var L=`
`+v[n].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=n&&0<=i);break}}}finally{la=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ge(a):""}function Q(t){switch(t.tag){case 26:case 27:case 5:return Ge(t.type);case 16:return Ge("Lazy");case 13:return Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return t=fe(t.type,!1),t;case 11:return t=fe(t.type.render,!1),t;case 1:return t=fe(t.type,!0),t;default:return""}}function rt(t){try{var e="";do e+=Q(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nt(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function wt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(nt(t)!==t)throw Error(s(188))}function G(t){var e=t.alternate;if(!e){if(e=nt(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return S(i),t;if(u===n)return S(i),e;u=u.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=u;else{for(var d=!1,y=i.child;y;){if(y===a){d=!0,a=i,n=u;break}if(y===n){d=!0,n=i,a=u;break}y=y.sibling}if(!d){for(y=u.child;y;){if(y===a){d=!0,a=u,n=i;break}if(y===n){d=!0,n=u,a=i;break}y=y.sibling}if(!d)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function at(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=at(t),e!==null)return e;t=t.sibling}return null}var I=Array.isArray,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},st=[],ce=-1;function xt(t){return{current:t}}function Bt(t){0>ce||(t.current=st[ce],st[ce]=null,ce--)}function Ct(t,e){ce++,st[ce]=t.current,t.current=e}var ke=xt(null),Al=xt(null),za=xt(null),Gi=xt(null);function ki(t,e){switch(Ct(za,e),Ct(Al,t),Ct(ke,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Em(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Em(t),e=Am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Bt(ke),Ct(ke,e)}function Cn(){Bt(ke),Bt(Al),Bt(za)}function ju(t){t.memoizedState!==null&&Ct(Gi,t);var e=ke.current,a=Am(e,t.type);e!==a&&(Ct(Al,t),Ct(ke,a))}function Vi(t){Al.current===t&&(Bt(ke),Bt(Al)),Gi.current===t&&(Bt(Gi),yi._currentValue=yt)}var Uu=Object.prototype.hasOwnProperty,Hu=l.unstable_scheduleCallback,Lu=l.unstable_cancelCallback,Ay=l.unstable_shouldYield,Oy=l.unstable_requestPaint,Ve=l.unstable_now,Ty=l.unstable_getCurrentPriorityLevel,ff=l.unstable_ImmediatePriority,df=l.unstable_UserBlockingPriority,Qi=l.unstable_NormalPriority,Ry=l.unstable_LowPriority,mf=l.unstable_IdlePriority,wy=l.log,zy=l.unstable_setDisableYieldValue,Ol=null,pe=null;function _y(t){if(pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}function _a(t){if(typeof wy=="function"&&zy(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(Ol,t)}catch{}}var ge=Math.clz32?Math.clz32:Ny,My=Math.log,Cy=Math.LN2;function Ny(t){return t>>>=0,t===0?32:31-(My(t)/Cy|0)|0}var Zi=128,Ki=4194304;function an(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $i(t,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes,d=t.warmLanes;t=t.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~i,a!==0?n=an(a):(u&=y,u!==0?n=an(u):t||(d=y&~d,d!==0&&(n=an(d))))):(y=a&~i,y!==0?n=an(y):u!==0?n=an(u):t||(d=a&~d,d!==0&&(n=an(d)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,d=e&-e,i>=d||i===32&&(d&4194176)!==0)?e:n}function Tl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Dy(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(){var t=Zi;return Zi<<=1,(Zi&4194176)===0&&(Zi=128),t}function yf(){var t=Ki;return Ki<<=1,(Ki&62914560)===0&&(Ki=4194304),t}function Yu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Rl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jy(t,e,a,n,i,u){var d=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var y=t.entanglements,v=t.expirationTimes,E=t.hiddenUpdates;for(a=d&~a;0<a;){var L=31-ge(a),X=1<<L;y[L]=0,v[L]=-1;var _=E[L];if(_!==null)for(E[L]=null,L=0;L<_.length;L++){var H=_[L];H!==null&&(H.lane&=-536870913)}a&=~X}n!==0&&pf(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(d&~e))}function pf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-ge(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194218}function gf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-ge(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function vf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Xm(t.type))}function Uy(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var Ma=Math.random().toString(36).slice(2),ae="__reactFiber$"+Ma,de="__reactProps$"+Ma,Nn="__reactContainer$"+Ma,Bu="__reactEvents$"+Ma,Hy="__reactListeners$"+Ma,Ly="__reactHandles$"+Ma,Sf="__reactResources$"+Ma,wl="__reactMarker$"+Ma;function qu(t){delete t[ae],delete t[de],delete t[Bu],delete t[Hy],delete t[Ly]}function nn(t){var e=t[ae];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Nn]||a[ae]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Rm(t);t!==null;){if(a=t[ae])return a;t=Rm(t)}return e}t=a,a=t.parentNode}return null}function Dn(t){if(t=t[ae]||t[Nn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function zl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function jn(t){var e=t[Sf];return e||(e=t[Sf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[wl]=!0}var xf=new Set,Ef={};function ln(t,e){Un(t,e),Un(t+"Capture",e)}function Un(t,e){for(Ef[t]=e,t=0;t<e.length;t++)xf.add(e[t])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Of={};function By(t){return Uu.call(Of,t)?!0:Uu.call(Af,t)?!1:Yy.test(t)?Of[t]=!0:(Af[t]=!0,!1)}function Ji(t,e,a){if(By(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Fi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ra(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function Te(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qy(t){var e=Tf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wi(t){t._valueTracker||(t._valueTracker=qy(t))}function Rf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Tf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xy=/[\n"\\]/g;function Re(t){return t.replace(Xy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Xu(t,e,a,n,i,u,d,y){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Te(e)):t.value!==""+Te(e)&&(t.value=""+Te(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Gu(t,d,Te(e)):a!=null?Gu(t,d,Te(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Te(y):t.removeAttribute("name")}function wf(t,e,a,n,i,u,d,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Te(a):"",e=e!=null?""+Te(e):a,y||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=y?t.checked:!!n,t.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d)}function Gu(t,e,a){e==="number"&&Pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hn(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Te(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zf(t,e,a){if(e!=null&&(e=""+Te(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Te(a):""}function _f(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(I(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Te(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Ln(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Gy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Gy.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Cf(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&Mf(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&Mf(t,u,e[u])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ky=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(t){return Vy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vu=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yn=null,Bn=null;function Nf(t){var e=Dn(t);if(e&&(t=e.stateNode)){var a=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(Xu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[de]||null;if(!i)throw Error(s(90));Xu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Rf(n)}break t;case"textarea":zf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Hn(t,!!a.multiple,e,!1)}}}var Zu=!1;function Df(t,e,a){if(Zu)return t(e,a);Zu=!0;try{var n=t(e);return n}finally{if(Zu=!1,(Yn!==null||Bn!==null)&&(Hr(),Yn&&(e=Yn,t=Bn,Bn=Yn=null,Nf(e),t)))for(e=0;e<t.length;e++)Nf(t[e])}}function _l(t,e){var a=t.stateNode;if(a===null)return null;var n=a[de]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var Ku=!1;if(ia)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{Ku=!1}var Ca=null,$u=null,tr=null;function jf(){if(tr)return tr;var t,e=$u,a=e.length,n,i="value"in Ca?Ca.value:Ca.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var d=a-t;for(n=1;n<=d&&e[a-n]===i[u-n];n++);return tr=i.slice(t,1<n?1-n:void 0)}function er(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ar(){return!0}function Uf(){return!1}function me(t){function e(a,n,i,u,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(a=t[y],this[y]=a?a(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ar:Uf,this.isPropagationStopped=Uf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),e}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=me(rn),Cl=ct({},rn,{view:0,detail:0}),Qy=me(Cl),Ju,Fu,Nl,lr=ct({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nl&&(Nl&&t.type==="mousemove"?(Ju=t.screenX-Nl.screenX,Fu=t.screenY-Nl.screenY):Fu=Ju=0,Nl=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),Hf=me(lr),Zy=ct({},lr,{dataTransfer:0}),Ky=me(Zy),$y=ct({},Cl,{relatedTarget:0}),Wu=me($y),Jy=ct({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=me(Jy),Wy=ct({},rn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Py=me(Wy),Iy=ct({},rn,{data:0}),Lf=me(Iy),tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ap[t])?!!e[t]:!1}function Pu(){return np}var lp=ct({},Cl,{key:function(t){if(t.key){var e=tp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=er(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ep[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?er(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?er(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ip=me(lp),rp=ct({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=me(rp),up=ct({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),cp=me(up),sp=ct({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=me(sp),fp=ct({},lr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=me(fp),mp=ct({},rn,{newState:0,oldState:0}),hp=me(mp),yp=[9,13,27,32],Iu=ia&&"CompositionEvent"in window,Dl=null;ia&&"documentMode"in document&&(Dl=document.documentMode);var pp=ia&&"TextEvent"in window&&!Dl,Bf=ia&&(!Iu||Dl&&8<Dl&&11>=Dl),qf=" ",Xf=!1;function Gf(t,e){switch(t){case"keyup":return yp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qn=!1;function gp(t,e){switch(t){case"compositionend":return kf(e);case"keypress":return e.which!==32?null:(Xf=!0,qf);case"textInput":return t=e.data,t===qf&&Xf?null:t;default:return null}}function vp(t,e){if(qn)return t==="compositionend"||!Iu&&Gf(t,e)?(t=jf(),tr=$u=Ca=null,qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bf&&e.locale!=="ko"?null:e.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bp[t.type]:e==="textarea"}function Qf(t,e,a,n){Yn?Bn?Bn.push(n):Bn=[n]:Yn=n,e=Xr(e,"onChange"),0<e.length&&(a=new nr("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var jl=null,Ul=null;function Sp(t){gm(t,0)}function ir(t){var e=zl(t);if(Rf(e))return t}function Zf(t,e){if(t==="change")return e}var Kf=!1;if(ia){var tc;if(ia){var ec="oninput"in document;if(!ec){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),ec=typeof $f.oninput=="function"}tc=ec}else tc=!1;Kf=tc&&(!document.documentMode||9<document.documentMode)}function Jf(){jl&&(jl.detachEvent("onpropertychange",Ff),Ul=jl=null)}function Ff(t){if(t.propertyName==="value"&&ir(Ul)){var e=[];Qf(e,Ul,t,Qu(t)),Df(Sp,e)}}function xp(t,e,a){t==="focusin"?(Jf(),jl=e,Ul=a,jl.attachEvent("onpropertychange",Ff)):t==="focusout"&&Jf()}function Ep(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ir(Ul)}function Ap(t,e){if(t==="click")return ir(e)}function Op(t,e){if(t==="input"||t==="change")return ir(e)}function Tp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:Tp;function Hl(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Uu.call(e,i)||!ve(t[i],e[i]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pf(t,e){var a=Wf(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wf(a)}}function If(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?If(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function td(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Pi(t.document)}return e}function ac(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rp(t,e){var a=td(e);e=t.focusedElem;var n=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&If(e.ownerDocument.documentElement,e)){if(n!==null&&ac(e)){if(t=n.start,a=n.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var i=e.textContent.length,u=Math.min(n.start,i);n=n.end===void 0?u:Math.min(n.end,i),!a.extend&&u>n&&(i=n,n=u,u=i),i=Pf(e,u);var d=Pf(e,n);i&&d&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==d.node||a.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),a.removeAllRanges(),u>n?(a.addRange(t),a.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var wp=ia&&"documentMode"in document&&11>=document.documentMode,Xn=null,nc=null,Ll=null,lc=!1;function ed(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lc||Xn==null||Xn!==Pi(n)||(n=Xn,"selectionStart"in n&&ac(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ll&&Hl(Ll,n)||(Ll=n,n=Xr(nc,"onSelect"),0<n.length&&(e=new nr("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Xn)))}function un(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Gn={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionrun:un("Transition","TransitionRun"),transitionstart:un("Transition","TransitionStart"),transitioncancel:un("Transition","TransitionCancel"),transitionend:un("Transition","TransitionEnd")},ic={},ad={};ia&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function cn(t){if(ic[t])return ic[t];if(!Gn[t])return t;var e=Gn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ad)return ic[t]=e[a];return t}var nd=cn("animationend"),ld=cn("animationiteration"),id=cn("animationstart"),zp=cn("transitionrun"),_p=cn("transitionstart"),Mp=cn("transitioncancel"),rd=cn("transitionend"),ud=new Map,cd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Le(t,e){ud.set(t,e),ln(e,[t])}var we=[],kn=0,rc=0;function rr(){for(var t=kn,e=rc=kn=0;e<t;){var a=we[e];we[e++]=null;var n=we[e];we[e++]=null;var i=we[e];we[e++]=null;var u=we[e];if(we[e++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}u!==0&&sd(a,i,u)}}function ur(t,e,a,n){we[kn++]=t,we[kn++]=e,we[kn++]=a,we[kn++]=n,rc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function uc(t,e,a,n){return ur(t,e,a,n),cr(t)}function Na(t,e){return ur(t,null,null,e),cr(t)}function sd(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;i&&e!==null&&t.tag===3&&(u=t.stateNode,i=31-ge(a),u=u.hiddenUpdates,t=u[i],t===null?u[i]=[e]:t.push(e),e.lane=a|536870912)}function cr(t){if(50<ci)throw ci=0,ms=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Vn={},od=new WeakMap;function ze(t,e){if(typeof t=="object"&&t!==null){var a=od.get(t);return a!==void 0?a:(e={value:t,source:e,stack:rt(e)},od.set(t,e),e)}return{value:t,source:e,stack:rt(e)}}var Qn=[],Zn=0,sr=null,or=0,_e=[],Me=0,sn=null,ua=1,ca="";function on(t,e){Qn[Zn++]=or,Qn[Zn++]=sr,sr=t,or=e}function fd(t,e,a){_e[Me++]=ua,_e[Me++]=ca,_e[Me++]=sn,sn=t;var n=ua;t=ca;var i=32-ge(n)-1;n&=~(1<<i),a+=1;var u=32-ge(e)+i;if(30<u){var d=i-i%5;u=(n&(1<<d)-1).toString(32),n>>=d,i-=d,ua=1<<32-ge(e)+i|a<<i|n,ca=u+t}else ua=1<<u|a<<i|n,ca=t}function cc(t){t.return!==null&&(on(t,1),fd(t,1,0))}function sc(t){for(;t===sr;)sr=Qn[--Zn],Qn[Zn]=null,or=Qn[--Zn],Qn[Zn]=null;for(;t===sn;)sn=_e[--Me],_e[Me]=null,ca=_e[--Me],_e[Me]=null,ua=_e[--Me],_e[Me]=null}var se=null,Pt=null,gt=!1,Ye=null,Qe=!1,oc=Error(s(519));function fn(t){var e=Error(s(418,""));throw ql(ze(e,t)),oc}function dd(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ae]=t,e[de]=n,a){case"dialog":ht("cancel",e),ht("close",e);break;case"iframe":case"object":case"embed":ht("load",e);break;case"video":case"audio":for(a=0;a<oi.length;a++)ht(oi[a],e);break;case"source":ht("error",e);break;case"img":case"image":case"link":ht("error",e),ht("load",e);break;case"details":ht("toggle",e);break;case"input":ht("invalid",e),wf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Wi(e);break;case"select":ht("invalid",e);break;case"textarea":ht("invalid",e),_f(e,n.value,n.defaultValue,n.children),Wi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||xm(e.textContent,a)?(n.popover!=null&&(ht("beforetoggle",e),ht("toggle",e)),n.onScroll!=null&&ht("scroll",e),n.onScrollEnd!=null&&ht("scrollend",e),n.onClick!=null&&(e.onclick=Gr),e=!0):e=!1,e||fn(t)}function md(t){for(se=t.return;se;)switch(se.tag){case 3:case 27:Qe=!0;return;case 5:case 13:Qe=!1;return;default:se=se.return}}function Yl(t){if(t!==se)return!1;if(!gt)return md(t),gt=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ms(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&Pt&&fn(t),md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Pt=qe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Pt=null}}else Pt=se?qe(t.stateNode.nextSibling):null;return!0}function Bl(){Pt=se=null,gt=!1}function ql(t){Ye===null?Ye=[t]:Ye.push(t)}var Xl=Error(s(460)),hd=Error(s(474)),fc={then:function(){}};function yd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fr(){}function pd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(fr,fr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Xl?Error(s(483)):t;default:if(typeof e.status=="string")e.then(fr,fr);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Xl?Error(s(483)):t}throw Gl=e,Xl}}var Gl=null;function gd(){if(Gl===null)throw Error(s(459));var t=Gl;return Gl=null,t}var Kn=null,kl=0;function dr(t){var e=kl;return kl+=1,Kn===null&&(Kn=[]),pd(Kn,t,e)}function Vl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mr(t,e){throw e.$$typeof===f?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vd(t){var e=t._init;return e(t._payload)}function bd(t){function e(O,x){if(t){var w=O.deletions;w===null?(O.deletions=[x],O.flags|=16):w.push(x)}}function a(O,x){if(!t)return null;for(;x!==null;)e(O,x),x=x.sibling;return null}function n(O){for(var x=new Map;O!==null;)O.key!==null?x.set(O.key,O):x.set(O.index,O),O=O.sibling;return x}function i(O,x){return O=Va(O,x),O.index=0,O.sibling=null,O}function u(O,x,w){return O.index=w,t?(w=O.alternate,w!==null?(w=w.index,w<x?(O.flags|=33554434,x):w):(O.flags|=33554434,x)):(O.flags|=1048576,x)}function d(O){return t&&O.alternate===null&&(O.flags|=33554434),O}function y(O,x,w,q){return x===null||x.tag!==6?(x=is(w,O.mode,q),x.return=O,x):(x=i(x,w),x.return=O,x)}function v(O,x,w,q){var K=w.type;return K===p?L(O,x,w.props.children,q,w.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===B&&vd(K)===x.type)?(x=i(x,w.props),Vl(x,w),x.return=O,x):(x=Cr(w.type,w.key,w.props,null,O.mode,q),Vl(x,w),x.return=O,x)}function E(O,x,w,q){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=rs(w,O.mode,q),x.return=O,x):(x=i(x,w.children||[]),x.return=O,x)}function L(O,x,w,q,K){return x===null||x.tag!==7?(x=xn(w,O.mode,q,K),x.return=O,x):(x=i(x,w),x.return=O,x)}function X(O,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=is(""+x,O.mode,w),x.return=O,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case m:return w=Cr(x.type,x.key,x.props,null,O.mode,w),Vl(w,x),w.return=O,w;case g:return x=rs(x,O.mode,w),x.return=O,x;case B:var q=x._init;return x=q(x._payload),X(O,x,w)}if(I(x)||lt(x))return x=xn(x,O.mode,w,null),x.return=O,x;if(typeof x.then=="function")return X(O,dr(x),w);if(x.$$typeof===U)return X(O,zr(O,x),w);mr(O,x)}return null}function _(O,x,w,q){var K=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return K!==null?null:y(O,x,""+w,q);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case m:return w.key===K?v(O,x,w,q):null;case g:return w.key===K?E(O,x,w,q):null;case B:return K=w._init,w=K(w._payload),_(O,x,w,q)}if(I(w)||lt(w))return K!==null?null:L(O,x,w,q,null);if(typeof w.then=="function")return _(O,x,dr(w),q);if(w.$$typeof===U)return _(O,x,zr(O,w),q);mr(O,w)}return null}function H(O,x,w,q,K){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return O=O.get(w)||null,y(x,O,""+q,K);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case m:return O=O.get(q.key===null?w:q.key)||null,v(x,O,q,K);case g:return O=O.get(q.key===null?w:q.key)||null,E(x,O,q,K);case B:var ft=q._init;return q=ft(q._payload),H(O,x,w,q,K)}if(I(q)||lt(q))return O=O.get(w)||null,L(x,O,q,K,null);if(typeof q.then=="function")return H(O,x,w,dr(q),K);if(q.$$typeof===U)return H(O,x,w,zr(x,q),K);mr(x,q)}return null}function J(O,x,w,q){for(var K=null,ft=null,P=x,tt=x=0,Wt=null;P!==null&&tt<w.length;tt++){P.index>tt?(Wt=P,P=null):Wt=P.sibling;var vt=_(O,P,w[tt],q);if(vt===null){P===null&&(P=Wt);break}t&&P&&vt.alternate===null&&e(O,P),x=u(vt,x,tt),ft===null?K=vt:ft.sibling=vt,ft=vt,P=Wt}if(tt===w.length)return a(O,P),gt&&on(O,tt),K;if(P===null){for(;tt<w.length;tt++)P=X(O,w[tt],q),P!==null&&(x=u(P,x,tt),ft===null?K=P:ft.sibling=P,ft=P);return gt&&on(O,tt),K}for(P=n(P);tt<w.length;tt++)Wt=H(P,O,tt,w[tt],q),Wt!==null&&(t&&Wt.alternate!==null&&P.delete(Wt.key===null?tt:Wt.key),x=u(Wt,x,tt),ft===null?K=Wt:ft.sibling=Wt,ft=Wt);return t&&P.forEach(function(Wa){return e(O,Wa)}),gt&&on(O,tt),K}function it(O,x,w,q){if(w==null)throw Error(s(151));for(var K=null,ft=null,P=x,tt=x=0,Wt=null,vt=w.next();P!==null&&!vt.done;tt++,vt=w.next()){P.index>tt?(Wt=P,P=null):Wt=P.sibling;var Wa=_(O,P,vt.value,q);if(Wa===null){P===null&&(P=Wt);break}t&&P&&Wa.alternate===null&&e(O,P),x=u(Wa,x,tt),ft===null?K=Wa:ft.sibling=Wa,ft=Wa,P=Wt}if(vt.done)return a(O,P),gt&&on(O,tt),K;if(P===null){for(;!vt.done;tt++,vt=w.next())vt=X(O,vt.value,q),vt!==null&&(x=u(vt,x,tt),ft===null?K=vt:ft.sibling=vt,ft=vt);return gt&&on(O,tt),K}for(P=n(P);!vt.done;tt++,vt=w.next())vt=H(P,O,tt,vt.value,q),vt!==null&&(t&&vt.alternate!==null&&P.delete(vt.key===null?tt:vt.key),x=u(vt,x,tt),ft===null?K=vt:ft.sibling=vt,ft=vt);return t&&P.forEach(function(Vg){return e(O,Vg)}),gt&&on(O,tt),K}function Lt(O,x,w,q){if(typeof w=="object"&&w!==null&&w.type===p&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case m:t:{for(var K=w.key;x!==null;){if(x.key===K){if(K=w.type,K===p){if(x.tag===7){a(O,x.sibling),q=i(x,w.props.children),q.return=O,O=q;break t}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===B&&vd(K)===x.type){a(O,x.sibling),q=i(x,w.props),Vl(q,w),q.return=O,O=q;break t}a(O,x);break}else e(O,x);x=x.sibling}w.type===p?(q=xn(w.props.children,O.mode,q,w.key),q.return=O,O=q):(q=Cr(w.type,w.key,w.props,null,O.mode,q),Vl(q,w),q.return=O,O=q)}return d(O);case g:t:{for(K=w.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(O,x.sibling),q=i(x,w.children||[]),q.return=O,O=q;break t}else{a(O,x);break}else e(O,x);x=x.sibling}q=rs(w,O.mode,q),q.return=O,O=q}return d(O);case B:return K=w._init,w=K(w._payload),Lt(O,x,w,q)}if(I(w))return J(O,x,w,q);if(lt(w)){if(K=lt(w),typeof K!="function")throw Error(s(150));return w=K.call(w),it(O,x,w,q)}if(typeof w.then=="function")return Lt(O,x,dr(w),q);if(w.$$typeof===U)return Lt(O,x,zr(O,w),q);mr(O,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(O,x.sibling),q=i(x,w),q.return=O,O=q):(a(O,x),q=is(w,O.mode,q),q.return=O,O=q),d(O)):a(O,x)}return function(O,x,w,q){try{kl=0;var K=Lt(O,x,w,q);return Kn=null,K}catch(P){if(P===Xl)throw P;var ft=je(29,P,null,O.mode);return ft.lanes=q,ft.return=O,ft}finally{}}}var dn=bd(!0),Sd=bd(!1),$n=xt(null),hr=xt(0);function xd(t,e){t=ba,Ct(hr,t),Ct($n,e),ba=t|e.baseLanes}function dc(){Ct(hr,ba),Ct($n,$n.current)}function mc(){ba=hr.current,Bt($n),Bt(hr)}var Ce=xt(null),Ze=null;function Da(t){var e=t.alternate;Ct(Qt,Qt.current&1),Ct(Ce,t),Ze===null&&(e===null||$n.current!==null||e.memoizedState!==null)&&(Ze=t)}function Ed(t){if(t.tag===22){if(Ct(Qt,Qt.current),Ct(Ce,t),Ze===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ze=t)}}else ja()}function ja(){Ct(Qt,Qt.current),Ct(Ce,Ce.current)}function sa(t){Bt(Ce),Ze===t&&(Ze=null),Bt(Qt)}var Qt=xt(0);function yr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Np=l.unstable_scheduleCallback,Dp=l.unstable_NormalPriority,Zt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hc(){return{controller:new Cp,data:new Map,refCount:0}}function Ql(t){t.refCount--,t.refCount===0&&Np(Dp,function(){t.controller.abort()})}var Zl=null,yc=0,Jn=0,Fn=null;function jp(t,e){if(Zl===null){var a=Zl=[];yc=0,Jn=xs(),Fn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return yc++,e.then(Ad,Ad),e}function Ad(){if(--yc===0&&Zl!==null){Fn!==null&&(Fn.status="fulfilled");var t=Zl;Zl=null,Jn=0,Fn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Up(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Od=$.S;$.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&jp(t,e),Od!==null&&Od(t,e)};var mn=xt(null);function pc(){var t=mn.current;return t!==null?t:zt.pooledCache}function pr(t,e){e===null?Ct(mn,mn.current):Ct(mn,e.pool)}function Td(){var t=pc();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ua=0,ot=null,Ot=null,qt=null,gr=!1,Wn=!1,hn=!1,vr=0,Kl=0,Pn=null,Hp=0;function Yt(){throw Error(s(321))}function gc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ve(t[a],e[a]))return!1;return!0}function vc(t,e,a,n,i,u){return Ua=u,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$.H=t===null||t.memoizedState===null?yn:Ha,hn=!1,u=a(n,i),hn=!1,Wn&&(u=wd(e,a,n,i)),Rd(t),u}function Rd(t){$.H=Ke;var e=Ot!==null&&Ot.next!==null;if(Ua=0,qt=Ot=ot=null,gr=!1,Kl=0,Pn=null,e)throw Error(s(300));t===null||Jt||(t=t.dependencies,t!==null&&wr(t)&&(Jt=!0))}function wd(t,e,a,n){ot=t;var i=0;do{if(Wn&&(Pn=null),Kl=0,Wn=!1,25<=i)throw Error(s(301));if(i+=1,qt=Ot=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}$.H=pn,u=e(a,n)}while(Wn);return u}function Lp(){var t=$.H,e=t.useState()[0];return e=typeof e.then=="function"?$l(e):e,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ot.flags|=1024),e}function bc(){var t=vr!==0;return vr=0,t}function Sc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function xc(t){if(gr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gr=!1}Ua=0,qt=Ot=ot=null,Wn=!1,Kl=vr=0,Pn=null}function he(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ot.memoizedState=qt=t:qt=qt.next=t,qt}function Xt(){if(Ot===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=qt===null?ot.memoizedState:qt.next;if(e!==null)qt=e,Ot=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},qt===null?ot.memoizedState=qt=t:qt=qt.next=t}return qt}var br;br=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function $l(t){var e=Kl;return Kl+=1,Pn===null&&(Pn=[]),t=pd(Pn,t,e),e=ot,(qt===null?e.memoizedState:qt.next)===null&&(e=e.alternate,$.H=e===null||e.memoizedState===null?yn:Ha),t}function Sr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $l(t);if(t.$$typeof===U)return ne(t)}throw Error(s(438,String(t)))}function Ec(t){var e=null,a=ot.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=ot.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=br(),ot.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=F;return e.index++,a}function oa(t,e){return typeof e=="function"?e(t):e}function xr(t){var e=Xt();return Ac(e,Ot,t)}function Ac(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var d=i.next;i.next=u.next,u.next=d}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var y=d=null,v=null,E=e,L=!1;do{var X=E.lane&-536870913;if(X!==E.lane?(pt&X)===X:(Ua&X)===X){var _=E.revertLane;if(_===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),X===Jn&&(L=!0);else if((Ua&_)===_){E=E.next,_===Jn&&(L=!0);continue}else X={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(y=v=X,d=u):v=v.next=X,ot.lanes|=_,Qa|=_;X=E.action,hn&&a(u,X),u=E.hasEagerState?E.eagerState:a(u,X)}else _={lane:X,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(y=v=_,d=u):v=v.next=_,ot.lanes|=X,Qa|=X;E=E.next}while(E!==null&&E!==e);if(v===null?d=u:v.next=y,!ve(u,t.memoizedState)&&(Jt=!0,L&&(a=Fn,a!==null)))throw a;t.memoizedState=u,t.baseState=d,t.baseQueue=v,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Oc(t){var e=Xt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do u=t(u,d.action),d=d.next;while(d!==i);ve(u,e.memoizedState)||(Jt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function zd(t,e,a){var n=ot,i=Xt(),u=gt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=e();var d=!ve((Ot||i).memoizedState,a);if(d&&(i.memoizedState=a,Jt=!0),i=i.queue,wc(Cd.bind(null,n,i,t),[t]),i.getSnapshot!==e||d||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,In(9,Md.bind(null,n,i,a,e),{destroy:void 0},null),zt===null)throw Error(s(349));u||(Ua&60)!==0||_d(n,e,a)}return a}function _d(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ot.updateQueue,e===null?(e=br(),ot.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Md(t,e,a,n){e.value=a,e.getSnapshot=n,Nd(e)&&Dd(t)}function Cd(t,e,a){return a(function(){Nd(e)&&Dd(t)})}function Nd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ve(t,a)}catch{return!0}}function Dd(t){var e=Na(t,2);e!==null&&oe(e,t,2)}function Tc(t){var e=he();if(typeof t=="function"){var a=t;if(t=a(),hn){_a(!0);try{a()}finally{_a(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e}function jd(t,e,a,n){return t.baseState=a,Ac(t,Ot,typeof n=="function"?n:oa)}function Yp(t,e,a,n,i){if(Or(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};$.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,Ud(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Ud(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=$.T,d={};$.T=d;try{var y=a(i,n),v=$.S;v!==null&&v(d,y),Hd(t,e,y)}catch(E){Rc(t,e,E)}finally{$.T=u}}else try{u=a(i,n),Hd(t,e,u)}catch(E){Rc(t,e,E)}}function Hd(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Ld(t,e,n)},function(n){return Rc(t,e,n)}):Ld(t,e,a)}function Ld(t,e,a){e.status="fulfilled",e.value=a,Yd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ud(t,a)))}function Rc(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Yd(e),e=e.next;while(e!==n)}t.action=null}function Yd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Bd(t,e){return e}function qd(t,e){if(gt){var a=zt.formState;if(a!==null){t:{var n=ot;if(gt){if(Pt){e:{for(var i=Pt,u=Qe;i.nodeType!==8;){if(!u){i=null;break e}if(i=qe(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Pt=qe(i.nextSibling),n=i.data==="F!";break t}}fn(n)}n=!1}n&&(e=a[0])}}return a=he(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:e},a.queue=n,a=l0.bind(null,ot,n),n.dispatch=a,n=Tc(!1),u=Nc.bind(null,ot,!1,n.queue),n=he(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Yp.bind(null,ot,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Xd(t){var e=Xt();return Gd(e,Ot,t)}function Gd(t,e,a){e=Ac(t,e,Bd)[0],t=xr(oa)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?$l(e):e;var n=Xt(),i=n.queue,u=i.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,In(9,Bp.bind(null,i,a),{destroy:void 0},null)),[e,u,t]}function Bp(t,e){t.action=e}function kd(t){var e=Xt(),a=Ot;if(a!==null)return Gd(e,a,t);Xt(),e=e.memoizedState,a=Xt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function In(t,e,a,n){return t={tag:t,create:e,inst:a,deps:n,next:null},e=ot.updateQueue,e===null&&(e=br(),ot.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Vd(){return Xt().memoizedState}function Er(t,e,a,n){var i=he();ot.flags|=t,i.memoizedState=In(1|e,a,{destroy:void 0},n===void 0?null:n)}function Ar(t,e,a,n){var i=Xt();n=n===void 0?null:n;var u=i.memoizedState.inst;Ot!==null&&n!==null&&gc(n,Ot.memoizedState.deps)?i.memoizedState=In(e,a,u,n):(ot.flags|=t,i.memoizedState=In(1|e,a,u,n))}function Qd(t,e){Er(8390656,8,t,e)}function wc(t,e){Ar(2048,8,t,e)}function Zd(t,e){return Ar(4,2,t,e)}function Kd(t,e){return Ar(4,4,t,e)}function $d(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jd(t,e,a){a=a!=null?a.concat([t]):null,Ar(4,4,$d.bind(null,e,t),a)}function zc(){}function Fd(t,e){var a=Xt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&gc(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Wd(t,e){var a=Xt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&gc(e,n[1]))return n[0];if(n=t(),hn){_a(!0);try{t()}finally{_a(!1)}}return a.memoizedState=[n,e],n}function _c(t,e,a){return a===void 0||(Ua&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=I0(),ot.lanes|=t,Qa|=t,a)}function Pd(t,e,a,n){return ve(a,e)?a:$n.current!==null?(t=_c(t,a,n),ve(t,e)||(Jt=!0),t):(Ua&42)===0?(Jt=!0,t.memoizedState=a):(t=I0(),ot.lanes|=t,Qa|=t,e)}function Id(t,e,a,n,i){var u=Z.p;Z.p=u!==0&&8>u?u:8;var d=$.T,y={};$.T=y,Nc(t,!1,e,a);try{var v=i(),E=$.S;if(E!==null&&E(y,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var L=Up(v,n);Jl(t,e,L,Ee(t))}else Jl(t,e,n,Ee(t))}catch(X){Jl(t,e,{then:function(){},status:"rejected",reason:X},Ee())}finally{Z.p=u,$.T=d}}function qp(){}function Mc(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=t0(t).queue;Id(t,i,e,yt,a===null?qp:function(){return e0(t),a(n)})}function t0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:yt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function e0(t){var e=t0(t).next.queue;Jl(t,e,{},Ee())}function Cc(){return ne(yi)}function a0(){return Xt().memoizedState}function n0(){return Xt().memoizedState}function Xp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ee();t=Ba(a);var n=qa(e,t,a);n!==null&&(oe(n,e,a),Pl(n,e,a)),e={cache:hc()},t.payload=e;return}e=e.return}}function Gp(t,e,a){var n=Ee();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Or(t)?i0(e,a):(a=uc(t,e,a,n),a!==null&&(oe(a,t,n),r0(a,e,n)))}function l0(t,e,a){var n=Ee();Jl(t,e,a,n)}function Jl(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Or(t))i0(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var d=e.lastRenderedState,y=u(d,a);if(i.hasEagerState=!0,i.eagerState=y,ve(y,d))return ur(t,e,i,0),zt===null&&rr(),!1}catch{}finally{}if(a=uc(t,e,i,n),a!==null)return oe(a,t,n),r0(a,e,n),!0}return!1}function Nc(t,e,a,n){if(n={lane:2,revertLane:xs(),action:n,hasEagerState:!1,eagerState:null,next:null},Or(t)){if(e)throw Error(s(479))}else e=uc(t,a,n,2),e!==null&&oe(e,t,2)}function Or(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function i0(t,e){Wn=gr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function r0(t,e,a){if((a&4194176)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,gf(t,a)}}var Ke={readContext:ne,use:Sr,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useLayoutEffect:Yt,useInsertionEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useSyncExternalStore:Yt,useId:Yt};Ke.useCacheRefresh=Yt,Ke.useMemoCache=Yt,Ke.useHostTransitionStatus=Yt,Ke.useFormState=Yt,Ke.useActionState=Yt,Ke.useOptimistic=Yt;var yn={readContext:ne,use:Sr,useCallback:function(t,e){return he().memoizedState=[t,e===void 0?null:e],t},useContext:ne,useEffect:Qd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Er(4194308,4,$d.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Er(4194308,4,t,e)},useInsertionEffect:function(t,e){Er(4,2,t,e)},useMemo:function(t,e){var a=he();e=e===void 0?null:e;var n=t();if(hn){_a(!0);try{t()}finally{_a(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=he();if(a!==void 0){var i=a(e);if(hn){_a(!0);try{a(e)}finally{_a(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=Gp.bind(null,ot,t),[n.memoizedState,t]},useRef:function(t){var e=he();return t={current:t},e.memoizedState=t},useState:function(t){t=Tc(t);var e=t.queue,a=l0.bind(null,ot,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:zc,useDeferredValue:function(t,e){var a=he();return _c(a,t,e)},useTransition:function(){var t=Tc(!1);return t=Id.bind(null,ot,t.queue,!0,!1),he().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=ot,i=he();if(gt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),zt===null)throw Error(s(349));(pt&60)!==0||_d(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,Qd(Cd.bind(null,n,u,t),[t]),n.flags|=2048,In(9,Md.bind(null,n,u,a,e),{destroy:void 0},null),a},useId:function(){var t=he(),e=zt.identifierPrefix;if(gt){var a=ca,n=ua;a=(n&~(1<<32-ge(n)-1)).toString(32)+a,e=":"+e+"R"+a,a=vr++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=Hp++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return he().memoizedState=Xp.bind(null,ot)}};yn.useMemoCache=Ec,yn.useHostTransitionStatus=Cc,yn.useFormState=qd,yn.useActionState=qd,yn.useOptimistic=function(t){var e=he();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Nc.bind(null,ot,!0,a),a.dispatch=e,[t,e]};var Ha={readContext:ne,use:Sr,useCallback:Fd,useContext:ne,useEffect:wc,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:Kd,useMemo:Wd,useReducer:xr,useRef:Vd,useState:function(){return xr(oa)},useDebugValue:zc,useDeferredValue:function(t,e){var a=Xt();return Pd(a,Ot.memoizedState,t,e)},useTransition:function(){var t=xr(oa)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:$l(t),e]},useSyncExternalStore:zd,useId:a0};Ha.useCacheRefresh=n0,Ha.useMemoCache=Ec,Ha.useHostTransitionStatus=Cc,Ha.useFormState=Xd,Ha.useActionState=Xd,Ha.useOptimistic=function(t,e){var a=Xt();return jd(a,Ot,t,e)};var pn={readContext:ne,use:Sr,useCallback:Fd,useContext:ne,useEffect:wc,useImperativeHandle:Jd,useInsertionEffect:Zd,useLayoutEffect:Kd,useMemo:Wd,useReducer:Oc,useRef:Vd,useState:function(){return Oc(oa)},useDebugValue:zc,useDeferredValue:function(t,e){var a=Xt();return Ot===null?_c(a,t,e):Pd(a,Ot.memoizedState,t,e)},useTransition:function(){var t=Oc(oa)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:$l(t),e]},useSyncExternalStore:zd,useId:a0};pn.useCacheRefresh=n0,pn.useMemoCache=Ec,pn.useHostTransitionStatus=Cc,pn.useFormState=kd,pn.useActionState=kd,pn.useOptimistic=function(t,e){var a=Xt();return Ot!==null?jd(a,Ot,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Dc(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:ct({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jc={isMounted:function(t){return(t=t._reactInternals)?nt(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Ee(),i=Ba(n);i.payload=e,a!=null&&(i.callback=a),e=qa(t,i,n),e!==null&&(oe(e,t,n),Pl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Ee(),i=Ba(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=qa(t,i,n),e!==null&&(oe(e,t,n),Pl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ee(),n=Ba(a);n.tag=2,e!=null&&(n.callback=e),e=qa(t,n,a),e!==null&&(oe(e,t,a),Pl(e,t,a))}};function u0(t,e,a,n,i,u,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,d):e.prototype&&e.prototype.isPureReactComponent?!Hl(a,n)||!Hl(i,u):!0}function c0(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function gn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=ct({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var Tr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function s0(t){Tr(t)}function o0(t){console.error(t)}function f0(t){Tr(t)}function Rr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function d0(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Uc(t,e,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Rr(t,e)},a}function m0(t){return t=Ba(t),t.tag=3,t}function h0(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){d0(e,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){d0(e,a,n),typeof i!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function kp(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Wl(e,a,i,!0),a=Ce.current,a!==null){switch(a.tag){case 13:return Ze===null?ps():a.alternate===null&&Ht===0&&(Ht=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===fc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),vs(t,n,i)),!1;case 22:return a.flags|=65536,n===fc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),vs(t,n,i)),!1}throw Error(s(435,a.tag))}return vs(t,n,i),ps(),!1}if(gt)return e=Ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==oc&&(t=Error(s(422),{cause:n}),ql(ze(t,a)))):(n!==oc&&(e=Error(s(423),{cause:n}),ql(ze(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=ze(n,a),i=Uc(t.stateNode,n,i),Fc(t,i),Ht!==4&&(Ht=2)),!1;var u=Error(s(520),{cause:n});if(u=ze(u,a),ri===null?ri=[u]:ri.push(u),Ht!==4&&(Ht=2),e===null)return!0;n=ze(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Uc(a.stateNode,n,t),Fc(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Za===null||!Za.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=m0(i),h0(i,t,a,n),Fc(a,i),!1}a=a.return}while(a!==null);return!1}var y0=Error(s(461)),Jt=!1;function It(t,e,a,n){e.child=t===null?Sd(e,null,a,n):dn(e,t.child,a,n)}function p0(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var d={};for(var y in n)y!=="ref"&&(d[y]=n[y])}else d=n;return bn(e),n=vc(t,e,a,d,u,i),y=bc(),t!==null&&!Jt?(Sc(t,e,i),fa(t,e,i)):(gt&&y&&cc(e),e.flags|=1,It(t,e,n,i),e.child)}function g0(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!ls(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,v0(t,e,u,n,i)):(t=Cr(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Vc(t,i)){var d=u.memoizedProps;if(a=a.compare,a=a!==null?a:Hl,a(d,n)&&t.ref===e.ref)return fa(t,e,i)}return e.flags|=1,t=Va(u,n),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(Hl(u,n)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=n=u,Vc(t,i))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,fa(t,e,i)}return Hc(t,e,a,n,i)}function b0(t,e,a){var n=e.pendingProps,i=n.children,u=(e.stateNode._pendingVisibility&2)!==0,d=t!==null?t.memoizedState:null;if(Fl(t,e),n.mode==="hidden"||u){if((e.flags&128)!==0){if(n=d!==null?d.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return S0(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&pr(e,d!==null?d.cachePool:null),d!==null?xd(e,d):dc(),Ed(e);else return e.lanes=e.childLanes=536870912,S0(t,e,d!==null?d.baseLanes|a:a,a)}else d!==null?(pr(e,d.cachePool),xd(e,d),ja(),e.memoizedState=null):(t!==null&&pr(e,null),dc(),ja());return It(t,e,i,a),e.child}function S0(t,e,a,n){var i=pc();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&pr(e,null),dc(),Ed(e),t!==null&&Wl(t,e,n,!0),null}function Fl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function Hc(t,e,a,n,i){return bn(e),a=vc(t,e,a,n,void 0,i),n=bc(),t!==null&&!Jt?(Sc(t,e,i),fa(t,e,i)):(gt&&n&&cc(e),e.flags|=1,It(t,e,a,i),e.child)}function x0(t,e,a,n,i,u){return bn(e),e.updateQueue=null,a=wd(e,n,a,i),Rd(t),n=bc(),t!==null&&!Jt?(Sc(t,e,u),fa(t,e,u)):(gt&&n&&cc(e),e.flags|=1,It(t,e,a,u),e.child)}function E0(t,e,a,n,i){if(bn(e),e.stateNode===null){var u=Vn,d=a.contextType;typeof d=="object"&&d!==null&&(u=ne(d)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},$c(e),d=a.contextType,u.context=typeof d=="object"&&d!==null?ne(d):Vn,u.state=e.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Dc(e,a,d,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&jc.enqueueReplaceState(u,u.state,null),ti(e,n,u,i),Il(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var y=e.memoizedProps,v=gn(a,y);u.props=v;var E=u.context,L=a.contextType;d=Vn,typeof L=="object"&&L!==null&&(d=ne(L));var X=a.getDerivedStateFromProps;L=typeof X=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||E!==d)&&c0(e,u,n,d),Ya=!1;var _=e.memoizedState;u.state=_,ti(e,n,u,i),Il(),E=e.memoizedState,y||_!==E||Ya?(typeof X=="function"&&(Dc(e,a,X,n),E=e.memoizedState),(v=Ya||u0(e,a,v,n,_,E,d))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=E),u.props=n,u.state=E,u.context=d,n=v):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Jc(t,e),d=e.memoizedProps,L=gn(a,d),u.props=L,X=e.pendingProps,_=u.context,E=a.contextType,v=Vn,typeof E=="object"&&E!==null&&(v=ne(E)),y=a.getDerivedStateFromProps,(E=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==X||_!==v)&&c0(e,u,n,v),Ya=!1,_=e.memoizedState,u.state=_,ti(e,n,u,i),Il();var H=e.memoizedState;d!==X||_!==H||Ya||t!==null&&t.dependencies!==null&&wr(t.dependencies)?(typeof y=="function"&&(Dc(e,a,y,n),H=e.memoizedState),(L=Ya||u0(e,a,L,n,_,H,v)||t!==null&&t.dependencies!==null&&wr(t.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,H,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,H,v)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=H),u.props=n,u.state=H,u.context=v,n=L):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,Fl(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=dn(e,t.child,null,i),e.child=dn(e,null,a,i)):It(t,e,a,i),e.memoizedState=u.state,t=e.child):t=fa(t,e,i),t}function A0(t,e,a,n){return Bl(),e.flags|=256,It(t,e,a,n),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:Td()}}function Bc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ue),t}function O0(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,d;if((d=u)||(d=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),d&&(i=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(gt){if(i?Da(e):ja(),gt){var y=Pt,v;if(v=y){t:{for(v=y,y=Qe;v.nodeType!==8;){if(!y){y=null;break t}if(v=qe(v.nextSibling),v===null){y=null;break t}}y=v}y!==null?(e.memoizedState={dehydrated:y,treeContext:sn!==null?{id:ua,overflow:ca}:null,retryLane:536870912},v=je(18,null,null,0),v.stateNode=y,v.return=e,e.child=v,se=e,Pt=null,v=!0):v=!1}v||fn(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;sa(e)}return y=n.children,n=n.fallback,i?(ja(),i=e.mode,y=Xc({mode:"hidden",children:y},i),n=xn(n,i,a,null),y.return=e,n.return=e,y.sibling=n,e.child=y,i=e.child,i.memoizedState=Yc(a),i.childLanes=Bc(t,d,a),e.memoizedState=Lc,n):(Da(e),qc(e,y))}if(v=t.memoizedState,v!==null&&(y=v.dehydrated,y!==null)){if(u)e.flags&256?(Da(e),e.flags&=-257,e=Gc(t,e,a)):e.memoizedState!==null?(ja(),e.child=t.child,e.flags|=128,e=null):(ja(),i=n.fallback,y=e.mode,n=Xc({mode:"visible",children:n.children},y),i=xn(i,y,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,dn(e,t.child,null,a),n=e.child,n.memoizedState=Yc(a),n.childLanes=Bc(t,d,a),e.memoizedState=Lc,e=i);else if(Da(e),y.data==="$!"){if(d=y.nextSibling&&y.nextSibling.dataset,d)var E=d.dgst;d=E,n=Error(s(419)),n.stack="",n.digest=d,ql({value:n,source:null,stack:null}),e=Gc(t,e,a)}else if(Jt||Wl(t,e,a,!1),d=(a&t.childLanes)!==0,Jt||d){if(d=zt,d!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane)throw v.retryLane=n,Na(t,n),oe(d,t,n),y0}y.data==="$?"||ps(),e=Gc(t,e,a)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=lg.bind(null,t),y._reactRetry=e,e=null):(t=v.treeContext,Pt=qe(y.nextSibling),se=e,gt=!0,Ye=null,Qe=!1,t!==null&&(_e[Me++]=ua,_e[Me++]=ca,_e[Me++]=sn,ua=t.id,ca=t.overflow,sn=e),e=qc(e,n.children),e.flags|=4096);return e}return i?(ja(),i=n.fallback,y=e.mode,v=t.child,E=v.sibling,n=Va(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&31457280,E!==null?i=Va(E,i):(i=xn(i,y,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,y=t.child.memoizedState,y===null?y=Yc(a):(v=y.cachePool,v!==null?(E=Zt._currentValue,v=v.parent!==E?{parent:E,pool:E}:v):v=Td(),y={baseLanes:y.baseLanes|a,cachePool:v}),i.memoizedState=y,i.childLanes=Bc(t,d,a),e.memoizedState=Lc,n):(Da(e),a=t.child,t=a.sibling,a=Va(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=a,e.memoizedState=null,a)}function qc(t,e){return e=Xc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xc(t,e){return F0(t,e,0,null)}function Gc(t,e,a){return dn(e,t.child,null,a),t=qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T0(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Zc(t.return,e,a)}function kc(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function R0(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(It(t,e,n.children,a),n=Qt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,e);else if(t.tag===19)T0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(Ct(Qt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&yr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),kc(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}kc(e,!0,a,null,u);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Qa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Wl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=Va(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Va(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Vc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&wr(t)))}function Vp(t,e,a){switch(e.tag){case 3:ki(e,e.stateNode.containerInfo),La(e,Zt,t.memoizedState.cache),Bl();break;case 27:case 5:ju(e);break;case 4:ki(e,e.stateNode.containerInfo);break;case 10:La(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Da(e),e.flags|=128,null):(a&e.child.childLanes)!==0?O0(t,e,a):(Da(e),t=fa(t,e,a),t!==null?t.sibling:null);Da(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Wl(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return R0(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ct(Qt,Qt.current),n)break;return null;case 22:case 23:return e.lanes=0,b0(t,e,a);case 24:La(e,Zt,t.memoizedState.cache)}return fa(t,e,a)}function w0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!Vc(t,a)&&(e.flags&128)===0)return Jt=!1,Vp(t,e,a);Jt=(t.flags&131072)!==0}else Jt=!1,gt&&(e.flags&1048576)!==0&&fd(e,or,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")ls(n)?(t=gn(n,t),e.tag=1,e=E0(null,e,n,t,a)):(e.tag=0,e=Hc(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===z){e.tag=11,e=p0(null,e,n,t,a);break t}else if(i===C){e.tag=14,e=g0(null,e,n,t,a);break t}}throw e=Vt(n)||n,Error(s(306,e,""))}}return e;case 0:return Hc(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=gn(n,e.pendingProps),E0(t,e,n,i,a);case 3:t:{if(ki(e,e.stateNode.containerInfo),t===null)throw Error(s(387));var u=e.pendingProps;i=e.memoizedState,n=i.element,Jc(t,e),ti(e,u,null,a);var d=e.memoizedState;if(u=d.cache,La(e,Zt,u),u!==i.cache&&Kc(e,[Zt],a,!0),Il(),u=d.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=A0(t,e,u,a);break t}else if(u!==n){n=ze(Error(s(424)),e),ql(n),e=A0(t,e,u,a);break t}else for(Pt=qe(e.stateNode.containerInfo.firstChild),se=e,gt=!0,Ye=null,Qe=!0,a=Sd(e,null,u,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bl(),u===n){e=fa(t,e,a);break t}It(t,e,u,a)}e=e.child}return e;case 26:return Fl(t,e),t===null?(a=Mm(e.type,null,e.pendingProps,null))?e.memoizedState=a:gt||(a=e.type,t=e.pendingProps,n=kr(za.current).createElement(a),n[ae]=e,n[de]=t,te(n,a,t),$t(n),e.stateNode=n):e.memoizedState=Mm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ju(e),t===null&&gt&&(n=e.stateNode=wm(e.type,e.pendingProps,za.current),se=e,Qe=!0,Pt=qe(n.firstChild)),n=e.pendingProps.children,t!==null||gt?It(t,e,n,a):e.child=dn(e,null,n,a),Fl(t,e),e.child;case 5:return t===null&&gt&&((i=n=Pt)&&(n=Sg(n,e.type,e.pendingProps,Qe),n!==null?(e.stateNode=n,se=e,Pt=qe(n.firstChild),Qe=!1,i=!0):i=!1),i||fn(e)),ju(e),i=e.type,u=e.pendingProps,d=t!==null?t.memoizedProps:null,n=u.children,Ms(i,u)?n=null:d!==null&&Ms(i,d)&&(e.flags|=32),e.memoizedState!==null&&(i=vc(t,e,Lp,null,null,a),yi._currentValue=i),Fl(t,e),It(t,e,n,a),e.child;case 6:return t===null&&gt&&((t=a=Pt)&&(a=xg(a,e.pendingProps,Qe),a!==null?(e.stateNode=a,se=e,Pt=null,t=!0):t=!1),t||fn(e)),null;case 13:return O0(t,e,a);case 4:return ki(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=dn(e,null,n,a):It(t,e,n,a),e.child;case 11:return p0(t,e,e.type,e.pendingProps,a);case 7:return It(t,e,e.pendingProps,a),e.child;case 8:return It(t,e,e.pendingProps.children,a),e.child;case 12:return It(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,La(e,e.type,n.value),It(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,bn(e),i=ne(i),n=n(i),e.flags|=1,It(t,e,n,a),e.child;case 14:return g0(t,e,e.type,e.pendingProps,a);case 15:return v0(t,e,e.type,e.pendingProps,a);case 19:return R0(t,e,a);case 22:return b0(t,e,a);case 24:return bn(e),n=ne(Zt),t===null?(i=pc(),i===null&&(i=zt,u=hc(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},$c(e),La(e,Zt,i)):((t.lanes&a)!==0&&(Jc(t,e),ti(e,null,null,a),Il()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),La(e,Zt,n)):(n=u.cache,La(e,Zt,n),n!==i.cache&&Kc(e,[Zt],a,!0))),It(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}var Qc=xt(null),vn=null,da=null;function La(t,e,a){Ct(Qc,e._currentValue),e._currentValue=a}function ma(t){t._currentValue=Qc.current,Bt(Qc)}function Zc(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Kc(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var d=i.child;u=u.firstContext;t:for(;u!==null;){var y=u;u=i;for(var v=0;v<e.length;v++)if(y.context===e[v]){u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),Zc(u.return,a,t),n||(d=null);break t}u=y.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(s(341));d.lanes|=a,u=d.alternate,u!==null&&(u.lanes|=a),Zc(d,a,t),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===t){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Wl(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var y=i.type;ve(i.pendingProps.value,d.value)||(t!==null?t.push(y):t=[y])}}else if(i===Gi.current){if(d=i.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(yi):t=[yi])}i=i.return}t!==null&&Kc(e,t,a,n),e.flags|=262144}function wr(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bn(t){vn=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ne(t){return z0(vn,t)}function zr(t,e){return vn===null&&bn(t),z0(t,e)}function z0(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},da===null){if(t===null)throw Error(s(308));da=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else da=da.next=e;return a}var Ya=!1;function $c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function qa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Dt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=cr(t),sd(t,null,a),e}return ur(t,n,e,a),cr(t)}function Pl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,gf(t,a)}}function Fc(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=d:u=u.next=d,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Wc=!1;function Il(){if(Wc){var t=Fn;if(t!==null)throw t}}function ti(t,e,a,n){Wc=!1;var i=t.updateQueue;Ya=!1;var u=i.firstBaseUpdate,d=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var v=y,E=v.next;v.next=null,d===null?u=E:d.next=E,d=v;var L=t.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==d&&(y===null?L.firstBaseUpdate=E:y.next=E,L.lastBaseUpdate=v))}if(u!==null){var X=i.baseState;d=0,L=E=v=null,y=u;do{var _=y.lane&-536870913,H=_!==y.lane;if(H?(pt&_)===_:(n&_)===_){_!==0&&_===Jn&&(Wc=!0),L!==null&&(L=L.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var J=t,it=y;_=e;var Lt=a;switch(it.tag){case 1:if(J=it.payload,typeof J=="function"){X=J.call(Lt,X,_);break t}X=J;break t;case 3:J.flags=J.flags&-65537|128;case 0:if(J=it.payload,_=typeof J=="function"?J.call(Lt,X,_):J,_==null)break t;X=ct({},X,_);break t;case 2:Ya=!0}}_=y.callback,_!==null&&(t.flags|=64,H&&(t.flags|=8192),H=i.callbacks,H===null?i.callbacks=[_]:H.push(_))}else H={lane:_,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(E=L=H,v=X):L=L.next=H,d|=_;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;H=y,y=H.next,H.next=null,i.lastBaseUpdate=H,i.shared.pending=null}}while(!0);L===null&&(v=X),i.baseState=v,i.firstBaseUpdate=E,i.lastBaseUpdate=L,u===null&&(i.shared.lanes=0),Qa|=d,t.lanes=d,t.memoizedState=X}}function _0(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function M0(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_0(a[t],e)}function ei(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,d=a.inst;n=u(),d.destroy=n}a=a.next}while(a!==i)}}catch(y){Rt(e,e.return,y)}}function Xa(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var d=n.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,i=e;var v=a;try{y()}catch(E){Rt(i,v,E)}}}n=n.next}while(n!==u)}}catch(E){Rt(e,e.return,E)}}function C0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{M0(e,a)}catch(n){Rt(t,t.return,n)}}}function N0(t,e,a){a.props=gn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Rt(t,e,n)}}function Sn(t,e){try{var a=t.ref;if(a!==null){var n=t.stateNode;switch(t.tag){case 26:case 27:case 5:var i=n;break;default:i=n}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(u){Rt(t,e,u)}}function be(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Rt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Rt(t,e,i)}else a.current=null}function D0(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Rt(t,t.return,i)}}function j0(t,e,a){try{var n=t.stateNode;yg(n,t.type,a,e),n[de]=e}catch(i){Rt(t,t.return,i)}}function U0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Pc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Gr));else if(n!==4&&n!==27&&(t=t.child,t!==null))for(Ic(t,e,a),t=t.sibling;t!==null;)Ic(t,e,a),t=t.sibling}function _r(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&n!==27&&(t=t.child,t!==null))for(_r(t,e,a),t=t.sibling;t!==null;)_r(t,e,a),t=t.sibling}var ha=!1,Ut=!1,ts=!1,H0=typeof WeakSet=="function"?WeakSet:Set,Ft=null,L0=!1;function Qp(t,e){if(t=t.containerInfo,zs=Jr,t=td(t),ac(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var d=0,y=-1,v=-1,E=0,L=0,X=t,_=null;e:for(;;){for(var H;X!==a||i!==0&&X.nodeType!==3||(y=d+i),X!==u||n!==0&&X.nodeType!==3||(v=d+n),X.nodeType===3&&(d+=X.nodeValue.length),(H=X.firstChild)!==null;)_=X,X=H;for(;;){if(X===t)break e;if(_===a&&++E===i&&(y=d),_===u&&++L===n&&(v=d),(H=X.nextSibling)!==null)break;X=_,_=X.parentNode}X=H}a=y===-1||v===-1?null:{start:y,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(_s={focusedElem:t,selectionRange:a},Jr=!1,Ft=e;Ft!==null;)if(e=Ft,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ft=t;else for(;Ft!==null;){switch(e=Ft,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var J=gn(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(J,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(it){Rt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Ds(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ds(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ft=t;break}Ft=e.return}return J=L0,L0=!1,J}function Y0(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a),n&4&&ei(5,a);break;case 1:if(pa(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){Rt(a,a.return,y)}else{var i=gn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Rt(a,a.return,y)}}n&64&&C0(a),n&512&&Sn(a,a.return);break;case 3:if(pa(t,a),n&64&&(n=a.updateQueue,n!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{M0(n,t)}catch(y){Rt(a,a.return,y)}}break;case 26:pa(t,a),n&512&&Sn(a,a.return);break;case 27:case 5:pa(t,a),e===null&&n&4&&D0(a),n&512&&Sn(a,a.return);break;case 12:pa(t,a);break;case 13:pa(t,a),n&4&&X0(t,a);break;case 22:if(i=a.memoizedState!==null||ha,!i){e=e!==null&&e.memoizedState!==null||Ut;var u=ha,d=Ut;ha=i,(Ut=e)&&!d?Ga(t,a,(a.subtreeFlags&8772)!==0):pa(t,a),ha=u,Ut=d}n&512&&(a.memoizedProps.mode==="manual"?Sn(a,a.return):be(a,a.return));break;default:pa(t,a)}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&qu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Gt=null,Se=!1;function ya(t,e,a){for(a=a.child;a!==null;)q0(t,e,a),a=a.sibling}function q0(t,e,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:Ut||be(a,e),ya(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ut||be(a,e);var n=Gt,i=Se;for(Gt=a.stateNode,ya(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);qu(a),Gt=n,Se=i;break;case 5:Ut||be(a,e);case 6:i=Gt;var u=Se;if(Gt=null,ya(t,e,a),Gt=i,Se=u,Gt!==null)if(Se)try{t=Gt,n=a.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)}catch(d){Rt(a,e,d)}else try{Gt.removeChild(a.stateNode)}catch(d){Rt(a,e,d)}break;case 18:Gt!==null&&(Se?(e=Gt,a=a.stateNode,e.nodeType===8?Ns(e.parentNode,a):e.nodeType===1&&Ns(e,a),bi(e)):Ns(Gt,a.stateNode));break;case 4:n=Gt,i=Se,Gt=a.stateNode.containerInfo,Se=!0,ya(t,e,a),Gt=n,Se=i;break;case 0:case 11:case 14:case 15:Ut||Xa(2,a,e),Ut||Xa(4,a,e),ya(t,e,a);break;case 1:Ut||(be(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&N0(a,e,n)),ya(t,e,a);break;case 21:ya(t,e,a);break;case 22:Ut||be(a,e),Ut=(n=Ut)||a.memoizedState!==null,ya(t,e,a),Ut=n;break;default:ya(t,e,a)}}function X0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bi(t)}catch(a){Rt(e,e.return,a)}}function Zp(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new H0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new H0),e;default:throw Error(s(435,t.tag))}}function es(t,e){var a=Zp(t);e.forEach(function(n){var i=ig.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ne(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,d=e,y=d;t:for(;y!==null;){switch(y.tag){case 27:case 5:Gt=y.stateNode,Se=!1;break t;case 3:Gt=y.stateNode.containerInfo,Se=!0;break t;case 4:Gt=y.stateNode.containerInfo,Se=!0;break t}y=y.return}if(Gt===null)throw Error(s(160));q0(u,d,i),Gt=null,Se=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)G0(e,t),e=e.sibling}var Be=null;function G0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ne(e,t),De(t),n&4&&(Xa(3,t,t.return),ei(3,t),Xa(5,t,t.return));break;case 1:Ne(e,t),De(t),n&512&&(Ut||a===null||be(a,a.return)),n&64&&ha&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Be;if(Ne(e,t),De(t),n&512&&(Ut||a===null||be(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[wl]||u[ae]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),te(u,n,a),u[ae]=t,$t(u),n=u;break t;case"link":var d=Dm("link","href",i).get(n+(a.href||""));if(d){for(var y=0;y<d.length;y++)if(u=d[y],u.getAttribute("href")===(a.href==null?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(y,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;case"meta":if(d=Dm("meta","content",i).get(n+(a.content||""))){for(y=0;y<d.length;y++)if(u=d[y],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(y,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;default:throw Error(s(468,n))}u[ae]=t,$t(u),n=u}t.stateNode=n}else jm(i,t.type,t.stateNode);else t.stateNode=Nm(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?jm(i,t.type,t.stateNode):Nm(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&j0(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&t.alternate===null){i=t.stateNode,u=t.memoizedProps;try{for(var v=i.firstChild;v;){var E=v.nextSibling,L=v.nodeName;v[wl]||L==="HEAD"||L==="BODY"||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&v.rel.toLowerCase()==="stylesheet"||i.removeChild(v),v=E}for(var X=t.type,_=i.attributes;_.length;)i.removeAttributeNode(_[0]);te(i,X,u),i[ae]=t,i[de]=u}catch(J){Rt(t,t.return,J)}}case 5:if(Ne(e,t),De(t),n&512&&(Ut||a===null||be(a,a.return)),t.flags&32){i=t.stateNode;try{Ln(i,"")}catch(J){Rt(t,t.return,J)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,j0(t,i,a!==null?a.memoizedProps:i)),n&1024&&(ts=!0);break;case 6:if(Ne(e,t),De(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(J){Rt(t,t.return,J)}}break;case 3:if(Zr=null,i=Be,Be=Vr(e.containerInfo),Ne(e,t),Be=i,De(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{bi(e.containerInfo)}catch(J){Rt(t,t.return,J)}ts&&(ts=!1,k0(t));break;case 4:n=Be,Be=Vr(t.stateNode.containerInfo),Ne(e,t),De(t),Be=n;break;case 12:Ne(e,t),De(t);break;case 13:Ne(e,t),De(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(os=Ve()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,es(t,n)));break;case 22:if(n&512&&(Ut||a===null||be(a,a.return)),v=t.memoizedState!==null,E=a!==null&&a.memoizedState!==null,L=ha,X=Ut,ha=L||v,Ut=X||E,Ne(e,t),Ut=X,ha=L,De(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,n&8192&&(e._visibility=v?e._visibility&-2:e._visibility|1,v&&(e=ha||Ut,a===null||E||e||tl(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){E=a=e;try{if(i=E.stateNode,v)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{d=E.stateNode,y=E.memoizedProps.style;var H=y!=null&&y.hasOwnProperty("display")?y.display:null;d.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(J){Rt(E,E.return,J)}}}else if(e.tag===6){if(a===null){E=e;try{E.stateNode.nodeValue=v?"":E.memoizedProps}catch(J){Rt(E,E.return,J)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,es(t,a))));break;case 19:Ne(e,t),De(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,es(t,n)));break;case 21:break;default:Ne(e,t),De(t)}}function De(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(U0(a)){var n=a;break t}a=a.return}throw Error(s(160))}switch(n.tag){case 27:var i=n.stateNode,u=Pc(t);_r(t,u,i);break;case 5:var d=n.stateNode;n.flags&32&&(Ln(d,""),n.flags&=-33);var y=Pc(t);_r(t,y,d);break;case 3:case 4:var v=n.stateNode.containerInfo,E=Pc(t);Ic(t,E,v);break;default:throw Error(s(161))}}}catch(L){Rt(t,t.return,L)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;k0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function pa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Y0(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Xa(4,e,e.return),tl(e);break;case 1:be(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&N0(e,e.return,a),tl(e);break;case 26:case 27:case 5:be(e,e.return),tl(e);break;case 22:be(e,e.return),e.memoizedState===null&&tl(e);break;default:tl(e)}t=t.sibling}}function Ga(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(i,u,a),ei(4,u);break;case 1:if(Ga(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Rt(n,n.return,E)}if(n=u,i=n.updateQueue,i!==null){var y=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)_0(v[i],y)}catch(E){Rt(n,n.return,E)}}a&&d&64&&C0(u),Sn(u,u.return);break;case 26:case 27:case 5:Ga(i,u,a),a&&n===null&&d&4&&D0(u),Sn(u,u.return);break;case 12:Ga(i,u,a);break;case 13:Ga(i,u,a),a&&d&4&&X0(i,u);break;case 22:u.memoizedState===null&&Ga(i,u,a),Sn(u,u.return);break;default:Ga(i,u,a)}e=e.sibling}}function as(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ql(a))}function ns(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ql(t))}function ka(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V0(t,e,a,n),e=e.sibling}function V0(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ka(t,e,a,n),i&2048&&ei(9,e);break;case 3:ka(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ql(t)));break;case 12:if(i&2048){ka(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,d=u.id,y=u.onPostCommit;typeof y=="function"&&y(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Rt(e,e.return,v)}}else ka(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?ka(t,e,a,n):ai(t,e):u._visibility&4?ka(t,e,a,n):(u._visibility|=4,el(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&as(e.alternate,e);break;case 24:ka(t,e,a,n),i&2048&&ns(e.alternate,e);break;default:ka(t,e,a,n)}}function el(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,d=e,y=a,v=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:el(u,d,y,v,i),ei(8,d);break;case 23:break;case 22:var L=d.stateNode;d.memoizedState!==null?L._visibility&4?el(u,d,y,v,i):ai(u,d):(L._visibility|=4,el(u,d,y,v,i)),i&&E&2048&&as(d.alternate,d);break;case 24:el(u,d,y,v,i),i&&E&2048&&ns(d.alternate,d);break;default:el(u,d,y,v,i)}e=e.sibling}}function ai(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:ai(a,n),i&2048&&as(n.alternate,n);break;case 24:ai(a,n),i&2048&&ns(n.alternate,n);break;default:ai(a,n)}e=e.sibling}}var ni=8192;function al(t){if(t.subtreeFlags&ni)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 26:al(t),t.flags&ni&&t.memoizedState!==null&&jg(Be,t.memoizedState,t.memoizedProps);break;case 5:al(t);break;case 3:case 4:var e=Be;Be=Vr(t.stateNode.containerInfo),al(t),Be=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ni,ni=16777216,al(t),ni=e):al(t));break;default:al(t)}}function Z0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function li(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,$0(n,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K0(t),t=t.sibling}function K0(t){switch(t.tag){case 0:case 11:case 15:li(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:li(t);break;case 12:li(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Mr(t)):li(t);break;default:li(t)}}function Mr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,$0(n,t)}Z0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Xa(8,e,e.return),Mr(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,Mr(e));break;default:Mr(e)}t=t.sibling}}function $0(t,e){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:Xa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ft=n;else t:for(a=t;Ft!==null;){n=Ft;var i=n.sibling,u=n.return;if(B0(n),n===a){Ft=null;break t}if(i!==null){i.return=u,Ft=i;break t}Ft=u}}}function Kp(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,a,n){return new Kp(t,e,a,n)}function ls(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Va(t,e){var a=t.alternate;return a===null?(a=je(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function J0(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Cr(t,e,a,n,i,u){var d=0;if(n=t,typeof t=="function")ls(t)&&(d=1);else if(typeof t=="string")d=Ng(t,a,ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return xn(a.children,i,u,e);case h:d=8,i|=24;break;case b:return t=je(12,a,e,i|2),t.elementType=b,t.lanes=u,t;case N:return t=je(13,a,e,i),t.elementType=N,t.lanes=u,t;case A:return t=je(19,a,e,i),t.elementType=A,t.lanes=u,t;case Y:return F0(a,i,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:case U:d=10;break t;case T:d=9;break t;case z:d=11;break t;case C:d=14;break t;case B:d=16,n=null;break t}d=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=je(d,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function xn(t,e,a,n){return t=je(7,t,n,e),t.lanes=a,t}function F0(t,e,a,n){t=je(22,t,n,e),t.elementType=Y,t.lanes=a;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=i._current;if(u===null)throw Error(s(456));if((i._pendingVisibility&2)===0){var d=Na(u,2);d!==null&&(i._pendingVisibility|=2,oe(d,u,2))}},attach:function(){var u=i._current;if(u===null)throw Error(s(456));if((i._pendingVisibility&2)!==0){var d=Na(u,2);d!==null&&(i._pendingVisibility&=-3,oe(d,u,2))}}};return t.stateNode=i,t}function is(t,e,a){return t=je(6,t,null,e),t.lanes=a,t}function rs(t,e,a){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ga(t){t.flags|=4}function W0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Um(e)){if(e=Ce.current,e!==null&&((pt&4194176)===pt?Ze!==null:(pt&62914560)!==pt&&(pt&536870912)===0||e!==Ze))throw Gl=fc,hd;t.flags|=8192}}function Nr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yf():536870912,t.lanes|=e,ll|=e)}function ii(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&31457280,n|=i.flags&31457280,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function $p(t,e,a){var n=e.pendingProps;switch(sc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Nt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ma(Zt),Cn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?ga(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ye!==null&&(hs(Ye),Ye=null))),Nt(e),null;case 26:return a=e.memoizedState,t===null?(ga(e),a!==null?(Nt(e),W0(e,a)):(Nt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(ga(e),Nt(e),W0(e,a)):(Nt(e),e.flags&=-16777217):(t.memoizedProps!==n&&ga(e),Nt(e),e.flags&=-16777217),null;case 27:Vi(e),a=za.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ga(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Nt(e),null}t=ke.current,Yl(e)?dd(e):(t=wm(i,n,a),e.stateNode=t,ga(e))}return Nt(e),null;case 5:if(Vi(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ga(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Nt(e),null}if(t=ke.current,Yl(e))dd(e);else{switch(i=kr(za.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ae]=e,t[de]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(te(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ga(e)}}return Nt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&ga(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=za.current,Yl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=se,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ae]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||xm(t.nodeValue,a)),t||fn(e)}else t=kr(t).createTextNode(n),t[ae]=e,e.stateNode=t}return Nt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Yl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ae]=e}else Bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),i=!1}else Ye!==null&&(hs(Ye),Ye=null),i=!0;if(!i)return e.flags&256?(sa(e),e):(sa(e),null)}if(sa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Nr(e,e.updateQueue),Nt(e),null;case 4:return Cn(),t===null&&Ts(e.stateNode.containerInfo),Nt(e),null;case 10:return ma(e.type),Nt(e),null;case 19:if(Bt(Qt),i=e.memoizedState,i===null)return Nt(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)ii(i,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=yr(t),u!==null){for(e.flags|=128,ii(i,!1),t=u.updateQueue,e.updateQueue=t,Nr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)J0(a,t),a=a.sibling;return Ct(Qt,Qt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>Dr&&(e.flags|=128,n=!0,ii(i,!1),e.lanes=4194304)}else{if(!n)if(t=yr(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Nr(e,t),ii(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!gt)return Nt(e),null}else 2*Ve()-i.renderingStartTime>Dr&&a!==536870912&&(e.flags|=128,n=!0,ii(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,t=Qt.current,Ct(Qt,n?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return sa(e),mc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),a=e.updateQueue,a!==null&&Nr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&Bt(mn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ma(Zt),Nt(e),null;case 25:return null}throw Error(s(156,e.tag))}function Jp(t,e){switch(sc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ma(Zt),Cn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Vi(e),null;case 13:if(sa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Bt(Qt),null;case 4:return Cn(),null;case 10:return ma(e.type),null;case 22:case 23:return sa(e),mc(),t!==null&&Bt(mn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ma(Zt),null;case 25:return null;default:return null}}function P0(t,e){switch(sc(e),e.tag){case 3:ma(Zt),Cn();break;case 26:case 27:case 5:Vi(e);break;case 4:Cn();break;case 13:sa(e);break;case 19:Bt(Qt);break;case 10:ma(e.type);break;case 22:case 23:sa(e),mc(),t!==null&&Bt(mn);break;case 24:ma(Zt)}}var Fp={getCacheForType:function(t){var e=ne(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Wp=typeof WeakMap=="function"?WeakMap:Map,Dt=0,zt=null,dt=null,pt=0,_t=0,xe=null,va=!1,nl=!1,us=!1,ba=0,Ht=0,Qa=0,En=0,cs=0,Ue=0,ll=0,ri=null,$e=null,ss=!1,os=0,Dr=1/0,jr=null,Za=null,Ur=!1,An=null,ui=0,fs=0,ds=null,ci=0,ms=null;function Ee(){if((Dt&2)!==0&&pt!==0)return pt&-pt;if($.T!==null){var t=Jn;return t!==0?t:xs()}return bf()}function I0(){Ue===0&&(Ue=(pt&536870912)===0||gt?hf():536870912);var t=Ce.current;return t!==null&&(t.flags|=32),Ue}function oe(t,e,a){(t===zt&&_t===2||t.cancelPendingCommit!==null)&&(il(t,0),Sa(t,pt,Ue,!1)),Rl(t,a),((Dt&2)===0||t!==zt)&&(t===zt&&((Dt&2)===0&&(En|=a),Ht===4&&Sa(t,pt,Ue,!1)),Je(t))}function tm(t,e,a){if((Dt&6)!==0)throw Error(s(327));var n=!a&&(e&60)===0&&(e&t.expiredLanes)===0||Tl(t,e),i=n?tg(t,e):gs(t,e,!0),u=n;do{if(i===0){nl&&!n&&Sa(t,e,0,!1);break}else if(i===6)Sa(t,e,0,!va);else{if(a=t.current.alternate,u&&!Pp(a)){i=gs(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var y=t;i=ri;var v=y.current.memoizedState.isDehydrated;if(v&&(il(y,d).flags|=256),d=gs(y,d,!1),d!==2){if(us&&!v){y.errorRecoveryDisabledLanes|=u,En|=u,i=4;break t}u=$e,$e=i,u!==null&&hs(u)}i=d}if(u=!1,i!==2)continue}}if(i===1){il(t,0),Sa(t,e,0,!0);break}t:{switch(n=t,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194176)===e){Sa(n,e,Ue,!va);break t}break;case 2:$e=null;break;case 3:case 5:break;default:throw Error(s(329))}if(n.finishedWork=a,n.finishedLanes=e,(e&62914560)===e&&(u=os+300-Ve(),10<u)){if(Sa(n,e,Ue,!va),$i(n,0)!==0)break t;n.timeoutHandle=Om(em.bind(null,n,a,$e,jr,ss,e,Ue,En,ll,va,2,-0,0),u);break t}em(n,a,$e,jr,ss,e,Ue,En,ll,va,0,-0,0)}}break}while(!0);Je(t)}function hs(t){$e===null?$e=t:$e.push.apply($e,t)}function em(t,e,a,n,i,u,d,y,v,E,L,X,_){var H=e.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(hi={stylesheets:null,count:0,unsuspend:Dg},Q0(e),e=Ug(),e!==null)){t.cancelPendingCommit=e(cm.bind(null,t,a,n,i,d,y,v,1,X,_)),Sa(t,u,d,!E);return}cm(t,a,n,i,d,y,v,L,X,_)}function Pp(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!ve(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sa(t,e,a,n){e&=~cs,e&=~En,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-ge(i),d=1<<u;n[u]=-1,i&=~d}a!==0&&pf(t,a,e)}function Hr(){return(Dt&6)===0?(si(0),!1):!0}function ys(){if(dt!==null){if(_t===0)var t=dt.return;else t=dt,da=vn=null,xc(t),Kn=null,kl=0,t=dt;for(;t!==null;)P0(t.alternate,t),t=t.return;dt=null}}function il(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ys(),zt=t,dt=a=Va(t.current,null),pt=e,_t=0,xe=null,va=!1,nl=Tl(t,e),us=!1,ll=Ue=cs=En=Qa=Ht=0,$e=ri=null,ss=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-ge(n),u=1<<i;e|=t[i],n&=~u}return ba=e,rr(),a}function am(t,e){ot=null,$.H=Ke,e===Xl?(e=gd(),_t=3):e===hd?(e=gd(),_t=4):_t=e===y0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,dt===null&&(Ht=1,Rr(t,ze(e,t.current)))}function nm(){var t=$.H;return $.H=Ke,t===null?Ke:t}function lm(){var t=$.A;return $.A=Fp,t}function ps(){Ht=4,va||(pt&4194176)!==pt&&Ce.current!==null||(nl=!0),(Qa&134217727)===0&&(En&134217727)===0||zt===null||Sa(zt,pt,Ue,!1)}function gs(t,e,a){var n=Dt;Dt|=2;var i=nm(),u=lm();(zt!==t||pt!==e)&&(jr=null,il(t,e)),e=!1;var d=Ht;t:do try{if(_t!==0&&dt!==null){var y=dt,v=xe;switch(_t){case 8:ys(),d=6;break t;case 3:case 2:case 6:Ce.current===null&&(e=!0);var E=_t;if(_t=0,xe=null,rl(t,y,v,E),a&&nl){d=0;break t}break;default:E=_t,_t=0,xe=null,rl(t,y,v,E)}}Ip(),d=Ht;break}catch(L){am(t,L)}while(!0);return e&&t.shellSuspendCounter++,da=vn=null,Dt=n,$.H=i,$.A=u,dt===null&&(zt=null,pt=0,rr()),d}function Ip(){for(;dt!==null;)im(dt)}function tg(t,e){var a=Dt;Dt|=2;var n=nm(),i=lm();zt!==t||pt!==e?(jr=null,Dr=Ve()+500,il(t,e)):nl=Tl(t,e);t:do try{if(_t!==0&&dt!==null){e=dt;var u=xe;e:switch(_t){case 1:_t=0,xe=null,rl(t,e,u,1);break;case 2:if(yd(u)){_t=0,xe=null,rm(e);break}e=function(){_t===2&&zt===t&&(_t=7),Je(t)},u.then(e,e);break t;case 3:_t=7;break t;case 4:_t=5;break t;case 7:yd(u)?(_t=0,xe=null,rm(e)):(_t=0,xe=null,rl(t,e,u,7));break;case 5:var d=null;switch(dt.tag){case 26:d=dt.memoizedState;case 5:case 27:var y=dt;if(!d||Um(d)){_t=0,xe=null;var v=y.sibling;if(v!==null)dt=v;else{var E=y.return;E!==null?(dt=E,Lr(E)):dt=null}break e}}_t=0,xe=null,rl(t,e,u,5);break;case 6:_t=0,xe=null,rl(t,e,u,6);break;case 8:ys(),Ht=6;break t;default:throw Error(s(462))}}eg();break}catch(L){am(t,L)}while(!0);return da=vn=null,$.H=n,$.A=i,Dt=a,dt!==null?0:(zt=null,pt=0,rr(),Ht)}function eg(){for(;dt!==null&&!Ay();)im(dt)}function im(t){var e=w0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,e===null?Lr(t):dt=e}function rm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=x0(a,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=x0(a,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:xc(e);default:P0(a,e),e=dt=J0(e,ba),e=w0(a,e,ba)}t.memoizedProps=t.pendingProps,e===null?Lr(t):dt=e}function rl(t,e,a,n){da=vn=null,xc(e),Kn=null,kl=0;var i=e.return;try{if(kp(t,i,e,a,pt)){Ht=1,Rr(t,ze(a,t.current)),dt=null;return}}catch(u){if(i!==null)throw dt=i,u;Ht=1,Rr(t,ze(a,t.current)),dt=null;return}e.flags&32768?(gt||n===1?t=!0:nl||(pt&536870912)!==0?t=!1:(va=t=!0,(n===2||n===3||n===6)&&(n=Ce.current,n!==null&&n.tag===13&&(n.flags|=16384))),um(e,t)):Lr(e)}function Lr(t){var e=t;do{if((e.flags&32768)!==0){um(e,va);return}t=e.return;var a=$p(e.alternate,e,ba);if(a!==null){dt=a;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);Ht===0&&(Ht=5)}function um(t,e){do{var a=Jp(t.alternate,t);if(a!==null){a.flags&=32767,dt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){dt=t;return}dt=t=a}while(t!==null);Ht=6,dt=null}function cm(t,e,a,n,i,u,d,y,v,E){var L=$.T,X=Z.p;try{Z.p=2,$.T=null,ag(t,e,a,n,X,i,u,d,y,v,E)}finally{$.T=L,Z.p=X}}function ag(t,e,a,n,i,u,d,y){do ul();while(An!==null);if((Dt&6)!==0)throw Error(s(327));var v=t.finishedWork;if(n=t.finishedLanes,v===null)return null;if(t.finishedWork=null,t.finishedLanes=0,v===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var E=v.lanes|v.childLanes;if(E|=rc,jy(t,n,E,u,d,y),t===zt&&(dt=zt=null,pt=0),(v.subtreeFlags&10256)===0&&(v.flags&10256)===0||Ur||(Ur=!0,fs=E,ds=a,rg(Qi,function(){return ul(),null})),a=(v.flags&15990)!==0,(v.subtreeFlags&15990)!==0||a?(a=$.T,$.T=null,u=Z.p,Z.p=2,d=Dt,Dt|=4,Qp(t,v),G0(v,t),Rp(_s,t.containerInfo),Jr=!!zs,_s=zs=null,t.current=v,Y0(t,v.alternate,v),Oy(),Dt=d,Z.p=u,$.T=a):t.current=v,Ur?(Ur=!1,An=t,ui=n):sm(t,E),E=t.pendingLanes,E===0&&(Za=null),_y(v.stateNode),Je(t),e!==null)for(i=t.onRecoverableError,v=0;v<e.length;v++)E=e[v],i(E.value,{componentStack:E.stack});return(ui&3)!==0&&ul(),E=t.pendingLanes,(n&4194218)!==0&&(E&42)!==0?t===ms?ci++:(ci=0,ms=t):ci=0,si(0),null}function sm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ql(e)))}function ul(){if(An!==null){var t=An,e=fs;fs=0;var a=vf(ui),n=$.T,i=Z.p;try{if(Z.p=32>a?32:a,$.T=null,An===null)var u=!1;else{a=ds,ds=null;var d=An,y=ui;if(An=null,ui=0,(Dt&6)!==0)throw Error(s(331));var v=Dt;if(Dt|=4,K0(d.current),V0(d,d.current,y,a),Dt=v,si(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(Ol,d)}catch{}u=!0}return u}finally{Z.p=i,$.T=n,sm(t,e)}}return!1}function om(t,e,a){e=ze(a,e),e=Uc(t.stateNode,e,2),t=qa(t,e,2),t!==null&&(Rl(t,2),Je(t))}function Rt(t,e,a){if(t.tag===3)om(t,t,a);else for(;e!==null;){if(e.tag===3){om(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Za===null||!Za.has(n))){t=ze(a,t),a=m0(2),n=qa(e,a,2),n!==null&&(h0(a,n,e,t),Rl(n,2),Je(n));break}}e=e.return}}function vs(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new Wp;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(us=!0,i.add(a),t=ng.bind(null,t,e,a),e.then(t,t))}function ng(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(pt&a)===a&&(Ht===4||Ht===3&&(pt&62914560)===pt&&300>Ve()-os?(Dt&2)===0&&il(t,0):cs|=a,ll===pt&&(ll=0)),Je(t)}function fm(t,e){e===0&&(e=yf()),t=Na(t,e),t!==null&&(Rl(t,e),Je(t))}function lg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),fm(t,a)}function ig(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),fm(t,a)}function rg(t,e){return Hu(t,e)}var Yr=null,cl=null,bs=!1,Br=!1,Ss=!1,On=0;function Je(t){t!==cl&&t.next===null&&(cl===null?Yr=cl=t:cl=cl.next=t),Br=!0,bs||(bs=!0,cg(ug))}function si(t,e){if(!Ss&&Br){Ss=!0;do for(var a=!1,n=Yr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var d=n.suspendedLanes,y=n.pingedLanes;u=(1<<31-ge(42|t)+1)-1,u&=i&~(d&~y),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(a=!0,hm(n,u))}else u=pt,u=$i(n,n===zt?u:0),(u&3)===0||Tl(n,u)||(a=!0,hm(n,u));n=n.next}while(a);Ss=!1}}function ug(){Br=bs=!1;var t=0;On!==0&&(pg()&&(t=On),On=0);for(var e=Ve(),a=null,n=Yr;n!==null;){var i=n.next,u=dm(n,e);u===0?(n.next=null,a===null?Yr=i:a.next=i,i===null&&(cl=a)):(a=n,(t!==0||(u&3)!==0)&&(Br=!0)),n=i}si(t)}function dm(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var d=31-ge(u),y=1<<d,v=i[d];v===-1?((y&a)===0||(y&n)!==0)&&(i[d]=Dy(y,e)):v<=e&&(t.expiredLanes|=y),u&=~y}if(e=zt,a=pt,a=$i(t,t===e?a:0),n=t.callbackNode,a===0||t===e&&_t===2||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Lu(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Tl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Lu(n),vf(a)){case 2:case 8:a=df;break;case 32:a=Qi;break;case 268435456:a=mf;break;default:a=Qi}return n=mm.bind(null,t),a=Hu(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Lu(n),t.callbackPriority=2,t.callbackNode=null,2}function mm(t,e){var a=t.callbackNode;if(ul()&&t.callbackNode!==a)return null;var n=pt;return n=$i(t,t===zt?n:0),n===0?null:(tm(t,n,e),dm(t,Ve()),t.callbackNode!=null&&t.callbackNode===a?mm.bind(null,t):null)}function hm(t,e){if(ul())return null;tm(t,e,!0)}function cg(t){vg(function(){(Dt&6)!==0?Hu(ff,t):t()})}function xs(){return On===0&&(On=hf()),On}function ym(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ii(""+t)}function pm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function sg(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=ym((i[de]||null).action),d=n.submitter;d&&(e=(e=d[de]||null)?ym(e.formAction):d.getAttribute("formAction"),e!==null&&(u=e,d=null));var y=new nr("action","action",null,n,i);t.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(On!==0){var v=d?pm(i,d):new FormData(i);Mc(a,{pending:!0,data:v,method:i.method,action:u},null,v)}}else typeof u=="function"&&(y.preventDefault(),v=d?pm(i,d):new FormData(i),Mc(a,{pending:!0,data:v,method:i.method,action:u},u,v))},currentTarget:i}]})}}for(var Es=0;Es<cd.length;Es++){var As=cd[Es],og=As.toLowerCase(),fg=As[0].toUpperCase()+As.slice(1);Le(og,"on"+fg)}Le(nd,"onAnimationEnd"),Le(ld,"onAnimationIteration"),Le(id,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(zp,"onTransitionRun"),Le(_p,"onTransitionStart"),Le(Mp,"onTransitionCancel"),Le(rd,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function gm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var d=n.length-1;0<=d;d--){var y=n[d],v=y.instance,E=y.currentTarget;if(y=y.listener,v!==u&&i.isPropagationStopped())break t;u=y,i.currentTarget=E;try{u(i)}catch(L){Tr(L)}i.currentTarget=null,u=v}else for(d=0;d<n.length;d++){if(y=n[d],v=y.instance,E=y.currentTarget,y=y.listener,v!==u&&i.isPropagationStopped())break t;u=y,i.currentTarget=E;try{u(i)}catch(L){Tr(L)}i.currentTarget=null,u=v}}}}function ht(t,e){var a=e[Bu];a===void 0&&(a=e[Bu]=new Set);var n=t+"__bubble";a.has(n)||(vm(e,t,2,!1),a.add(n))}function Os(t,e,a){var n=0;e&&(n|=4),vm(a,t,n,e)}var qr="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[qr]){t[qr]=!0,xf.forEach(function(a){a!=="selectionchange"&&(dg.has(a)||Os(a,!1,t),Os(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qr]||(e[qr]=!0,Os("selectionchange",!1,e))}}function vm(t,e,a,n){switch(Xm(e)){case 2:var i=Yg;break;case 8:i=Bg;break;default:i=Ys}a=i.bind(null,e,a,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Rs(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var y=n.stateNode.containerInfo;if(y===i||y.nodeType===8&&y.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;d=d.return}for(;y!==null;){if(d=nn(y),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=u=d;continue t}y=y.parentNode}}n=n.return}Df(function(){var E=u,L=Qu(a),X=[];t:{var _=ud.get(t);if(_!==void 0){var H=nr,J=t;switch(t){case"keypress":if(er(a)===0)break t;case"keydown":case"keyup":H=ip;break;case"focusin":J="focus",H=Wu;break;case"focusout":J="blur",H=Wu;break;case"beforeblur":case"afterblur":H=Wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=cp;break;case nd:case ld:case id:H=Fy;break;case rd:H=op;break;case"scroll":case"scrollend":H=Qy;break;case"wheel":H=dp;break;case"copy":case"cut":case"paste":H=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Yf;break;case"toggle":case"beforetoggle":H=hp}var it=(e&4)!==0,Lt=!it&&(t==="scroll"||t==="scrollend"),O=it?_!==null?_+"Capture":null:_;it=[];for(var x=E,w;x!==null;){var q=x;if(w=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||w===null||O===null||(q=_l(x,O),q!=null&&it.push(fi(x,q,w))),Lt)break;x=x.return}0<it.length&&(_=new H(_,J,null,a,L),X.push({event:_,listeners:it}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",_&&a!==Vu&&(J=a.relatedTarget||a.fromElement)&&(nn(J)||J[Nn]))break t;if((H||_)&&(_=L.window===L?L:(_=L.ownerDocument)?_.defaultView||_.parentWindow:window,H?(J=a.relatedTarget||a.toElement,H=E,J=J?nn(J):null,J!==null&&(Lt=nt(J),it=J.tag,J!==Lt||it!==5&&it!==27&&it!==6)&&(J=null)):(H=null,J=E),H!==J)){if(it=Hf,q="onMouseLeave",O="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(it=Yf,q="onPointerLeave",O="onPointerEnter",x="pointer"),Lt=H==null?_:zl(H),w=J==null?_:zl(J),_=new it(q,x+"leave",H,a,L),_.target=Lt,_.relatedTarget=w,q=null,nn(L)===E&&(it=new it(O,x+"enter",J,a,L),it.target=w,it.relatedTarget=Lt,q=it),Lt=q,H&&J)e:{for(it=H,O=J,x=0,w=it;w;w=sl(w))x++;for(w=0,q=O;q;q=sl(q))w++;for(;0<x-w;)it=sl(it),x--;for(;0<w-x;)O=sl(O),w--;for(;x--;){if(it===O||O!==null&&it===O.alternate)break e;it=sl(it),O=sl(O)}it=null}else it=null;H!==null&&bm(X,_,H,it,!1),J!==null&&Lt!==null&&bm(X,Lt,J,it,!0)}}t:{if(_=E?zl(E):window,H=_.nodeName&&_.nodeName.toLowerCase(),H==="select"||H==="input"&&_.type==="file")var K=Zf;else if(Vf(_))if(Kf)K=Op;else{K=Ep;var ft=xp}else H=_.nodeName,!H||H.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?E&&ku(E.elementType)&&(K=Zf):K=Ap;if(K&&(K=K(t,E))){Qf(X,K,a,L);break t}ft&&ft(t,_,E),t==="focusout"&&E&&_.type==="number"&&E.memoizedProps.value!=null&&Gu(_,"number",_.value)}switch(ft=E?zl(E):window,t){case"focusin":(Vf(ft)||ft.contentEditable==="true")&&(Xn=ft,nc=E,Ll=null);break;case"focusout":Ll=nc=Xn=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,ed(X,a,L);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":ed(X,a,L)}var P;if(Iu)t:{switch(t){case"compositionstart":var tt="onCompositionStart";break t;case"compositionend":tt="onCompositionEnd";break t;case"compositionupdate":tt="onCompositionUpdate";break t}tt=void 0}else qn?Gf(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Bf&&a.locale!=="ko"&&(qn||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&qn&&(P=jf()):(Ca=L,$u="value"in Ca?Ca.value:Ca.textContent,qn=!0)),ft=Xr(E,tt),0<ft.length&&(tt=new Lf(tt,t,null,a,L),X.push({event:tt,listeners:ft}),P?tt.data=P:(P=kf(a),P!==null&&(tt.data=P)))),(P=pp?gp(t,a):vp(t,a))&&(tt=Xr(E,"onBeforeInput"),0<tt.length&&(ft=new Lf("onBeforeInput","beforeinput",null,a,L),X.push({event:ft,listeners:tt}),ft.data=P)),sg(X,t,E,a,L)}gm(X,e)})}function fi(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Xr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=_l(t,a),i!=null&&n.unshift(fi(t,i,u)),i=_l(t,e),i!=null&&n.push(fi(t,i,u))),t=t.return}return n}function sl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bm(t,e,a,n,i){for(var u=e._reactName,d=[];a!==null&&a!==n;){var y=a,v=y.alternate,E=y.stateNode;if(y=y.tag,v!==null&&v===n)break;y!==5&&y!==26&&y!==27||E===null||(v=E,i?(E=_l(a,u),E!=null&&d.unshift(fi(a,E,v))):i||(E=_l(a,u),E!=null&&d.push(fi(a,E,v)))),a=a.return}d.length!==0&&t.push({event:e,listeners:d})}var mg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(mg,`
`).replace(hg,"")}function xm(t,e){return e=Sm(e),Sm(t)===e}function Gr(){}function Tt(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Ln(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Ln(t,""+n);break;case"className":Fi(t,"class",n);break;case"tabIndex":Fi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(t,a,n);break;case"style":Cf(t,n,u);break;case"data":if(e!=="object"){Fi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ii(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Tt(t,e,"name",i.name,i,null),Tt(t,e,"formEncType",i.formEncType,i,null),Tt(t,e,"formMethod",i.formMethod,i,null),Tt(t,e,"formTarget",i.formTarget,i,null)):(Tt(t,e,"encType",i.encType,i,null),Tt(t,e,"method",i.method,i,null),Tt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ii(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Gr);break;case"onScroll":n!=null&&ht("scroll",t);break;case"onScrollEnd":n!=null&&ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Ii(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":ht("beforetoggle",t),ht("toggle",t),Ji(t,"popover",n);break;case"xlinkActuate":ra(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ra(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ra(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ra(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ra(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ra(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ra(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ra(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ra(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ji(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ky.get(a)||a,Ji(t,a,n))}}function ws(t,e,a,n,i,u){switch(a){case"style":Cf(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Ln(t,n):(typeof n=="number"||typeof n=="bigint")&&Ln(t,""+n);break;case"onScroll":n!=null&&ht("scroll",t);break;case"onScrollEnd":n!=null&&ht("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Gr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ef.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[de]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Ji(t,a,n)}}}function te(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ht("error",t),ht("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var d=a[u];if(d!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Tt(t,e,u,d,a,null)}}i&&Tt(t,e,"srcSet",a.srcSet,a,null),n&&Tt(t,e,"src",a.src,a,null);return;case"input":ht("invalid",t);var y=u=d=i=null,v=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var L=a[n];if(L!=null)switch(n){case"name":i=L;break;case"type":d=L;break;case"checked":v=L;break;case"defaultChecked":E=L;break;case"value":u=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,e));break;default:Tt(t,e,n,L,a,null)}}wf(t,u,y,v,E,d,i,!1),Wi(t);return;case"select":ht("invalid",t),n=d=u=null;for(i in a)if(a.hasOwnProperty(i)&&(y=a[i],y!=null))switch(i){case"value":u=y;break;case"defaultValue":d=y;break;case"multiple":n=y;default:Tt(t,e,i,y,a,null)}e=u,a=d,t.multiple=!!n,e!=null?Hn(t,!!n,e,!1):a!=null&&Hn(t,!!n,a,!0);return;case"textarea":ht("invalid",t),u=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(y=a[d],y!=null))switch(d){case"value":n=y;break;case"defaultValue":i=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Tt(t,e,d,y,a,null)}_f(t,n,i,u),Wi(t);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Tt(t,e,v,n,a,null)}return;case"dialog":ht("cancel",t),ht("close",t);break;case"iframe":case"object":ht("load",t);break;case"video":case"audio":for(n=0;n<oi.length;n++)ht(oi[n],t);break;case"image":ht("error",t),ht("load",t);break;case"details":ht("toggle",t);break;case"embed":case"source":case"link":ht("error",t),ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Tt(t,e,E,n,a,null)}return;default:if(ku(e)){for(L in a)a.hasOwnProperty(L)&&(n=a[L],n!==void 0&&ws(t,e,L,n,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null&&Tt(t,e,y,n,a,null))}function yg(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,d=null,y=null,v=null,E=null,L=null;for(H in a){var X=a[H];if(a.hasOwnProperty(H)&&X!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":v=X;default:n.hasOwnProperty(H)||Tt(t,e,H,null,n,X)}}for(var _ in n){var H=n[_];if(X=a[_],n.hasOwnProperty(_)&&(H!=null||X!=null))switch(_){case"type":u=H;break;case"name":i=H;break;case"checked":E=H;break;case"defaultChecked":L=H;break;case"value":d=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,e));break;default:H!==X&&Tt(t,e,_,H,n,X)}}Xu(t,d,y,v,E,L,u,i);return;case"select":H=d=y=_=null;for(u in a)if(v=a[u],a.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":H=v;default:n.hasOwnProperty(u)||Tt(t,e,u,null,n,v)}for(i in n)if(u=n[i],v=a[i],n.hasOwnProperty(i)&&(u!=null||v!=null))switch(i){case"value":_=u;break;case"defaultValue":y=u;break;case"multiple":d=u;default:u!==v&&Tt(t,e,i,u,n,v)}e=y,a=d,n=H,_!=null?Hn(t,!!a,_,!1):!!n!=!!a&&(e!=null?Hn(t,!!a,e,!0):Hn(t,!!a,a?[]:"",!1));return;case"textarea":H=_=null;for(y in a)if(i=a[y],a.hasOwnProperty(y)&&i!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Tt(t,e,y,null,n,i)}for(d in n)if(i=n[d],u=a[d],n.hasOwnProperty(d)&&(i!=null||u!=null))switch(d){case"value":_=i;break;case"defaultValue":H=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==u&&Tt(t,e,d,i,n,u)}zf(t,_,H);return;case"option":for(var J in a)if(_=a[J],a.hasOwnProperty(J)&&_!=null&&!n.hasOwnProperty(J))switch(J){case"selected":t.selected=!1;break;default:Tt(t,e,J,null,n,_)}for(v in n)if(_=n[v],H=a[v],n.hasOwnProperty(v)&&_!==H&&(_!=null||H!=null))switch(v){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Tt(t,e,v,_,n,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)_=a[it],a.hasOwnProperty(it)&&_!=null&&!n.hasOwnProperty(it)&&Tt(t,e,it,null,n,_);for(E in n)if(_=n[E],H=a[E],n.hasOwnProperty(E)&&_!==H&&(_!=null||H!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:Tt(t,e,E,_,n,H)}return;default:if(ku(e)){for(var Lt in a)_=a[Lt],a.hasOwnProperty(Lt)&&_!==void 0&&!n.hasOwnProperty(Lt)&&ws(t,e,Lt,void 0,n,_);for(L in n)_=n[L],H=a[L],!n.hasOwnProperty(L)||_===H||_===void 0&&H===void 0||ws(t,e,L,_,n,H);return}}for(var O in a)_=a[O],a.hasOwnProperty(O)&&_!=null&&!n.hasOwnProperty(O)&&Tt(t,e,O,null,n,_);for(X in n)_=n[X],H=a[X],!n.hasOwnProperty(X)||_===H||_==null&&H==null||Tt(t,e,X,_,n,H)}var zs=null,_s=null;function kr(t){return t.nodeType===9?t:t.ownerDocument}function Em(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ms(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cs=null;function pg(){var t=window.event;return t&&t.type==="popstate"?t===Cs?!1:(Cs=t,!0):(Cs=null,!1)}var Om=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(bg)}:Om;function bg(t){setTimeout(function(){throw t})}function Ns(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(n===0){t.removeChild(i),bi(e);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=i}while(a);bi(e)}function Ds(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ds(a),qu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Sg(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[wl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=qe(t.nextSibling),t===null)break}return null}function xg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qe(t.nextSibling),t===null))return null;return t}function qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function wm(t,e,a){switch(e=kr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var He=new Map,zm=new Set;function Vr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var xa=Z.d;Z.d={f:Eg,r:Ag,D:Og,C:Tg,L:Rg,m:wg,X:_g,S:zg,M:Mg};function Eg(){var t=xa.f(),e=Hr();return t||e}function Ag(t){var e=Dn(t);e!==null&&e.tag===5&&e.type==="form"?e0(e):xa.r(t)}var ol=typeof document>"u"?null:document;function _m(t,e,a){var n=ol;if(n&&typeof e=="string"&&e){var i=Re(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),zm.has(i)||(zm.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),te(e,"link",t),$t(e),n.head.appendChild(e)))}}function Og(t){xa.D(t),_m("dns-prefetch",t,null)}function Tg(t,e){xa.C(t,e),_m("preconnect",t,e)}function Rg(t,e,a){xa.L(t,e,a);var n=ol;if(n&&t&&e){var i='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Re(a.imageSizes)+'"]')):i+='[href="'+Re(t)+'"]';var u=i;switch(e){case"style":u=fl(t);break;case"script":u=dl(t)}He.has(u)||(t=ct({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),He.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(di(u))||e==="script"&&n.querySelector(mi(u))||(e=n.createElement("link"),te(e,"link",t),$t(e),n.head.appendChild(e)))}}function wg(t,e){xa.m(t,e);var a=ol;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Re(n)+'"][href="'+Re(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=dl(t)}if(!He.has(u)&&(t=ct({rel:"modulepreload",href:t},e),He.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mi(u)))return}n=a.createElement("link"),te(n,"link",t),$t(n),a.head.appendChild(n)}}}function zg(t,e,a){xa.S(t,e,a);var n=ol;if(n&&t){var i=jn(n).hoistableStyles,u=fl(t);e=e||"default";var d=i.get(u);if(!d){var y={loading:0,preload:null};if(d=n.querySelector(di(u)))y.loading=5;else{t=ct({rel:"stylesheet",href:t,"data-precedence":e},a),(a=He.get(u))&&js(t,a);var v=d=n.createElement("link");$t(v),te(v,"link",t),v._p=new Promise(function(E,L){v.onload=E,v.onerror=L}),v.addEventListener("load",function(){y.loading|=1}),v.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Qr(d,e,n)}d={type:"stylesheet",instance:d,count:1,state:y},i.set(u,d)}}}function _g(t,e){xa.X(t,e);var a=ol;if(a&&t){var n=jn(a).hoistableScripts,i=dl(t),u=n.get(i);u||(u=a.querySelector(mi(i)),u||(t=ct({src:t,async:!0},e),(e=He.get(i))&&Us(t,e),u=a.createElement("script"),$t(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Mg(t,e){xa.M(t,e);var a=ol;if(a&&t){var n=jn(a).hoistableScripts,i=dl(t),u=n.get(i);u||(u=a.querySelector(mi(i)),u||(t=ct({src:t,async:!0,type:"module"},e),(e=He.get(i))&&Us(t,e),u=a.createElement("script"),$t(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Mm(t,e,a,n){var i=(i=za.current)?Vr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=fl(a.href),a=jn(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fl(a.href);var u=jn(i).hoistableStyles,d=u.get(t);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=i.querySelector(di(t)))&&!u._p&&(d.instance=u,d.state.loading=5),He.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},He.set(t,a),u||Cg(i,t,a,d.state))),e&&n===null)throw Error(s(528,""));return d}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=dl(a),a=jn(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fl(t){return'href="'+Re(t)+'"'}function di(t){return'link[rel="stylesheet"]['+t+"]"}function Cm(t){return ct({},t,{"data-precedence":t.precedence,precedence:null})}function Cg(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),te(e,"link",a),$t(e),t.head.appendChild(e))}function dl(t){return'[src="'+Re(t)+'"]'}function mi(t){return"script[async]"+t}function Nm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(n)return e.instance=n,$t(n),n;var i=ct({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),$t(n),te(n,"style",i),Qr(n,a.precedence,t),e.instance=n;case"stylesheet":i=fl(a.href);var u=t.querySelector(di(i));if(u)return e.state.loading|=4,e.instance=u,$t(u),u;n=Cm(a),(i=He.get(i))&&js(n,i),u=(t.ownerDocument||t).createElement("link"),$t(u);var d=u;return d._p=new Promise(function(y,v){d.onload=y,d.onerror=v}),te(u,"link",n),e.state.loading|=4,Qr(u,a.precedence,t),e.instance=u;case"script":return u=dl(a.src),(i=t.querySelector(mi(u)))?(e.instance=i,$t(i),i):(n=a,(i=He.get(u))&&(n=ct({},a),Us(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),$t(i),te(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Qr(n,a.precedence,t));return e.instance}function Qr(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,d=0;d<n.length;d++){var y=n[d];if(y.dataset.precedence===e)u=y;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function js(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Us(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zr=null;function Dm(t,e,a){if(Zr===null){var n=new Map,i=Zr=new Map;i.set(a,n)}else i=Zr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[wl]||u[ae]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(e)||"";d=t+d;var y=n.get(d);y?y.push(u):n.set(d,[u])}}return n}function jm(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Ng(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Um(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var hi=null;function Dg(){}function jg(t,e,a){if(hi===null)throw Error(s(475));var n=hi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=fl(a.href),u=t.querySelector(di(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Kr.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,$t(u);return}u=t.ownerDocument||t,a=Cm(a),(i=He.get(i))&&js(a,i),u=u.createElement("link"),$t(u);var d=u;d._p=new Promise(function(y,v){d.onload=y,d.onerror=v}),te(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Kr.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Ug(){if(hi===null)throw Error(s(475));var t=hi;return t.stylesheets&&t.count===0&&Hs(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Hs(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Kr(){if(this.count--,this.count===0){if(this.stylesheets)Hs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $r=null;function Hs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$r=new Map,e.forEach(Hg,t),$r=null,Kr.call(t))}function Hg(t,e){if(!(e.state.loading&4)){var a=$r.get(t);if(a)var n=a.get(null);else{a=new Map,$r.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var d=i[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=e.instance,d=i.getAttribute("data-precedence"),u=a.get(d)||n,u===n&&a.set(null,i),a.set(d,i),this.count++,n=Kr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var yi={$$typeof:U,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Lg(t,e,a,n,i,u,d,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.hiddenUpdates=Yu(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Hm(t,e,a,n,i,u,d,y,v,E,L,X){return t=new Lg(t,e,a,d,y,v,E,X),e=1,u===!0&&(e|=24),u=je(3,null,null,e),t.current=u,u.stateNode=t,e=hc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},$c(u),t}function Lm(t){return t?(t=Vn,t):Vn}function Ym(t,e,a,n,i,u){i=Lm(i),n.context===null?n.context=i:n.pendingContext=i,n=Ba(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=qa(t,n,e),a!==null&&(oe(a,t,e),Pl(a,t,e))}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ls(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function qm(t){if(t.tag===13){var e=Na(t,67108864);e!==null&&oe(e,t,67108864),Ls(t,67108864)}}var Jr=!0;function Yg(t,e,a,n){var i=$.T;$.T=null;var u=Z.p;try{Z.p=2,Ys(t,e,a,n)}finally{Z.p=u,$.T=i}}function Bg(t,e,a,n){var i=$.T;$.T=null;var u=Z.p;try{Z.p=8,Ys(t,e,a,n)}finally{Z.p=u,$.T=i}}function Ys(t,e,a,n){if(Jr){var i=Bs(n);if(i===null)Rs(t,e,n,Fr,a),Gm(t,n);else if(Xg(i,t,e,a,n))n.stopPropagation();else if(Gm(t,n),e&4&&-1<qg.indexOf(t)){for(;i!==null;){var u=Dn(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=an(u.pendingLanes);if(d!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var v=1<<31-ge(d);y.entanglements[1]|=v,d&=~v}Je(u),(Dt&6)===0&&(Dr=Ve()+500,si(0))}}break;case 13:y=Na(u,2),y!==null&&oe(y,u,2),Hr(),Ls(u,2)}if(u=Bs(n),u===null&&Rs(t,e,n,Fr,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else Rs(t,e,n,null,a)}}function Bs(t){return t=Qu(t),qs(t)}var Fr=null;function qs(t){if(Fr=null,t=nn(t),t!==null){var e=nt(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=wt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fr=t,null}function Xm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ty()){case ff:return 2;case df:return 8;case Qi:case Ry:return 32;case mf:return 268435456;default:return 32}default:return 32}}var Xs=!1,Ka=null,$a=null,Ja=null,pi=new Map,gi=new Map,Fa=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(e.pointerId)}}function vi(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=Dn(e),e!==null&&qm(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xg(t,e,a,n,i){switch(e){case"focusin":return Ka=vi(Ka,t,e,a,n,i),!0;case"dragenter":return $a=vi($a,t,e,a,n,i),!0;case"mouseover":return Ja=vi(Ja,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return pi.set(u,vi(pi.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,gi.set(u,vi(gi.get(u)||null,t,e,a,n,i)),!0}return!1}function km(t){var e=nn(t.target);if(e!==null){var a=nt(e);if(a!==null){if(e=a.tag,e===13){if(e=wt(a),e!==null){t.blockedOn=e,Uy(t.priority,function(){if(a.tag===13){var n=Ee(),i=Na(a,n);i!==null&&oe(i,a,n),Ls(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Bs(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Vu=n,a.target.dispatchEvent(n),Vu=null}else return e=Dn(a),e!==null&&qm(e),t.blockedOn=a,!1;e.shift()}return!0}function Vm(t,e,a){Wr(t)&&a.delete(e)}function Gg(){Xs=!1,Ka!==null&&Wr(Ka)&&(Ka=null),$a!==null&&Wr($a)&&($a=null),Ja!==null&&Wr(Ja)&&(Ja=null),pi.forEach(Vm),gi.forEach(Vm)}function Pr(t,e){t.blockedOn===e&&(t.blockedOn=null,Xs||(Xs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Gg)))}var Ir=null;function Qm(t){Ir!==t&&(Ir=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ir===t&&(Ir=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(qs(n||a)===null)continue;break}var u=Dn(a);u!==null&&(t.splice(e,3),e-=3,Mc(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function bi(t){function e(v){return Pr(v,t)}Ka!==null&&Pr(Ka,t),$a!==null&&Pr($a,t),Ja!==null&&Pr(Ja,t),pi.forEach(e),gi.forEach(e);for(var a=0;a<Fa.length;a++){var n=Fa[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)km(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],d=i[de]||null;if(typeof u=="function")d||Qm(a);else if(d){var y=null;if(u&&u.hasAttribute("formAction")){if(i=u,d=u[de]||null)y=d.formAction;else if(qs(i)!==null)continue}else y=d.action;typeof y=="function"?a[n+1]=y:(a.splice(n,3),n-=3),Qm(a)}}}function Gs(t){this._internalRoot=t}tu.prototype.render=Gs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=Ee();Ym(a,n,t,e,null,null)},tu.prototype.unmount=Gs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&ul(),Ym(t.current,2,null,t,null,null),Hr(),e[Nn]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Fa.length&&e!==0&&e<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&km(t)}};var Zm=r.version;if(Zm!=="19.0.0")throw Error(s(527,Zm,"19.0.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=G(e),t=t!==null?at(t):null,t=t===null?null:t.stateNode,t};var kg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:$,findFiberByHostInstance:nn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{Ol=eu.inject(kg),pe=eu}catch{}}return xi.createRoot=function(t,e){if(!o(t))throw Error(s(299));var a=!1,n="",i=s0,u=o0,d=f0,y=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=Hm(t,1,!1,null,null,a,n,i,u,d,y,null),t[Nn]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Gs(e)},xi.hydrateRoot=function(t,e,a){if(!o(t))throw Error(s(299));var n=!1,i="",u=s0,d=o0,y=f0,v=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),e=Hm(t,1,!0,e,a??null,n,i,u,d,y,v,E),e.context=Lm(null),a=e.current,n=Ee(),i=Ba(n),i.callback=null,qa(a,i,n),e.current.lanes=n,Rl(e,n),Je(e),t[Nn]=e.current,Ts(t),new tu(e)},xi.version="19.0.0",xi}var nh;function tv(){if(nh)return Qs.exports;nh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Qs.exports=Ig(),Qs.exports}var ev=tv(),Ei={},lh;function av(){if(lh)return Ei;lh=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=m,Ei.serialize=h;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,f=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function m(T,U){const z=new f,N=T.length;if(N<2)return z;const A=(U==null?void 0:U.decode)||b;let C=0;do{const B=T.indexOf("=",C);if(B===-1)break;const Y=T.indexOf(";",C),F=Y===-1?N:Y;if(B>F){C=T.lastIndexOf(";",B-1)+1;continue}const D=g(T,C,B),lt=p(T,B,D),et=T.slice(D,lt);if(z[et]===void 0){let Vt=g(T,B+1,F),$=p(T,F,Vt);const ct=A(T.slice(Vt,$));z[et]=ct}C=F+1}while(C<N);return z}function g(T,U,z){do{const N=T.charCodeAt(U);if(N!==32&&N!==9)return U}while(++U<z);return z}function p(T,U,z){for(;U>z;){const N=T.charCodeAt(--U);if(N!==32&&N!==9)return U+1}return z}function h(T,U,z){const N=(z==null?void 0:z.encode)||encodeURIComponent;if(!l.test(T))throw new TypeError(`argument name is invalid: ${T}`);const A=N(U);if(!r.test(A))throw new TypeError(`argument val is invalid: ${U}`);let C=T+"="+A;if(!z)return C;if(z.maxAge!==void 0){if(!Number.isInteger(z.maxAge))throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);C+="; Max-Age="+z.maxAge}if(z.domain){if(!c.test(z.domain))throw new TypeError(`option domain is invalid: ${z.domain}`);C+="; Domain="+z.domain}if(z.path){if(!s.test(z.path))throw new TypeError(`option path is invalid: ${z.path}`);C+="; Path="+z.path}if(z.expires){if(!R(z.expires)||!Number.isFinite(z.expires.valueOf()))throw new TypeError(`option expires is invalid: ${z.expires}`);C+="; Expires="+z.expires.toUTCString()}if(z.httpOnly&&(C+="; HttpOnly"),z.secure&&(C+="; Secure"),z.partitioned&&(C+="; Partitioned"),z.priority)switch(typeof z.priority=="string"?z.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${z.priority}`)}if(z.sameSite)switch(typeof z.sameSite=="string"?z.sameSite.toLowerCase():z.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${z.sameSite}`)}return C}function b(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function R(T){return o.call(T)==="[object Date]"}return Ei}av();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ih="popstate";function nv(l={}){function r(o,f){let{pathname:m="/",search:g="",hash:p=""}=_n(o.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),fo("",{pathname:m,search:g,hash:p},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(o,f){let m=o.document.querySelector("base"),g="";if(m&&m.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");g=h===-1?p:p.slice(0,h)}return g+"#"+(typeof f=="string"?f:zi(f))}function s(o,f){Xe(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return iv(r,c,s,l)}function jt(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function Xe(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function lv(){return Math.random().toString(36).substring(2,10)}function rh(l,r){return{usr:l.state,key:l.key,idx:r}}function fo(l,r,c=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?_n(r):r,state:c,key:r&&r.key||s||lv()}}function zi({pathname:l="/",search:r="",hash:c=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function _n(l){let r={};if(l){let c=l.indexOf("#");c>=0&&(r.hash=l.substring(c),l=l.substring(0,c));let s=l.indexOf("?");s>=0&&(r.search=l.substring(s),l=l.substring(0,s)),l&&(r.pathname=l)}return r}function iv(l,r,c,s={}){let{window:o=document.defaultView,v5Compat:f=!1}=s,m=o.history,g="POP",p=null,h=b();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function b(){return(m.state||{idx:null}).idx}function R(){g="POP";let A=b(),C=A==null?null:A-h;h=A,p&&p({action:g,location:N.location,delta:C})}function T(A,C){g="PUSH";let B=fo(N.location,A,C);c&&c(B,A),h=b()+1;let Y=rh(B,h),F=N.createHref(B);try{m.pushState(Y,"",F)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(F)}f&&p&&p({action:g,location:N.location,delta:1})}function U(A,C){g="REPLACE";let B=fo(N.location,A,C);c&&c(B,A),h=b();let Y=rh(B,h),F=N.createHref(B);m.replaceState(Y,"",F),f&&p&&p({action:g,location:N.location,delta:0})}function z(A){let C=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof A=="string"?A:zi(A);return B=B.replace(/ $/,"%20"),jt(C,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,C)}let N={get action(){return g},get location(){return l(o,m)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(ih,R),p=A,()=>{o.removeEventListener(ih,R),p=null}},createHref(A){return r(o,A)},createURL:z,encodeLocation(A){let C=z(A);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:T,replace:U,go(A){return m.go(A)}};return N}function l1(l,r,c="/"){return rv(l,r,c,!1)}function rv(l,r,c,s){let o=typeof r=="string"?_n(r):r,f=Aa(o.pathname||"/",c);if(f==null)return null;let m=i1(l);uv(m);let g=null;for(let p=0;g==null&&p<m.length;++p){let h=vv(f);g=pv(m[p],h,s)}return g}function i1(l,r=[],c=[],s=""){let o=(f,m,g)=>{let p={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};p.relativePath.startsWith("/")&&(jt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let h=Ea([s,p.relativePath]),b=c.concat(p);f.children&&f.children.length>0&&(jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),i1(f.children,r,b,h)),!(f.path==null&&!f.index)&&r.push({path:h,score:hv(h,f.index),routesMeta:b})};return l.forEach((f,m)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))o(f,m);else for(let p of r1(f.path))o(f,m,p)}),r}function r1(l){let r=l.split("/");if(r.length===0)return[];let[c,...s]=r,o=c.endsWith("?"),f=c.replace(/\?$/,"");if(s.length===0)return o?[f,""]:[f];let m=r1(s.join("/")),g=[];return g.push(...m.map(p=>p===""?f:[f,p].join("/"))),o&&g.push(...m),g.map(p=>l.startsWith("/")&&p===""?"/":p)}function uv(l){l.sort((r,c)=>r.score!==c.score?c.score-r.score:yv(r.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var cv=/^:[\w-]+$/,sv=3,ov=2,fv=1,dv=10,mv=-2,uh=l=>l==="*";function hv(l,r){let c=l.split("/"),s=c.length;return c.some(uh)&&(s+=mv),r&&(s+=ov),c.filter(o=>!uh(o)).reduce((o,f)=>o+(cv.test(f)?sv:f===""?fv:dv),s)}function yv(l,r){return l.length===r.length&&l.slice(0,-1).every((s,o)=>s===r[o])?l[l.length-1]-r[r.length-1]:0}function pv(l,r,c=!1){let{routesMeta:s}=l,o={},f="/",m=[];for(let g=0;g<s.length;++g){let p=s[g],h=g===s.length-1,b=f==="/"?r:r.slice(f.length)||"/",R=yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},b),T=p.route;if(!R&&h&&c&&!s[s.length-1].route.index&&(R=yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!R)return null;Object.assign(o,R.params),m.push({params:o,pathname:Ea([f,R.pathname]),pathnameBase:Ev(Ea([f,R.pathnameBase])),route:T}),R.pathnameBase!=="/"&&(f=Ea([f,R.pathnameBase]))}return m}function yu(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,s]=gv(l.path,l.caseSensitive,l.end),o=r.match(c);if(!o)return null;let f=o[0],m=f.replace(/(.)\/+$/,"$1"),g=o.slice(1);return{params:s.reduce((h,{paramName:b,isOptional:R},T)=>{if(b==="*"){let z=g[T]||"";m=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const U=g[T];return R&&!U?h[b]=void 0:h[b]=(U||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:m,pattern:l}}function gv(l,r=!1,c=!0){Xe(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],o="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,p)=>(s.push({paramName:g,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),o+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?o+="\\/*$":l!==""&&l!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),s]}function vv(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Xe(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function Aa(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,s=l.charAt(c);return s&&s!=="/"?null:l.slice(c)||"/"}function bv(l,r="/"){let{pathname:c,search:s="",hash:o=""}=typeof l=="string"?_n(l):l;return{pathname:c?c.startsWith("/")?c:Sv(c,r):r,search:Av(s),hash:Ov(o)}}function Sv(l,r){let c=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(o=>{o===".."?c.length>1&&c.pop():o!=="."&&c.push(o)}),c.length>1?c.join("/"):"/"}function Js(l,r,c,s){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xv(l){return l.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function u1(l){let r=xv(l);return r.map((c,s)=>s===r.length-1?c.pathname:c.pathnameBase)}function c1(l,r,c,s=!1){let o;typeof l=="string"?o=_n(l):(o={...l},jt(!o.pathname||!o.pathname.includes("?"),Js("?","pathname","search",o)),jt(!o.pathname||!o.pathname.includes("#"),Js("#","pathname","hash",o)),jt(!o.search||!o.search.includes("#"),Js("#","search","hash",o)));let f=l===""||o.pathname==="",m=f?"/":o.pathname,g;if(m==null)g=c;else{let R=r.length-1;if(!s&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),R-=1;o.pathname=T.join("/")}g=R>=0?r[R]:"/"}let p=bv(o,g),h=m&&m!=="/"&&m.endsWith("/"),b=(f||m===".")&&c.endsWith("/");return!p.pathname.endsWith("/")&&(h||b)&&(p.pathname+="/"),p}var Ea=l=>l.join("/").replace(/\/\/+/g,"/"),Ev=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Av=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Ov=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Tv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var s1=["POST","PUT","PATCH","DELETE"];new Set(s1);var Rv=["GET",...s1];new Set(Rv);var Sl=M.createContext(null);Sl.displayName="DataRouter";var xu=M.createContext(null);xu.displayName="DataRouterState";var o1=M.createContext({isTransitioning:!1});o1.displayName="ViewTransition";var wv=M.createContext(new Map);wv.displayName="Fetchers";var zv=M.createContext(null);zv.displayName="Await";var aa=M.createContext(null);aa.displayName="Navigation";var Ui=M.createContext(null);Ui.displayName="Location";var Ra=M.createContext({outlet:null,matches:[],isDataRoute:!1});Ra.displayName="Route";var qo=M.createContext(null);qo.displayName="RouteError";function _v(l,{relative:r}={}){jt(Hi(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=M.useContext(aa),{hash:o,pathname:f,search:m}=Li(l,{relative:r}),g=f;return c!=="/"&&(g=f==="/"?c:Ea([c,f])),s.createHref({pathname:g,search:m,hash:o})}function Hi(){return M.useContext(Ui)!=null}function Mn(){return jt(Hi(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ui).location}var f1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function d1(l){M.useContext(aa).static||M.useLayoutEffect(l)}function Mv(){let{isDataRoute:l}=M.useContext(Ra);return l?kv():Cv()}function Cv(){jt(Hi(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(Sl),{basename:r,navigator:c}=M.useContext(aa),{matches:s}=M.useContext(Ra),{pathname:o}=Mn(),f=JSON.stringify(u1(s)),m=M.useRef(!1);return d1(()=>{m.current=!0}),M.useCallback((p,h={})=>{if(Xe(m.current,f1),!m.current)return;if(typeof p=="number"){c.go(p);return}let b=c1(p,JSON.parse(f),o,h.relative==="path");l==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:Ea([r,b.pathname])),(h.replace?c.replace:c.push)(b,h.state,h)},[r,c,f,o,l])}M.createContext(null);function Li(l,{relative:r}={}){let{matches:c}=M.useContext(Ra),{pathname:s}=Mn(),o=JSON.stringify(u1(c));return M.useMemo(()=>c1(l,JSON.parse(o),s,r==="path"),[l,o,s,r])}function Nv(l,r){return m1(l,r)}function m1(l,r,c,s){var B;jt(Hi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:f}=M.useContext(aa),{matches:m}=M.useContext(Ra),g=m[m.length-1],p=g?g.params:{},h=g?g.pathname:"/",b=g?g.pathnameBase:"/",R=g&&g.route;{let Y=R&&R.path||"";h1(h,!R||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=Mn(),U;if(r){let Y=typeof r=="string"?_n(r):r;jt(b==="/"||((B=Y.pathname)==null?void 0:B.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),U=Y}else U=T;let z=U.pathname||"/",N=z;if(b!=="/"){let Y=b.replace(/^\//,"").split("/");N="/"+z.replace(/^\//,"").split("/").slice(Y.length).join("/")}let A=!f&&c&&c.matches&&c.matches.length>0?c.matches:l1(l,{pathname:N});Xe(R||A!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Xe(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Lv(A&&A.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:Ea([b,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?b:Ea([b,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),m,c,s);return r&&C?M.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},C):C}function Dv(){let l=Gv(),r=Tv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:f},"ErrorBoundary")," or"," ",M.createElement("code",{style:f},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},r),c?M.createElement("pre",{style:o},c):null,m)}var jv=M.createElement(Dv,null),Uv=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?M.createElement(Ra.Provider,{value:this.props.routeContext},M.createElement(qo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hv({routeContext:l,match:r,children:c}){let s=M.useContext(Sl);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),M.createElement(Ra.Provider,{value:l},c)}function Lv(l,r=[],c=null,s=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let o=l,f=c==null?void 0:c.errors;if(f!=null){let p=o.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let m=!1,g=-1;if(c)for(let p=0;p<o.length;p++){let h=o[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=p),h.route.id){let{loaderData:b,errors:R}=c,T=h.route.loader&&!b.hasOwnProperty(h.route.id)&&(!R||R[h.route.id]===void 0);if(h.route.lazy||T){m=!0,g>=0?o=o.slice(0,g+1):o=[o[0]];break}}}return o.reduceRight((p,h,b)=>{let R,T=!1,U=null,z=null;c&&(R=f&&h.route.id?f[h.route.id]:void 0,U=h.route.errorElement||jv,m&&(g<0&&b===0?(h1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,z=null):g===b&&(T=!0,z=h.route.hydrateFallbackElement||null)));let N=r.concat(o.slice(0,b+1)),A=()=>{let C;return R?C=U:T?C=z:h.route.Component?C=M.createElement(h.route.Component,null):h.route.element?C=h.route.element:C=p,M.createElement(Hv,{match:h,routeContext:{outlet:p,matches:N,isDataRoute:c!=null},children:C})};return c&&(h.route.ErrorBoundary||h.route.errorElement||b===0)?M.createElement(Uv,{location:c.location,revalidation:c.revalidation,component:U,error:R,children:A(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):A()},null)}function Xo(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yv(l){let r=M.useContext(Sl);return jt(r,Xo(l)),r}function Bv(l){let r=M.useContext(xu);return jt(r,Xo(l)),r}function qv(l){let r=M.useContext(Ra);return jt(r,Xo(l)),r}function Go(l){let r=qv(l),c=r.matches[r.matches.length-1];return jt(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function Xv(){return Go("useRouteId")}function Gv(){var s;let l=M.useContext(qo),r=Bv("useRouteError"),c=Go("useRouteError");return l!==void 0?l:(s=r.errors)==null?void 0:s[c]}function kv(){let{router:l}=Yv("useNavigate"),r=Go("useNavigate"),c=M.useRef(!1);return d1(()=>{c.current=!0}),M.useCallback(async(o,f={})=>{Xe(c.current,f1),c.current&&(typeof o=="number"?l.navigate(o):await l.navigate(o,{fromRouteId:r,...f}))},[l,r])}var ch={};function h1(l,r,c){!r&&!ch[l]&&(ch[l]=!0,Xe(!1,c))}M.memo(Vv);function Vv({routes:l,future:r,state:c}){return m1(l,void 0,c,r)}function ml(l){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qv({basename:l="/",children:r=null,location:c,navigationType:s="POP",navigator:o,static:f=!1}){jt(!Hi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=l.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:m,navigator:o,static:f,future:{}}),[m,o,f]);typeof c=="string"&&(c=_n(c));let{pathname:p="/",search:h="",hash:b="",state:R=null,key:T="default"}=c,U=M.useMemo(()=>{let z=Aa(p,m);return z==null?null:{location:{pathname:z,search:h,hash:b,state:R,key:T},navigationType:s}},[m,p,h,b,R,T,s]);return Xe(U!=null,`<Router basename="${m}"> is not able to match the URL "${p}${h}${b}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:M.createElement(aa.Provider,{value:g},M.createElement(Ui.Provider,{children:r,value:U}))}function Zv({children:l,location:r}){return Nv(mo(l),r)}function mo(l,r=[]){let c=[];return M.Children.forEach(l,(s,o)=>{if(!M.isValidElement(s))return;let f=[...r,o];if(s.type===M.Fragment){c.push.apply(c,mo(s.props.children,f));return}jt(s.type===ml,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let m={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(m.children=mo(s.props.children,f)),c.push(m)}),c}var cu="get",su="application/x-www-form-urlencoded";function Eu(l){return l!=null&&typeof l.tagName=="string"}function Kv(l){return Eu(l)&&l.tagName.toLowerCase()==="button"}function $v(l){return Eu(l)&&l.tagName.toLowerCase()==="form"}function Jv(l){return Eu(l)&&l.tagName.toLowerCase()==="input"}function Fv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Wv(l,r){return l.button===0&&(!r||r==="_self")&&!Fv(l)}var au=null;function Pv(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var Iv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fs(l){return l!=null&&!Iv.has(l)?(Xe(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`),null):l}function tb(l,r){let c,s,o,f,m;if($v(l)){let g=l.getAttribute("action");s=g?Aa(g,r):null,c=l.getAttribute("method")||cu,o=Fs(l.getAttribute("enctype"))||su,f=new FormData(l)}else if(Kv(l)||Jv(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=l.getAttribute("formaction")||g.getAttribute("action");if(s=p?Aa(p,r):null,c=l.getAttribute("formmethod")||g.getAttribute("method")||cu,o=Fs(l.getAttribute("formenctype"))||Fs(g.getAttribute("enctype"))||su,f=new FormData(g,l),!Pv()){let{name:h,type:b,value:R}=l;if(b==="image"){let T=h?`${h}.`:"";f.append(`${T}x`,"0"),f.append(`${T}y`,"0")}else h&&f.append(h,R)}}else{if(Eu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=cu,s=null,o=su,m=l}return f&&o==="text/plain"&&(m=f,f=void 0),{action:s,method:c.toLowerCase(),encType:o,formData:f,body:m}}function ko(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}async function eb(l,r){if(l.id in r)return r[l.id];try{let c=await import(l.module);return r[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ab(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function nb(l,r,c){let s=await Promise.all(l.map(async o=>{let f=r.routes[o.route.id];if(f){let m=await eb(f,c);return m.links?m.links():[]}return[]}));return ub(s.flat(1).filter(ab).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function sh(l,r,c,s,o,f){let m=(p,h)=>c[h]?p.route.id!==c[h].route.id:!0,g=(p,h)=>{var b;return c[h].pathname!==p.pathname||((b=c[h].route.path)==null?void 0:b.endsWith("*"))&&c[h].params["*"]!==p.params["*"]};return f==="assets"?r.filter((p,h)=>m(p,h)||g(p,h)):f==="data"?r.filter((p,h)=>{var R;let b=s.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(m(p,h)||g(p,h))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((R=c[0])==null?void 0:R.params)||{},nextUrl:new URL(l,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function lb(l,r,{includeHydrateFallback:c}={}){return ib(l.map(s=>{let o=r.routes[s.route.id];if(!o)return[];let f=[o.module];return o.clientActionModule&&(f=f.concat(o.clientActionModule)),o.clientLoaderModule&&(f=f.concat(o.clientLoaderModule)),c&&o.hydrateFallbackModule&&(f=f.concat(o.hydrateFallbackModule)),o.imports&&(f=f.concat(o.imports)),f}).flat(1))}function ib(l){return[...new Set(l)]}function rb(l){let r={},c=Object.keys(l).sort();for(let s of c)r[s]=l[s];return r}function ub(l,r){let c=new Set;return new Set(r),l.reduce((s,o)=>{let f=JSON.stringify(rb(o));return c.has(f)||(c.add(f),s.push({key:f,link:o})),s},[])}function cb(l,r){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname="_root.data":r&&Aa(c.pathname,r)==="/"?c.pathname=`${r.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function y1(){let l=M.useContext(Sl);return ko(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function sb(){let l=M.useContext(xu);return ko(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Vo=M.createContext(void 0);Vo.displayName="FrameworkContext";function p1(){let l=M.useContext(Vo);return ko(l,"You must render this element inside a <HydratedRouter> element"),l}function ob(l,r){let c=M.useContext(Vo),[s,o]=M.useState(!1),[f,m]=M.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:h,onMouseLeave:b,onTouchStart:R}=r,T=M.useRef(null);M.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let N=C=>{C.forEach(B=>{m(B.isIntersecting)})},A=new IntersectionObserver(N,{threshold:.5});return T.current&&A.observe(T.current),()=>{A.disconnect()}}},[l]),M.useEffect(()=>{if(s){let N=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(N)}}},[s]);let U=()=>{o(!0)},z=()=>{o(!1),m(!1)};return c?l!=="intent"?[f,T,{}]:[f,T,{onFocus:Ai(g,U),onBlur:Ai(p,z),onMouseEnter:Ai(h,U),onMouseLeave:Ai(b,z),onTouchStart:Ai(R,U)}]:[!1,T,{}]}function Ai(l,r){return c=>{l&&l(c),c.defaultPrevented||r(c)}}function fb({page:l,...r}){let{router:c}=y1(),s=M.useMemo(()=>l1(c.routes,l,c.basename),[c.routes,l,c.basename]);return s?M.createElement(mb,{page:l,matches:s,...r}):null}function db(l){let{manifest:r,routeModules:c}=p1(),[s,o]=M.useState([]);return M.useEffect(()=>{let f=!1;return nb(l,r,c).then(m=>{f||o(m)}),()=>{f=!0}},[l,r,c]),s}function mb({page:l,matches:r,...c}){let s=Mn(),{manifest:o,routeModules:f}=p1(),{basename:m}=y1(),{loaderData:g,matches:p}=sb(),h=M.useMemo(()=>sh(l,r,p,o,s,"data"),[l,r,p,o,s]),b=M.useMemo(()=>sh(l,r,p,o,s,"assets"),[l,r,p,o,s]),R=M.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let z=new Set,N=!1;if(r.forEach(C=>{var Y;let B=o.routes[C.route.id];!B||!B.hasLoader||(!h.some(F=>F.route.id===C.route.id)&&C.route.id in g&&((Y=f[C.route.id])!=null&&Y.shouldRevalidate)||B.hasClientLoader?N=!0:z.add(C.route.id))}),z.size===0)return[];let A=cb(l,m);return N&&z.size>0&&A.searchParams.set("_routes",r.filter(C=>z.has(C.route.id)).map(C=>C.route.id).join(",")),[A.pathname+A.search]},[m,g,s,o,h,r,l,f]),T=M.useMemo(()=>lb(b,o),[b,o]),U=db(b);return M.createElement(M.Fragment,null,R.map(z=>M.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...c})),T.map(z=>M.createElement("link",{key:z,rel:"modulepreload",href:z,...c})),U.map(({key:z,link:N})=>M.createElement("link",{key:z,...N})))}function hb(...l){return r=>{l.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{g1&&(window.__reactRouterVersion="7.4.0")}catch{}function yb({basename:l,children:r,window:c}){let s=M.useRef();s.current==null&&(s.current=nv({window:c,v5Compat:!0}));let o=s.current,[f,m]=M.useState({action:o.action,location:o.location}),g=M.useCallback(p=>{M.startTransition(()=>m(p))},[m]);return M.useLayoutEffect(()=>o.listen(g),[o,g]),M.createElement(Qv,{basename:l,children:r,location:f.location,navigationType:f.action,navigator:o})}var v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tn=M.forwardRef(function({onClick:r,discover:c="render",prefetch:s="none",relative:o,reloadDocument:f,replace:m,state:g,target:p,to:h,preventScrollReset:b,viewTransition:R,...T},U){let{basename:z}=M.useContext(aa),N=typeof h=="string"&&v1.test(h),A,C=!1;if(typeof h=="string"&&N&&(A=h,g1))try{let $=new URL(window.location.href),ct=h.startsWith("//")?new URL($.protocol+h):new URL(h),ue=Aa(ct.pathname,z);ct.origin===$.origin&&ue!=null?h=ue+ct.search+ct.hash:C=!0}catch{Xe(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=_v(h,{relative:o}),[Y,F,D]=ob(s,T),lt=bb(h,{replace:m,state:g,target:p,preventScrollReset:b,relative:o,viewTransition:R});function et($){r&&r($),$.defaultPrevented||lt($)}let Vt=M.createElement("a",{...T,...D,href:A||B,onClick:C||f?r:et,ref:hb(U,F),target:p,"data-discover":!N&&c==="render"?"true":void 0});return Y&&!N?M.createElement(M.Fragment,null,Vt,M.createElement(fb,{page:B})):Vt});Tn.displayName="Link";var pb=M.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:s="",end:o=!1,style:f,to:m,viewTransition:g,children:p,...h},b){let R=Li(m,{relative:h.relative}),T=Mn(),U=M.useContext(xu),{navigator:z,basename:N}=M.useContext(aa),A=U!=null&&Ob(R)&&g===!0,C=z.encodeLocation?z.encodeLocation(R).pathname:R.pathname,B=T.pathname,Y=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;c||(B=B.toLowerCase(),Y=Y?Y.toLowerCase():null,C=C.toLowerCase()),Y&&N&&(Y=Aa(Y,N)||Y);const F=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let D=B===C||!o&&B.startsWith(C)&&B.charAt(F)==="/",lt=Y!=null&&(Y===C||!o&&Y.startsWith(C)&&Y.charAt(C.length)==="/"),et={isActive:D,isPending:lt,isTransitioning:A},Vt=D?r:void 0,$;typeof s=="function"?$=s(et):$=[s,D?"active":null,lt?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let ct=typeof f=="function"?f(et):f;return M.createElement(Tn,{...h,"aria-current":Vt,className:$,ref:b,style:ct,to:m,viewTransition:g},typeof p=="function"?p(et):p)});pb.displayName="NavLink";var gb=M.forwardRef(({discover:l="render",fetcherKey:r,navigate:c,reloadDocument:s,replace:o,state:f,method:m=cu,action:g,onSubmit:p,relative:h,preventScrollReset:b,viewTransition:R,...T},U)=>{let z=Eb(),N=Ab(g,{relative:h}),A=m.toLowerCase()==="get"?"get":"post",C=typeof g=="string"&&v1.test(g),B=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let F=Y.nativeEvent.submitter,D=(F==null?void 0:F.getAttribute("formmethod"))||m;z(F||Y.currentTarget,{fetcherKey:r,method:D,navigate:c,replace:o,state:f,relative:h,preventScrollReset:b,viewTransition:R})};return M.createElement("form",{ref:U,method:A,action:N,onSubmit:s?p:B,...T,"data-discover":!C&&l==="render"?"true":void 0})});gb.displayName="Form";function vb(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function b1(l){let r=M.useContext(Sl);return jt(r,vb(l)),r}function bb(l,{target:r,replace:c,state:s,preventScrollReset:o,relative:f,viewTransition:m}={}){let g=Mv(),p=Mn(),h=Li(l,{relative:f});return M.useCallback(b=>{if(Wv(b,r)){b.preventDefault();let R=c!==void 0?c:zi(p)===zi(h);g(l,{replace:R,state:s,preventScrollReset:o,relative:f,viewTransition:m})}},[p,g,h,c,s,r,l,o,f,m])}var Sb=0,xb=()=>`__${String(++Sb)}__`;function Eb(){let{router:l}=b1("useSubmit"),{basename:r}=M.useContext(aa),c=Xv();return M.useCallback(async(s,o={})=>{let{action:f,method:m,encType:g,formData:p,body:h}=tb(s,r);if(o.navigate===!1){let b=o.fetcherKey||xb();await l.fetch(b,c,o.action||f,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||m,formEncType:o.encType||g,flushSync:o.flushSync})}else await l.navigate(o.action||f,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||m,formEncType:o.encType||g,replace:o.replace,state:o.state,fromRouteId:c,flushSync:o.flushSync,viewTransition:o.viewTransition})},[l,r,c])}function Ab(l,{relative:r}={}){let{basename:c}=M.useContext(aa),s=M.useContext(Ra);jt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),f={...Li(l||".",{relative:r})},m=Mn();if(l==null){f.search=m.search;let g=new URLSearchParams(f.search),p=g.getAll("index");if(p.some(b=>b==="")){g.delete("index"),p.filter(R=>R).forEach(R=>g.append("index",R));let b=g.toString();f.search=b?`?${b}`:""}}return(!l||l===".")&&o.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:Ea([c,f.pathname])),zi(f)}function Ob(l,r={}){let c=M.useContext(o1);jt(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=b1("useViewTransitionState"),o=Li(l,{relative:r.relative});if(!c.isTransitioning)return!1;let f=Aa(c.currentLocation.pathname,s)||c.currentLocation.pathname,m=Aa(c.nextLocation.pathname,s)||c.nextLocation.pathname;return yu(o.pathname,m)!=null||yu(o.pathname,f)!=null}new TextEncoder;function Tb(l){if(l.sheet)return l.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===l)return document.styleSheets[r]}function Rb(l){var r=document.createElement("style");return r.setAttribute("data-emotion",l.key),l.nonce!==void 0&&r.setAttribute("nonce",l.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var wb=function(){function l(c){var s=this;this._insertTag=function(o){var f;s.tags.length===0?s.insertionPoint?f=s.insertionPoint.nextSibling:s.prepend?f=s.container.firstChild:f=s.before:f=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(o,f),s.tags.push(o)},this.isSpeedy=c.speedy===void 0?!0:c.speedy,this.tags=[],this.ctr=0,this.nonce=c.nonce,this.key=c.key,this.container=c.container,this.prepend=c.prepend,this.insertionPoint=c.insertionPoint,this.before=null}var r=l.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Rb(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var f=Tb(o);try{f.insertRule(s,f.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var o;return(o=s.parentNode)==null?void 0:o.removeChild(s)}),this.tags=[],this.ctr=0},l}(),ie="-ms-",pu="-moz-",bt="-webkit-",S1="comm",Qo="rule",Zo="decl",zb="@import",x1="@keyframes",_b="@layer",Mb=Math.abs,Au=String.fromCharCode,Cb=Object.assign;function Nb(l,r){return ee(l,0)^45?(((r<<2^ee(l,0))<<2^ee(l,1))<<2^ee(l,2))<<2^ee(l,3):0}function E1(l){return l.trim()}function Db(l,r){return(l=r.exec(l))?l[0]:l}function St(l,r,c){return l.replace(r,c)}function ho(l,r){return l.indexOf(r)}function ee(l,r){return l.charCodeAt(r)|0}function _i(l,r,c){return l.slice(r,c)}function Fe(l){return l.length}function Ko(l){return l.length}function nu(l,r){return r.push(l),l}function jb(l,r){return l.map(r).join("")}var Ou=1,vl=1,A1=0,ye=0,kt=0,xl="";function Tu(l,r,c,s,o,f,m){return{value:l,root:r,parent:c,type:s,props:o,children:f,line:Ou,column:vl,length:m,return:""}}function Oi(l,r){return Cb(Tu("",null,null,"",null,null,0),l,{length:-l.length},r)}function Ub(){return kt}function Hb(){return kt=ye>0?ee(xl,--ye):0,vl--,kt===10&&(vl=1,Ou--),kt}function Ae(){return kt=ye<A1?ee(xl,ye++):0,vl++,kt===10&&(vl=1,Ou++),kt}function ea(){return ee(xl,ye)}function ou(){return ye}function Yi(l,r){return _i(xl,l,r)}function Mi(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O1(l){return Ou=vl=1,A1=Fe(xl=l),ye=0,[]}function T1(l){return xl="",l}function fu(l){return E1(Yi(ye-1,yo(l===91?l+2:l===40?l+1:l)))}function Lb(l){for(;(kt=ea())&&kt<33;)Ae();return Mi(l)>2||Mi(kt)>3?"":" "}function Yb(l,r){for(;--r&&Ae()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Yi(l,ou()+(r<6&&ea()==32&&Ae()==32))}function yo(l){for(;Ae();)switch(kt){case l:return ye;case 34:case 39:l!==34&&l!==39&&yo(kt);break;case 40:l===41&&yo(l);break;case 92:Ae();break}return ye}function Bb(l,r){for(;Ae()&&l+kt!==57;)if(l+kt===84&&ea()===47)break;return"/*"+Yi(r,ye-1)+"*"+Au(l===47?l:Ae())}function qb(l){for(;!Mi(ea());)Ae();return Yi(l,ye)}function Xb(l){return T1(du("",null,null,null,[""],l=O1(l),0,[0],l))}function du(l,r,c,s,o,f,m,g,p){for(var h=0,b=0,R=m,T=0,U=0,z=0,N=1,A=1,C=1,B=0,Y="",F=o,D=f,lt=s,et=Y;A;)switch(z=B,B=Ae()){case 40:if(z!=108&&ee(et,R-1)==58){ho(et+=St(fu(B),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:et+=fu(B);break;case 9:case 10:case 13:case 32:et+=Lb(z);break;case 92:et+=Yb(ou()-1,7);continue;case 47:switch(ea()){case 42:case 47:nu(Gb(Bb(Ae(),ou()),r,c),p);break;default:et+="/"}break;case 123*N:g[h++]=Fe(et)*C;case 125*N:case 59:case 0:switch(B){case 0:case 125:A=0;case 59+b:C==-1&&(et=St(et,/\f/g,"")),U>0&&Fe(et)-R&&nu(U>32?fh(et+";",s,c,R-1):fh(St(et," ","")+";",s,c,R-2),p);break;case 59:et+=";";default:if(nu(lt=oh(et,r,c,h,b,o,g,Y,F=[],D=[],R),f),B===123)if(b===0)du(et,r,lt,lt,F,f,R,g,D);else switch(T===99&&ee(et,3)===110?100:T){case 100:case 108:case 109:case 115:du(l,lt,lt,s&&nu(oh(l,lt,lt,0,0,o,g,Y,o,F=[],R),D),o,D,R,g,s?F:D);break;default:du(et,lt,lt,lt,[""],D,0,g,D)}}h=b=U=0,N=C=1,Y=et="",R=m;break;case 58:R=1+Fe(et),U=z;default:if(N<1){if(B==123)--N;else if(B==125&&N++==0&&Hb()==125)continue}switch(et+=Au(B),B*N){case 38:C=b>0?1:(et+="\f",-1);break;case 44:g[h++]=(Fe(et)-1)*C,C=1;break;case 64:ea()===45&&(et+=fu(Ae())),T=ea(),b=R=Fe(Y=et+=qb(ou())),B++;break;case 45:z===45&&Fe(et)==2&&(N=0)}}return f}function oh(l,r,c,s,o,f,m,g,p,h,b){for(var R=o-1,T=o===0?f:[""],U=Ko(T),z=0,N=0,A=0;z<s;++z)for(var C=0,B=_i(l,R+1,R=Mb(N=m[z])),Y=l;C<U;++C)(Y=E1(N>0?T[C]+" "+B:St(B,/&\f/g,T[C])))&&(p[A++]=Y);return Tu(l,r,c,o===0?Qo:g,p,h,b)}function Gb(l,r,c){return Tu(l,r,c,S1,Au(Ub()),_i(l,2,-2),0)}function fh(l,r,c,s){return Tu(l,r,c,Zo,_i(l,0,s),_i(l,s+1,-1),s)}function pl(l,r){for(var c="",s=Ko(l),o=0;o<s;o++)c+=r(l[o],o,l,r)||"";return c}function kb(l,r,c,s){switch(l.type){case _b:if(l.children.length)break;case zb:case Zo:return l.return=l.return||l.value;case S1:return"";case x1:return l.return=l.value+"{"+pl(l.children,s)+"}";case Qo:l.value=l.props.join(",")}return Fe(c=pl(l.children,s))?l.return=l.value+"{"+c+"}":""}function Vb(l){var r=Ko(l);return function(c,s,o,f){for(var m="",g=0;g<r;g++)m+=l[g](c,s,o,f)||"";return m}}function Qb(l){return function(r){r.root||(r=r.return)&&l(r)}}function Zb(l){var r=Object.create(null);return function(c){return r[c]===void 0&&(r[c]=l(c)),r[c]}}var Kb=function(r,c,s){for(var o=0,f=0;o=f,f=ea(),o===38&&f===12&&(c[s]=1),!Mi(f);)Ae();return Yi(r,ye)},$b=function(r,c){var s=-1,o=44;do switch(Mi(o)){case 0:o===38&&ea()===12&&(c[s]=1),r[s]+=Kb(ye-1,c,s);break;case 2:r[s]+=fu(o);break;case 4:if(o===44){r[++s]=ea()===58?"&\f":"",c[s]=r[s].length;break}default:r[s]+=Au(o)}while(o=Ae());return r},Jb=function(r,c){return T1($b(O1(r),c))},dh=new WeakMap,Fb=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var c=r.value,s=r.parent,o=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&c.charCodeAt(0)!==58&&!dh.get(s))&&!o){dh.set(r,!0);for(var f=[],m=Jb(c,f),g=s.props,p=0,h=0;p<m.length;p++)for(var b=0;b<g.length;b++,h++)r.props[h]=f[p]?m[p].replace(/&\f/g,g[b]):g[b]+" "+m[p]}}},Wb=function(r){if(r.type==="decl"){var c=r.value;c.charCodeAt(0)===108&&c.charCodeAt(2)===98&&(r.return="",r.value="")}};function R1(l,r){switch(Nb(l,r)){case 5103:return bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+l+pu+l+ie+l+l;case 6828:case 4268:return bt+l+ie+l+l;case 6165:return bt+l+ie+"flex-"+l+l;case 5187:return bt+l+St(l,/(\w+).+(:[^]+)/,bt+"box-$1$2"+ie+"flex-$1$2")+l;case 5443:return bt+l+ie+"flex-item-"+St(l,/flex-|-self/,"")+l;case 4675:return bt+l+ie+"flex-line-pack"+St(l,/align-content|flex-|-self/,"")+l;case 5548:return bt+l+ie+St(l,"shrink","negative")+l;case 5292:return bt+l+ie+St(l,"basis","preferred-size")+l;case 6060:return bt+"box-"+St(l,"-grow","")+bt+l+ie+St(l,"grow","positive")+l;case 4554:return bt+St(l,/([^-])(transform)/g,"$1"+bt+"$2")+l;case 6187:return St(St(St(l,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),l,"")+l;case 5495:case 3959:return St(l,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return St(St(l,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+l+l;case 4095:case 3583:case 4068:case 2532:return St(l,/(.+)-inline(.+)/,bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fe(l)-1-r>6)switch(ee(l,r+1)){case 109:if(ee(l,r+4)!==45)break;case 102:return St(l,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+pu+(ee(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~ho(l,"stretch")?R1(St(l,"stretch","fill-available"),r)+l:l}break;case 4949:if(ee(l,r+1)!==115)break;case 6444:switch(ee(l,Fe(l)-3-(~ho(l,"!important")&&10))){case 107:return St(l,":",":"+bt)+l;case 101:return St(l,/(.+:)([^;!]+)(;|!.+)?/,"$1"+bt+(ee(l,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+ie+"$2box$3")+l}break;case 5936:switch(ee(l,r+11)){case 114:return bt+l+ie+St(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return bt+l+ie+St(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return bt+l+ie+St(l,/[svh]\w+-[tblr]{2}/,"lr")+l}return bt+l+ie+l+l}return l}var Pb=function(r,c,s,o){if(r.length>-1&&!r.return)switch(r.type){case Zo:r.return=R1(r.value,r.length);break;case x1:return pl([Oi(r,{value:St(r.value,"@","@"+bt)})],o);case Qo:if(r.length)return jb(r.props,function(f){switch(Db(f,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return pl([Oi(r,{props:[St(f,/:(read-\w+)/,":"+pu+"$1")]})],o);case"::placeholder":return pl([Oi(r,{props:[St(f,/:(plac\w+)/,":"+bt+"input-$1")]}),Oi(r,{props:[St(f,/:(plac\w+)/,":"+pu+"$1")]}),Oi(r,{props:[St(f,/:(plac\w+)/,ie+"input-$1")]})],o)}return""})}},Ib=[Pb],t2=function(r){var c=r.key;if(c==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(N){var A=N.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(N),N.setAttribute("data-s",""))})}var o=r.stylisPlugins||Ib,f={},m,g=[];m=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+c+' "]'),function(N){for(var A=N.getAttribute("data-emotion").split(" "),C=1;C<A.length;C++)f[A[C]]=!0;g.push(N)});var p,h=[Fb,Wb];{var b,R=[kb,Qb(function(N){b.insert(N)})],T=Vb(h.concat(o,R)),U=function(A){return pl(Xb(A),T)};p=function(A,C,B,Y){b=B,U(A?A+"{"+C.styles+"}":C.styles),Y&&(z.inserted[C.name]=!0)}}var z={key:c,sheet:new wb({key:c,container:m,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:f,registered:{},insert:p};return z.sheet.hydrate(g),z},Ws={exports:{}},Et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function e2(){if(mh)return Et;mh=1;var l=typeof Symbol=="function"&&Symbol.for,r=l?Symbol.for("react.element"):60103,c=l?Symbol.for("react.portal"):60106,s=l?Symbol.for("react.fragment"):60107,o=l?Symbol.for("react.strict_mode"):60108,f=l?Symbol.for("react.profiler"):60114,m=l?Symbol.for("react.provider"):60109,g=l?Symbol.for("react.context"):60110,p=l?Symbol.for("react.async_mode"):60111,h=l?Symbol.for("react.concurrent_mode"):60111,b=l?Symbol.for("react.forward_ref"):60112,R=l?Symbol.for("react.suspense"):60113,T=l?Symbol.for("react.suspense_list"):60120,U=l?Symbol.for("react.memo"):60115,z=l?Symbol.for("react.lazy"):60116,N=l?Symbol.for("react.block"):60121,A=l?Symbol.for("react.fundamental"):60117,C=l?Symbol.for("react.responder"):60118,B=l?Symbol.for("react.scope"):60119;function Y(D){if(typeof D=="object"&&D!==null){var lt=D.$$typeof;switch(lt){case r:switch(D=D.type,D){case p:case h:case s:case f:case o:case R:return D;default:switch(D=D&&D.$$typeof,D){case g:case b:case z:case U:case m:return D;default:return lt}}case c:return lt}}}function F(D){return Y(D)===h}return Et.AsyncMode=p,Et.ConcurrentMode=h,Et.ContextConsumer=g,Et.ContextProvider=m,Et.Element=r,Et.ForwardRef=b,Et.Fragment=s,Et.Lazy=z,Et.Memo=U,Et.Portal=c,Et.Profiler=f,Et.StrictMode=o,Et.Suspense=R,Et.isAsyncMode=function(D){return F(D)||Y(D)===p},Et.isConcurrentMode=F,Et.isContextConsumer=function(D){return Y(D)===g},Et.isContextProvider=function(D){return Y(D)===m},Et.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===r},Et.isForwardRef=function(D){return Y(D)===b},Et.isFragment=function(D){return Y(D)===s},Et.isLazy=function(D){return Y(D)===z},Et.isMemo=function(D){return Y(D)===U},Et.isPortal=function(D){return Y(D)===c},Et.isProfiler=function(D){return Y(D)===f},Et.isStrictMode=function(D){return Y(D)===o},Et.isSuspense=function(D){return Y(D)===R},Et.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===s||D===h||D===f||D===o||D===R||D===T||typeof D=="object"&&D!==null&&(D.$$typeof===z||D.$$typeof===U||D.$$typeof===m||D.$$typeof===g||D.$$typeof===b||D.$$typeof===A||D.$$typeof===C||D.$$typeof===B||D.$$typeof===N)},Et.typeOf=Y,Et}var hh;function a2(){return hh||(hh=1,Ws.exports=e2()),Ws.exports}var Ps,yh;function n2(){if(yh)return Ps;yh=1;var l=a2(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};f[l.ForwardRef]=s,f[l.Memo]=o;function m(z){return l.isMemo(z)?o:f[z.$$typeof]||r}var g=Object.defineProperty,p=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,T=Object.prototype;function U(z,N,A){if(typeof N!="string"){if(T){var C=R(N);C&&C!==T&&U(z,C,A)}var B=p(N);h&&(B=B.concat(h(N)));for(var Y=m(z),F=m(N),D=0;D<B.length;++D){var lt=B[D];if(!c[lt]&&!(A&&A[lt])&&!(F&&F[lt])&&!(Y&&Y[lt])){var et=b(N,lt);try{g(z,lt,et)}catch{}}}}return z}return Ps=U,Ps}n2();var l2=!0;function w1(l,r,c){var s="";return c.split(" ").forEach(function(o){l[o]!==void 0?r.push(l[o]+";"):o&&(s+=o+" ")}),s}var $o=function(r,c,s){var o=r.key+"-"+c.name;(s===!1||l2===!1)&&r.registered[o]===void 0&&(r.registered[o]=c.styles)},z1=function(r,c,s){$o(r,c,s);var o=r.key+"-"+c.name;if(r.inserted[c.name]===void 0){var f=c;do r.insert(c===f?"."+o:"",f,r.sheet,!0),f=f.next;while(f!==void 0)}};function i2(l){for(var r=0,c,s=0,o=l.length;o>=4;++s,o-=4)c=l.charCodeAt(s)&255|(l.charCodeAt(++s)&255)<<8|(l.charCodeAt(++s)&255)<<16|(l.charCodeAt(++s)&255)<<24,c=(c&65535)*1540483477+((c>>>16)*59797<<16),c^=c>>>24,r=(c&65535)*1540483477+((c>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(o){case 3:r^=(l.charCodeAt(s+2)&255)<<16;case 2:r^=(l.charCodeAt(s+1)&255)<<8;case 1:r^=l.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var r2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u2=/[A-Z]|^ms/g,c2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_1=function(r){return r.charCodeAt(1)===45},ph=function(r){return r!=null&&typeof r!="boolean"},Is=Zb(function(l){return _1(l)?l:l.replace(u2,"-$&").toLowerCase()}),gh=function(r,c){switch(r){case"animation":case"animationName":if(typeof c=="string")return c.replace(c2,function(s,o,f){return We={name:o,styles:f,next:We},o})}return r2[r]!==1&&!_1(r)&&typeof c=="number"&&c!==0?c+"px":c};function Ci(l,r,c){if(c==null)return"";var s=c;if(s.__emotion_styles!==void 0)return s;switch(typeof c){case"boolean":return"";case"object":{var o=c;if(o.anim===1)return We={name:o.name,styles:o.styles,next:We},o.name;var f=c;if(f.styles!==void 0){var m=f.next;if(m!==void 0)for(;m!==void 0;)We={name:m.name,styles:m.styles,next:We},m=m.next;var g=f.styles+";";return g}return s2(l,r,c)}case"function":{if(l!==void 0){var p=We,h=c(l);return We=p,Ci(l,r,h)}break}}var b=c;if(r==null)return b;var R=r[b];return R!==void 0?R:b}function s2(l,r,c){var s="";if(Array.isArray(c))for(var o=0;o<c.length;o++)s+=Ci(l,r,c[o])+";";else for(var f in c){var m=c[f];if(typeof m!="object"){var g=m;r!=null&&r[g]!==void 0?s+=f+"{"+r[g]+"}":ph(g)&&(s+=Is(f)+":"+gh(f,g)+";")}else if(Array.isArray(m)&&typeof m[0]=="string"&&(r==null||r[m[0]]===void 0))for(var p=0;p<m.length;p++)ph(m[p])&&(s+=Is(f)+":"+gh(f,m[p])+";");else{var h=Ci(l,r,m);switch(f){case"animation":case"animationName":{s+=Is(f)+":"+h+";";break}default:s+=f+"{"+h+"}"}}}return s}var vh=/label:\s*([^\s;{]+)\s*(;|$)/g,We;function Jo(l,r,c){if(l.length===1&&typeof l[0]=="object"&&l[0]!==null&&l[0].styles!==void 0)return l[0];var s=!0,o="";We=void 0;var f=l[0];if(f==null||f.raw===void 0)s=!1,o+=Ci(c,r,f);else{var m=f;o+=m[0]}for(var g=1;g<l.length;g++)if(o+=Ci(c,r,l[g]),s){var p=f;o+=p[g]}vh.lastIndex=0;for(var h="",b;(b=vh.exec(o))!==null;)h+="-"+b[1];var R=i2(o)+h;return{name:R,styles:o,next:We}}var o2=function(r){return r()},f2=Wm.useInsertionEffect?Wm.useInsertionEffect:!1,M1=f2||o2,C1=M.createContext(typeof HTMLElement<"u"?t2({key:"css"}):null);C1.Provider;var N1=function(r){return M.forwardRef(function(c,s){var o=M.useContext(C1);return r(c,o,s)})},D1=M.createContext({}),Ru={}.hasOwnProperty,po="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",j1=function(r,c){var s={};for(var o in c)Ru.call(c,o)&&(s[o]=c[o]);return s[po]=r,s},d2=function(r){var c=r.cache,s=r.serialized,o=r.isStringTag;return $o(c,s,o),M1(function(){return z1(c,s,o)}),null},m2=N1(function(l,r,c){var s=l.css;typeof s=="string"&&r.registered[s]!==void 0&&(s=r.registered[s]);var o=l[po],f=[s],m="";typeof l.className=="string"?m=w1(r.registered,f,l.className):l.className!=null&&(m=l.className+" ");var g=Jo(f,void 0,M.useContext(D1));m+=r.key+"-"+g.name;var p={};for(var h in l)Ru.call(l,h)&&h!=="css"&&h!==po&&(p[h]=l[h]);return p.className=m,c&&(p.ref=c),M.createElement(M.Fragment,null,M.createElement(d2,{cache:r,serialized:g,isStringTag:typeof o=="string"}),M.createElement(o,p))}),U1=m2,h2=j.Fragment,Kt=function(r,c,s){return Ru.call(c,"css")?j.jsx(U1,j1(r,c),s):j.jsx(r,c,s)},bh=function(r,c){var s=arguments;if(c==null||!Ru.call(c,"css"))return M.createElement.apply(void 0,s);var o=s.length,f=new Array(o);f[0]=U1,f[1]=j1(r,c);for(var m=2;m<o;m++)f[m]=s[m];return M.createElement.apply(null,f)};(function(l){var r;r||(r=l.JSX||(l.JSX={}))})(bh||(bh={}));function H1(){for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return Jo(r)}function V(){var l=H1.apply(void 0,arguments),r="animation-"+l.name;return{name:r,styles:"@keyframes "+r+"{"+l.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var y2=function l(r){for(var c=r.length,s=0,o="";s<c;s++){var f=r[s];if(f!=null){var m=void 0;switch(typeof f){case"boolean":break;case"object":{if(Array.isArray(f))m=l(f);else{m="";for(var g in f)f[g]&&g&&(m&&(m+=" "),m+=g)}break}default:m=f}m&&(o&&(o+=" "),o+=m)}}return o};function p2(l,r,c){var s=[],o=w1(l,s,c);return s.length<2?c:o+r(s)}var g2=function(r){var c=r.cache,s=r.serializedArr;return M1(function(){for(var o=0;o<s.length;o++)z1(c,s[o],!1)}),null},to=N1(function(l,r){var c=[],s=function(){for(var p=arguments.length,h=new Array(p),b=0;b<p;b++)h[b]=arguments[b];var R=Jo(h,r.registered);return c.push(R),$o(r,R,!1),r.key+"-"+R.name},o=function(){for(var p=arguments.length,h=new Array(p),b=0;b<p;b++)h[b]=arguments[b];return p2(r.registered,s,y2(h))},f={css:s,cx:o,theme:M.useContext(D1)},m=l.children(f);return M.createElement(M.Fragment,null,M.createElement(g2,{cache:r,serializedArr:c}),m)}),v2=Object.defineProperty,b2=(l,r,c)=>r in l?v2(l,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[r]=c,lu=(l,r,c)=>b2(l,typeof r!="symbol"?r+"":r,c),go=new Map,iu=new WeakMap,Sh=0,S2=void 0;function x2(l){return l?(iu.has(l)||(Sh+=1,iu.set(l,Sh.toString())),iu.get(l)):"0"}function E2(l){return Object.keys(l).sort().filter(r=>l[r]!==void 0).map(r=>`${r}_${r==="root"?x2(l.root):l[r]}`).toString()}function A2(l){const r=E2(l);let c=go.get(r);if(!c){const s=new Map;let o;const f=new IntersectionObserver(m=>{m.forEach(g=>{var p;const h=g.isIntersecting&&o.some(b=>g.intersectionRatio>=b);l.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=h),(p=s.get(g.target))==null||p.forEach(b=>{b(h,g)})})},l);o=f.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),c={id:r,observer:f,elements:s},go.set(r,c)}return c}function L1(l,r,c={},s=S2){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const p=l.getBoundingClientRect();return r(s,{isIntersecting:s,target:l,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:o,observer:f,elements:m}=A2(c),g=m.get(l)||[];return m.has(l)||m.set(l,g),g.push(r),f.observe(l),function(){g.splice(g.indexOf(r),1),g.length===0&&(m.delete(l),f.unobserve(l)),m.size===0&&(f.disconnect(),go.delete(o))}}function O2(l){return typeof l.children!="function"}var xh=class extends M.Component{constructor(l){super(l),lu(this,"node",null),lu(this,"_unobserveCb",null),lu(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),lu(this,"handleChange",(r,c)=>{r&&this.props.triggerOnce&&this.unobserve(),O2(this.props)||this.setState({inView:r,entry:c}),this.props.onChange&&this.props.onChange(r,c)}),this.state={inView:!!l.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(l){(l.rootMargin!==this.props.rootMargin||l.root!==this.props.root||l.threshold!==this.props.threshold||l.skip!==this.props.skip||l.trackVisibility!==this.props.trackVisibility||l.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:l,root:r,rootMargin:c,trackVisibility:s,delay:o,fallbackInView:f}=this.props;this._unobserveCb=L1(this.node,this.handleChange,{threshold:l,root:r,rootMargin:c,trackVisibility:s,delay:o},f)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:l}=this.props;if(typeof l=="function"){const{inView:U,entry:z}=this.state;return l({inView:U,entry:z,ref:this.handleNode})}const{as:r,triggerOnce:c,threshold:s,root:o,rootMargin:f,onChange:m,skip:g,trackVisibility:p,delay:h,initialInView:b,fallbackInView:R,...T}=this.props;return M.createElement(r||"div",{ref:this.handleNode,...T},l)}};function Y1({threshold:l,delay:r,trackVisibility:c,rootMargin:s,root:o,triggerOnce:f,skip:m,initialInView:g,fallbackInView:p,onChange:h}={}){var b;const[R,T]=M.useState(null),U=M.useRef(h),[z,N]=M.useState({inView:!!g,entry:void 0});U.current=h,M.useEffect(()=>{if(m||!R)return;let Y;return Y=L1(R,(F,D)=>{N({inView:F,entry:D}),U.current&&U.current(F,D),D.isIntersecting&&f&&Y&&(Y(),Y=void 0)},{root:o,rootMargin:s,threshold:l,trackVisibility:c,delay:r},p),()=>{Y&&Y()}},[Array.isArray(l)?l.toString():l,R,o,s,f,m,c,p,r]);const A=(b=z.entry)==null?void 0:b.target,C=M.useRef(void 0);!R&&A&&!f&&!m&&C.current!==A&&(C.current=A,N({inView:!!g,entry:void 0}));const B=[T,z.inView,z.entry];return B.ref=B[0],B.inView=B[1],B.entry=B[2],B}var eo={exports:{}},At={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function T2(){if(Eh)return At;Eh=1;var l=Symbol.for("react.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),z;z=Symbol.for("react.module.reference");function N(A){if(typeof A=="object"&&A!==null){var C=A.$$typeof;switch(C){case l:switch(A=A.type,A){case c:case o:case s:case h:case b:return A;default:switch(A=A&&A.$$typeof,A){case g:case m:case p:case T:case R:case f:return A;default:return C}}case r:return C}}}return At.ContextConsumer=m,At.ContextProvider=f,At.Element=l,At.ForwardRef=p,At.Fragment=c,At.Lazy=T,At.Memo=R,At.Portal=r,At.Profiler=o,At.StrictMode=s,At.Suspense=h,At.SuspenseList=b,At.isAsyncMode=function(){return!1},At.isConcurrentMode=function(){return!1},At.isContextConsumer=function(A){return N(A)===m},At.isContextProvider=function(A){return N(A)===f},At.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===l},At.isForwardRef=function(A){return N(A)===p},At.isFragment=function(A){return N(A)===c},At.isLazy=function(A){return N(A)===T},At.isMemo=function(A){return N(A)===R},At.isPortal=function(A){return N(A)===r},At.isProfiler=function(A){return N(A)===o},At.isStrictMode=function(A){return N(A)===s},At.isSuspense=function(A){return N(A)===h},At.isSuspenseList=function(A){return N(A)===b},At.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===c||A===o||A===s||A===h||A===b||A===U||typeof A=="object"&&A!==null&&(A.$$typeof===T||A.$$typeof===R||A.$$typeof===f||A.$$typeof===m||A.$$typeof===p||A.$$typeof===z||A.getModuleId!==void 0)},At.typeOf=N,At}var Ah;function R2(){return Ah||(Ah=1,eo.exports=T2()),eo.exports}var w2=R2();V`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;V`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;V`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;V`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;V`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;V`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const z2=V`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,_2=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M2=V`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C2=V`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N2=V`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fo=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D2=V`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j2=V`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U2=V`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H2=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L2=V`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y2=V`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,B2=V`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function q2({duration:l=1e3,delay:r=0,timingFunction:c="ease",keyframes:s=Fo,iterationCount:o=1}){return H1`
    animation-duration: ${l}ms;
    animation-timing-function: ${c};
    animation-delay: ${r}ms;
    animation-name: ${s};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function X2(l){return l==null}function G2(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function B1(l,r){return c=>c?l():r()}function Ni(l){return B1(l,()=>null)}function vo(l){return Ni(()=>({opacity:0}))(l)}const Wo=l=>{const{cascade:r=!1,damping:c=.5,delay:s=0,duration:o=1e3,fraction:f=0,keyframes:m=Fo,triggerOnce:g=!1,className:p,style:h,childClassName:b,childStyle:R,children:T,onVisibilityChange:U}=l,z=M.useMemo(()=>q2({keyframes:m,duration:o}),[o,m]);return X2(T)?null:G2(T)?Kt(V2,{...l,animationStyles:z,children:String(T)}):w2.isFragment(T)?Kt(q1,{...l,animationStyles:z}):Kt(h2,{children:M.Children.map(T,(N,A)=>{if(!M.isValidElement(N))return null;const C=s+(r?A*o*c:0);switch(N.type){case"ol":case"ul":return Kt(to,{children:({cx:B})=>Kt(N.type,{...N.props,className:B(p,N.props.className),style:Object.assign({},h,N.props.style),children:Kt(Wo,{...l,children:N.props.children})})});case"li":return Kt(xh,{threshold:f,triggerOnce:g,onChange:U,children:({inView:B,ref:Y})=>Kt(to,{children:({cx:F})=>Kt(N.type,{...N.props,ref:Y,className:F(b,N.props.className),css:Ni(()=>z)(B),style:Object.assign({},R,N.props.style,vo(!B),{animationDelay:C+"ms"})})})});default:return Kt(xh,{threshold:f,triggerOnce:g,onChange:U,children:({inView:B,ref:Y})=>Kt("div",{ref:Y,className:p,css:Ni(()=>z)(B),style:Object.assign({},h,vo(!B),{animationDelay:C+"ms"}),children:Kt(to,{children:({cx:F})=>Kt(N.type,{...N.props,className:F(b,N.props.className),style:Object.assign({},R,N.props.style)})})})})}})})},k2={display:"inline-block",whiteSpace:"pre"},V2=l=>{const{animationStyles:r,cascade:c=!1,damping:s=.5,delay:o=0,duration:f=1e3,fraction:m=0,triggerOnce:g=!1,className:p,style:h,children:b,onVisibilityChange:R}=l,{ref:T,inView:U}=Y1({triggerOnce:g,threshold:m,onChange:R});return B1(()=>Kt("div",{ref:T,className:p,style:Object.assign({},h,k2),children:b.split("").map((z,N)=>Kt("span",{css:Ni(()=>r)(U),style:{animationDelay:o+N*f*s+"ms"},children:z},N))}),()=>Kt(q1,{...l,children:b}))(c)},q1=l=>{const{animationStyles:r,fraction:c=0,triggerOnce:s=!1,className:o,style:f,children:m,onVisibilityChange:g}=l,{ref:p,inView:h}=Y1({triggerOnce:s,threshold:c,onChange:g});return Kt("div",{ref:p,className:o,css:Ni(()=>r)(h),style:Object.assign({},f,vo(!h)),children:m})};V`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;V`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;V`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;V`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;V`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Q2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Z2=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,K2=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,$2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,J2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,F2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,W2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,P2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,I2=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,t3=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,e3=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,a3=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,n3=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function l3(l,r,c){switch(c){case"bottom-left":return r?Z2:_2;case"bottom-right":return r?K2:M2;case"down":return l?r?J2:N2:r?$2:C2;case"left":return l?r?W2:D2:r?F2:Fo;case"right":return l?r?I2:U2:r?P2:j2;case"top-left":return r?t3:H2;case"top-right":return r?e3:L2;case"up":return l?r?n3:B2:r?a3:Y2;default:return r?Q2:z2}}const Bi=l=>{const{big:r=!1,direction:c,reverse:s=!1,...o}=l,f=M.useMemo(()=>l3(r,s,c),[r,c,s]);return Kt(Wo,{keyframes:f,...o})};V`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;V`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;V`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;V`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;V`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;const i3=V`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;V`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const r3={transformOrigin:"top left"},u3=l=>{const{style:r,...c}=l;return Kt(Wo,{keyframes:i3,style:Object.assign({},r,r3),...c})};V`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;V`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function wu(){return j.jsx("div",{children:j.jsx(Bi,{children:j.jsxs("header",{className:"bg-gray-900 py-4 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 relative",children:[j.jsx(Tn,{to:"/",className:"text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse bg-clip-text text-transparent mb-4 md:mb-0",children:"Mi Portafolio"}),j.jsxs("nav",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:[j.jsx(Tn,{to:"/",className:"text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl",children:"Principal"}),j.jsx(Tn,{to:"/proyectos",className:"text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl",children:"Proyectos"}),j.jsx(Tn,{to:"/curriculum",className:"text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl",children:"Curriculum"}),j.jsx(Tn,{to:"/contacto",className:"text-gray-400 hover:text-white transition-all duration-300 text-xl md:text-2xl",children:"Contacto"})]})]})})})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function c3(l,r,c){return(r=o3(r))in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function Oh(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),c.push.apply(c,s)}return c}function k(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?Oh(Object(c),!0).forEach(function(s){c3(l,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):Oh(Object(c)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(c,s))})}return l}function s3(l,r){if(typeof l!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var s=c.call(l,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function o3(l){var r=s3(l,"string");return typeof r=="symbol"?r:r+""}const Th=()=>{};let Po={},X1={},G1=null,k1={mark:Th,measure:Th};try{typeof window<"u"&&(Po=window),typeof document<"u"&&(X1=document),typeof MutationObserver<"u"&&(G1=MutationObserver),typeof performance<"u"&&(k1=performance)}catch{}const{userAgent:Rh=""}=Po.navigator||{},Ia=Po,Mt=X1,wh=G1,ru=k1;Ia.document;const wa=!!Mt.documentElement&&!!Mt.head&&typeof Mt.addEventListener=="function"&&typeof Mt.createElement=="function",V1=~Rh.indexOf("MSIE")||~Rh.indexOf("Trident/");var f3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,d3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Q1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},m3={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Z1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],re="classic",zu="duotone",h3="sharp",y3="sharp-duotone",K1=[re,zu,h3,y3],p3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},g3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},v3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),b3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},S3=["fak","fa-kit","fakd","fa-kit-duotone"],zh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},x3=["kit"],E3={kit:{"fa-kit":"fak"}},A3=["fak","fakd"],O3={kit:{fak:"fa-kit"}},_h={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},uu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R3=["fak","fa-kit","fakd","fa-kit-duotone"],w3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},z3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},bo={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},M3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],So=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...T3,...M3],C3=["solid","regular","light","thin","duotone","brands"],$1=[1,2,3,4,5,6,7,8,9,10],N3=$1.concat([11,12,13,14,15,16,17,18,19,20]),D3=[...Object.keys(_3),...C3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",uu.GROUP,uu.SWAP_OPACITY,uu.PRIMARY,uu.SECONDARY].concat($1.map(l=>"".concat(l,"x"))).concat(N3.map(l=>"w-".concat(l))),j3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Oa="___FONT_AWESOME___",xo=16,J1="fa",F1="svg-inline--fa",wn="data-fa-i2svg",Eo="data-fa-pseudo-element",U3="data-fa-pseudo-element-pending",Io="data-prefix",tf="data-icon",Mh="fontawesome-i2svg",H3="async",L3=["HTML","HEAD","STYLE","SCRIPT"],W1=(()=>{try{return!0}catch{return!1}})();function qi(l){return new Proxy(l,{get(r,c){return c in r?r[c]:r[re]}})}const P1=k({},Q1);P1[re]=k(k(k(k({},{"fa-duotone":"duotone"}),Q1[re]),zh.kit),zh["kit-duotone"]);const Y3=qi(P1),Ao=k({},b3);Ao[re]=k(k(k(k({},{duotone:"fad"}),Ao[re]),_h.kit),_h["kit-duotone"]);const Ch=qi(Ao),Oo=k({},bo);Oo[re]=k(k({},Oo[re]),O3.kit);const ef=qi(Oo),To=k({},z3);To[re]=k(k({},To[re]),E3.kit);qi(To);const B3=f3,I1="fa-layers-text",q3=d3,X3=k({},p3);qi(X3);const G3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ao=m3,k3=[...x3,...D3],Ri=Ia.FontAwesomeConfig||{};function V3(l){var r=Mt.querySelector("script["+l+"]");if(r)return r.getAttribute(l)}function Q3(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Mt&&typeof Mt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[c,s]=r;const o=Q3(V3(c));o!=null&&(Ri[s]=o)});const ty={styleDefault:"solid",familyDefault:re,cssPrefix:J1,replacementClass:F1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ri.familyPrefix&&(Ri.cssPrefix=Ri.familyPrefix);const bl=k(k({},ty),Ri);bl.autoReplaceSvg||(bl.observeMutations=!1);const W={};Object.keys(ty).forEach(l=>{Object.defineProperty(W,l,{enumerable:!0,set:function(r){bl[l]=r,wi.forEach(c=>c(W))},get:function(){return bl[l]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(l){bl.cssPrefix=l,wi.forEach(r=>r(W))},get:function(){return bl.cssPrefix}});Ia.FontAwesomeConfig=W;const wi=[];function Z3(l){return wi.push(l),()=>{wi.splice(wi.indexOf(l),1)}}const Pa=xo,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function K3(l){if(!l||!wa)return;const r=Mt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=l;const c=Mt.head.childNodes;let s=null;for(let o=c.length-1;o>-1;o--){const f=c[o],m=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(m)>-1&&(s=f)}return Mt.head.insertBefore(r,s),l}const $3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Di(){let l=12,r="";for(;l-- >0;)r+=$3[Math.random()*62|0];return r}function El(l){const r=[];for(let c=(l||[]).length>>>0;c--;)r[c]=l[c];return r}function af(l){return l.classList?El(l.classList):(l.getAttribute("class")||"").split(" ").filter(r=>r)}function ey(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J3(l){return Object.keys(l||{}).reduce((r,c)=>r+"".concat(c,'="').concat(ey(l[c]),'" '),"").trim()}function _u(l){return Object.keys(l||{}).reduce((r,c)=>r+"".concat(c,": ").concat(l[c].trim(),";"),"")}function nf(l){return l.size!==Ie.size||l.x!==Ie.x||l.y!==Ie.y||l.rotate!==Ie.rotate||l.flipX||l.flipY}function F3(l){let{transform:r,containerWidth:c,iconWidth:s}=l;const o={transform:"translate(".concat(c/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(f," ").concat(m," ").concat(g)},h={transform:"translate(".concat(s/2*-1," -256)")};return{outer:o,inner:p,path:h}}function W3(l){let{transform:r,width:c=xo,height:s=xo,startCentered:o=!1}=l,f="";return o&&V1?f+="translate(".concat(r.x/Pa-c/2,"em, ").concat(r.y/Pa-s/2,"em) "):o?f+="translate(calc(-50% + ".concat(r.x/Pa,"em), calc(-50% + ").concat(r.y/Pa,"em)) "):f+="translate(".concat(r.x/Pa,"em, ").concat(r.y/Pa,"em) "),f+="scale(".concat(r.size/Pa*(r.flipX?-1:1),", ").concat(r.size/Pa*(r.flipY?-1:1),") "),f+="rotate(".concat(r.rotate,"deg) "),f}var P3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ay(){const l=J1,r=F1,c=W.cssPrefix,s=W.replacementClass;let o=P3;if(c!==l||s!==r){const f=new RegExp("\\.".concat(l,"\\-"),"g"),m=new RegExp("\\--".concat(l,"\\-"),"g"),g=new RegExp("\\.".concat(r),"g");o=o.replace(f,".".concat(c,"-")).replace(m,"--".concat(c,"-")).replace(g,".".concat(s))}return o}let Nh=!1;function no(){W.autoAddCss&&!Nh&&(K3(ay()),Nh=!0)}var I3={mixout(){return{dom:{css:ay,insertCss:no}}},hooks(){return{beforeDOMElementCreation(){no()},beforeI2svg(){no()}}}};const Ta=Ia||{};Ta[Oa]||(Ta[Oa]={});Ta[Oa].styles||(Ta[Oa].styles={});Ta[Oa].hooks||(Ta[Oa].hooks={});Ta[Oa].shims||(Ta[Oa].shims=[]);var ta=Ta[Oa];const ny=[],ly=function(){Mt.removeEventListener("DOMContentLoaded",ly),gu=1,ny.map(l=>l())};let gu=!1;wa&&(gu=(Mt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Mt.readyState),gu||Mt.addEventListener("DOMContentLoaded",ly));function tS(l){wa&&(gu?setTimeout(l,0):ny.push(l))}function Xi(l){const{tag:r,attributes:c={},children:s=[]}=l;return typeof l=="string"?ey(l):"<".concat(r," ").concat(J3(c),">").concat(s.map(Xi).join(""),"</").concat(r,">")}function Dh(l,r,c){if(l&&l[r]&&l[r][c])return{prefix:r,iconName:c,icon:l[r][c]}}var lo=function(r,c,s,o){var f=Object.keys(r),m=f.length,g=c,p,h,b;for(s===void 0?(p=1,b=r[f[0]]):(p=0,b=s);p<m;p++)h=f[p],b=g(b,r[h],h,r);return b};function eS(l){const r=[];let c=0;const s=l.length;for(;c<s;){const o=l.charCodeAt(c++);if(o>=55296&&o<=56319&&c<s){const f=l.charCodeAt(c++);(f&64512)==56320?r.push(((o&1023)<<10)+(f&1023)+65536):(r.push(o),c--)}else r.push(o)}return r}function Ro(l){const r=eS(l);return r.length===1?r[0].toString(16):null}function aS(l,r){const c=l.length;let s=l.charCodeAt(r),o;return s>=55296&&s<=56319&&c>r+1&&(o=l.charCodeAt(r+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}function jh(l){return Object.keys(l).reduce((r,c)=>{const s=l[c];return!!s.icon?r[s.iconName]=s.icon:r[c]=s,r},{})}function wo(l,r){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=c,o=jh(r);typeof ta.hooks.addPack=="function"&&!s?ta.hooks.addPack(l,jh(r)):ta.styles[l]=k(k({},ta.styles[l]||{}),o),l==="fas"&&wo("fa",r)}const{styles:ji,shims:nS}=ta,iy=Object.keys(ef),lS=iy.reduce((l,r)=>(l[r]=Object.keys(ef[r]),l),{});let lf=null,ry={},uy={},cy={},sy={},oy={};function iS(l){return~k3.indexOf(l)}function rS(l,r){const c=r.split("-"),s=c[0],o=c.slice(1).join("-");return s===l&&o!==""&&!iS(o)?o:null}const fy=()=>{const l=s=>lo(ji,(o,f,m)=>(o[m]=lo(f,s,{}),o),{});ry=l((s,o,f)=>(o[3]&&(s[o[3]]=f),o[2]&&o[2].filter(g=>typeof g=="number").forEach(g=>{s[g.toString(16)]=f}),s)),uy=l((s,o,f)=>(s[f]=f,o[2]&&o[2].filter(g=>typeof g=="string").forEach(g=>{s[g]=f}),s)),oy=l((s,o,f)=>{const m=o[2];return s[f]=f,m.forEach(g=>{s[g]=f}),s});const r="far"in ji||W.autoFetchSvg,c=lo(nS,(s,o)=>{const f=o[0];let m=o[1];const g=o[2];return m==="far"&&!r&&(m="fas"),typeof f=="string"&&(s.names[f]={prefix:m,iconName:g}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:m,iconName:g}),s},{names:{},unicodes:{}});cy=c.names,sy=c.unicodes,lf=Mu(W.styleDefault,{family:W.familyDefault})};Z3(l=>{lf=Mu(l.styleDefault,{family:W.familyDefault})});fy();function rf(l,r){return(ry[l]||{})[r]}function uS(l,r){return(uy[l]||{})[r]}function Rn(l,r){return(oy[l]||{})[r]}function dy(l){return cy[l]||{prefix:null,iconName:null}}function cS(l){const r=sy[l],c=rf("fas",l);return r||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function tn(){return lf}const my=()=>({prefix:null,iconName:null,rest:[]});function sS(l){let r=re;const c=iy.reduce((s,o)=>(s[o]="".concat(W.cssPrefix,"-").concat(o),s),{});return K1.forEach(s=>{(l.includes(c[s])||l.some(o=>lS[s].includes(o)))&&(r=s)}),r}function Mu(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:c=re}=r,s=Y3[c][l];if(c===zu&&!l)return"fad";const o=Ch[c][l]||Ch[c][s],f=l in ta.styles?l:null;return o||f||null}function oS(l){let r=[],c=null;return l.forEach(s=>{const o=rS(W.cssPrefix,s);o?c=o:s&&r.push(s)}),{iconName:c,rest:r}}function Uh(l){return l.sort().filter((r,c,s)=>s.indexOf(r)===c)}function Cu(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:c=!1}=r;let s=null;const o=So.concat(R3),f=Uh(l.filter(R=>o.includes(R))),m=Uh(l.filter(R=>!So.includes(R))),g=f.filter(R=>(s=R,!Z1.includes(R))),[p=null]=g,h=sS(f),b=k(k({},oS(m)),{},{prefix:Mu(p,{family:h})});return k(k(k({},b),hS({values:l,family:h,styles:ji,config:W,canonical:b,givenPrefix:s})),fS(c,s,b))}function fS(l,r,c){let{prefix:s,iconName:o}=c;if(l||!s||!o)return{prefix:s,iconName:o};const f=r==="fa"?dy(o):{},m=Rn(s,o);return o=f.iconName||m||o,s=f.prefix||s,s==="far"&&!ji.far&&ji.fas&&!W.autoFetchSvg&&(s="fas"),{prefix:s,iconName:o}}const dS=K1.filter(l=>l!==re||l!==zu),mS=Object.keys(bo).filter(l=>l!==re).map(l=>Object.keys(bo[l])).flat();function hS(l){const{values:r,family:c,canonical:s,givenPrefix:o="",styles:f={},config:m={}}=l,g=c===zu,p=r.includes("fa-duotone")||r.includes("fad"),h=m.familyDefault==="duotone",b=s.prefix==="fad"||s.prefix==="fa-duotone";if(!g&&(p||h||b)&&(s.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(s.prefix="fab"),!s.prefix&&dS.includes(c)&&(Object.keys(f).find(T=>mS.includes(T))||m.autoFetchSvg)){const T=v3.get(c).defaultShortPrefixId;s.prefix=T,s.iconName=Rn(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||o==="fa")&&(s.prefix=tn()||"fas"),s}class yS{constructor(){this.definitions={}}add(){for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];const o=c.reduce(this._pullDefinitions,{});Object.keys(o).forEach(f=>{this.definitions[f]=k(k({},this.definitions[f]||{}),o[f]),wo(f,o[f]);const m=ef[re][f];m&&wo(m,o[f]),fy()})}reset(){this.definitions={}}_pullDefinitions(r,c){const s=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(s).map(o=>{const{prefix:f,iconName:m,icon:g}=s[o],p=g[2];r[f]||(r[f]={}),p.length>0&&p.forEach(h=>{typeof h=="string"&&(r[f][h]=g)}),r[f][m]=g}),r}}let Hh=[],hl={};const gl={},pS=Object.keys(gl);function gS(l,r){let{mixoutsTo:c}=r;return Hh=l,hl={},Object.keys(gl).forEach(s=>{pS.indexOf(s)===-1&&delete gl[s]}),Hh.forEach(s=>{const o=s.mixout?s.mixout():{};if(Object.keys(o).forEach(f=>{typeof o[f]=="function"&&(c[f]=o[f]),typeof o[f]=="object"&&Object.keys(o[f]).forEach(m=>{c[f]||(c[f]={}),c[f][m]=o[f][m]})}),s.hooks){const f=s.hooks();Object.keys(f).forEach(m=>{hl[m]||(hl[m]=[]),hl[m].push(f[m])})}s.provides&&s.provides(gl)}),c}function zo(l,r){for(var c=arguments.length,s=new Array(c>2?c-2:0),o=2;o<c;o++)s[o-2]=arguments[o];return(hl[l]||[]).forEach(m=>{r=m.apply(null,[r,...s])}),r}function zn(l){for(var r=arguments.length,c=new Array(r>1?r-1:0),s=1;s<r;s++)c[s-1]=arguments[s];(hl[l]||[]).forEach(f=>{f.apply(null,c)})}function en(){const l=arguments[0],r=Array.prototype.slice.call(arguments,1);return gl[l]?gl[l].apply(null,r):void 0}function _o(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:r}=l;const c=l.prefix||tn();if(r)return r=Rn(c,r)||r,Dh(hy.definitions,c,r)||Dh(ta.styles,c,r)}const hy=new yS,vS=()=>{W.autoReplaceSvg=!1,W.observeMutations=!1,zn("noAuto")},bS={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wa?(zn("beforeI2svg",l),en("pseudoElements2svg",l),en("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r}=l;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,tS(()=>{xS({autoReplaceSvgRoot:r}),zn("watch",l)})}},SS={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Rn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const r=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],c=Mu(l[0]);return{prefix:c,iconName:Rn(c,r)||r}}if(typeof l=="string"&&(l.indexOf("".concat(W.cssPrefix,"-"))>-1||l.match(B3))){const r=Cu(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||tn(),iconName:Rn(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){const r=tn();return{prefix:r,iconName:Rn(r,l)||l}}}},Oe={noAuto:vS,config:W,dom:bS,parse:SS,library:hy,findIconDefinition:_o,toHtml:Xi},xS=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r=Mt}=l;(Object.keys(ta.styles).length>0||W.autoFetchSvg)&&wa&&W.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Nu(l,r){return Object.defineProperty(l,"abstract",{get:r}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(c=>Xi(c))}}),Object.defineProperty(l,"node",{get:function(){if(!wa)return;const c=Mt.createElement("div");return c.innerHTML=l.html,c.children}}),l}function ES(l){let{children:r,main:c,mask:s,attributes:o,styles:f,transform:m}=l;if(nf(m)&&c.found&&!s.found){const{width:g,height:p}=c,h={x:g/p/2,y:.5};o.style=_u(k(k({},f),{},{"transform-origin":"".concat(h.x+m.x/16,"em ").concat(h.y+m.y/16,"em")}))}return[{tag:"svg",attributes:o,children:r}]}function AS(l){let{prefix:r,iconName:c,children:s,attributes:o,symbol:f}=l;const m=f===!0?"".concat(r,"-").concat(W.cssPrefix,"-").concat(c):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},o),{},{id:m}),children:s}]}]}function uf(l){const{icons:{main:r,mask:c},prefix:s,iconName:o,transform:f,symbol:m,title:g,maskId:p,titleId:h,extra:b,watchable:R=!1}=l,{width:T,height:U}=c.found?c:r,z=A3.includes(s),N=[W.replacementClass,o?"".concat(W.cssPrefix,"-").concat(o):""].filter(D=>b.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(b.classes).join(" ");let A={children:[],attributes:k(k({},b.attributes),{},{"data-prefix":s,"data-icon":o,class:N,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(U)})};const C=z&&!~b.classes.indexOf("fa-fw")?{width:"".concat(T/U*16*.0625,"em")}:{};R&&(A.attributes[wn]=""),g&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(h||Di())},children:[g]}),delete A.attributes.title);const B=k(k({},A),{},{prefix:s,iconName:o,main:r,mask:c,maskId:p,transform:f,symbol:m,styles:k(k({},C),b.styles)}),{children:Y,attributes:F}=c.found&&r.found?en("generateAbstractMask",B)||{children:[],attributes:{}}:en("generateAbstractIcon",B)||{children:[],attributes:{}};return B.children=Y,B.attributes=F,m?AS(B):ES(B)}function Lh(l){const{content:r,width:c,height:s,transform:o,title:f,extra:m,watchable:g=!1}=l,p=k(k(k({},m.attributes),f?{title:f}:{}),{},{class:m.classes.join(" ")});g&&(p[wn]="");const h=k({},m.styles);nf(o)&&(h.transform=W3({transform:o,startCentered:!0,width:c,height:s}),h["-webkit-transform"]=h.transform);const b=_u(h);b.length>0&&(p.style=b);const R=[];return R.push({tag:"span",attributes:p,children:[r]}),f&&R.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),R}function OS(l){const{content:r,title:c,extra:s}=l,o=k(k(k({},s.attributes),c?{title:c}:{}),{},{class:s.classes.join(" ")}),f=_u(s.styles);f.length>0&&(o.style=f);const m=[];return m.push({tag:"span",attributes:o,children:[r]}),c&&m.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),m}const{styles:io}=ta;function Mo(l){const r=l[0],c=l[1],[s]=l.slice(4);let o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(ao.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(ao.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(ao.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:r,height:c,icon:o}}const TS={found:!1,width:512,height:512};function RS(l,r){!W1&&!W.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(r,'" is missing.'))}function Co(l,r){let c=r;return r==="fa"&&W.styleDefault!==null&&(r=tn()),new Promise((s,o)=>{if(c==="fa"){const f=dy(l)||{};l=f.iconName||l,r=f.prefix||r}if(l&&r&&io[r]&&io[r][l]){const f=io[r][l];return s(Mo(f))}RS(l,r),s(k(k({},TS),{},{icon:W.showMissingIcons&&l?en("missingIconAbstract")||{}:{}}))})}const Yh=()=>{},No=W.measurePerformance&&ru&&ru.mark&&ru.measure?ru:{mark:Yh,measure:Yh},Ti='FA "6.7.2"',wS=l=>(No.mark("".concat(Ti," ").concat(l," begins")),()=>yy(l)),yy=l=>{No.mark("".concat(Ti," ").concat(l," ends")),No.measure("".concat(Ti," ").concat(l),"".concat(Ti," ").concat(l," begins"),"".concat(Ti," ").concat(l," ends"))};var cf={begin:wS,end:yy};const mu=()=>{};function Bh(l){return typeof(l.getAttribute?l.getAttribute(wn):null)=="string"}function zS(l){const r=l.getAttribute?l.getAttribute(Io):null,c=l.getAttribute?l.getAttribute(tf):null;return r&&c}function _S(l){return l&&l.classList&&l.classList.contains&&l.classList.contains(W.replacementClass)}function MS(){return W.autoReplaceSvg===!0?hu.replace:hu[W.autoReplaceSvg]||hu.replace}function CS(l){return Mt.createElementNS("http://www.w3.org/2000/svg",l)}function NS(l){return Mt.createElement(l)}function py(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:c=l.tag==="svg"?CS:NS}=r;if(typeof l=="string")return Mt.createTextNode(l);const s=c(l.tag);return Object.keys(l.attributes||[]).forEach(function(f){s.setAttribute(f,l.attributes[f])}),(l.children||[]).forEach(function(f){s.appendChild(py(f,{ceFn:c}))}),s}function DS(l){let r=" ".concat(l.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}const hu={replace:function(l){const r=l[0];if(r.parentNode)if(l[1].forEach(c=>{r.parentNode.insertBefore(py(c),r)}),r.getAttribute(wn)===null&&W.keepOriginalSource){let c=Mt.createComment(DS(r));r.parentNode.replaceChild(c,r)}else r.remove()},nest:function(l){const r=l[0],c=l[1];if(~af(r).indexOf(W.replacementClass))return hu.replace(l);const s=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){const f=c[0].attributes.class.split(" ").reduce((m,g)=>(g===W.replacementClass||g.match(s)?m.toSvg.push(g):m.toNode.push(g),m),{toNode:[],toSvg:[]});c[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",f.toNode.join(" "))}const o=c.map(f=>Xi(f)).join(`
`);r.setAttribute(wn,""),r.innerHTML=o}};function qh(l){l()}function gy(l,r){const c=typeof r=="function"?r:mu;if(l.length===0)c();else{let s=qh;W.mutateApproach===H3&&(s=Ia.requestAnimationFrame||qh),s(()=>{const o=MS(),f=cf.begin("mutate");l.map(o),f(),c()})}}let sf=!1;function vy(){sf=!0}function Do(){sf=!1}let vu=null;function Xh(l){if(!wh||!W.observeMutations)return;const{treeCallback:r=mu,nodeCallback:c=mu,pseudoElementsCallback:s=mu,observeMutationsRoot:o=Mt}=l;vu=new wh(f=>{if(sf)return;const m=tn();El(f).forEach(g=>{if(g.type==="childList"&&g.addedNodes.length>0&&!Bh(g.addedNodes[0])&&(W.searchPseudoElements&&s(g.target),r(g.target)),g.type==="attributes"&&g.target.parentNode&&W.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&Bh(g.target)&&~G3.indexOf(g.attributeName))if(g.attributeName==="class"&&zS(g.target)){const{prefix:p,iconName:h}=Cu(af(g.target));g.target.setAttribute(Io,p||m),h&&g.target.setAttribute(tf,h)}else _S(g.target)&&c(g.target)})}),wa&&vu.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function jS(){vu&&vu.disconnect()}function US(l){const r=l.getAttribute("style");let c=[];return r&&(c=r.split(";").reduce((s,o)=>{const f=o.split(":"),m=f[0],g=f.slice(1);return m&&g.length>0&&(s[m]=g.join(":").trim()),s},{})),c}function HS(l){const r=l.getAttribute("data-prefix"),c=l.getAttribute("data-icon"),s=l.innerText!==void 0?l.innerText.trim():"";let o=Cu(af(l));return o.prefix||(o.prefix=tn()),r&&c&&(o.prefix=r,o.iconName=c),o.iconName&&o.prefix||(o.prefix&&s.length>0&&(o.iconName=uS(o.prefix,l.innerText)||rf(o.prefix,Ro(l.innerText))),!o.iconName&&W.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=l.firstChild.data)),o}function LS(l){const r=El(l.attributes).reduce((o,f)=>(o.name!=="class"&&o.name!=="style"&&(o[f.name]=f.value),o),{}),c=l.getAttribute("title"),s=l.getAttribute("data-fa-title-id");return W.autoA11y&&(c?r["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(s||Di()):(r["aria-hidden"]="true",r.focusable="false")),r}function YS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:c,prefix:s,rest:o}=HS(l),f=LS(l),m=zo("parseNodeAttributes",{},l);let g=r.styleParser?US(l):[];return k({iconName:c,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:s,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:g,attributes:f}},m)}const{styles:BS}=ta;function by(l){const r=W.autoReplaceSvg==="nest"?Gh(l,{styleParser:!1}):Gh(l);return~r.extra.classes.indexOf(I1)?en("generateLayersText",l,r):en("generateSvgReplacementMutation",l,r)}function qS(){return[...S3,...So]}function kh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wa)return Promise.resolve();const c=Mt.documentElement.classList,s=b=>c.add("".concat(Mh,"-").concat(b)),o=b=>c.remove("".concat(Mh,"-").concat(b)),f=W.autoFetchSvg?qS():Z1.concat(Object.keys(BS));f.includes("fa")||f.push("fa");const m=[".".concat(I1,":not([").concat(wn,"])")].concat(f.map(b=>".".concat(b,":not([").concat(wn,"])"))).join(", ");if(m.length===0)return Promise.resolve();let g=[];try{g=El(l.querySelectorAll(m))}catch{}if(g.length>0)s("pending"),o("complete");else return Promise.resolve();const p=cf.begin("onTree"),h=g.reduce((b,R)=>{try{const T=by(R);T&&b.push(T)}catch(T){W1||T.name==="MissingIcon"&&console.error(T)}return b},[]);return new Promise((b,R)=>{Promise.all(h).then(T=>{gy(T,()=>{s("active"),s("complete"),o("pending"),typeof r=="function"&&r(),p(),b()})}).catch(T=>{p(),R(T)})})}function XS(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;by(l).then(c=>{c&&gy([c],r)})}function GS(l){return function(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(r||{}).icon?r:_o(r||{});let{mask:o}=c;return o&&(o=(o||{}).icon?o:_o(o||{})),l(s,k(k({},c),{},{mask:o}))}}const kS=function(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:c=Ie,symbol:s=!1,mask:o=null,maskId:f=null,title:m=null,titleId:g=null,classes:p=[],attributes:h={},styles:b={}}=r;if(!l)return;const{prefix:R,iconName:T,icon:U}=l;return Nu(k({type:"icon"},l),()=>(zn("beforeDOMElementCreation",{iconDefinition:l,params:r}),W.autoA11y&&(m?h["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(g||Di()):(h["aria-hidden"]="true",h.focusable="false")),uf({icons:{main:Mo(U),mask:o?Mo(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:T,transform:k(k({},Ie),c),symbol:s,title:m,maskId:f,titleId:g,extra:{attributes:h,styles:b,classes:p}})))};var VS={mixout(){return{icon:GS(kS)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=kh,l.nodeCallback=XS,l}}},provides(l){l.i2svg=function(r){const{node:c=Mt,callback:s=()=>{}}=r;return kh(c,s)},l.generateSvgReplacementMutation=function(r,c){const{iconName:s,title:o,titleId:f,prefix:m,transform:g,symbol:p,mask:h,maskId:b,extra:R}=c;return new Promise((T,U)=>{Promise.all([Co(s,m),h.iconName?Co(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(z=>{let[N,A]=z;T([r,uf({icons:{main:N,mask:A},prefix:m,iconName:s,transform:g,symbol:p,maskId:b,title:o,titleId:f,extra:R,watchable:!0})])}).catch(U)})},l.generateAbstractIcon=function(r){let{children:c,attributes:s,main:o,transform:f,styles:m}=r;const g=_u(m);g.length>0&&(s.style=g);let p;return nf(f)&&(p=en("generateAbstractTransformGrouping",{main:o,transform:f,containerWidth:o.width,iconWidth:o.width})),c.push(p||o.icon),{children:c,attributes:s}}}},QS={mixout(){return{layer(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:c=[]}=r;return Nu({type:"layer"},()=>{zn("beforeDOMElementCreation",{assembler:l,params:r});let s=[];return l(o=>{Array.isArray(o)?o.map(f=>{s=s.concat(f.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers"),...c].join(" ")},children:s}]})}}}},ZS={mixout(){return{counter(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:c=null,classes:s=[],attributes:o={},styles:f={}}=r;return Nu({type:"counter",content:l},()=>(zn("beforeDOMElementCreation",{content:l,params:r}),OS({content:l.toString(),title:c,extra:{attributes:o,styles:f,classes:["".concat(W.cssPrefix,"-layers-counter"),...s]}})))}}}},KS={mixout(){return{text(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:c=Ie,title:s=null,classes:o=[],attributes:f={},styles:m={}}=r;return Nu({type:"text",content:l},()=>(zn("beforeDOMElementCreation",{content:l,params:r}),Lh({content:l,transform:k(k({},Ie),c),title:s,extra:{attributes:f,styles:m,classes:["".concat(W.cssPrefix,"-layers-text"),...o]}})))}}},provides(l){l.generateLayersText=function(r,c){const{title:s,transform:o,extra:f}=c;let m=null,g=null;if(V1){const p=parseInt(getComputedStyle(r).fontSize,10),h=r.getBoundingClientRect();m=h.width/p,g=h.height/p}return W.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([r,Lh({content:r.innerHTML,width:m,height:g,transform:o,title:s,extra:f,watchable:!0})])}}};const $S=new RegExp('"',"ug"),Vh=[1105920,1112319],Qh=k(k(k(k({},{FontAwesome:{normal:"fas",400:"fas"}}),g3),j3),w3),jo=Object.keys(Qh).reduce((l,r)=>(l[r.toLowerCase()]=Qh[r],l),{}),JS=Object.keys(jo).reduce((l,r)=>{const c=jo[r];return l[r]=c[900]||[...Object.entries(c)][0][1],l},{});function FS(l){const r=l.replace($S,""),c=aS(r,0),s=c>=Vh[0]&&c<=Vh[1],o=r.length===2?r[0]===r[1]:!1;return{value:Ro(o?r[0]:r),isSecondary:s||o}}function WS(l,r){const c=l.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(r),o=isNaN(s)?"normal":s;return(jo[c]||{})[o]||JS[c]}function Zh(l,r){const c="".concat(U3).concat(r.replace(":","-"));return new Promise((s,o)=>{if(l.getAttribute(c)!==null)return s();const m=El(l.children).filter(T=>T.getAttribute(Eo)===r)[0],g=Ia.getComputedStyle(l,r),p=g.getPropertyValue("font-family"),h=p.match(q3),b=g.getPropertyValue("font-weight"),R=g.getPropertyValue("content");if(m&&!h)return l.removeChild(m),s();if(h&&R!=="none"&&R!==""){const T=g.getPropertyValue("content");let U=WS(p,b);const{value:z,isSecondary:N}=FS(T),A=h[0].startsWith("FontAwesome");let C=rf(U,z),B=C;if(A){const Y=cS(z);Y.iconName&&Y.prefix&&(C=Y.iconName,U=Y.prefix)}if(C&&!N&&(!m||m.getAttribute(Io)!==U||m.getAttribute(tf)!==B)){l.setAttribute(c,B),m&&l.removeChild(m);const Y=YS(),{extra:F}=Y;F.attributes[Eo]=r,Co(C,U).then(D=>{const lt=uf(k(k({},Y),{},{icons:{main:D,mask:my()},prefix:U,iconName:B,extra:F,watchable:!0})),et=Mt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?l.insertBefore(et,l.firstChild):l.appendChild(et),et.outerHTML=lt.map(Vt=>Xi(Vt)).join(`
`),l.removeAttribute(c),s()}).catch(o)}else s()}else s()})}function PS(l){return Promise.all([Zh(l,"::before"),Zh(l,"::after")])}function IS(l){return l.parentNode!==document.head&&!~L3.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(Eo)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function Kh(l){if(wa)return new Promise((r,c)=>{const s=El(l.querySelectorAll("*")).filter(IS).map(PS),o=cf.begin("searchPseudoElements");vy(),Promise.all(s).then(()=>{o(),Do(),r()}).catch(()=>{o(),Do(),c()})})}var t5={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=Kh,l}}},provides(l){l.pseudoElements2svg=function(r){const{node:c=Mt}=r;W.searchPseudoElements&&Kh(c)}}};let $h=!1;var e5={mixout(){return{dom:{unwatch(){vy(),$h=!0}}}},hooks(){return{bootstrap(){Xh(zo("mutationObserverCallbacks",{}))},noAuto(){jS()},watch(l){const{observeMutationsRoot:r}=l;$h?Do():Xh(zo("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}};const Jh=l=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((c,s)=>{const o=s.toLowerCase().split("-"),f=o[0];let m=o.slice(1).join("-");if(f&&m==="h")return c.flipX=!0,c;if(f&&m==="v")return c.flipY=!0,c;if(m=parseFloat(m),isNaN(m))return c;switch(f){case"grow":c.size=c.size+m;break;case"shrink":c.size=c.size-m;break;case"left":c.x=c.x-m;break;case"right":c.x=c.x+m;break;case"up":c.y=c.y-m;break;case"down":c.y=c.y+m;break;case"rotate":c.rotate=c.rotate+m;break}return c},r)};var a5={mixout(){return{parse:{transform:l=>Jh(l)}}},hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-transform");return c&&(l.transform=Jh(c)),l}}},provides(l){l.generateAbstractTransformGrouping=function(r){let{main:c,transform:s,containerWidth:o,iconWidth:f}=r;const m={transform:"translate(".concat(o/2," 256)")},g="translate(".concat(s.x*32,", ").concat(s.y*32,") "),p="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),h="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(g," ").concat(p," ").concat(h)},R={transform:"translate(".concat(f/2*-1," -256)")},T={outer:m,inner:b,path:R};return{tag:"g",attributes:k({},T.outer),children:[{tag:"g",attributes:k({},T.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:k(k({},c.icon.attributes),T.path)}]}]}}}};const ro={x:0,y:0,width:"100%",height:"100%"};function Fh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||r)&&(l.attributes.fill="black"),l}function n5(l){return l.tag==="g"?l.children:[l]}var l5={hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-mask"),s=c?Cu(c.split(" ").map(o=>o.trim())):my();return s.prefix||(s.prefix=tn()),l.mask=s,l.maskId=r.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(r){let{children:c,attributes:s,main:o,mask:f,maskId:m,transform:g}=r;const{width:p,icon:h}=o,{width:b,icon:R}=f,T=F3({transform:g,containerWidth:b,iconWidth:p}),U={tag:"rect",attributes:k(k({},ro),{},{fill:"white"})},z=h.children?{children:h.children.map(Fh)}:{},N={tag:"g",attributes:k({},T.inner),children:[Fh(k({tag:h.tag,attributes:k(k({},h.attributes),T.path)},z))]},A={tag:"g",attributes:k({},T.outer),children:[N]},C="mask-".concat(m||Di()),B="clip-".concat(m||Di()),Y={tag:"mask",attributes:k(k({},ro),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[U,A]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:n5(R)},Y]};return c.push(F,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(C,")")},ro)}),{children:c,attributes:s}}}},i5={provides(l){let r=!1;Ia.matchMedia&&(r=Ia.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const c=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:k(k({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=k(k({},o),{},{attributeName:"opacity"}),m={tag:"circle",attributes:k(k({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||m.children.push({tag:"animate",attributes:k(k({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},f),{},{values:"1;0;1;1;0;1;"})}),c.push(m),c.push({tag:"path",attributes:k(k({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:k(k({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||c.push({tag:"path",attributes:k(k({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},r5={hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-symbol"),s=c===null?!1:c===""?!0:c;return l.symbol=s,l}}}},u5=[I3,VS,QS,ZS,KS,t5,e5,a5,l5,i5,r5];gS(u5,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;const Uo=Oe.parse;Oe.findIconDefinition;Oe.toHtml;const c5=Oe.icon;Oe.layer;Oe.text;Oe.counter;var uo={exports:{}},co,Wh;function s5(){if(Wh)return co;Wh=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return co=l,co}var so,Ph;function o5(){if(Ph)return so;Ph=1;var l=s5();function r(){}function c(){}return c.resetWarningCache=r,so=function(){function s(m,g,p,h,b,R){if(R!==l){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}s.isRequired=s;function o(){return s}var f={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:c,resetWarningCache:r};return f.PropTypes=f,f},so}var Ih;function f5(){return Ih||(Ih=1,uo.exports=o5()()),uo.exports}var d5=f5();const mt=n1(d5);function t1(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),c.push.apply(c,s)}return c}function Pe(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?t1(Object(c),!0).forEach(function(s){yl(l,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):t1(Object(c)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(c,s))})}return l}function bu(l){"@babel/helpers - typeof";return bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},bu(l)}function yl(l,r,c){return r in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function m5(l,r){if(l==null)return{};var c={},s=Object.keys(l),o,f;for(f=0;f<s.length;f++)o=s[f],!(r.indexOf(o)>=0)&&(c[o]=l[o]);return c}function h5(l,r){if(l==null)return{};var c=m5(l,r),s,o;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);for(o=0;o<f.length;o++)s=f[o],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(l,s)&&(c[s]=l[s])}return c}function Ho(l){return y5(l)||p5(l)||g5(l)||v5()}function y5(l){if(Array.isArray(l))return Lo(l)}function p5(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function g5(l,r){if(l){if(typeof l=="string")return Lo(l,r);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Lo(l,r)}}function Lo(l,r){(r==null||r>l.length)&&(r=l.length);for(var c=0,s=new Array(r);c<r;c++)s[c]=l[c];return s}function v5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b5(l){var r,c=l.beat,s=l.fade,o=l.beatFade,f=l.bounce,m=l.shake,g=l.flash,p=l.spin,h=l.spinPulse,b=l.spinReverse,R=l.pulse,T=l.fixedWidth,U=l.inverse,z=l.border,N=l.listItem,A=l.flip,C=l.size,B=l.rotation,Y=l.pull,F=(r={"fa-beat":c,"fa-fade":s,"fa-beat-fade":o,"fa-bounce":f,"fa-shake":m,"fa-flash":g,"fa-spin":p,"fa-spin-reverse":b,"fa-spin-pulse":h,"fa-pulse":R,"fa-fw":T,"fa-inverse":U,"fa-border":z,"fa-li":N,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},yl(r,"fa-".concat(C),typeof C<"u"&&C!==null),yl(r,"fa-rotate-".concat(B),typeof B<"u"&&B!==null&&B!==0),yl(r,"fa-pull-".concat(Y),typeof Y<"u"&&Y!==null),yl(r,"fa-swap-opacity",l.swapOpacity),r);return Object.keys(F).map(function(D){return F[D]?D:null}).filter(function(D){return D})}function S5(l){return l=l-0,l===l}function Sy(l){return S5(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(r,c){return c?c.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var x5=["style"];function E5(l){return l.charAt(0).toUpperCase()+l.slice(1)}function A5(l){return l.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,c){var s=c.indexOf(":"),o=Sy(c.slice(0,s)),f=c.slice(s+1).trim();return o.startsWith("webkit")?r[E5(o)]=f:r[o]=f,r},{})}function xy(l,r){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var s=(r.children||[]).map(function(p){return xy(l,p)}),o=Object.keys(r.attributes||{}).reduce(function(p,h){var b=r.attributes[h];switch(h){case"class":p.attrs.className=b,delete r.attributes.class;break;case"style":p.attrs.style=A5(b);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?p.attrs[h.toLowerCase()]=b:p.attrs[Sy(h)]=b}return p},{attrs:{}}),f=c.style,m=f===void 0?{}:f,g=h5(c,x5);return o.attrs.style=Pe(Pe({},o.attrs.style),m),l.apply(void 0,[r.tag,Pe(Pe({},o.attrs),g)].concat(Ho(s)))}var Ey=!1;try{Ey=!0}catch{}function O5(){if(!Ey&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function e1(l){if(l&&bu(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(Uo.icon)return Uo.icon(l);if(l===null)return null;if(l&&bu(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function oo(l,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?yl({},l,r):{}}var a1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Su=Bo.forwardRef(function(l,r){var c=Pe(Pe({},a1),l),s=c.icon,o=c.mask,f=c.symbol,m=c.className,g=c.title,p=c.titleId,h=c.maskId,b=e1(s),R=oo("classes",[].concat(Ho(b5(c)),Ho((m||"").split(" ")))),T=oo("transform",typeof c.transform=="string"?Uo.transform(c.transform):c.transform),U=oo("mask",e1(o)),z=c5(b,Pe(Pe(Pe(Pe({},R),T),U),{},{symbol:f,title:g,titleId:p,maskId:h}));if(!z)return O5("Could not find icon",b),null;var N=z.abstract,A={ref:r};return Object.keys(c).forEach(function(C){a1.hasOwnProperty(C)||(A[C]=c[C])}),T5(N[0],A)});Su.displayName="FontAwesomeIcon";Su.propTypes={beat:mt.bool,border:mt.bool,beatFade:mt.bool,bounce:mt.bool,className:mt.string,fade:mt.bool,flash:mt.bool,mask:mt.oneOfType([mt.object,mt.array,mt.string]),maskId:mt.string,fixedWidth:mt.bool,inverse:mt.bool,flip:mt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:mt.oneOfType([mt.object,mt.array,mt.string]),listItem:mt.bool,pull:mt.oneOf(["right","left"]),pulse:mt.bool,rotation:mt.oneOf([0,90,180,270]),shake:mt.bool,size:mt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:mt.bool,spinPulse:mt.bool,spinReverse:mt.bool,symbol:mt.oneOfType([mt.bool,mt.string]),title:mt.string,titleId:mt.string,transform:mt.oneOfType([mt.string,mt.object]),swapOpacity:mt.bool};var T5=xy.bind(null,Bo.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const R5={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},w5={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Du(){return j.jsx("div",{children:j.jsx(Bi,{children:j.jsxs("footer",{className:"bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 text-center",children:[j.jsxs("div",{className:"mb-4",children:[j.jsx("a",{href:"https://www.linkedin.com/in/rafaelchoza-fullstackjava",target:"_blank",rel:"noopener noreferrer",className:"mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl",children:j.jsx(Su,{icon:R5})}),j.jsx("a",{href:"https://github.com/rafaelchoza",target:"_blank",rel:"noopener noreferrer",className:"mx-2 text-gray-400 hover:text-blue-400 transition duration-300 text-2xl",children:j.jsx(Su,{icon:w5})})]}),j.jsx("p",{className:"text-sm md:text-base text-gray-500 mb-4",children:"© 2025 Rafael Choza. Todos los derechos reservados."}),j.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300",children:"Volver al inicio"})]})})})}function z5(){return j.jsx("div",{children:j.jsxs(Bi,{children:[j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-left py-5",children:"Acerca de mi"}),j.jsxs("p",{className:"text-6xl p-10 text-justify",children:["Me llamo",j.jsx("strong",{className:"text-amber-400",children:" Rafael Choza"}),", radico en la ciudad de Mérida Yucatán México. He trabajado en diversos proyectos que abarcan desde el diseño de interfaces de usuario hasta la implementación de servicios backend. Me apasiona crear soluciones eficientes y de alta calidad que mejoren la experiencia del usuario y optimicen los procesos empresariales. Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente."]}),j.jsxs("section",{className:"p-10",children:[j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-left py-5",children:"Mis habilidades blandas son las siguientes:"}),j.jsxs("div",{className:"flex flex-row",children:[j.jsxs("ul",{className:"text-2xl",children:[j.jsxs("li",{children:[j.jsx("strong",{className:"text-amber-400",children:"Comunicación efectiva:"})," Capaz de transmitir ideas y soluciones de manera clara y concisa."]}),j.jsxs("li",{children:[j.jsx("strong",{className:"text-amber-400",children:"Trabajo en equipo:"})," Disfruto colaborando con otros desarrolladores y profesionales para alcanzar objetivos comunes."]}),j.jsxs("li",{children:[j.jsx("strong",{className:"text-amber-400",children:"Resolución de problemas:"})," Enfrento los desafíos con una mentalidad analítica y creativa."]}),j.jsxs("li",{children:[j.jsx("strong",{className:"text-amber-400",children:"Adaptabilidad:"})," Me adapto rápidamente a nuevas tecnologías y metodologías de trabajo."]}),j.jsxs("li",{children:[j.jsx("strong",{className:"text-amber-400",children:"Gestión del tiempo:"})," Organizo y priorizo tareas para cumplir con los plazos establecidos."]})]}),j.jsx("img",{className:"w-1/3 rounded-3xl border-4 border-amber-500",src:"/src/img/yo.jpg",alt:""})]})]})]})})}function _5(){return j.jsx("div",{children:j.jsxs("section",{id:"about",className:"mb-12 px-10",children:[j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-left py-5",children:"Lenguajes y herramientas"}),j.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-100 rounded-xl p-4 shadow-lg",children:[j.jsx("img",{src:"https://www.vectorlogo.zone/logos/java/java-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21~old.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/python/python-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/github/github-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/docker/docker-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/gradle/gradle-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/springio/springio-ar21.svg"}),j.jsx("img",{src:"https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"})]})]})})}function M5(){const[l,r]=M.useState(0);return M.useEffect(()=>{const c=()=>{r(window.scrollY)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),j.jsxs("div",{className:"relative text-white min-h-screen flex flex-col",children:[j.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10",style:{backgroundImage:"url('./src/img/fondo.jpg')",backgroundPosition:`center ${l*.5}px`}}),j.jsx(wu,{}),j.jsx(z5,{}),j.jsx(_5,{}),j.jsx(Du,{})]})}function of(){const[l,r]=M.useState(0);return M.useEffect(()=>{const c=()=>{r(window.scrollY)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),j.jsx(j.Fragment,{children:j.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10",style:{backgroundImage:"url('./src/img/fondo.jpg')",backgroundPosition:`center ${l*.5}px`}})})}function C5(){return j.jsxs("div",{className:"relative text-white min-h-screen flex flex-col",children:[j.jsx(of,{}),j.jsx(wu,{}),j.jsxs(Bi,{children:[j.jsxs("form",{action:"",className:"flex flex-col items-center",children:[j.jsx("label",{htmlFor:"name",className:"text-white text-2xl p-3",children:"Nombre"}),j.jsx("input",{className:"bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl",type:"text",name:"nombre",placeholder:"Tu nombre aquí"}),j.jsx("label",{htmlFor:"correo",className:"text-white text-2xl p-3",children:"Correo"}),j.jsx("input",{className:"bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl",type:"text",name:"correo",placeholder:"Tu correo aquí"}),j.jsx("label",{htmlFor:"comentarios",className:"text-white text-2xl p-3",children:"Comentarios"}),j.jsx("textarea",{className:"bg-white text-gray-600 p-3 border-6 border-gray-600 rounded-xl mb-5",name:"comentarios",placeholder:"Tus comentarios aquí"})]}),j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-left text-center",children:"Redes Sociales"}),j.jsxs("section",{className:"flex flex-row justify-center items-center h-full",children:[j.jsx("a",{href:"https://www.linkedin.com/in/rafaelchoza-fullstackjava",target:"_blank",rel:"noopener noreferrer",children:j.jsx("img",{src:"https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg",alt:"linkedinLogo",className:`bg-white mx-10 rounded-2xl m-10 hover:scale-105 transform \r
            transition-transform duration-300`})}),j.jsx("a",{href:"https://www.github.com/rafaelchoza",target:"_blank",rel:"noopener noreferrer",children:j.jsx("img",{src:"https://www.vectorlogo.zone/logos/github/github-ar21.svg",alt:"GitHubLogo",className:`bg-white mx-10 rounded-2xl m-10 hover:scale-105 transform transition-transform\r
            duration-300`})})]})]}),j.jsx(Du,{})]})}function N5(){return j.jsxs("div",{className:"relative text-white min-h-screen flex flex-col",children:[j.jsx(wu,{}),j.jsx(of,{}),j.jsxs(Bi,{children:[j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-left py-5",children:"Mi Curriculum"}),j.jsxs("div",{className:"pdf-viewer-container p-10",children:[j.jsx("embed",{src:"/src/resources/CV.pdf",type:"application/pdf",className:"w-full h-96",title:"PDF Viewer"}),j.jsx("a",{href:"/src/resources/CV.pdf",download:"CV.pdf",className:"mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Descargar PDF"})]})]}),j.jsx(Du,{})]})}function D5(){const l=[{name:"ADMINISTRADOR DE GASTOS E INGRESOS",description:"Administrador de gastos e ingresos, calculando el balance. Este proyecto usa Python y Django en el backend, en el frontend usa TailwindCSS.",link:"https://rafaelchoza.pythonanywhere.com",image:""},{name:"Proyecto 2",description:"Descripción breve del proyecto 2",link:"#",image:""},{name:"Proyecto 3",description:"Descripción breve del proyecto 3",link:"#",image:""}];return j.jsxs("div",{className:"relative text-white min-h-screen flex flex-col",children:[j.jsx(of,{}),j.jsx(wu,{}),j.jsxs("section",{id:"projects",className:"mb-12",children:[j.jsx("h2",{className:"text-2xl md:text-3xl font-semibold animate-slide-up",children:"Mis Proyectos"}),j.jsx("ul",{className:"mt-6 space-y-6",children:l.map((r,c)=>j.jsxs("li",{className:"bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-500 ease-out transform hover:scale-105 animate-scale-in",children:[j.jsx("h3",{className:"text-xl md:text-2xl font-bold",children:r.name}),j.jsx("p",{className:"text-gray-400 mt-2",children:r.description}),j.jsxs("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110",children:[j.jsx("img",{src:r.image,alt:""}),"Ver Proyecto"]})]},c))})]}),j.jsx(Du,{})]})}const j5=[{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"},{id:"hola",content:"hola"}];function U5(){return j.jsxs("div",{children:[j.jsx("h1",{children:"Welcome to my app!"}),j.jsx(u3,{cascade:!0,damping:.2,triggerOnce:!0,children:j5.map(l=>j.jsx("div",{className:"feature-card",children:l.content},l.id))})]})}var H5={};const L5=H5.PUBLIC_URL;function Y5(){return j.jsx(yb,{basename:L5,children:j.jsxs(Zv,{children:[j.jsx(ml,{path:"/",element:j.jsx(M5,{})}),j.jsx(ml,{path:"/contacto",element:j.jsx(C5,{})}),j.jsx(ml,{path:"/curriculum",element:j.jsx(N5,{})}),j.jsx(ml,{path:"/proyectos",element:j.jsx(D5,{})}),j.jsx(ml,{path:"/animation",element:j.jsx(U5,{})})]})})}ev.createRoot(document.getElementById("root")).render(j.jsx(M.StrictMode,{children:j.jsx(Y5,{})}));
