(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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

  // Vandaag open?
  var hours = { 0: '17.00', 1: null, 2: null, 3: '17.00', 4: '11.30', 5: '11.30', 6: '17.00' };
  var d = new Date().getDay();
  var row = document.querySelector('tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  if (el) {
    if (hours[d]) {
      el.textContent = 'Vandaag open vanaf ' + hours[d] + ' uur. Reserveer online of bel 0348 40 80 77.';
    } else {
      var next = d === 1 ? 'woensdag vanaf 17.00 uur' : 'morgen vanaf 17.00 uur';
      el.textContent = 'Vandaag gesloten, we zijn er weer ' + next + '.';
    }
  }

  // Formulier: voorbeeld
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
