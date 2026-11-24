(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // Today's hours
  var day = new Date().getDay();
  var line = document.getElementById('today');
  var text;
  if (day >= 2 && day <= 5) text = 'Vandaag open van 16.00 tot 20.00 uur (keuken tot 19.30)';
  else if (day === 6 || day === 0) text = 'Vandaag open van 16.00 tot 21.00 uur (keuken tot 20.30)';
  else text = 'Dinsdag t/m zondag open vanaf 16.00 uur';
  if (line) line.textContent = text;
  document.querySelectorAll('.hours [data-days]').forEach(function (r) {
    if (r.getAttribute('data-days').split(',').indexOf(String(day)) > -1) r.classList.add('is-today');
  });
})();
