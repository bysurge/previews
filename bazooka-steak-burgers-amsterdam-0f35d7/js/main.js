(function () {
  var body = document.body;
  var header = document.querySelector('.top');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');

  // Header turns solid once the hero is scrolled past a little
  function onScroll() { header.classList.toggle('solid', window.scrollY > 40 || body.classList.contains('nav-open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    onScroll();
  }
  toggle.addEventListener('click', function () { setMenu(!body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t, false); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // Today's opening hours (Amsterdam time)
  var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
  var day = now.getDay();
  var close = day === 0 ? 23 * 60 : 23 * 60 + 30;
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  var closeTxt = day === 0 ? '23:00' : '23:30';
  if (mins >= 11 * 60 && mins < close) {
    today.textContent = 'Nu open, vandaag tot ' + closeTxt;
  } else if (mins < 11 * 60) {
    today.textContent = 'Vandaag open van 11:00 tot ' + closeTxt;
    today.classList.add('closed');
  } else {
    today.textContent = 'Nu gesloten, morgen open vanaf 11:00';
    today.classList.add('closed');
  }
})();
