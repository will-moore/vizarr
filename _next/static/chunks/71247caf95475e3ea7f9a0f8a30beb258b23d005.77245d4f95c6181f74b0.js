(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"25BE":function(e,t,n){"use strict";function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return o}))},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("a3WO");function r(e,t){if(e){if("string"===typeof e)return Object(o.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o.a)(e,t):void 0}}},DSFK:function(e,t,n){"use strict";function o(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return o}))},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("zLVn");function r(e,t){if(null==e)return{};var n,r,a=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("a3WO");var r=n("25BE"),a=n("BsWD");function s(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(r.a)(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},MF5s:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=o(n("i8i4"));function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i{constructor(e){s(this,"key",void 0),this.key=e}}class u extends i{}class c extends i{}var l={AbstractRecoilValue:i,RecoilState:u,RecoilValueReadOnly:c,isRecoilValue:function(e){return e instanceof u||e instanceof c}},d=l.AbstractRecoilValue,f=l.RecoilState,p=l.RecoilValueReadOnly,S=l.isRecoilValue;function y(e){return e&&e.default||e}var b=y(Object.freeze({__proto__:null,AbstractRecoilValue:d,RecoilState:f,RecoilValueReadOnly:p,isRecoilValue:S}));class h{}const m=new h;class g extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const w=new Map;class v extends Error{}var A={nodes:w,registerNode:function(e){return w.has(e.key)&&e.key,w.set(e.key,e),null==e.set?new b.RecoilValueReadOnly(e.key):new b.RecoilState(e.key)},getNode:function(e){const t=w.get(e);if(null==t)throw new v(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:v,DefaultValue:h,DEFAULT_VALUE:m,RecoilValueNotReady:g},R={enqueueExecution:function(e,t){t()}},T={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}},E={trace:function(e,t,n){return n()},wrap:function(e){return e}};const{mapByDeletingFromMap:_,mapBySettingInMap:V,mapByUpdatingInMap:N,setByAddingToSet:M}=T,{getNode:O}=A,L=Object.freeze(new Map),k=Object.freeze(new Set);class U extends Error{}function B(e,t,n){return O(n).get(e,t)}let D=0;var F={getNodeLoadable:B,peekNodeLoadable:function(e,t,n){return B(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=O(n);if(null==r.set)throw new U("Attempt to set read-only RecoilValue: "+n);const[a,s]=r.set(e,t,o);return[a,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:_(e.atomValues,t),nonvalidatedAtoms:V(e.nonvalidatedAtoms,t,n),dirtyAtoms:M(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=D++;return[{...e,nodeToComponentSubscriptions:N(e.nodeToComponentSubscriptions,t,e=>V(null!=e?e:L,o,["TODO debug name",n]))},function(e){return{...e,nodeToComponentSubscriptions:N(e.nodeToComponentSubscriptions,t,e=>_(null!=e?e:L,o))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let s=r.pop();s;s=r.pop()){var a;n.add(s),o.add(s);const t=null!==(a=e.nodeToNodeSubscriptions.get(s))&&void 0!==a?a:k;for(const e of t)o.has(e)||r.push(e)}return n}(r,t);for(const i of a){var s;(null!==(s=r.nodeToComponentSubscriptions.get(i))&&void 0!==s?s:[]).forEach(([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)})}E.trace("value became available, waking components",Array.from(t).join(", "),()=>{const t=e.getState().suspendedComponentResolvers;t.forEach(e=>e()),t.clear()})},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" \u2192 "));for(const s of r)e(t,[...n,s])}},j=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};const{getNodeLoadable:C,peekNodeLoadable:I,setNodeValue:P,setUnvalidatedAtomValue:x,subscribeComponentToNode:z}=F,{RecoilValueNotReady:W}=A,{AbstractRecoilValue:$,RecoilState:q,RecoilValueReadOnly:G}=b;var J={RecoilValueReadOnly:G,AbstractRecoilValue:$,RecoilState:q,valueFromValueOrUpdater:function(e,{key:t},n){if("function"==typeof n){var o;const r=e.getState(),a=null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,s=I(e,a,t);if("loading"===s.state)throw new W(t);if("hasError"===s.state)throw s.contents;return n(s.contents)}return n},getRecoilValueAsLoadable:function(e,{key:t}){let n;return E.trace("get RecoilValue",t,()=>e.replaceState(E.wrap(o=>{const[r,a]=C(e,o,t);return n=a,r}))),n},setRecoilValue:function(e,{key:t},n){E.trace("set RecoilValue",t,()=>e.replaceState(E.wrap(o=>{const[r,a]=P(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r})))},setUnvalidatedRecoilValue:function(e,{key:t},n){E.trace("set unvalidated persisted atom",t,()=>e.replaceState(E.wrap(o=>{const r=x(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r})))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return E.trace("subscribe component to RecoilValue",t,()=>e.replaceState(E.wrap(e=>([o,r]=z(e,t,n),o)))),{release:e=>e.replaceState(r)}}};function K(){return{transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map}}function Y(e){return{currentTree:e,nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set}}var X={makeEmptyTreeState:K,makeEmptyStoreState:function(){return Y(K())},makeStoreState:Y};const{DEFAULT_VALUE:Q}=A,{getRecoilValueAsLoadable:H,setRecoilValue:Z,valueFromValueOrUpdater:ee}=J,{makeEmptyTreeState:te,makeStoreState:ne}=X;class oe{constructor(e){s(this,"_store",void 0),s(this,"getLoadable",e=>H(this._store,e)),s(this,"getPromise",e=>this.getLoadable(e).toPromise()),s(this,"map",e=>{const t=new se(this._store.getState().currentTree);return e(t),ae(t.getStore_INTERNAL().getState().currentTree)}),s(this,"asyncMap",async e=>{const t=new se(this._store.getState().currentTree);return await e(t),ae(t.getStore_INTERNAL().getState().currentTree)}),this._store=function(e){const t=ne(e);return{getState:()=>t,replaceState:e=>{t.currentTree=e(t.currentTree)},subscribeToTransactions:()=>{throw new Error("Cannot subscribe to Snapshots")},addTransactionMetadata:()=>{throw new Error("Cannot subscribe to Snapshots")},fireNodeSubscriptions:()=>{}}}(e)}getStore_INTERNAL(){return this._store}}function re(e){return{transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:j(e.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:new Map}}function ae(e){return new oe(re(e))}class se extends oe{constructor(e){super(re(e)),s(this,"set",(e,t)=>{const n=this.getStore_INTERNAL(),o=ee(n,e,t);Z(n,e,o)}),s(this,"reset",e=>Z(this.getStore_INTERNAL(),e,Q))}}var ie={Snapshot:oe,MutableSnapshot:se,freshSnapshot:function(){return new oe(te())},cloneSnapshot:ae},ue=ie.Snapshot,ce=ie.MutableSnapshot,le=ie.freshSnapshot,de=ie.cloneSnapshot,fe=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")},pe=y(Object.freeze({__proto__:null,Snapshot:ue,MutableSnapshot:ce,freshSnapshot:le,cloneSnapshot:de}));const{useContext:Se,useEffect:ye,useRef:be,useState:he}=r,{fireNodeSubscriptions:me,setNodeValue:ge,setUnvalidatedAtomValue:we}=F,{freshSnapshot:ve}=pe,{makeEmptyStoreState:Ae,makeStoreState:Re}=X;function Te(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const Ee=Object.freeze({getState:Te,replaceState:Te,subscribeToTransactions:Te,addTransactionMetadata:Te,fireNodeSubscriptions:Te});function _e(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const Ve=r.createContext({current:Ee}),Ne=()=>Se(Ve);function Me(e){const t=Ne(),[n,o]=he([]);return e.setNotifyBatcherOfChange(()=>o({})),ye(()=>{R.enqueueExecution("Batcher",()=>{const e=t.current.getState(),{nextTree:n}=e;null!==n&&(n.dirtyAtoms.size&&e.transactionSubscriptions.forEach(e=>e(t.current)),e.queuedComponentCallbacks.forEach(e=>e(n)),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=n,e.nextTree=null)})}),null}let Oe=0;var Le={useStoreRef:Ne,RecoilRoot:function({initializeState_DEPRECATED:e,initializeState:t,children:n}){let o;const a=be(null),s={getState:()=>o.current,replaceState:e=>{const t=i.current.getState();_e(t);const n=fe(t.nextTree),o=e(n);o!==n&&(t.nextTree=o,fe(a.current)())},subscribeToTransactions:e=>{const t=Oe++;return i.current.getState().transactionSubscriptions.set(t,e),{release:()=>{i.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{_e(i.current.getState());for(const t of Object.keys(e))fe(i.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){me(i.current,e,t)}},i=be(s);return o=be(null!=e?function(e,t){const n=Ae();return t({set:(t,o)=>{n.currentTree=ge(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=we(n.currentTree,t,e)})}}),n}(s,e):null!=t?function(e){const t=ve().map(e);return Re(t.getStore_INTERNAL().getState().currentTree)}(t):Ae()),r.createElement(Ve.Provider,{value:i},r.createElement(Me,{setNotifyBatcherOfChange:function(e){a.current=e}}),n)}},ke=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},Ue=function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n},Be=function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t};const{useCallback:De,useEffect:Fe,useMemo:je,useRef:Ce,useState:Ie}=r,{peekNodeLoadable:Pe,setNodeValue:xe}=F,{DEFAULT_VALUE:ze,getNode:We,nodes:$e}=A,{useStoreRef:qe}=Le,{AbstractRecoilValue:Ge,getRecoilValueAsLoadable:Je,setRecoilValue:Ke,setUnvalidatedRecoilValue:Ye,subscribeToRecoilValue:Xe,valueFromValueOrUpdater:Qe}=J,{Snapshot:He,cloneSnapshot:Ze}=pe,{setByAddingToSet:et}=T;function tt(){const e=qe(),[t,n]=Ie([]),o=Ce(new Set);o.current=new Set;const r=Ce(new Set),a=Ce(new Map),s=De(t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))},[e,a]);return Fe(()=>{const t=e.current;function i(e,t){a.current.has(t)&&n([])}ke(o.current,r.current).forEach(e=>{if(a.current.has(e))return;const n=Xe(t,new Ge(e),t=>{E.trace("RecoilValue subscription fired",e,()=>{i(0,e)})});a.current.set(e,n),E.trace("initial update on subscribing",e,()=>{i(t.getState(),e)})}),ke(r.current,o.current).forEach(e=>{s(e)}),r.current=o.current}),Fe(()=>{const e=a.current;return()=>e.forEach((e,t)=>s(t))},[s]),je(()=>{function t(t){return n=>{const o=Qe(e.current,t,n);Ke(e.current,t,o)}}function n(t){return o.current.has(t.key)||(o.current=et(o.current,t.key)),Je(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)});throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>Ke(e.current,t,ze)}}},[o,e])}function nt(e){const t=qe();Fe(()=>t.current.subscribeToTransactions(e).release,[e,t])}function ot(e){const t=e.atomValues,n=j(Ue(t,(e,t)=>{var n;const o=null===(n=We(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state}),e=>e.contents);return Be(e.nonvalidatedAtoms,n)}function rt(){const e=qe();return De(t=>{a.unstable_batchedUpdates(()=>{e.current.replaceState(n=>{const o=t.getStore_INTERNAL().getState().currentTree,r=new Set;for(const e of[n.atomValues.keys(),o.atomValues.keys()])for(const t of e){var a,s;(null===(a=n.atomValues.get(t))||void 0===a?void 0:a.contents)!==(null===(s=o.atomValues.get(t))||void 0===s?void 0:s.contents)&&r.add(t)}return e.current.fireNodeSubscriptions(r,"enqueue"),{...o,nodeToComponentSubscriptions:n.nodeToComponentSubscriptions}})})},[e])}class at{}const st=new at;var it={useRecoilCallback:function(e,t){const n=qe(),o=rt();return De((...t)=>{const r=Ze(n.current.getState().currentTree);function s(e,t){const o=Qe(n.current,e,t);Ke(n.current,e,o)}function i(e){Ke(n.current,e,ze)}let u=st;return a.unstable_batchedUpdates(()=>{u=e({set:s,reset:i,snapshot:r,gotoSnapshot:o})(...t)}),u instanceof at&&function(e,t){if(!e)throw new Error(t)}(!1),u},null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return tt().getRecoilValue(e)},useRecoilValueLoadable:function(e){return tt().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=tt(),[n]=t.getRecoilState(e);return[n,De(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=tt(),[n]=t.getRecoilStateLoadable(e);return[n,De(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return De(tt().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return De(tt().getResetRecoilState(e),[e])},useRecoilInterface:tt,useSnapshotWithStateChange_DEPRECATED:function(e){const t=qe();let n=function(){const[e,t]=Ie(0);return nt(De(()=>t(e=>e+1),[])),{transactionMetadata:{...(n=qe().current.getState().currentTree).transactionMetadata},atomValues:new Map(n.atomValues),nonvalidatedAtoms:new Map(n.nonvalidatedAtoms),dirtyAtoms:new Set(n.dirtyAtoms),nodeDeps:new Map(n.nodeDeps),nodeToNodeSubscriptions:j(n.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:j(n.nodeToComponentSubscriptions,e=>new Map(e))};var n}();e(({key:e},o)=>{[n]=xe(t.current,n,e,Pe(t.current,n,e).map(o))});const o=j(n.atomValues,e=>e.contents),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionSubscription_DEPRECATED:nt,useTransactionObservation_DEPRECATED:function(e){nt(De(t=>{const n=t.getState().currentTree;let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=ot(o),a=ot(n),s=j($e,e=>{var t,n,o,r,a,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(s=a.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==r&&r}}}),i=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})},[e]))},useRecoilTransactionObserver:function(e){nt(De(t=>{const n=t.getState().currentTree;let o=t.getState().nextTree;o||(o=n),e({snapshot:Ze(o),previousSnapshot:Ze(n)})},[e]))},useRecoilSnapshot:function(){const e=qe(),[t,n]=Ie(()=>Ze(e.current.getState().currentTree));return nt(De(e=>{var t;return n(Ze(null!==(t=e.getState().nextTree)&&void 0!==t?t:e.getState().currentTree))},[])),t},useGoToSnapshot_DEPRECATED:function(){const e=qe();return t=>{a.unstable_batchedUpdates(()=>{t.updatedAtoms.forEach(n=>{Ke(e.current,new Ge(n),t.atomValues.get(n))})})}},useGotoRecoilSnapshot:rt,useSetUnvalidatedAtomValues:function(){const e=qe();return(t,n={})=>{a.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>Ye(e.current,new Ge(n),t))})}}},ut=function(e){return!!e&&"function"==typeof e.then};const ct={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return ut(t)?ft(t):lt(t)}catch(t){return ut(t)?ft(t.next(()=>e(this.contents))):dt(t)}if("loading"===this.state)return ft(this.contents.then(e).catch(t=>{if(ut(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function lt(e){return Object.freeze({state:"hasValue",contents:e,...ct})}function dt(e){return Object.freeze({state:"hasError",contents:e,...ct})}function ft(e){return Object.freeze({state:"loading",contents:e,...ct})}var pt={loadableWithValue:lt,loadableWithError:dt,loadableWithPromise:ft,loadableLoading:function(){return ft(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?lt(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?dt(fe(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):ft(Promise.all(e.map(e=>e.contents)))}},St=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;if("undefined"==typeof window)return!1;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!ut(e)}(t)){Object.freeze(t);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const o=t[n];"object"!=typeof o||null==o||Object.isFrozen(o)||e(o)}Object.seal(t)}};const yt=Symbol("ArrayKeyedMap"),bt=new Map;class ht{constructor(e){if(this._base=new Map,e instanceof ht)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:bt}),void 0===n?void 0:n.get(yt)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach(e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r}),r.set(yt,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(yt),this}entries(){const e=[];return function t(n,o){n.forEach((n,r)=>{r===yt?e.push([o,n]):t(n,o.concat(r))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var mt=ht,gt=function(){return new mt},wt=function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const a=r.value;if(!t.call(n,a[1],a[0],e))return!1;r=o.next()}return!0},vt=function(e,t){return e.size===t.size&&wt(e,e=>t.has(e))};Object.freeze(new Set);const{mapBySettingInMap:At,mapByUpdatingInMap:Rt,setByAddingToSet:Tt,setByDeletingFromSet:Et}=T,{detectCircularDependencies:_t,getNodeLoadable:Vt,setNodeValue:Nt}=F,{loadableWithError:Mt,loadableWithPromise:Ot,loadableWithValue:Lt}=pt,{DEFAULT_VALUE:kt,RecoilValueNotReady:Ut,registerNode:Bt}=A,{startPerfBlock:Dt}={startPerfBlock:function(e){return()=>null}},{isRecoilValue:Ft}=b,jt=Object.freeze(new Set);function Ct(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=fe(e.get(n));t.push(n),t.push(o.contents)}return t}var It=function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:gt();function s(o,r){return function o(r,s){var i;let u=s;const c=null!==(i=s.nodeDeps.get(t))&&void 0!==i?i:jt,l=Ct(new Map(Array.from(c).sort().map(e=>{const[t,n]=Vt(r,u,e);return u=t,[e,n]}))),d=a.get(l);if(null!=d)return[u,d];const[f,p,S]=function(e,r){var a;const[s,i,u]=function(e,r){const a=Dt(t);let s=r;const i=new Map;function u({key:t}){let n;if([s,n]=Vt(e,s,t),i.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=Ft(e)?u(e):e,o=ut(t)?Ot(t.finally(a)):(a(),Lt(t));return[s,o,i]}catch(c){const t=ut(c)?Ot(c.then(()=>{let t=Mt(new Error("Internal Recoil Selector Error"));if(e.replaceState(n=>{let r;return[r,t]=o(e,n),r}),"hasError"===t.state)throw t.contents;return t.contents}).finally(a)):(a(),Mt(c));return[s,t,i]}}(e,r);let c=s;const l=null!==(a=r.nodeDeps.get(t))&&void 0!==a?a:jt,d=new Set(u.keys());c=vt(l,d)?c:{...c,nodeDeps:At(c.nodeDeps,t,d)};const f=ke(d,l),p=ke(l,d);for(const n of f)c={...c,nodeToNodeSubscriptions:Rt(c.nodeToNodeSubscriptions,n,e=>Tt(null!=e?e:jt,t))};for(const n of p)c={...c,nodeToNodeSubscriptions:Rt(c.nodeToNodeSubscriptions,n,e=>Et(null!=e?e:jt,t))};return[c,i,u]}(r,u);u=f;const y=Ct(S);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&St(r.contents):r.contents.then(r=>(1==!e.dangerouslyAllowMutability&&St(r),a=a.set(o,Lt(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r)).catch(r=>(ut(r)||(1==!e.dangerouslyAllowMutability&&St(r),a=a.set(o,Mt(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r)),a=a.set(o,r)}(r,y,p),[u,p]}(o,r)}return Bt(null!=r?{key:t,options:e,get:s,set:function(e,t,n){let o=t;const a=new Set;function s({key:t}){const[n,r]=Vt(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new Ut(t):r.contents}function i(t,n){const r="function"==typeof n?n(s(t)):n;let i;[o,i]=Nt(e,o,t.key,r),i.forEach(e=>a.add(e))}return r({set:i,get:s,reset:function(e){i(e,kt)}},n),[o,a]}}:{key:t,options:e,get:s})};const{loadableWithValue:Pt}=pt,{DEFAULT_VALUE:xt,DefaultValue:zt,registerNode:Wt}=A,{isRecoilValue:$t}=b,{mapByDeletingFromMap:qt,mapBySettingInMap:Gt,setByAddingToSet:Jt}=T;var Kt=function e(t){const{default:n,...o}=t;return $t(n)||ut(n)?function(t){const n=e({...t,default:xt,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof zt?e:fe(t.persistence_UNSTABLE).validator(e,xt)}});return It({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof zt?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return Wt({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,fe(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return[r,Pt(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,xt);return a instanceof zt?[{...r,nonvalidatedAtoms:qt(r.nonvalidatedAtoms,t)},Pt(e.default)]:[{...r,atomValues:Gt(r.atomValues,t,Pt(a)),nonvalidatedAtoms:qt(r.nonvalidatedAtoms,t)},Pt(a)]}return[r,Pt(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&St(r),[{...o,dirtyAtoms:Jt(o.dirtyAtoms,t),atomValues:r instanceof zt?qt(o.atomValues,t):Gt(o.atomValues,t,Pt(r)),nonvalidatedAtoms:qt(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},Yt=function(e,t={allowFunctions:!1}){return function e(t,n,o){if("string"==typeof t&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if(!0!==(null==n?void 0:n.allowFunctions))throw new Error("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}return null===t?"null":"object"!=typeof t?null!==(r=JSON.stringify(t))&&void 0!==r?r:"":ut(t)?"__PROMISE__":Array.isArray(t)?`[${t.map((t,o)=>e(t,n,o.toString()))}]`:"function"==typeof t.toJSON?e(t.toJSON(o),n,o):t instanceof Map?e(Array.from(t).reduce((t,[o,r])=>({...t,["string"==typeof o?o:e(o,n)]:r}),{}),n,o):t instanceof Set?e(Array.from(t).sort((t,o)=>e(t,n).localeCompare(e(o,n))),n,o):null!=t[Symbol.iterator]&&"function"==typeof t[Symbol.iterator]?e(Array.from(t),n,o):`{${Object.keys(t).filter(e=>void 0!==t[e]).sort().map(o=>`${e(o,n)}:${e(t[o],n,o)}`).join(",")}}`;var r}(e,t)},Xt=function(){const e=new Map,t={get:t=>e.get(Yt(t)),set:(n,o)=>(e.set(Yt(n),o),t),map:e};return t};let Qt=0;var Ht=function(e){var t,n;let o=null!==(t=null===(n=e.cacheImplementationForParams_UNSTABLE)||void 0===n?void 0:n.call(e))&&void 0!==t?t:Xt();return t=>{var n,r;const a=o.get(t);if(null!=a)return a;const s=`${e.key}__selectorFamily/${null!==(n=Yt(t,{allowFunctions:!0}))&&void 0!==n?n:"void"}/${Qt++}`,i=n=>e.get(t)(n),u=null===(r=e.cacheImplementation_UNSTABLE)||void 0===r?void 0:r.call(e);let c;if(null!=e.set){const n=e.set;c=It({key:s,get:i,set:(e,o)=>n(t)(e,o),cacheImplementation_UNSTABLE:u,dangerouslyAllowMutability:e.dangerouslyAllowMutability})}else c=It({key:s,get:i,cacheImplementation_UNSTABLE:u,dangerouslyAllowMutability:e.dangerouslyAllowMutability});return o=o.set(t,c),c}},Zt=y(Object.freeze({__proto__:null}));const{DEFAULT_VALUE:en,DefaultValue:tn}=A;function nn(e,t){return wt(t,t=>e.has(t))}const on=(e,t)=>Array.from(t).reduce((t,n)=>({...t,[n]:e[n]}),{});function rn(e){if(null==e)return;const{...t}=e;return{...t,validator:e=>e instanceof Zt?new Zt(e.value.filter(([e,t])=>e instanceof Set&&t instanceof Map).map(([e,n])=>[e,Array.from(n.entries()).reduce((e,[n,o])=>{const r=t.validator(o,en);return r instanceof tn||e.set(n,r),e},new Map)])):t.validator(e,en)}}const an=Ht({key:"__constant",get:e=>()=>e,cacheImplementationForParams_UNSTABLE:gt});const sn=Ht({key:"__error",get:e=>()=>{throw new Error(e)},cacheImplementationForParams_UNSTABLE:gt});const{loadableWithError:un,loadableWithPromise:cn,loadableWithValue:ln}=pt;function dn(e,t){const n=Array(t.length).fill(void 0),o=Array(t.length).fill(void 0);for(const[a,s]of t.entries())try{n[a]=e(s)}catch(r){o[a]=r}return[n,o]}function fn(e){return null!=e&&!ut(e)}function pn(e){return Array.isArray(e)?e:Object.getOwnPropertyNames(e).map(t=>e[t])}function Sn(e,t){return Array.isArray(e)?t:Object.getOwnPropertyNames(e).reduce((e,n,o)=>({...e,[n]:t[o]}),{})}function yn(e,t,n){return Sn(e,n.map((e,n)=>null==e?ln(t[n]):ut(e)?cn(e):un(e)))}var bn={waitForNone:Ht({key:"__waitForNone",get:e=>({get:t})=>{const n=pn(e),[o,r]=dn(t,n);return yn(e,o,r)}}),waitForAny:Ht({key:"__waitForAny",get:e=>({get:t})=>{const n=pn(e),[o,r]=dn(t,n);if(r.some(e=>null==e))return yn(e,o,r);if(r.every(fn))throw r.find(fn);throw new Promise((t,n)=>{for(const[a,s]of r.entries())ut(s)&&s.then(n=>{o[a]=n,r[a]=null,t(yn(e,o,r))}).catch(e=>{r[a]=e,r.every(fn)&&n(r[0])})})}}),waitForAll:Ht({key:"__waitForAll",get:e=>({get:t})=>{const n=pn(e),[o,r]=dn(t,n);if(r.every(e=>null==e))return Sn(e,o);const a=r.find(fn);if(null!=a)throw a;throw Promise.all(r).then(t=>Sn(e,t))}}),noWait:Ht({key:"__noWait",get:e=>({get:t})=>{try{return ln(t(e))}catch(n){return ut(n)?cn(n):un(n)}}})};const{DefaultValue:hn}=A,{RecoilRoot:mn}=Le,{isRecoilValue:gn}=b,{useGotoRecoilSnapshot:wn,useRecoilCallback:vn,useRecoilSnapshot:An,useRecoilState:Rn,useRecoilStateLoadable:Tn,useRecoilTransactionObserver:En,useRecoilValue:_n,useRecoilValueLoadable:Vn,useResetRecoilState:Nn,useSetRecoilState:Mn,useSetUnvalidatedAtomValues:On,useTransactionObservation_DEPRECATED:Ln}=it,{noWait:kn,waitForAll:Un,waitForAny:Bn,waitForNone:Dn}=bn;var Fn={DefaultValue:hn,RecoilRoot:mn,atom:Kt,selector:It,atomFamily:function(e){let t=Xt();const n={key:e.key,default:en,persistence_UNSTABLE:rn(e.persistence_UNSTABLE)};let o;o=Kt(n);const r=Ht({key:e.key+"__atomFamily/Default",get:t=>({get:n})=>{const r=n("function"==typeof o?o(t):o);if(!(r instanceof tn)){const e=function(e,t){if(!(e instanceof Zt))return e;if("object"!=typeof t||null==t||Array.isArray(t))return en;const n=e.value,o=new Set(Object.keys(t));for(const[r,a]of n)if(nn(o,r)){const e=o.size===r.size?t:on(t,r),n=a.get(Yt(e));if(void 0!==n)return n}return en}(r,t);if(!(e instanceof tn))return e}return"function"==typeof e.default?e.default(t):e.default},dangerouslyAllowMutability:e.dangerouslyAllowMutability});return n=>{var o;const a=t.get(n);if(null!=a)return a;const s=Kt({key:`${e.key}__${null!==(o=Yt(n))&&void 0!==o?o:"void"}`,default:r(n),persistence_UNSTABLE:e.persistence_UNSTABLE,dangerouslyAllowMutability:e.dangerouslyAllowMutability});return t=t.set(n,s),s}},selectorFamily:Ht,constSelector:function(e){return an(e)},errorSelector:function(e){return sn(e)},readOnlySelector:function(e){return e},useRecoilValue:_n,useRecoilValueLoadable:Vn,useRecoilState:Rn,useRecoilStateLoadable:Tn,useSetRecoilState:Mn,useResetRecoilState:Nn,useRecoilCallback:vn,useGotoRecoilSnapshot:wn,useRecoilSnapshot:An,useRecoilTransactionObserver_UNSTABLE:En,useTransactionObservation_UNSTABLE:Ln,useSetUnvalidatedAtomValues_UNSTABLE:On,noWait:kn,waitForNone:Dn,waitForAny:Bn,waitForAll:Un,isRecoilValue:gn},jn=Fn.DefaultValue,Cn=Fn.RecoilRoot,In=Fn.atom,Pn=Fn.selector,xn=Fn.atomFamily,zn=Fn.selectorFamily,Wn=Fn.constSelector,$n=Fn.errorSelector,qn=Fn.readOnlySelector,Gn=Fn.useRecoilValue,Jn=Fn.useRecoilValueLoadable,Kn=Fn.useRecoilState,Yn=Fn.useRecoilStateLoadable,Xn=Fn.useSetRecoilState,Qn=Fn.useResetRecoilState,Hn=Fn.useRecoilCallback,Zn=Fn.useGotoRecoilSnapshot,eo=Fn.useRecoilSnapshot,to=Fn.useRecoilTransactionObserver_UNSTABLE,no=Fn.useTransactionObservation_UNSTABLE,oo=Fn.useSetUnvalidatedAtomValues_UNSTABLE,ro=Fn.noWait,ao=Fn.waitForNone,so=Fn.waitForAny,io=Fn.waitForAll,uo=Fn.isRecoilValue;t.DefaultValue=jn,t.RecoilRoot=Cn,t.atom=In,t.atomFamily=xn,t.constSelector=Wn,t.default=Fn,t.errorSelector=$n,t.isRecoilValue=uo,t.noWait=ro,t.readOnlySelector=qn,t.selector=Pn,t.selectorFamily=zn,t.useGotoRecoilSnapshot=Zn,t.useRecoilCallback=Hn,t.useRecoilSnapshot=eo,t.useRecoilState=Kn,t.useRecoilStateLoadable=Yn,t.useRecoilTransactionObserver_UNSTABLE=to,t.useRecoilValue=Gn,t.useRecoilValueLoadable=Jn,t.useResetRecoilState=Qn,t.useSetRecoilState=Xn,t.useSetUnvalidatedAtomValues_UNSTABLE=oo,t.useTransactionObservation_UNSTABLE=no,t.waitForAll=io,t.waitForAny=so,t.waitForNone=ao},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("DSFK");var r=n("BsWD"),a=n("PYwp");function s(e,t){return Object(o.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}}(e,t)||Object(r.a)(e,t)||Object(a.a)()}},PYwp:function(e,t,n){"use strict";function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return o}))},U8pU:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}))},a3WO:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,"a",(function(){return o}))},dBaT:function(e,t,n){"use strict";e.exports=n("MF5s")},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},zLVn:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return o}))}}]);