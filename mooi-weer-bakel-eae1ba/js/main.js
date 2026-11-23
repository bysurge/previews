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

  /* Het vooruitzicht: vandaag open? */
  var HOURS = { 2: [660, 960], 3: [660, 960], 4: [660, 960], 5: [660, 960], 6: [660, 960], 0: [660, 1020] };
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = HOURS[day];
    if (h && mins < h[1]) {
      el.textContent = (mins >= h[0] ? 'Nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur';
      el.classList.add('is-open');
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (HOURS[d]) { el.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d]) + ' vanaf ' + fmt(HOURS[d][0]) + ' uur'; break; }
      }
    }
  }

  /* Formulieren: voorbeeld, verstuurt niets */
  Array.prototype.forEach.call(document.querySelectorAll('form'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      msg.hidden = false;
    });
  });
})();
