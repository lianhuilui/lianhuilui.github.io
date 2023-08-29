var K=Object.defineProperty;var Q=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>(Q(e,typeof t!="symbol"?t+"":t,n),n);import{n as x,r as E,j,e as D,k as U,l as M,m as X,p as Y,q as Z,v as ee,w as P,x as te,y as ne,z as ie}from"./scheduler.82d5f301.js";const q=typeof window<"u";let re=q?()=>window.performance.now():()=>Date.now(),R=q?e=>requestAnimationFrame(e):x;const g=new Set;function I(e){g.forEach(t=>{t.c(e)||(g.delete(t),t.f())}),g.size!==0&&R(I)}function se(e){let t;return g.size===0&&R(I),{promise:new Promise(n=>{g.add(t={c:e,f:n})}),abort(){g.delete(t)}}}let C=!1;function oe(){C=!0}function ae(){C=!1}function le(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function ce(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const a=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&a.push(u)}t=a}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let a=0;a<t.length;a++){const l=t[a].claim_order,u=(r>0&&t[n[r]].claim_order<=l?r+1:le(1,r,d=>t[n[d]].claim_order,l))-1;i[a]=n[u]+1;const f=u+1;n[f]=a,r=Math.max(f,r)}const s=[],o=[];let c=t.length-1;for(let a=n[r]+1;a!=0;a=i[a-1]){for(s.push(t[a-1]);c>=a;c--)o.push(t[c]);c--}for(;c>=0;c--)o.push(t[c]);s.reverse(),o.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<o.length;a++){for(;l<s.length&&o[a].claim_order>=s[l].claim_order;)l++;const u=l<s.length?s[l]:null;e.insertBefore(o[a],u)}}function F(e,t){e.appendChild(t)}function V(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function fe(e){const t=k("style");return t.textContent="/* empty */",ue(V(e),t),t.sheet}function ue(e,t){return F(e.head||e,t),t.sheet}function de(e,t){if(C){for(ce(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Re(e,t,n){C&&!n?de(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function ke(){return B(" ")}function Be(){return B("")}function H(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Le(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Me(e){return e.dataset.svelteH}function _e(e){return Array.from(e.childNodes)}function me(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function G(e,t,n,i,r=!1){me(e);const s=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const c=e[o];if(t(c)){const a=n(c);return a===void 0?e.splice(o,1):e[o]=a,r||(e.claim_info.last_index=o),c}}for(let o=e.claim_info.last_index-1;o>=0;o--){const c=e[o];if(t(c)){const a=n(c);return a===void 0?e.splice(o,1):e[o]=a,r?a===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,c}}return i()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function he(e,t,n,i){return G(e,r=>r.nodeName===t,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||s.push(c.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(t))}function Pe(e,t,n){return he(e,t,n,k)}function pe(e,t){return G(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(t),!0)}function He(e){return pe(e," ")}function Oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function We(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let v;function ye(){if(v===void 0){v=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{v=!0}}return v}function qe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ye();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=H(window,"message",o=>{o.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{s=H(i.contentWindow,"resize",t),t()}),F(e,i),()=>{(r||s&&i.contentWindow)&&s(),T(i)}}function Ie(e,t,n){e.classList.toggle(t,!!n)}function $e(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Fe(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${e}_END`?(i-=1,n.push(r)):s===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ve(e,t){return new e(t)}const N=new Map;let A=0;function ge(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function we(e,t){const n={stylesheet:fe(t),rules:{}};return N.set(e,n),n}function xe(e,t,n,i,r,s,o,c=0){const a=16.666/i;let l=`{
`;for(let h=0;h<=1;h+=a){const $=t+(n-t)*s(h);l+=h*100+`%{${o($,1-$)}}
`}const u=l+`100% {${o(n,1-n)}}
}`,f=`__svelte_${ge(u)}_${c}`,d=V(e),{stylesheet:_,rules:m}=N.get(d)||we(d,e);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,A+=1,f}function O(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),A-=r,A||ve())}function ve(){R(()=>{A||(N.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),N.clear())})}let w;function be(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function W(e,t,n){e.dispatchEvent($e(`${t?"intro":"outro"}${n}`))}const b=new Set;let p;function Ge(){p={r:0,c:[],p}}function Je(){p.r||E(p.c),p=p.p}function Ne(e,t){e&&e.i&&(b.delete(e),e.i(t))}function Ke(e,t,n,i){if(e&&e.o){if(b.has(e))return;b.add(e),p.c.push(()=>{b.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Ae={duration:0};function Qe(e,t,n){const i={direction:"in"};let r=t(e,n,i),s=!1,o,c,a=0;function l(){o&&O(e,o)}function u(){const{delay:d=0,duration:_=300,easing:m=U,tick:y=x,css:h}=r||Ae;h&&(o=xe(e,0,1,_,d,m,h,a++)),y(0,1);const $=re()+d,J=$+_;c&&c.abort(),s=!0,D(()=>W(e,!0,"start")),c=se(S=>{if(s){if(S>=J)return y(1,0),W(e,!0,"end"),l(),s=!1;if(S>=$){const L=m((S-$)/_);y(L,1-L)}}return s})}let f=!1;return{start(){f||(f=!0,O(e),j(r)?(r=r(i),be().then(u)):u())},invalidate(){f=!1},end(){s&&(l(),s=!1)}}}function Ue(e){e&&e.c()}function Xe(e,t){e&&e.l(t)}function Ee(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),D(()=>{const s=e.$$.on_mount.map(te).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...s):E(s),e.$$.on_mount=[]}),r.forEach(D)}function Ce(e,t){const n=e.$$;n.fragment!==null&&(Z(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(ne.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ye(e,t,n,i,r,s,o,c=[-1]){const a=ee;P(e);const l=e.$$={fragment:null,ctx:[],props:s,update:x,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:M(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Se(e,f)),d}):[],l.update(),u=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){oe();const f=_e(t.target);l.fragment&&l.fragment.l(f),f.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&Ne(e.$$.fragment),Ee(e,t.target,t.anchor),ae(),X()}P(a)}class Ze{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){Ce(this,1),this.$destroy=x}$on(t,n){if(!j(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);export{H as A,Fe as B,Qe as C,qe as D,Te as E,Ze as S,Re as a,Je as b,He as c,Ne as d,Be as e,T as f,k as g,Pe as h,Ye as i,_e as j,Le as k,We as l,B as m,pe as n,Oe as o,Ge as p,Ve as q,Ue as r,ke as s,Ke as t,Xe as u,Ee as v,Ce as w,Me as x,Ie as y,de as z};