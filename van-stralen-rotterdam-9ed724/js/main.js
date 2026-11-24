(function () {
  // mobiel menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function zet(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { zet(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { zet(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zet(false); });

  // tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var actief = t === tab;
      t.setAttribute('aria-selected', actief ? 'true' : 'false');
      t.tabIndex = actief ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !actief;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var volgende = tabs[(i + n + tabs.length) % tabs.length];
      kies(volgende); volgende.focus();
    });
  });

  // belknop op telefoon pas na de hero
  var bel = document.querySelector('.belknop');
  var hero = document.querySelector('.hero');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      bel.classList.toggle('zichtbaar', !e[0].isIntersecting);
    }, { threshold: 0.15 }).observe(hero);
  }
})();
