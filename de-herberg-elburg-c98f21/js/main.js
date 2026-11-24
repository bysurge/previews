(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')!=='true';
      btn.setAttribute('aria-expanded',open);nav.classList.toggle('open',open);
    });
    nav.addEventListener('click',function(e){
      if(e.target.tagName==='A'){btn.setAttribute('aria-expanded','false');nav.classList.remove('open');}
    });
  }
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){
      var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(d){var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();}
    });
  });
})();
