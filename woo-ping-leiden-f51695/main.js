(function(){
var tabs=document.getElementById('tabs'),panel=document.getElementById('panel');
function row(l){var p=l.split('|');return {nr:p[0],n:p[1],d:p[2],p:p[3]};}
function show(id){
  var c=MENU.filter(function(x){return x.id===id})[0];
  [].forEach.call(tabs.children,function(b){b.setAttribute('aria-selected',b.dataset.id===id)});
  var h='<h3>'+c.t+'</h3>'+(c.n?'<p class="cnote">'+c.n+'</p>':'')+'<ul class="items">';
  c.i.split('\n').forEach(function(l){var r=row(l);
    h+='<li><span class="nr">'+(r.nr||'')+'</span><span class="nm"><b>'+r.n+'</b>'+(r.d?'<i>'+r.d+'</i>':'')+'</span><span class="pr">'+(r.p||'')+'</span></li>';});
  panel.innerHTML=h+'</ul>';
}
MENU.forEach(function(c){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=c.t;b.dataset.id=c.id;
  b.addEventListener('click',function(){show(c.id)});tabs.appendChild(b);});
show(MENU[0].id);
var d=document.getElementById('drinks');
DRINKS.forEach(function(x){d.insertAdjacentHTML('beforeend','<div><dt>'+x[0]+(x[2]?' <span>'+x[2]+'</span>':'')+'</dt><dd>'+x[1]+'</dd></div>');});
var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false);document.body.classList.remove('lock')}});
document.getElementById('cform').addEventListener('submit',function(e){e.preventDefault();document.getElementById('sent').hidden=false;});
document.querySelector('.order-card .btn').addEventListener('click',function(){alert('Dit is een voorbeeld: hier komt hun bestelpagina.');});
})();
