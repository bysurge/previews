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

  // tabs
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
  // links to the wine list open the wine tab
  document.querySelectorAll('a[href="#wijn"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      select(document.getElementById('t-wijn'));
      document.getElementById('kaart').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });
  if (location.hash === '#wijn') select(document.getElementById('t-wijn'));

  // wine filter
  var chips = [].slice.call(document.querySelectorAll('.chip'));
  var cats = [].slice.call(document.querySelectorAll('.wcat'));
  function filter(f) {
    chips.forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.filter === f ? 'true' : 'false'); });
    cats.forEach(function (cat) {
      var rows = [].slice.call(cat.querySelectorAll('.wine'));
      rows.forEach(function (r) { r.hidden = f === 'glas' && !r.classList.contains('by-glass'); });
      cat.querySelectorAll('.wgroup').forEach(function (g) { g.hidden = !g.querySelector('.wine:not([hidden])'); });
      var intro = cat.querySelector('.wintro');
      if (intro) intro.hidden = f === 'glas';
      var any = !!cat.querySelector('.wine:not([hidden])');
      cat.hidden = !any || !(f === 'alle' || f === 'glas' || cat.dataset.cat === f);
    });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { filter(c.dataset.filter); }); });

  // open today?
  var hours = { 0: [16, 23], 1: null, 2: [16, 23], 3: [16, 23], 4: [16, 24], 5: [16, 24], 6: [16, 24] };
  var now = new Date();
  var day = now.getDay();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var h = hours[day];
  var t = now.getHours() + now.getMinutes() / 60;
  var txt;
  if (!h) { txt = 'Vandaag (maandag) gesloten, morgen vanaf 16:00 open'; el.classList.add('closed'); }
  else if (t < h[0]) txt = 'Vandaag open van 16:00 tot ' + (h[1] === 24 ? '00:00' : '23:00');
  else if (t < h[1]) txt = 'Nu open tot ' + (h[1] === 24 ? '00:00' : '23:00');
  else { txt = 'Nu gesloten'; el.classList.add('closed'); }
  el.textContent = txt;
  el.hidden = false;
})();
