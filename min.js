let t=0,e=0,n=[],r=[],s=0,o=[];const u=(e,n=document)=>{const r=n.querySelector(e);return{get val(){return r},get class(){return r.classList},html:(e,...n)=>{let s=[e[0],n.map(((t,n)=>[t,e[n+1]]))].flat(1/0),o=[],c=[];s.forEach((e=>{if(void 0===e)return;if("function"!=typeof e)return o.push(e+"");const n=t++;c.push((()=>e(u(`#u${n}`)))),o.push(`<div id="u${n}"></div>`)})),r.innerHTML=o.join(""),c.forEach((t=>t()))},q:t=>u(t,r),on:(t,e)=>r.addEventListener(t,e)}},c=t=>{const u=e++;return n[u]=n[u]??t,{get val(){const t=s-1;return r[u]=r[u]??[],r[u].includes(t)||r[u].push(t),n[u]},set val(t){n[u]=t,e=u+1,r[u].forEach((t=>o[t]()))}}},i=t=>{const e=s++;o[e]=()=>{s=e+1,t()},t()};export{u as q,c as store,i as watch};
