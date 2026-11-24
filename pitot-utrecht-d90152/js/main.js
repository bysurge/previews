(function () {
  'use strict';

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

  /* Tabs */
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
    });
  });

  /* Vandaag open? (ma+di 17-23, wo-zo 12-23) */
  var HOURS = { 1: [1020, 1380], 2: [1020, 1380], 3: [720, 1380], 4: [720, 1380], 5: [720, 1380], 6: [720, 1380], 0: [720, 1380] };
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return Math.floor(m / 60) + ':' + String(m % 60).padStart(2, '0'); };
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = HOURS[day];
    if (mins < h[0]) el.textContent = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]);
    else if (mins < h[1]) { el.textContent = 'Nu open, tot ' + fmt(h[1]); el.classList.add('is-open'); }
    else { var t = HOURS[(day + 1) % 7]; el.textContent = 'Morgen weer open vanaf ' + fmt(t[0]); }
  }
})();
