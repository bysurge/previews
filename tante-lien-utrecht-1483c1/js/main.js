(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      var next = tabs[(n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // today's hours
  var d = new Date(), day = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
  document.querySelectorAll('.hours tr[data-days]').forEach(function (r) {
    if ((' ' + r.getAttribute('data-days') + ' ').indexOf(' ' + day + ' ') > -1) r.classList.add('today');
  });
  var open = day === 1 ? null : (day === 0 ? 16 * 60 : 12 * 60);
  var line = document.getElementById('hero-hours');
  if (open === null) line.innerHTML = '<b>Vandaag gesloten.</b> Dinsdag vanaf 12 uur weer open.';
  else if (m < open) line.innerHTML = '<b>Vandaag open vanaf ' + (open / 60) + ' uur</b>, tot 21 uur.';
  else if (m < 21 * 60) line.innerHTML = '<b>Nu open</b>, vandaag tot 21 uur.';
  else line.innerHTML = '<b>Nu gesloten.</b> ' + (day === 0 ? 'Dinsdag' : 'Morgen') + ' vanaf ' + (day === 6 ? '16' : '12') + ' uur weer open.';
})();
