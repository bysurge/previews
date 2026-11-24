(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // today + open now (di-zo 14:00-21:30, ma gesloten)
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('openNow');
  if (el) {
    var open = day !== 1 && mins >= 14 * 60 && mins < 21 * 60 + 30;
    if (open) el.innerHTML = '<b>Nu open</b> tot 21:30 · maandag gesloten';
    else if (day !== 1 && mins < 14 * 60) el.innerHTML = '<b>Vandaag open</b> vanaf 14:00 tot 21:30';
  }
})();
