(function () {
  // Mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // Today: highlight row + open/closed line. Hours in minutes; close after midnight = +1440.
  var H = { 0: null, 1: null, 2: [720, 1140], 3: [720, 1440], 4: [720, 1440], 5: [450, 1560], 6: [720, 1560] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { m = m % 1440; var h = Math.floor(m / 60), mm = m % 60; return (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm; }
  var now = new Date(), d = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var y = H[(d + 6) % 7];
  var text, open = false;
  if (y && min + 1440 < y[1]) { open = true; text = 'Nu open, tot ' + fmt(y[1]) + ' vannacht'; }
  else if (H[d] && min >= H[d][0] && min < H[d][1]) { open = true; text = 'Nu open, vandaag tot ' + fmt(H[d][1]); }
  else if (H[d] && min < H[d][0]) { text = 'Vandaag open vanaf ' + fmt(H[d][0]); }
  else {
    for (var i = 1; i <= 7; i++) {
      var n = (d + i) % 7;
      if (H[n]) { text = 'Gesloten, ' + (i === 1 ? 'morgen' : names[n]) + ' weer open vanaf ' + fmt(H[n][0]); break; }
    }
  }
  if (el && text) { el.textContent = text; el.classList.toggle('is-open', open); }
})();
