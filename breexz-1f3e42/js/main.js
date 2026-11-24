(function(){
  var toggle=document.getElementById('menuToggle');
  var nav=document.getElementById('nav');
  function setMenu(open){
    nav.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
    toggle.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
    document.body.style.overflow=open?'hidden':'';
  }
  toggle.addEventListener('click',function(){setMenu(!nav.classList.contains('open'))});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab){
    tabs.forEach(function(t){
      var on=t===tab;
      t.setAttribute('aria-selected',on?'true':'false');
      t.tabIndex=on?0:-1;
      document.getElementById(t.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(!d)return;
      var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function(a){
    a.addEventListener('click',function(){var t=document.getElementById(a.getAttribute('data-tab'));if(t)select(t)});
  });
})();
