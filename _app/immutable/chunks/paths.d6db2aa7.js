import{n as c,s as h}from"./scheduler.7a274a43.js";const e=[];function d(i,l=c){let o;const n=new Set;function r(t){if(h(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=l(r,a)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_aohi9r)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_aohi9r)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};
