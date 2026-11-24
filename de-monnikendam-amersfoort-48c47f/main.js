(function(){
  var t=document.getElementById('menu-toggle'), n=document.getElementById('main-nav');
  if(t&&n){
    t.addEventListener('click',function(){
      var o=n.classList.toggle('open');
      t.setAttribute('aria-expanded',o?'true':'false');
      document.body.style.overflow=o?'hidden':'';
    });
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
      n.classList.remove('open');t.setAttribute('aria-expanded','false');document.body.style.overflow='';
    });});
  }
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(tab){
    tabs.forEach(function(b){
      var on=b===tab;
      b.setAttribute('aria-selected',on?'true':'false');
      b.tabIndex=on?0:-1;
      document.getElementById(b.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(b,i){
    b.addEventListener('click',function(){sel(b);});
    b.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        var nx=tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length];sel(nx);nx.focus();
      }
    });
  });
})();
