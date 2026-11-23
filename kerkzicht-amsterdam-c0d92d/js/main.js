(function () {
  // mobile menu
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // today in hours + open line
  var now = new Date(), day = now.getDay(), h = now.getHours();
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var line = document.getElementById('openline');
  var openDay = function (d) { return d >= 3 || d === 0; };
  var isOpen = (openDay(day) && h >= 15) || (h < 1 && openDay((day + 6) % 7));
  if (isOpen) { line.textContent = 'Nu open, tot 01:00'; line.classList.add('is-open'); }
  else if (openDay(day) && h < 15) { line.textContent = 'Vandaag open vanaf 15:00'; }

  // reservation form selects
  var tijd = document.getElementById('tijd'), gasten = document.getElementById('gasten');
  for (var m = 15 * 60; m <= 24 * 60; m += 30) {
    var hh = Math.floor(m / 60) % 24, mm = m % 60;
    var v = (hh < 10 ? '0' : '') + hh + ':' + (mm ? '30' : '00');
    tijd.add(new Option(v, v, m === 18 * 60, m === 18 * 60));
  }
  for (var g = 1; g <= 10; g++) gasten.add(new Option(g, g, g === 2, g === 2));
  gasten.add(new Option('Meer dan 10', '10+'));
  document.getElementById('resform').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formdone').hidden = false;
  });
})();
(function () {
  var fab = document.querySelector('.call-fab'), hero = document.querySelector('.hero');
  if (!fab || !hero) return;
  function check() { fab.classList.toggle('show', window.scrollY > hero.offsetHeight * 0.6); }
  window.addEventListener('scroll', check, { passive: true }); check();
})();
