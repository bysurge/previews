(function () {
  // Mobile menu
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

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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

  // Open today? (Dutch time)
  try {
    var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
    var d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    var row = document.querySelector('.hours tr[data-day="' + d + '"]');
    if (row) row.classList.add('is-today');
    var el = document.getElementById('today');
    if (el) {
      if (d === 1) el.textContent = 'Maandag gesloten, dinsdag weer open';
      else if (m < 900) el.textContent = 'Vandaag open van 15:00 tot 21:30 uur';
      else if (m < 1290) { el.textContent = 'Nu open tot 21:30 uur' + (m < 1260 && m >= 1020 ? ', bezorgen tot 21:00' : ''); el.classList.add('open'); }
      else el.textContent = 'Nu gesloten. Morgen weer open vanaf 15:00 uur';
      if (d === 0 && m >= 1290) el.textContent = 'Nu gesloten. Dinsdag weer open vanaf 15:00 uur';
    }
  } catch (e) {}
})();
