document.documentElement.classList.remove('no-js');
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}));
const tabs=[...document.querySelectorAll('.tabs button')],panels=[...document.querySelectorAll('.panel')];
function show(id){tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.p===id));panels.forEach(p=>p.classList.toggle('on',p.id===id))}
tabs.forEach(t=>t.addEventListener('click',()=>show(t.dataset.p)));
if(tabs.length)show(tabs[0].dataset.p);
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('.msg').classList.add('on')}));
