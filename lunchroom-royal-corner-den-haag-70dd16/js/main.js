(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
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

  // open today (0 = Sunday)
  var hours = { 1: ['06:30', '16:00'], 2: ['06:30', '16:00'], 3: ['06:30', '16:00'], 4: ['06:30', '16:00'], 5: ['06:30', '16:00'], 6: ['08:00', '13:30'] };
  var now = new Date();
  var d = now.getDay();
  var el = document.getElementById('today');
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if ((tr.getAttribute('data-days') || '').split(',').indexOf(String(d)) > -1) tr.classList.add('is-today');
  });
  if (el && hours[d]) {
    var mins = now.getHours() * 60 + now.getMinutes();
    var toM = function (s) { var p = s.split(':'); return +p[0] * 60 + +p[1]; };
    var h = hours[d];
    if (mins < toM(h[0])) el.textContent = 'Vandaag open van ' + h[0] + ' tot ' + h[1];
    else if (mins < toM(h[1])) el.textContent = 'Nu open, tot ' + h[1];
    else { el.textContent = 'Vandaag waren we open tot ' + h[1]; el.classList.add('closed'); }
    el.hidden = false;
  }
})();
