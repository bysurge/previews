(function () {
  var knop = document.querySelector('.menu-knop');
  var nav = document.getElementById('nav');
  function zet(open) {
    nav.classList.toggle('open', open);
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  knop.addEventListener('click', function () { zet(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { zet(false); }); });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var aan = t === tab;
      t.setAttribute('aria-selected', aan ? 'true' : 'false');
      t.tabIndex = aan ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var v = tabs[(i + n + tabs.length) % tabs.length];
      kies(v); v.focus();
    });
  });

  var form = document.getElementById('resForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMelding').textContent =
      'Dit is een voorbeeld: er is niets verstuurd. Reserveren kan nu via 071 513 77 67.';
  });
})();
