import{s as P,q as V,P as j,a as h,f as v,c as y,g as T,h as I,d as c,j as C,i as S,K as k,$ as K,Q,R,S as z}from"./scheduler.7a274a43.js";import{S as A,i as B,f as F,b as q,d as w,m as D,a as d,t as $,e as E}from"./index.28409b7f.js";import{M as G}from"./app.29a42da9.js";import{T as H}from"./TabTitle.0d058f9c.js";function J(o){let e,f,m,n,s,_,a,r;function M(t){o[3](t)}let g={};o[0]!==void 0&&(g.title=o[0]),e=new H({props:g}),V.push(()=>F(e,"title",M)),s=new G({props:{loop:!1,typedItems:[`${o[0]}`]}});const u=o[2].default,i=j(u,o,o[1],null);return{c(){q(e.$$.fragment),m=h(),n=v("div"),q(s.$$.fragment),_=h(),a=v("div"),i&&i.c(),this.h()},l(t){w(e.$$.fragment,t),m=y(t),n=T(t,"DIV",{class:!0});var l=I(n);w(s.$$.fragment,l),_=y(l),a=T(l,"DIV",{class:!0});var p=I(a);i&&i.l(p),p.forEach(c),l.forEach(c),this.h()},h(){C(a,"class","col gap-5 flex-1"),C(n,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,l){D(e,t,l),S(t,m,l),S(t,n,l),D(s,n,null),k(n,_),k(n,a),i&&i.m(a,null),r=!0},p(t,[l]){const p={};!f&&l&1&&(f=!0,p.title=t[0],K(()=>f=!1)),e.$set(p);const b={};l&1&&(b.typedItems=[`${t[0]}`]),s.$set(b),i&&i.p&&(!r||l&2)&&Q(i,u,t,t[1],r?z(u,t[1],l,null):R(t[1]),null)},i(t){r||(d(e.$$.fragment,t),d(s.$$.fragment,t),d(i,t),r=!0)},o(t){$(e.$$.fragment,t),$(s.$$.fragment,t),$(i,t),r=!1},d(t){t&&(c(m),c(n)),E(e,t),E(s),i&&i.d(t)}}}function L(o,e,f){let{$$slots:m={},$$scope:n}=e,{title:s="Title"}=e;function _(a){s=a,f(0,s)}return o.$$set=a=>{"title"in a&&f(0,s=a.title),"$$scope"in a&&f(1,n=a.$$scope)},[s,n,m,_]}class X extends A{constructor(e){super(),B(this,e,L,J,P,{title:0})}}export{X as C};