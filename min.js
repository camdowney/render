const t=({tag:t,...e})=>{let n={},r={},o={};Object.entries(e).forEach((([t,e])=>t.startsWith("__")?n[t.substring(2)]=e:t.startsWith("_")?r[t.substring(1)]=e:o[t]=e));const c=document.createElement(t||"div");Object.entries(o).forEach((([t,e])=>c.setAttribute(t.replaceAll("_","-"),e)));const s=t=>c.addEventListener(...t);return Object.entries(n).forEach((t=>{s(["mount",()=>window.addEventListener(...t)]),s(["unmount",()=>window.removeEventListener(...t)])})),Object.entries(r).forEach(s),c};let e=[],n={},r=0,o=0;const c=(t,e)=>{t.dispatchEvent(new Event(e))},s=(i,a,u)=>{if(!i||void 0===a)return;const l="string"==typeof i?document?.querySelector(i):i;if("function"==typeof a)return s(l,{tag:a},u);if(Array.isArray(a))return a.forEach((t=>s(l,t)));if("object"!=typeof a)return l.innerHTML+=a;const f=r,d="function"==typeof a?.tag;d&&(o=0);const h=d?a?.tag({get:()=>e[f][0],store:t=>{const c=f+"-"+o++;return n[c]=n[c]??t,{set value(t){n[c]=t,r=f,s(...e[f],!0),r=e.length},get value(){return n[c]}}},...a}):a,{c:p,...E}="object"!=typeof h||Array.isArray(h)?{tag:"span",c:h}:h;let g=null;if(u){const e=l.parentNode,n=[...e.children].indexOf(l);c(l,"unmount"),l.querySelectorAll("*").forEach((t=>c(t,"unmount"))),e.replaceChild(t(E),l),g=e.children[n]}else l.append(t(E)),g=l.lastChild;d&&(e[r++]=[g,a]),s(g,p),c(g,"mount")};export{s as default};
