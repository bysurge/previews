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

  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  /* Open woensdag t/m zondag 18.00-00.00 */
  var OPEN = [0, 3, 4, 5, 6];
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var todayEl = document.querySelector('[data-today]');
  if (todayEl) {
    if (OPEN.indexOf(day) > -1 && mins >= 1080) {
      todayEl.textContent = 'Nu open, tot middernacht. Laatste reservering 20.30 uur.';
      todayEl.classList.add('is-open');
    } else if (OPEN.indexOf(day) > -1) {
      todayEl.textContent = 'Vandaag open vanaf 18.00 uur, laatste reservering 20.30 uur';
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (OPEN.indexOf(d) > -1) {
          todayEl.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d]) + ' vanaf 18.00 uur';
          break;
        }
      }
    }
  }

  /* Eerstvolgende Sunday Roast: eerste zondag van de maand */
  var roastEl = document.querySelector('[data-roast]');
  if (roastEl) {
    var first = function (y, m) { var x = new Date(y, m, 1); return new Date(y, m, 1 + (7 - x.getDay()) % 7, 16); };
    var r = first(now.getFullYear(), now.getMonth());
    if (r < now) r = first(now.getFullYear(), now.getMonth() + 1);
    roastEl.textContent = 'Volgens dat ritme is de volgende op zondag ' + r.getDate() + ' ' + months[r.getMonth()] + '.';
  }

  /* Tabs drankenkaart */
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
})();
