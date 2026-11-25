(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Menu openen');
      nav.classList.remove('open');
    });
  });

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
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

  // Open / closed now (Europe/Amsterdam): wo t/m zo 15:30-20:30
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var mins = parseInt(get('hour'), 10) % 24 * 60 + parseInt(get('minute'), 10);
    var row = document.querySelector('.hours tr[data-d="' + day + '"]');
    if (row) row.classList.add('today');
    var st = document.getElementById('status');
    var openDay = day === 0 || day >= 3;
    if (openDay && mins >= 930 && mins < 1230) { st.dataset.state = 'open'; st.textContent = 'Nu open, tot 20:30 uur'; }
    else if (openDay && mins < 930) { st.dataset.state = 'dicht'; st.textContent = 'Vandaag open van 15:30 tot 20:30 uur'; }
    else {
      var nd = day === 1 || day === 2 ? 'woensdag' : (day === 6 ? 'zondag' : (day === 0 ? 'woensdag' : 'morgen'));
      st.dataset.state = 'dicht'; st.textContent = 'Nu gesloten, ' + nd + ' weer open vanaf 15:30 uur';
    }
  } catch (e) {}

  // Preview form: never sends anything
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
