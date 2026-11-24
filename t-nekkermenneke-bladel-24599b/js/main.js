(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on ? 'true' : 'false');
      o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var nt = tabs[(i + n + tabs.length) % tabs.length];
      select(nt); nt.focus();
    });
  });

  // today
  var d = new Date().getDay();
  var row = document.querySelector('.uren tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var txt = { 0: 'vanaf 10.00 uur open', 6: 'vanaf 10.00 uur open', 3: 'vanaf 11.00 uur open', 4: 'vanaf 11.00 uur open', 5: 'vanaf 11.00 uur open' };
  var el = document.getElementById('vandaag');
  if (el) el.innerHTML = txt[d] ? '<strong>Vandaag ' + txt[d] + '.</strong> Maandag en dinsdag gesloten.' : '<strong>Vandaag gesloten.</strong> Woensdag t/m vrijdag vanaf 11.00 uur, weekend vanaf 10.00 uur.';

  // form (demo)
  var form = document.getElementById('resform');
  var resOnly = form.querySelector('.res-only');
  form.querySelectorAll('input[name=soort]').forEach(function (r) {
    r.addEventListener('change', function () { resOnly.hidden = form.soort.value !== 'res'; });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('demo').hidden = false;
  });
})();
