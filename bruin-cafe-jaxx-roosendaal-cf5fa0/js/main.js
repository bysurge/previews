(function(){
  var top = document.getElementById('top-bar');
  var btn = document.querySelector('.nav-toggle');
  function onScroll(){ top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  btn.addEventListener('click', function(){
    var open = top.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function(a){
    a.addEventListener('click', function(){ top.classList.remove('nav-open'); btn.setAttribute('aria-expanded','false'); });
  });

  // Agenda: verberg voorbije avonden, toon de eerstvolgende in de hero
  var now = new Date();
  var next = null;
  document.querySelectorAll('.gig').forEach(function(g){
    var end = new Date(g.getAttribute('data-end'));
    if (end < now) { g.classList.add('past'); return; }
    if (!next && !g.classList.contains('gig-besloten')) next = g;
  });
  if (next) {
    var t = next.querySelector('h3').textContent;
    var d = next.querySelector('.d').textContent + ' ' + next.querySelector('.m').textContent;
    var w = next.querySelector('.when').textContent;
    document.getElementById('hn-title').textContent = t;
    document.getElementById('hn-date').textContent = d + ', ' + w.charAt(0).toLowerCase() + w.slice(1);
  } else {
    document.getElementById('hero-next').hidden = true;
  }

  // Openingstijden: markeer vandaag
  var row = document.querySelector('#hours tr[data-day="' + now.getDay() + '"]');
  if (row) row.classList.add('today');
})();
