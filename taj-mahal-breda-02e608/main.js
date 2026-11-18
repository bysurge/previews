(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o);});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false);document.body.classList.remove('lock');}});
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]')),panels=[].slice.call(document.querySelectorAll('.panel'));
  var q=document.getElementById('q'),none=document.getElementById('none');
  function cur(){for(var i=0;i<tabs.length;i++)if(tabs[i].getAttribute('aria-selected')=='true')return i;return 0;}
  function show(i){tabs.forEach(function(b,k){b.setAttribute('aria-selected',k==i)});panels.forEach(function(p,k){p.hidden=k!=i});}
  function filter(){
    var v=q.value.trim().toLowerCase(),items=document.querySelectorAll('.dishes > li');
    if(!v){items.forEach(function(li){li.hidden=false});panels.forEach(function(p,k){p.hidden=k!=cur()});none.hidden=true;return;}
    var hits=0;
    items.forEach(function(li){var m=li.textContent.toLowerCase().indexOf(v)>-1;li.hidden=!m;if(m)hits++;});
    panels.forEach(function(p){p.hidden=!p.querySelector('.dishes > li:not([hidden])')});
    none.hidden=hits>0;
  }
  tabs.forEach(function(b){b.addEventListener('click',function(){q.value='';filter();show(+b.dataset.i);});});
  q.addEventListener('input',filter);
  document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('msg').hidden=false;});
})();
