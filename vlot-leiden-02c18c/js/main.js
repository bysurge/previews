(function(){
  var top=document.querySelector('.top');
  function sc(){top.classList.toggle('scrolled',window.scrollY>40)}
  sc();window.addEventListener('scroll',sc,{passive:true});
  var tg=document.querySelector('.nav-toggle');
  tg.addEventListener('click',function(){var o=document.body.classList.toggle('nav-open');tg.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('nav-open');tg.setAttribute('aria-expanded','false')})});
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t)});
    t.addEventListener('keydown',function(e){var k=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!k)return;var n=tabs[(i+k+tabs.length)%tabs.length];sel(n);n.focus();e.preventDefault()});
  });
})();
