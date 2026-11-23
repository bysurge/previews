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

  /* Vandaag open? Zo t/m wo 16.30-21.00, do t/m za 16.30-21.30 */
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var close = day >= 4 ? 1290 : 1260, closeTxt = day >= 4 ? '21.30' : '21.00';
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (mins >= 990 && mins < close) { el.textContent = 'Nu open, tot ' + closeTxt + ' uur'; el.classList.add('is-open'); }
    else if (mins < 990) el.textContent = 'Vandaag open van 16.30 tot ' + closeTxt + ' uur';
    else el.textContent = 'Morgen weer open vanaf 16.30 uur';
  }

  /* Contactformulier: voorbeeld, verstuurt niets */
  document.getElementById('c-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
