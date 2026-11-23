(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Tabs menukaart */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById('t-' + a.getAttribute('data-open-tab'))); });
  });

  /* Vandaag open? Elke dag vanaf 10.00; ma-do tot 01.00, vr-zo tot 02.00 (na middernacht) */
  var CLOSE = { 0: 26, 1: 25, 2: 25, 3: 25, 4: 25, 5: 26, 6: 26 };
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var prev = (day + 6) % 7;
    var fmt = function (x) { return String(x % 24).padStart(2, '0') + '.00'; };
    if (h < CLOSE[prev] - 24) { el.textContent = 'Nu open, tot ' + fmt(CLOSE[prev]) + ' uur'; el.classList.add('is-open'); }
    else if (h >= 10) { el.textContent = 'Nu open, tot ' + fmt(CLOSE[day]) + ' uur'; el.classList.add('is-open'); }
    else { el.textContent = 'Vandaag open vanaf 10.00 uur'; }
  }
})();
