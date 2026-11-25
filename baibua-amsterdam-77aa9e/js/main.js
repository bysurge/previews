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
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault(); }
    });
  });

  // Today: open status, today's takeaway special, today's row in the hours table
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var open = day === 1 ? null : (day === 0 ? 13 * 60 : 12 * 60);
  var el = document.getElementById('today');
  if (open === null) {
    el.textContent = 'Vandaag (maandag) gesloten. Dinsdag vanaf 12:00 weer open.';
    el.classList.add('closed');
  } else if (mins < open) {
    el.textContent = 'Vandaag open van ' + (day === 0 ? '13:00' : '12:00') + ' tot 22:00';
  } else if (mins < 22 * 60) {
    el.textContent = 'Nu open tot 22:00, keuken tot 21:30';
  } else {
    el.textContent = 'Nu gesloten. ' + (day === 0 ? 'Maandag gesloten, dinsdag vanaf 12:00 weer open.' : 'Morgen vanaf ' + (day === 6 ? '13:00' : '12:00') + ' weer open.');
    el.classList.add('closed');
  }
  var li = document.querySelector('#week li[data-day="' + day + '"]');
  if (li) li.classList.add('is-today');
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('is-today');
  });
})();
