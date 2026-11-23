(function(){
  var top=document.querySelector('.top'), nav=document.getElementById('nav'), btn=document.querySelector('.menu-btn');
  function onScroll(){ top.classList.toggle('scrolled', window.scrollY>40); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  function setMenu(open){ nav.classList.toggle('open',open); btn.setAttribute('aria-expanded',open); document.body.style.overflow=open?'hidden':''; }
  btn.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });

  // menu tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){ var on=x===t; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; document.getElementById(x.getAttribute('aria-controls')).hidden=!on; });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click', function(){ select(t); });
    t.addEventListener('keydown', function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0; if(!d) return;
      var n=tabs[(i+d+tabs.length)%tabs.length]; select(n); n.focus();
    });
  });

  // NL / EN
  var lang=document.querySelector('.lang'), items=[].slice.call(document.querySelectorAll('[data-en]')), en=false;
  items.forEach(function(el){ el.dataset.nl=el.innerHTML; });
  var nlLabel=lang.getAttribute('aria-label'), enLabel=lang.dataset.enLabel;
  lang.addEventListener('click', function(){
    en=!en;
    items.forEach(function(el){ el.innerHTML=en?el.dataset.en:el.dataset.nl; });
    document.documentElement.lang=en?'en':'nl';
    lang.setAttribute('aria-label', en?enLabel:nlLabel);
  });
})();
