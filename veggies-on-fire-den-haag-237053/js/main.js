(function () {
  // Mobiel menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o);
    document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // Tabs (kaart + dranken)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role=tab]');
    function pick(t, focus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on);
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
      t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pick(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); pick(tabs[(i + n + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Vandaag + open/dicht (do t/m za 17:00-22:00)
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours li[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var st = document.querySelector('.open span');
  if (st && d >= 4 && d <= 6) {
    if (h >= 17 && h < 22) st.textContent = 'Vanavond open tot 22:00 uur. Bel 070 361 7406 voor een tafel.';
    else if (h < 17) st.textContent = 'Vandaag open van 17:00 tot 22:00 uur';
  }

  // Formulieren versturen niets
  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
