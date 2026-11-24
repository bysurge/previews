(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Menukaart-tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; show(n); n.focus(); }
    });
  });
  if (tabs.length) show(tabs[0]);

  /* Aangepaste tijden: verlopen regels verbergen */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var items = document.querySelectorAll('[data-until]');
  var left = 0;
  Array.prototype.forEach.call(items, function (li) {
    var p = li.getAttribute('data-until').split('-');
    var end = new Date(+p[0], +p[1] - 1, +p[2]);
    if (end < today) li.hidden = true; else left++;
  });
  if (items.length && !left) {
    var n = document.getElementById('aangepast');
    if (n) n.querySelector('ul').hidden = true;
  }

  /* Vandaag in de openingstijden */
  var row = document.querySelector('#hours [data-day="' + new Date().getDay() + '"]');
  if (row) row.classList.add('is-today');
})();
