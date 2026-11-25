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

  /* Kaart: tabs */
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function show(name, focus) {
    tabs.forEach(function (t) {
      var on = t.id === 't-' + name;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on && focus) t.focus();
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t.id.slice(2)); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); show(tabs[(i + d + tabs.length) % tabs.length].id.slice(2), true); }
    });
  });
  document.querySelectorAll('[data-goto]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.getAttribute('data-goto')); });
  });

  /* Openingstijden (minuten na middernacht) */
  var HOURS = { 1: [510, 1020], 2: [510, 1020], 3: [510, 1020], 4: [510, 1350], 5: [510, 1350], 6: [540, 1350], 0: [540, 1350] };
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

  document.querySelectorAll('#hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('is-today');
  });

  var h = HOURS[day];
  var openNow = mins >= h[0] && mins < h[1];
  var st = document.querySelector('[data-status]');
  if (openNow) {
    st.textContent = 'Nu open, tot ' + fmt(h[1]) + ' uur';
    st.classList.add('is-open');
  } else if (mins < h[0]) {
    st.textContent = 'Vandaag open vanaf ' + fmt(h[0]) + ' uur';
  } else {
    var nd = (day + 1) % 7;
    st.textContent = 'Morgen weer open vanaf ' + fmt(HOURS[nd][0]) + ' uur';
  }

  /* Welk dagdeel is het nu? Kaart opent daar meteen op. */
  var part = null;
  if (openNow) {
    if (mins < 660) part = 'ontbijt';
    else if (mins < 990) part = 'lunch';
    else if (mins < 1020) part = 'borrel';
    else part = 'diner';
  }
  if (part) {
    var cell = document.querySelector('.dagdelen [data-part="' + part + '"]');
    if (cell) cell.classList.add('is-now');
    show(part);
  }

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
