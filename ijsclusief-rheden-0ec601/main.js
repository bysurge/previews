(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

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
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById(a.getAttribute('data-tab')); if (t) select(t); });
  });

  // opening status (Europe/Amsterdam)
  var hours = { 0: [12, 20], 1: null, 2: [12, 18], 3: [12, 18], 4: [12, 18], 5: [12, 20], 6: [12, 20] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var get = function (k) { var p = parts.find(function (x) { return x.type === k; }); return p ? p.value : ''; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = parseInt(get('hour'), 10) + parseInt(get('minute'), 10) / 60;
    var el = document.getElementById('openNow');
    var h = hours[day];
    if (h && now >= h[0] && now < h[1]) {
      el.textContent = 'Nu open, vandaag tot ' + h[1] + ':00';
      el.classList.add('is-open');
    } else if (h && now < h[0]) {
      el.textContent = 'Vandaag open van ' + h[0] + ':00 tot ' + h[1] + ':00';
    } else {
      var n = (day + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
      el.textContent = 'Nu gesloten, ' + (n === (day + 1) % 7 ? 'morgen' : names[n]) + ' weer open vanaf ' + hours[n][0] + ':00';
      el.classList.add('is-closed');
    }
    var row = document.querySelector('#hours tr[data-d="' + day + '"]');
    if (row) row.classList.add('today');
  } catch (e) { /* keep default text */ }

  // demo form
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: dit formulier verstuurt nog niets.';
  });
})();
