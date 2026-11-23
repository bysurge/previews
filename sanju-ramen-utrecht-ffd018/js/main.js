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

  /* Tabs van de kaart */
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
      select(next); next.focus(); e.preventDefault();
    });
  });

  /* Openingstijden keuken: vandaag markeren */
  var HOURS = { 2: [1020, 1290], 3: [1020, 1290], 4: [1020, 1290], 5: [1020, 1320], 6: [720, 1320], 0: [720, 1290] };
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = HOURS[day];
    if (h && mins < h[1]) {
      el.textContent = (mins >= h[0] ? 'Keuken nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur, Voorstraat 29';
      el.classList.add('is-open');
    } else {
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (HOURS[d]) { el.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d]) + ' vanaf ' + fmt(HOURS[d][0]) + ' uur, Voorstraat 29'; break; }
      }
    }
  }
})();
