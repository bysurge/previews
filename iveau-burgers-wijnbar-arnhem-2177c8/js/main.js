(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // today
  var uren = { 0: 'vanaf 12.00 uur', 1: null, 2: null, 3: 'vanaf 16.00 uur', 4: 'vanaf 16.00 uur', 5: 'vanaf 12.00 uur', 6: 'vanaf 12.00 uur' };
  var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay();
  var el = document.getElementById('vandaag-tekst');
  if (el) {
    if (uren[d]) {
      el.textContent = 'Vandaag (' + namen[d] + ') zijn we open ' + uren[d] + '.';
    } else {
      el.textContent = 'Vandaag (' + namen[d] + ') zijn we gesloten. Woensdag zijn we weer open vanaf 16.00 uur.';
    }
  }
  var rij = document.querySelector('#openingstijden tr[data-dag="' + d + '"]');
  if (rij) rij.classList.add('vandaag-rij');
})();
