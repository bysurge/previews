(function () {
  // Mobile menu
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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

  // Opening hours: today + open-now status
  var hours = { 0: [12, 20], 1: [16, 20], 2: null, 3: [16, 20], 4: [16, 20], 5: [12, 20], 6: [12, 20] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var d = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var status = document.getElementById('status');
  var label = status.querySelector('span');
  var t = hours[d];
  function fmt(x) { return (x < 10 ? '0' : '') + x + '.00'; }
  if (t && h >= t[0] && h < t[1]) {
    status.classList.add('open');
    label.textContent = 'Nu open tot ' + fmt(t[1]) + ' uur, keuken tot 19.30 uur';
  } else if (t && h < t[0]) {
    label.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]) + ' uur';
  } else {
    status.classList.add('closed');
    for (var i = 1; i < 7; i++) {
      var nd = (d + i) % 7;
      if (hours[nd]) {
        label.textContent = (t ? 'Nu gesloten' : 'Vandaag gesloten') + ', ' + (i === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + fmt(hours[nd][0]) + ' uur';
        break;
      }
    }
  }

  // Preview form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
