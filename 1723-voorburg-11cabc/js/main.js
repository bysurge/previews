(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // menu
  var t = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  function setMenu(open){ t.setAttribute('aria-expanded', open ? 'true' : 'false'); nav.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); }
  t.addEventListener('click', function(){ setMenu(t.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab){
    tabs.forEach(function(b){
      var on = b === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function(b, i){
    b.addEventListener('click', function(){ select(b); });
    b.addEventListener('keydown', function(e){
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n){ var nb = tabs[(i + n + tabs.length) % tabs.length]; select(nb); nb.focus(); }
    });
  });
  // hero slideshow
  var slides = document.querySelectorAll('.slides img'), k = 0;
  if (!reduce && slides.length > 1){
    setInterval(function(){ slides[k].classList.remove('on'); k = (k + 1) % slides.length; slides[k].classList.add('on'); }, 6000);
  }
})();
