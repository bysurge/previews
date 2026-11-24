(function () {
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
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
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('tab-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // Today: open from 11:00 on Wednesday to Sunday, closed Monday and Tuesday
  var d = new Date().getDay();
  var today = document.getElementById('today');
  var row = document.querySelector('#hours li[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  if (d === 1 || d === 2) {
    today.textContent = 'Vandaag gesloten, woensdag weer open vanaf 11:00 uur';
    today.classList.add('closed');
  } else {
    today.textContent = 'Vandaag open vanaf 11:00 uur';
  }
})();
