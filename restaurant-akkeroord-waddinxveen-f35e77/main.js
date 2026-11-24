(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Menu openen');}
  b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'Menu sluiten':'Menu openen');
  });
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function sel(t){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute('aria-selected',on?'true':'false');
      x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t);});
    t.addEventListener('keydown',function(e){
      var j=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;
      if(j===null)return;
      j=(j+tabs.length)%tabs.length;sel(tabs[j]);tabs[j].focus();e.preventDefault();
    });
  });
})();
