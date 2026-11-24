(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // menu tabs
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // today in the timetable + open/closed line
  var hours = { 0: [600, 1170], 3: [990, 1170], 4: [660, 1170], 5: [660, 1170], 6: [600, 1170] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hm(m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); }
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.tt-row[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var h = hours[day];
  if (h && mins >= h[0] && mins < h[1]) {
    el.textContent = 'Nu open, tot ' + hm(h[1]);
  } else {
    for (var k = 0; k < 8; k++) {
      var d = (day + k) % 7, hh = hours[d];
      if (hh && (k > 0 || mins < hh[0])) {
        el.textContent = 'Nu gesloten · ' + (k === 0 ? 'vandaag' : k === 1 ? 'morgen' : names[d]) + ' open vanaf ' + hm(hh[0]);
        el.classList.add('is-closed');
        break;
      }
    }
  }

  // demo form: sends nothing
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
