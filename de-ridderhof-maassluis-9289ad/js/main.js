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

  /* Vandaag open? Di t/m zo 12.00 - 21.30, maandag gesloten */
  var open = 720, close = 1290;
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (day !== 1 && mins < close) {
      el.textContent = mins >= open ? 'Nu open, keuken tot 21.30 uur' : 'Vandaag open vanaf 12.00 uur';
      el.classList.add('is-open');
    } else {
      el.textContent = (day === 0 || day === 1) ? 'Dinsdag weer open vanaf 12.00 uur' : 'Morgen weer open vanaf 12.00 uur';
    }
  }

  /* Tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
