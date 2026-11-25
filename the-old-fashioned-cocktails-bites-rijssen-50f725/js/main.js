(function(){
  var top=document.querySelector('.top'),btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  function onScroll(){top.classList.toggle('scrolled',window.scrollY>40)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  btn.addEventListener('click',function(){
    var open=btn.getAttribute('aria-expanded')!=='true';
    btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Menu sluiten':'Menu openen');
    nav.classList.toggle('open',open);
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Menu openen')}});

  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!d)return;
      var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();e.preventDefault();
    });
  });

  var soort=document.getElementById('soort');
  document.querySelectorAll('[data-soort]').forEach(function(a){
    a.addEventListener('click',function(){soort.value=a.getAttribute('data-soort')});
  });
  document.getElementById('res-form').addEventListener('submit',function(e){
    e.preventDefault();var m=document.getElementById('form-msg');m.hidden=false;
  });
})();
