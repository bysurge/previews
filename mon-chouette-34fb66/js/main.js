(function () {
  // Tabs (works per tablist)
  Array.prototype.forEach.call(document.querySelectorAll('[role=tablist]'), function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function sel(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on);
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { sel(t); });
      t.addEventListener('keydown', function (e) {
        var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!k) return;
        var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
      });
    });
  });

  // Hero slideshow with their own slider lines
  var slides = document.querySelectorAll('.slide'), dots = document.querySelectorAll('.dots button'), line = document.getElementById('hero-line');
  var lines = [
    'Geniet midden in de natuur van een goede kop thee',
    'Start vanuit hier direct met recreëren',
    'Onze tuin is een mooi decor voor een bruiloft, kraamfeest of familiefeest',
    'In het hart van mooie fiets- en wandelroutes'
  ];
  var cur = 0, timer;
  function show(n) {
    cur = n;
    Array.prototype.forEach.call(slides, function (s, i) { s.classList.toggle('is-on', i === n); });
    Array.prototype.forEach.call(dots, function (d, i) { d.setAttribute('aria-pressed', i === n); });
    line.textContent = lines[n];
  }
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function start() { if (!still) timer = setInterval(function () { show((cur + 1) % slides.length); }, 6000); }
  Array.prototype.forEach.call(dots, function (d, i) { d.addEventListener('click', function () { clearInterval(timer); show(i); start(); }); });
  start();

  // Nav
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
  var top = document.getElementById('top-bar');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 30); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Form (preview only)
  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
