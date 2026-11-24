(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // open today (Amsterdam time)
  var hours = { 0: [16, 20], 1: null, 2: [12, 20], 3: [12, 20], 4: [12, 21], 5: [12, 21], 6: [12, 21] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = parseInt(get('hour'), 10) % 24 + parseInt(get('minute'), 10) / 60;
    var row = document.querySelector('.hours tr[data-day="' + day + '"]');
    if (row) row.classList.add('is-today');
    var el = document.getElementById('today');
    var txt = el.querySelector('.today-txt');
    var h = hours[day];
    if (h && now >= h[0] && now < h[1]) {
      el.classList.add('open');
      txt.textContent = 'Nu open, vandaag tot ' + h[1] + ':00';
    } else {
      el.classList.add('closed');
      if (h && now < h[0]) {
        txt.textContent = 'Vandaag open vanaf ' + h[0] + ':00';
      } else {
        var n = (day + 1) % 7;
        while (!hours[n]) n = (n + 1) % 7;
        txt.textContent = (h ? 'Nu gesloten' : 'Vandaag gesloten') + ', ' + (n === (day + 1) % 7 ? 'morgen' : names[n]) + ' open vanaf ' + hours[n][0] + ':00';
      }
    }
  } catch (e) { /* static text stays */ }

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
