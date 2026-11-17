(function () {
  'use strict';
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Openingstijden: di t/m zo 11:30 - 22:00, maandag gesloten
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var el = document.querySelector('[data-today]');
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row && day !== 1) row.classList.add('is-today');
  if (el) {
    if (day !== 1 && mins >= 690 && mins < 1320) { el.textContent = 'Nu open, tot 22:00 uur'; el.classList.add('is-open'); }
    else if (day !== 1 && mins < 690) { el.textContent = 'Vandaag open vanaf 11:30 uur'; }
    else { el.textContent = 'Weer open ' + (day === 0 ? 'dinsdag' : (day === 1 ? 'morgen' : 'morgen')) + ' vanaf 11:30 uur'; if (day === 0) el.textContent = 'Weer open dinsdag vanaf 11:30 uur'; }
  }

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function show(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on);
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + tabs.length) % tabs.length; tabs[n].focus(); show(tabs[n]); e.preventDefault();
    });
  });

  // Voorbeeldformulier: verstuurt niets
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var m = document.getElementById('form-msg'); m.hidden = false;
    m.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
