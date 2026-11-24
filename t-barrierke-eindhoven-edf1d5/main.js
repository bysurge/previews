(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.parentNode.scrollLeft = Math.max(0, tab.offsetLeft - 24);
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  // category strip opens the right tab
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // today's hours + open now
  var hours = { 0: [14, 21], 1: [11, 21], 2: [11, 21], 3: [11, 21], 4: [11, 21], 5: [11, 21], 6: [12, 21] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var el = document.getElementById('open-now');
  var t = hours[d], pad = function (n) { return (n < 10 ? '0' : '') + n + ':00'; };
  if (h >= t[0] && h < t[1]) el.textContent = 'Nu open, vandaag tot ' + pad(t[1]);
  else if (h < t[0]) { el.textContent = 'Vandaag open van ' + pad(t[0]) + ' tot ' + pad(t[1]); el.classList.add('dicht'); }
  else { var n = hours[(d + 1) % 7]; el.textContent = 'Nu gesloten, morgen open vanaf ' + pad(n[0]); el.classList.add('dicht'); }
})();
