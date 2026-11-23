(function () {
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // hero slideshow (calm crossfade, off for reduced motion)
  var slides = document.querySelectorAll('.hero-slides img'), s = 0;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1) {
    setInterval(function () {
      slides[s].classList.remove('on'); s = (s + 1) % slides.length; slides[s].classList.add('on');
    }, 6000);
  }

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var t = document.getElementById(a.getAttribute('data-tab'));
      select(t); document.getElementById('kaart').scrollIntoView();
    });
  });

  // today + open status
  var now = new Date(), day = now.getDay(), h = now.getHours();
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var line = document.getElementById('openline');
  var openDay = day >= 3 || day === 0;
  if (openDay && h >= 16 && h < 23) { line.textContent = 'Nu open en we bezorgen, tot 23:00'; line.classList.add('is-open'); }
  else if (openDay && h < 16) { line.textContent = 'Vandaag open vanaf 16:00'; }

  // reservation selects
  var party = document.getElementById('party'), tijd = document.getElementById('tijd');
  for (var p = 1; p <= 100; p++) party.add(new Option(p, p, p === 2, p === 2));
  for (var m = 16 * 60; m <= 22 * 60; m += 30) {
    var v = Math.floor(m / 60) + ':' + (m % 60 ? '30' : '00');
    tijd.add(new Option(v, v, m === 19 * 60, m === 19 * 60));
  }

  // forms: preview only
  ['resform', 'catform', 'newsform'].forEach(function (id) {
    var f = document.getElementById(id);
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.form-done').hidden = false; });
  });
})();
(function () {
  var fab = document.querySelector('.call-fab'), hero = document.querySelector('.hero');
  if (!fab || !hero) return;
  function check() { fab.classList.toggle('show', window.scrollY > hero.offsetHeight * 0.6); }
  window.addEventListener('scroll', check, { passive: true }); check();
})();
