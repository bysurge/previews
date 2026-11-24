(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.mtabs [role=tab]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.mpanel'));
  var current = tabs[0];
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    current = tab;
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // search by name or number
  var input = document.getElementById('zoek');
  var leeg = document.getElementById('zoek-leeg');
  var kaart = document.getElementById('menu');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var items = document.querySelectorAll('.mlist li');
    if (!q) {
      kaart.classList.remove('searching');
      items.forEach(function (li) { li.hidden = false; });
      document.querySelectorAll('.mgroup').forEach(function (g) { g.hidden = false; });
      leeg.hidden = true;
      select(current);
      return;
    }
    kaart.classList.add('searching');
    var isNr = /^\d+$/.test(q);
    var hits = 0;
    items.forEach(function (li) {
      var ok = isNr ? li.getAttribute('data-nr') === q : li.textContent.toLowerCase().indexOf(q) !== -1;
      li.hidden = !ok;
      if (ok) hits++;
    });
    document.querySelectorAll('.mgroup').forEach(function (g) { g.hidden = !g.querySelector('li:not([hidden])'); });
    panels.forEach(function (p) { p.hidden = !p.querySelector('li:not([hidden])'); });
    leeg.hidden = hits > 0;
  });
})();
