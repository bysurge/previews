(function () {
  var top = document.querySelector('.top');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });
  // Link "Tour de Favorito" in de nav naar sectie, en vanuit de dinerkaart
  // Opening today
  var hours = {
    0: [10, 22], 1: null, 2: [12, 22], 3: [10, 22], 4: [10, 22], 5: [10, 24], 6: [10, 24]
  };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('vandaag');
  if (el) {
    var h = hours[d];
    if (!h) {
      el.innerHTML = 'Vandaag (maandag) zijn we <strong>gesloten</strong>. Morgen vanaf 12.00 uur weer welkom.';
    } else {
      var hr = now.getHours() + now.getMinutes() / 60;
      var close = h[1] === 24 ? '00.00' : h[1] + '.00';
      if (hr >= h[0] && hr < h[1]) el.innerHTML = 'Nu <strong>open</strong>, vandaag tot ' + close + ' uur.';
      else el.innerHTML = 'Vandaag (' + names[d] + ') open van ' + h[0] + '.00 tot ' + close + ' uur.';
    }
  }
})();
