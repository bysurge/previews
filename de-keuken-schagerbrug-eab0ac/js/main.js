(function(){
  var top=document.querySelector('.top'), nav=document.getElementById('nav'), btn=document.querySelector('.menu-btn');
  function onScroll(){ top.classList.toggle('scrolled', window.scrollY>40 && !nav.classList.contains('open')); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  function setMenu(open){ nav.classList.toggle('open',open); btn.setAttribute('aria-expanded',open); document.body.style.overflow=open?'hidden':''; onScroll(); }
  btn.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });

  // tabs
  var tabs=[].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t){
    tabs.forEach(function(x){ var on=x===t; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; document.getElementById(x.getAttribute('aria-controls')).hidden=!on; });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click', function(){ select(t); });
    t.addEventListener('keydown', function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0; if(!d) return;
      var n=tabs[(i+d+tabs.length)%tabs.length]; select(n); n.focus();
    });
  });

  // calm hero crossfade
  var slides=document.querySelectorAll('.hero-slides img'), k=0;
  if(slides.length>1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    setInterval(function(){ slides[k].classList.remove('is-on'); k=(k+1)%slides.length; slides[k].classList.add('is-on'); }, 6000);
  }
})();
