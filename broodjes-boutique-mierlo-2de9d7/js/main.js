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

  /* Tabs van de menukaart */
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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

  /* Vandaag open? (di t/m za 10-17) */
  var OPEN = [600, 1020];
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  var isOpenDay = function (d) { return d >= 2 && d <= 6; };
  if (el) {
    if (isOpenDay(day) && mins < OPEN[1]) {
      el.textContent = mins >= OPEN[0] ? 'Nu open, tot 17.00 uur' : 'Vandaag open van 10.00 tot 17.00 uur';
    } else {
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (isOpenDay(d)) { el.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d]) + ' vanaf 10.00 uur'; break; }
      }
    }
  }
})();
