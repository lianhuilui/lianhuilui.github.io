import{s as p,f as m,u as d,g as h,h as k,d as b}from"../chunks/scheduler.82d5f301.js";import{S as g,i as w,s as y,c as $,a as c,d as v,t as L,f as _,g as q,h as C,x as H,k as f}from"../chunks/index.c9b044aa.js";import{p as M}from"../chunks/stores.4321bef2.js";import"../chunks/iconify-icon.6d541906.js";function u(r){let o,a=`<iconify-icon icon="ph:caret-left-light"></iconify-icon>
        Back to Portfolio`;return{c(){o=q("a"),o.innerHTML=a,this.h()},l(i){o=C(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(o)!=="svelte-h6ufaq"&&(o.innerHTML=a),this.h()},h(){f(o,"href","/work"),f(o,"class","block border-gray-400 border-[1px] py-1 px-2 rounded-md my-2 w-fit")},m(i,e){c(i,o,e)},d(i){i&&_(o)}}}function S(r){let o=r[0].route.id.startsWith("/work")&&r[0].route.id!="/work",a,i,e=o&&u();const n=r[2].default,s=m(n,r,r[1],null);return{c(){e&&e.c(),a=y(),s&&s.c()},l(t){e&&e.l(t),a=$(t),s&&s.l(t)},m(t,l){e&&e.m(t,l),c(t,a,l),s&&s.m(t,l),i=!0},p(t,[l]){l&1&&(o=t[0].route.id.startsWith("/work")&&t[0].route.id!="/work"),o?e||(e=u(),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null),s&&s.p&&(!i||l&2)&&d(s,n,t,t[1],i?k(n,t[1],l,null):h(t[1]),null)},i(t){i||(v(s,t),i=!0)},o(t){L(s,t),i=!1},d(t){t&&_(a),e&&e.d(t),s&&s.d(t)}}}function T(r,o,a){let i;b(r,M,s=>a(0,i=s));let{$$slots:e={},$$scope:n}=o;return r.$$set=s=>{"$$scope"in s&&a(1,n=s.$$scope)},[i,n,e]}class P extends g{constructor(o){super(),w(this,o,T,S,p,{})}}export{P as component};
