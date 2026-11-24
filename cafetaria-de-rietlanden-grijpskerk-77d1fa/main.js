(function () {
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

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
      select(next); next.focus(); e.preventDefault();
    });
  });

  // Open of dicht vandaag (tijden uit de menukaart 2026)
  var uren = { 0: [16, 20.5], 1: null, 2: [16, 19.5], 3: [16, 19.5], 4: [11, 19.5], 5: [11, 20.5], 6: [11, 20.5] };
  var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(h) { var u = Math.floor(h), m = Math.round((h - u) * 60); return u + '.' + (m < 10 ? '0' : '') + m; }
  var now = new Date(), d = now.getDay(), t = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var el = document.getElementById('today'), txt = document.getElementById('today-txt');
  var u = uren[d];
  if (u && t >= u[0] && t < u[1]) {
    el.classList.add('open');
    txt.textContent = 'Nu open, vandaag tot ' + fmt(u[1]) + ' uur';
  } else if (u && t < u[0]) {
    txt.textContent = 'Vandaag open van ' + fmt(u[0]) + ' tot ' + fmt(u[1]) + ' uur';
  } else {
    for (var i = 1; i <= 7; i++) {
      var nd = (d + i) % 7;
      if (uren[nd]) { txt.textContent = 'Nu gesloten, ' + (i === 1 ? 'morgen' : namen[nd]) + ' weer open vanaf ' + fmt(uren[nd][0]) + ' uur'; break; }
    }
  }

  // Formulier: voorbeeld, verstuurt niets
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt uw bericht direct bij ons binnen.';
  });
})();
