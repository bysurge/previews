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

  /* Tabs */
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

  /* Voorbeeldformulieren: versturen niets */
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });

  /* Vandaag open? [open, sluit] in uren; sluit > 24 = na middernacht */
  var H = { 1: [15, 24], 2: [15, 24], 3: [15, 24], 4: [15, 24], 5: [15, 25], 6: [12, 25], 0: [12, 22] };
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (!el) return;
  var fmt = function (x) { return String(x % 24).padStart(2, '0') + '.00'; };
  var prev = H[(day + 6) % 7];
  var t = H[day];
  if (h < prev[1] - 24) { el.textContent = 'Nu open, tot ' + fmt(prev[1]) + ' uur'; el.classList.add('is-open'); }
  else if (h >= t[0] && h < t[1]) { el.textContent = 'Nu open, tot ' + fmt(t[1]) + ' uur'; el.classList.add('is-open'); }
  else if (h < t[0]) { el.textContent = 'Vandaag open vanaf ' + fmt(t[0]) + ' uur'; }
  else { var n = H[(day + 1) % 7]; el.textContent = 'Morgen weer open vanaf ' + fmt(n[0]) + ' uur'; }
})();
