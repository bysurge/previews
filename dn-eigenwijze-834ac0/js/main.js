(function () {
  var body = document.body;
  var btn = document.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () { body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); });
    });
  }

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var list = t.closest('section');
      if (list && t.getBoundingClientRect().top < 60) list.scrollIntoView();
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // opening hours today
  var day = new Date().getDay();
  var row = document.querySelector('[data-hours] tr[data-day="' + day + '"]');
  if (row) {
    row.classList.add('is-today');
    var t = row.querySelector('td').textContent.trim();
    var out = document.querySelector('[data-today]');
    if (out) out.innerHTML = /gesloten/i.test(t) ? 'Vandaag zijn we <b>gesloten</b>.' : 'Vandaag open: <b>' + t + '</b>';
  }

  // demo forms
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.demo-msg');
      if (m) m.hidden = false;
    });
  });
})();
