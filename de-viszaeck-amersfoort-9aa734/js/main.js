(function () {
  var body = document.body;
  var top = document.querySelector('.top');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');

  // Header krijgt een achtergrond zodra je van de foto af scrolt
  function kop() { top.classList.toggle('vast', window.scrollY > 40 || body.classList.contains('menu-open')); }
  window.addEventListener('scroll', kop, { passive: true });
  kop();

  // Mobiel menu
  function zetMenu(open) {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    kop();
  }
  toggle.addEventListener('click', function () { zetMenu(!body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { zetMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // Tabs op de kaart
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (j === null) return;
      var n = tabs[(j + tabs.length) % tabs.length];
      kies(n); n.focus();
    });
  });

  // Rustige diavoorstelling in de hero
  var slides = document.querySelectorAll('.slide');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !stil) {
    var nu = 0;
    setInterval(function () {
      slides[nu].classList.remove('is-on');
      nu = (nu + 1) % slides.length;
      slides[nu].classList.add('is-on');
    }, 6500);
  }
})();
