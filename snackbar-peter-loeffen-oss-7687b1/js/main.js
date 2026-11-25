(function () {
  // mobile menu
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // open now (from the opening hours on the site)
  var H = { 0: [12, 21], 1: [16, 20], 2: [16, 20], 3: [12, 21], 4: [12, 21], 5: [12, 21], 6: [12, 21] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60, r = H[d];
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('openNow');
  if (el) {
    var open = h >= r[0] && h < r[1];
    var txt = open ? 'Nu geopend, vandaag tot ' + r[1] + ':00' :
      (h < r[0] ? 'Vandaag open vanaf ' + r[0] + ':00' : 'Nu gesloten, morgen open vanaf ' + H[(d + 1) % 7][0] + ':00');
    el.innerHTML = '<span class="dot' + (open ? '' : ' closed') + '"></span><span>' + txt + '</span><a href="#contact">Alle openingstijden</a>';
  }
})();
