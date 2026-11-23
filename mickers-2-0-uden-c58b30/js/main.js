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

  /* Vandaag open? (vaste tijden, laatste zondag van de maand en vaste feestdagen) */
  var HOURS = { 1: [540, 1050], 2: [540, 1050], 3: [540, 1050], 4: [540, 1050], 5: [540, 1260], 6: [540, 1020] };
  function hoursFor(d) {
    var md = (d.getMonth() + 1) + '-' + d.getDate();
    if (md === '12-25' || md === '12-26' || md === '1-1') return null;
    if (md === '12-5' || md === '12-31') return [540, 960];
    if (d.getDay() === 0) {
      var next = new Date(d); next.setDate(d.getDate() + 7);
      return next.getMonth() !== d.getMonth() ? [660, 1020] : null;
    }
    return HOURS[d.getDay()] || null;
  }
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + now.getDay() + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = hoursFor(now);
    if (h && mins < h[1]) {
      el.textContent = (mins >= h[0] ? 'Nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur';
      el.classList.add('is-open');
    } else {
      for (var i = 1; i <= 8; i++) {
        var d = new Date(now); d.setDate(now.getDate() + i);
        var hh = hoursFor(d);
        if (hh) { el.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d.getDay()]) + ' vanaf ' + fmt(hh[0]) + ' uur'; break; }
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
