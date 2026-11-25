(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // menu tabs
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-tab'))); });
  });

  // opening hours today
  var hours = { 0: [16, 0, 20, 30], 1: null, 2: [16, 0, 20, 0], 3: [12, 0, 20, 0], 4: [12, 0, 20, 0], 5: [11, 30, 21, 0], 6: [12, 0, 21, 0] };
  function fmt(h, m) { return h + ':' + (m < 10 ? '0' : '') + m; }
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var h = hours[day];
  if (!h) {
    el.textContent = 'Vandaag gesloten. Dinsdag weer open vanaf 16:00.';
  } else {
    var open = h[0] * 60 + h[1], close = h[2] * 60 + h[3];
    if (mins >= open && mins < close) { el.textContent = 'Nu open, vandaag tot ' + fmt(h[2], h[3]); el.classList.add('is-open'); }
    else if (mins < open) el.textContent = 'Vandaag open van ' + fmt(h[0], h[1]) + ' tot ' + fmt(h[2], h[3]);
    else el.textContent = 'Vandaag open tot ' + fmt(h[2], h[3]) + ', nu gesloten';
  }
})();
