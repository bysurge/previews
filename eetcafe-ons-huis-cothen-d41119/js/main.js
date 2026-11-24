(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });

  // Open today? Hours per weekday in minutes [open, close]; close 1440 = midnight.
  try {
    var H = { 0: [600, 1320], 1: [720, 1320], 2: null, 3: [720, 1320], 4: [600, 1320], 5: [600, 1440], 6: [600, 1440] };
    var fmt = function (m) { return m >= 1440 ? '00:00' : (('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2)); };
    var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
    var d = now.getDay(), m = now.getHours() * 60 + now.getMinutes(), h = H[d];
    var row = document.querySelector('.hours tr[data-day="' + d + '"]');
    if (row) row.classList.add('is-today');
    var el = document.getElementById('today');
    if (el) {
      if (!h) el.textContent = 'Vandaag (dinsdag) gesloten. Morgen weer open vanaf 12:00';
      else if (m < h[0]) el.textContent = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]) + ', keuken tot 21:00';
      else if (m < h[1]) { el.textContent = 'Nu open tot ' + fmt(h[1]) + (m < 1260 ? ', keuken tot 21:00' : ''); el.classList.add('open'); }
      else el.textContent = 'Nu gesloten' + (d === 1 ? '. Woensdag weer open vanaf 12:00' : '. Morgen weer open');
    }
  } catch (e) {}
})();
