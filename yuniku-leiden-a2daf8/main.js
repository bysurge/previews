(function(){
var tabs=document.getElementById('tabs'),panel=document.getElementById('panel');
function show(id){
  var c=MENU.filter(function(x){return x.id===id})[0];
  [].forEach.call(tabs.children,function(b){b.setAttribute('aria-selected',b.dataset.id===id)});
  var h='<h3>'+c.t+'</h3>'+(c.n?'<p class="cnote">'+c.n+'</p>':'')+'<ul class="items">';
  c.i.split('\n').forEach(function(l){var p=l.split('|');
    h+='<li><span class="nr">'+(p[0]||'')+'</span><span class="nm"><b>'+p[1]+'</b>'+(p[2]?'<i>'+p[2]+'</i>':'')+'</span>'+(p[3]==='+'?'<span class="bij">met bijbetaling</span>':'')+'</li>';});
  panel.innerHTML=h+'</ul>';
}
MENU.forEach(function(c){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.innerHTML=c.t;b.dataset.id=c.id;
  b.addEventListener('click',function(){show(c.id)});tabs.appendChild(b);});
show(MENU[0].id);
var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false);document.body.classList.remove('lock')}});
document.querySelectorAll('.demo-link').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();alert('Dit is een voorbeeld: hier komt hun bestelpagina.');});});
})();
