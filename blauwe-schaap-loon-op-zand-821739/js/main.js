(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // today's kitchen hours
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var day = new Date().getDay();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) {
    row.classList.add('is-today');
    var val = row.querySelector('td').textContent;
    var out = document.querySelector('[data-today]');
    if (out) out.textContent = val === 'gesloten'
      ? 'Vandaag (' + names[day] + ') is de keuken gesloten.'
      : 'Keuken vandaag (' + names[day] + '): ' + val;
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
