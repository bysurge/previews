(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  function setNav(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');document.body.style.overflow=open?'hidden':'';}
  btn.addEventListener('click',function(){setNav(!nav.classList.contains('open'));});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))setNav(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setNav(false);});

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(n){var x=tabs[(i+n+tabs.length)%tabs.length];select(x);x.focus();e.preventDefault();}
    });
  });

  var f=document.getElementById('meetForm');
  f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('formMsg').textContent='Dit is een voorbeeld: er is niets verstuurd.';});
})();
