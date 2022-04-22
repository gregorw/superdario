const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};ee();function w(){}function R(e){return e()}function B(){return Object.create(null)}function L(e){e.forEach(R)}function te(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ne(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function y(e,t,l){e.insertBefore(t,l||null)}function g(e){e.parentNode.removeChild(e)}function U(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function _(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function S(){return E(" ")}function le(e,t,l,r){return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)}function p(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function re(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,l,r){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,r?"important":"")}let z;function v(e){z=e}const $=[],F=[],j=[],K=[],ie=Promise.resolve();let N=!1;function ce(){N||(N=!0,ie.then(V))}function P(e){j.push(e)}const O=new Set;let x=0;function V(){const e=z;do{for(;x<$.length;){const t=$[x];x++,v(t),se(t.$$)}for(v(null),$.length=0,x=0;F.length;)F.pop()();for(let t=0;t<j.length;t+=1){const l=j[t];O.has(l)||(O.add(l),l())}j.length=0}while($.length);for(;K.length;)K.pop()();N=!1,O.clear(),v(e)}function se(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const k=new Set;let ue;function I(e,t){e&&e.i&&(k.delete(e),e.i(t))}function X(e,t,l,r){if(e&&e.o){if(k.has(e))return;k.add(e),ue.c.push(()=>{k.delete(e),r&&(l&&e.d(1),r())}),e.o(t)}}function Z(e){e&&e.c()}function G(e,t,l,r){const{fragment:n,on_mount:o,on_destroy:i,after_update:c}=e.$$;n&&n.m(t,l),r||P(()=>{const u=o.map(R).filter(te);i?i.push(...u):L(u),e.$$.on_mount=[]}),c.forEach(P)}function M(e,t){const l=e.$$;l.fragment!==null&&(L(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&($.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,l,r,n,o,i,c=[-1]){const u=z;v(e);const s=e.$$={fragment:null,ctx:null,props:o,update:w,not_equal:n,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:B(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};i&&i(s.root);let d=!1;if(s.ctx=l?l(e,t.props||{},(a,b,...f)=>{const m=f.length?f[0]:b;return s.ctx&&n(s.ctx[a],s.ctx[a]=m)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](m),d&&fe(e,a)),b}):[],s.update(),d=!0,L(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=re(t.target);s.fragment&&s.fragment.l(a),a.forEach(g)}else s.fragment&&s.fragment.c();t.intro&&I(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),V()}v(u)}class Y{$destroy(){M(this,1),this.$destroy=w}$on(t,l){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(l),()=>{const n=r.indexOf(l);n!==-1&&r.splice(n,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e,t,l){const r=e.slice();return r[2]=t[l],r}function D(e,t,l){const r=e.slice();return r[5]=t[l],r}function H(e){let t,l=e[5]+"",r;return{c(){t=_("div"),r=E(l),p(t,"class","object")},m(n,o){y(n,t,o),h(t,r)},p(n,o){o&1&&l!==(l=n[5]+"")&&oe(r,l)},d(n){n&&g(t)}}}function J(e){let t,l,r=e[2]||[],n=[];for(let o=0;o<r.length;o+=1)n[o]=H(D(e,r,o));return{c(){t=_("div");for(let o=0;o<n.length;o+=1)n[o].c();l=S(),p(t,"class","column")},m(o,i){y(o,t,i);for(let c=0;c<n.length;c+=1)n[c].m(t,null);h(t,l)},p(o,i){if(i&1){r=o[2]||[];let c;for(c=0;c<r.length;c+=1){const u=D(o,r,c);n[c]?n[c].p(u,i):(n[c]=H(u),n[c].c(),n[c].m(t,l))}for(;c<n.length;c+=1)n[c].d(1);n.length=r.length}},d(o){o&&g(t),U(n,o)}}}function ae(e){let t,l=e[0],r=[];for(let n=0;n<l.length;n+=1)r[n]=J(W(e,l,n));return{c(){t=_("div");for(let n=0;n<r.length;n+=1)r[n].c();p(t,"class","world"),A(t,"left","-"+e[1]+"px")},m(n,o){y(n,t,o);for(let i=0;i<r.length;i+=1)r[i].m(t,null)},p(n,[o]){if(o&1){l=n[0];let i;for(i=0;i<l.length;i+=1){const c=W(n,l,i);r[i]?r[i].p(c,o):(r[i]=J(c),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}o&2&&A(t,"left","-"+n[1]+"px")},i:w,o:w,d(n){n&&g(t),U(r,n)}}}function de(e,t,l){let{objects:r=[]}=t,{time:n=0}=t;return e.$$set=o=>{"objects"in o&&l(0,r=o.objects),"time"in o&&l(1,n=o.time)},[r,n]}class me extends Y{constructor(t){super(),T(this,t,de,ae,C,{objects:0,time:1})}}function he(e){let t,l,r,n,o,i,c,u,s,d,a,b;return i=new me({props:{objects:e[2],time:e[0]}}),{c(){t=_("div"),l=_("button"),r=E("Start"),n=S(),o=_("div"),Z(i.$$.fragment),c=S(),u=_("div"),s=E("\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F"),l.disabled=e[1],p(l,"class","svelte-75swov"),p(t,"class","center svelte-75swov"),p(u,"class","player"),A(u,"bottom",ge+"px"),p(o,"class","game")},m(f,m){y(f,t,m),h(t,l),h(l,r),y(f,n,m),y(f,o,m),G(i,o,null),h(o,c),h(o,u),h(u,s),d=!0,a||(b=le(l,"click",e[3]),a=!0)},p(f,[m]){(!d||m&2)&&(l.disabled=f[1]);const q={};m&1&&(q.time=f[0]),i.$set(q)},i(f){d||(I(i.$$.fragment,f),d=!0)},o(f){X(i.$$.fragment,f),d=!1},d(f){f&&g(t),f&&g(n),f&&g(o),M(i),a=!1,b()}}}const _e=10,Q=35;let ge=200;function pe(e,t,l){const r=[null,null,null,null,null,null,null,["\u{1F6E2}","\u{1F6E2}"],["\u{1F6E2}","\u{1F6E2}"],null,null,null,null,null,null,null,["\u262E\uFE0F","\u262E\uFE0F"],["\u262E\uFE0F","\u262E\uFE0F","\u262E\uFE0F"],["\u262E\uFE0F","\u262E\uFE0F"],null,null,null,["\u{1F335}"],["\u{1F335}"],null,null,null];let n=0,o=!1;const i=r.length*Q,c=_e*Q;let u=null;const s=function(){u=setInterval(d,5),l(1,o=!0)},d=function(){n<i-c?l(0,n+=1):(clearInterval(u),alert("You win!"))};return[n,o,r,s]}class ye extends Y{constructor(t){super(),T(this,t,pe,he,C,{})}}function be(e){let t,l,r,n,o;return n=new ye({}),{c(){t=_("main"),l=_("h1"),l.textContent="Supermario",r=S(),Z(n.$$.fragment)},m(i,c){y(i,t,c),h(t,l),h(t,r),G(n,t,null),o=!0},p:w,i(i){o||(I(n.$$.fragment,i),o=!0)},o(i){X(n.$$.fragment,i),o=!1},d(i){i&&g(t),M(n)}}}class $e extends Y{constructor(t){super(),T(this,t,null,be,C,{})}}new $e({target:document.body,props:{name:"world"}});