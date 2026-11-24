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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  /* Vandaag open? (do/vr diner vanaf 18:00, za/zo lunch vanaf 13:00) */
  var OPEN = { 4: 'diner vanaf 18:00', 5: 'diner vanaf 18:00', 6: 'lunch vanaf 13:00, diner vanaf 18:00', 0: 'lunch vanaf 13:00, diner vanaf 18:00' };
  var START = { 4: 18, 5: 18, 6: 13, 0: 13 };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var day = now.getDay();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (OPEN[day]) {
      el.textContent = (now.getHours() >= START[day] ? 'Vandaag open: ' : 'Vandaag: ') + OPEN[day];
      el.classList.add('is-open');
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (OPEN[d]) { el.textContent = 'Vandaag gesloten. Weer open op ' + names[d] + ': ' + OPEN[d]; break; }
      }
    }
  }

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
