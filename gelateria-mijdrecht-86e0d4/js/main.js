(function () {
  'use strict';
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });

  /* Dagelijks 12.00-21.00 */
  var now = new Date(), mins = now.getHours() * 60 + now.getMinutes(), day = now.getDay();
  var row = document.querySelector('.hours [data-day="' + day + '"]'); if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) el.textContent = mins < 720 ? 'Vandaag open vanaf 12.00 uur' : (mins < 1260 ? 'Nu open, tot 21.00 uur' : 'Morgen weer open vanaf 12.00 uur');

  var f = document.getElementById('aanvraag-form');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = document.getElementById('form-msg'); m.hidden = false; m.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
