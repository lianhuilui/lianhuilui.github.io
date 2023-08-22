import{s as ce,i as ie,n as re,r as ue}from"../chunks/scheduler.82d5f301.js";import{S as _e,i as he,g as c,s as _,m as pe,h as u,x as p,c as h,j as oe,n as fe,f as l,k as r,y as S,l as ae,a as s,z as j,A as O,o as de}from"../chunks/index.c9b044aa.js";function be(a){let b,n="Rubik Art Generator",f,i,d,L,I,M,N,o,g,W="Source Image",q,m,K="Style 1",D,C,Q="Style 2",E,v,X="Style 3",J,x,Y="Style 4",U,P,Z="Introduction",B,A,$="This is a passion project. I built this in order to learn Svelte. This could be used to aid in the design of a Rubik's Cube art piece.",F,H,ee="Features",G,w,te="<li>Dithering Modes: Floyd-Steinberg, Patterned, or None</li> <li>Multiple color pallettes</li> <li>Performant, Live Updates</li> <li>In-Browser Processing / No server code</li> <li>Screencast-mode: Live processing of application window or desktop screen</li>",R,k,le=`<iconify-icon icon="ph:github-logo-light" class="text-xl align-middle"></iconify-icon>
    Github Repo`,z,y,se="Try the App",V,ne;return{c(){b=c("h1"),b.textContent=n,f=_(),i=c("img"),L=_(),I=c("p"),M=pe(a[1]),N=_(),o=c("div"),g=c("button"),g.textContent=W,q=_(),m=c("button"),m.textContent=K,D=_(),C=c("button"),C.textContent=Q,E=_(),v=c("button"),v.textContent=X,J=_(),x=c("button"),x.textContent=Y,U=_(),P=c("h2"),P.textContent=Z,B=_(),A=c("p"),A.textContent=$,F=_(),H=c("h3"),H.textContent=ee,G=_(),w=c("ul"),w.innerHTML=te,R=_(),k=c("a"),k.innerHTML=le,z=_(),y=c("a"),y.textContent=se,this.h()},l(e){b=u(e,"H1",{"data-svelte-h":!0}),p(b)!=="svelte-1acgrc1"&&(b.textContent=n),f=h(e),i=u(e,"IMG",{class:!0,src:!0,alt:!0}),L=h(e),I=u(e,"P",{class:!0});var t=oe(I);M=fe(t,a[1]),t.forEach(l),N=h(e),o=u(e,"DIV",{class:!0});var T=oe(o);g=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),p(g)!=="svelte-cx9sjn"&&(g.textContent=W),q=h(T),m=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),p(m)!=="svelte-11g6xn8"&&(m.textContent=K),D=h(T),C=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-19dr7sd"&&(C.textContent=Q),E=h(T),v=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),p(v)!=="svelte-f6wkfz"&&(v.textContent=X),J=h(T),x=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-mey3ib"&&(x.textContent=Y),T.forEach(l),U=h(e),P=u(e,"H2",{"data-svelte-h":!0}),p(P)!=="svelte-1ukekoe"&&(P.textContent=Z),B=h(e),A=u(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-l1e0ry"&&(A.textContent=$),F=h(e),H=u(e,"H3",{"data-svelte-h":!0}),p(H)!=="svelte-1mt6x5z"&&(H.textContent=ee),G=h(e),w=u(e,"UL",{style:!0,"data-svelte-h":!0}),p(w)!=="svelte-ebcp1e"&&(w.innerHTML=te),R=h(e),k=u(e,"A",{href:!0,class:!0,target:!0,"data-svelte-h":!0}),p(k)!=="svelte-om7ns6"&&(k.innerHTML=le),z=h(e),y=u(e,"A",{href:!0,class:!0,target:!0,"data-svelte-h":!0}),p(y)!=="svelte-6kltr3"&&(y.textContent=se),this.h()},h(){r(i,"class","w-full"),ie(i.src,d=a[0])||r(i,"src",d),r(i,"alt","John Wick after running through Rubik's Cube Art Generator"),r(I,"class","text-center"),r(g,"class","svelte-17c9n1e"),S(g,"selected",a[2]==0),r(m,"class","svelte-17c9n1e"),S(m,"selected",a[2]==1),r(C,"class","svelte-17c9n1e"),S(C,"selected",a[2]==2),r(v,"class","svelte-17c9n1e"),S(v,"selected",a[2]==3),r(x,"class","svelte-17c9n1e"),S(x,"selected",a[2]==4),r(o,"class","styles flex mx-auto w-fit svelte-17c9n1e"),ae(w,"padding-left","18px"),ae(w,"list-style-type","circle"),r(k,"href","https://github.com/lianhuilui/rubiksim.git"),r(k,"class","inline-block w-fit py-2 px-4 rounded-md border-[1px] border-gray-400 my-2"),r(k,"target","_blank"),r(y,"href","https://lianhuilui.github.io/rubiksim/"),r(y,"class","inline-block w-fit py-2 px-4 rounded-md border-[1px] border-gray-400 my-2"),r(y,"target","_blank")},m(e,t){s(e,b,t),s(e,f,t),s(e,i,t),s(e,L,t),s(e,I,t),j(I,M),s(e,N,t),s(e,o,t),j(o,g),j(o,q),j(o,m),j(o,D),j(o,C),j(o,E),j(o,v),j(o,J),j(o,x),s(e,U,t),s(e,P,t),s(e,B,t),s(e,A,t),s(e,F,t),s(e,H,t),s(e,G,t),s(e,w,t),s(e,R,t),s(e,k,t),s(e,z,t),s(e,y,t),V||(ne=[O(g,"click",a[3]),O(m,"click",a[4]),O(C,"click",a[5]),O(v,"click",a[6]),O(x,"click",a[7])],V=!0)},p(e,[t]){t&1&&!ie(i.src,d=e[0])&&r(i,"src",d),t&2&&de(M,e[1]),t&4&&S(g,"selected",e[2]==0),t&4&&S(m,"selected",e[2]==1),t&4&&S(C,"selected",e[2]==2),t&4&&S(v,"selected",e[2]==3),t&4&&S(x,"selected",e[2]==4)},i:re,o:re,d(e){e&&(l(b),l(f),l(i),l(L),l(I),l(N),l(o),l(U),l(P),l(B),l(A),l(F),l(H),l(G),l(w),l(R),l(k),l(z),l(y)),V=!1,ue(ne)}}}function ge(a,b,n){let f="/john.jpg",i="Original Image",d=0;return[f,i,d,()=>{n(2,d=0),n(0,f="/john.jpg"),n(1,i="Original Image")},()=>{n(2,d=1),n(0,f="/john0.png"),n(1,i="Floyd-Steinberg dithering, All 6 colors")},()=>{n(2,d=2),n(0,f="/john1.png"),n(1,i="Floyd-Steinberg, no green")},()=>{n(2,d=3),n(0,f="/john2.png"),n(1,i="Patterned dithering, nearest gray-value")},()=>{n(2,d=4),n(0,f="/john3.png"),n(1,i="Patterned dithering, nearest gray-value, blue and white")}]}class ve extends _e{constructor(b){super(),he(this,b,ge,be,ce,{})}}export{ve as component};
