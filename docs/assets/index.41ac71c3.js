const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};T();function g(){}function C(e){return e()}function j(){return Object.create(null)}function y(e){e.forEach(C)}function H(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function I(){return p(" ")}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let k;function h(e){k=e}const d=[],N=[],_=[],S=[],z=Promise.resolve();let v=!1;function D(){v||(v=!0,z.then(P))}function x(e){_.push(e)}const $=new Set;let m=0;function P(){const e=k;do{for(;m<d.length;){const t=d[m];m++,h(t),G(t.$$)}for(h(null),d.length=0,m=0;N.length;)N.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];$.has(n)||($.add(n),n())}_.length=0}while(d.length);for(;S.length;)S.pop()();v=!1,$.clear(),h(e)}function G(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const J=new Set;function Q(e,t){e&&e.i&&(J.delete(e),e.i(t))}function R(e,t,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:f}=e.$$;r&&r.m(t,n),i||x(()=>{const c=l.map(C).filter(H);s?s.push(...c):y(c),e.$$.on_mount=[]}),f.forEach(x)}function U(e,t){const n=e.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){e.$$.dirty[0]===-1&&(d.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,i,r,l,s,f=[-1]){const c=k;h(e);const o=e.$$={fragment:null,ctx:null,props:l,update:g,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:j(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};s&&s(o.root);let w=!1;if(o.ctx=n?n(e,t.props||{},(u,A,...E)=>{const O=E.length?E[0]:A;return o.ctx&&r(o.ctx[u],o.ctx[u]=O)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](O),w&&W(e,u)),A}):[],o.update(),w=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=K(t.target);o.fragment&&o.fragment.l(u),u.forEach(M)}else o.fragment&&o.fragment.c();t.intro&&Q(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),P()}h(c)}class Y{$destroy(){U(this,1),this.$destroy=g}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let t,n,i,r,l,s,f;return{c(){t=b("main"),n=b("h1"),i=p("Hello "),r=p(e[0]),l=p("!"),s=I(),f=b("p"),f.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',L(n,"class","svelte-1tky8bj"),L(t,"class","svelte-1tky8bj")},m(c,o){F(c,t,o),a(t,n),a(n,i),a(n,r),a(n,l),a(t,s),a(t,f)},p(c,[o]){o&1&&V(r,c[0])},i:g,o:g,d(c){c&&M(t)}}}function ee(e,t,n){let{name:i}=t;return e.$$set=r=>{"name"in r&&n(0,i=r.name)},[i]}class te extends Y{constructor(t){super(),X(this,t,ee,Z,q,{name:0})}}new te({target:document.body,props:{name:"world"}});
