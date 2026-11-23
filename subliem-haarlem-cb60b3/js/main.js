(function(){
  var top=document.querySelector('.top'),btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  function onScroll(){top.classList.toggle('solid',window.scrollY>40)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

  // hero slideshow
  var imgs=document.querySelectorAll('.slides img'),i=0;
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(imgs.length>1&&!still){setInterval(function(){imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on')},5500)}

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(t){tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on})}
  tabs.forEach(function(t,n){
    t.addEventListener('click',function(){sel(t)});
    t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){var nx=tabs[(n+d+tabs.length)%tabs.length];sel(nx);nx.focus()}});
  });

  // demo form
  var f=document.getElementById('res-form');
  f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('form-msg').hidden=false});
})();
