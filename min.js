const t=({tag:t,html:e,...n})=>{let r={},o={},i={};Object.entries(n).filter((([t,e])=>void 0!==e)).forEach((([t,e])=>t.startsWith("__")?r[t.substring(2)]=e:t.startsWith("_")?o[t.substring(1)]=e:i[t]=e));const s=document.createElement(t||"div");void 0!==e&&(s.innerHTML=e),Object.entries(i).forEach((t=>s.setAttribute(...t)));const c=t=>s.addEventListener(...t);return Object.entries(r).forEach((t=>{c(["mount",()=>window.addEventListener(...t)]),c(["unmount",()=>window.removeEventListener(...t)])})),Object.entries(o).forEach(c),s};let e={},n=[-1];const r=(t,e)=>t.dispatchEvent(new Event(e)),o=(i,s,c)=>{if(!i?.nodeType||void 0===s)return;if("function"==typeof s)return o(i,{tag:s},c);if(Array.isArray(s))return s.forEach((t=>o(i,t)));if(n[n.length-1]++,null===s||!1===s)return;if("object"!=typeof s)return i.append(s);let a,l=0;const u="function"==typeof s?.tag?s.tag({self:()=>a,store:t=>{const r=n.slice(0),i="n"+n.join("n")+"p"+l++;e[i]=e[i]??t;const c=()=>{n=r.slice(0),n[n.length-1]--,o(a,s,!0)};return{set get(t){e[i]=t,c()},get get(){return e[i]},flag:c}},...s}):s,{c:d,...f}=u?.constructor===Object?u:{tag:"span",c:u};if(c){const e=i.parentNode,n=[...e.children].indexOf(i);r(i,"unmount"),i.querySelectorAll("*").forEach((t=>r(t,"unmount"))),e.replaceChild(t(f),i),a=e.children[n]}else i.append(t(f)),a=i.lastChild;const h=n.slice(0);n.push(-1),o(a,d),r(a,"mount"),n=h.slice(0)};export{o as default};
