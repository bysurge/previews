(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // tabs
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

  // opening hours: today
  var hours = { 0: [11, 0, 24, 0], 1: [15, 0, 24, 0], 2: [15, 0, 24, 0], 3: [15, 0, 24, 0], 4: [15, 0, 24, 0], 5: [14, 0, 24, 30], 6: [11, 0, 24, 30] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(h, m) { h = h % 24; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; }
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  // after midnight: still yesterday's evening?
  var prev = (day + 6) % 7, ph = hours[prev];
  var el = document.getElementById('today-text');
  var box = document.getElementById('today');
  var h = hours[day];
  var open = h[0] * 60 + h[1], close = h[2] * 60 + h[3];
  if (mins < (ph[2] * 60 + ph[3]) - 1440) {
    el.textContent = 'Nu open, tot ' + fmt(ph[2], ph[3]);
  } else if (mins >= open && mins < close) {
    el.textContent = 'Nu open, vandaag tot ' + fmt(h[2], h[3]) + ". Biertje?";
  } else if (mins < open) {
    el.textContent = 'Vandaag (' + names[day] + ') open vanaf ' + fmt(h[0], h[1]) + ' tot ' + fmt(h[2], h[3]);
    box.classList.add('closed');
  }
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');

  // demo forms
  Array.prototype.forEach.call(document.querySelectorAll('form[data-demo]'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
    });
  });
})();
