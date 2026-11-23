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

  /* Tabs van de menukaart */
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  /* Vandaag open? */
  var H = { 1: [600, 960], 2: [600, 960], 3: [600, 960], 4: [600, 960], 5: [600, 1140], 6: [660, 1020], 0: [660, 1020] };
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = H[day];
    if (mins < h[1]) el.textContent = (mins >= h[0] ? 'Nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur';
    else el.textContent = 'Morgen weer open vanaf ' + fmt(H[(day + 1) % 7][0]) + ' uur';
  }
})();
