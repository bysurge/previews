(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
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

  // opening status (wo-za 12-20, zo 13-19:30, ma/di dicht)
  var hours = { 0: [13 * 60, 19 * 60 + 30], 3: [720, 1200], 4: [720, 1200], 5: [720, 1200], 6: [720, 1200] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.times tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('status');
  if (el) {
    var h = hours[d];
    if (h && m >= h[0] && m < h[1]) {
      el.textContent = 'Nu open, vandaag tot ' + fmt(h[1]);
      el.classList.add('open');
    } else {
      var txt;
      if (h && m < h[0]) txt = 'Vandaag open vanaf ' + fmt(h[0]);
      else {
        for (var i = 1; i <= 7; i++) {
          var nd = (d + i) % 7;
          if (hours[nd]) { txt = 'Nu gesloten, ' + (i === 1 ? 'morgen' : names[nd]) + ' open vanaf ' + fmt(hours[nd][0]); break; }
        }
      }
      el.textContent = txt;
      el.classList.add('closed');
    }
  }

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
