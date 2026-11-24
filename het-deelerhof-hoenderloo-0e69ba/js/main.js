(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      select(document.getElementById(b.getAttribute('data-open-tab')));
      document.getElementById('kaart').scrollIntoView();
    });
  });

  // vandaag open? (tijden geldig 1 okt t/m 31 dec 2026)
  var now = new Date();
  var y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate(), wd = now.getDay();
  var openDays = [0, 1, 5, 6];
  var key = y * 10000 + m * 100 + d;
  var closedDates = [20261224, 20261225, 20261226, 20261231, 20270101];
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    var day = +tr.getAttribute('data-day');
    if (openDays.indexOf(day) < 0) tr.classList.add('closed');
    if (day === wd) tr.classList.add('is-today');
  });
  var el = document.querySelector('[data-today]');
  if (!el || key < 20261001 || key > 20261231) return;
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var text;
  if (closedDates.indexOf(key) >= 0) {
    text = 'Vandaag gesloten in verband met de feestdagen';
  } else if (openDays.indexOf(wd) >= 0) {
    text = 'Vandaag open vanaf 12:00, keuken tot 20:00';
  } else {
    var n = wd; do { n = (n + 1) % 7; } while (openDays.indexOf(n) < 0);
    text = 'Vandaag gesloten, ' + names[n] + ' weer open vanaf 12:00';
  }
  el.textContent = text;
  el.hidden = false;
})();
