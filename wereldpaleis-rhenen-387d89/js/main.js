(function () {
  // mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // tabs buffet
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // vandaag: openingstijden en prijs markeren
  var now = new Date();
  var day = now.getDay();
  var row = document.querySelector('#hoursTable tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  document.querySelectorAll('.price-card [data-days]').forEach(function (el) {
    if (el.getAttribute('data-days').split(',').indexOf(String(day)) > -1) el.classList.add('today');
  });
  var openFrom = (day === 0 || day === 6) ? 16 * 60 : 16 * 60 + 30;
  var mins = now.getHours() * 60 + now.getMinutes();
  var label = document.getElementById('openNow');
  if (label) {
    if (mins >= openFrom && mins < 22 * 60) { label.textContent = 'Nu geopend tot 22.00'; label.classList.add('is-open'); }
    else if (mins < openFrom) { label.textContent = 'Vandaag open vanaf ' + (openFrom === 960 ? '16.00' : '16.30'); }
  }
})();
