(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  });

  /* Menukaart-tabs */
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  /* Vandaag open? (di t/m zo 11.00-22.00, maandag dicht) */
  var OPEN = 660, CLOSE = 1320;
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (day !== 1 && mins < CLOSE) {
      el.textContent = mins >= OPEN ? 'Nu open, tot 22.00 uur' : 'Vandaag open van 11.00 tot 22.00 uur';
      if (mins >= OPEN) el.classList.add('is-open');
    } else {
      var next = day === 0 ? 'op dinsdag' : 'morgen';
      el.textContent = 'Weer open ' + next + ' vanaf 11.00 uur';
    }
  }

  /* Reserveren: voorbeeldformulier, verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
  });
})();
