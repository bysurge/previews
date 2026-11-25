(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function zet(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () { zet(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) zet(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function kies(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var nt = tabs[(i + n + tabs.length) % tabs.length];
      kies(nt); nt.focus();
    });
  });

  // demo forms
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });

  // hero slideshow
  var slides = document.querySelectorAll('.hero-slides img');
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !rm) {
    var k = 0;
    setInterval(function () {
      slides[k].classList.remove('on');
      k = (k + 1) % slides.length;
      slides[k].classList.add('on');
    }, 6000);
  }

  // open now + highlight today
  var uren = { 0: [12, 22], 3: [15, 24], 4: [14, 24], 5: [12, 25], 6: [12, 25] };
  var nu = new Date(), d = nu.getDay(), h = nu.getHours() + nu.getMinutes() / 60;
  var rij = document.querySelector('#tijdenLijst [data-d="' + d + '"]');
  if (rij) rij.classList.add('vandaag');
  var open = false;
  if (uren[d] && h >= uren[d][0] && h < uren[d][1]) open = true;
  var gisteren = (d + 6) % 7;
  if (uren[gisteren] && uren[gisteren][1] > 24 && h < uren[gisteren][1] - 24) open = true;
  var el = document.getElementById('nuOpen');
  if (el) {
    el.textContent = (open ? 'Nu open' : 'Nu gesloten') + ' · Stadhuisstraat 21, Tilburg';
    if (!open) el.classList.add('dicht');
  }
})();
