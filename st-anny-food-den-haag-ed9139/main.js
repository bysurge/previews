(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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

  // today's hours + open now
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var openFrom = d === 0 ? 12 * 60 : 11 * 60, close = 20 * 60;
  var m = now.getHours() * 60 + now.getMinutes();
  var line = document.getElementById('openNu');
  if (line) {
    if (m >= openFrom && m < close) line.innerHTML = '<strong>Nu open</strong> tot 20:00 · keuken tot 19:30';
    else line.innerHTML = (m < openFrom ? 'Vandaag open vanaf ' + (d === 0 ? '12:00' : '11:00') : 'Nu gesloten') + ' · ma t/m za 11–20, zo 12–20';
  }
})();
