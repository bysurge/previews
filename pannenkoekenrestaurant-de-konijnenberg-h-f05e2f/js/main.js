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

  /* Vandaag open? Elke dag 12:00-21:00, keuken tot 20:00; dicht 25, 26, 31 dec en 1 jan */
  var el = document.querySelector('[data-today]');
  if (el) {
    var now = new Date();
    var m = now.getMonth(), d = now.getDate();
    var closed = (m === 11 && (d === 25 || d === 26 || d === 31)) || (m === 0 && d === 1);
    var mins = now.getHours() * 60 + now.getMinutes();
    if (closed) el.textContent = 'Vandaag gesloten (feestdag)';
    else if (mins < 720) el.textContent = 'Vandaag open van 12:00 tot 21:00';
    else if (mins < 1200) { el.textContent = 'Nu open, keuken tot 20:00'; el.classList.add('is-open'); }
    else if (mins < 1260) { el.textContent = 'Nu open tot 21:00, de keuken is dicht'; el.classList.add('is-open'); }
    else el.textContent = 'Morgen weer open vanaf 12:00';
  }

  /* Tabs voor de kaart */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
})();
