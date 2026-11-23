(function(){
  var burger=document.getElementById('burger'),nav=document.getElementById('nav');
  function setNav(open){nav.classList.toggle('open',open);burger.setAttribute('aria-expanded',open);burger.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');document.body.style.overflow=open?'hidden':'';}
  burger.addEventListener('click',function(){setNav(!nav.classList.contains('open'));});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')setNav(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setNav(false);});

  var tabs=[].slice.call(document.querySelectorAll('.tab'));
  var panels=[].slice.call(document.querySelectorAll('.panel'));
  var kaart=document.getElementById('kaart');
  function select(t,focus){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});
    if(focus)t.focus();
    if(t.parentNode.scrollWidth>t.parentNode.clientWidth)t.parentNode.scrollLeft=t.offsetLeft-22;
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){
      select(t);
      var top=document.getElementById(t.getAttribute('aria-controls')).getBoundingClientRect().top;
      if(top<60)document.getElementById(t.getAttribute('aria-controls')).scrollIntoView({behavior:'smooth'});
    });
    t.addEventListener('keydown',function(e){
      var n=null;if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();select(n,true);}
    });
  });
  document.querySelectorAll('[data-goto]').forEach(function(a){a.addEventListener('click',function(){var t=document.getElementById('t-'+a.getAttribute('data-goto'));if(t)select(t);});});

  // zoeken
  var zoek=document.getElementById('zoek'),leeg=document.getElementById('zoek-leeg');
  zoek.addEventListener('input',function(){
    var q=zoek.value.trim().toLowerCase();
    if(!q){kaart.classList.remove('searching');leeg.hidden=true;
      panels.forEach(function(p){p.querySelectorAll('.item').forEach(function(li){li.hidden=false;});});
      var sel=tabs.filter(function(t){return t.getAttribute('aria-selected')==='true';})[0]||tabs[0];select(sel);return;}
    kaart.classList.add('searching');var total=0;
    panels.forEach(function(p){var c=0;
      p.querySelectorAll('.item').forEach(function(li){var hit=li.textContent.toLowerCase().indexOf(q)>-1;li.hidden=!hit;if(hit)c++;});
      p.hidden=c===0;total+=c;});
    leeg.hidden=total>0;
  });

  // vandaag
  var d=new Date(),day=d.getDay(),now=d.getHours()*60+d.getMinutes();
  document.querySelectorAll('.uren tr[data-d="'+day+'"]').forEach(function(r){r.classList.add('is-today');});
  var el=document.getElementById('today');
  if(el){
    if(day===1){el.textContent='Vandaag (maandag) gesloten, dinsdag weer open';el.classList.add('closed');}
    else{var open=day===0?13*60:11*60+30,close=20*60+45,o=day===0?'13:00':'11:30';
      if(now<open)el.textContent='Vandaag open voor afhalen van '+o+' tot 20:45';
      else if(now<close)el.textContent='Nu open, afhalen kan tot 20:45';
      else{el.textContent=day===0?'Dinsdag weer open':'Morgen weer open';el.classList.add('closed');}}
  }
})();
