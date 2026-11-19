(function(){
  // header shadow
  var top=document.querySelector('.top');
  var onScroll=function(){top.classList.toggle('scrolled',window.scrollY>10)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // mobile menu
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=btn.getAttribute('aria-expanded')!=='true';
    btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
    nav.classList.toggle('open',open);document.body.style.overflow=open?'hidden':'';
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){btn.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.style.overflow='';}});

  // today: opening hours (0=zondag)
  var hours={0:[9,22],1:[10,17],2:[10,17],3:[10,22],4:[10,22],5:[9,22],6:[9,22]};
  var now=new Date(),d=now.getDay(),h=hours[d],t=now.getHours()+now.getMinutes()/60;
  var el=document.querySelector('[data-today]');
  if(el){
    if(t<h[1]){el.textContent=(t>=h[0]?'Nu open, tot ':'Vandaag open van '+h[0]+'.00 tot ')+h[1]+'.00 uur';el.classList.add('open');}
    else{var n=hours[(d+1)%7];el.textContent='Morgen weer open vanaf '+n[0]+'.00 uur';}
  }
  document.querySelectorAll('.uren tr[data-days]').forEach(function(r){
    if(r.dataset.days.split(',').indexOf(String(d))>-1)r.classList.add('is-today');
  });

  // menu tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab){
    tabs.forEach(function(x){var on=x===tab;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});
  }
  tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){select(tab)});
    tab.addEventListener('keydown',function(e){
      var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(j===null)return;j=(j+tabs.length)%tabs.length;select(tabs[j]);tabs[j].focus();e.preventDefault();
    });
  });
  // breakfast tab first on fri/sat/sun mornings
  if([5,6,0].indexOf(d)>-1&&t<11.5)select(document.getElementById('t-ontbijt'));
})();
