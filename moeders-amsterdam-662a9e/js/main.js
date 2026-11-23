(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  if(t&&n){
    t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false')}});
  }
  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function sel(b,focus){
    tabs.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
    if(focus)b.focus();
    b.scrollIntoView({block:'nearest',inline:'nearest'});
  }
  tabs.forEach(function(b,i){
    b.addEventListener('click',function(){sel(b)});
    b.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight')sel(tabs[(i+1)%tabs.length],true);
      if(e.key==='ArrowLeft')sel(tabs[(i-1+tabs.length)%tabs.length],true);
    });
  });
})();
