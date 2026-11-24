(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // today's opening hours
  var day = new Date().getDay();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var lines = {
    0: 'Vandaag open vanaf 12.00 uur, keuken tot 20.30 uur',
    1: 'Vandaag open vanaf 16.00 uur, keuken tot 20.30 uur',
    2: 'Dinsdag is onze rustdag, morgen is het Friethuis weer open',
    3: 'Vandaag is alleen Wanroij’s Friethuis open, 16.00 – 20.30 uur',
    4: 'Vandaag open vanaf 16.00 uur, keuken tot 20.30 uur',
    5: 'Vandaag open vanaf 12.00 uur, keuken tot 20.30 uur',
    6: 'Vandaag open vanaf 16.00 uur, keuken tot 20.30 uur'
  };
  var tl = document.getElementById('today-line');
  if (tl && lines[day]) tl.textContent = lines[day];
})();
