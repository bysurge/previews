(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Today's status, from their regular and holiday hours
  var now = new Date();
  var d = now.getDay(), m = now.getMonth() + 1, day = now.getDate();
  var open = d >= 3 || d === 0;
  var special = null;
  if (m === 12 && (day === 24 || day === 26 || (day >= 28 && day <= 31))) special = false;
  if ((m === 12 && day === 27) || (m === 1 && day === 1)) special = true;
  if (special !== null) open = special;
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var el = document.querySelector('[data-today]');
  if (el) {
    el.textContent = open ? 'Vandaag (' + names[d] + ') open vanaf 16:00' : 'Vandaag (' + names[d] + ') gesloten, woensdag t/m zondag open vanaf 16:00';
    if (!open) el.classList.add('closed');
  }
  var row = document.querySelector('.hours-table tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
})();
