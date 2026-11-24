(function () {
  var kop = document.querySelector('.kop');
  var toggle = document.querySelector('.menu-toggle');

  function scrollKop() { kop.classList.toggle('vast', window.scrollY > 40); }
  window.addEventListener('scroll', scrollKop, { passive: true });
  scrollKop();

  function zetMenu(open) {
    kop.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { zetMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  document.querySelectorAll('.kop-nav a').forEach(function (a) { a.addEventListener('click', function () { zetMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // Hero: rustige crossfade tussen drie beelden
  var dias = document.querySelectorAll('.dia');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (dias.length > 1 && !stil) {
    var i = 0;
    setInterval(function () {
      dias[i].classList.remove('actief');
      i = (i + 1) % dias.length;
      dias[i].classList.add('actief');
    }, 6000);
  }

  // Menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function kies(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () {
      kies(t);
      var kaart = document.getElementById('kaart-inhoud-anker') || document.querySelector('.kaart-inhoud');
      var top = kaart.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 80, behavior: 'smooth' });
    });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); kies(tabs[(n + d + tabs.length) % tabs.length], true); }
    });
  });

  // Voorbeeldformulieren: niets versturen
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.demo-melding');
      if (m) m.hidden = false;
    });
  });
})();
