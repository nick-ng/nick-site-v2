var Cn=Array.isArray,Jt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Yn=Array.prototype,Xt=Object.getPrototypeOf;const Mn=()=>{};function jn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Et=4,B=8,ot=16,x=32,V=64,Z=128,I=256,W=512,p=1024,R=2048,F=4096,b=8192,q=16384,nn=32768,mt=65536,Un=1<<17,rn=1<<19,gt=1<<20,ht=Symbol("$state"),Hn=Symbol("legacy props");function Tt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function $n(){tt=!0}const Zn=1,Wn=2,zn=4,Jn=8,Qn=16,Xn=1,tr=2,_n="[",cn="[!",vn="]",kt={},nr=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function rr(t){return pn(it(t))}function er(t,n=!1){var e;const r=it(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function pn(t){return u!==null&&!A&&u.f&w&&(g===null?xn([t]):g.push(t)),t}function lr(t,n){return u!==null&&!A&&nt()&&u.f&(w|ot)&&(g===null||!g.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),xt(t,R),nt()&&i!==null&&i.f&p&&!(i.f&(x|V))&&(T===null?Rn([t]):T.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&R||!e&&a===i||(E(a,n),o&(p|I)&&(o&w?xt(a,F):et(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function sr(t){C=t}let k;function M(t){if(t===null)throw Rt(),kt;return k=t}function ar(){return M(L(k))}function ur(t){if(C){if(L(k)!==null)throw Rt(),kt;k=t}}function or(){for(var t=0,n=k;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=L(n);n.remove(),n=e}}var dt,Dt,St;function ir(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;Dt=pt(n,"firstChild").get,St=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return Dt.call(t)}function L(t){return St.call(t)}function fr(t,n){if(!C)return st(t);var r=st(k);if(r===null)r=k.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function _r(t,n){if(!C){var r=st(t);return r instanceof Comment&&r.data===""?L(r):r}return k}function cr(t,n=1,r=!1){let e=C?k:t;for(var l;n--;)l=e,e=L(e);if(!C)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function vr(t){t.textContent=""}function Ot(t){var n=w|R;i===null?n|=I:i.f|=gt;var r=u!==null&&u.f&w?u:null;const e={children:null,ctx:f,deps:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(t){const n=Ot(t);return n.equals=At,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ft(e):O(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Nt(t){var n,r=i;Q(dn(t));try{It(t),n=Kt(t)}finally{Q(r)}return n}function Pt(t){var n=Nt(t),r=(S||t.f&I)&&t.deps!==null?F:p;E(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function ft(t){It(t),H(t,0),E(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){i===null&&u===null&&an(),u!==null&&u.f&I&&sn(),_t&&ln()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&V)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=N;try{yt(!0),ct(a),a.f|=nn}catch(m){throw O(a),m}finally{yt(o)}}else n!==null&&et(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(gt|Z))===0;if(!_&&!l&&e&&(s!==null&&yn(a,s),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(a)}return a}function hr(t){const n=Y(B,null,!1);return E(n,p),n.teardown=t,n}function dr(t){bt();var n=i!==null&&(i.f&x)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Ct(t);return e}}function yr(t){return bt(),wn(t)}function wr(t){const n=Y(V,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ct(t){return Y(Et,t,!1)}function wn(t){return Y(B,t,!0)}function Er(t,n=[],r=Ot){const e=n.map(r);return En(()=>t(...e.map(Pn)))}function En(t,n=0){return Y(B|ot|n,t,!0)}function mr(t,n=!0){return Y(B|x,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=u;wt(!0),J(null);try{n.call(null)}finally{wt(r),J(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:L(e);e.remove(),e=s}r=!0}Lt(t,n&&!r),qt(t),H(t,0),E(t,q);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var o=t.parent;o!==null&&o.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Mt(t,r,!0),Tn(r,()=>{O(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&mt)!==0||(e.f&x)!==0;Mt(e,n,s?r:!1),e=l}}}function gr(t){jt(t,!0)}function jt(t,n){if(t.f&b){t.f^=b,t.f&p||(t.f^=p),G(t)&&(E(t,R),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&x)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let z=!1,at=[];function Ut(){z=!1;const t=at.slice();at=[],tn(t)}function Tr(t){z||(z=!0,queueMicrotask(Ut)),at.push(t)}function An(){z&&Ut()}const Ht=0,kn=1;let K=!1,$=Ht,j=!1,U=null,N=!1,_t=!1;function yt(t){N=t}function wt(t){_t=t}let D=[],P=0;let u=null,A=!1;function J(t){u=t}let i=null;function Q(t){i=t}let g=null;function xn(t){g=t}let h=null,y=0,T=null;function Rn(t){T=t}let Bt=1,X=0,S=!1,f=null;function Vt(){return++Bt}function nt(){return!tt||f!==null&&f.l===null}function G(t){var c;var n=t.f;if(n&R)return!0;if(n&F){var r=t.deps,e=(n&I)!==0;if(r!==null){var l,s,a=(n&W)!==0,o=e&&i!==null&&!S,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=W)}for(l=0;l<_;l++)if(s=r[l],G(s)&&Pt(s),s.wv>t.wv)return!0}(!e||i!==null&&!S)&&E(t,p)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Sn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Sn(n))throw t;return}r!==null&&(K=!0);{Dn(t,n);return}}function Gt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?Gt(s,n,r+1):n===s&&(r===0?E(s,R):s.f&p&&E(s,F),et(s))}}function Kt(t){var vt;var n=h,r=y,e=T,l=u,s=S,a=g,o=f,_=A,c=t.f;h=null,y=0,T=null,u=c&(x|V)?null:t,S=!N&&(c&I)!==0,g=null,f=t.ctx,A=!1,X++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(H(t,y),v!==null&&y>0)for(v.length=y+h.length,d=0;d<h.length;d++)v[y+d]=h[d];else t.deps=v=h;if(!S)for(d=y;d<v.length;d++)((vt=v[d]).reactions??(vt.reactions=[])).push(t)}else v!==null&&y<v.length&&(H(t,y),v.length=y);if(nt()&&T!==null&&!(t.f&(w|F|R)))for(d=0;d<T.length;d++)Gt(T[d],t);return l!==null&&X++,m}finally{h=n,y=r,T=e,u=l,S=s,g=a,f=o,A=_}}function On(t,n){let r=n.reactions;if(r!==null){var e=Jt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(E(n,F),n.f&(I|W)||(n.f^=W),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function ct(t){var n=t.f;if(!(n&q)){E(t,p);var r=i,e=f;i=t;try{n&ot?mn(t):Lt(t),qt(t),Ft(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,a}catch(o){rt(o,t,r,e||t.ctx)}finally{i=r}}}function $t(){if(P>1e3){P=0;try{un()}catch(t){if(U!==null)rt(t,U,null);else throw t}}P++}function Zt(t){var n=t.length;if(n!==0){$t();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];Wt(l,s),In(s)}}finally{N=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|b)))try{G(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Nn(){if(j=!1,P>1001)return;const t=D;D=[],Zt(t),j||(P=0,U=null)}function et(t){$===Ht&&(j||(j=!0,queueMicrotask(Nn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(V|x)){if(!(r&p))return;n.f^=p}}D.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&b))if(l&B){if(s)r.f^=p;else try{G(r)&&ct(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Et&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),Wt(_,n)}function zt(t){var n=$,r=D;try{$t();const l=[];$=kn,D=l,j=!1,Zt(r);var e=t==null?void 0:t();return An(),(D.length>0||l.length>0)&&zt(),P=0,U=null,e}finally{$=n,D=r}}async function Ar(){await Promise.resolve(),zt()}function Pn(t){var m;var n=t.f,r=(n&w)!==0;if(r&&n&q){var e=Nt(t);return ft(t),e}if(u!==null&&!A){g!==null&&g.includes(t)&&on();var l=u.deps;t.rv<X&&(t.rv=X,h===null&&l!==null&&l[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&w){var _=a;o=_,a=_.parent}else{var c=a;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,G(s)&&Pt(s)),t.v}function kr(t){var n=A;try{return A=!0,t()}finally{A=n}}const bn=-7169;function E(t,n){t.f=t.f&bn|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function Rr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Q(s.effect),J(s.reaction),Ct(s.fn)}}finally{Q(r),J(e)}}f=n.p,n.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{nr as $,fr as A,ur as B,J as C,Q as D,u as E,hr as F,Tr as G,_n as H,qn as I,Cn as J,yr as K,tn as L,Pn as M,jn as N,Dr as O,Ot as P,_r as Q,Er as R,tr as S,Xn as T,ht as U,Ln as V,Yn as W,it as X,Gn as Y,lr as Z,pt as _,L as a,Kn as a0,Xt as a1,En as a2,mt as a3,cn as a4,or as a5,gr as a6,gn as a7,Ct as a8,wn as a9,Vn as aa,Un as ab,zn as ac,At as ad,x as ae,V as af,Zn as ag,Wn as ah,Jn as ai,Hn as aj,pr as ak,er as al,Qn as am,zt as an,Ar as ao,rr as ap,Mn as aq,en as ar,kt as b,M as c,k as d,$n as e,vn as f,st as g,ar as h,ir as i,Rt as j,Bn as k,vr as l,Fn as m,wr as n,lt as o,mr as p,C as q,xr as r,sr as s,i as t,Rr as u,f as v,tt as w,dr as x,kr as y,cr as z};
