(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  });

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t,focus){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute('aria-selected',on?'true':'false');
      x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
    if(focus)t.focus();
    t.scrollIntoView({block:'nearest',inline:'nearest'});
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t);});
    t.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight')select(tabs[(i+1)%tabs.length],true);
      if(e.key==='ArrowLeft')select(tabs[(i-1+tabs.length)%tabs.length],true);
    });
  });
})();
