(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // menu tabs
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });
  if (tabs.length) select(tabs[0]);

  // open today (Wed-Sun 15:00-22:00, Tue closed; Monday is not stated, so show nothing)
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var txt = '';
  if (day === 2) { txt = 'Vandaag gesloten, morgen open vanaf 15:00'; el.classList.add('is-closed'); }
  else if (day >= 3 || day === 0) {
    if (mins < 15 * 60) txt = 'Vandaag open van 15:00 tot 22:00';
    else if (mins < 22 * 60) txt = 'Nu open, tot 22:00';
    else if (day !== 0) { txt = 'Morgen weer open vanaf 15:00'; el.classList.add('is-closed'); }
  }
  if (txt) { el.textContent = txt; el.hidden = false; }
})();
