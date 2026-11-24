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

  /* Vandaag open? Elke dag 10:00-23:00 */
  var now = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + now.getDay() + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (mins < 600) el.textContent = 'Vandaag open van 10:00 tot 23:00';
    else if (mins < 1380) { el.textContent = 'Nu open, vandaag tot 23:00'; el.classList.add('is-open'); }
    else el.textContent = 'Morgen weer open vanaf 10:00';
  }
})();
