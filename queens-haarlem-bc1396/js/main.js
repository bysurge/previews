(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Openingstijden: vandaag open? (0 = zondag) */
  var HOURS = { 0: [570, 1140], 1: [600, 1050], 2: [600, 1050], 3: [600, 1050], 4: [600, 1050], 5: [600, 1140], 6: [570, 1140] };
  var NAMES = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return String(Math.floor(m / 60)).padStart(2, '0') + '.' + String(m % 60).padStart(2, '0'); };
  document.querySelectorAll('#uren [data-days]').forEach(function (row) {
    if (row.getAttribute('data-days').split(',').indexOf(String(day)) > -1) row.classList.add('is-today');
  });
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = HOURS[day];
    if (mins < h[1]) {
      el.textContent = (mins >= h[0] ? 'Nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur · Kruisstraat 31, Haarlem';
      if (mins >= h[0]) el.classList.add('is-open');
    } else {
      var d = (day + 1) % 7;
      el.textContent = 'Morgen ' + NAMES[d] + ' weer open vanaf ' + fmt(HOURS[d][0]) + ' uur · Kruisstraat 31, Haarlem';
    }
  }

  /* Menu-tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); select(n);
    });
  });

  /* Voorbeeldformulier: verstuurt niets */
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
