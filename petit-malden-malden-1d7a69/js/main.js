(function () {
  'use strict';
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });

  /* Vandaag (ma t/m za 9.00-17.00) */
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours [data-day="' + day + '"]'); if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (day >= 1 && day <= 6) {
      el.textContent = mins < 540 ? 'Vandaag open vanaf 9.00 uur' : (mins < 1020 ? 'Nu open, tot 17.00 uur' : 'Vandaag gesloten, morgen weer open');
    } else { el.textContent = 'Promenade 11, Malden'; }
  }

  /* Tabs */
  var tabs = [].slice.call(document.querySelectorAll('.tabs button')), panels = [].slice.call(document.querySelectorAll('.panel'));
  function show(id) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t.dataset.p === id)); });
    panels.forEach(function (p) { p.hidden = p.id !== id; });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t.dataset.p); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var x = tabs[(i + n + tabs.length) % tabs.length]; x.focus(); show(x.dataset.p); }
    });
  });

  /* Tabellen */
  function table(head, rows) {
    var h = '<div class="tw"><table><thead><tr>' + head.map(function (c, i) { return '<th' + (i > 0 ? ' class="p"' : '') + '>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return '<td' + (i > 0 ? ' class="p"' : '') + '>' + c + '</td>'; }).join('') + '</tr>'; });
    return h + '</tbody></table></div>';
  }
  function put(id, html) { var e = document.getElementById(id); if (e) e.innerHTML = html; }

  put('t-taart', table(['Taarten', 'Prijs', 'Snijden +', 'Opmaken +', 'Jam +', 'Banketbakkersroom +', 'Aanzet zijkant +'], [
    ['6 personen, vierkant', '€ 9,00', '€ 0,50', '€ 0,50', '€ 1,00', '€ 1,00', '€ 1,00'],
    ['8 personen', '€ 11,50', '€ 0,50', '€ 0,50', '€ 1,50', '€ 1,50', '–'],
    ['9 personen, vierkant', '€ 11,50', '€ 0,50', '€ 0,50', '€ 1,50', '€ 1,50', '€ 1,50'],
    ['12 personen, vierkant', '€ 13,50', '€ 0,75', '€ 0,75', '€ 2,00', '€ 2,00', '€ 2,00'],
    ['15 personen, rond', '€ 15,50', '€ 0,75', '€ 0,75', '€ 2,00', '€ 2,00', '–'],
    ['18 personen, rond', '€ 18,25', '€ 0,75', '€ 1,25', '€ 2,00', '€ 2,00', '–'],
    ['20 personen, vierkant', '€ 19,75', '€ 0,75', '€ 1,25', '€ 2,50', '€ 2,50', '€ 2,50'],
    ['24 personen, vierkant', '€ 23,00', '€ 0,75', '€ 1,25', '€ 2,75', '€ 2,75', '€ 2,75'],
    ['30 personen, vierkant', '€ 27,00', '€ 0,75', '€ 1,50', '€ 3,00', '€ 3,00', '€ 3,00'],
    ['35 personen, vierkant', '€ 27,00', '€ 0,75', '€ 1,50', '€ 3,00', '€ 3,00', '€ 3,00']
  ]));
  function soort(id, titel, rows) { put(id, '<h3>' + titel + ' <span class="fine">(standaard opgemaakt)</span></h3>' + table(['Formaat', 'Prijs', 'Snijden +'], rows)); }
  soort('t-mokka', 'Mokkataarten', [['6 personen, vierkant', '€ 11,25', '€ 0,50'], ['8 personen, rond', '€ 13,50', '€ 0,50'], ['9 personen, vierkant', '€ 14,50', '€ 0,50'], ['12 personen, vierkant', '€ 16,00', '€ 0,75'], ['15 personen, rond', '€ 18,00', '€ 0,75'], ['18 personen, rond', '€ 21,50', '€ 0,75'], ['20 personen, vierkant', '€ 23,00', '€ 0,75'], ['24 personen, vierkant', '€ 25,25', '€ 0,75'], ['30 personen, vierkant', '€ 32,25', '€ 0,75'], ['35 personen, vierkant', '€ 32,25', '€ 0,75']]);
  soort('t-sw', 'Schwarzwalder kirschtaarten', [['6 personen, vierkant', '€ 12,75', '€ 0,50'], ['8 personen, rond', '€ 15,50', '€ 0,50'], ['9 personen, vierkant', '€ 15,50', '€ 0,50'], ['12 personen, vierkant', '€ 16,25', '€ 0,75'], ['15 personen, rond', '€ 19,00', '€ 0,75'], ['20 personen, vierkant', '€ 27,50', '€ 0,75'], ['24 personen, vierkant', '€ 32,50', '€ 0,75']]);
  soort('t-rv', 'Red velvettaarten', [['6 personen, vierkant', '€ 13,25', '€ 0,50'], ['9 personen, vierkant', '€ 17,75', '€ 0,50'], ['12 personen, vierkant', '€ 21,75', '€ 0,75'], ['20 personen, vierkant', '€ 34,00', '€ 0,75'], ['24 personen, vierkant', '€ 39,75', '€ 0,75']]);
  soort('t-choc', 'Chocoladetaarten', [['6 personen, vierkant', '€ 13,25', '€ 0,50'], ['8 personen, rond', '€ 15,50', '€ 0,50'], ['9 personen, vierkant', '€ 17,75', '€ 0,50'], ['12 personen, vierkant', '€ 21,75', '€ 0,75'], ['15 personen, rond', '€ 25,25', '€ 0,75'], ['20 personen, vierkant', '€ 34,00', '€ 0,75'], ['24 personen, vierkant', '€ 39,75', '€ 0,75']]);

  /* Bestelformulier: verstuurt niets */
  var f = document.getElementById('order-form');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = document.getElementById('form-msg'); m.hidden = false; m.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
