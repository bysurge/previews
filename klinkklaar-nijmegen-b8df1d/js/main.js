(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
      btn.setAttribute('aria-expanded','false');nav.classList.remove('open');
    });});
  }
  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(o){
      var on=o===t;o.setAttribute('aria-selected',String(on));o.tabIndex=on?0:-1;
      document.getElementById(o.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(n){var nt=tabs[(i+n+tabs.length)%tabs.length];select(nt);nt.focus();}
    });
  });
})();
